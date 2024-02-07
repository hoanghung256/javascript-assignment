function displayData() {
    var nameData = document.getElementById("p-name").value;
    var priceData = document.getElementById("p-price").value;
    var quantityData = document.getElementById("p-quantity").value;
    var dateData = document.getElementById("p-date").value;

    document.getElementById("name-output").innerText = nameData;
    document.getElementById("price-output").innerText = priceData;
    document.getElementById("quantity-output").innerText = quantityData;
    document.getElementById("date-output").innerText = dateData;
}
