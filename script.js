/* ============================= */
/*        THEME SETTINGS         */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {

    const configButton = document.querySelector(".config");

    /* ============================= */
    /*    LOAD SAVED THEME           */
    /* ============================= */

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-theme");

    }

    /* ============================= */
    /*      CREATE POPUP            */
    /* ============================= */

    const popup = document.createElement("div");

    popup.id = "theme-popup";

popup.innerHTML = `
<div id="theme-window">

    <h2>Theme Settings</h2>

    <button id="dark-theme-btn">
    Dark Theme
    </button>

    <button id="light-theme-btn">
    Light Theme
    </button>

<hr style="width:100%;">

<h3>Background Music</h3>

<label class="switch">
    <input type="checkbox" id="music-toggle">
    <span>Enable background music</span>
</label>

    <hr style="width:100%;">

    <h3>Startup Intro</h3>

    <label class="switch">
        <input type="checkbox" id="intro-toggle">
        <span>Enable intro animation & sound</span>
    </label>

   


 

    <button id="close-theme-btn">
        Close
    </button>




`;
document.body.appendChild(popup);

const introToggle = document.getElementById("intro-toggle");

// Default: ON
if(localStorage.getItem("introEnabled") === null){
    localStorage.setItem("introEnabled","true");
}

introToggle.checked =
    localStorage.getItem("introEnabled") === "true";




    introToggle.addEventListener("change",()=>{

    localStorage.setItem(
        "introEnabled",
        introToggle.checked
    );

});


const musicToggle = document.getElementById("music-toggle");

if(localStorage.getItem("musicEnabled") === null){
    localStorage.setItem("musicEnabled","true");
}

musicToggle.checked =
    localStorage.getItem("musicEnabled") === "true";

musicToggle.addEventListener("change",()=>{

    localStorage.setItem(
        "musicEnabled",
        musicToggle.checked
    );

    if(musicToggle.checked){
        if(localStorage.getItem("musicEnabled") !== "false"){
    bg.play();
}
    }else{
        bg.pause();
        bg.currentTime = 0;
    }

});

    

    /* ============================= */
    /*      POPUP STYLES            */
    /* ============================= */

    popup.style.display = "none";

    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";

    popup.style.width = "100%";
    popup.style.height = "100%";

    popup.style.background = "rgba(0,0,0,0.6)";

    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";

    popup.style.zIndex = "9999";

    const windowBox = document.getElementById("theme-window");

    const buttons = windowBox.querySelectorAll("button");

buttons.forEach(button => {

    button.style.padding = "12px";

    button.style.fontSize = "18px";

    button.style.cursor = "pointer";

    button.style.border = "none";

    button.style.borderRadius = "10px";

    button.style.width = "220px";

});

windowBox.style.background = "#202020";
windowBox.style.color = "white";
windowBox.style.padding = "30px";
windowBox.style.borderRadius = "20px";

windowBox.style.display = "flex";
windowBox.style.flexDirection = "column";
windowBox.style.alignItems = "center";
windowBox.style.gap = "20px";

windowBox.style.width = "850px";
windowBox.style.maxWidth = "90%";

    /* ============================= */
    /* OPEN MENU                     */
    /* ============================= */

    configButton.addEventListener("click", () => {

        popup.style.display = "flex";

    });

    /* ============================= */
    /* CLOSE MENU                    */
    /* ============================= */

    document
    .getElementById("close-theme-btn")
    .addEventListener("click", () => {

        popup.style.display = "none";

    });

    /* ============================= */
    /* LIGHT THEME                   */
    /* ============================= */

    document
    .getElementById("light-theme-btn")
    .addEventListener("click", () => {

        document.body.classList.add("light-theme");

        localStorage.setItem(
            "theme",
            "light"
        );

        popup.style.display = "none";

    });

    /* ============================= */
    /* DARK THEME                    */
    /* ============================= */

    document
    .getElementById("dark-theme-btn")
    .addEventListener("click", () => {

        document.body.classList.remove(
            "light-theme"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

        popup.style.display = "none";

    });

});



















//ANIMATION


window.addEventListener("load",()=>{

});



//SOUND
const loader = document.getElementById("loader");
const intro = document.getElementById("introAudio");
const bg = document.getElementById("bgMusic");

const introEnabled =
    localStorage.getItem("introEnabled") !== "false";

if (introEnabled) {

   loader.addEventListener("click", () => {

    loader.classList.add("hide");

    setTimeout(() => {

        intro.play();

    }, 20); // halfway through the fade

}, { once:true });

} else {

    loader.classList.add("hide");

    if(localStorage.getItem("musicEnabled") !== "false"){
    bg.play();
}

}

intro.addEventListener("ended", () => {

    if(localStorage.getItem("musicEnabled") !== "false"){
    bg.play();
}

});

