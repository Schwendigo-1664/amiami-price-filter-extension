console.log("test");
var max = 4000;
var min = 0;

setTimeout(function(){
  const items = document.querySelectorAll("body");
  const observerOptions = {
    childList: true,
    attributes: true,

    // Omit (or set to false) to observe only changes to the parent node
    subtree: true
  }
  const observer = new MutationObserver(callback);
  observer.observe(items[0], observerOptions);
  function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch(mutation.type) {
        case 'childList':
            if(mutation.addedNodes.length > 0){
              filter();
            }
          break;
      }
    });
  }

  filter();
},1000);

function filter(){
  const collectionEN = document.getElementsByClassName("newly-added-items__item");
  if(collectionEN.length > 0){
    for (var i = collectionEN.length - 1; i >= 0; i--) {
      if (collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] < min ||
          collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0] > max) {
        collectionEN[i].parentNode.removeChild(collectionEN[i]);
      }
      //console.log(collectionEN[i].getElementsByClassName("newly-added-items__item__price")[0].outerText.replace(/[jpy,]/ig, '').split(' ')[0]);
    }
  }

  const collectionJP = document.getElementsByClassName("product_box");
  if (collectionJP.length > 0) {
    for (var i = collectionJP.length - 1; i >= 0; i--) {
      if (collectionJP[i].getElementsByClassName("product_price_something")[0].textContent.replace(/[,]/ig, '') < min ||
          collectionJP[i].getElementsByClassName("product_price_something")[0].textContent.replace(/[,]/ig, '') > max) {
        collectionJP[i].parentNode.removeChild(collectionJP[i]);
      }
      //console.log(collectionJP[i].getElementsByClassName("product_price")[0].textContent.replace(/[,]/ig, ''));
    }
  }
}
function setRange(){
  console.log("testjp");
  minPrice = document.getElementById("minPrice");
  maxPrice = document.getElementById("maxPrice");

  console.log(minPrice);
}
function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  });
}

document.getElementById('bSubmit').addEventListener('click', hello);
//}
