Page({
  data:{},
	goToVoice:function(){
		wx.navigateTo({
			url:'/pages/voice/voice',
		})

	},
	goToChatroom:function(){
		wx.navigateTo({
			url:'/pages/chatroom/chatroom',
		})
	}
  
})