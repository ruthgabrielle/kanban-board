import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { loadLists } from "../../services/api";
import { Label, Button } from "./styles";

const lists = loadLists();

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.cards];
    const destItems = [...destColumn.cards];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        cards: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        cards: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.cards];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        cards: copiedItems,
      },
    });
  }
};

export default function Board() {
  const [columns, setColumns] = useState(lists);

  return (
    <div style={{
      display: 'flex',
      padding: '30px 0',
      justifyContent: 'center',
      height: '100%'
    }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div style={{
              padding: ' 0 15px',
              height: '100%',
              flex: '0 0 320px'
            }}
            >
              <p style={{
                fontWeight: '500',
                lineHeight: ' 20px'
              }}>{column.title}</p>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.cards.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      position: 'relative',
                                      padding: '15px',
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      boxShadow: '0 1px 4px 0 rgba(192, 208, 230, 0.8)',
                                      borderTop: ' 20px solid rgba(230, 236, 245, 0.4)',
                                      backgroundColor: snapshot.isDragging
                                        ? "#22465a"
                                        : "#4d90b8",
                                      color: "white",
                                      "&:hover": {
                                        backgroundColor: "#54A0C9",
                                        opacity: [0.9, 0.8, 0.7],
                                      },
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.labels.map(label => <Label key={label} color={label} />)}
                                    <br />
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
                <br />
                <Button >+ Adicionar novo cartão </Button>
              </div>
            </div >
          );
        })}
      </DragDropContext >
      <Button >+ Adicionar nova lista </Button>
    </div >
  );
};
