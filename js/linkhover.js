var instaVidHtml = document.querySelector("#insta-video");
var emailVidHtml = document.querySelector("#email-video");
// var videoAssets = ['assets/home/insta.mp4', 'assets/home/email.mp4'];

var instaHTML = document.querySelector('.insta');
var emailHTML = document.querySelector('.email');

instaHTML.addEventListener("mouseenter", function (event) {
  instaVidHtml.style.opacity = 1;
});

instaHTML.addEventListener("mouseout", function (event) {
  instaVidHtml.style.opacity = 0;
});

emailHTML.addEventListener("mouseenter", function (event) {
  emailVidHtml.style.opacity = 1;
});

emailHTML.addEventListener("mouseout", function (event) {
  emailVidHtml.style.opacity = 0;
});

