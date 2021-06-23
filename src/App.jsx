import "./css/App.css";
import Topbar from "./components/Topbar";
import Todo from "./components/TodoItem";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
export default class App extends Component {
  state = {
    todoList: [
      {
        title: "Work on Design Systems",
        isComplete: false,
        id: nanoid(),
      },
      {
        title: "Handoff with Developers",
        isComplete: false,
        id: nanoid(),
      },
      {
        title: "Workout Full Body",
        isComplete: true,
        id: nanoid(),
      },
    ],
  };
  render() {
    return (
      <PageContainer>
        <Topbar />
        <TodoList>
          {this.state.todoList.map((todo, i) => (
            <Todo
              key={todo.id}
              todo={todo}
              isLastItem={i === this.state.todoList.length - 1}
            />
          ))}
        </TodoList>
        <ButtonLarge>ADD TASK</ButtonLarge>
      </PageContainer>
    );
  }
}

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: var(--body-whitespace);
  padding-right: var(--body-whitespace);

  margin-top: 15vw;
`;

const ButtonLarge = styled.a`
  margin: 0 var(--body-whitespace) 0 var(--body-whitespace);

  width: calc(100% - (var(--body-whitespace) * 2));

  font-size: 3rem;

  margin-top: auto;

  background-color: var(--button-bg-color);
  color: var(--button-text-color);

  font-family: var(--font-primary);
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.2rem;
`;

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding-bottom: var(--body-whitespace);
`;
