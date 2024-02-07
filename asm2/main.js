function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);    
}
function calTotal(){
    var formData = readFormData();
    calTotal(formData)
}
function readFormData() {
    var formData = {};
    formData["ProdName"] = document.getElementById("ProdName").value;
    formData["price"] = document.getElementById("price").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    // resetForm();
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ProdName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = moment(data.date).format('DD/MM/YYYY');
    cell5 = newRow.insertCell(4);
}
function calTotal(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    table.cell5.innerHTML = data.price*data.quantity
}
function resetForm() {
    document.getElementById("ProdName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
}
