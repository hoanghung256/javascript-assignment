function addNewProduct(){
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

let table = document.getElementById("proTable");



function addProductInfo(){
    let nRow = table.insertRow(table.length);
    nRow.insertCell(0).innerHTML = document.getElementById("ProductName").value;
    nRow.insertCell(1).innerHTML = document.getElementById("Price").value;
    nRow.insertCell(2).innerHTML = document.getElementById("quantity").value;
    nRow.insertCell(3).innerHTML = document.getElementById("createDate").value;
    nRow.insertCell(4)
}

function caculateTotalPrice(){
    for(let i=1; i<=table.rows.length; i++){
        table.rows[i].cells[4].innerHTML = table.rows[i].cells[1].innerHTML*table.rows[i].cells[2].innerHTML;
    }
}