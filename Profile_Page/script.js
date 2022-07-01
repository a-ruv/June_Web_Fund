var profile = document.querySelector(".profile-name");
var your = document.querySelector("#yourNum");
var request = document.querySelector("#connectionNum");
var phil = document.querySelector(".phil");
var todd = document.querySelector(".todd");

    function changeName(){
        profile.innerText = "Mary Jane";
    }
    function removeTodd(){
        todd.remove();
        request.innerText--;
    }

    function removePhil(){
        phil.remove();
        request.innerText--;
    }
    
    function addYes(){
        your.innerText++;
    }