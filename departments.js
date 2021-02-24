window.onload = (e) => {
  getReq('departmentTableBod', '/departments');
}

function unlockdep(row) {
  toggleButtons(row);

  var hideText = document.getElementsByClassName('deprow' + row);
  var showInput = document.getElementsByClassName('inputrow' + row);

  for (i = 0; i < hideText.length; i++) {
    hideText[i].style.display = "none";
  }

  for (i = 0; i < showInput.length; i++) {
    showInput[i].style.display = "inline";
  }
}

function updatedep(row, deptID) {
  // PUT req to server !!! remove this after
  lockdep(row);
}

function deldep(deptID) {
  // delete req to server
}

function lockdep(row) {
  toggleButtons(row);

  var showText = document.getElementsByClassName('deprow' + row);
  var hideInput = document.getElementsByClassName('inputrow' + row);

  for (i = 0; i < hideInput.length; i++) {
    hideInput[i].style.display = "none";
  }
  for (i = 0; i < showText.length; i++) {
    showText[i].style.display = "inline";
  }
}

function toggleButtons(row) {
  var updateButt = document.getElementById('butUpdate' + row);
  var saveButt = document.getElementById('butSave' + row);
  var cancelButt = document.getElementById('butCancel' + row);
  var delButt = document.getElementById('butDel' + row);

  if (updateButt.style.display == "inline") {
    updateButt.style.display = "none";
  } else {
    updateButt.style.display = "inline";
  }

  if (saveButt.style.display == "inline") {
    saveButt.style.display = "none";
  } else {
    saveButt.style.display = "inline";
  }

  if (cancelButt.style.display == "inline") {
    cancelButt.style.display = "none";
  } else {
    cancelButt.style.display = "inline";
  }

  if (delButt.style.display == "inline") {
    delButt.style.display = "none";
  } else {
    delButt.style.display = "inline";
  }
}

function addDepartment() {
  var departmentData = {
    deptName: document.getElementById('deptName').value,
    budget: document.getElementById('budget').value,
    staffCount: document.getElementById('staffCount').value
  }

  if (departmentData.deptName.length == 0 || departmentData.budget.length == 0 || departmentData.staffCount.length == 0) {
    alert('Input fields cannot be empty!');
  }

  postReq('departmentTableBod', '/departments', departmentData);
  document.getElementById('departmentForm').reset();
}
