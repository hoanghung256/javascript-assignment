function displayData() {
    //create data variables
    var nameData = document.getElementById("p-name").value;
    var priceData = document.getElementById("p-price").value;
    var quantityData = document.getElementById("p-quantity").value;
    var dateData = document.getElementById("p-date").value;

    //format date data
    var formattedDate = moment(dateData).format('DD/MM/YYYY');
    //print values
    document.getElementById("name-output").innerText = nameData;
    document.getElementById("price-output").innerText = priceData;
    document.getElementById("quantity-output").innerText = quantityData;
    document.getElementById("date-output").innerText = formattedDate;
}
