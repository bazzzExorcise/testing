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

// animation change page
$(".reg").click(function (e) { 
  e.preventDefault();
  $(".cp").removeClass("h-0");
  $(".cp").addClass("w-full h-full");
  setTimeout(()=> {
    location.href = "reg.html"
  }, 500)
});

// opening animation
const openAnimation = () => {
  $(".cp").toggleClass("h-0");
}

//ready docs
$(document).ready(function () {
  openAnimation()

  $(document).on('touchstart', function(event) {
    var container = $('#body'); // Ganti dengan ID elemen website Anda
  
    // Periksa apakah elemen sentuhan terjadi di luar elemen website
    if (!container.is(event.target) && container.has(event.target).length === 0) {
      // Kode yang akan dijalankan ketika pengguna menyentuh bagian di luar elemen website
      alert('Pengguna menyentuh di luar elemen website.');
    }
  });

});