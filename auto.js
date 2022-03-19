function auto(current)
{
	//console.log("auto" + current);
　　var frame = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\' /></frameset>';
　　with(document)
　　{
　　　　write(frame);
　　　　//void(close());
　　};
}

auto(location.href);

setInterval(
	function(){
		frame_document = window.frames[0].document
		continue_button = frame_document.getElementsByClassName("public_submit")[0];
		
		if(continue_button != undefined){
			if (continue_button.innerText == "继续"){
				continue_button.click();
			}
			else if (continue_button.innerText == "我知道了"){
				if(frame_document.getElementsByClassName("public_text")[0].children[1].innerText == "当前视频播放完毕！"){
					video_list_div = frame_document.getElementsByClassName("video_lists")[0];
					video_list = video_list_div.children[0].children;

					for(var i=0;i<video_list.length;i++){
						a_tag = video_list[i].children[0];
						if(a_tag.style.color === "red"){
							console.log("next" + i);
							continue;
						}else{
							//console.log(video_list[i].children[0].style.color === "");
							console.log(a_tag.href);
							continue_button.click();
							a_tag.click();
							//auto(a_tag.href);
							break;
						}
					}
					if(i == video_list.length)
						alert("播放完成");
					
				}else{
					continue_button.click();
				}
			}
		}else{
			console.log("wait 继续");
		}
		
		keep_look_button = frame_document.getElementsByClassName("public_cancel")[0]
		if(keep_look_button != undefined && keep_look_button.innerText == "继续观看"){
			keep_look_button.click();
		}else{
			console.log("wait 继续观看");
		}
		
	}, 1000
);

