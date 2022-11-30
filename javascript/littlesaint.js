function display(){
  alert("Hello Tom");
}
function createList(data){
document.write(data)
}
  function showList(){
    fetch("https://tommytwotap.github.io/littlesaint/javascript/obj.json")
      .then(response => response.json())
      .then(data => createList(data));
	   }