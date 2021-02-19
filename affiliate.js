window.onload = (e) => {
  getReq('affTableBod', '/affiliate');
}

function unlockaff(row){
  toggleButtons(row);

  var hideText = document.getElementsByClassName('affrow'+ row);
  var showInput = document.getElementsByClassName('inputrow' + row);

  for (i=0; i< hideText.length; i++){
    hideText[i].style.display = "none";
  }

  for (i=0; i< showInput.length; i++){
    showInput[i].style.display = "inline";
  }
}

function updateaff(row, affiliateID){
  // PUT req to server !!! remove this after
  lockaff(row);
}

function delaff(affiliateID){
  // delete req to server
}

function lockaff(row){
  toggleButtons(row);

  var showText = document.getElementsByClassName('affrow'+ row);
  var hideInput = document.getElementsByClassName('inputrow' + row);

  for (i=0; i< hideInput.length; i++){
    hideInput[i].style.display = "none";
  }

  for (i=0; i< showText.length; i++){
    showText[i].style.display = "inline";
  }

}

function toggleButtons(row){
  var updateButt = document.getElementById('butUpdate'+ row);
  var saveButt = document.getElementById('butSave'+ row);
  var cancelButt = document.getElementById('butCancel'+ row);
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

//-------------------------------------------------DELETE RELATIONSHIP
function delrelation(eID, aID){};
//-------------------------------------------------DELETE RELATIONSHIP

function addAff(){
  var affData = {
    entityName: document.getElementById('entityName').value,
    industry: document.getElementById('industry').value
  };

  if (affData.entityName.length == 0 || affData.industry.length == 0) {
    alert('Affiliate data fields cannot be submitted empty!');
  };

  postReq('affTableBod', '/affiliate', affData);
  document.getElementById('affForm').reset();
}

function addEmpAff() {
  var empAffData = {
    eID: int(document.getElementById('empSelect').value),
    aID: int(document.getElementById('affSelect').value)
  }

  postReq('relationTable', '/affiliate/empAff', empAffData);
  document.getElementById('affRelInput').reset();
}
