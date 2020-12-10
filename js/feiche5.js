window.onload = function(){
    var btn1 = document.getElementById('btn1');
    var oSpan = btn1.getElementsByTagName('span');
    var oPic = document.getElementById('pic_1');
    var aImgs = oPic.getElementsByTagName('img');
    var oUl = document.getElementById('ul_1');
    var aLis = oUl.getElementsByTagName('li');
    var oUl2 = document.getElementById('ul_2');
    var aLis2 = oUl2.getElementsByTagName('li');
    var oPic2 = document.getElementById('pic_2');
    var aImgs2 = oPic2.getElementsByTagName('img');
    var oUl3 = document.getElementById('ul_3');
    var aLis3 = oUl3.getElementsByTagName('li');
    var oPic3 = document.getElementById('pic_3');
    var aImgs3 = oPic3.getElementsByTagName('img');
    var oUl4 = document.getElementById('ul_4');
    var aLis4 = oUl4.getElementsByTagName('li');
    var oPic4 = document.getElementById('pic_4');
    var aImgs4 = oPic4.getElementsByClassName('origin')
    var oUl5 = document.getElementById('ul_5');
    var aLis5 = oUl5.getElementsByTagName('li');
    var oPic5 = document.getElementById('pic_5');
    var aImgs5 = oPic5.getElementsByTagName('img');
    var oUl6 = document.getElementById('ul_6');
    var aLis6 = oUl6.getElementsByTagName('li');
    var oPic6 = document.getElementById('pic_6');
    var aImgs6 = oPic6.getElementsByTagName('img');
    var oUl7 = document.getElementById('ul_7');
    var aLis7 = oUl7.getElementsByTagName('li');
    var oPic7 = document.getElementById('pic_7');
    var aImgs7 = oPic7.getElementsByClassName('car');
    var oUl8 = document.getElementById('ul_8');
    var aLis8 = oUl8.getElementsByTagName('li');
    var oPic8 = document.getElementById('pic_8');
    var aImgs8 = oPic8.getElementsByTagName('img');
    var oUl9 = document.getElementById('ul_9');
    var aLis9 = oUl9.getElementsByTagName('li');
    var oPic9 = document.getElementById('pic_9');
    var aImgs9 = oPic9.getElementsByTagName('img');
    var p1 = document.getElementById('p1');
    var aP1 = p1.getElementsByClassName('pic_dec');
    var p2 = document.getElementById('p2');
    var aP2 = p2.getElementsByClassName('pic_dec');
    var p5 = document.getElementById('p5');
    var aP5 = p5.getElementsByClassName('pic_dec');
    var p7 = document.getElementById('p7');
    var aP7 = p7.getElementsByClassName('pic_dec');
   

    btn1.onmouseenter = function(ev){
            var e = ev|| window.Event;
            var nodeText = document.createTextNode("版本宣传视屏");
            
            timer = setTimeout(function(){
                            oSpan[0].appendChild(nodeText);
                            oSpan[0].style.display = 'block';
                        },1000)  
            }
            btn1.onmouseleave = function(){
                clearTimeout(timer)
                oSpan[0].innerHTML= '';
                oSpan[0].style.display = 'none'
            }

            tabs(aLis,aImgs,aP1)
            tabs(aLis2,aImgs2,aP2)
            tabs(aLis3,aImgs3)
            tabs(aLis4,aImgs4);
            tabs(aLis5,aImgs5,aP5);
            tabs(aLis6,aImgs6);
            tabs(aLis7,aImgs7,aP7);
            tabs(aLis8,aImgs8);
            tabs(aLis9,aImgs9);
            

                aLis7[2].addEventListener('click',function(){
                    new Swiper('.a',{
                        //direction: 'vertical', // 垂直切换选项
                        loop:true,// 循环模式选项
                        pagination: {   // 如果需要分页器
                            el: '.swiper-pagination',
                        },
                         // 如果需要前进后退按钮
                         navigation: {
                            nextEl: '.btn_next',
                            prevEl: '.btn_prev',
                            },
                        
                    })
                })
              
            
               
         
              
            
        
}

            function tabs(xli,ximg,xp){
                if(xp){
                    for(var i = 0; i < xli.length; i++){
                        xli[i].index = i;
                        xli[i].onclick = function(){
                            for(var j = 0; j < xli.length; j++){
                                ximg[j].style.display = 'none';
                                xli[j].className = '';
                                xp[j].style.display = 'none'
                            }
                            ximg[this.index].style.display = 'block';
                            this.className = 'active';
                            xp[this.index].style.display = 'block'
                        }
                    }  
                }else{
                    for(var i = 0; i < xli.length; i++){
                        xli[i].index = i;
                        xli[i].onclick = function(){
                            for(var j = 0; j < xli.length; j++){
                                ximg[j].style.display = 'none';
                                xli[j].className = '';
                        
                            }
                            ximg[this.index].style.display = 'block';
                            this.className = 'active';
                        
                        }
                    }
                }
            }     