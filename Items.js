//create firebase reference
var dbRef = new Firebase("https://startup-164c6.firebaseio.com/");
var contactsRef = dbRef.child('Categories');
//load older conatcts as well as any newly added one...

var tempo = '';

contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#contactz')
    .innerHTML += contactHtmlFromObject(snap.val());
});

	var cat = $('#contactz').find(':selected').val();
	
	var car = document.querySelector('#contactz').value;
	
	temp.valueOf(cat);
	tempo = cat;
	
	var t = car;

var catz = "Categories/"+car+"/Items";


var itemRef = dbRef.child(catz);


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
      alert('Please fill atlease name or email!');
    }
  }, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
      html += '<option value = "'+contact.id+'"'+' selected = "selected">'+contact.name+'</option>';
  
  return html;
}// JavaScript Document

