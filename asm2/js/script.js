function displayForm(){
    document.getElementById("input-form").style.display = "block";
}

function hideForm(){
    document.getElementById("input-form").style.display = "none";
}

function takeNewData(){
    var newData ={};
    newData["p-name"] = document.getElementById("p-name").value;
    newData["p-price"] = document.getElementById("p-price").value;
    newData["p-quantity"] = document.getElementById("p-quantity").value;
    newData["p-date"] = document.getElementById("p-date").value;
    return newData;
}

function showNewData() {
    var newData = takeNewData();
    var table = document.getElementById("p-table");
    var currentLength = table.rows.length;
    var newRow = table.insertRow(currentLength);
    
    //define the cells variables
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    //assign values for cell variables
    cell1.innerHTML = newData["p-name"];
    cell2.innerHTML = newData["p-price"];
    cell3.innerHTML = newData["p-quantity"];
    var formattedDate = moment(newData["p-date"]).format('DD/MM/YYYY');
    cell4.innerHTML = formattedDate;
    cell5.innerHTML = null;
}

function calTotalPrice() {
    var table = document.getElementById("p-table");
    var length = table.rows.length;
    for(let i = 1; i < length; i++) {
        var priceData = table.rows[i].cells[1].innerHTML;
        var quantityData = table.rows[i].cells[2].innerHTML;
        var total = priceData * quantityData;
        table.rows[i].cells[4].innerHTML = total + "$";
    }
}

// function clearForm(){
//     document.getElementById("p-name").innerHTML = "";
//     document.getElementById("p-price").innerHTML = "";
//     document.getElementById("p-quantity").innerHTML = "";
//     document.getElementById("p-date").innerHTML = "";
// }