document.addEventListener("click", function() {
  var checkedValue = null;
  var checkitem = [];
  var newobject = {};
  var inputElements = document.getElementsByTagName("input");
  for (var i = 0; inputElements[i]; i++) {
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].name;
      checkitem.push([checkedValue, inputElements[i].checked]);
    }
  }
  newobject = Object.fromEntries(checkitem);
  localStorage.setItem("item_to_delete", JSON.stringify(newobject));
});

const activities = document.getElementById("Mobility");

activities.addEventListener("change", e => {
  localStorage.setItem("time_period",e.target.value)
  var newest= localStorage.getItem("time_period")
  console.log(newest.evaluate());
});
