// 页面滚动事件

document.onscroll = function(){
	//获取滚动条的位置
	//pc端的位置
	let s1 = document.documentElement.scrollTop
	//移动端的位置
	let s2 = document.body.scrollTop
	
	let scroll = s1==0?s2:s1;
	//console.log(scroll);
	let height = document.documentElement.clientHeight
	
	let search = document.querySelector('.search')
	
	if(scroll>height*0.12){
		search.style.position = 'fixed'
		search.style.top = 0
		search.style.left = 0
	}else{
		search.removeAttribute('style')
	}
	
	
}