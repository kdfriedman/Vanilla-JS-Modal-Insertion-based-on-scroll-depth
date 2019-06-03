(function(){

  // Get cross browser compatible window height 
  var windowHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
), thresholdPercentage = 0.60, 
  movingContainerThreshold = windowHeight * thresholdPercentage;
  

  
  // Get the modal
  var movingContainer = document.getElementById("movingContainer");

  // Get the <span> element that closes the modal
  var movingContainerCloseBtn = document.getElementById("movingContainerCloseBtn");
  
  // When the user clicks on <span> (x), close the modal
  movingContainerCloseBtn.onclick = function() {
    movingContainer.className = "slider-modal--hidden";
    window.removeEventListener("scroll", showMovingContainer);
}

  /* When user scrolls, find current scroll height and 
 multiply by 60% of total doc height */
  window.addEventListener("scroll", showMovingContainer);
  function showMovingContainer() {
    if (window.pageYOffset >= movingContainerThreshold) {
        movingContainer.className = "slider-modal--visible";
      }
  }

})();
