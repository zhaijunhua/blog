$(function(){
	// 获取所有图书
	$.ajax({
		url: '/Bookshops/book/GetAllBookMsg',
		dataType:'json',
		success(data){
			if(data.code == 1){
				var str = '';//定义空字符串
				for(var i=0;i<data.data.length;i++){//使用bootstrap框架来显示图书信息
					str+=`<div class="col-xs-6 col-md-3" data-bookId="${data.data[i].bookId}">
							<div class="thumbnail">
								
								<div class="caption">
									<h2 class="book-name">${data.data[i].bookName}</h2>
									<p class="book-intro" title="${data.data[i].bookIntroduction}">${data.data[i].bookIntroduction}</p>
									<p class="btn-wrap">
										<button class="btn btn-info viewBtn" data-toggle="modal" data-target="#item-info">查看</button>
									</p>
								</div>
							</div>
						</div>`
				}
				$('.merchandise-list .row').append(str);//将获取到的内容插入到页面绵中
			}
		}
	}).then((value)=>{
		$('.viewBtn').click(function(){//点击进行查看图书的详细信息
			var bookId = $(this).parents('.col-md-3').attr('data-bookId');
			var bookItemInfo;
			for(var i=0;i<value.data.length;i++){
				if(value.data[i].bookId == bookId){
					bookItemInfo = value.data[i];
					break;
				}
			}
			var $boxItem = $('#item-info');
			$boxItem.find('.book-name').html(bookItemInfo.bookName);//数据库中相应的内容
			$boxItem.find('.book-item-intro').html(bookItemInfo.bookIntroduction);
			$boxItem.find('#category').html(bookItemInfo.bookClass);
			$boxItem.find('#price').html(bookItemInfo.bookPrice);
			$boxItem.find('#publish').html(bookItemInfo.bookPublishinghouse);
		})
		
	})
})
