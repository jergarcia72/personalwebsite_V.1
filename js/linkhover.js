var aboutVidHtml = document.querySelector("#about-video");
var instaVidHtml = document.querySelector("#insta-video");
var emailVidHtml = document.querySelector("#email-video");
var motionVidHtml = document.querySelector("#motion-video");
var projectsVidHtml = document.querySelector("#projects-video");
// var videoAssets = ['assets/home/insta.mp4', 'assets/home/email.mp4'];

var aboutHTML = document.querySelector('.about');
var instaHTML = document.querySelector('.insta');
var emailHTML = document.querySelector('.email');
var motionHTML = document.querySelector('.motion');
var projectsHTML = document.querySelector('.projects');


aboutHTML.addEventListener("mouseenter", function (event) {
  aboutVidHtml.style.opacity = 1;
});

aboutHTML.addEventListener("mouseout", function (event) {
  aboutVidHtml.style.opacity = 0;
});

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

projectsHTML.addEventListener("mouseenter", function (event) {
  projectsVidHtml.style.opacity = 1;
});

projectsHTML.addEventListener("mouseout", function (event) {
  projectsVidHtml.style.opacity = 0;
});


