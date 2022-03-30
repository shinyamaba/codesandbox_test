import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、フィールドを初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//----------------------------------------

// 未完了リストから指定の要素を削除する
const deleteFromImcmpleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  //botton完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcmpleteList(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;
    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化する
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button削除
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcmpleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストにdivを追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
