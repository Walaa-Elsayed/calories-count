function display_UserName(){

  let user_name_value = document.getElementById('user_name').value; // First we get the name of user from input text

    // then we display welcome message internal the html page
    let msg = "<span id='welcome_txt'> Welcome </span>  <span id='u_name'> " + user_name_value +"</span>"; 
    document.getElementById('display_name').innerHTML = msg;

    // We make the block that used to display name visible
    document.getElementById("display_name").style.visibility = "visible";
    
    // then we display the apen_app button to the user
    document.getElementById('open_app').style.display ='block';
   
  }

  // this function used to open the application when the user click on open_app button
  function open_app(){
    window.open("home.html","_self"); // open application home page in the same window
  }

  
  // When the user click on submit button we call display_UserName() function 
  document.getElementById('submit_name').addEventListener('click', display_UserName); 

  // When the user click on open_app button we call open_app() function 
  document.getElementById('open_app').addEventListener('click', open_app);