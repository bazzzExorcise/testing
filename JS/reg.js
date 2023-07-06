// opening animation
const openAnimation = () => {
  $(".cp").toggleClass("w-0");
}

//ready docs
$(document).ready(function () {
  openAnimation()
});

// animation change page
$(".reg").click(function (e) { 
  e.preventDefault();
  $(".cp").removeClass("w-0");
  $(".cp").addClass("w-full h-full");
  setTimeout(()=> {
    location.href = "login.html"
  }, 500)
});

//show password
let showPass = 1;
$("#open-password").change(function (e) { 
  e.preventDefault();

  if(showPass == 1) {
    $("#password").attr("type", "text");
    $("#checkmark").toggleClass("opacity-0");
    showPass = 0;
  }else{
    $("#password").attr("type", "password");
    $("#checkmark").toggleClass("opacity-0");
    showPass = 1;
  }
  
});