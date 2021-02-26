window.onload = (e) => {
  getReq('quoteTableBod', '/quotes');
}

function addQuote() {
  var quoteData = {
    catchPhrase: document.getElementById('catchPhrase').value,
    otherAuthor: document.getElementById('otherAuthor').value
  }

  if (quoteData.catchPhrase.length == 0) {
    alert('Quote field cannot be empty!');
    return;
  }
    if (quoteData.otherAuthor.length == 0) {
      quoteData.otherAuthor = null;
    }

  postPutDelReq("POST", 'quoteTableBod', '/quotes', quoteData);
  document.getElementById('quoteForm').reset();
}
