let element = document.querySelector("fourth");

function stung (){
  element.style.backgroundColor = "yellow";
  element.style.color = "black";
  element.innerHTML = "Stung!!!  With Shervheim Honey";
  element.style.borderTopRightRadius= "45%";
  element.style.borderBottomLeftRadius="45%";
  /*element.style.width="150px"
  element.style.height="150px"*/
   
  
}

element.onclick = stung;