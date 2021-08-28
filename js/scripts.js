function newItem(){

  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if(inputValue === "") {
    alert("You must write something!")
  } else {
    $("#list").append(li);
  }

  function crossOut() {
    li.classList.toggle("strike");
  }

  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete")
  }

  $('#list').sortable();

}
