
var checkedValue = null; 
var checkitem=JSON.parse(localStorage.getItem('inputs')) || [];
var inputElements = document.getElementsByTagName('input');
for(var i=0; inputElements[i]; i++){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].name;
           console.log(checkedValue);
           checkitem= {checkedValue:inputElements[i].checked}
           checkitem.push(checkitem);
      }

      localStorage.setItem('inputs', JSON.stringify(checkitem));
}