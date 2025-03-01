document.getElementById("complete-btn1").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully");
    
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading1 = document.getElementById("card-heading-1").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading1 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});



document.getElementById("complete-btn2").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully")
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading2 = document.getElementById("card-heading-2").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading2 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});
document.getElementById("complete-btn3").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully")
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading3 = document.getElementById("card-heading-3").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading3 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});
document.getElementById("complete-btn4").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully")
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading4 = document.getElementById("card-heading-4").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading4 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});
document.getElementById("complete-btn5").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully")
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading5 = document.getElementById("card-heading-5").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading5 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});
document.getElementById("complete-btn6").addEventListener("click", function() {
    this.disabled = true;
    this.style.backgroundColor = "#D3D3D3";
    this.style.color = "#A9A9A9";

    alert("Board updated Successfully")
    const taskNumber = document.getElementById("task-number");
    const number = parseFloat(taskNumber.innerText);
    const sum = number - 1;
    taskNumber.innerText = sum;

    const totalNumber = document.getElementById("total-number");
    const numbers = parseFloat(totalNumber.innerText);
    const total = numbers + 1;
    totalNumber.innerText = total;

    const history = document.getElementById("history");
    const heading6 = document.getElementById("card-heading-6").innerText;
    const historyItem = document.createElement("p");
    historyItem.innerText = "You have completed the task " + heading6 + " at " + new Date().toLocaleTimeString();
    history.appendChild(historyItem);
    historyItem.style = `
    color: black;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    margin-bottom:20px;
    background-color: #F4F7FF;
    `
});

//clear history btn
document.getElementById("clr-history-btn").addEventListener("click", function() {
    document.getElementById("history").innerText= "";
})