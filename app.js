console.log("Hello World")


var a = document.getElementById('text1')
var b = document.getElementById('text2')

function func() {
    localStorage.setItem("name1", a.value)
    localStorage.setItem("name2", b.value)
}

function clearsto() {
    localStorage.clear()
}

var menu = [];
var i = 0;
function addcategory() {
    var abcd = document.getElementById('categories');
    var price = document.getElementById('price');


    var categoryInp = document.getElementById('inpu');
    var lit = document.createElement('li');
    var editext = document.createTextNode("Edit")
    var deltext = document.createTextNode("Delete")
    var addmenutext = document.createTextNode("Add Menu")


    var editbutt = document.createElement('button');
    var delbutton = document.createElement('button');
    var addmenubutt = document.createElement('button');



    editbutt.setAttribute("onclick", editbutton())
    delbutton.setAttribute("onclick", deletebutton())

    addmenubutt.appendChild(addmenutext);
    editbutt.appendChild(editext)
    delbutton.appendChild(deltext)

    var litext1 = document.createTextNode(categoryInp.value);
    var price1 = document.createTextNode(price.value);

    lit.appendChild(litext1)

    lit.appendChild(price1)
    lit.appendChild(editbutt)
    lit.appendChild(delbutton)
    lit.appendChild(addmenubutt)
    abcd.appendChild(lit)
    i = i + 1;

    // console.log(i)
    var obj = {
        name: categoryInp.value,
        price: price.value,
    }
    localStorage.setItem("category # " + i, JSON.stringify(obj))
    menu.push(categoryInp.value)
    // console.log(menu[0])
    localStorage.setItem("number", i)
}


function editbutton() {
    // console.log("Edit button")
}

function deletebutton() {
    // console.log("Del button")
}
// console.log(i)
// var restua = localStorage.getItem('category # 1cake')
// console.log(restua)
var numOfcate = localStorage.getItem("number");

var welcomeul = document.getElementById('menuUser');
console.log(welcomeul)

var cart = [];

// for (b = 1; b <= numOfcate; b++) {

//     var name1 = localStorage.getItem("category # " + b);
//     // console.log(localStorage.getItem("category # " + b))
//     // console.log(JSON.parse(name1).name)
//     // document.write(name1)
//     cart.push(JSON.parse(name1).name)
//     var empty = document.createTextNode(" ")
//     var createLi = document.createElement('td');
//     var createtr = document.createElement('tr');

//     var textprice = document.createTextNode(JSON.parse(name1).price)
//     var textNode = document.createTextNode(JSON.parse(name1).name)
//     var atc = document.createTextNode("Add to Cart")
//     var addtoCart = document.createElement("button")
//     var lineBreak = document.createElement("br")
//     // console.log(cart[b-1])
//     var c = b-1;
//     // console.log(c)
//     addtoCart.setAttribute("onclick","addCart(this)")
//     addtoCart.appendChild(atc)



//     createLi.appendChild(textNode)
//     createLi.appendChild(empty)
//     createLi.appendChild(textprice)
//     createLi.appendChild(addtoCart)
//     createLi.setAttribute("id", JSON.parse(name1).name)
//     createLi.setAttribute("class", JSON.parse(name1).price)

//     // console.log(createLi)
//     // createtr.appendChild(createLi)
//     // welcomeul.appendChild(createtr)

//     if(b%4==0){
//         createtr.appendChild(createLi)
//         welcomeul.appendChild(createtr)
//         console.log(b==5)
//     } else{
//     welcomeul.appendChild(createLi) 

//     }
//     // welcomeul.appendChild(lineBreak) 

//     // console.log(textNode)
// }





for (b = 1; b <= numOfcate; b++) {

    var name1 = localStorage.getItem("category # " + b);
    // console.log(localStorage.getItem("category # " + b))
    // console.log(JSON.parse(name1).name)
    // document.write(name1)
    cart.push(JSON.parse(name1).name)
    var empty = document.createTextNode(" ")
    var createLi = document.createElement('td');
    var createtr = document.createElement('tr');

    var textprice = document.createTextNode("Rs"+JSON.parse(name1).price)
    var textNode = document.createTextNode(  JSON.parse(name1).name)
    var atc = document.createTextNode("Add to Cart")
    var addtoCart = document.createElement("button")

    var bre = document.createElement('br')
    var lineBreak = document.createElement("br")
    // console.log(cart[b-1])
    var c = b - 1;
    // console.log(c)
    addtoCart.setAttribute("onclick", "addCart(this)")
    addtoCart.appendChild(atc)



    createLi.appendChild(textNode)
    createLi.appendChild(empty)
    createLi.appendChild(textprice)
    createLi.appendChild(addtoCart)
    addtoCart.setAttribute("class","btn btn-dark")
    createLi.setAttribute("id", JSON.parse(name1).name)

    createLi.setAttribute("class", JSON.parse(name1).price)

    // console.log(createLi)
    // createtr.appendChild(createLi)
    // welcomeul.appendChild(createtr)

    if (b % 4 == 0) {
        // welcomeul.appendChild(bre)
        welcomeul.appendChild(createLi)
        createtr.appendChild(bre)
        welcomeul.appendChild(createtr)

        // createtr.appendChild(createLi)
        // welcomeul.appendChild(createtr)
        console.log("if wala " + b)
    } else {
        welcomeul.appendChild(createLi)
    }
    // welcomeul.appendChild(lineBreak) 

    // console.log(textNode)
}

// if (10%4 === 0) {
//     console.log("T")
// }
// else {
//     console.log("Y")
// }






// console.log()
// addtoCart.setAttribute("onclick","addCart(this)")


var obj1 = {
    name: "Daniyal",
    class: "8"
}

// document.write(obj1.class)
// console.log(welcomeul)
var cartname;
var cartprice;
var finalcart = [];
var obj;

function addCart(u) {
    cartname = u.parentNode.id
    cartprice = u.parentNode.className
    var obj = {
        name: cartname,
        price: cartprice
    }
    finalcart.push(obj)
    //  console.log(finalcart)
}


function checkout() {
    location.href = "./checkout.html"
    for (i = 0; i < finalcart.length; i++) {
        console.log(finalcart[i].name)
        console.log(finalcart[i].price)
        sessionStorage.setItem("Item " + i, JSON.stringify(finalcart[i]))


    }
}
// console.log(cart)

// var cartul = document.getElementById('cartul')
// console.log(cartul)

// for(i=0;i<finalcart.length;i++){
//     // var a = document.createTextNode(finalcart[i].name)
//     // var b = document.createTextNode(finalcart[i].price)
//     // var empty = document.createTextNode(" ")
//     // var list1 = document.createElement('li');

//     // list1.appendChild(a)
//     // list1.appendChild(b)
//     // list1.appendChild(empty)
//     // cartul.appendChild(list1)
//     sessionStorage.setItem("Item " + i,finalcart[i])

// }

// var restName = document.getElementById('restName').value
// function submit(){
// console.log(restName)}