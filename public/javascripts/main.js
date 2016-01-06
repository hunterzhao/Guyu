
	var app=angular.module('myApp',['mgcrea.ngStrap','ngSanitize','angularAwesomeSlider']);
    
    app.controller('HeadCtrl',['$scope',function($scope){

    }]);

    app.controller('IndexCtrl',['$scope',function($scope){
    	   
            $scope.tabs1 =[
						  {
						    "title": "套利组合",
						    "head":["组合名称","净值","日收益","月收益","总收益"],
						    "content": [["<a href='#'>你好雪球</a>","0.9900","+0.01","-0.01%","-1.00%"],
						                ["<a href='#'>从中国中铁开始</a>","2.2555","-0.02%","-0.05%","+125.55%"],
						                ["<a href='#'>中线稳赚</a>","2.3431","-2.12%","-1.77%","+134.31%"]
						               ]
						  },
						  {
						    "title": "成分股票",
						    "head":["股票名称","当前值","张跌值","成交量","市值"],
						    "content": [["生意宝","73.59","-3.63 (-4.70%)","773.03万","185.98亿"],
						                ["万向钱潮","22.63","-0.28(-1.22%)","3789.49万","519.20亿"],
						                ["交通银行","6.44","-0.02(-0.31%)","8156.31万","4782.52亿"]
						               ]
						  }
						];

			$scope.tabs2 =[
						  {
						    "title": "市场",
						    "content":[{"headimg":"/images/head/zhao.png","name":"赵明","title":"元旦节快乐","words":"元旦的股市不错，大家要再接再厉，争取春节买头牛回去"},
						               {"headimg":"/images/head/huyun.png","name":"胡赟","title":"春节快乐","words":"春节的股市不错，大家要再接再厉，争取端午买头牛回去"}] 
						  },
						  {
						    "title": "分析",
						    "content":[{"headimg":"/images/head/zhao.png","name":"赵明","title":"元旦节快乐","words":"元旦的股市不错，大家要再接再厉，争取春节买头牛回去"},
						               {"headimg":"/images/head/huyun.png","name":"胡赟","title":"春节快乐","words":"春节的股市不错，大家要再接再厉，争取端午买头牛回去"}] 
						  },
						  {
						    "title": "理念",
						    "content":[{"headimg":"/images/head/zhao.png","name":"赵明","title":"元旦节快乐","words":"元旦的股市不错，大家要再接再厉，争取春节买头牛回去"},
						               {"headimg":"/images/head/huyun.png","name":"胡赟","title":"春节快乐","words":"春节的股市不错，大家要再接再厉，争取端午买头牛回去"}] 
						  }
						];


			$scope.tabs3 =[
						  {
						    "title": "全部",
						    "content": ["<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "交易",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "新闻",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "公告",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  }
						];

			$scope.talk=["<a href='#'>1月制造业PMI49.7，预期49.8</a>",
			             "<a href='#'>2月制造业PMI59.7，预期49.8</a>",
			             "<a href='#'>3月制造业PMI69.7，预期49.8</a>"];

			$scope.tabs4 =[
						  {
						    "title": "全部",
						    "content": ["<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "交易",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "新闻",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  },
						  {
						    "title": "公告",
						    "content": ["<a href='#'>小权：2016，在小市值个股中寻宝</a>","<a href='#'>12月制造业PMI49.7，预期49.8</a>","<a href='#'>阿土哥：招商地产套利反思</a>"]
						  }
						];

		    $scope.selectedIcon = "";
            $scope.icons =  [{"value":"Gear","label":"<img src=\"images/glyphicons-246-chat.png\"> Gear"},
                             {"value":"Globe","label":"<img src=\"images/glyphicons-310-comments.png\"> Globe"},
                             {"value":"Heart","label":"<img src=\"images/glyphicons-52-eye-open.png\"> Heart"},
                             {"value":"Camera","label":"<img src=\"images/glyphicons-196-info-sign.png\"> Camera"}]
						    
		    $scope.toggleThirdTab= function(){
                  $scope.tabs1[2].disabled=!$scope.tabs1[2].disabled;
		    }
    }]);

    app.controller('MakeGroupCtrl',['$scope','$rootScope',function($scope,$rootScope){

    	    var stockList=[{"industry":"银行","name":"招商银行(SH92857)","price":"12.9","value":"0"},{"industry":"银行","name":"南京银行(SH92853)","price":"19.9","value":"0"},
    	                   {"industry":"保险","name":"平安保险(SH92877)","price":"10.9","value":"0"},{"industry":"保险","name":"人寿保险(SH92457)","price":"11.9","value":"0"},
    	                   {"industry":"科技","name":"腾讯科技(SH82857)","price":"20.9","value":"0"},{"industry":"科技","name":"华为科技(SH95857)","price":"15.9","value":"0"}];
            $scope.selectedIcon = "0";
			$scope.icons = [{"value":"0","label":"沪深"},
			                {"value":"1","label":"美股"},
			                {"value":"2","label":"港股"},
			                {"value":"3","label":"日股"}];
            
            $scope.popover = {
			  "title": "增删成分股",
			  "content": "Hello Popover <br/> This is a multiline message!",
			  "candidate":stockList.slice(),
			  "selected":[],
			  "saved": true
			};
            
            $scope.selectedNumber=0;
            $scope.value="0";//slider的最大值
            $scope.options = {       
		        from: 0,
		        to: 100,
		        step: 0.1,
		        // dimension: "",
		        css: {
		          background: {"background-color": "silver"},
		          before: {"background-color": "green"},
		          default: {"background-color": "white"},
		          after: {"background-color": "green"},
		          pointer: {"background-color": "red"}          
		        }        
		      };
            $rootScope.progress=100;
          
			$scope.select=function(value){
				$scope.popover.selected.push(value);
				// 删除备选股票列表中已选择的股票
				var index = $scope.popover.candidate.indexOf(value);
				if (index >= 0) {
				  $scope.popover.candidate.splice( index, 1 );
				}
                $scope.selectedNumber++;
			}

			$scope.unselect=function(value){
				$scope.popover.candidate.push(value);
				// 删除备选股票列表中已选择的股票
				var index = $scope.popover.selected.indexOf(value);
				if (index >= 0) {
				  $scope.popover.selected.splice( index, 1 );
				}
				$scope.selectedNumber--;
			}

			$scope.reset=function(){
				 $scope.popover.candidate=stockList.slice();
				 $scope.popover.selected=[];
				 $scope.selectedNumber=0;
			}
	}]);
    
    app.controller('ValueCtrl',['$scope','$rootScope',function($scope,$rootScope){
            //监听被选的股票列表，如果value发生变化，则立即改变progress
            $scope.$watch('stock.value',function(newValue,oldValue){
            	var ans=$rootScope.progress+Number(oldValue)-Number(newValue);
            	if(ans<0){
            		alert("超出预算");
            		$scope.stock.value=oldValue;
            	}
            	$rootScope.progress=ans;
                
            });
    }]);
    app.filter('to_trusted',['$sce',function($sce){
    	return function(text){
    		return $sce.trustAsHtml(text);
    	}
    }])
