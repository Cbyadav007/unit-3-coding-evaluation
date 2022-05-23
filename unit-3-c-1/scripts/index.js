//store the products array in localstorage as "products"
var productArr=JSON.parse(localStorage.getItem("products")) || [];
document.querySelector("#add_product").addEventListener("click",subFun);
function subFun()
{
    var productObj={
        type:document.querySelector("#type").value,
        desc:document.querySelector("#desc").value,
        price:document.querySelector("#price").value,
        image:document.querySelector("#image").value,
    }
    productArr.push(productObj);
    localStorage.setItem("products",JSON.stringify(productArr));
}

////////////////////////////////////////////////////////////////////////

document.querySelector("#show_products").addEventListener("click",inventFun);
function inventFun()
{
   window.location.href="inventory.html";
}