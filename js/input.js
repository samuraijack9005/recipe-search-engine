/* render ingredients input */

var Input = (function(){


  function extractQuery(eventNode){
    var ingredientsInput = eventNode.target.childNodes[1].value;
    if (ingredientsInput === "") {
      alert("Write an ingredient to find a recipe");
      return;
    }
    return ingredientsInput;
  }

  function formatInput(input){
    var inputText = input.slice();
    var prefix = "i="; // this should be its own function.
    inputText = inputText.trim().toLowerCase();
    inputText = inputText.replace(/\s/g, ',');
    inputText = inputText.replace(/[^a-z0-9+]+/gi, '')
    var ingredientsSearch = prefix+inputText;
    return ingredientsSearch;
  }

  return {
    extractQuery: extractQuery,
    formatInput: formatInput    
  }

})();
/* end render ingredients input */
