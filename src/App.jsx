import { useState } from "react";
import { SideTable } from "./components/SideTable";
import { MainTable } from "./components/MainTable";
import "./style.css";

export const App = () => {
  const [inputText, setInputText] = useState([]);
  const [waitingTodo, setWaitingTodo] = useState([]);

  const handleInputChange = (e) => {
    const newInputText = {
      id: crypto.randomUUID(),
      title: e.target.value,
      detail: "",
    };
    setInputText(newInputText);
  };

  const onClickAdd = () => {
    if (inputText.title === undefined) {
      return;
    }

    const newInputText = [...waitingTodo, inputText];
    setWaitingTodo(newInputText);
    setInputText([]);
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
