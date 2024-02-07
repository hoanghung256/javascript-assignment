function displayProduct() {
    var ProdName = document.getElementById("ProdName").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var data = document.getElementById("date").value;
    var date = document.getElementById("date").value;
    var formattedDate = moment(date).format('DD/MM/YYYY');
    document.getElementById("pname").innerText = ProdName;
    document.getElementById("pprice").innerText = price;
    document.getElementById("pquantity").innerText = quantity;
    document.getElementById("pdate").innerText = formattedDate;
}