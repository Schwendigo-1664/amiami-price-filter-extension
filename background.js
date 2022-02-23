function reddenPage() {
  const collection = document.getElementsByClassName("newly-added-items__item");
  for (var i = collection.length - 1; i >= 0; i--) {
    //if (collection[i].getElementsByClassName("newly-added-items__item__price")[0].value.trim() == "7,300") {
      //collection[i].firstChild.style.color = "green";
    //}
    if (collection[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] < 4500 ||
        collection[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] > 9000) {
      collection[i].parentNode.removeChild(collection[i]);
      //console.log(collection[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0]);
    }

  }
  //document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});
