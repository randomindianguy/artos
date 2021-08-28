var acc = document.getElementsByClassName('accordian');
var i;
var len = acc.length;
for(i = 0; i < len; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })

var btn = document.getElementsByClassName("test-btn");
var slide = document.getElementById("slide");
btn[0].oneClick = function(){
    slide.style.transform = "translateX(0px)";
    for(i = 0; i < 3; i++){
    btn.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].oneClick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i = 0; i < 3; i++){
        btn.classList.remove("active");
        }
        this.classList.add("active");
    }
 btn[2].oneClick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i = 0; i < 3; i++){
        btn.classList.remove("active");
        }
        this.classList.add("active");
    }
}
}