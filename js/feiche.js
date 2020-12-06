        var mySwiper = new Swiper('.swiper-container',{
        
            loop:true,
            pagination:{
                el:'.swiper-pagination',
            },
            navigation:{
                prevEl:'.btn-left',
                nextEl:'.btn-right'
            },
            autoplay:{
                delay:1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }
        })

        var oDiv = document.getElementById('content-middle');
        var oBtn1 = oDiv.getElementsByClassName('button_1');
        var oBtn = document.getElementById('btn1');
        var aLi1s = oBtn.getElementsByClassName('li_1')
        var aDivs = oDiv.getElementsByClassName('cont-t');
        var oBtn2 = oDiv.getElementsByClassName('button_2');
        var oBtn_2 = document.getElementById('btn2');
        var aLi2s = oBtn_2.getElementsByClassName('li_2');
        var oDiv1 = document.getElementsByClassName('div1');
        var oBtn3 = oDiv.getElementsByClassName('button_3');
        var oBtn_3 = document.getElementById('btn3');
        var aLi3s = oBtn_3.getElementsByClassName('li_3');
        var oDiv2 = document.getElementsByClassName('pic');
        var oDiv3 = document.getElementById('content-l');
        var oBtn4 = oDiv3.getElementsByClassName('btn-1')[0];
        var oBtn5 = oDiv3.getElementsByClassName('btn-2')[0];
        var oDiv4 = document.getElementById('content-right');
        var oImgs = oDiv4.getElementsByTagName('img'); 
        var oLogo = document.getElementById('logo-big');
        var oSpan = oDiv4.getElementsByClassName('pic-word');
        var qqArea = document.getElementsByClassName('qq-area')[0];
        var qqBtn = qqArea.getElementsByClassName('qq-btn');
        var qqList = qqArea.getElementsByClassName('show_list');
      
        

    
    
        for(var i = 0; i < oBtn1.length; i ++){
                        oBtn1[i].index = i;
                        oBtn1[i].onmouseenter = function (){      
                            for(var j = 0; j < oBtn1.length; j++){
                            aDivs[j].style.display = 'none';
                            oBtn1[j].classList.remove('active');
                            aLi1s[j].style.display = 'none';
                            }
                            aDivs[this.index].style.display = 'block';      
                            this.classList.add('active');
                            aLi1s[this.index].style.display = 'block';
                        }
                    }

        for(var i = 0; i < oBtn2.length; i++){
                        oBtn2[i].index = i;
                        oBtn2[i].onmouseenter = function(){
                            for(var j = 0; j < oBtn2.length; j++){
                            oDiv1[j].style.display = 'none';
                            oBtn2[j].classList.remove('active');
                            aLi2s[j].style.display = 'none';
                        } 
                        oDiv1[this.index].style.display = 'block'; 
                        this.classList.add('active');
                            aLi2s[this.index].style.display = 'block'; 
            }
        }

        for(var i = 0;i < oBtn3.length; i++){
                        oBtn3[i].index = i;
                        oBtn3[i].onmouseenter = function(){
                            for(var j = 0; j < oBtn3.length; j++){
                                oDiv2[j].style.display = 'none';
                                oBtn3[j].classList.remove('active');
                                aLi3s[j].style.display = 'none';
                            }
                            oDiv2[this.index].style.display = 'block'
                            this.classList.add('active');
                            aLi3s[this.index].style.display = 'block';
                        }
        }

        oBtn4.onmouseenter = function(){
            oBtn4.style.opacity = '.5';
        }
        oBtn4.onmouseleave = function(){
            oBtn4.style.opacity = '1';
        }
        oBtn5.onmouseenter = function(){
            oBtn5.style.opacity = '.8';
        }
        oBtn5.onmouseleave = function(){
            oBtn5.style.opacity = '1';
        }


        for(var i =0; i < qqBtn.length; i++){
            qqBtn[i].index = i;
            qqBtn[i].onmouseenter = function(){
                for(var j = 0; j < qqBtn.length; j++){
                    qqList[j].style.display = 'none';
                }
                qqList[this.index].style.display = 'block';
            }
            qqBtn[i].onmouseleave = function(){
                qqList[this.index].style.display = 'none';
            }
            qqList[i].onmouseenter = function(){
                this.style.display = 'block';
            }
            qqList[i].onmouseleave = function(){
                this.style.display = 'none';
            }
        }
    

            
        $(function(){
            
                $("#nav #menu a").mouseenter(function(){
                    $("<P>飞车官方首页</p>").appendTo("#menu");
                }).mouseleave(function(){
                        $("#nav #menu p").remove();
                    },)
    
                    $("#login").css({
                        top : -1500,
                        left: 250
                        
                    })
                        
            
            
                $("#btn_login").click(function(){
                    $("#login").css("display","block");
                    
                })
        
                $("#close").click(function(){
                    $("#login").css("display","none");
                })
    
        })



        
        
            
        
        drag(oLogo);

        function drag(node){
            node.onmousedown = function(ev){
                e = ev || window.event;
                var offsetX = e.clientX - node.offsetLeft;
                var offsetY = e.clientY- node.offsetTop;

                document.onmousemove = function(ev){
                    e = ev || window.event;
                    node.style.left = e.clientX - offsetX + 'px';
                    node.style.top = e.clientY - offsetY + 'px';
                    }
                }
                document.onmouseup = function(){
                    document.onmousemove = null;
            }
        }

        

            
    
        

        
