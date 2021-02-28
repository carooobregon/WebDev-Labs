const button = document.getElementById("myBtn");
const prod = document.getElementById("product");
const price = document.getElementById("price");
let mylist = document.getElementById("mylist");
let totalAmt = document.getElementById("totalAmount");
let currTotal = 0;

button.addEventListener("click", event => {
  if(isNaN(price.value)){
    alert("Price must be number");
  } else if(!prod.value || !price.value){
    alert("Must complete both fields");
  } else {
    addListItem(prod.value, price.value)
  }
});

function addListItem(currProduct, currPrice){
  let str = prod.value + "       $" + price.value + "    ";
  let newitem=document.createElement("li");
  let innerspan=document.createElement("span");
  innerspan.appendChild(document.createTextNode(str));
  newitem.id = price.value
  newitem.appendChild(innerspan);
  newitem.appendChild(createListButton());
  mylist.appendChild(newitem);
  updateTotal(parseInt(price.value))
}

function createListButton(){
  let newbtn = document.createElement("button");
  newbtn.addEventListener("click",(event) => {
    let theliitem=event.target.parentNode;
    mylist.removeChild(theliitem);
    let delPrice = theliitem.getAttribute('id');
    totalAmt.innerHTML = currTotal - delPrice;
    currTotal = currTotal - delPrice;
  });
  newbtn.setAttribute("class", "btn btn-secondary");
  newbtn.appendChild(document.createTextNode("x"));
  return newbtn;
}

function updateTotal(number){
  currTotal = currTotal + parseInt(price.value);
  totalAmt.innerHTML = '$' + currTotal;
}