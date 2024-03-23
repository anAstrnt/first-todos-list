import { InputTable } from "./InputTable";

export const MainTable = ({
  todoText,
  stackTodo,
  handleTodoChange,
  onClickTodoAdd,
  todoDeleteButton,
  handleDetailChange,
}) => {
  return (
    <>
      <div className="mainTable">
        <h1>title</h1>
        <hr />
        <ul>
          {stackTodo.map((todo, index) => (
            <li key={index}>
              <div className="todoList">
                <div className="changeStateButton">
                  <input type="checkbox" />
                  <h2>{todo.title}</h2>
                  <button
                    className="listDeleteButton"
                    onClick={() => todoDeleteButton(index)}
                  >
                    削除
                  </button>
                </div>
                <textarea
                  className="detail"
                  placeholder="詳細を入力"
                  value={todo.detail || ""}
                  onChange={(e) => {
                    handleDetailChange(e, index);
                  }}
                ></textarea>
              </div>
            </li>
          ))}
        </ul>

        <InputTable
          todoText={todoText}
          handleTodoChange={handleTodoChange}
          onClickTodoAdd={onClickTodoAdd}
        />
      </div>
    </>
  );
};
