import { InputTable } from "./InputTable";

export const MainTable = ({
    inputText,
    waitingTodo,
    handleInputChange,
    onClickAdd,
    deleteButton,
}) => {
    return (
        <>
            <div className="mainTable">
                <h1>title</h1>
                <hr />
                <ul>
                    {waitingTodo.map((todo, index) => (
                        <li key={index}>
                            <div className="todoList">
                                <div className="changeStateButton">
                                    <input type="radio" />
                                    <h2>{todo}</h2>
                                    <button
                                        className="listDeleteButton"
                                        onClick={() => deleteButton(index)}
                                    >
                                        削除
                                    </button>
                                </div>
                                <p>detail</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <InputTable
                    inputText={inputText}
                    handleInputChange={handleInputChange}
                    onClickAdd={onClickAdd}
                />
            </div>
        </>
    );
};
