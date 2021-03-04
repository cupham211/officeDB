window.onload = (e) => {
    getReq('empDepRelation', '/employee-departments');
  }
  
  function verifyEmpDepRelation(){
      var relation = 'e' + document.getElementById('employeeID').value
        + 'd' + document.getElementById('deptID').value;
      let relationships = document.getElementsByClassName('checkRelation');
    
      for (i=0; i<relationships.length; i++){
        if (relationships[i].innerHTML == relation){
          alert('Relationship already exists!');
          return;
        }
      }
      addEmpDepRelation();
    }

  function addEmpDepRelation() {
    var empDeptData = {
      eID: document.getElementById('employeeID').value,
      dID: document.getElementById('deptID').value
    }

    if (empDeptData.eID == "Select.." || empDeptData.dID == "Select..") {
      alert('Input fields cannot be empty!');
    } else {
  
    postPutDelReq("POST", 'empDepTableBod', '/employee-departments', empDeptData);
    document.getElementById('empDepRelation').reset();
    }
  }