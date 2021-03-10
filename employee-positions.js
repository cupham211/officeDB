// Did not use in final submission
window.onload = (e) => {
    getReq('empPosRelation', '/employee-positions');
  }
  
  function verifyEmpPosRelation(){
    var relation = 'e' + document.getElementById('employeeID').value
      + 'p' + document.getElementById('positionID').value;
    let relationships = document.getElementsByClassName('checkRelation');
  
    for (i=0; i<relationships.length; i++){
      if (relationships[i].innerHTML == relation){
        alert('Relationship already exists!');
        return;
      }
    }
    addEmpPosRelation();
  }

  function addEmpPosRelation() {
    var empPosData = {
      eID: document.getElementById('employeeID').value,
      pID: document.getElementById('positionID').value
    }
  
    if (empPosData.eID == "Select.." || empPosData.pID == "Select..") {
      alert('Input fields cannot be empty!');
    } else {
  
    postPutDelReq("POST", 'empPosTableBod', '/employee-positions', empPosData);
    document.getElementById('empPosRelation').reset();
    }
  }
  