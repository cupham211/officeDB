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
  // PUT request to server !!!!!!!!! remove lockEmployee after implementation
  lockEmployee(row);
}

function toggleButtons(row) {
  var updateButt = document.getElementById('butUpdate'+row);
  var saveButt = document.getElementById('butSave'+row);
  var cancelButt = document.getElementById('butCancel'+row);

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
}

function addEmployee() {
  var empData = {
    fName: document.getElementById('fName').value,
    lName: document.getElementById('lName').value,
    alias: document.getElementById('alias').value,
    positionID: int(document.getElementById('position').value),
    deptID: int(document.getElementById('department').value),
    employStatus: document.getElementById('status').value,
    quoteID: int(document.getElementById('quotes').value),
    deptHead: int(document.getElementById('deptHead').value)
  };

  if (empData.positionID == -1) {empData.positionID = NULL};
  if (empData.deptID == -1) {empData.deptID = NULL};
  if (empData.quoteID == -1) {empData.quoteID = NULL};
  if (empData.alias == '') {empData.alias = 'None'};

  postReq('employeeTableBod', '/employee', empData);
  document.getElementById('employeeForm').reset();
}
