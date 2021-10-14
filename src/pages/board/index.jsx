import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";

const items = [
  { id: uuidv4(), content: "First Task" },
  { id: uuidv4(), content: "Second Task" },
];

const columnsTasks = [
  {
    [uuidv4()]: {
      name: "Todo",
      items: [],
    },
  },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState(columnsTasks);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <DragDropContext onDropEnd={(result) => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id}>
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
                      minHeight: 500,
                    }}
                  >
                    {column.items.map((item, index) => {
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
                                  padding: 16,
                                  margin: "0 0 8px 0",
                                  minHeight: "50px",
                                  backgroundColor: snapshot.isDragging
                                    ? "#5CC4FF"
                                    : "#54A0C9",
                                  color: "white",
                                  "&:hover": {
                                    backgroundColor: "#54A0C9",
                                    opacity: [0.9, 0.8, 0.7],
                                  },
                                  ...provided.draggableProps.style,
                                }}
                              ></div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </Box>
  );
};
export default KanbanBoard;
