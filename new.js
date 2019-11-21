function onDeleteAll() {
    console.log("Deleted all history");
  }
  
  function deleteAllHistory() {
   chrome.history.deleteAll(function(){
        onDeleteAll();
    });
  }
  
  deleteAllHistory();
