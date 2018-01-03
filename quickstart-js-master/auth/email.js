
//create firebase reference
var dbRef = new Firebase("https://startup-93c3f.firebaseio.com/");	
var shopRef = dbRef.child('Shopkeeper');


shopRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#body')
    .innerHTML += shopHtmlFromObject(snap.val());
});



function shopHtmlFromObject(shop){
  console.log( shop );
  var html = '';
      html += shop.Body ;
  
  return html;
}
