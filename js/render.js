function renderSearch(recipeObject) {
    //Takes the object from the request.js
    var recipeArray = recipeObject.results;
    var titleList = document.getElementById("results-list");
    titleList.innerHTML = ""; //Clears the last results with a new search
    var headerTitle = document.createElement('header');
    headerTitle.textContent = "Recipes";
    headerTitle.className = "headerTitleCSS";
    titleList.appendChild(headerTitle);

    recipeArray.forEach(function(element) {
      //Creates a list of links on the recipe titles
        var listNode = document.createElement('li');
        var itemNode = document.createElement('a');

        var title = element.title;
        itemNode.href = element.href;
        itemNode.target = "_blank";//Opens the links in a new tab
        itemNode.textContent = title;

        titleList.appendChild(listNode);
        listNode.appendChild(itemNode);
        //Adds an ingredients list to each recipe
        var listNodeIngredients = document.createElement('li');

        var ingredients = element.ingredients;
        listNodeIngredients.textContent = ingredients;

        titleList.appendChild(listNodeIngredients);
    });

    return {
        recipeArray: recipeArray
    }
};
