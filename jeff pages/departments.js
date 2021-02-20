window.onload = (e) => {
    getReq('departmentTableBod', '/departments');
  }
  
  function addDepartment() {
    var departmentData = {
      deptName: document.getElementById('deptName').value,
      budget: document.getElementById('budget').value,
      staffCount: document.getElementById('staffCount').value
    }
  
    if (departmentData.deptName.length == 0 || departmentData.budget.length == 0 || departmentData.staffCount.length == 0) {
      alert('Input fields cannot be empty!');
    }
  
    postReq('departmentTableBod', '/departments', departmentData);
    document.getElementById('departmentForm').reset();
  }
  