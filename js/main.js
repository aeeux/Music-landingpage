

function toggle(){
    var trailer= document.querySelector(".trailer")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}