function unlockEmployee(employeeID) {
  toggleButtons(employeeID);

  var hideText = document.getElementsByClassName('spanrow'+ employeeID);
  var locks = document.getElementsByClassName('update'+ employeeID);

  for (i =0; i<hideText.length; i++){
    hideText[i].style.display = "none";
  }
  for (i =0; i<locks.length; i++){
    locks[i].style.display = "inline";
  }
}

function lockEmployee(employeeID) {
  var showText = document.getElementsByClassName('spanrow'+ employeeID);
  var hide = document.getElementsByClassName('update'+ employeeID);

  for (i =0; i<hide.length; i++){
    hide[i].style.display = "none";
  }
  for (i =0; i<showText.length; i++){
    showText[i].style.display = "inline";
  }

  toggleButtons(employeeID);
}

function updateEmployee(employeeID) {
  // PUT request to server !!!!!!!!! remove lockEmployee after implementation
  lockEmployee(employeeID);
}

function toggleButtons(employeeID) {
  var updateButt = document.getElementById('butUpdate'+employeeID);
  var saveButt = document.getElementById('butSave'+employeeID);
  var cancelButt = document.getElementById('butCancel'+employeeID);

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
