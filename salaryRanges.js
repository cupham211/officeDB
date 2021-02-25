window.onload = (e) => {
  getReq('salaryRangeTableBod', '/salaryRanges');
}

function unlocksalary(row) {
  toggleButtons(row);

  var hideText = document.getElementsByClassName('salaryRow' + row);
  var showInput = document.getElementsByClassName('inputRow' + row);

  for (i = 0; i < hideText.length; i++) {
    hideText[i].style.display = "none";
  }

  for (i = 0; i < showInput.length; i++) {
    showInput[i].style.display = "inline";
  }
}

function updatesalary(row, salaryID) {
  // PUT req to server !!! remove this after
  locksalary(row);
}

function delsalary(salaryID) {
  // delete req to server
}

function locksalary(row) {
  toggleButtons(row);

  var showText = document.getElementsByClassName('salaryRow' + row);
  var hideInput = document.getElementsByClassName('inputRow' + row);

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


function addSalaryRange() {
  var salaryRangeData = {
    salaryRange: document.getElementById('salaryRange').value
  }

  if (salaryRangeData.salaryRange.length == 0) {
    alert('Input fields cannot be empty!');
  }

  postReq('salaryRangeTableBod', '/salaryRanges', salaryRangeData);
  document.getElementById('salaryRangeForm').reset();
}
