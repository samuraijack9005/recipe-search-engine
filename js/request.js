function makeRequest(searchWord, callback){
  var base = "http://www.recipepuppy.com/api/?";
  var xhr = new XMLHttpRequest();
  var url = base+searchWord;
  xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
      var recipePuppyObj = JSON.parse(xhr.responseText);
      callback(recipePuppyObj);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};
