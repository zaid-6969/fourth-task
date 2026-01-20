import React, { useState, useEffect } from "react";
import Column from "./Column";
import "../styles/kanbaborad.scss";
import { FiPlus } from "react-icons/fi";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
      items: [
        { id: "1", content: "Design UI" },
        { id: "2", content: "Create components" },
      ],
    },
    {
      id: "progress",
      title: "In Progress",
      items: [{ id: "3", content: "Build Kanban logic" }],
    },
    {
      id: "done",
      title: "Done",
      items: [{ id: "4", content: "Project setup" }],
    },
  ]);

  const [showColumnInput, setShowColumnInput] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  /* ➕ ADD CARD */
  const addCard = (columnId, content) => {
    if (!content.trim()) return;

    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              items: [...col.items, { id: Date.now().toString(), content }],
            }
          : col,
      ),
    );
  };

  /* ✏️ RENAME COLUMN */
  const renameColumn = (columnId, newTitle) => {
    setColumns((prev) =>
      prev.map((c) => (c.id === columnId ? { ...c, title: newTitle } : c)),
    );
  };

  const renameCard = (columnId, cardId, newContent) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              items: col.items.map((card) =>
                card.id === cardId ? { ...card, content: newContent } : card,
              ),
            }
          : col,
      ),
    );
  };

  /* 🗑 DELETE COLUMN */
  const deleteColumn = (columnId) => {
    setColumns((prev) => prev.filter((c) => c.id !== columnId));
  };

  /* 🟦 MOVE / REORDER CARD */
  const moveCard = (fromCol, toCol, card, fromIndex, toIndex) => {
    setColumns((prev) => {
      const updated = structuredClone(prev);

      const source = updated.find((c) => c.id === fromCol);
      const target = updated.find((c) => c.id === toCol);

      source.items.splice(fromIndex, 1);
      target.items.splice(toIndex, 0, card);

      return updated;
    });
  };

  /* 🟨 MOVE COLUMN */
  const moveColumn = (fromIndex, toIndex) => {
    setColumns((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });
  };

  /* 🗑 DELETE CARD */
  useEffect(() => {
    const handler = (e) => {
      const { cardId, colId } = e.detail;
      setColumns((prev) =>
        prev.map((c) =>
          c.id === colId
            ? { ...c, items: c.items.filter((i) => i.id !== cardId) }
            : c,
        ),
      );
    };

    document.addEventListener("delete-card", handler);
    return () => document.removeEventListener("delete-card", handler);
  }, []);

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
          renameColumn={renameColumn}
          renameCard={renameCard} 
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
              placeholder="Enter column title"
              autoFocus
            />
            <div className="actions">
              <button
                onClick={() => {
                  if (!columnTitle.trim()) return;
                  setColumns((p) => [
                    ...p,
                    {
                      id: Date.now().toString(),
                      title: columnTitle,
                      items: [],
                    },
                  ]);
                  setColumnTitle("");
                  setShowColumnInput(false);
                }}
              >
                Add column
              </button>
              <button onClick={() => setShowColumnInput(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <button
            className="add-column-btn"
            onClick={() => setShowColumnInput(true)}
          >
            <FiPlus /> Add column
          </button>
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
