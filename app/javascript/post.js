function post (){
  const submit = document.getElementById("submit_btn");  //投稿ボタンの要素を取得
  submit.addEventListener("click", (e) => {              //投稿ボタンがクリックされたときにイベント発火
    const formData = new FormData(document.getElementById("new_article"));  //送信するフォームのデータを取得し、Ajaxで送信できる形へと整形
    const XHR = new XMLHttpRequest();                    //Ajaxに利用するオブジェクトを生成
    XHR.open("POST", "/articles", true);                 //Ajaxに関する情報を初期化し、URIを設定
    XHR.responseType = "json";                           //レスポンスにJSONを指定
    XHR.send(formData);                                  //Ajaxで送信
    XHR.onload = () => {                                 //onloadプロパティとは、リクエストの送信が成功したときに呼び出されるプロパティ
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const item = XHR.response.article;                 //articleはレスポンスに含まれるデータのうち、コントローラー側で指定したjson形式のデータ
      const contentsArea = document.getElementById("contents_area")   //今回投稿したデータを追加する要素を取得。今回追加する要素の親要素にあたる
      const articleText = document.getElementById("article_text")     //フォーム投稿の際にテキストを入力したテキストエリアを取得
      const html = `
        <div class="article">
          ${item.text}                                     
        </div>`;
      contentsArea.insertAdjacentHTML("afterbegin", html);  //親要素に直前で定義した要素を追加。afterbeginは親要素内の最上部に追加することを意味している。
      articleText.value = "";                            //フォームの入力欄を空にする。
    };
    e.preventDefault();                                  //preventDefaultでデフォルトの送信を無効化する
  });
};

window.addEventListener('load', post); //「ページが読み込まれたら」を実現するためには、window.addEventListener('load', 【実際に行う処理】);という記述