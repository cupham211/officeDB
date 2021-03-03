window.onload = (e) => {
    getReq('empPosRelation', '/employee-positions');
  }
  
  function addEmpPosRelation() {
    var empPosData = {
      eID: document.getElementById('employeeID').value,
      pID: document.getElementById('positionID').value
    }
  
    if (empPosData.eID.length == 0 || empPosData.pID.length == 0) {
      alert('Input fields cannot be empty!');
    }
  
    postPutDelReq("POST", 'empPosTableBod', '/employee-positions', empPosData);
    document.getElementById('empPosRelation').reset();
  }
  