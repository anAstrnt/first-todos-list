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
                  <input type="checkbox" />
                  <h2>{todo.title}</h2>
                  <button
                    className="listDeleteButton"
                    onClick={() => deleteButton(index)}
                  >
                    削除
                  </button>
                </div>
                <p>{todo.detail}</p>
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
