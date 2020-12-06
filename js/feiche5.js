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

            for(var i = 0; i < aLis.length; i++){
                aLis[i].index = i;
                aLis[i].onclick = function(){
                    for(var j = 0; j < aLis.length; j++){
                        aImgs[j].style.display = 'none';
                    }
                    aImgs[this.index].style.display = 'block';
                }
            }

            for(var i = 0; i < aLis2.length; i++){
                aLis2[i].index = i;
                aLis2[i].onclick = function(){
                    for(var j = 0; j < aLis2.length; j++){
                        aImgs2[j].style.display = 'none';
                    }
                    aImgs2[this.index].style.display = 'block';
                }
            }
            
            


}