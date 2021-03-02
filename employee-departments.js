window.onload = (e) => {
    getReq('empDepRelation', '/employee-departments');
  }
  
  function addEmpDepRelation() {
    var empDeptData = {
      eID: document.getElementById('employeeID').value,
      dID: document.getElementById('deptID').value
    }

    if (empDeptData.eID.length == 0 || empDeptData.dID.length == 0) {
      alert('Input fields cannot be empty!');
    }
  
    postPutDelReq("POST", 'empDepTableBod', '/employee-departments', empDeptData);
    document.getElementById('empDepRelation').reset();
  }