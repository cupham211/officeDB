//-----------------------------------------------------------------Get requests
function getReq(tag, route) {
  req = new XMLHttpRequest();
  req.onload = function () {
    if (req.status === 200) {
      rows = JSON.parse(this.responseText);
      console.log(rows);
      if (tag == 'departmentTableBod') {
        createDepartmentTable(rows.departments);
      }
      else if (tag == 'positionFormContainer') {
        createSalaryTierSelector(tag, rows.salaryRanges);
        createPositionTable(rows.positions);
      }
      else if (tag == 'salaryRangeTableBod') {
        createSalaryRangeTable(rows.salaryRanges);
      }
      else if (tag == 'empDepRelation') {
        console.log(rows);
        createEmployeeIDSelector(tag, rows.salaryRanges);
        createDepartmentIDSelector(tag, rows.salaryRanges);
        createEmpDeptRelation(rows.positions);
      }
    } else {
      console.log("Error in network request: " + req.statusText);
    }
  }
  req.open("GET", "http://flip3.engr.oregonstate.edu:8756" + route, true);
  req.send();
}

//-----------------------------------------------------------------Post requests
function postReq(tag, route, inputs) {
  var req = new XMLHttpRequest();

  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      var rows = JSON.parse(req.responseText);
      console.log(rows);
        if (tag == 'departmentTableBod') {
        destroyTable(tag);
        createDepartmentTable(rows.departments);
      } else if (tag == 'positionTableBod') {
        destroyTable(tag);
        createPositionTable(rows.positions);
      } else if (tag == 'salaryRangeTableBod') {
        destroyTable(tag);
        createSalaryRangeTable(rows.salaryRanges);
      } else if (tag == 'empDepTableBod') {
        destroyTable(tag);
        createEmpDeptRelation(rows);
      }

    } else {
      console.log("Error in network request: " + req.statusText);
    }
  };
  req.open("POST", 'http://flip3.engr.oregonstate.edu:8756' + route, true);
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  console.log(inputs);
  req.send(JSON.stringify(inputs));
}
