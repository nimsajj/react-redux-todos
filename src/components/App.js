import React from "react";
import AddTodo from "../features/todos/AddTodo";
import VisibleTodoList from "../features/todos/VisibleTodoList";
import Footer from "../features/filters/Footer";

import Container from "../ui/Container";
import Card from "../ui/Card";

import taskImg from "../assets/tasks.png";

const App = () => (
  <Container>
    <Card img={<img src={taskImg} className="card-img-top" alt="Todo list" />}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Card>
  </Container>
);

export default App;
