window.onload = (e) => {
  getReq('salaryRangeTableBod', '/salaryRanges');
}

function unlocksalrange(row) {
  toggleButtons(row);

  var hideText = document.getElementsByClassName('salrangeRow' + row);
  var showInput = document.getElementsByClassName('inputRow' + row);

  for (i = 0; i < hideText.length; i++) {
    hideText[i].style.display = "none";
  }

  for (i = 0; i < showInput.length; i++) {
    showInput[i].style.display = "inline";
  }
}

function updatesalrange(row, salaryID) {
  var putData = {
    salaryID: parseInt(salaryID),
    salaryRange: document.getElementById(row + 'salaryRange').value
  };

  postPutDelReq('PUT', 'salaryRangeTableBod', '/salaryRanges', putData);
}

function delsalrange(salaryID) {
  var delData = {salaryID: parseInt(salaryID)};
  postPutDelReq('DELETE', 'salaryRangeTableBod', '/salaryRanges', delData);
}

function locksalrange(row) {
  toggleButtons(row);

  var showText = document.getElementsByClassName('salrangeRow' + row);
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

function verifySalRange(){
  var sals = document.getElementsByClassName('checkSalRange');
  var salRanges = document.getElementById('salaryRange').value;

  for (i=0; i< sals.length; i++){
    if (sals[i].innerHTML.toLowerCase() == salRanges.toLowerCase()) {
      alert('Salary Range already exists!');
      document.getElementById("salaryRangeForm").reset();
      return;
    }
  }
  addSalaryRange();
}


function addSalaryRange() {
  var salaryRangeData = {
    salaryRange: document.getElementById('salaryRange').value
  }

  if (salaryRangeData.salaryRange.length == 0) {
    alert('Input fields cannot be empty!');
  } else {
  postPutDelReq("POST", 'salaryRangeTableBod', '/salaryRanges', salaryRangeData);
  document.getElementById('salaryRangeForm').reset();
  }
}
