function count (){
  const articleText = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {   //キーボード操作があった場合に、イベントが発火。そのときに用いるイベントハンドラーがkeyup
    console.log(articleText.value.length);
  })
}
 window.addEventListener('load', count);