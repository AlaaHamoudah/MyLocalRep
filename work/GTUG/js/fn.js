var move = false;
var first_left = 0;
var timer_move = true;
$(document).ready(function(){
	$(".logo").mousedown(function(event){
		if(!timer_move){
			first_left = event.clientX;
			move = true;
		}
	});
	$(document).mouseup(function(event){
		move = false;
	});
	$(".logo").mousemove(function(event){
		if(move){
			movegoogle(event.clientX);
		}
	});
	$(document).keydown(function(event){
		if(!timer_move){
			if(event.keyCode==39){
				first_left = 0;
				movegoogle(3);
			}else if(event.keyCode==37){
				first_left = 0;
				movegoogle(-3);
			}
		}
	});
	setTimeout("timer(0,490);",1000);
});
function timer(x,maxx){
	
	if(x<maxx){
		movegoogle(x);
		setTimeout("timer("+(x+2)+","+maxx+")",10);
	}else{
		timer_move = false;
		$("#move").fadeIn("slow");
		setTimeout('$("#move").fadeOut("slow");',3000);
	}
}
function movegoogle(x){
		change_left =  x - first_left;
		left_g1 = parseInt($("#google1").css("left"));
		left_g2 = parseInt($("#google2").css("left"));
		$("#google1").css("left",left_g1+change_left)
		$("#google2").css("left",left_g2+change_left)
		first_left = x ;
		if(left_g1<=-337 && change_left<0){
			$("#google1").css("left",left_g1*-1)
		}
		if(left_g2<=-337 && change_left<0){
			$("#google2").css("left",left_g2*-1)
		}
		if(left_g1>=337 && change_left>0){
			$("#google1").css("left",left_g1*-1)
		}
		if(left_g2>=337 && change_left>0){
			$("#google2").css("left",left_g2*-1)
		}
}