let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

arrowLeft.onclick = function(){
  document.getElementById("software-scroll").scrollLeft -= 320;
};

arrowRight.onclick = function(){
  document.getElementById("software-scroll").scrollLeft += 320;
};
