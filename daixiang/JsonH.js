
//商品分类
var arr=[]
var obj=new Object;
var arrhead=[];
var show1=[];
var show2=[];
var show3=[];
var show4=[];
var show5=[];
var show6=[];


var ShowSrot=["家用电器","服饰鞋帽","个护化妆","手机数码","电脑办公","运动保健","家居家装","饮料食品","珠宝首饰","汽车用品"];
var Head=["大家电","日用小家电","厨房电器","个人护理","健康电器","家装五金"]
var ShowSrot1=["冰箱 "," 家庭影院 "," 酒柜冷柜 "," 空调 "," 热水器 "," 洗碗机 "," 洗衣机 "," 消毒柜 "," 家电配件 "," 电视机 "," 吸油烟机 ","燃气灶"];
var ShowSrot2=["除湿干器 "," 电池-生活电器 "," 电风扇 "," 电话机 "," 电烫斗 "," 挂烫机 "," 加湿器 "," 净水设备/净水机 "," 冷风扇 "," 清洁机 "," 取暖电器 "," 吸尘器 "," 饮水机 "," 电子灭蚊器 "," 其他小家电 "," 空气净化机 "," 干衣机 "," 扫地机器人 ","吊扇 ","空调扇 ","智能家电"]
var ShowSrot3=["电饼铛煎烤机 "," 电磁炉 "," 电饭煲 "," 电烤箱 "," 电水壶热水瓶 "," 电压力锅 "," 豆浆机 "," 多用途锅 "," 果蔬清洗机 "," 咖啡机 "," 料理榨汁机 "," 面包机 "," 微波炉 "," 煮蛋器 "," 切碎器 "," 酸奶机 "," 料理机 "," 刨冰/碎冰/冰沙机 "," 食物垃圾处理机 "," 电炖锅 "," 制冰机 "]
var ShowSrot4=["电吹风 "," 口腔/护理 "," 美容器 "," 理发器 "," 剃/脱毛器 "," 剃须刀 "," 电子美容仪 "," 卷/直发器 "]
var ShowSrot5=["按摩器 "," 按摩椅 "," 健康秤厨房秤 "," 体温计 "," 血糖仪 "," 血压器 "," 足浴盆 "," 美容按摩器 "," 睡眠呼吸机 "," 计步器/脂肪检测仪"]
var ShowSrot6=["LED灯 "," 插座-五金电源 "," 厨卫五金 "," 灯具-五金 "," 电动工具 "," 电线线缆 "," 家具五金 "," 洁身器 "," 电气开关 "," 门铃 "," 沐浴花洒 "," 手动工具 "," 水槽 "," 仪器仪表 "," 水龙头 "," 浴霸/排气扇 "," 测绘仪器"]
for (var i=0;i<ShowSrot.length;i++) {
	var Srot={};

	Srot.id=ShowSrot[i];
	arr.push(Srot)
}

for (var i=0;i<Head.length;i++) {
	
	var srot1={}
	srot1.name=Head[i];
	arrhead.push(srot1);
}

for (var i=0;i<ShowSrot1.length;i++) {
	
	var srot2={};
	srot2.name=ShowSrot1[i];
	show1.push(srot2);
	
	
}

for (var i=0;i<ShowSrot2.length;i++) {
	
	var srot3={};
	srot3.name=ShowSrot2[i];
	show2.push(srot3);
	
	
}

for (var i=0;i<ShowSrot3.length;i++) {
	
	var srot4={};
	srot4.name=ShowSrot3[i];
	show3.push(srot4);
	
	
}

for (var i=0;i<ShowSrot4.length;i++) {
	
	var srot5={};
	srot5.name=ShowSrot4[i];
	show4.push(srot5);
	
	
}

for (var i=0;i<ShowSrot5.length;i++) {
	
	var srot6={};
	srot6.name=ShowSrot5[i];
	show5.push(srot6);
	
	
}

for (var i=0;i<ShowSrot6.length;i++) {
	
	var srot7={};
	srot7.name=ShowSrot6[i];
	show6.push(srot7);
	
	
}



obj.product=arr;
obj.head=arrhead;
obj.srot1=show1;
obj.srot2=show2;
obj.srot3=show3;
obj.srot4=show4;
obj.srot5=show5;
obj.srot6=show6;



alert(JSON.stringify(obj));