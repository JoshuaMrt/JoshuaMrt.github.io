// nav bar
window.onscroll = function() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    }  else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// btn up
 const backToTopButton = document.querySelector("#btbtn");

 window.addEventListener("scroll", scrollFunction);

 function scrollFunction() {
    if (window.pageYOffset > 300) { // show backtotop
        backToTopButton.style.display = "block";
    }
    else { //hide back to top
        backToTopButton.style.display = "none";
    }
 }

 backToTopButton.addEventListener("click", backToTop);

 function backToTop() {
    window.scrollTo(0, 0);
 }
    