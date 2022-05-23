document.querySelector("#add_more_product").addEventListener("click",indexFun);
function indexFun()
{
    window.location.href="index.html";
}
 
   var show=JSON.parse(localStorage.getItem("products"));
show.forEach(function (elem,index)
{
    
    var box=document.createElement("div");
     var imgdiv=document.createElement("img");
    imgdiv.setAttribute("src",elem.image);
    var tdiv=document.createElement("div");
    tdiv.innerText=elem.type;
    var ddiv=document.createElement("p");
    ddiv.innerText=elem.desc;
    var pdiv=document.createElement("h3");
    pdiv.innerText=elem.price;
var remove=document.createElement("button");
remove.innerText="remove";
remove.addEventListener("click",function(){
    deleteFun(elem,index);
})

    box.append(imgdiv,tdiv,ddiv,pdiv,remove);
    document.querySelector("#all_products").append(box);
});

function deleteFun(elem,index)
{
    show.splice(index,1);
    localStorage.setItem("products",JSON.stringify(show));
    window.location.reload();
}