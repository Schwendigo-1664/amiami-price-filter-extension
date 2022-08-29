console.log("test");
var max = 4000;
var min = 0;
//while(true){
  //console.log('changed');
//});
  setTimeout(function(){
    const items = document.getElementsByClassName("main-content");
    const observerOptions = {
      childList: true,
      attributes: true,

      // Omit (or set to false) to observe only changes to the parent node
      subtree: true
    }
    const observer = new MutationObserver(callback);
    observer.observe(items.item(0), observerOptions);
    function callback(mutationList, observer) {
      mutationList.forEach((mutation) => {
        switch(mutation.type) {
          case 'childList':
            /* One or more children have been added to and/or removed
               from the tree.
               (See mutation.addedNodes and mutation.removedNodes.) */
              console.log('changed');
              filter();
            break;
          case 'attributes':
            /* An attribute value changed on the element in
               mutation.target.
               The attribute name is in mutation.attributeName, and
               its previous value is in mutation.oldValue. */
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
        console.log("testen");
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
        console.log("testjp");
      }
      //console.log(collectionJP[i].getElementsByClassName("product_price")[0].textContent.replace(/[,]/ig, ''));
    }
  }
}
//}
