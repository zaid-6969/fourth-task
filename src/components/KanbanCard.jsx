import React, { useState } from "react";

const KanbanCard = ({ item, sourceCol, index, renameCard, deleteCard }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.content);

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData(
      "application/card",
      JSON.stringify({
        card: item,
        sourceCol,
        fromIndex: index,
      }),
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
            renameCard(sourceCol, item.id, text);
            setEditing(false);
          }}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        item.content
      )}
      <button
        className="delete-card"
        onClick={() => deleteCard(sourceCol, item.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default KanbanCard;
