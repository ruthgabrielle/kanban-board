import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { loadLists } from "../../services/api";
import InputContainer from "../input/inputContainer";
import {
  BoardContainer,
  Container,
  Content,
  Label,
  ListContainer,
} from "./styles";
import CardsApi from "../../services/cardsApi";
import { v4 as uuid } from "uuid";
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

  const addMoreCard = (content, cardId) => {
    const newCardId = uuid();

    console.log(content, cardId);
    console.log(newCardId);

    const newCard = {
      id: newCardId,
      content,
    };

    const list = columns.map((column) => {
      return column.cards;
    });

    const card = list.map((item) => {
      console.log(item.content);
      return item.content;
    });

    console.log(list, card);

    const newCardValue = [...card, newCard];

    const newState = {
      ...card,
      [cardId]: newCardValue,
    };

    console.log(newState);
    setColumns(newState);
  };

  return (
    <CardsApi.Provider value={{ addMoreCard }}>
      <Container>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <BoardContainer>
                <div style={{ margin: 8 }}>
                  <header>
                    <h2>{column.title}</h2>
                  </header>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided) => {
                      return (
                        <ListContainer
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {column.cards.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided) => {
                                  return (
                                    <Content
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.labels.map((label) => (
                                        <Label key={label} color={label} />
                                      ))}
                                      <div>
                                        <p> {item.content} </p>
                                      </div>
                                    </Content>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                          <InputContainer columnId={columnId} />
                        </ListContainer>
                      );
                    }}
                  </Droppable>
                  <br />
                </div>
              </BoardContainer>
            );
          })}
        </DragDropContext>
      </Container>
    </CardsApi.Provider>
  );
}
