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
  var putData = {
    affID: parseInt(affiliateID),
    entity: document.getElementById(row + 'entityName').value,
    industry: document.getElementById(row + 'industry').value
  };

  postPutDelReq('PUT', 'affTableBod', '/affiliate', putData);
}

function delaff(affiliateID){
  var delData = {affID: parseInt(affiliateID)};
  postPutDelReq('DELETE', 'affTableBod', '/affiliate', delData);
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
function delrelation(eID, aID){
  var delData = {eID: eID, aID: aID};
  postPutDelReq("DELETE", 'relationTable', '/affiliate/empAff', delData);
};

function verifyRelDup(){
  var relation = 'e' + document.getElementById('empSelect').value
    + 'a' + document.getElementById('affSelect').value;
  let relationships = document.getElementsByClassName('checkRelation');

  for (i=0; i<relationships.length; i++){
    if (relationships[i].innerHTML == relation){
      alert('Relationship already exists!');
      return;
    }
  }
  addEmpAff();
}

function verifyAff(){
  let affs = document.getElementsByClassName('checkAff');
  let entity = document.getElementById('entityName').value;

  for (i=0; i< affs.length; i++){
    if (affs[i].innerHTML.toLowerCase() == entity.toLowerCase()) {
      alert('Entity already exists!');
      document.getElementById("affForm").reset();
      return;
    }
  }
  addAff();
}

function addAff(){
  var affData = {
    entityName: document.getElementById('entityName').value,
    industry: document.getElementById('industry').value
  };

  if (affData.entityName.length == 0 || affData.industry.length == 0) {
    alert('Affiliate data fields cannot be submitted empty!');
  };

  postPutDelReq("POST", 'affTableBod', '/affiliate', affData);
  document.getElementById('affForm').reset();
}

function addEmpAff() {
  var empAffData = {
    eID: parseInt(document.getElementById('empSelect').value),
    aID: parseInt(document.getElementById('affSelect').value)
  }

  postPutDelReq('POST', 'relationTable', '/affiliate/empAff', empAffData);
  document.getElementById('affRelInput').reset();
}
