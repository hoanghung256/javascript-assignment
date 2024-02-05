// function product(name, price, quantity, date){
//     this.productName=name;
//     this.price=price;
//     this.quantity=quantity;
//     this.date=date;
// }

// const newProduct = new product(document.getElementById(ProductName).value,document.getElementById(Price).value,document.getElementById(quantity).value,document.getElementById(createDate).value);

let product={
    name: document.getElementById(ProductName).value,
    price: document.getElementById(Price).value,
    quantity: document.getElementById(quantity).value,
    date: document.getElementById(createDate).value
}
function displayProduct(){
    document.getElementById("pname").innerHTML=document.getElementById("ProductName").value;
    document.getElementById("pprice").innerHTML=document.getElementById("Price").value;
    document.getElementById("pquantity").innerHTML=document.getElementById("quantity").value;
    document.getElementById("pdate").innerHTML=document.getElementById("createDate").value;
}