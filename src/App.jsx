import { useState } from "react";
import { SideTable } from "./components/SideTable";
import { MainTable } from "./components/MainTable";
import "./style.css";

export const App = () => {
    const [inputText, setInputText] = useState("");
    const [waitingTodo, setWaitingTodo] = useState(["todo1", "todo2"]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const onClickAdd = () => {
        if (inputText === "") {
            return;
        }
        const newWaitingTodo = [...waitingTodo, inputText];
        setWaitingTodo(newWaitingTodo);
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
