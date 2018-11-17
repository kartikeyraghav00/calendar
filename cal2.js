M=["January","February","March","April","May","June","July","August","September","October","November","December"];
D= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
D1=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var count;
var pmo,pyr,mo,pdt,pd;
var option4_count=1;
var option4_count_remainder;
var questionNo;
var today = new Date();
var option5_j;
var last_p =1;
var A1 = document.getElementById("myAudio1"); 
var A2 = document.getElementById("myAudio2"); 
var A3 = document.getElementById("myAudio3"); 
var image_name;
var img_no=4;
var image=[];
var imgload=0;
var bar=document.getElementById("bar");
var head=document.getElementById("head");

for(q=0;q<img_no;q++)
{       
        if(q==0){

            image_name="images/correct.gif";
         }
        else if(q==1){

            image_name="images/wrong.gif";
         }
        else if(q==2){

            image_name="images/156.jpg";
         }
        else if(q==3){

            image_name="images/logo.png";
         }
image[q] = new Image();
            image[q].src =image_name;
            image[q].addEventListener('load',()=>{
                imgload++;
                bar.innerHTML=Math.ceil((100/img_no)*(q))+"%";
                bar.style.width=Math.ceil((100/img_no)*(q))+"%";

            if(imgload+1==img_no){
                
                document.getElementById("progress").classList.add("hide");
                
            }
                
                
            });
    
}


document.getElementById("prv").onclick=function(){
document.getElementById("prv").innerHTML="Prev";
cleandiv();
pdy = new Date(); 
pmo=mo-1;
// today
if (pyr < 2000)    // Y2K Fix, Isaac Powell
  pyr = pyr + 1900; // http://onyx.idbsu.edu/~ipowell
yr = pyr;
mo = pmo;
bgn = new Date(M[mo]+" 1,"+yr);
var LD;
Calendar(); 
document.getElementById("yot").innerHTML=M[mo]+" " +yr;
 for (var i = 1;i < 8;i ++) {
 document.getElementById("dak"+i).innerHTML=D[i-1];
}
}

//next calender

document.getElementById("nxt").onclick=function(){
 document.getElementById("nxt").innerHTML="Next";
 cleandiv();
pdy = new Date(); 
pmo=mo+1//Math.round(11*Math.random());
pyr=2000+Math.round(18*Math.random());  
if(questionNo==5|| questionNo==6||questionNo==7||questionNo==8||questionNo==9||questionNo==10) {
 pyr =today.getYear();
 pmo =mo+1;
 pdt=8;
}
// today
if (pyr < 2000)    // Y2K Fix, Isaac Powell
  pyr = pyr + 1900; // http://onyx.idbsu.edu/~ipowell
yr = pyr; 
mo = pmo;
bgn = new Date(M[mo]+" 1,"+yr);
var LD;
Calendar(); 
document.getElementById("yot").innerHTML=M[mo]+" " +yr;
for (var i = 1;i < 8;i ++) {
document.getElementById("dak"+i).innerHTML=D[i-1];

}
}
// present calender
cl();
function cl(){
pdy = new Date(); 
pmo=Math.round(11*Math.random());
pyr=2000+Math.round(18*Math.random());  
if(questionNo==5|| questionNo==6||questionNo==7||questionNo==8||questionNo==9||questionNo==10) {
 pyr= today.getYear();
 pmo =today.getMonth();
// pdt=1+Math.round(29*Math.random());
pdt=today.getDate ();
}
// today
if (pyr < 2000)    // Y2K Fix, Isaac Powell
  pyr = pyr + 1900; // http://onyx.idbsu.edu/~ipowell
yr = pyr; 
mo = pmo;
bgn = new Date(M[mo]+" 1,"+yr);
var LD;
Calendar(); 
document.getElementById("yot").innerHTML=M[mo]+" " +yr;
for (var i = 1;i < 8;i ++) {
document.getElementById("dak"+i).innerHTML=D[i-1];
}
}
function Calendar(){
 
  var dy,d,ld,pos,ctr;
dy = bgn.getDay();
yr = eval(yr);
d = "312831303130313130313031";
if (yr / 4 == Math.floor(yr / 4)) {
}

pos = (mo * 2);
ld =  eval(d.substring(pos, pos + 2));
LD=ld;
document.getElementById("yot").innerHTML=M[mo]+" "+yr;
for (var i = 1;i < 8;i ++) {
document.getElementById("dak"+i).innerHTML=D[i-1];
}
 ctr = 0;
 for (var i = 0;i < 7; i++){
if (i < dy) {
}
else {
ctr++;
var z=i+1;
document.getElementById("dates"+z).innerHTML=ctr;

   }

 }
var temp1=0;;
 while (ctr < ld) { temp1 ++; 
for (var i = 0;i < 7; i++)
          {
          ctr++;
                            if (ctr > ld){
                            }
                             else { 
                        z=z+1;
                        document.getElementById("dates"+z).innerHTML=ctr;
                          }
               }
 }
 }

var playing=false;
var score;
var timeremaining;
var correctAnswer;

      document.getElementById("startreset").onclick=function(){
    
      if(playing==true){
       location.reload();//reloading page 
    }else  { //if we are not playing
        
      //  change mode to playing
        playing=true;
        
        score=0;//set score to zero
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        document.getElementById("startreset").style.display="block";
            timeremaining=150;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
//        hide("GameOver");
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
       generate();

    }
  }

function startCountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)//game over
        {
           stopCountdown();
            swal({
                  title: "Your Score is "+score,
                  text: "Game Over!",
                  
                  button: "Yes, I want to play again!!!",
                  timer: 1500
                });
            A3.play();

            hide("timeremaining");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}


 for(i=1; i<50; i++)
{
   if(i<43){
document.getElementById("dates"+i).onclick=function(){
  if(playing==true)


    {
  if(questionNo==1)
    {
        if(document.getElementById(this.id).innerHTML==LD)
        {
                swal({
                          position: 'top-end',
                          title: 'Correct!',
                          icon: 'images/correct.gif',
                          timer: 1000,
                        })
                    score++;
                document.getElementById("scorevalue").innerHTML=score;
                A1.play();            
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
            
          cleandiv();
          cl();
          generate();

        }
          else if(this.id!=LD)         //wrong answer
                {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();
            }
        
     }

 else if(questionNo==2){
     if(document.getElementById(this.id).innerHTML==count)
        {          
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
                score++;
            document.getElementById("scorevalue").innerHTML=score;
                          A1.play();
          cleandiv();
          cl();
          generate();

        }
             else if(this.id!=count)
               {
            document.getElementById("scorevalue").innerHTML=score;

                swal({
                    position: 'top-end',
                      title: 'Wrong!',
                      icon: 'images/wrong.gif',
                      timer: 1000,
                    })
                A2.play();

//            soundPlay("images/wrong.MP3");

               }
     }
 else if(questionNo==3){
     count=option5_j;
        if(document.getElementById(this.id).innerHTML==count)
        {
            swal({
                    position: 'top-end',
                          title: 'Correct!',
                          icon: 'images/correct.gif',
                          timer: 1000,
                        })
                    score++;
            A1.play();
            document.getElementById("scorevalue").innerHTML=score;
        //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();

        }
             else if(this.id!=count)
        {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();

//            soundPlay("images/wrong.MP3");
        }
    

  }

else if(questionNo==5) {
   
    
        if(document.getElementById(this.id).innerHTML==option5_j){
            
          swal({
              
                        position: 'top-end',
                        title: 'Correct!',
                        icon: 'images/correct.gif',
                        timer: 1000,
                        })
//          soundPlay("audio/correct.mp3");
          score++;
            A1.play();
          document.getElementById("scorevalue").innerHTML=score;
          cleandiv();
          cl();
          generate();
        }

        else if(document.getElementById(this.id).innerHTML!=option5_j)
           {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();

//            soundPlay("images/wrong.MP3");
               
         }
}



else if(questionNo==8) {
        if(document.getElementById(this.id).innerHTML==option5_j){
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
                score++;
            document.getElementById("scorevalue").innerHTML=score;
            A1.play();                
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else if(document.getElementById(this.id).innerHTML!=option5_j)
           {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();

//            soundPlay("images/wrong.MP3");
               
         }
}

else if(questionNo==9) {
        if(document.getElementById(this.id).innerHTML==option6_j){
            
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            A1.play();                
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else if(this.id!=option5_j)
           {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();

//            soundPlay("images/wrong.MP3");
         }


}





else if(questionNo==10) {
        if(document.getElementById(this.id).innerHTML==option5_j){
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            A1.play();                
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else if(document.getElementById(this.id).innerHTML!=option5_j)
           {
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();
               
//            soundPlay("images/wrong.MP3");
               
         }
    }

}
}
}
 else {
  var p =i-42;
document.getElementById("dak"+ p).onclick=function(){ 

if(playing==true) {

if(questionNo==4) {
        if(document.getElementById(this.id).innerHTML==document.getElementById("dak"+ option4_count_remainder).innerHTML){
            
          swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            A1.play();                
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else
           {
         document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();
                //wrong answer
//                soundPlay("../audio/wrong.mp3");
               
         }
}

       else if(questionNo==6) {
        if(document.getElementById(this.id).innerHTML==option5_j){
          swal({
                        position: 'top-end',
                          title: 'Correct!',
                          icon: 'images/correct.gif',
                          timer: 1000,
                        })
                    score++;
                document.getElementById("scorevalue").innerHTML=score;
                A1.play();            
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else if(this.id!=count)
           {
               document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();
                //wrong answer
//                soundPlay("../audio/wrong.mp3");

               
         } 
       }


        else if(questionNo==7) {
        if(document.getElementById(this.id).innerHTML==option5_j){
          swal({
                        position: 'top-end',
                          title: 'Correct!',
                          icon: 'images/correct.gif',
                          timer: 1000,
                        })
                    score++;
                document.getElementById("scorevalue").innerHTML=score;
                A1.play();            
                            
            //hide wrong box and show correct box
//           soundPlay("images/correct.MP3");
          cleandiv();
          cl();
          generate();
        }

        else if(this.id!=count)
           {
               document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: 'images/wrong.gif',
                          timer: 1000,
                        })
                    A2.play();
                //wrong answer
//                soundPlay("../audio/wrong.mp3");

               
            } 



        }
}
}
}
}

function cleandiv() {


  for (i=1; i<43;i++ ) {
document.getElementById("dates"+i).innerHTML="";
}

}
function hide(Id)
{
    document.getElementById(Id).style.display="none";
}

//show element
function show(Id)
{
    document.getElementById(Id).style.display="block";
}

function generate() {
var todaydate;
da = new Date();
var questtype;
todaydate=da.getDate();
if(todaydate>8 && todaydate<31 )
{

  questtype=9;
}
else {

  questtype=6;
}
var p;
if(last_p>=5) {
p=1+Math.round(3*Math.random());


}
else {
p=1+Math.round(9*Math.random());
}
last_p =p;
 
questionNo=p;


 switch(p) {
 
case 1:
  document.getElementById("quest").innerHTML="How many days in"+" "+M[mo]+" "+yr;
  break;
         
case 2:
   var j=1+Math.round(6*Math.random());
  
    count=0;
         jtemp=j;
   for(i=1;i<7;i++){
    if(document.getElementById("dates"+j).innerHTML > 0) 
    {
    count++;
    } 
        j=j+7;
}
document.getElementById("quest").innerHTML="How many"+" "+D1[jtemp-1]+" "+" are in "+M[mo]+" "+yr;
  break;
         
case 3:
  var j=1+Math.round(6*Math.random()); 
  var tempday = 1+Math.round(3*Math.random());
  var tempdayword;
  if (tempday ==1) { tempdayword ="first";} 
    else if (tempday ==2) { tempdayword ="second";} 
     else if (tempday ==3) { tempdayword ="third";} 
     else{ tempdayword ="fourth";}  

  document.getElementById("quest").innerHTML="Date on "+tempdayword +" "+D1[j-1]+" "+"of "+M[mo]+" "+yr;
  var count3=0;
  count=0;
   for(i=1;i<7;i++) {
 if(document.getElementById("dates"+j).innerHTML>0) 
   {
           count3++;  
    
   if(count3==tempday) 
    {

                     count=document.getElementById("dates"+j).innerHTML;
                     option5_j=count;
     }
   }
 j=j+7;
}
option5_j=count;


  break;
         
case 4:
option4_count=1;
var option4_j =1+Math.round((LD-1)*Math.random());
  document.getElementById("quest").innerHTML="Day on"+" "+ option4_j + " " +M[mo]+" "+yr;
  while(document.getElementById("dates" +option4_count).innerHTML!=option4_j)
  {
    option4_count++;
  }
  
         if(option4_count%7==0)
             option4_count_remainder=7;
         else
             option4_count_remainder=option4_count%7;

  break;

case 5:
 var option5_count;
cleandiv();
cl();
if(pdt==LD)
{
  option5_j=2;
}
else if(pdt==LD-1) {
option5_j=1;
}
else{

  option5_j=pdt +2;

}

  document.getElementById("quest").innerHTML="What is the date on day after tomorrow";
  break;
         
case 9:
 var option6_count;
 cl();
cleandiv();
 cl();
 if(LD-1==31)
 {
 option6_j=31;
 }
else if(LD-1==30)
{
   option6_j=pdt-2;
}
else if(LD-1==28)
{
 option6_j=28;
}
else 
{
 option6_j=pdt-2;
}
  document.getElementById("quest").innerHTML="What was the date on day before yesterday";
  break;



case 6:                      // case 6
 var option7_count;
 var yesd;
 cleandiv();
 cl();
 var q=new Date(pyr,pmo,pdt);
 var n=q.getDay();
 if(n==6)
 {
  yesd=0;
 }
 else
 {
  yesd=n+1;
 }
 
option5_j=D[yesd];
  document.getElementById("quest").innerHTML="What day is tomorrow";
  break;



 case 7:                                    //case 7
 var option7_count;
  var option7_j;
 var yesd;
 cleandiv();
 cl();
 var q=new Date(pyr,pmo,pdt);
 var n=q.getDay();
 if(n==0)
 {
 yesd=6;
}
else
{
  yesd=n-1;
}
option5_j=D[yesd];
  document.getElementById("quest").innerHTML="What day was yesterday";
  break;





case 8:                          //case 8
 var option6_count;
cl();
 cleandiv();
 cl();
var q = new Date(pyr,pmo, pdt);
var n = q.getDay();
 var j=Math.round(6*Math.random());
switch(j) {
  case 1:
if(n==1)
{
  option5_j=pdt+7;
}
else if(n==2)
{
option5_j=pdt+6;
}
else if(n==3)
{
option5_j=pdt+5;
}
else if(n==4)
{
option5_j=pdt+4;
}
else if(n==5)
{
option5_j=pdt+3;
}
else if(n==6)
{
option5_j=pdt+2;
}
else if (n==0)
{
option5_j=pdt+1;
}
  break;

case 2:
if(n==1)
{
  option5_j=pdt+1;
}
else if(n==2)
{
option5_j=pdt+7;
}
else if(n==3)
{
option5_j=pdt+6;
}
else if(n==4)
{
option5_j=pdt+5;
}
else if(n==5)
{
option5_j=pdt+4;
}
else if(n==6)
{
option5_j=pdt+3;
}
else if (n==7)
{
option5_j=pdt+2;
}
  break;
 case 3:
if(n==1)
{
  option5_j=pdt+2;
}
else if(n==2)
{
option5_j=pdt+1;
}
else if(n==3)
{
option5_j=pdt+7;
}
else if(n==4)
{
option5_j=pdt+6;
}
else if(n==5)
{
option5_j=pdt+5;
}
else if(n==6)
{
option5_j=pdt+4;
}
else if (n==7)
{
option5_j=pdt+3;
}
break;
case 4:
if(n==1)
{
  option5_j=pdt+3;
}
else if(n==2)
{
option5_j=pdt+2;
}
else if(n==3)
{
option5_j=pdt+1;
}
else if(n==4)
{
option5_j=pdt+7;
}
else if(n==5)
{
option5_j=pdt+6;
}
else if(n==6)
{
option5_j=pdt+5;
}
else if (n==7)
{
option5_j=pdt+4;
}
break;


case 5:
if(n==1)
{
  option5_j=pdt+4;
}
else if(n==2)
{
option5_j=pdt+3;
}
else if(n==3)
{
option5_j=pdt+2;
}
else if(n==4)
{
option5_j=pdt+1;
}
else if(n==5)
{
option5_j=pdt+7;
}
else if(n==6)
{
option5_j=pdt+6;
}
else if (n==7)
{
option5_j=pdt+5;
}
break;
case 6:
if(n==1)
{
  option5_j=pdt+5;
}
else if(n==2)
{
option5_j=pdt+4;
}
else if(n==3)
{
option5_j=pdt+3;
}
else if(n==4)
{
option5_j=pdt+2;
}
else if(n==5)
{
option5_j=pdt+1;
}
else if(n==6)
{
option5_j=pdt+7;
}
else if (n==7)
{
option5_j=pdt+6;
}
break;
case 0:
if(n==1)
{
  option5_j=pdt+6;
}
else if(n==2)
{
option5_j=pdt+5;
}
else if(n==3)
{
option5_j=pdt+4;
}
else if(n==4)
{
option5_j=pdt+3;
}
else if(n==5)
{
option5_j=pdt+2;
}
else if(n==6)
{
option5_j=pdt+1;
}
else if (n==7)
{
option5_j=pdt+0;
}
break;
}

if(option5_j>=LD){
  option5_j=option5_j-LD;
}

  document.getElementById("quest").innerHTML="What will be the date on coming"+" "+D[j];
   break;



  case 10:
 var option10_count;
 
 cl();
 cleandiv();
 cl();
 var q = new Date(pyr,pmo, pdt);
var n = q.getDay();
var l=q.getDay();
 var j=Math.round(6*Math.random());
switch(j) {
  case 1:
if(n==1 && pdt > 7)
{
  option5_j=pdt-7;
}

else if(n==2 && pdt>7)
{
option5_j=pdt-1;
}
else if(n==3 && pdt>7)
{
option5_j=pdt-2;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-3;
}
else if(n==5 && pdt >7)
{
option5_j=pdt-4;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-5;
}
else if(n==0 && pdt>7)
{
option5_j=pdt-6;
}
else if(n==l&& pdt < 8)
{
  option5_j=1;
}
 break;

 case 2:
 if(n==1 && pdt>7)
{
  option5_j=pdt-6;
}
else if(n==2 && pdt >7)
{
option5_j=pdt-7;
}
else if(n==3 && pdt >7)
{
option5_j=pdt-1;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-2;
}
else if(n==5 && pdt>7)
{
option5_j=pdt-3;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-4;
}
else if(n==0 && pdt >7)
{
option5_j=pdt-5;
}
else if(n==l && pdt<8)
 {
option5_j=2;
}
 break;

case 3:
 if(n==1 && pdt >7)
{
  option5_j=pdt-5;
}
else if(n==2 && pdt>7)
{
option5_j=pdt-6;
}
else if(n==3 && pdt>7)
{
option5_j=pdt-7;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-1;
}
else if(n==5 && pdt >7)
{
option5_j=pdt-2;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-3;
}
else if(n==0 && pdt >7)
{
option5_j=pdt-4;
}
else if(n==l && pdt <8)
{
option5_j=3;
}
 break;
 case 4:

 if(n==1 && pdt>7)
{
  option5_j=pdt-4;
}
else if(n==2 && pdt >7)
{
option5_j=pdt-5;
}
else if(n==3 && pdt >7)
{
option5_j=pdt-6;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-7;
} 
else if(n==5 && pdt >7)
{
option5_j=pdt-1;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-2;
}
else if(n==0 && pdt >7)
{
option5_j=pdt-6;
}
else if(n==3 && pdt <8)
{
  option5_j=30-(6-pdt);
}
 break;

 case 5:
 if(n==1 && pdt > 7)
{
  option5_j=pdt-3;
}
else if(n==2 && pdt > 7)
{
option5_j=pdt-4;
}
else if(n==3 && pdt > 7)
{
option5_j=pdt-5;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-6;
}
else if(n==5 && pdt >7)
{
option5_j=pdt-7;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-1;
}
else if(n==0 && pdt >7)
{
option5_j=pdt-2;
}
else if (n==l && pdt < 8)
{
option5_j=30-(5-pdt);
}
 break;

 case 6:
 if(n==1 && pdt >7)
{
  option5_j=pdt-2;
}
else if(n==2 && pdt >7)
{
option5_j=pdt-3;
}
else if(n==3 && pdt > 7)
{
option5_j=pdt-4;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-5;
}
else if(n==5 && pdt >7)
{
option5_j=pdt-6;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-7;
}
else if(n==0 && pdt > 7)
{
option5_j=pdt-1;
}
else if (n==l && pdt < 8)
{
option5_j=30-(4-pdt);
}
break;
case 0:
if(n==1 && pdt > 7)
{
  option5_j=pdt-1;
}
else if(n==2 && pdt >7)
{
option5_j=pdt-2;
}
else if(n==3 && pdt >7)
{
option5_j=pdt-3;
}
else if(n==4 && pdt >7)
{
option5_j=pdt-4;
}
else if(n==5 && pdt >7 )
{
option5_j=pdt-5;
}
else if(n==6 && pdt >7)
{
option5_j=pdt-6;
}
else if(n==0 && pdt >7)
{
option5_j=pdt-7;
}
else if(n==l&& pdt < 8)
{
  option5_j=30-(3-pdt);
 }
}

  document.getElementById("quest").innerHTML="What was the date on previous"+" "+D[j];
  break;


 }
}