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

    var yourChair=document.querySelector(".yourChair");
    var material=document.querySelector(".board2 .material");
    var transport=document.querySelector(".transport");
    var money=document.querySelector(".board");
    var sum=document.querySelector(".board3");
    var totalSum=document.querySelector(".totalSum");

    var chairInput=document.querySelector("[name*=type]");
    var materialInput=document.querySelector("[name*=material]");
    var checkboxInput=document.querySelector(".checkbox");

    var price1=document.querySelector(".price1");
    var price2=document.querySelector(".price2");
    var price3=document.querySelector(".price3");

    var chairCost=0;
    var materialCost=0;
    var transportCost=0;
    var totalPrice=chairCost+materialCost+transportCost;


    chairInput.addEventListener("change", function(event){

      if(chairInput.value==1 || chairInput.value==2 || chairInput.value==3){
        yourChair.innerHTML=this.options[this.selectedIndex].text;
        chairCost=parseInt(this.options[this.selectedIndex].getAttribute("price"));
        price1.innerHTML=chairCost;

        totalPrice=chairCost+materialCost+transportCost;
        totalSum.innerHTML=totalPrice+"zł";
      }

    });
    materialInput.addEventListener("change", function(event){
      if(materialInput.value==1 || materialInput.value==2){
        material.innerHTML=this.options[this.selectedIndex].text;
        materialCost=parseInt(this.options[this.selectedIndex].getAttribute("price"));
        price2.innerHTML=materialCost;

        totalPrice=chairCost+materialCost+transportCost;
        totalSum.innerHTML=totalPrice+"zł";
      }

    });
    checkboxInput.addEventListener("change", function(event){
      if(checkboxInput.checked){
        transport.innerHTML="Transport";
        transportCost=parseInt(this.getAttribute("price"));
        price3.innerHTML=transportCost;

        var totalPrice=chairCost+materialCost+transportCost;
        totalSum.innerHTML=totalPrice+"zł";
      }
      else{
        transport.innerHTML="";
        transportCost=0;
        price3.innerHTML="";
        totalPrice=chairCost+materialCost+transportCost;
        totalSum.innerHTML=totalPrice+"zł";

      }

    });






});
