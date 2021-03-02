window.onload = (e) => {
  getReq('quoteTableBod', '/quotes');
}

function unlockquote(row) {
  toggleButtons(row);

  var hideText = document.getElementsByClassName('quoteRow' + row);
  var showInput = document.getElementsByClassName('inputRow' + row);

  for (i = 0; i < hideText.length; i++) {
    hideText[i].style.display = "none";
  }

  for (i = 0; i < showInput.length; i++) {
    showInput[i].style.display = "inline";
  }
}

function updatequote(row, quoteID) {
  var putData = {
    quoteID: parseInt(quoteID),
    catchPhrase: document.getElementById(row + 'catchPhrase').value,
    otherAuthor: document.getElementById(row + 'otherAuthor').value
  };

  postPutDelReq('PUT', 'quoteTableBod', '/quotes', putData);
}

function delquote(quoteID) {
  var delData = {quoteID: parseInt(quoteID)};
  postPutDelReq('DELETE', 'quoteTableBod', '/quotes', delData);
}

function lockquote(row) {
  toggleButtons(row);

  var showText = document.getElementsByClassName('quoteRow' + row);
  var hideInput = document.getElementsByClassName('inputRow' + row);

  for (i = 0; i < hideInput.length; i++) {
    hideInput[i].style.display = "none";
  }
  for (i = 0; i < showText.length; i++) {
    showText[i].style.display = "inline";
  }
}

function toggleButtons(row) {
  var updateButt = document.getElementById('butUpdate' + row);
  var saveButt = document.getElementById('butSave' + row);
  var cancelButt = document.getElementById('butCancel' + row);
  var delButt = document.getElementById('butDel' + row);

  if (updateButt.style.display == "inline") {
    updateButt.style.display = "none";
  } else {
    updateButt.style.display = "inline";
  }

  if (saveButt.style.display == "inline") {
    saveButt.style.display = "none";
  } else {
    saveButt.style.display = "inline";
  }

  if (cancelButt.style.display == "inline") {
    cancelButt.style.display = "none";
  } else {
    cancelButt.style.display = "inline";
  }

  if (delButt.style.display == "inline") {
    delButt.style.display = "none";
  } else {
    delButt.style.display = "inline";
  }
}

function verifyQuote(){
  var quotes = document.getElementsByClassName('checkQuote');
  var catchPhrase = document.getElementById('catchPhrase').value;

  for (i=0; i< quotes.length; i++){
    if (quotes[i].innerHTML.toLowerCase() == catchPhrase.toLowerCase()) {
      alert('Quote already exists!');
      document.getElementById("quoteForm").reset();
      return;
    }
  }
  addQuote();
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
