function saveTheme(theme) {
    localStorage.setItem("userTheme", theme);
}

function getTheme() {
    return localStorage.getItem("userTheme") || "dark";
}

document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = getTheme();
    document.body.style.backgroundColor = savedTheme === "dark" ? "#0d0d25" : "#cfcfe6";
    document.body.style.color = savedTheme === "dark" ? "#cfcfe6" : "#333";
});

document.getElementById("themeBtn").addEventListener("click", function () {
    let newTheme = document.body.style.backgroundColor === "rgb(13, 13, 37)" ? "light" : "dark";
    document.body.style.backgroundColor = newTheme === "dark" ? "#0d0d25" : "#cfcfe6";
    document.body.style.color = newTheme === "dark" ? "#cfcfe6" : "#333";
    saveTheme(newTheme);
});

document.getElementById("animatedBox").addEventListener("click", function() {
    this.style.animation = "spinExpand 1s ease-in-out";

    setTimeout(() => {
        this.innerHTML = "✨ Magic! ✨";
        document.getElementById("statusMessage").textContent = "Whoa! Did you just summon magic?";
    }, 1000);
});
