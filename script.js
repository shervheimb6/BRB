let element = document.querySelector("fourth");

function stung (){
  element.style.backgroundColor = "yellow";
  element.style.color = "black";
  element.innerHTML = "Stung!!!  With Shervheim Honey";
  element.style.borderTopRightRadius= "50%";
  element.style.borderBottomLeftRadius="50%";
   
  
}

element.onclick = stung;