
;(function(jQuery){
	var $ = jQuery;
	var query = function(id){
		var item ;
		var today = '2017-03';

		var date = new Date();
		today = date.getFullYear() + '-' + (date.getMonth() + 1 );
		$.ajax({
			url:"http://chengyun.raycloud.com/attendance/detail?date=" + today,
			async:false,
			dataType:"json",
			success:function(data){
				var arr = data.data,
					countTime = 0;
				arr.forEach(function(value, index, array) {
					countTime += value.lateTime;
				});
				console.log(countTime);
			},
			fail: function(data){
			}
		});
		return item;
	}

	var queryImg = function(id){
		$.ajax({
			url:"http://chengyun.raycloud.com/user/list?pageNo=" + 1 + '&pageSize=5',
			async:false,
			dataType:"json",
			success:function(data){
				var arr = data.data;
				arr.forEach(function(value, index, array) {
					console.log('test');
					console.log(value.picPath);
				});
			},
			fail: function(data){
			}
		});
	}

	

	var init = function(){
		
		query();
		queryImg();
	}


	jQuery(function(){
		init();
	});

})(jQuery);


	