//兼容xml
function getxml(){
	var xmlrq;
	if(window.XMLHttpRequest){
		xmlrq=new XMLHttpRequest;
	}
	else{
		xmlrq=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlrq;
}
