var button = document.getElementsByClassName("button");
var slide = document.getElementById("slide");

button[0].onclick = function(){
    slide.style.transform = "translate(0px)";
    for(i=0; i<3;i++){
        button[i].classList.remove("active");
    }
    this.classList.add("active");
}
button[1].onclick = function(){
    slide.style.transform = "translate(-800px)";
    for(i=0; i<3;i++){
        button[i].classList.remove("active");
    }
    this.classList.add("active");
}
button[2].onclick = function(){
    slide.style.transform = "translate(-1600px)";
    for(i=0; i<3;i++){
        button[i].classList.remove("active");
    }
    this.classList.add("active");
}

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

