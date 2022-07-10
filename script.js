var definitionList = $('dl');


var cards = $('card');
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
} 


definitionList.on('init', function(){
  $('.slick-current', this).addClass('flip');
})

definitionList.slick({
  centerMode: true,
  arrows: false,
  centerPadding: '40px',
  slidesToShow: 4,
  responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        centerPadding: '10px'
      }
  }]
});

definitionList.on('beforeChange',function(){
  $('.slick-slide', this).removeClass('flip')
});

definitionList.on('click', '.slick-current', function(){
  $(this).toggleClass('flip')
});



/* Messaggio cookies */
const $$cookieDisclaimer = document.querySelector(".js-cookie-disclaimer");

if (!localStorage.getItem("cookieDisclaimer")) {
  $$cookieDisclaimer.classList.add("is-active");
}

$$cookieDisclaimer.querySelector("button").addEventListener("click", () => {
  localStorage.setItem("cookieDisclaimer", true);
  $$cookieDisclaimer.classList.remove("is-active");
});