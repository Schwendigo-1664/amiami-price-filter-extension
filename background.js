function reddenPage() {
  const collectionEN = document.getElementsByClassName("newly-added-items__item");
  if(collectionEN.length > 0){
    for (var i = collectionEN.length - 1; i >= 0; i--) {
      if (collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] < 4500 ||
          collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] > 9000) {
        collectionEN[i].parentNode.removeChild(collection[i]);
      }
      //console.log(collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0]);
    }
  }

  const collectionJP = document.getElementsByClassName("product_box");
  if (collectionJP.length > 0) {
    for (var i = collectionJP.length - 1; i >= 0; i--) {
      if (collectionJP[i].getElementsByClassName("product_price_something")[0].textContent.replace(/[,]/ig, '') < 4500 ||
          collectionJP[i].getElementsByClassName("product_price_something")[0].textContent.replace(/[,]/ig, '') > 9000) {
        collectionJP[i].parentNode.removeChild(collectionJP[i]);
      }
      //console.log(collectionJP[i].getElementsByClassName("product_price")[0].textContent.replace(/[,]/ig, ''));
    }
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});

document.getElementById("bSubmit").addEventListener("click", testHandler);

function testHandler(){
  console.log("hello");
}
