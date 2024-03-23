export const InputTable = ({ todoText, handleTodoChange, onClickTodoAdd }) => {
  return (
    <>
      <div className="addList">
        <input
          placeholder="リストを追加"
          value={todoText.title || ""}
          onChange={(e) => {
            handleTodoChange(e);
          }}
        />
        <button className="addListButton" onClick={onClickTodoAdd}>
          +
        </button>
      </div>
    </>
  );
};
