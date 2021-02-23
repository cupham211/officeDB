window.onload = (e) => {
  getReq('positionFormContainer', '/positions');
}

function addPosition() {
  var positionData = {
    title: document.getElementById('title').value,
    salaryTier: document.getElementById('salaryTier').value
  }

  if (positionData.title.length == 0 || positionData.salaryTier.length == 0) {
    alert('Input fields cannot be empty!');
  }

  postReq('positionTableBod', '/positions', positionData);
  document.getElementById('positionFormContainer').reset();
}

