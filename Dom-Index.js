let totPrice = 0;
let item;
let price;
let quentity;

function order() {
  document.getElementById("op").value = "";
  let x = parseInt(document.getElementById("qty").value);
  if (x > 0) {
    item = document.getElementById("items").value;
    switch (item) {
      case "Ice-Cream":
        price = 80;
        document.getElementById("price").value = price;
        break;

      case "Pizza":
        price = 250;
        document.getElementById("price").value = price;
        break;

      case "Paneer-Tika":
        price = 320;
        document.getElementById("price").value = price;
        break;

      case "Sweet-Box":
        price = 500;
        document.getElementById("price").value = price;
        break;

      default:
        document.getElementById("op").value = alert(
          "Please select Product Item"
        );
    }
    quentity = parseInt(document.getElementById("qty").value);
    totPrice = price * quentity;
    document.getElementById("op").value =
      "You need to pay: " + totPrice + " Rs.";
  } else {
    alert("Please enter quantity!");
  }
}

function bill() {
  let prc = parseInt(document.getElementById("price").value);
  if (prc > 0) {
    let con = confirm("Are you Confirm for order");
    if (con) {
      alert("Congratulation! Your Order done Successfully.");
      document.getElementById("qty").value = "";
      document.getElementById("op").value = "";
      document.getElementById("price").value = "";
      document.getElementById("items").value = "";
    }
  } else {
    document.getElementById("op").value = "Please select Item & Quantity";
  }
}
