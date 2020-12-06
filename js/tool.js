function numTextCode(n){
    var arr = [];
   
    for( var i = 0;i <n; i++){
        num = parseInt(Math.random()*10);
        arr.push(num);
    }
    return arr.join("");
}


function textCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        num = parseInt(Math.random()*123);
        if(num >= 0 && num <= 9){
            arr.push(num);
        }
        else if(num >= 65 && num <= 90 || num >=97 && num <= 122){
            arr.push(String.fromCharCode(num));
        }
        else{
            i --;
        }
    }
    return arr.join("");
}


function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] :getComputedStyle(node)[cssStyle];
}

function randomColor(){
    var str = "rgba("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
    return str;
 }


 function showTime(){
     var d = new Date();
     var year = d.getFullYear();
     var month = d.getMonth();
     var day = d.getDate();

     var week = d.getDay();
     week = chineseFromNum(week);

     var hour = doubleNum(d.getHours());
     var min = doubleNum(d.getMinutes());
     var sec = doubleNum(d.getSeconds());

     return year + '年' + month + '月' + day + '日 星期' + week + '' + '' + hour + ':' + min + ':' + sec;
 }

 function doubleNum(n){
     if(n < 10){
         return '0' + n;
     }else{
         return n;
     }
 }

 //把星期从数字转换成中文
 function chineseFromNum(num){
     var arr = ['日','一','二','三','四','五','六'];
     return arr[num];
 }