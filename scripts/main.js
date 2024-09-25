let myImage = document.querySelector("img");
let mybutton = document.querySelector("button");
mybutton.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/长离.png") {
    myImage.setAttribute("src", "images/今汐.png");
  } else {
    myImage.setAttribute("src", "images/长离.png");
  }
};

