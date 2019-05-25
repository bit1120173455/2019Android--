/*判断上下滑动：*/
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
 $('body').bind('touchstart',function(e){
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    // 手机滑动
    $("body").bind("touchmove",function(e){
        //获取滑动屏幕时的X,Y
        endX = e.originalEvent.changedTouches[0].pageX;
        endY = e.originalEvent.changedTouches[0].pageY;
        //获取滑动距离
        distanceX = endX-startX;
        distanceY = endY-startY;
        //判断滑动方向
        if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
            // console.log('往右滑动');
            isgameover();
            canMoveRight(board);
            moveRight();
             number++;
           x.innerHTML=number;
           number4++;
           x4.innerHTML=number4;
            generateOneNumber();

        }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
          // console.log('往左滑动');
            isgameover();
            canMoveLeft(board);
            moveLeft();
            number++;
           x.innerHTML=number;
           number3++;
           x3.innerHTML=number3;
            generateOneNumber();
        }else
        if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY<0){
          // console.log('往上滑动');
            isgameover();
            canMoveUp(board);
            moveUp();
            number++;
           x.innerHTML=number;
           number1++;
           x1.innerHTML=number1;
            generateOneNumber();
        } else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY>0){
            // console.log('往下滑动');
            isgameover();
            canMoveDown(board);
            moveDown();
            number++;
           x.innerHTML=number;
           number2++;
           x2.innerHTML=number2;
            generateOneNumber();
        }
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
  });
