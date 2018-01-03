
var dbRef = new Firebase("https://startup-164c6.firebaseio.com/");
var orderRef = dbRef.child('Orders');// JavaScript Document


	
orderRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#orders')
    .innerHTML += ordersHtmlFromObject(snap.val());
});

var itemRef = dbRef.child()


function ordersHtmlFromObject(orders){
	
	var text = "";
	var i = 0;
	while (i < 3) {
	//var chu = orders.basket.items; 
	//var tiya = chu + "/item" +i;
	//var h = orders.basket.items;
	//var g = h.child('item'+i); 
	//text += '<h3>'+ g + "</h3><br>";
	i++;
	}
	
  console.log( orders );
  var html = '';
      html += '<div class="box">';
	//  html+= '<h2>' + orders.added + '</h2>';
	 // html += '<h2>' + orders.category + '</h2>';
	  //html += '<h2>' + orders.count + '</h2>';
	  //html += '<h2>' + orders.description + '</h2>';
	  //html += '<h2>' + orders.id + '</h2>';
	  //html += '<h2>' + orders.imageUrl + '</h2>';
	  //html += '<h2>' + orders.isAdded + '</h2>';
	  //html += '<h2>' + orders.name + '</h2>';
	  //html += '<h2>' + orders.price + '</h2>';
	  //html += '<h2>' + orders.quantity + '</h2></div>';
	 
	 html+= '<h2>' + orders.basket.total + '</h2>';
	 html+= '<h2>' + orders.id + '</h2>'; 
	 html += '<h3>' + orders.datetime.date + '/' + orders.datetime.month + '/' + orders.datetime.year + '</h3>';
	 html += '<h3>' + orders.datetime.hours + ':' + orders.datetime.minutes + ':' + orders.datetime.seconds + '</h3>';
	 
	 
	 
	 html += '</div>' ;
	 
	 // html += '<h1>'+items.Description+'</h1>';
	  //html += '<h1>'+'Rs.'+items.Price+'/'+items.Unit+'</h1></div>';
  
  return html;
}