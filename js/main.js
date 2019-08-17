var Main = (function(){

  var searchForm = document.getElementById('user-search');
  searchForm.addEventListener(button, clickHandler);

  function clickHandler(event){
    event.preventDefault();
    makeRequest(Input.formatInput(Input.extractQuery(event)), renderSearch);
  }
})();
