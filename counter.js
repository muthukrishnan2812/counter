var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var counter = document.getElementById('counter');
let count=0;

increase.onclick=function increase(){
    count++;
    counter.textContent=count;
    console.log(count);
}
decrease.onclick=function decrease(){
    if(count>0){
    count--;
    counter.textContent=count;
    console.log(count);
    }
}
reset.onclick=function reset(){
    count=0;
    counter.textContent=count;

}