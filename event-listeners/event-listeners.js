// YOUR TASK: Add more pictures!
var currentIndex = 0;
var pictures=["spices.jpeg","lights.jpeg","mountain.jpeg","beach.jpeg","fire.jpeg"];
var pics= document.getElementsByTagName("img")[0].addEventListener("click",function(event){
	showNextPicture(event.target);})
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
  //for (var i=0; i<pictures.length;i++){
  	





  

document.getElementById("image").src=pictures[currentIndex]
}