function createQuoteTable(json){
  var tableBod = document.getElementById("quoteTableBod");
  var row = '';

  for (i=0; i<json.length; i++){
    row += `<tr scope="col">
          <td>${json[i].quoteID}</td>
          <td>${json[i].catchPhrase}</td>
          <td>${json[i].otherAuthor}</td>
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

function createEmployeeTable(emp, positions, depts, quotes){
  var tableBod = document.getElementById('employeeTableBod');
  var row = '';

  for (i=0; i<emp.length; i++){
    row += ` <tr scope="col" id="${i}${emp[i].employeeID}">
          <td>${emp[i].employeeID}</td>
          <td class="checkFullName" style="display:none;">${emp[i].fName} ${emp[i].lName}</td>
          <td>${emp[i].fName}</td>
          <td>${emp[i].lName}</td>
          <td>${emp[i].alias}</td>
          <td><span class="spanrow${i}"  style="display:inline;">${emp[i].title}</span>

              <select class="form-select update${i}" style="display:none;" id="${i}posID">
                <option value="${emp[i].positionID}" selected>${emp[i].title}</option>`;
                for (j=0; j<positions.length; j++){
                  if (emp[i].positionID != positions[j].positionID) {
                    row += `<option value="${positions[j].positionID}">${positions[j].title}</option>`;
                  }
                }
          row +=  `<option value="-1">NULL</option>
              </select>

          </td>
          <td><span class="spanrow${i}" style="display:inline;">${emp[i].deptName}</span>

              <select class="form-select update${i}" style="display:none;" id="${i}deptID">
                <option value="${emp[i].departmentID}" selected>${emp[i].deptName}</option>`;
                for (k=0; k<depts.length; k++){
                  if (emp[i].departmentID != depts[k].deptID){
                    row += `<option value="${depts[k].deptID}">${depts[k].deptName}</option>`;
                  }
                }
          row += `<option value="-1">NULL</option>
              </select>

          </td>
          <td>${emp[i].bool}</td>
          <td><span class="spanrow${i}" style="display:inline;">"${emp[i].catchPhrase}"</span>

              <select class="form-select update${i}" style="display:none;" id="${i}quoteID">
                <option value="${emp[i].quoteID}" selected>"${emp[i].catchPhrase}"</option>`;
                for (l=0; l<quotes.length; l++) {
                  if (emp[i].quoteID != quotes[l].quoteID){
                    row += `<option value="${quotes[l].quoteID}">"${quotes[l].catchPhrase}"</option>`;
                  }
                }
          row += `<option value="-1">NULL</option>
              </select>

          </td>
          <td>${emp[i].employStatus}</td>
          <td>
          <input type="button" class="btn btn-outline-primary update" id="butUpdate${i}" value="Update" onclick="unlockEmployee(${i})" style="display:inline;">
              <input type="button" class="btn btn-outline-primary save" id="butSave${i}" value="Save" onclick="updateEmployee(${i}, ${emp[i].employeeID})" style="display:none;"></td>
          <td><input type="button" class="btn btn-outline-primary delete" id="butDel${i}" value="Delete" onclick="delEmp(${emp[i].employeeID})" style="display:inline;">
          <input type="button" class="btn btn-outline-primary cancel" id='butCancel${i}' value="Cancel" onclick="lockEmployee(${i})" style="display:none;"></td>
        </tr>
        <tr scope="col">`;
  }

  tableBod.innerHTML += row;
}
//----------------------------------------------------------------Destroy employee table
function destroyTable(id){
  document.getElementById(id).innerHTML = '';
}
