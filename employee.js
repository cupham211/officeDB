window.onload = (e) => {
  getReq('employeeFormContainer', '/employee');
}

function unlockEmployee(row) {
  toggleButtons(row);

  var hideText = document.getElementsByClassName('spanrow'+ row);
  var locks = document.getElementsByClassName('update'+ row);

  for (i =0; i<hideText.length; i++){
    hideText[i].style.display = "none";
  }
  for (i =0; i<locks.length; i++){
    locks[i].style.display = "inline";
  }
}

function lockEmployee(row) {
  var showText = document.getElementsByClassName('spanrow'+ row);
  var hide = document.getElementsByClassName('update'+ row);

  for (i =0; i<hide.length; i++){
    hide[i].style.display = "none";
  }
  for (i =0; i<showText.length; i++){
    showText[i].style.display = "inline";
  }

  toggleButtons(row);
}

function updateEmployee(row, employeeID) {
  row = String(row);
  var pos = document.getElementById(row + 'posID');
  var dept = document.getElementById(row + 'deptID');
  var quote = document.getElementById(row + 'quoteID');

  if (!pos || Number(pos.value) == -1) {
    pos = null;
  } else {pos = Number(pos.value);}

  if (!dept || Number(dept.value) == -1) {
    dept = null;
  } else {dept = Number(dept.value);}

  if (isNaN(quote.value) || Number(quote.value) == -1) {
    quote = null;
  } else {quote = Number(quote.value);}

  var putData = {
    empID: parseInt(employeeID),
    positionID: pos,
    departmentID: dept,
    quoteID: quote
  };

  postPutDelReq('PUT', 'employeeTableBod', '/employee', putData);
}

function toggleButtons(row) {
  var updateButt = document.getElementById('butUpdate'+row);
  var saveButt = document.getElementById('butSave'+row);
  var cancelButt = document.getElementById('butCancel'+row);
  var delButt = document.getElementById('butDel'+ row);

  if (updateButt.style.display == "inline") {
    updateButt.style.display = "none";
  } else {updateButt.style.display = "inline";
}

  if (saveButt.style.display == "inline") {
    saveButt.style.display = "none";
  } else {saveButt.style.display = "inline";
}

  if (cancelButt.style.display == "inline") {
  cancelButt.style.display = "none";
} else {cancelButt.style.display = "inline";
  }

  if (delButt.style.display == "inline") {
  delButt.style.display = "none";
} else {delButt.style.display = "inline";
  }
}

function verifyDupEmp() {
  let employees = document.getElementsByClassName('checkFullName');

  let first = document.getElementById('fName').value;
  let last = document.getElementById('lName').value;

  for (i=0; i<employees.length; i++){
    if (employees[i].innerHTML.toLowerCase() ==
    first.toLowerCase() + ' ' + last.toLowerCase()) {
      alert('Employee already exists!');
      document.getElementById('employeeForm').reset();
      return;
    }
  }
  addEmployee();
}

function addEmployee() {

  var empData = {
    fName: document.getElementById('fName').value,
    lName: document.getElementById('lName').value,
    alias: document.getElementById('alias').value,
    positionID: parseInt(document.getElementById('position').value),
    deptID: parseInt(document.getElementById('department').value),
    employStatus: document.getElementById('status').value,
    quoteID: parseInt(document.getElementById('quotes').value),
    deptHead: parseInt(document.getElementById('deptHead').value)
  };

  if (empData.positionID == -1) {empData.positionID = null};
  if (empData.deptID == -1) {empData.deptID = null};
  if (empData.quoteID == -1) {empData.quoteID = null};
  if (empData.alias == '') {empData.alias = null};

  postPutDelReq('POST', 'employeeTableBod', '/employee', empData);
  document.getElementById('employeeForm').reset();
}

function delEmp(id) {
  var empData = {empID: id};
  postPutDelReq('DELETE', 'employeeTableBod', '/employee', empData);
}
