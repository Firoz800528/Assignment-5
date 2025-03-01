document.getElementById("random-bg-btn").addEventListener("click", function() {
    const colors = ["#1F1F1F", "#461532", "#23AAF2", "#F75CBC", "#FBC02D", "#8E9CF9", "#FE0032", "#AA9EFC"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColor;
});




