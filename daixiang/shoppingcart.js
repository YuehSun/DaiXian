		$(function(){
			/*购物车*/
		
			
			$(".shoppingcart").mouseenter(function(){
					$(this).stop().animate({right:0});
					
					getcookie(".shopmain ul");
					
				});
			
			$(".shoppingcart").mouseleave(function(){
				$(this).stop().animate({right:-270})
				
			});

	
		//购物车cookies
		src_num();
		
		
		$(".productshow").on("click",'.imga',function(){
			var id = this.id
			
			var frist = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
			var same = false;//判断时候已经追加
			//是否是第一次添加
			
			if(frist){
				//第一次添加,建立json结构。
				$.cookie('goods','[{id:'+id+',num:1}]',{expires:1});
				$.cookie('first','false');
			}
			//如果第二次添加
			else{
				//先取出数据
				var str = $.cookie('goods');
				
				//将json转化为字符串
			var arr = eval(str);
				//循环数据
				for(var attr in arr){
					//判断是否有数据
					if(arr[attr].id==id){
						//num++;
				arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
						//在将字符串转化为json对象
						var cookiestr=JSON.stringify(arr);
						//将json对象再存放到cooki中						
						$.cookie('goods', cookiestr);
						//让same返回true
						same=true;
					}									
				}
				//如果不是相同的
				
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr);
					
				}
				
			}
			src_num()
			
		
				
		})
		
		
	//增加
		
		$(".shopul").on("click",'.add',function(){
			var id = this.id
		var str = $.cookie('goods');				
				//将json转化为字符串
			var arr = eval(str);
				//循环数据
				for(var attr in arr){
					//判断是否有数据
					if(arr[attr].id==id){
						//num++;
					arr[attr].num = arr[attr].num +1;  //让json结构中num自增。
						//在将字符串转化为json对象
						var cookiestr=JSON.stringify(arr);
						//将json对象再存放到cooki中						
						$.cookie('goods', cookiestr);
					}									
				}

			
			src_num()	
		getcookie("",".shopul");			
		})
		
		//减少
		$(".shopul").on("click",'.jian',function(){
			var id=this.id;
			var cookie=$.cookie("goods");
			var str_arr=eval(cookie)
			for (var i in str_arr) {
				if(str_arr[i].id==id){
					str_arr[i].num=str_arr[i].num-1;
					
					if(str_arr[i].num==1){
						str_arr[i].num=1;
					}
					
					var cookjs=JSON.stringify(str_arr);
					
					$.cookie('goods',cookjs);

				}
			}
			
       	src_num()
		getcookie("",".shopul");

				
		})
		
		//删除
		$(".shopul").on("click",'.del',function(){
			var id=this.id;
			var cookie=$.cookie("goods");
			var str_arr=eval(cookie)
			
			
			for (var i in str_arr) {
				if(str_arr[i].id==id){
					var index=$(this).parent().parent().index();
					//alert(index)
						
					
					str_arr.splice(index,1);
					
					var cookjs=JSON.stringify(str_arr);
					
					$.cookie('goods',cookjs);

				}
				
				
			}
			
       	src_num()
		getcookie("",".shopul");

				
		})
		
		
		
		//购物车的数量
		
		function src_num(){
			//先取出cookie
			var src_arr=$.cookie("goods");
			//判断cookie是否为空
			if(src_arr){
				var cook=eval(src_arr);
				//初始的值
				var num=0;			
				for (var i in cook) {
					num+=Number(cook[i].num)					
				}			
				$("#cookienum").html(num);
				$(".head-shopp-num").html(num)
			}	
		}
		
	
		
		
		
		//取数据 传入objs改变写入的对象
			function getcookie(objs,objs2){
				$.ajax({
					type:"get",
					url:"DxDeImg.json",
					success:function(req){
						var str=$.cookie("goods");	
						if(str){
							var str_arr=eval(str);
							var html="";
							var html2="";
							
						for (var i in str_arr) {							
							html+="<li><img src="+req.imgs[str_arr[i].id].src+"/>"
							+" <div class='titles'><p>"+req.title1[str_arr[i].id].title+"</p></div>"
							+"<div class='nums'><p>购买的数量:"+str_arr[i].num+"<span>价格:"+12*str_arr[i].num+"</span></p> </div> </li>"
						}
						for (var i in str_arr) {
					
							html2+="<li><input type='checkbox'class='check'/>"
							+"<div class='img-txt'><img src="+req.imgs[str_arr[i].id].src+"/><p>"+req.title1[str_arr[i].id].title+"</p></div>"
							+"<div class='money'> <p>单价:￥12.00</p></div>"
							+"<div class='nums'><p><button class='jian' id="+req.imgs[str_arr[i].id].id+" >-</button><input type='text' value="+str_arr[i].num+" class='txt'><button class='add' id="+req.imgs[str_arr[i].id].id+">+</button></p></div>"
							+"<div class='zong'><span>总价:</span><p class='moneys'>"+str_arr[i].num*12+"</p></div>"
							+"<div class='remove'><button class='del' id="+req.imgs[str_arr[i].id].id+">删除</botton></div></li>"
							
						
						}
						
						  $(objs).html(html);
							$(objs2).html(html2);
							
							
								
							
						}	
						
						
					}
				});		
			}
			
				getcookie("",".shopul")
			
		
			
			
			
		})
