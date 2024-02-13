function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

var total = [];
function onFormSubmit() {
    var formData = readFormData()
    insertNewRecord(formData);
    // console.log(total)    
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
    total.push(data.price*data.quantity)
}
function calTotal() {
    var oTable = document.getElementById("productList");
    var rowLength = oTable.rows.length;
    
    for (i = 1; i < rowLength; i++){
    var oCells = oTable.rows.item(i).cells;
        oCells.item(4).innerHTML = total[i-1];
        console.log(total)
    }
    
}
function resetForm() {
    document.getElementById("ProdName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
}