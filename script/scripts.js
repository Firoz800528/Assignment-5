//random background Color
document.getElementById("random-bg-btn").addEventListener("click", function() {
    const colors = ["#1F1F1F", "#461532", "#23AAF2", "#F75CBC", "#FBC02D", "#8E9CF9", "#FE0032", "#AA9EFC"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColor;
});

//next page button
document.getElementById("next-btn").addEventListener("click", 
    function() {
        window.location.href = "blog.html";
}
)

//current local date
const currentDate = new Date().toLocaleDateString('en-BD', {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
});
const newElement = document.createElement("p");
newElement.innerText = currentDate;
const date = document.getElementById("date");
date.appendChild(newElement);

//complete-button with history adding
const buttons = [
    "complete-btn1",
    "complete-btn2",
    "complete-btn3",
    "complete-btn4",
    "complete-btn5",
    "complete-btn6"
];
for (const buttonId of buttons) {
    document.getElementById(buttonId).addEventListener("click", function () {
        this.disabled = true;
        this.style.backgroundColor = "#D3D3D3";
        this.style.color = "#A9A9A9";

        alert("Board updated Successfully");

        const taskNumber = document.getElementById("task-number");
        const number = parseFloat(taskNumber.innerText);
        const sum = number - 1;
        taskNumber.innerText = sum;

// congratulation alert
if (sum === 0) {
    alert("congrates!!! You have completed All the current task");
}

        const totalNumber = document.getElementById("total-number");
        const numbers = parseFloat(totalNumber.innerText);
        const total = numbers + 1;
        totalNumber.innerText = total;

        const history = document.getElementById("history");
        const heading = document.getElementById(`card-heading-${buttonId.charAt(buttonId.length - 1)}`).innerText;
        const historyItem = document.createElement("p");
        historyItem.innerText = `You have completed the task ${heading} at ${new Date().toLocaleTimeString()}`;
        history.appendChild(historyItem);
        historyItem.style = `
            color: black;
            padding: 10px;
            margin: 10px;
            border-radius: 10px;
            margin-bottom:20px;
            background-color: #F4F7FF;
        `;
    });
}

//clear history btn
document.getElementById("clr-history-btn").addEventListener("click", function() {
    document.getElementById("history").innerText= "";
})
