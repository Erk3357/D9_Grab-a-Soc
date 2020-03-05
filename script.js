//--------ON DOCUMENT LOAD--------//

sessionStorage.clear()
var elementsToClear = document.getElementsByClassName("soc-container");
for (i = 0; i < elementsToClear.length; i++) {
  elementsToClear[i].style.display = "none";
}






//---------BUTTON FUNCTIONS----------//
function interestToggle(num){
    var targetedEl = document.getElementById("tab"+num);
    targetedEl.classList.toggle("active");
}


function search(){

    for (i = 0; i < elementsToClear.length; i++) {
  elementsToClear[i].style.display = "none";
}
    
    var searchTerms = document.getElementsByClassName("active");

        

    sessionStorage.clear()
    
    for(i = 0; i < searchTerms.length; i++){
        sessionStorage.setItem("search"+i, searchTerms[i].textContent);
    }
    
    
    
    for(i = 0; i < sessionStorage.length; i++){
                   
        var searchedTerm = sessionStorage.getItem("search"+i);
        
        if(searchedTerm == "Running"){
            var elementsToShow = document.getElementsByClassName("Running");
            
            for (j = 0; j < elementsToShow.length; j++) {
                elementsToShow[j].style.display = "block";
            }   
            
        }
    }
        

        
 for(i = 0; i < sessionStorage.length; i++){
                   
        var searchedTerm = sessionStorage.getItem("search"+i);
        
        if(searchedTerm == "Technology"){
            var elementsToShow = document.getElementsByClassName("Technology");
            
            for (j = 0; j < elementsToShow.length; j++) {
                elementsToShow[j].style.display = "block";
            }   
            
        }
    }
    
    
     for(i = 0; i < sessionStorage.length; i++){
                   
        var searchedTerm = sessionStorage.getItem("search"+i);
        
        if(searchedTerm == "Swimming"){
            var elementsToShow = document.getElementsByClassName("Swimming");
            
            for (j = 0; j < elementsToShow.length; j++) {
                elementsToShow[j].style.display = "block";
            }   
            
        }
    }
        
        
            
    
    
    
}


