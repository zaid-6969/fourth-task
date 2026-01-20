import React, { useState } from "react";
import KanbanCard from "./KanbanCard";
import { FiPlus } from "react-icons/fi";

const Column = ({
  column,
  index,
  moveCard,
  moveColumn,
  addCard,
  renameCard,
  renameColumn,
  deleteColumn,
  deleteCard,
}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(column.title);
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/column");
    if (!raw) return;
    moveColumn(JSON.parse(raw).index, index);
  };

  const handleCardDrop = (e, toIndex) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/card");
    if (!raw) return;

    const { card, sourceCol, fromIndex } = JSON.parse(raw);
    moveCard(sourceCol, column.id, card, fromIndex, toIndex);
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3
      className="col-title-con"
        draggable
        onDoubleClick={() => setEditing(true)}
        onDragStart={(e) =>
          e.dataTransfer.setData(
            "application/column",
            JSON.stringify({ index }),
          )
        }
      >
        {editing ? (
          <input
            value={title}
            autoFocus
            onBlur={() => {
              renameColumn(column.id, title);
              setEditing(false);
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          title
        )}
        <button
          className="delete-column"
          onClick={() => deleteColumn(column.id)}
        >
          ✕
        </button>
      </h3>

      <div className="column-scroll">
        {column.items.map((item, i) => (
          <div key={item.id} onDrop={(e) => handleCardDrop(e, i)}>
            <KanbanCard
              item={item}
              index={i}
              sourceCol={column.id}
              renameCard={renameCard}
              deleteCard={deleteCard}
            />
          </div>
        ))}

        <div onDrop={(e) => handleCardDrop(e, column.items.length)} />

        {showInput ? (
          <div className="add-card">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button
              onClick={() => {
                addCard(column.id, text);
                setText("");
                setShowInput(false);
              }}
            >
              Add
            </button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)}>
            <FiPlus /> Add card
          </button>
        )}
      </div>
    </div>
  );
};

export default Column;
