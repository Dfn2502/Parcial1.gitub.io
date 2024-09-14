function anterior(){
    var x= document.getElementById("disco1")
    if(x.style.marginLeft>9){
        x.style.marginLeft="3.7%"
    }
    else if(x.style.marginLeft="-108.5%"){
        x.style.marginLeft="3.7%"

    }
}
function siguiente(){
    var x= document.getElementById("disco1")
    if(x.style.marginLeft<="0%"){
        x.style.marginLeft="-45.8%"
    }
    else if(x.style.marginLeft="3.7%"){
        x.style.marginLeft="-45.8%"

    }
}
function anterior1(){
    var x= document.getElementById("disco2")
    if(x.style.marginLeft>9){
        x.style.marginLeft="3.7%"
    }
    else if(x.style.marginLeft="-108.5%"){
        x.style.marginLeft="3.7%"

    }
}
function siguiente1(){
    var x= document.getElementById("disco2")
    if(x.style.marginLeft<="0%"){
        x.style.marginLeft="-45.8%"
    }
    else if(x.style.marginLeft="3.7%"){
        x.style.marginLeft="-45.8%"

    }
}
function anterior2(){
    var x= document.getElementById("disco3")
    if(x.style.marginLeft>9){
        x.style.marginLeft="3.7%"
    }
    else if(x.style.marginLeft="-108.5%"){
        x.style.marginLeft="3.7%"

    }
}
function siguiente2(){
    var x= document.getElementById("disco3")
    if(x.style.marginLeft<="0%"){
        x.style.marginLeft="-45.8%"
    }
    else if(x.style.marginLeft="3.7%"){
        x.style.marginLeft="-45.8%"

    }
}
function anterior3(){
    var x= document.getElementById("disco4")
    if(x.style.marginLeft>9){
        x.style.marginLeft="3.7%"
    }
    else if(x.style.marginLeft="-108.5%"){
        x.style.marginLeft="3.7%"

    }
}
function siguiente3(){
    var x= document.getElementById("disco4")
    if(x.style.marginLeft<="0%"){
        x.style.marginLeft="-45.8%"
    }
    else if(x.style.marginLeft="3.7%"){
        x.style.marginLeft="-45.8%"

    }
}

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    const button = document.querySelector(`button[onclick="playAudio('${audioId}')"]`);
    const icono = button.querySelector('i');
    
    if (audio.paused) {
        audio.play();
        icono.classList.remove('fa-music');
        icono.classList.add('fa-pause');
    } else {
        audio.pause();
        icono.classList.remove('fa-pause');
        icono.classList.add('fa-music');
    }
}
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }
