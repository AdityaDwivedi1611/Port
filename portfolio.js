var typed=new Typed(".text", {
    strings:[" Coding Enthusiast"," Web Developer"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1000,
    loop:true
});
document.getElementById("linkedin").onclick=function(){
    window.location.href="https://www.linkedin.com/in/aditya-dwivedi-497090227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
}
document.getElementById("github").onclick=function(){
    window.location.href="https://github.com/AdityaDwivedi1611"
}
document.getElementById("codingninja").onclick=function(){
    window.location.href="https://www.codingninjas.com/studio/profile/ae3452f7-71a7-4107-a8eb-a55f41d58af2"
}
document.getElementById("linkedin2").onclick=function(){
    window.location.href="https://www.linkedin.com/in/aditya-dwivedi-497090227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
}
document.getElementById("github2").onclick=function(){
    window.location.href="https://github.com/AdityaDwivedi1611"
}
document.getElementById("codingninja2").onclick=function(){
    window.location.href="https://www.codingninjas.com/studio/profile/ae3452f7-71a7-4107-a8eb-a55f41d58af2"
}
function toggleVisibility(event) {
    event.preventDefault();
    var additionalContent = document.getElementById("additionalContent");
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
    } else {
        additionalContent.style.display = "none";
    }
}

