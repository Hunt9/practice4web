//create firebase reference
var dbRef = new Firebase("https://startup-164c6.firebaseio.com/");
var shopkeeperRef = dbRef.child('Shopkeepers/IFQKXsuCCdagfYClc9IorIdncfB3');
//load older conatcts as well as any newly added one...

function handleFileSelect(event) {
	$(".upload-group").show();
	selectedFile = event.target.files[0];
};




shopkeeperRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#shops')
    .innerHTML += shopsHtmlFromObject(snap.val());
});




//save contact
document
  .querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#sName').value != '' 
          || document.querySelector('#shopName').value != ''|| document.querySelector('#sContact').value != ''|| document.querySelector('#sDescription').value != ''|| document.querySelector('#sCNIC').value != ''|| document.querySelector('#sNTN').value != ''|| document.querySelector('#sBank').value != ''|| document.querySelector('#sBankBranch').value != ''|| document.querySelector('#sBranchCode').value != ''|| document.querySelector('#sAccountTitle').value != ''|| document.querySelector('#sBankAccountNumber').value != ''|| document.querySelector('#sAccountNature').value != ''|| document.querySelector('#sCurrency').value != '' || document.querySelector('#sEmail').value != '' || document.querySelector('#sPassword').value !=''){
      shopkeeperRef
        .push({
          sName: document.querySelector('#sName').value,
          shopName : document.querySelector('#shopName').value,
		  sContact : document.querySelector('#sContact').value,
		  sDescription : document.querySelector('#sDescription').value,
		  sCNIC : document.querySelector('#sCNIC').value,
		  sNTN :document.querySelector('#sNTN').value,
		  sBank : document.querySelector('#sBank').value,
		  sBankBranch : document.querySelector('#sBankBranch').value,
		  sBranchCode :document.querySelector('#sBranchCode').value,
		  sAccountTitle : document.querySelector('#sAccountTitle').value,
		  sBankAccountNumber : document.querySelector('#sBankAccountNumber').value,
		  sAccountNature : document.querySelector('#sAccountNature').value,
		  sCurrency : document.querySelector('#sCurrency').value,
		  sEmail : document.querySelector('#sEmail').value,
		  sPassword : document.querySelector('#sPassword').value
		  
        })
			  firebase.auth().createUserWithEmailAndPassword(sEmail, sPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

        contactForm.reset();
    } else {
      alert('Please fill all Fields');
    }
  }, false);


function shopsHtmlFromObject(shop){
  console.log( shop );
  var html = '';
      html += '<div class="box"><h2>'+shop.sName+'</h2>';
	  html += '<h1>Shop Name            : 	'+shop.shopName+'</h1>';
	  html += '<h1>Contact #            : 	'+shop.sContact+'</h1>';
	  html += '<h1>Business Description : 	'+shop.sDescription+'</h1>';
	  html += '<h1>CNIC #               : 	'+shop.sCNIC+'</h1>';
	  html += '<h1>NTN #                :	'+shop.sNTN+'</h1>';
	  html += '<h1>Bank Name            : 	'+shop.sBank+'</h1>';
	  html += '<h1>Bank Branch          : 	'+shop.sBankBranch+'</h1>';
	  html += '<h1>Branch Code          : 	'+shop.sBranchCode+'</h1>';
	  html += '<h1>Bank Account Title   : 	'+shop.sAccountTitle+'</h1>';
	  html += '<h1>Bank Account Number  : 	'+shop.sBankAccountNumber+'</h1>';
	  html += '<h1>Bank Account Nature  : 	'+shop.sAccountNature+'</h1>';
	  html += '<h1>Currency             : 	'+shop.sCurrency+'</h1>';
	  html += '<h1>Email Address        : 	'+shop.sEmail+'</h1>';
	  html += '<h1>Password             : 	'+shop.sPassword+'</h1>';
	  
	  html +='</div>';
  return html;
}

 document.querySelector('.addValue').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var email = document.querySelector('#sEmail').value;
      var password = document.querySelector('#sPassword').value
//      var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  //    var auth = firebase.auth();
    //  var currentUser = auth.currentUser;
	  
      
      // Step 2
      //  Get a credential with firebase.auth.emailAuthProvider.credential(emailInput.value, passwordInput.value)
      //  If there is no current user, log in with auth.signInWithCredential(credential)
      //  If there is a current user an it's anonymous, atttempt to link the new user with firebase.auth().currentUser.link(credential) 
      //  The user link will fail if the user has already been created, so catch the error and sign in.
    });
