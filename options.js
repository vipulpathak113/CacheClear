window.addEventListener("load", function() {
  var itemstoget = JSON.parse(localStorage.getItem("item_to_delete")) || {
    cache: true
  };

  var timePeriod = localStorage.getItem("time_period") || "last_hour";

  document.querySelector(`option[value="${timePeriod}"]`).selected = true;

  var keys = Object.keys(itemstoget);

  var inputElements = document.getElementsByTagName("input");

  if (keys) {
    for (var i = 0; i < keys.length; i++) {
      for (var j = 0; inputElements[j]; j++) {
        if (inputElements[j].id === keys[i]) {
          inputElements[j].checked = true;
        }
      }
    }
  }
});

var checkBoxes = document.getElementById("checkboxes");
checkBoxes.addEventListener("click", function(e) {
  var checkedValue = null;
  var checkitem = JSON.parse(localStorage.getItem("item_to_delete")) || {
    cache: true
  };

  var newItem = Object.entries(checkitem);
  var newobject = {};

  if (e.target.checked) {
    checkedValue = e.target.id;
    newItem.push([checkedValue, e.target.checked]);
    newobject = Object.fromEntries(newItem);
    localStorage.setItem("item_to_delete", JSON.stringify(newobject));
  } else {
    for (var i = 0; i < newItem.length; i++) {
      if (
        newItem[i][0] == [e.target.id, true][0] &&
        newItem[i][1] == [e.target.id, true][1]
      ) {
        newItem.splice(i, 1);
        newobject = Object.fromEntries(newItem);
        localStorage.setItem("item_to_delete", JSON.stringify(newobject));
      }
    }
  }
});

const activities = document.getElementById("time_period");

activities.addEventListener("change", e => {
  localStorage.setItem("time_period", e.target.value);
});
