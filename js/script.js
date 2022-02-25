//jQuery Code//
function newItem(){

  let li = $('<li></li>'); //List will be defined as li
  let inputValue = $('#input').val(); //inputValue will be defined as val (value) on this function with #input class that was defined 
  li.append(inputValue); //linking inputVale to the function and li (list items)

  if (inputValue === '') { //if the input value is empty
    alert("Please add a list item")//this creates a pop-up to the user
  } else {
    $('list').append.(li) //append will add an item to li
  }

  function crossOut() { //this function of crossOut will toggle the li list to cross (strike) a line through
    li.toggleClass('strike')
  }
  li.on("dblclick", function crossOut() { //will toggle 
    li.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  
  function deleteListItem() {
    li.addClass("delete"); 
  }

  crossOutButton.on("click", deleteListItem);

  $('#list').sortable();
  
  
  }
  
  
    