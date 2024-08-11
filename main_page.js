let userSelected = null;

function Read(){
    let data= {};
    data["txtname"] = document.getElementById("txtname").value;
    data["txtaddress"] = document.getElementById("txtaddress").value;
    data["txtphone"] = document.getElementById("txtphone").value;
    return data;
}
function Create(data){
    let table = document.getElementById("table_contact").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.txtaddress;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.txtphone;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td){
    userSelected = td.parentElement.parentElement;
    document.getElementById("txtname").value = userSelected.cells[0].innerHTML;
    document.getElementById("txtaddress").value = userSelected.cells[1].innerHTML;
    document.getElementById("txtphone").value = userSelected.cells[2].innerHTML;
    userSelected.classList.add("selected");
}

function Update(formData){
    if (userSelected) {
        userSelected.cells[0].innerHTML = formData.txtname;
        userSelected.cells[1].innerHTML = formData.txtaddress;
        userSelected.cells[2].innerHTML = formData.txtphone;
        userSelected.classList.remove("selected");
        userSelected = null;
    }
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
        row = td.parentElement.parentElement;
        document.getElementById("table_contact").deleteRow(row.rowIndex);
        resetForm();
    }
}
function formSubmit(){
    let formData = Read();
    if(userSelected == null)
        Create(formData);
    else
        Update(formData);
}
function resetForm(){
    document.getElementById("txtname").value = "";
    document.getElementById("txtaddress").value = "";
    document.getElementById("txtphone").value = "";
    userSelected = null;
}
// localStorage.setItem("name", "Fluke in");
// document.getElementById("name").innerHTML = localStorage.getItem("name");
// localStorage.setItem("address", "110/1");
// document.getElementById("address").innerHTML = localStorage.getItem("address");
// localStorage.setItem("telephone", "062-1234567");
// document.getElementById("telephone").innerHTML = localStorage.getItem("telephone");
