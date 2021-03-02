function createQuoteTable(json){
  var tableBod = document.getElementById('quoteTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col" id="${i}${json[i].quoteID}">
      <td>${json[i].quoteID}</td>
      <td><span class="checkQuote quoteRow${i}" style="display:inline;">${json[i].catchPhrase}</span>
        <input type="text" class="inputRow${i}" id="${i}catchPhrase" style="display:none;" value="${json[i].catchPhrase}">
      </td>
      <td><span class="quoteRow${i}" style="display:inline;">${json[i].otherAuthor}</span>
        <input type="text" class="inputRow${i}" id="${i}otherAuthor" style="display:none;" value="${json[i].otherAuthor}">
      </td>
      <td><input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockquote(${i})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updatequote(${i}, ${json[i].quoteID})" style="display:none;"></td>
      <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delquote(${json[i].quoteID})" style="display:inline;">
        <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockquote(${i})" style="display:none;"></td>
    </tr>`;
  }
  tableBod.innerHTML += row;
}


function createEmpAffTable(json){
  var tableBod = document.getElementById("relationTable");
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col">
                <td class="checkRelation" style="display:none;">e${json[i].eID}a${json[i].aID}</td>
                <td>${json[i].eID}</td>
                <td>${json[i].fName}</td>
                <td>${json[i].lName}</td>
                <td>${json[i].aID}</td>
                <td>${json[i].entityName}</td>
                <td><input type="button" class="btn btn-outline-primary delete" value="Delete"
                onclick="delrelation(${json[i].eID}, ${json[i].aID})" style="display:inline;"></td>
              </tr>`;
  }
  tableBod.innerHTML += row;
}

function createAffiliateTable(json){
  var tableBod = document.getElementById('affTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col" id="${i}${json[i].affID}">
      <td>${json[i].affID}</td>
      <td><span class="checkAff affrow${i}" style="display:inline;">${json[i].entityName}</span>
        <input type="text" class="inputrow${i}" id="${i}entityName" style="display:none;" value="${json[i].entityName}">
      </td>
      <td><span class="affrow${i}" style="display:inline;">${json[i].industry}</span>
        <input type="text" class="inputrow${i}" id="${i}industry" style="display:none;" value="${json[i].industry}">
      </td>
      <td><input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockaff(${i})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updateaff(${i}, ${json[i].affID})" style="display:none;"></td>
      <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delaff(${json[i].affID})" style="display:inline;">
        <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockaff(${i})" style="display:none;"></td>
    </tr>`;
  }
  tableBod.innerHTML += row;
}

function createEmployeeTable(json){
  var tableBod = document.getElementById('employeeTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += ` <tr scope="col" id="${i}${json[i].employeeID}">
          <td>${json[i].employeeID}</td>
          <td class="checkFullName" style="display:none;">${json[i].fName} ${json[i].lName}</td>
          <td>${json[i].fName}</td>
          <td>${json[i].lName}</td>
          <td>${json[i].alias}</td>
          <td><span class="spanrow${i}"  style="display:inline;">${json[i].title}</span>
            <div class="input-group mb-3 update${i}" style="display:none;">
              <select class="form-select" id="${i}posID">
                <option value="${json[i].positionID}" selected>${json[i].title}</option>
                <option value="-1">NULL</option>
              </select>
            </div>
          </td>
          <td><span class="spanrow${i}" style="display:inline;">${json[i].deptName}</span>
            <div class="input-group mb-3 update${i}" style="display:none;">
              <select class="form-select" id="${i}deptID">
                <option value="${json[i].departmentID}" selected>${json[i].deptName}</option>
                <option value="-1">NULL</option>
              </select>
            </div>
          </td>
          <td>${json[i].bool}</td>
          <td><span class="spanrow${i}" style="display:inline;">"${json[i].catchPhrase}"</span>
            <div class="input-group mb-3 update${i}" style="display:none;">
              <select class="form-select" id="${i}quoteID">
                <option value="${json[i].quoteID}" selected>"${json[i].catchPhrase}"</option>
                <option value="-1">NULL</option>
              </select>
            </div>
          </td>
          <td>${json[i].employStatus}</td>
          <td>
          <input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockEmployee(${i})" style="display:inline;">
              <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updateEmployee(${i}, ${json[i].employeeID})" style="display:none;"></td>
          <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delEmp(${json[i].employeeID})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockEmployee(${i})" style="display:none;"></td>
        </tr>
        <tr scope="col">`;
  }

  tableBod.innerHTML += row;
}

function createDepartmentTable(json){
  var tableBod = document.getElementById('departmentTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col" id="${i}${json[i].deptID}">
      <td>${json[i].deptID}</td>
      <td><span class="checkDep depRow${i}" style="display:inline;">${json[i].deptName}</span>
        <input type="text" class="inputRow${i}" id="${i}deptName" style="display:none;" value="${json[i].deptName}">
      </td>
      <td><span class="depRow${i}" style="display:inline;">${json[i].budget}</span>
        <input type="number" class="inputRow${i}" id="${i}budget" style="display:none;" value="${json[i].budget}">
      </td>
      <td><span class="depRow${i}" style="display:inline;">${json[i].staffCount}</span>
        <input type="number" class="inputRow${i}" id="${i}staffCount" style="display:none;" value="${json[i].staffCount}">
      </td>
      <td><input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockdep(${i})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updatedep(${i}, ${json[i].deptID})" style="display:none;"></td>
      <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="deldep(${json[i].deptID})" style="display:inline;">
        <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockdep(${i})" style="display:none;"></td>
    </tr>`;
  }
  tableBod.innerHTML += row;
}

function createPositionTable(json){
  var tableBod = document.getElementById('positionTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col" id="${i}${json[i].positionID}">
      <td>${json[i].positionID}</td>
      <td><span class="checkPos posRow${i}" style="display:inline;">${json[i].title}</span>
        <input type="text" class="inputRow${i}" id="${i}title" style="display:none;" value="${json[i].title}">
      </td>
      <td><span class="posRow${i}" style="display:inline;">${json[i].salaryTier}</span>
        <input type="number" class="inputRow${i}" id="${i}salaryTier" style="display:none;" value="${json[i].salaryTier}">
      </td>
      <td><input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockpos(${i})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updatepos(${i}, ${json[i].positionID})" style="display:none;"></td>
      <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delpos(${json[i].positionID})" style="display:inline;">
        <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockpos(${i})" style="display:none;"></td>
    </tr>`;
  }
  tableBod.innerHTML += row;
}

function createSalaryRangeTable(json){
  var tableBod = document.getElementById('salaryRangeTableBod');
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col" id="${i}${json[i].salaryID}">
      <td>${json[i].salaryID}</td>
      <td><span class="checkSalRange salrangeRow${i}" style="display:inline;">${json[i].salaryRange}</span>
        <input type="text" class="inputRow${i}" id="${i}salaryRange" style="display:none;" value="${json[i].salaryRange}">
      </td>
      <td><input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlocksalrange(${i})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updatesalrange(${i}, ${json[i].salaryID})" style="display:none;"></td>
      <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delsalrange(${json[i].salaryID})" style="display:inline;">
        <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="locksalrange(${i})" style="display:none;"></td>
    </tr>`;
  }
  tableBod.innerHTML += row;
}


function createEmpDeptRelation(json) {
  console.log(json);
  var tableBod = document.getElementById("empDepTableBod");
  var row = '';
  for (i = 0; i < json.length; i++) {
    row += `<tr scope="col">
                <td>${json[i].eID}</td>
                <td>${json[i].fName} ${json[i].lName}</td>
                <td>${json[i].dID}</td>
                <td>${json[i].deptName}</td>
              </tr>`;
  }
  tableBod.innerHTML += row;
}

function createEmpPosRelation(json) {
  console.log(json);
  var tableBod = document.getElementById("empPosTableBod");
  var row = '';
  for (i = 0; i < json.length; i++) {
    row += `<tr scope="col">
                <td>${json[i].eID}</td>
                <td>${json[i].fName} ${json[i].lName}</td>
                <td>${json[i].pID}</td>
                <td>${json[i].title}</td>
              </tr>`;
  }
  tableBod.innerHTML += row;
}
//----------------------------------------------------------------Destroy employee table
function destroyTable(id){
  document.getElementById(id).innerHTML = '';
}
