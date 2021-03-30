const showElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", function() {
  for (let i = 0; i < showElements.length; i++) {
    const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * 0.5;
    if (window.innerHeight > getElementDistance) {
      showElements[i].classList.add("show");
    }
  }
})

// document.getElementById("button").addEventListener("click", function() {
//   const textElements =document.querySelectorAll("p.text");
//   for (let i = 0; i < textElements.length; i++) {
//     textElements[i].classList.toggle("open");
//   }
// })

document.getElementById("button1").addEventListener("click", function() {
  const textElements1 =document.querySelector("p.text1");
  textElements1.classList.toggle("open");
})
document.getElementById("button2").addEventListener("click", function() {
  const textElements2 =document.querySelector("p.text2");
  textElements2.classList.toggle("open");
})
document.getElementById("button3").addEventListener("click", function() {
  const textElements3 =document.querySelector("p.text3");
  textElements3.classList.toggle("open");
})

