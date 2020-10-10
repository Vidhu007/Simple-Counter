let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// btns[0] mein btn-decrease, btns[1] mein btn-reset, btns[2] mien btn-inc
//The forEach() method calls a function once for each element in an array, in order.

btns.forEach(function (item)     {


    //element.addEventListener(event, function,useCaptur(Optional) )
    //When the event occurs, an event object is passed to the function as the first parameter...let its name be 'e'

item.addEventListener("click", function (e)      {

    const styles = e.currentTarget.classList;
    // currentTarget Get the element whose event listeners triggered a specific event:
    // the  function to run when the event occurs
    //The classList property returns the class name(s) of an element
    
    if(styles.contains("decrease")) {
        count --;
    }
    else if (styles.contains("increase")) {
        count ++;

    }
    else count = 0;
    if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "blue";
      }

    value.textContent = count;
        
    
                                                  });


                                  });
