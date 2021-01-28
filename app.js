function addRow() {
    var salaryID = document.getElementById("salaryID");
    var salaryRange = document.getElementById("salaryRange");
    var staffCount = document.getElementById("staffCount");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = salaryID.value;
    row.insertCell(1).innerHTML = salaryRange.value;
    row.insertCell(2).innerHTML =
        '<input type="button" value = "Update" onClick=updateRow(this)>';
    row.insertCell(3).innerHTML =
        '<input type="button" value = "Delete" onClick=deleteRow(this)>';
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}

// updates row
function updateRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    var first_item = obj.parentNode.parentNode.firstChild;
    var second_item = obj.parentNode.parentNode.firstChild.nextSibling;
    first_item.innerHTML = "<input type='number' id='edit'/>" + "<input type='button' value='done' onclick='changeValue(this)'/>"
    second_item.innerHTML = "<input type='number' id='edit'/>" + "<input type='button' value='done' onclick='changeValue(this)'/>"
}

function changeValue(obj) {
    var changes = document.getElementById('edit').value;
    obj.parentNode.textContent = changes;
}