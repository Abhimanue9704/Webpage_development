function buy()
{
    console.log("Bought")
    alert("Switching to payment methods....")
}
function cart()
{
    console.log("Bought")
    alert("Switching to cart....")
}

document.getElementById("b1").addEventListener("click",buy)
document.getElementById("b2").addEventListener("click",cart)