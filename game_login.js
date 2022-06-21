
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("Player1",player1_name);
  localStorage.setItem("Player2",player2_name);
    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function

    window.location = "game_page.html";
}

