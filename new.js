function deleteAllHistory() {
  var items = localStorage.getItem("item_to_delete") || '{"cache": true}';
  var newest = localStorage.getItem("time_period") || "last_hour";
  switch (newest) {
    case "last_hour":
      sinceTime = new Date().getTime() - 3600000;
      break;
    case "last_24hour":
      sinceTime = new Date().getTime() - 86400000;
      break;
    case "last_7days":
      sinceTime = new Date().getTime() - 604800000;
      break;
    case "last_4weeks":
      sinceTime = new Date().getTime() - 2419200000;
      break;
    case "all_time":
      sinceTime = "";
      break;
    default:
      sinceTime = new Date().getTime() - 3600000;
  }

  chrome.browsingData.remove(
    {
      since: sinceTime,
      originTypes: {
        protectedWeb: true,
        unprotectedWeb: true,
        extension: true
      }
    },
    JSON.parse(items),

    function() {
      window.close();
    }
  );
}

window.onload = deleteAllHistory;
