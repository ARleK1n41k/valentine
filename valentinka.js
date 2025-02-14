document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const textContainer = document.getElementById("textContainer");

    video.addEventListener("ended", function() {
        video.style.display = "none"; // Скрыть видео
        textContainer.classList.remove("hidden"); // Показать текст
    });
});