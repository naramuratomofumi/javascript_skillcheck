function count (){
  const articleText = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {   //キーボード操作があった場合に、イベントが発火。そのときに用いるイベントハンドラーがkeyup
    const countValue = articleText.value.length;  //入力されている文字数をカウントした結果を取得
    const charNum = document.getElementById("char_num");  //実際に文字を置き換えたい部分の要素を取得。「◯文字」と表示される要素には、char_numというidが付与されているため、getElementByIdで取得。
    charNum.innerHTML = `${countValue}文字`        //取得した要素に対して、${countVal}文字を、innerHTMLを用いて置き換え。
  })
}
 window.addEventListener('load', count);