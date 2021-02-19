// --------------------------------------------make the form selection for notable quotes
function createQuoteSelector(tag, json){
    var formObj = document.getElementById(tag);
    var quote =`<div class="input-group mb-3">
    <label class="input-group-text" for="quotes">Memorable Quotes</label>
    <select class="form-select quotes" id="quotes">
      <option selected>Choose..</option>`;
  
    for (i=0; i<json.length; i++) {
      quote += `<option value="${json[i].quoteID}">"${json[i].catchPhrase}"</option>`;
    }
  
    quote += `<option value="-1">NULL</option></select></div>`;
    formObj.innerHTML += quote;
   }
  // --------------------------------------------make the form selection for positions
  function createPositionSelector(tag, json){
    var formObj = document.getElementById(tag);
    var pos = `<div class="input-group mb-3">
    <label class="input-group-text" for="position">Position</label>
    <select class="form-select position" id="position">
      <option selected>Choose..</option>`;
  
    for (i=0; i<json.length; i++){
      pos += `<option value="${json[i].positionID}">${json[i].title}</option>`;
    }
  
    pos += `<option value="-1">NULL</option></select></div>`;
    formObj.innerHTML += pos;
   }
  // --------------------------------------------make the form selection for depts and dept head
  function createDeptandHeadSelector(tag, json){
    var formObj = document.getElementById(tag);
    var dept = `<div class="input-group mb-3">
    <label class="input-group-text" for="department">Department</label>
    <select class="form-select department" id="department">
      <option selected>Choose..</option>`;
  
    for (i=0; i<json.length; i++){
      dept += `<option value="${json[i].deptID}">${json[i].deptName}</option>`;
    }
  
    dept += `<option value="-1">NULL</option>
    </select>
    </div>
    <div class="input-group mb-3">
    <label class="input-group-text" for="dept head bool">Department Head</label>
    <select class="form-select deptHead" id="deptHead">
      <option selected>Choose..</option>
      <option value=0>No</option>
      <option value=1>Yes</option>
    </select>
    </div>`;
    formObj.innerHTML += dept;
   }
  // --------------------------------------------make the form selection for affiliates
  function createAffiliateSelector(tag, json){
    var formObj = document.getElementById(tag);
    var aff = `<div class="input-group mb-3" id="affInput">
    <label class="input-group-text" for="affiliates">Affiliates</label>
    <select class="form-select affiliates" id="affSelect">
      <option selected>Choose..</option>`;
  
    for (i=0; i<json.length; i++){
      aff += `<option value="${json[i].affID}">${json[i].entityName}</option>`;
    }
  
    formObj.innerHTML += aff;
   }
   // --------------------------------------------make the form selection for Employees
   function createEmployeeSelector(tag, json){
     var formObj = document.getElementById(tag);
     var emp = `  <div class="input-group mb-3">
         <label class="input-group-text" for="employees">Employee</label>
         <select class="form-select employees" id="empSelect">
           <option selected>Choose..</option>`;
  
    for (i=0; i<json.length; i++){
      emp += `<option value="${json[i].employeeID}">${json[i].fullName}</option>`;
    }
  
    formObj.innerHTML += emp;
   }
  