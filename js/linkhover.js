var instaVidHtml = document.querySelector("#insta-video");
var emailVidHtml = document.querySelector("#email-video");
var motionVidHtml = document.querySelector("#motion-video");
// var videoAssets = ['assets/home/insta.mp4', 'assets/home/email.mp4'];

var instaHTML = document.querySelector('.insta');
var emailHTML = document.querySelector('.email');
var motionHTML = document.querySelector('.motion');

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

motionHTML.addEventListener("mouseenter", function (event) {
  motionVidHtml.style.opacity = 1;
});

motionHTML.addEventListener("mouseout", function (event) {
  motionVidHtml.style.opacity = 0;
});

