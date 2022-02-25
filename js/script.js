//jQuery Code//
function newItem(){

  let li = $('<li></li>'); //List will be defined as li
  let inputValue = $('#input').val(); //inputValue will be defined as val (value) on this function with #input class that was defined
  li.append(inputValue); //linking inputVale to the function and li (list items)

  if (inputValue === '') {  //if input value is empty this will create a pop-up with message
  alert("Please add a list item");
} else {
  $('#list').append(li); //if list is not empty it will append (add) a li
}

  function crossOut() { //this function of crossOut will toggle the li list to cross (strike) a line through
    li.toggleClass('strike')
  }
  li.on("dblclick", function crossOut() { //will toggle
    li.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>'); //This is the delete button
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  function deleteListItem() { //this is the function that will delete item from the list
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem); //button to officially delete item

  $('#list').sortable(); //this will allow us to move items around on list 


  }
