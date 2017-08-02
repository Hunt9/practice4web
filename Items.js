	//create firebase reference
var dbRef = new Firebase("https://startup-164c6.firebaseio.com/");
var contactsRef = dbRef.child('Categories');
//load older conatcts as well as any newly added one...


contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#contactz')
    .innerHTML += contactHtmlFromObject(snap.val());
});


	
var catz = "Categories/-KgZ6K-QqK2aAYkOy0Pd/Items";


var itemRef = dbRef.child(catz);


itemRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#contacts')
    .innerHTML += itemHtmlFromObject(snap.val());
});



//save contact
document
  .querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#description').value != '' ){
      itemRef
        .push({
          Name: document.querySelector('#name').value,
          Description: document.querySelector('#description').value,
          Unit: document.querySelector('#unit').value,
          Price: document.querySelector('#price').value
          
        })
        contactForm.reset();
    } else {
      alert('Please fill name,description,unit & price!');
    }
  }, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
      html += '<option value = "'+contact.id+'"'+' selected = "selected">'+contact.name+'</option>';
  
  return html;
}// JavaScript Document

function itemHtmlFromObject(items){
  console.log( items );
  var html = '';
      html += '<div class="box"><h2>'+items.Name+'</h2>';
	  html += '<h1>'+items.Description+'</h1>';
	  html += '<h1>'+'Rs.'+items.Price+'/'+items.Unit+'</h1></div>';
  
  return html;
}

