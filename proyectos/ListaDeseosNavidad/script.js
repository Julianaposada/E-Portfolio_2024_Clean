let wishList = [];

function addItem() {
    let newItem = document.getElementById("itemInput").value;
    if (newItem !== "") {
        wishList.push(newItem);
        displayList();
        document.getElementById("itemInput").value = "";
    }
}

function displayList() {
    let listContainer = document.getElementById("wishList");
    listContainer.innerHTML = "";
    for (let item of wishList) {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    }
}

function printList() {
    let printContent = "Lista de Deseos de Navidad:\n\n";
    for (let item of wishList) {
        printContent += `- ${item}\n`;
    }

    let printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<pre>' + printContent + '</pre>');
    printWindow.document.close();
}
function clearList() {
    wishList = [];
    displayList();
}