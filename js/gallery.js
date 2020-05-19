//Data for holding which page we're on
let slideNumber = 1

//pick the relevant tags
const nextTag = document.querySelector(".next")
const prevTag = document.querySelector(".prev")
const outputTag = document.querySelector(".counter")

//make a next function to increase the pageNumber
const next = function () {
    slideNumber = slideNumber + 1

    if (slideNumber > 4) {
        slideNumber = 1
    }
    updateSection()
}

//make a prev function to decrease the pageNumber
const previous = function () {
    slideNumber = slideNumber - 1

    if (slideNumber < 1) {
        slideNumber = 4
    }
    updateSection()
}

//updates content
const updateSection = function () {
    outputTag.innerHTML = slideNumber
}

//listener functions
nextTag.addEventListener("click", function() {
    next()
})

prevTag.addEventListener("click", function() {
    previous()
})



