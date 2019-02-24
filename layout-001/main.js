window.onload=function(){
  document.getElementById('mob').addEventListener("click", function() { changeSize("400px");} );
  document.getElementById('tab').addEventListener("click",  function() { changeSize("800px");} );
  document.getElementById('pc').addEventListener("click",  function() { changeSize("100%");} );
}


function changeSize(px) {
  elements = document.getElementsByClassName('container-screen');
  for (var i = 0; i < elements.length; ++i) {
    elements[i].style.width=px;
  }
}
