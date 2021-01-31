function unlockaff(affiliateID){
  toggleButtons(affiliateID);

  var hideText = document.getElementsByClassName('affrow'+ affiliateID);
  var showInput = document.getElementsByClassName('inputrow' + affiliateID);

  for (i=0; i< hideText.length; i++){
    hideText[i].style.display = "none";
  }

  for (i=0; i< showInput.length; i++){
    showInput[i].style.display = "inline";
  }
}

function updateaff(affiliateID){
  // PUT req to server !!! remove this after
  lockaff(affiliateID);
}

function delaff(affiliateID){
  // delete req to server
  toggleButtons(affiliateID);
}

function lockaff(affiliateID){
  toggleButtons(affiliateID);

  var showText = document.getElementsByClassName('affrow'+ affiliateID);
  var hideInput = document.getElementsByClassName('inputrow' + affiliateID);

  for (i=0; i< hideInput.length; i++){
    hideInput[i].style.display = "none";
  }

  for (i=0; i< showText.length; i++){
    showText[i].style.display = "inline";
  }

}

function toggleButtons(affiliateID){
  var updateButt = document.getElementById('butUpdate'+ affiliateID);
  var saveButt = document.getElementById('butSave'+ affiliateID);
  var cancelButt = document.getElementById('butCancel'+ affiliateID);
  var delButt = document.getElementById('butDel'+ affiliateID);

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
