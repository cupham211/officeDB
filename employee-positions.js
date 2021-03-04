window.onload = (e) => {
    getReq('empPosRelation', '/employee-positions');
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
  