
var num=6;
var colors = generateRandomcolor(num);
var squares=document.getElementsByClassName("square");
var pickedCol=pickColor();
var colorDisplay =document.getElementById("display");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var res=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colorDisplay.textContent=pickedCol;

easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    num=3;
    colors = generateRandomcolor(num);
    pickedCol=pickColor();
   colorDisplay.textContent=pickedCol;
  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
      squares[i].style.backgroundColor=colors[i];
    else
    squares[i].style.display="none";
  }
});

hardbtn.addEventListener("click",function(){
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  num=6;
  colors = generateRandomcolor(num);
  pickedCol=pickColor();
 colorDisplay.textContent=pickedCol;
 for(var i=0;i<squares.length;i++)
 {
    squares[i].style.backgroundColor=colors[i];
   squares[i].style.display="block";
 }

});


res.addEventListener("click",function(){
  colors = generateRandomcolor(num);

  pickedCol=pickColor();

  colorDisplay.textContent=pickedCol;
  messageDisplay.textContent="";
  res.textContent="New Colors";
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.backgroundColor=colors[i];
      }
      h1.style.backgroundColor= "steelblue";
});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      var clickedCol=this.style.backgroundColor;
      res.textContent="Play Again?";
      console.log(pickedCol);
      console.log(clickedCol);
      if (pickedCol=== clickedCol) {
        messageDisplay.textContent="Correct!!!";
        changeColor(clickedCol);
       h1.style.backgroundColor=clickedCol;
      }
      
      else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
      }

    });
}


function changeColor(color){
     for(var i=0;i<squares.length;i++){
       squares[i].style.backgroundColor=color;
     }
}
function pickColor()
{
  var random=Math.floor(Math.random() * colors.length);
  return colors[random];
}

function  generateRandomcolor(num){
  var arr=[];

  for(var i=0;i<num;i++){

    arr.push(Randomcolor());

  }

    return arr;
}


function Randomcolor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+ r+ ", " + g + ", " + b +")";
}