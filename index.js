var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;

var player1src="images/dice"+player1+".png";
var player2src="images/dice"+player2+".png";

document.querySelector(".img1").setAttribute("src",player1src);
document.querySelector(".img2").setAttribute("src",player2src);

if(player1>player2){
document.querySelector("h1").textContent="Player1 Win";
}else{
document.querySelector("h1").textContent="Player2 Win";
}
