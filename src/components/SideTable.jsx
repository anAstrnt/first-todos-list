export const SideTable = () => {
  return (
    <>
      <div className="sideTable">
        <button className="processButton">進行中</button>
        <button className="completeButton">完了</button>
        <p>タイトル</p>
        <ul>
          <li>
            <div className="sideAreaTitle">
              <p>icon</p>
              <p>title</p>
              <button className="titleDeleteButton">×</button>
            </div>
          </li>
        </ul>
        <button className="addTitle">タイトルの追加</button>
      </div>
    </>
  );
};
