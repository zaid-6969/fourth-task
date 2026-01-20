import React, { useState } from "react";
import KanbanCard from "./KanbanCard";
import { FiPlus } from "react-icons/fi";

const Column = ({
  column,
  index,
  moveCard,
  moveColumn,
  addCard,
  renameColumn,
  renameCard,
  deleteColumn,
}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(column.title);
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();

    const cardRaw = e.dataTransfer.getData("application/card");
    if (cardRaw) {
      const { card, sourceCol, fromIndex } = JSON.parse(cardRaw);
      moveCard(sourceCol, column.id, card, fromIndex, column.items.length);
      return;
    }

    const columnRaw = e.dataTransfer.getData("application/column");
    if (columnRaw) {
      const { index: from } = JSON.parse(columnRaw);
      moveColumn(from, index);
    }
  };

  const handleCardDrop = (e, toIndex) => {
    e.preventDefault();
    e.stopPropagation(); // 🔥 THIS LINE FIXES DUPLICATION

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
        className="column-header"
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
          <div
            key={item.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleCardDrop(e, i)}
          >
            <KanbanCard
              item={item}
              sourceCol={column.id}
              index={i}
              renameCard={renameCard} // ✅ PASS DOWN
            />
          </div>
        ))}

        {/* DROP AT END */}
        <div
          className="drop-end"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleCardDrop(e, column.items.length)}
        />

        {showInput ? (
          <div className="add-card">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button
              onClick={() => {
                if (!text.trim()) return;
                addCard(column.id, text);
                setText("");
                setShowInput(false);
              }}
            >
              Add
            </button>
          </div>
        ) : (
          <button className="add-card-btn" onClick={() => setShowInput(true)}>
            <FiPlus /> Add card
          </button>
        )}
      </div>
    </div>
  );
};

export default Column;
