var numberofdrumbutton = document.querySelectorAll(".drum").length; 
var innerbutton = this.innerHTML


for(var i = 0; i< numberofdrumbutton; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var innerbutton = this.innerHTML;
  keyPress(innerbutton);
  animationEffect(innerbutton);

});
} 
document.addEventListener("keypress", function(event) {
  keyPress(event.key);
  animationEffect(event.key)
})
function keyPress(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      case "d":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      case "j":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    default:
      break;
  }
}
function animationEffect(currentkey){
  var button = document.querySelector("."+currentkey);
  button.classList.add("pressed");
}