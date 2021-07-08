var isname=true;
var isurl=true;
var idUsertypeBut=0;
var istype=0;
var sortable =null;
var soritems=null;
var sortboolean=false;
var sortListStart=null;
var sortListEnd=null;


$(function(){
	
	 //搜索引擎选择
    $('.search_box li').on('click',function(){
        $(this).addClass('search_bg').siblings().removeClass('search_bg');
        $('.search-tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.icon_search').removeClass('search_click');
        $('.icon_search').eq($(this).index()).addClass('search_click');
        //搜索事件
        $('.search_click').on('click',function(){
     	   searchClick();
         })
    })
    //搜索事件
   $('.search_click').on('click',function(){
	   searchClick();
    })
	
	soritems=document.getElementById("items");
    //汉堡菜单
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      
    });

    // tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })



    //sticky-sidebar
    $('.sidebar').theiaStickySidebar({
        additionalMarginTop: 100,
        additionalMarginBottom:400,
        containerSelector:'wrapper',
        defaultPosition:'absolute',
    })

   
 $('.addUserbut').on('click',function(){

		/*butModal 排序没有改变时*/
		if(!butModal()){
			 if($(this).text() == "显示添加"){
				 var a=isUserLogin(1);
				if(a){
					$(this).text("隐藏添加");
					$('#zidingyi span.but').show()
				}
	        }else{
	        	
	        	 prohibitSortable();
	        	 $('#zidingyi i.fa ').hide();
	    		 $('#zidingyi span.but').hide();
	    		 $(this).text("显示添加");
	        }
		}
	})

    // 自定义区
    //显示添加
    $('.icon_text').on('click',function(){
    	if($(this).text()=="显示添加"){
        	var a=isUserLogin(1);
			if(a){
				$(this).text("隐藏添加");
				$('.toggle_show').toggle();
			}
        }else{
        	$(this).text("显示添加");
        	$('.toggle_show').toggle();
        }
    })
    
    
    
    $(".userSort").on('click',function(){
		if($(this).text()=="完成排序"){
			
			updateSort();
			prohibitSortable();
			
		}else{
			$(this).text("完成排序");
			$(this).css("color","#f26929")
			
			if(sortable==null ||sortable==undefined){
				if(soritems==null ||soritems==undefined){
					soritems=document.getElementById("items");
				}
				sortable=new Sortable(soritems,{});
			}else{
				sortable.option("disabled",false);
			}
			sortboolean=true;
			getSortListStart();
			
		}
		
	});
    
    
    $(document).on('click','.addUserType',function(){
		if(!butModal()){
			$("#addUserModalType").modal('show');
		}
	});
    
    $(document).on('click','.addUserPlat',function(){
    	go_UserTypename();
		if(!butModal()){
			$.ajax({
				url : rootpath + "/platform/getPfType",
				type : "post",
				dataType : "json",
				success : function(data) {
					if(data.msg==1){
						var html="";
						if(data.list!=null){
							for(var i=0;i<data.list.length;i++){
								var list=data.list[i];
								html+='<option value="'+list.id+'">'+list.name+'</option>';
							}
						}else{
							html+='<option value="0">默认选择</option>';
						}
						$("#platformUserType").empty();
						$("#platformUserType").html(html);
						$("#addUserModal").modal('show');
					}else{
						showloginModal(3);
					}
						
				}

			});
		}
		
	});
    
    
    $(document).on('click','.addModul',function(){
		isurl=true;
		$("#platformUrl").css("border","1px solid #ced4da");
  	  if(isname){
  		  $(".submitUser").attr("disabled",false);
  	  }
	var strName=$(this).parent().find('a').find('h4');
	var strUrl=$(this).parent().find('a');
	var name="";
	if(strName.length>0){
		name=strName.eq(0).text();
	}else{
		name=$(strUrl).text();
	}
	var url=$(strUrl).attr('href');
	
	if(url.indexOf('http')==-1){
		url='http://'+url
	}else{
	}
	$.ajax({
		url : rootpath + "/platform/getPfType",
		type : "post",
		dataType : "json",
		success : function(data) {
			if(data.msg==1){
				var html="";
				if(data.list!=null){
					for(var i=0;i<data.list.length;i++){
						var list=data.list[i];
						html+='<option value="'+list.id+'">'+list.name+'</option>';
					}
				}else{
					html+='<option value="0">默认选择</option>';
				}
				$("#platformUserType").empty();
				$("#platformUserType").html(html);
				$("#platformName").val(name);
				$("#platformUrl").val(url);
				$("#addUserModal").modal('show');
			}else{
				showloginModal(3);
			}
				
		}

	});
	
    });
    
    
    /*删除*/
    $(".dusubmit").click(function(){
    	$("#userModal").modal('hide');
    	var tempid=$(".tempid").val();
    	var tempType=$(".tempType").val();
    	var url=rootpath + "/platform/";
    	if(tempType==0){
    		url+="delPlatformTypes";
    		idUsertypeBut=0;
    	}else{
    		url+="delUserPlatforms";
    	}
    	$.ajax({
    		url :url,
    		type : "post",
    		dataType : "json",
    		data : {"id":tempid},
    		success : function(data) {
    			var str="欢迎使用";
    			if(data==1){
    				str="删除成功！！";
    				getPlatformUser();
    			}else{
    				str="删除失败或未登录！！！";
    			}
    			/*showModal("信息提示",str,false)*/
    		}

    	});
    })

      $("#username").blur(function(){
    	   var platformName=$("#username").val()
    	   var le=getByteLen(platformName);
    	   if(platformName==null || platformName=="" || platformName.indexOf(" ")>=0 || le>12){
    		   $("#username").css("border","1px solid red");
    		   $(".submitType").attr("disabled",true);
    		   isname=false;
    	   }else{
    		   isname=true;
    		   if(isurl){
    			   $("#username").css("border","1px solid #ced4da");
    			   $(".submitType").attr("disabled",false);
    		   }
    	   }
    })
    
    $("#platformName").blur(function(){
    	   var platformName=$("#platformName").val()
    	   var le=getByteLen(platformName);
    	   if(platformName==null || platformName=="" || platformName.indexOf(" ")>=0 || le>30){
    		   $("#platformName").css("border","1px solid red");
    		   $(".submitUser").attr("disabled",true);
    		   isname=false;
    	   }else{
    		   isname=true;
    		   if(isurl){
    			   $("#platformName").css("border","1px solid #ced4da");
    			   $(".submitUser").attr("disabled",false);
    		   }
    	   }
    })

    $("#platformUrl").blur(function(){
    	   var platformUrl=$("#platformUrl").val()
    	   var reg=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
    	   if(platformUrl.indexOf('http')==-1){
    		   platformUrl='http://'+platformUrl
    		   $("#platformUrl").val(platformUrl);
    		}else{
    			$("#platformUrl").val(platformUrl);
    		}
    	   var objExp=new RegExp(reg);
    	   if(!objExp.test(platformUrl)){
    		   $("#platformUrl").css("border","1px solid red")
    		   $(".submitUser").attr("disabled",true);
    		   isurl=false;
    	    }else{
    	    	isurl=true;
    	    	  if(isname){
    	    		  $("#platformUrl").css("border","1px solid #ced4da");
    	    		  $(".submitUser").attr("disabled",false);
    	    	  }
    	     }
    		
    })

    /*保存自定义导航栏添加框*/
     $(".submitType").click(function(){
    	 $("#addUserModalType").modal('hide');
    	 		var id=$("#userType").val()
    		   var name=$("#username").val();
    	 		 var le=getByteLen(name);
	    	   if(name==null || name=="" || name.indexOf(" ")>=0 || le>12){
	    		   showModal("信息提示","请输入正确的内容!!!",false);
   	 			return;
	    	   }
    		   if(name!=null && le<=12){
    			   $.ajax({url:rootpath+"/platform/savePlatformTypes",
    					type:"post",
    					data:{"name":name,"id":id},
    					dataType:"json",
    					success:function(data){
    						if(data>0){
    							$("#userType").val("0");
    							$("#username").val("");
    							showModal("信息提示","操作成功",false);
    							getPlatformUser();
    						}else if(data==-1){
    							showModal("信息提示","用户未登录",false);
    						}else if(data==-2){
    							showModal("信息提示","最多只能添加5个分类",false);
    						}else if(data==0){
    							showModal("信息提示","已存在的名称不可二次添加",false);
    						}else{
    							showModal("信息提示","操作出现错误,刷新页面重新提交",false);
    							
    						}
    					}
    				});
    		   }else{
    			   showModal("错误","请按正确的指示操作！！",false);
    		   }
    	})
    	

    /*保存自定义导航栏添加框*/
     $(".submitUser").click(function(){
    	 $("#addUserModal").modal('hide');
    	 		
    	 		var typeName=$("#platformTypeName").val();
    	 		var type=$("#platformUserType").val();
    		   var platformid=$("#platformid").val();
    		   var platformName=$("#platformName").val();
    		   var platformUrl=$("#platformUrl").val();
    		   var grid=$("#platformGrid").val();
    		   var le=getByteLen(platformName);
    		   var reg=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
    		   var objExp=new RegExp(reg);
    		   if(objExp.test(platformUrl) && platformName!=null && platformName!="" && le<=30){
    			   if(istype==1){
    				   type=0;
    			   }else if(istype==2){
    				   typeName=null;
    			   }
    			   $.ajax({url:rootpath+"/platform/saveUserPlatform",
    					type:"post",
    					data:{"name":platformName,"url":platformUrl,"grid":grid,"id":platformid,"types":type,"typeName":typeName},
    					dataType:"json",
    					success:function(data){
    						istype=0;
    						if(data>0){
    							$("#platformGrid").val("");
    							$("#platformUrl").val("");
    							$("#platformName").val("");
    							$("#platformTypeName").val("");
    							$("#platformid").val(0);
    							$("#platformtypes").val(0);
    							$(".platformUserType").show();
    							$(".platformTypeName").hide();
    							showModal("信息提示","操作成功",false);
    							getPlatformUser();
    						}else if(data==-1){
    							showModal("信息提示","用户未登录",false);
    						}else if(data==0){
    							showModal("信息提示","请检查填写信息是否重复或者未填",false);
    						}else{
    							showModal("信息提示","操作出现错误",false);
    							
    						}
    					}
    				});
    		   }else{
    			   showModal("错误","请按正确的指示操作！！",false);
    		   }
     		})
    
    
    
    //隐藏自定义修改内容图标
    // 修改自定义( 删除  和 修改 )
    $(".toggle_show.xg").on('click',function(){
        //删除
        //按钮显示font-awesome x图标
        $('.fa.fa-times-circle').toggle();
        //需改笔头显示
        $('.fa.fa-pencil').toggle();
    })


    //自定义区网站弹窗跟换
    $('#toggle-fenlei').on('click',function(){
         $('.toggle-hied').toggle();
    })
    //分类选项
    $('.custom .tab-dingyi').on('click',function(){
        getSortListEnd();
        
        if(!butModal()){
        	$(this).addClass('active').siblings().removeClass('active');
        	$('#ziDingYi .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
        	
		    $("#items").removeAttr('id');
		    $('.modual_user_li>.active').attr("id","items");
		    idUsertypeBut=$("#ziDingYi .active").attr("value");
		    /*重置排序按钮*/
		    prohibitSortable();
		}
    })


    
    
     
		 
		

    //亚马逊 常用工具
    $('.google_custom a').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#amzBox .google-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })



    //媒体区
    $('#social_media .custom a').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#social_media .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })


    //综合软件区
    let software = $('#software .list-bbs li:gt(17)');
    $(software).hide();
    $('.software-more').on("click",()=>{
        $(software).slideToggle();
    })

    //关键词工具
    let keywordsBox = $('#keywordsBox .list-bbs li:gt(17)');
    $(keywordsBox).hide(); 
    $('.keywords-more').on("click",()=>{
        $(keywordsBox).slideToggle();
    })

    //评价工具
    let toolEvaluation = $('#tool-evaluation .list-bbs li:gt(17)');
    $(toolEvaluation).hide();
    $('.tool-more').on('click',()=>{
        $(toolEvaluation).slideToggle();
    })


    // 建站 SEO/SEM    数据分析 外链推广  联盟营销 
    $('#service-menu .custom a').on("click",function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#service-menu .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })

    // 转化率优化  邮件营销 内容制作  内容检查  内容外包 

    $('#service-menuTwo .custom a').on("click",function(){
           $(this).addClass('active').siblings().removeClass('active');
           $('#service-menuTwo .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })

    // 外包工作 工作效率  图库  视觉制作 Logo设计
    $('#service-menuThree .custom a').on("click",function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#service-menuThree .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })


    // 常用服务  收款服务 外站平台 货代物流 商标/专利
    $('#service-Four .custom a').on("click",function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#service-Four .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })



    //锚点初始化

    function animatescroll(userId){
        $(userId).animatescroll({scrollSpeed:600,easing:'easeInOutQuint',padding:60});
    }
    //返回顶部

    $('.animatesroll-top').on('click',()=>{
        animatescroll('.wrapper');
    })

    $(window).scroll(function () {
 
        if ($(window).scrollTop() > 600) {
            $(".animatesroll-top").fadeIn();
        }
        else if ($(window).scrollTop() <= 100) {
            $(".animatesroll-top").fadeOut();
        }
    });
    //   hover显示
    $(".qr-min").hover(function(){
        $(this).fadeToggle();
    });
    


    

    $('.animatesroll-1').on('click',()=>{
        animatescroll('#ziDingYi');
        $('.icon-caret').animate({   
            top:0
        },500);
        $(".animatesroll-1 a").addClass('active').parent().siblings().children("a").removeClass('active');
      
    })
    $('.animatesroll-2').on('click',()=>{
        animatescroll('#amzBox');
        $('.icon-caret').animate({   
            top:38
        },500);

        $(".animatesroll-2 a").addClass('active').parent().siblings().children("a").removeClass('active');
      
    })

    $('.animatesroll-3').on('click',()=>{
        animatescroll('#social_media');
        $('.icon-caret').animate({   
            top:76
        },500)
        $(".animatesroll-3 a").addClass('active').parent().siblings().children("a").removeClass('active');
       
    })

    $('.animatesroll-4').on('click',()=>{
        animatescroll('#BBS');
        $('.icon-caret').animate({   
            top:114
        },500)
        $(".animatesroll-4 a").addClass('active').parent().siblings().children("a").removeClass('active');
        
   
    })

    $('.animatesroll-5').on('click',()=>{
        animatescroll('#xuanpin');
        $('.icon-caret').animate({
            top:152
        },500)
        $(".animatesroll-5 a").addClass('active').parent().siblings().children("a").removeClass('active');
    })

    $('.animatesroll-6').on('click',()=>{
        animatescroll('#software');
        $('.icon-caret').animate({   
            top:190
        },500)
        $(".animatesroll-6 a").addClass('active').parent().siblings().children("a").removeClass('active');
        
    })

    $('.animatesroll-7').on('click',()=>{
        animatescroll('#keywordsBox');
        $('.icon-caret').animate({   
            top:228
        },500)
        $(".animatesroll-7 a").addClass('active').parent().siblings().children("a").removeClass('active');
        
    })
   
    $('.animatesroll-8').on('click',()=>{
        animatescroll('#tool-evaluation');
        $('.icon-caret').animate({   
            top:266
        },500)
        $(".animatesroll-8 a").addClass('active').parent().siblings().children("a").removeClass('active');
    
    })

    $('.animatesroll-9').on('click',function(){
        animatescroll('#service-menu');
        $('.icon-caret').animate({   
            top:304
        },500)
        $(".animatesroll-9 a").addClass('active').parent().siblings().children("a").removeClass('active');
       
    })
    
    $('.animatesroll-10').on('click',function(){
        animatescroll('#service-menuTwo');
        $('.icon-caret').animate({   
            top:342
        },500)
        $(".animatesroll-10 a").addClass('active').parent().siblings().children("a").removeClass('active');
  
    })

    $('.animatesroll-11').on('click',function(){
        animatescroll('#service-menuThree');
        $('.icon-caret').animate({   
            top:380
        },500)
        $(".animatesroll-11 a").addClass('active').parent().siblings().children("a").removeClass('active');
       
    })
    $('.animatesroll-12').on('click',function(){
        animatescroll('#service-Four');
        $('.icon-caret').animate({   
            top:418
        },500)
        $(".animatesroll-12 a").addClass('active').parent().siblings().children("a").removeClass('active');
       
    })
   
     
    //滚动监听
    $(window).bind('scroll',myFunction); 
  

})


function searchClick(){
	   //获取输入文件
    let textIpt = $('.search-tab-content.active input').val();
    //获取rul
    let urls = $(".search_click").parent().attr('action');
    var baidu = "https://www.baidu.com/s";
    var heimingdan = "https://www.amz520.com/amztools/reviewer.html";
    var AsinSeed = "https://www.asinseed.com/cn/US?";
    var google = "https://www.google.com.hk/search?q";
    var meiya = "https://www.amazon.com/s/ref=nb_sb_noss_1";
    var yinya = "https://www.amazon.co.uk/s/ref=nb_sb_noss_1";
    var rya = "https://www.amazon.co.jp/s/ref=nb_sb_noss_1";
    var deya = "https://www.amazon.de/s/ref=nb_sb_noss_1";
    if(baidu == urls){
    	window.open(urls+"?wd="+textIpt);
    }else if(heimingdan == urls){
           window.open("https://www.amz520.com/amztools/reviewer.html?keyword="+textIpt)
    }else if(AsinSeed ==urls){
        
       window.open("https://www.asinseed.com/cn/US?token=amz520&q="+textIpt)
    }else if(google == urls){
       
        window.open("https://www.google.com.hk/search?q="+textIpt);
    }else if(meiya == urls){
      
         window.open("https://www.amazon.com/s?k="+textIpt+"&ref=nb_sb_noss_1");
    }else if(yinya == urls){
            window.open("https://www.amazon.co.uk/s?k="+textIpt+"&ref=nb_sb_noss_1");
    } else if(rya == urls){
          window.open("https://www.amazon.co.jp/s?k="+textIpt+"&ref=nb_sb_noss_1");
    }else if(deya == urls){
        window.open("https://www.amazon.de/s?k="+textIpt+"&ref=nb_sb_noss_1");
    }
}

function myFunction(){   
       
           //算出鼠标移动到顶部的高度。
           var scrollt = $(window).scrollTop()+60;
          //实时监测id距离顶部高度

          var ziDingYi = $('#ziDingYi').offset().top+$('#ziDingYi').height()+57;

          var amzBox = $('#amzBox').offset().top+$('#amzBox').height()+90;

          var social_media = $('#social_media').offset().top+$('#social_media').height();

          var BBS = $('#BBS').offset().top+ $('#BBS').height();

          var xuanpin = $('#xuanpin').offset().top+$('#xuanpin').height();

          var software = $('#software').offset().top+$('#software').height();

          
          var keywordsBox = $('#keywordsBox').offset().top+$('#keywordsBox').height();
          
          var toolEvaluation = $('#tool-evaluation').offset().top+$('#tool-evaluation').height();
          
          var serviceMenu = $('#service-menu').offset().top+$('#service-menu').height();
           
          var serviceMenuTwo = $('#service-menuTwo').offset().top+$('#service-menuTwo').height();

          var serviceMenuThree = $('#service-menuThree').offset().top+$('#service-menuThree').height();
      
          var serviceFour = $('#service-Four').offset().top+$('#service-Four').height();

        
         if(scrollt > ziDingYi && scrollt < amzBox){
                $('.icon-caret').css('top',38)
          
                $(".animatesroll-2 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;

          }else if(scrollt > amzBox && scrollt < social_media){
                 $('.icon-caret').css('top',76)
                 $(".animatesroll-3 a").addClass('active').parent().siblings().children("a").removeClass('active');
                 return false;
          }else if(scrollt > social_media && scrollt < BBS ){
                $('.icon-caret').css('top',114)
                $(".animatesroll-4 a").addClass('active').parent().siblings().children("a").removeClass('active');
          }else if(scrollt > BBS  && scrollt < xuanpin){
                $('.icon-caret').css('top',152)
                $(".animatesroll-5 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
          }else if(scrollt > xuanpin && scrollt < software){
                $('.icon-caret').css('top',190)
                $(".animatesroll-6 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
          }else if(scrollt > software && scrollt < keywordsBox){
                 $('.icon-caret').css('top',228)
                 $(".animatesroll-7 a").addClass('active').parent().siblings().children("a").removeClass('active');
                 return false;
          }else if(scrollt > keywordsBox && scrollt < toolEvaluation){
                $('.icon-caret').css('top',266)
                $(".animatesroll-8 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
           }else if(scrollt > toolEvaluation && scrollt < serviceMenu ){
                $('.icon-caret').css("top",304)
                $(".animatesroll-9 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
           }else if(scrollt > serviceMenu  && scrollt < serviceMenuTwo  ){
                $('.icon-caret').css('top',342)
                $(".animatesroll-10 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
            }else if(scrollt > serviceMenuTwo && scrollt < serviceMenuThree){
                $('.icon-caret').css('top',380)
                $(".animatesroll-11 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
            }else if(scrollt > serviceMenuThree){
                $('.icon-caret').css("top",418)
                $(".animatesroll-12 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
            }else  if(scrollt < ziDingYi){
                $('.icon-caret').css("top",0)
                $(".animatesroll-1 a").addClass('active').parent().siblings().children("a").removeClass('active');
                return false;
            }
    
       
           
    }

/*排序修改后点击别的按钮*/
function butModal(){
	var islength= isListLength();
	if(islength){
		 showModal("排序提示","当前自定义内容排序有改变&nbsp;&nbsp;<a href='javascript:void(0)' style='color:red' onclick='cancelSort()'>点击我取消</a>&nbsp;&nbsp;或者&nbsp;&nbsp;<a href='javascript:void(0)' style='color:red' onclick='submiSort()'>点击我提交</a>",false);
	}
	return islength;
}

/*两个list对比  不相同返回 true*/
function isListLength(){
	getSortListEnd();
	if(sortListStart!=null && sortListEnd!=null && sortListEnd.length==sortListStart.length && sortListEnd.length>0){
		for(var i=0;i<sortListEnd.length;i++){
			
			if(sortListEnd[i]!=sortListStart[i]){
				return true;
			}
		}
	}
	
	return false;
}

/*操作之后再拿自定义网站id*/
function getSortListEnd(){
	
	if(sortboolean){
		sortListEnd=new Array()
		var list=$("#items .list-div");
		if(list!=null && list.length>0){
			for(var i=0;i<list.length;i++){
				var id=$(list[i]).attr("name");
				if(id>0){
					sortListEnd[i]=id
				}
				
			}
		}
	}
	
}

function getSortListStart(){
	if(sortboolean){
		sortListStart=new Array()
		var list=$("#items .list-div");
		if(list!=null && list.length>0){
			for(var i=0;i<list.length;i++){
				var id=$(list[i]).attr("name");
				if(id>0){
					sortListStart[i]=id
				}
				
			}
		}
	}

}
function prohibitSortable(){
	/*关闭拖拽*/
	if(sortable!=null &&sortable != undefined){
		sortable.option("disabled",true);
	}

	$(".userSort").text("重新排序");
	$(".userSort").css("color","#0e367a");
	sortboolean=false;
	sortListStart=null;
	sortListEnd=null;
	sortable=null;
	soritems=null;
}

/*取消排序*/
function cancelSort(){
	$("#userModal").modal('hide');
	prohibitSortable();
	getPlatformUser();
}

/*提交排序*/
function submiSort(){
	updateSort();
	prohibitSortable();
	
}

function updateSort(){
	if(isListLength()){
		$.ajax({
			url :rootpath + "/platform/updateUserPlatformSort",
			type : "post",
			dataType : "json",
			data : {"param":sortListEnd.join()},
			success : function(data) {
				var str="欢迎使用";
				if(data>0){
					str="排序重置成功！！";
					getPlatformUser();
				}else{
					str="操作异常刷新页面重新开始！！！";
				}
				showModal("信息提示",str,false)
			}

		});
	}
	
}

function getPlatformUser(){
	$(".modual_user > a").remove();
	$(".modual_user_li div.items").remove();
	$.ajax({
		url : rootpath + "/platform/getUserList",
		type : "post",
		dataType : "json",
		success : function(data) {
			var namehtml="";
			var html="";
			if(data!=null && data.length>0){
				for(var i=0;i<data.length;i++){
					var temp=data[i];
					var typename=temp.name;
					var typeid=temp.id;
					if(i==0){
						html+='<a value="'+typeid+'" href="javascript:void(0);" class="tab-dingyi active">'+typename;
					}else{
						html+='<a value="'+typeid+'" href="javascript:void(0);" class="tab-dingyi">'+typename;
					}
					html+='<i class="fa fa-times-circle circle-x" aria-hidden="true" onclick="delUserType('+typeid+')"></i>';
					html+='<i class="fa fa-pencil pencil-b" aria-hidden="true" onclick="upFromType('+typeid+')"></i></a>';
					var templist=temp.list;
					if(templist!=null && templist.length>0 && templist!=undefined){
						if(i==0){
							namehtml+='<div class="card-body items active" id="items">';
						}else{
							namehtml+='<div class="card-body items">';
						}
						
						for(var j=0;j<templist.length;j++){
							var str=templist[j]
							var nname=str.name;
							var nurl=str.url;
							var nimgUrl=str.imgUrl;
							var nid=str.id;
							var nimg=str.img;
							if(nimg==undefined || nimg==null){
								nimg=rootpath+'/index/img/ie.png'
							}else{
								nimg=rootpath+nimg;
							}
							namehtml+='<div class="list-div" name="'+nid+'"><div class="list-icontu"><img src="'+nimg+'" alt=""></div>';
							namehtml+=' <div class="list_wangzhang"><a class="items" target="_blank" href="'+nurl+'">'+nname+'</a>';
					         namehtml+='<i class="fa fa-times-circle circle-x" aria-hidden="true" onclick="delUserPlat('+nid+')"></i>';
					         namehtml+='<i class="fa fa-pencil pencil-b" aria-hidden="true" onclick="updateUserPat('+nid+')"></i> </div></div>';
						}
						namehtml+='</div>'
					}else{
						if(i==0){
							namehtml+='<div class="card-body items active" id="items"></div>';
						}else{
							namehtml+='<div class="card-body items"></div>';
						}
					}
					
					
				}
			}else{
				html+='<a href="javascript:void(0);" class="tab-dingyi  active"> 自定义类目 <i class="fa fa-times-circle circle-x" aria-hidden="true"></i> <i class="fa fa-pencil pencil-b" aria-hidden="true"></i> </a>';
				namehtml+='<div class="card-body items active"></div>';
			}
			$(".modual_user").append(html);
			$(".modual_user_li").append(namehtml);
			soritems=document.getElementById("items");
			
		      //分类选项
		    $('.custom .tab-dingyi').on('click',function(){
		        getSortListEnd();
		        
		        if(!butModal()){
		        	$(this).addClass('active').siblings().removeClass('active');
		        	$('#ziDingYi .card-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
		        	
				    $("#items").removeAttr('id');
				    $('.modual_user_li>.active').attr("id","items");
				    idUsertypeBut=$("#ziDingYi .active").attr("value");
				    /*重置排序按钮*/
				    prohibitSortable();
				}
		    })
			}
		})
	}


function showModal(userModalName,userModalTest,isShow){
	if(isShow){
		$(".dusubmit").show();
		$(".dusubmit").css("display",true);
	}else{
		$(".dusubmit").hide();
		$(".dusubmit").css("display",false);
	}
	$("#userModalName").html(userModalName);
	$("#userModalTest").html(userModalTest);
	$("#userModal").modal('show');
}



function updateUserPat(id){
	go_UserTypename();
	$.ajax({url:rootpath+"/platform/selectPlatform",
		type:"post",
		data:{"id":id},
		dataType:"json",
		success:function(data){
			if(data.msg!=0){
				var temp=data.userPlatform;
				var type=data.listType;
				var html="";
				if(type!=null){
					for(var i=0;i<type.length;i++){
						var list=type[i];
						if(list.id==temp.types){
							html+='<option selected="selected" value="'+list.id+'">'+list.name+'</option>';
						}else{
							html+='<option value="'+list.id+'">'+list.name+'</option>';
						}
					}
				}else{
					html+='<option value="0">默认选择</option>';
				}
				$("#platformUserType").empty();
				$("#platformUserType").html(html);
				$("#platformGrid").val(temp.grid);
				$("#platformUrl").val(temp.url);
				$("#platformName").val(temp.name);
				$("#platformid").val(temp.id);
				/*$("#platformtypes").val(temp.types);*/
				$("#addUserModal").modal('show');
			}else{
				showModal("信息提示","账号没有登录，请登录后操作",false);
			}
		}
	});
}

function go_UserType(){
	$(".platformUserType").hide();
	$(".platformTypeName").show();
	istype=1;
}


function go_UserTypename(){
	$(".platformTypeName").hide();
	$(".platformUserType").show();
	$("#platformTypeName").val("");
	istype=2;
}


function delUserPlat(id){
	$(".tempid").val(id);
	$(".tempType").val(1);
	showModal("信息提示","删除自定义网站后不可恢复，请谨慎操作！！",true);
}

function delUserType(id){
	$(".tempid").val(id);
	$(".tempType").val(0);
	showModal("信息提示","删除自定义类别后不可恢复，请谨慎操作！！",true);
}

function showModal(userModalName,userModalTest,isShow){
	if(isShow){
		$(".dusubmit").show();
		$(".dusubmit").css("display",true);
	}else{
		$(".dusubmit").hide();
		$(".dusubmit").css("display",false);
	}
	$("#userModalName").html(userModalName);
	$("#userModalTest").html(userModalTest);
	$("#userModal").modal('show');
}

function upFromType(id){
	if(id==0){
		$("#username").val("自定义类目");
		$("#userType").val(0);
		$("#exampleModal").modal('show');
	}else{
		$.ajax({url:rootpath+"/platform/selectPlatformType",
			type:"post",
			data:{"id":id},
			dataType:"json",
			success:function(data){
				if(data.msg!=0){
					var temp=data.UserPlatformType;
					$("#username").val(temp.name);
					$("#userType").val(temp.id);
					$("#addUserModalType").modal('show');
				}else{
					showModal("信息提示","账号没有登录，请登录后操作",false);
				}
			}
		});
	}
	
}


/*字符串的检查*/
function getByteLen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
         var a = str.charAt(i);
         if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }else{
            len += 1;
        }
    }
    return len;
}