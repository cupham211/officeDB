//-----------------------------------------------------------------Get requests
function getReq(tag, route) {
  req = new XMLHttpRequest();
  req.onload = function () {
    if (req.status === 200) {
      rows = JSON.parse(this.responseText);
      // console.log(rows);
      if (tag == 'employeeFormContainer') {
        createPositionSelector(tag, rows.positions);
        createDeptandHeadSelector(tag, rows.depts);
        createQuoteSelector(tag, rows.quotes);
        createEmployeeTable(rows.employeeTable);
      } else if (tag == 'affTableBod') {
        createAffiliateTable(rows.affiliates);
        createEmployeeSelector("affRelInput", rows.employees);
        createAffiliateSelector("affRelInput", rows.affiliates);
        createEmpAffTable(rows.empAff);
      } else if (tag == 'quoteTableBod') {
        createQuoteTable(rows.quotes);
      } else if (tag == 'departmentTableBod') {
        createDepartmentTable(rows.departments);
      } else if (tag == 'positionFormContainer') {
        createSalaryTierSelector(tag, rows.salaryRanges);
        createPositionTable(rows.positions);
      } else if (tag == 'salaryRangeTableBod') {
        createSalaryRangeTable(rows.salaryRanges);
      } else if (tag == 'empDepRelation') {
        console.log(rows);
        createEmployeeIDSelector(tag, rows.employees);
        createDepartmentIDSelector(tag, rows.departments);
        createEmpDeptRelation(rows.empDept);
      } else if (tag == 'empPosRelation') {
        console.log(rows);
        createEmployeeIDSelector(tag, rows.employees);
        createPositionIDSelector(tag, rows.positions);
        createEmpPosRelation(rows.empPos);
      }

    } else {
      console.log("Error in network request: " + req.statusText);
    }
  }
  // req.open("GET", "http://flip2.engr.oregonstate.edu:3450" + route, true);
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
      if (tag == 'affTableBod') {
        destroyTable(tag);
        createAffiliateTable(rows.affiliates);
        document.getElementById('affInput').remove();
        createAffiliateSelector('affRelInput', rows.affiliates);
      } else if (tag == 'employeeTableBod') {
        destroyTable(tag);
        createEmployeeTable(rows.employeeTable);
      } else if (tag == 'quoteTableBod') {
        destroyTable(tag);
        createQuoteTable(rows.quotes);
      } else if (tag == 'relationTable') {
        destroyTable(tag);
        createEmpAffTable(rows.empAff);
      } else if (tag == 'departmentTableBod') {
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
        createEmpDeptRelation(rows.empDept);
      } else if (tag == 'empPosTableBod') {
        destroyTable(tag);
        createEmpPosRelation(rows.empPos);
      }

    } else {
      console.log("Error in network request: " + req.statusText);
    }
  };

  // req.open("POST", 'http://flip2.engr.oregonstate.edu:3450' + route, true);
  req.open("POST", 'http://flip3.engr.oregonstate.edu:8756' + route, true);
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  console.log(inputs);
  req.send(JSON.stringify(inputs));
}
