// --------------------------------------------make the form selection for salary tier
function createSalaryTierSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var salaryRange =`<div class="input-group mb-3">
  <label class="input-group-text" for="salaryTier">Salary Tier</label>
    <select class="form-select salaryTier" id="salaryTier">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    salaryRange += `<option value="${json[i].salaryID}">"${json[i].salaryRange}"</option>`;
  }

  salaryRange += `</option></select></div>`;
  formObj.innerHTML += salaryRange;
 }

 // --------------------------------------------make the form selection for employee id (emp dept relation)
function createEmployeeIDSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var salaryRange =`<div class="input-group mb-3">
  <label class="input-group-text" for="salaryTier">Salary Tier</label>
    <select class="form-select salaryTier" id="salaryTier">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    salaryRange += `<option value="${json[i].salaryID}">"${json[i].salaryRange}"</option>`;
  }

  salaryRange += `</option></select></div>`;
  formObj.innerHTML += salaryRange;
 }

 // --------------------------------------------make the form selection for department id (emp dept relation)
function createDepartmentIDSelector(tag, json) {
  var formObj = document.getElementById(tag);
  var salaryRange =`<div class="input-group mb-3">
  <label class="input-group-text" for="salaryTier">Salary Tier</label>
    <select class="form-select salaryTier" id="salaryTier">
      <option selected>Select..</option>`;

  for (i=0; i<json.length; i++) {
    salaryRange += `<option value="${json[i].salaryID}">"${json[i].salaryRange}"</option>`;
  }

  salaryRange += `</option></select></div>`;
  formObj.innerHTML += salaryRange;
 }
