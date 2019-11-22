window.addEventListener("load",function(){
var itemstoget= JSON.parse(localStorage.getItem("item_to_delete")) || {cache: true}
console.log(itemstoget)

var timePeriod=localStorage.getItem("time_period");

document.querySelector('option[value=" + timePeriod +"]').selected = true

var keys = Object.keys(itemstoget);
console.log(keys)

var inputElements = document.getElementsByTagName("input");

if(keys){
for(var i=0;i<keys.length; i++){
for (var j = 0; inputElements[j]; j++) {
  if (inputElements[j].id===keys[i]) {
    inputElements[j].checked=true
  }
}
}

}

})

var checkBoxes = document.getElementById("checkboxes");
checkBoxes.addEventListener("click", function (e) {
console.log(e.target.id)
  var checkedValue = null;
  var checkitem = JSON.parse(localStorage.getItem("item_to_delete"))|| {cache: true};

  var abc= Object.entries(checkitem)
  console.log(abc)
  var newobject = {};

    if (e.target.checked) {
      checkedValue = e.target.id;
      abc.push([checkedValue, e.target.checked]);
      console.log(abc)
      newobject = Object.fromEntries(abc);
  localStorage.setItem("item_to_delete", JSON.stringify(newobject));
    }
    else{
      console.log(abc)
      console.log([e.target.id, true])

      for ( var i = 0; i < abc.length; i++ ) {
        if ( abc[i][0] == [e.target.id, true][0] && abc[i][1] == [e.target.id, true][1] ) {
            console.log(i);
            abc.splice(i,1)
            console.log(abc)
            newobject = Object.fromEntries(abc);
  localStorage.setItem("item_to_delete", JSON.stringify(newobject));
        }
    }
    }


});

const activities = document.getElementById("time_period");

activities.addEventListener("change", e => {
  localStorage.setItem("time_period",e.target.value)
});