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

// --------------------------------------------make the form selection for salary tier
function createSalaryTierSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var salaryRange =`<div class="input-group mb-3">
  <label class="input-group-text" for="salaryTier">Salary Tier</label>
    <select class="form-select salaryTier" id="salaryTier">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    salaryRange += `<option value="${json[i].salaryID}">$${json[i].salaryRange}</option>`;
  }

  salaryRange += `</option></select></div>`;
  formObj.innerHTML += salaryRange;
 }
 
  // --------------------------------------------make the form selection for employee id (emp dept relation and emp pos relation)
function createEmployeeIDSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var employeeChoice =`<div class="input-group mb-3">
  <label class="input-group-text" for="employeeID">Employee</label>
    <select class="form-select employeeID" id="employeeID">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    employeeChoice += `<option value="${json[i].employeeID}">${json[i].fName} ${json[i].lName}</option>`;
  }

  employeeChoice += `</option></select></div>`;
  formObj.innerHTML += employeeChoice;
 }

 // --------------------------------------------make the form selection for department id (emp dept relation)
function createDepartmentIDSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var departmentChoice =`<div class="input-group mb-3">
  <label class="input-group-text" for="deptID">Department</label>
    <select class="form-select deptID" id="deptID">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    departmentChoice += `<option value="${json[i].deptID}">${json[i].deptName}</option>`;
  }

  departmentChoice += `</option></select></div>`;
  formObj.innerHTML += departmentChoice;
 }

 // --------------------------------------------make the form selection for position id (emp position relation)
function createPositionIDSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var positionChoice =`<div class="input-group mb-3">
  <label class="input-group-text" for="positionID">Position ID</label>
    <select class="form-select positionID" id="positionID">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    positionChoice += `<option value="${json[i].positionID}">${json[i].title}</option>`;
  }

  positionChoice += `</option></select></div>`;
  formObj.innerHTML += positionChoice;
 }
