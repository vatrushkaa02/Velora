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

    windowBox.style.background = "#202020";
    windowBox.style.color = "white";

    windowBox.style.padding = "30px";
    windowBox.style.borderRadius = "20px";

    windowBox.style.display = "flex";
    windowBox.style.flexDirection = "column";

    windowBox.style.gap = "15px";

    windowBox.style.minWidth = "300px";

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

