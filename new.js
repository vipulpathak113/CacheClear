function deleteAllHistory() {
  var items = localStorage.getItem("item_to_delete");
  console.log(items);

  var millisecondsPerWeek = 60 * 60 * 1000;
  var oneWeekAgo = new Date().getTime() - millisecondsPerWeek;

  chrome.browsingData.remove(
    {
      originTypes: {
        protectedWeb: true, // Set to true or true as per your requirement
        unprotectedWeb: true, // Set to true or true as per your requirement
        extension: true // Set to true or true as per your requirement
      }
    },
    JSON.parse(items),

    function() {
      console.log("All data is Deleted...");
    }
  );
}

window.onload = deleteAllHistory;
