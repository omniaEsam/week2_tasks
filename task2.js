let images = document.querySelectorAll(".slide img");
let autoBtn = document.getElementById("auto-btn");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let randomBtn = document.getElementById("random-btn");
let currentImgIndex = 0;
let autoplayInterval = null;


function showImgs(index){
    images.forEach((img , i)=>{
            if(i === index){
                img.classList.add("active")
            }else{
                img.classList.remove("active")
            }
    })
}

function nextImg(){
    currentImgIndex = (currentImgIndex+1) % images.length
    showImgs(currentImgIndex)
}
function prevImg(){
    currentImgIndex = (currentImgIndex-1 + images.length) % images.length
    showImgs(currentImgIndex)
}
function autoPlay(){
    if (!autoplayInterval) {
        autoplayInterval = setInterval( nextImg, 1000); 
        autoBtn.innerHTML = "Pause play"
      } else {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        autoBtn.innerHTML = "Auto play"
      }
}
function randomImage(){
    let newIndex = Math.floor(Math.random() * images.length);
    currentIndex = newIndex;
    showImgs(currentIndex);
}

nextBtn.addEventListener("click" , nextImg)
prevBtn.addEventListener("click" , prevImg)
autoBtn.addEventListener("click" , autoPlay)
randomBtn.addEventListener("click" , randomImage)

showImgs(currentImgIndex)


  