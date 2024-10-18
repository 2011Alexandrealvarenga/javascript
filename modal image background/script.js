var modal = document.getElementById("modal_Home");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onload = function (event){
  setTimeout(() => {
    modal.style.display = "block";
  }, 2000);
} 
