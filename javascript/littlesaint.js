function display(){
  alert("Hello Tom");
}
  function showList(){
    fetch("javascript/obj.json")
      .then(response => response.json())
      .then(data => createList(data));
	  document.write(data)
	  
  }