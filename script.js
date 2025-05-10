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
    this.style.transition = "all 1s ease-in-out";
    this.style.transform = "scale(1.5) rotate(180deg)";
    this.style.backgroundColor = "rgba(228, 104, 144, 0.8)";
    this.style.opacity = "0";

    setTimeout(() => {
        this.style.transform = "scale(1) rotate(0deg)";
        this.style.backgroundColor = "rgba(144, 104, 228, 0.8)";
        this.style.opacity = "1";
        this.innerHTML = "✨ Magic! ✨";
    }, 1000);

    document.getElementById("statusMessage").textContent = "Whoa! Did you just summon magic?";
});
