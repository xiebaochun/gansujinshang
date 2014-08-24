// JavaScript Document
$(function(){
	
	nav();
	
	if($('.index_avg')[0]){
		index_show();
		newlist();
		qin();
	}
	
	if($('.projects_avg')[0]){
		project();
	}
	
	function qin(){
		var aImg=$('.qinshow img');
		var navimg=$('.qin img');
		var aLi=$('.qin li');
		var aBar=$('.bar');
		var lw=aBar.eq(0).width();
		var w=611-(aLi.length-1)*(lw+1);
		var iNow=0;
		var zIndex=2;
		aLi.eq(0).width(w);
		
		var nrc=[];
		var orc=[];
		
		navimg.each(function(i) {
			nrc[i]=$(this).attr('nrc');
			orc[i]=$(this).attr('orc');
		});
		navimg.eq(0).attr('src',nrc[0]);
		
		aBar.each(function(i) {
			$(this).hover(function(){
				if(iNow==i) return;
				iNow=i;
				navimg.each(function(j) {
					navimg.eq(j).attr('src',orc[j]);
				});
				navimg.eq(i).attr('src',nrc[i])
				aLi.stop().animate({width:37},'slow')
				.eq(i).stop().animate({width:w},'slow',function(){
					aImg.eq(i).css({'z-index':zIndex++,'opacity':0}).animate({opacity:1},'slow');
				});
			},function(){})
		});
	}
	
	
	function index_show(){
		var oBox=$('.index_avg');
		var aImg=$('.index_adv img');
		var aTxt=$('.info');
		var len=aImg.length;
		var str='';
		var aLi=null;
		
		str='<ul class="index_btn">';
		for(var i=0; i<len-1; i++){
			if(i==0){
				str+='<li class="active"></li>';
			}
			str+='<li></li>';
		}
		str+='</ul>';
		oBox.append(str);
		aLi=$('.index_btn li');
		$('.index_btn').width(aLi.eq(0).outerWidth(true)*len);
		
		tabShow(oBox,aLi,aImg,len,aTxt);

		
	}
	
	function project(){
		var oBox=$('.projects_avg');
		var aImg=$('.projects_avg_Imgs img');
		var aTxt=$('.info1');
		var len=aImg.length;
		var str='';
		var aLi=null;
		str='<div class="pro_btn">';
		
		for(var i=0; i<len-1; i++){
			
			if(i==0){
				str+='<span class="active">1</span>';
			}
			str+='<span>'+(i+2)+'</span>';
		}
		str+='</div>';
		oBox.append(str);
		aLi=$('.pro_btn span');
		tabShow(oBox,aLi,aImg,len,aTxt);
	}
	
	function newlist(){
		var oUl=$('.idnex_Div01_left_imgs');
		var aLi=$('li',oUl);
		var timer=null;
		var iNow=0;
		var zIndex=2;
		
		timer=setInterval(play,3000);
		oUl.hover(function(){clearInterval(timer);},function(){clearInterval(timer);timer=setInterval(play,3000);})
		function play(){
			iNow++;
			if(iNow>aLi.length-1){
				iNow=0;
			}
			aLi.eq(iNow).css({'z-index':zIndex++,'opacity':0}).animate({opacity:1},'slow')
		}
	}
	
	function nav(){
		var aDiv=$('#nav div');
		var aLi=$('.subnav li');
		
		aLi.hover(
		    function(){
				$(this).addClass('acitve');
			},
			function(){
				$(this).removeClass('acitve');
			}
		)
		
		aDiv.hover(
		    function(){
				$('>a',this).addClass('hover');
				$('.subnav',this).css('display','block');
			},
			function(){
				$('>a',this).removeClass('hover');
				$('.subnav',this).css('display','none');
			}
		)
	}
	
})

function tabShow(oBox,aLi,aImg,len,aTxt){
	var iNow=0;
	var zIndex=2;
	var timer=null;
	
	oBox.hover(function(){clearInterval(timer);},function(){clearInterval(timer);timer=setInterval(play,3000);})
	
	aLi.mouseover(function(){
		iNow=$(this).index();
		move();
	})
	
	timer=setInterval(play,3000);
	
	function play(){
		iNow++;
		if(iNow>len-1){
			iNow=0;
		}
		move();
	}
	
	function move(){
		aLi.removeClass('active').eq(iNow).addClass('active');
		if(aTxt) aTxt.css('display','none').eq(iNow).css('display','block');
		aImg.eq(iNow).css({'z-index':zIndex++,'opacity':0}).animate({opacity:1},'slow')	
	}	
}