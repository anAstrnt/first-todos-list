import { useState } from "react";
import { SideTable } from "./components/SideTable";
import { MainTable } from "./components/MainTable";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [stackTodo, setStackTodo] = useState([]);
  console.log(todoText);
  console.log(stackTodo);

  const handleTodoChange = (e) => {
    const newTodoText = {
      id: crypto.randomUUID(),
      title: e.target.value,
      detail: todoText.detail,
      status: "",
    };
    setTodoText(newTodoText);
  };

  const handleDetailChange = (e, index) => {
    const newDetail = e.target.value;
    stackTodo.forEach((item) => {
      if (item.id === stackTodo[index].id) {
        setTodoText((item.detail = newDetail));
      }
    });
    console.log(stackTodo);
  };

  const onClickTodoAdd = () => {
    if (todoText.title === undefined) {
      return;
    }

    const newTodoText = [...stackTodo, todoText];
    setStackTodo(newTodoText);
    setTodoText([]);
  };

  const todoDeleteButton = (index) => {
    const newStackTodo = [...stackTodo];
    newStackTodo.splice(index, 1);
    setStackTodo(newStackTodo);
  };

  return (
    <div className="todoArea">
      <SideTable />
      <MainTable
        todoText={todoText}
        stackTodo={stackTodo}
        handleTodoChange={handleTodoChange}
        onClickTodoAdd={onClickTodoAdd}
        todoDeleteButton={todoDeleteButton}
        handleDetailChange={handleDetailChange}
      />
    </div>
  );
};
