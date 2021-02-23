window.onload = (e) => {
    getReq('salaryRangeTableBod', '/salaryRanges');
  }
  
  function addSalaryRange() {
    var salaryRangeData = {
      salaryRange: document.getElementById('salaryRange').value
    }
  
    if (salaryRangeData.salaryRange.length == 0) {
      alert('Input fields cannot be empty!');
    }
  
    postReq('salaryRangeTableBod', '/salaryRanges', salaryRangeData);
    document.getElementById('salaryRangeForm').reset();
  }
  