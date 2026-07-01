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

    <div class="music-player">

        <iframe
            src="https://audio.com/embed/audio/1869523297704962?theme=image"
            style="
                display:block;
                border:none;
                border-radius:10px;
                width:600px;
                height:204px;">
        </iframe>

        <a
            href="https://audio.com/crea1ant"
            target="_blank"
            style="
                display:block;
                text-align:center;
                margin-top:8px;
                color:#A4ABB6;
                text-decoration:none;">
            @crea1ant
        </a>

    </div>

    <button id="close-theme-btn">
        Close
    </button>

</div>
`;

    document.body.appendChild(popup);

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

    setTimeout(()=>{

        document.getElementById("loader").classList.add("hide");

    },3000);

});

