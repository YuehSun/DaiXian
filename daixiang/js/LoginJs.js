/*amdin*/
function valiuser(){
	var use=document.getElementById("admin").value;
	var admintxt=document.getElementById("admintxt");
	var str=false;
	
	 if( str==false){
    	admintxt.style.background="beige"
    	
    }

	for (var i in use) {
		var asc=use.charCodeAt(i);
		if(asc<48||(asc>57&&asc<65)||(asc>90&&asc<95)||asc==96||asc>122){
			
			admintxt.innerHTML="用户名不合法";
			return false;
		}
	}
	
	//不能以数字开头
	
	if(use.charCodeAt(0)>=48&&use.charCodeAt(0)<=57){
		
		admintxt.innerHTML="用户名不能以数字开头";
	    return false;
	}
	
	
	if(use.length==0){
		admintxt.innerHTML="用户名不能为空";
		return false;
	}
	
	else if(use.length<6||use.length>20){
		admintxt.innerHTML="用户名长度为6-20位";
		return false;
	}

    str=true;
    if( str==true){
    	admintxt.innerHTML="";
    	
    	admintxt.style.background="white"
    }
    
    return true;
}

function valipass(){
	var pass=document.getElementById("pass").value;
	var passtxt=document.getElementById("passtxt");
	var str=false;
	
	 if( str==false){
    	passtxt.style.background="beige"
    	
    }
	
	if(pass.length<6){
		
		passtxt.innerHTML="密码长度错误";
		return false;
	}
	
	 str=true;
	 if( str==true){
    	passtxt.innerHTML="";
    	
    	passtxt.style.background="white"
    }
	
	
	return true;
	
	
}



function show(){
	if(valiuser()&&valipass()){
		window.location.href="index.html";
	}
	
	
}


