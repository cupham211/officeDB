window.onload = (e) => {
  getReq('quoteTableBod', '/quotes');
}

function addQuote() {
  var quoteData = {
    catchPhrase: document.getElementById('catchPhrase').value,
    otherAuthor: document.getElementById('otherAuthor').value
  }

  if (quoteData.catchPhrase.length == 0 || quoteData.otherAuthor.length == 0) {
    alert('Input fields cannot be empty!');
  }

  postReq('quoteTableBod', '/quotes', quoteData);
  document.getElementById('quoteForm').reset();
}
