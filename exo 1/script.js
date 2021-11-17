let commission = document.getElementById("liste-commissions");

let nouvelItem = document.createElement("li");
nouvelItem.innerHTML = "coca";

commission.appendChild(nouvelItem);

let button = document.getElementById("valid");
button.addEventListener("click",function (event) {
    let text = document.getElementById("list").value;
    let newLi = document.createElement("li");
    newLi.innerHTML = text;
    commission.appendChild(newLi);
})

let suppr = document.getElementById("suppression");
suppr.addEventListener("click",function () {
    let items = commission.getElementsByTagName("li");

    if (items.length > 0) {
        items [items.length - 1].remove();
    }
    else {
        alert("la liste est vide");
    }
})