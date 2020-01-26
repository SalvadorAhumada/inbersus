// Start AOS
    AOS.init({
  startEvent: 'load',
});

//Scroll to x 
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
//menu-burger
        function myFunction() {
          var x = document.getElementById("menu-burger");
          if (x.style.display === "none") {
            x.style.display = "flex";
          } else {
            x.style.display = "none";
          }
        }

//Jquery close window
$('#cerrar').on('click', function () {
  $('#modal-container').addClass('animated zoomOutDown').delay(800).queue(function () {
      $(this).addClass('close-window')
  });
});
$('#cerrar').on('click', function () {
  $('#modal').addClass('animated fadeOut').delay(800).queue(function () {
      $(this).addClass('close-window')
  });
});


  // Get the modal
  let modal = document.getElementById('myModal');
    let modalContent = document.querySelector(".modal-content");

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");
    let btnTwo = document.getElementById("myBtn-2");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modalContent.classList.add('modal-content');
        modalContent.classList.remove('modal-content-close');
        modal.style.display = "block";
    };

    btnTwo.onclick = function () {
      modalContent.classList.add('modal-content');
      modalContent.classList.remove('modal-content-close');
      modal.style.display = "block";
  };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {

        modalContent.classList.add('modal-content-close');
        modalContent.classList.remove('modal-content');
        setTimeout(() => modal.style.display = "none", 300)
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modalContent.classList.add('modal-content-close');
            modalContent.classList.remove('modal-content');
            setTimeout(() => modal.style.display = "none", 300)
        }
    }


