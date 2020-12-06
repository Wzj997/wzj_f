window.onload = function(){

    var aDashs = document.getElementsByClassName('dash');
    var oBar = document.getElementById('dot-bar');
    var aDots = oBar.getElementsByTagName('i'); 
    var section1 = document.getElementById('section1');
    var video = document.getElementsByClassName('video')[0];
    var main = document.getElementById('main');
    var desc = main.getElementsByClassName('desc')[0];
    var iconPlay = main.getElementsByClassName('iconPlay')[0];
    var aSections = document.getElementsByClassName('section');
    var oHeader = document.getElementById('header');
    var oBannar = oHeader.getElementsByClassName('bannar')[0];
    // alert(oBannar.innerHTML)
    
    // alert(aSections.length)    
    
    // var newVideo = video.cloneNode(true);
    aDashs[0].addEventListener('click',function(){
        startMove(this,{width:38});
        startMove(aDashs[1],{width:10});
        video.style.display = 'block';
        desc.style.display = 'none';
        iconPlay.style.display = 'block';
    })
    aDashs[1].addEventListener('click',function(){
        startMove(this,{width:38});
        startMove(aDashs[0],{width:10});
        section1.style.backgroundColor = '#FD5A63';
        // video.innerHTML= null;
        video.style.display = 'none';
        desc.style.display = 'block';
        iconPlay.style.display = 'none';
    })
    
        for(var i = 0; i < aDots.length; i++){
            aDots[i].index = i;
        aDots[i].addEventListener('click',function(){
            for(var j = 0; j < aDots.length; j++){
            aDots[j].className = '';
            aSections[j].style.display = 'none';
        }
        this.className = 'active';
        aSections[this.index].style.display = 'block';
       
        // document.documentElement.scrollTop = 667*(this.index);
        
            if(this.index == 0){
                oBannar.style.transform = 'translateX(0)';
                oBannar.style.opacity = 1; 
                }
            if(this.index > 0){
                oBannar.style.transform = 'translateX(100%)';
                oBannar.style.opacity = 0;
            }
            if(this.index == 5){
                oBar.style.transform = 'translateY(-140px)';
            }
            if(this.index != 5){
                oBar.style.transform = 'translateY(0)';
            }       
        });   
    }


        // setInterval(function(){
            $(document).find($('.text-bar')).addClass('move');
        // },30)

        var aPics = aSections[5].getElementsByClassName('logo-pic');
        for(var i = 0; i < aPics.length; i++){
            aPics[i].addEventListener('mouseover',function(){
                this.style.transform = 'translateY(-10px)';
            });
            aPics[i].addEventListener('mouseout',function(){
                this.style.transform = 'translateY(0)';
            })
        }

     

}
