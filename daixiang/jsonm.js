
var arr=[];
var obj={};

/*var txt=["机器人","家庭影院","热水器","洗衣机","除湿干器","空气净化","电饼铛","电饭煲","LED灯","浴花洒"];
var txt2=["手机","耳机","保护套","手机饰品","移动电源","无线音箱","单反相机","数码相机","Iphone","Ipad"];

var txt3=["面膜","彩妆","眉笔","洁面乳","香水","沐浴露","牙刷","漱口水","男性护理","女性护理"];*/

var txt=["印度进口辣木籽 特级辣木子天然精选辣木种子保健食品休闲零食","[果脯屋]干紫薯干 紫薯丁 脱水紫薯块 生紫薯粒煮粥",
"[果脯屋]脱水苹果粒（丁）10*10mm","[果脯屋]花菜干 花椰菜干美味脆爽 脱水蔬菜","[果脯屋]脱水胡萝卜 代餐粉 面食调色粉 ","[果脯屋]脱水南瓜粒南瓜干南瓜粥营养代餐煮粥必备"]

/*for(var i=0; i<txt.length;i++){
	var otxt={};
	otxt.name=txt[i];
	otxt.name1=txt2[i];
	otxt.name2=txt3[i];
	arr.push(otxt);

}*/

for (var i=0;i<txt.length;i++) {
	var oobj={};
	oobj.title=txt[i];
	arr.push(oobj);

}

obj.title1=arr;

alert(JSON.stringify(obj));





