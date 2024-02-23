export const InputTable = ({ inputText, handleInputChange, onClickAdd }) => {
  return (
    <>
      <div className="addList">
        <input
          type="text"
          placeholder="リストを追加"
          value={inputText.title}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button className="addListButton" onClick={onClickAdd}>
          +
        </button>
      </div>
    </>
  );
};
