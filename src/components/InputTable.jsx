export const InputTable = ({ inputText, handleInputChange, onClickAdd, waitingTodo }) => {
  return (
    <>
      {waitingTodo.map((todo, index) => (
        <div key={index} className="addList">
          <input
            type="text"
            placeholder="リストを追加"
            value={inputText.title}
            onChange={(e) => {
              handleInputChange(e, index);
            }}
          />
          <button className="addListButton" onClick={onClickAdd}>
            +
          </button>
        </div>
      ))}
    </>
  );
};
