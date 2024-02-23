import { useState } from "react";
import { SideTable } from "./components/SideTable";
import { MainTable } from "./components/MainTable";
import "./style.css";

const listObject = { id: 0, title: "listTitle", detail: "detail" };

export const App = () => {
  const [inputText, setInputText] = useState({ id: "", title: "", detail: "" });
  const [waitingTodo, setWaitingTodo] = useState(listObject);

  const handleInputChange = (e, index) => {
    setInputText({
      ...inputText,
      id: index,
      title: e.target.value,
    });
    console.log(index);
  };
  const onClickAdd = () => {
    setWaitingTodo({
      ...waitingTodo,
      ...inputText,
    });
    console.log(inputText);
    // const inputTitle = [...inputText];
    // if (!inputTitle.title) {
    //     return;
    // }
    // const newWaitingTodo = [...waitingTodo, inputTitle];
    // setWaitingTodo(newWaitingTodo);
  };

  const deleteButton = (index) => {
    const newWaitingTodo = [...waitingTodo];
    newWaitingTodo.splice(index, 1);

    setWaitingTodo(newWaitingTodo);
  };

  return (
    <div className="todoArea">
      <SideTable />
      <MainTable
        inputText={inputText}
        waitingTodo={waitingTodo}
        handleInputChange={handleInputChange}
        onClickAdd={onClickAdd}
        deleteButton={deleteButton}
      />
    </div>
  );
};
