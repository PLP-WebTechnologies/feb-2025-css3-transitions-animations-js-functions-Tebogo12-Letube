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
    this.style.backgroundColor = "rgba(144, 104, 228, 0.8)";
    this.style.transform = "rotate(360deg)";
    this.style.transition = "background-color 0.5s ease-in-out, transform 0.6s ease-in-out";

    document.getElementById("statusMessage").textContent = "Box clicked! Magic in progress...";
});
