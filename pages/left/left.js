Page({
  data: {},
  goToSheet:function(){
    wx.navigateTo({
      url:'/pages/right/right'
    })


  },
  goToVoice: function() {
    wx.navigateTo({
      url: '/pages/voice/voice',
    })

  },
  goToChatroom: function() {
    wx.navigateTo({
      url: '/pages/chat/chat',
      // url: '/pages/chatroom/chatroom',
    })
  },
  requestTrial: function() {
    wx.request({
      url: 'https://www.javasocket.top',
      data: {
        id: 1,
        version: '1.0.0'
      },
      // url: 'https://www.javasocket.top:6001/',
      // url: 'http://www.javasocket.top:7788/',
      success: function(res) {
        console.log(res) // 服务器回包信息
      }
    })
  }
})