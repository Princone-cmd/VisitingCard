let front=document.getElementById("front"),
back=document.getElementById("back"),
element=document.getElementById("card");

front.onclick = function(){
	element.style.transform = 'rotateX(180deg)';
};
back.onclick = function(){
	element.style.transform = 'rotateX(0deg)';
};