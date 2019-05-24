// 两个全局变量
var board=new Array();//游戏数据储存
var score=0;//初始化分数为0
var number=0,number1=0,number2=0,number3=0,number4=0,time=0,timeend=0,timestart=0,score2=0,time1000,flag=1,flag1=1,flag3=1;
var x,x1,x2,x3,x4,t,t1000,s2;
    x1=document.getElementById("number1");
    x2=document.getElementById("number2");
    x3=document.getElementById("number3");
    x4=document.getElementById("number4");
    x=document.getElementById("number");
    t1000=document.getElementById("time1000");
    s2=document.getElementById("score2");
    t=document.getElementById("time");
//初始化游戏
$(document).ready(function(){
  newGame();
})

function newGame(){
  //为移动端初始化宽度
  // prepareForMobile();
  //初始化棋盘格
  init();
  //在随机两个格子生成数字
   generateOneNumber();
   generateOneNumber();
}
//初始化棋盘格
function init(){
  // //有数字的小方块
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var gridCell=$("#grid-cell-"+i+"-"+j);
      var top=getPosTop(i,j);
      var left=getPosLeft(i,j);
      gridCell.css({
        "top":top,
        "left":left
      });
    }
  }

  //初始化board数组
  for (var i = 0; i < 4; i++) {
    board[i]=new Array();
    for (var j = 0; j < 4 ; j++) {
      board[i][j]=0;
    }
  }
   //更新界面，清空分数
   updateBoardView();
   x.innerHTML=0;
   x1.innerHTML=0;
   x2.innerHTML=0;
   x3.innerHTML=0;
   x4.innerHTML=0;
   t.innerHTML=0;
   t1000.innerHTML=0;
   s2.innerHTML=0;
   score=0;
   $("#score").text(score);
}



//键盘控制
$(document).keydown(function (event){

   switch(event.keyCode){
       case 37: //left
           isgameover();
           canMoveLeft(board);
           moveLeft();
           generateOneNumber();
           number++;
           x.innerHTML=number;
           number3++;
           x3.innerHTML=number3;
           break;
       case 38: //up
           isgameover();
           canMoveUp(board);
           moveUp();
           generateOneNumber();
           number++;
           x.innerHTML=number;
           number1++;
           x1.innerHTML=number1;
           break;
       case 39: //right
           isgameover();
           canMoveRight(board);
           moveRight();
           generateOneNumber();
           number++;
           x.innerHTML=number;
           number4++;
           x4.innerHTML=number4;
           break;
       case 40: //down
           isgameover();
           canMoveDown(board);
           moveDown();
           generateOneNumber();
           number++;
           x.innerHTML=number;
           number2++;
           x2.innerHTML=number2;
           break;
   }
});

function updateScore(score){
  var scorebox=$("#score");
  scorebox.text(score);
  var d=new Date();
  if (flag==1){
        timestart=d.getTime();
        flag=2;
    }
    //初始化2min得分//
    timeend=d.getTime();
    if(timeend-timestart>=60000&&flag3==1){
        s2.innerHTML=score;
        flag3=2;
    }
    //初始化1000分时间//
    if (score>=1000&&flag1==1){
        t1000.innerHTML=(timeend-timestart)/1000;
        flag1=3;
    }
    time=(timeend-timestart)/1000;
    t.innerHTML=time;
}
