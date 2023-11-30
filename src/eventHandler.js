document.addEventListener('DOMContentLoaded', function() {

    // let deleteButtons = document.getElementsByClassName("Delete");
    // for (let i = 0; i < deleteButtons.length; i++) {
    //     deleteButtons[i].addEventListener('mousedown', function(event) {
    //         Delete(event.target);
    //     });
    // }

    //Keyboard handling 
    document.getElementById("taskInput").addEventListener("keypress",function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          Add();
        }
      });




    document.getElementById("AddTask").addEventListener('mousedown', Add);

    document.getElementById("clearAll").addEventListener('mousedown', clearAll);

})