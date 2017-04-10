// JavaScript Document
//--------------换肤----------------
  /*$('.circle1').on('click',function(){
	  var imgurl=['../img/dt5.jpg','../img/dt6.jpg'];
	   
	     document.body.style.backgroundImage='imgurl[0]';
	  }); */

 
 var seal=document.getElementById("seal");
   var sealimg=seal.getElementsByTagName("img");
   
   seal.onclick=function(){
	   $('#seal img').addClass('afterseal');
	  $('.sealdl').addClass('aftersealdl');
	   $('.roatimg').addClass('afterroat');
	   $('.descrit').hide(1000);
	  // $('.lin1').addClass('lin1opacity');
	   }
  //--------------判断年份---------------
      $('#sealdt').on('click',function(){
		  $('#dd').toggle(1000);
		  }); //---sealdt
      var send=document.getElementById("send");
	  var result1=document.getElementById("result1");
       send.onclick=function(){
		  wjk();
		   }
       function wjk(){
		   var val=$('input:radio[name="seadog"]:checked').val();
		   var num="1983年";
		   var arr1=['继续加油奥','很接近了','小明吼你别放弃'];
		   if(val==null){ result1.innerHTML="谁便猜一个嘛"; return false;}
		   else if(val!=num){
			   var n=Math.round(Math.random()*2);
			   result1.innerHTML=arr1[n]; return false;
				}  //else if
		   else { $('#dd').hide(1000); result1.innerHTML="Yes"+" "+"<strong>"+num+"</strong>"; $('.lin1').addClass('afterlin1'); $('#city').addClass('aftersealdl'); $('.qcity').addClass('afterqcity');}
		   }	
		   
//----------------functionQcity-----------------
     $('#qcity').on('click',function(){
		 $('#citydd').toggle(1000);
		 });
     $('#citysend').on('click',function(){
		   city();
		 });
   function city(){
	       var result2=document.getElementById("result2");
		   var val=$('input:radio[name="city"]:checked').val();
		   var num="淮安";
		   var arr2=['你很棒，只差一点','南北分界城','0517哪里的区号'];
		   
		   if(val==null){ result2.innerHTML="怎么&nbsp;版主天上来的&nbsp;不用落地..."; return false;}
		   else if(val!=num){ 
			   var j=Math.round(Math.random()*2);
			   result2.innerHTML=arr2[j];
			   return false;}
		   else { $('#citydd').hide(1000); result2.innerHTML="我的家乡"+" "+"<strong>"+num+"</strong>"; $('.lin2').addClass('afterlin2');  $('.hangye').addClass('aftersealdl'); $('.vocation').addClass('afterqcity'); }
		   }


//-------------------checkbox事件------------------        
        $('#vocation').on('click',function(){
			$('#vocation2').toggle(1000);
			});
      
		var result3=document.getElementById("result3");
		$('#vocationsend').on('click',function(){
			if(checkbox()){ result3.innerHTML="<strong>以上都有奥</strong>"; $('#vocation2').hide(1000);  $('.lin3').addClass('afterlin3'); $('.certification').addClass('aftercertif'); $('.underzj').addClass('afterunderzj');}
		    else { result3.innerHTML="相信版主，总得有熟悉的...";}	
			});

//-------------------证件事件------------------        
        $('#certificate').on('click',function(){
			$('#certificate2').toggle(1000);
			});
      
		var result4=document.getElementById("result4");
		$('#certificatesend').on('click',function(){
			if(checkbox2()){ result4.innerHTML="<strong>有证件&nbsp;不如有脑子</strong>"; $('#certificate2').hide(1000);  $('.lin4').addClass('afterlin4'); 
			$('.now').addClass('afternow'); $('.undernow').addClass('afterundernow');}
		    else { result4.innerHTML="提示...版主全都有奥";}	
			});
			
	   //-----------检查行业checkbox是否选中--------------
		  function checkbox(){
			  var type=document.getElementsByName("hy");
			  for (var i in type){ 
				 if(type[i].checked==true){ 
					return true;
					   } //if
					} //for
			  return false;
			  } //checkbox      
		 //-----------证件checkbox是否选中--------------
		  function checkbox2(){
			  var type=document.getElementsByName("zj");
			  for (var i in type){ 
				 if(type[i].checked==true){ 
					return true;
					   } //if
					} //for
			  return false;
			  } //checkbox   
	
//----------------居住哪个城市-----------------
     $('#undernowdd').on('click',function(){
		 $('#city2b').toggle(1000);
		 });
     $('#nowsend').on('click',function(){
		   city2();
		 }); 
		 
	$('#review').on('click',function(){
		$('#prelude').slideToggle(1000);
		});
	$('#shouqi').on('click',function(){
		$('#prelude').slideUp(1000);
		});
   function city2(){
	       var result5=document.getElementById("result5");
		   var val=$('input:radio[name="lc"]:checked').val();
		   var num="苏州";
		   var arr3=['古韵今骚','很接近了','伍子胥建城'];
		   if(val==null){ result5.innerHTML="总有个地方住吧..."; return false;}
		   else if(val!=num){ 
		     var k=Math.round(Math.random()*2);
			 result5.innerHTML=arr3[k]; return false;
			  }
		   else { $('#city2b').hide(1000); result5.innerHTML="现居住地"+" "+"<strong>"+num+"</strong>"; $('.lin5').addClass('afterlin5'); $('.self').slideDown(400); $('.wrap').addClass('afterwrap'); }
		   
		   
		   }   
	
	
	