// Store and retrieve the user,s preferences using localStorage
function saveTheme(theme) {
    localStorage.setItem("userTheme", theme);
}

function getTheme() {
    return localStorage.getItem("userTheme") || "dark";
}

// Apply saved theme on the page load
document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = getTheme();
    document.body.setAttribute("data-theme", savedTheme);
});

// Change the theme dynamically and store  the preference
document.getElementById("themeBtn").addEventListener("click", function () {
    let currentTheme = document.body.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", newTheme);
    saveTheme(newTheme);
});

// Click animation by using stored data
document.getElementById("animatedBox").addEventListener("click", function() {
    this.style.animation = "spinExpand 1s ease-in-out";

    setTimeout(() => {
        this.innerHTML = "✨ Magic! ✨";
        document.getElementById("statusMessage").textContent = "Whoa! Did you just summon magic?";
        localStorage.setItem("lastAction", "Magic Activated!");
    }, 1000);
});

// Restore the last interactions
document.addEventListener("DOMContentLoaded", function () {
    let lastAction = localStorage.getItem("lastAction");
    if (lastAction) {
        document.getElementById("statusMessage").textContent = lastAction;
    }
});
