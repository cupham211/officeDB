window.onload = (e) => {
    getReq('empDepRelation', '/employee-departments');
  }
  
  function verifyEmpDepRelation(){
    var quotes = document.getElementsByClassName('checkQuote');
    var catchPhrase = document.getElementById('catchPhrase').value;
  
    for (i=0; i< quotes.length; i++){
      if (quotes[i].innerHTML.toLowerCase() == catchPhrase.toLowerCase()) {
        alert('Quote already exists!');
        document.getElementById("quoteForm").reset();
        return;
      }
    }
    addQuote();
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