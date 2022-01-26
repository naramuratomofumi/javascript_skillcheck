function post (){
  const submit = document.getElementById("submit_btn");  //投稿ボタンの要素を取得
  submit.addEventListener("click", (e) => {   //投稿ボタンがクリックされたときにイベント発火
    console.log(document.getElementById("new_article"));  //コンソールにフォームの情報が表示されるようにする
    e.preventDefault();  //preventDefaultでデフォルトの送信を無効化する
  });
};

window.addEventListener('load', post); //「ページが読み込まれたら」を実現するためには、window.addEventListener('load', 【実際に行う処理】);という記述