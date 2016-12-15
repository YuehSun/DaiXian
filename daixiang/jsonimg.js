var arr=[];
var obj={};
var arrimg=[];

var arrs=[];
var obj2={};
var arrimgc=[];





/*for (var i=1;i<=6;i++) {
	var str="img2/m-r2"+"("+i+").jpg";
	arr.push(str);	
}

for (var i=0; i<arr.length;i++) {
	var imgs={};
	imgs.src=arr[i];
	arrimg.push(imgs);
	
}*/

for (var i=1;i<=6;i++) {
	
	var str="DxDelImg/img1"+"("+i+").jpg";
	arr.push(str);	
	
}

for (var i=0; i<arr.length;i++) {
	var img={};
	img.src=arr[i];
	arrimg.push(img)
	
	
}


obj.imgs=arrimg;

alert(JSON.stringify(obj));






/*for (var i=1;i<=5;i++) {
    var str="img/m-"+i+".jpg";
    arr.push(str);
    

}*/
/*for (var i=0;i<arr.length;i++){
	var img1={};
	img1.img=arr[i];
	arrimg.push(img1);
	
}*/

/*for(var i=1;i<=12;i++){
	var str="img/mc-1"+" "+" "+"("+i+")"+".jpg";
	arrs.push(str);
	
	
}


for ( var i=0; i<arrs.length;i++) {
	var imgc={};
	imgc.img=arrs[i];
	arrimgc.push(imgc);
	
	
}
//obj.img=arrimg;
obj2.imgc=arrimgc;
alert(JSON.stringify(obj2));*/


//alert(JSON.stringify(obj));



