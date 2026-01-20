import React, { useState } from "react";

const KanbanCard = ({ item, sourceCol, index, renameCard }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.content);

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData(
      "application/card",
      JSON.stringify({ card: item, sourceCol, fromIndex: index })
    );
  };

  return (
    <div
      className="kanban-card"
      draggable
      onDragStart={handleDragStart}
      onDoubleClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          value={text}
          autoFocus
          onBlur={() => {
            if (text.trim()) {
              renameCard(sourceCol, item.id, text);
            }
            setEditing(false);
          }}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.target.blur();
            }
          }}
        />
      ) : (
        <span>{item.content}</span>
      )}

      <button
        className="delete-card"
        onClick={() =>
          document.dispatchEvent(
            new CustomEvent("delete-card", {
              detail: { cardId: item.id, colId: sourceCol },
            })
          )
        }
      >
        ✕
      </button>
    </div>
  );
};

export default KanbanCard;
