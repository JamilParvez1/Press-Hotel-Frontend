
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 8000,
  cycle: true
})

$( "#book-now-btn" ).click(function(e) {
  e.preventDefault();
  $(this).parent(".form-group").parent("form").parent("#book-now-outerwrap").animate({right: '0px'});
});

$( ".cross a" ).click(function(e) {
  e.preventDefault();
  $(this).parent(".cross").parent(".form-group").parent("form").parent("#book-now-outerwrap").animate({right: '-357px'});
});

function get_booking(){
  var arrival_date = document.getElementById('arrival_date');
  var departure_date = document.getElementById('departure_date');
  var adults = document.getElementById('adults');
  var childs = document.getElementById('childs');

  if(notEmpty1(arrival_date, "Please select arrival date",'arv_date_err')){
    if(notEmpty1(departure_date, "Please select arrival date",'dep_date_err')){
      if ( madeSelection(adults, "Please choose number of Adults", "adults_err") ){
        if ( madeSelection(childs, "Please choose number of Childs", "childs_err") ){
          console.log( "ALL OK" );
          return true;
        }
      }
    }
  }
  return false;
}

function notEmpty1(elem, helperMsg,err){
	if(elem.value.length == 0){
		document.getElementById(err).style.display = 'inline';
		document.getElementById(err).innerHTML = helperMsg;
		elem.focus(); // set the focus to this input
		return false;
	}
	document.getElementById(err).style.display = 'none';
	document.getElementById(err).innerHTML = '';
	return true;
}

function madeSelection(elem, helperMsg, err){
	if(elem.value == ""){
    document.getElementById(err).style.display = 'inline';
		document.getElementById(err).innerHTML = helperMsg;
		elem.focus();
		return false;
	}else{
    document.getElementById(err).style.display = 'none';
    document.getElementById(err).innerHTML = '';
		return true;
	}
}
