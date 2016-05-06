document.addEventListener("DOMContentLoaded", function() {

    var arrowLeft = document.querySelector(".arrow");
    var arrowRight = document.querySelector(".arrow.arrow2");
    var pictures = document.getElementsByClassName("img");
    var currentVisiblePicture = 0;

    arrowLeft.addEventListener("click", function(event) {
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture--;
        if (currentVisiblePicture < 0) {
            currentVisiblePicture = pictures.length - 1;
        }
        pictures[currentVisiblePicture].classList.add("visible");
    });

    arrowRight.addEventListener("click", function(event) {
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture++;
        if (currentVisiblePicture > (pictures.length - 1)) {
            currentVisiblePicture = 0;
        }
        pictures[currentVisiblePicture].classList.add("visible");
    });

    var box = document.querySelectorAll(".box");
    var transparentBlock = document.querySelectorAll("h3");

    for (var i = 0; i < 2; i++) {
        box[i].addEventListener("mouseover", function(event) {
            this.firstElementChild.classList.add("unvisible");
        });
    }
    for (var i = 0; i < 2; i++) {
        box[i].addEventListener("mouseout", function(event) {
            this.firstElementChild.classList.remove("unvisible");
        });
    }

    var yourChair=document.querySelector(".board2");
    var money=document.querySelector(".board");
    var sum=document.querySelector(".board3");

    var chairInput=document.querySelector("[name*=type]");
    var chairType=chairInput.value;

    chairInput.addEventListener("change", function(event){
      yourChair.innerHTML="";
      if(chairInput.value==1 || chairInput.value==2 || chairInput.value==3){
        yourChair.innerHTML=chairInput.innerHTML;
      }


    });





});
