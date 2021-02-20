window.onload = (e) => {
    getReq('positionTableBod', '/positions');
  }
  
  function addPosition() {
    var positionData = {
      positionTitle: document.getElementById('positionTitle').value,
      salaryTier: document.getElementById('salaryTier').value
    }
  
    if (positionData.positionTitle.length == 0 || positionData.salaryTier.length == 0) {
      alert('Input fields cannot be empty!');
    }
  
    postReq('positionTableBod', '/positions', positionData);
    document.getElementById('quoteForm').reset();
  }
  