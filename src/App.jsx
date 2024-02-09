import "./style.css";

export const App = () => {
    return (
        <div className="todoArea">
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
            <div className="mainTable">
                <h1>title</h1>
                <hr />
                <ul>
                    <li>
                        <div className="todoList">
                            <div className="changeStateButton">
                                <input type="radio" />
                                <h2>list</h2>
                                <button className="listDeleteButton">削除</button>
                            </div>
                            <p>detaildetaildetaildetaildetaildetaildetail</p>
                        </div>
                    </li>
                </ul>
                <div className="addList">
                    <input type="text" placeholder="リストを追加" />
                    <button className="addListButton">+</button>
                </div>
            </div>
        </div>
    );
};
