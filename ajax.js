//-----------------------------------------------------------------Get requests
function getReq(tag, route) {
  req = new XMLHttpRequest();
  req.onload = function() {
    if (req.status === 200) {
      rows = JSON.parse(this.responseText);

      console.log(rows);
      if (tag == 'employeeFormContainer'){
        createPositionSelector(tag, rows.positions);
        createDeptandHeadSelector(tag, rows.depts);
        createQuoteSelector(tag, rows.quotes);
        createEmployeeTable(rows.employeeTable, rows.positions, rows.depts, rows.quotes);
      } else if (tag == 'affTableBod'){
          createAffiliateTable(rows.affiliates);
          createEmployeeSelector("affRelInput", rows.employees);
          createAffiliateSelector("affRelInput", rows.affiliates);
          createEmpAffTable(rows.empAff);
      } else if (tag == 'quoteTableBod'){
          createQuoteTable(rows.quotes);
      } else if (tag == 'departmentTableBod') {
          createDepartmentTable(rows.departments);
      } else if (tag == 'positionFormContainer') {
          createSalaryTierSelector(tag, rows.salaryRanges);
          createPositionTable(rows.positions, rows.salaryRanges);
      } else if (tag == 'salaryRangeTableBod') {
          createSalaryRangeTable(rows.salaryRanges);
      } else if (tag == 'empDepRelation') {
          createEmployeeIDSelector(tag, rows.employees);
          createDepartmentIDSelector(tag, rows.departments);
          createEmpDeptRelation(rows.empDept);
      } else if (tag == 'empPosRelation') {
          createEmployeeIDSelector(tag, rows.employees);
          createPositionIDSelector(tag, rows.positions);
          createEmpPosRelation(rows.empPos);
      }

    } else {
      console.log("Error in network request: " + req.statusText);}
  }
  req.open("GET", "http://flip3.engr.oregonstate.edu:8559"+ route, true);
  req.send();
}

//-----------------------------------------------------------------Post/Put/Delete requests
function postPutDelReq(reqType, tag, route, inputs) {
  var req = new XMLHttpRequest();
    // console.log(reqType);
    // console.log(tag);
    // console.log(route);
    // console.log(inputs);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      var rows = JSON.parse(req.responseText);

      console.log(rows);
      if (tag == 'affTableBod' && reqType == "POST") {
        destroyTable(tag);
        createAffiliateTable(rows.affiliates);
        document.getElementById('affInput').remove();
        createAffiliateSelector('affRelInput', rows.affiliates);
      } else if (tag == 'employeeTableBod'){
          destroyTable(tag);
          createEmployeeTable(rows.employeeTable, rows.positions, rows.depts, rows.quotes);
      } else if (tag == 'quoteTableBod') {
          destroyTable(tag);
          createQuoteTable(rows.quotes);
      } else if (tag == 'relationTable'){
          destroyTable(tag);
          createEmpAffTable(rows.empAff);
      } else if (tag == 'affTableBod' && (reqType == "PUT" || reqType == "DELETE")) {
          destroyTable(tag);
          createAffiliateTable(rows.affiliates);
          document.getElementById('affInput').remove();
          createAffiliateSelector('affRelInput', rows.affiliates);
          destroyTable('relationTable');
          createEmpAffTable(rows.empAff);
      } else if (tag == 'departmentTableBod') {
          destroyTable(tag);
          createDepartmentTable(rows.departments);
      } else if (tag == 'positionTableBod') {
          destroyTable(tag);
          createPositionTable(rows.positions, rows.salaryRanges);
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
  }
    req.open(reqType, 'http://flip3.engr.oregonstate.edu:8559'+ route, true);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    req.send(JSON.stringify(inputs));
}
