import React, { useEffect, useState } from "react";
import Column from "./Column";
import "../styles/kanbaborad.scss";
import { FiPlus } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { setColumns } from "../store/kanbanSlice";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const KanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.kanban.columns);

  const [showColumnInput, setShowColumnInput] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  /* 🔥 FIREBASE REALTIME LOAD */
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "boards", "main"), (snap) => {
      if (snap.exists()) {
        dispatch(setColumns(snap.data().columns));
      }
    });

    return () => unsub();
  }, [dispatch]);

  /* 🔥 FIREBASE SAVE ON CHANGE */
  useEffect(() => {
    if (!columns.length) return;
    setDoc(doc(db, "boards", "main"), { columns });
  }, [columns]);

  /* ➕ ADD CARD */
  const addCard = (columnId, content) => {
    dispatch(
      setColumns(
        columns.map((c) =>
          c.id === columnId
            ? {
                ...c,
                items: [...c.items, { id: Date.now().toString(), content }],
              }
            : c
        )
      )
    );
  };

  /* ✏️ RENAME CARD */
  const renameCard = (columnId, cardId, text) => {
    dispatch(
      setColumns(
        columns.map((c) =>
          c.id === columnId
            ? {
                ...c,
                items: c.items.map((i) =>
                  i.id === cardId ? { ...i, content: text } : i
                ),
              }
            : c
        )
      )
    );
  };

  /* ✏️ RENAME COLUMN */
  const renameColumn = (columnId, title) => {
    dispatch(
      setColumns(
        columns.map((c) =>
          c.id === columnId ? { ...c, title } : c
        )
      )
    );
  };

  /* 🗑 DELETE COLUMN */
  const deleteColumn = (columnId) => {
    dispatch(setColumns(columns.filter((c) => c.id !== columnId)));
  };

  /* 🗑 DELETE CARD */
  useEffect(() => {
    const handler = (e) => {
      const { colId, cardId } = e.detail;
      dispatch(
        setColumns(
          columns.map((c) =>
            c.id === colId
              ? { ...c, items: c.items.filter((i) => i.id !== cardId) }
              : c
          )
        )
      );
    };

    document.addEventListener("delete-card", handler);
    return () => document.removeEventListener("delete-card", handler);
  }, [columns, dispatch]);

  /* 🟦 MOVE / REORDER CARD */
  const moveCard = (fromCol, toCol, card, fromIndex, toIndex) => {
    const updated = structuredClone(columns);
    const source = updated.find((c) => c.id === fromCol);
    const target = updated.find((c) => c.id === toCol);

    source.items.splice(fromIndex, 1);
    target.items.splice(toIndex, 0, card);

    dispatch(setColumns(updated));
  };

  /* 🟨 MOVE COLUMN */
  const moveColumn = (from, to) => {
    const updated = [...columns];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    dispatch(setColumns(updated));
  };

  return (
    <div className="kanban-board">
      {columns.map((col, index) => (
        <Column
          key={col.id}
          column={col}
          index={index}
          moveCard={moveCard}
          moveColumn={moveColumn}
          addCard={addCard}
          renameCard={renameCard}
          renameColumn={renameColumn}
          deleteColumn={deleteColumn}
        />
      ))}

      {/* ➕ ADD COLUMN */}
      <div className="add-column">
        {showColumnInput ? (
          <div className="add-column-form">
            <input
              value={columnTitle}
              onChange={(e) => setColumnTitle(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => {
                dispatch(
                  setColumns([
                    ...columns,
                    {
                      id: Date.now().toString(),
                      title: columnTitle,
                      items: [],
                    },
                  ])
                );
                setColumnTitle("");
                setShowColumnInput(false);
              }}
            >
              Add column
            </button>
          </div>
        ) : (
          <button onClick={() => setShowColumnInput(true)}>
            <FiPlus /> Add column
          </button>
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
