 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems);
  });
  
  var temp=document.getElementById("search").value;
  
  instances.addChip({
    tag: temp;
    
  });