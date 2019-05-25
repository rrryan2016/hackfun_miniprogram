Page({
  data: {},
  goToVoice: function() {
    wx.navigateTo({
      url: '/pages/voice/voice',
    })

  },
  goToChatroom: function() {
    wx.navigateTo({
      url: '/pages/chatroom/chatroom',
    })
  },
  requestTrial: function() {
    wx.request({
      url: 'http://www.javasocket.top:7788/',
      success: function(res) {
        console.log(res) // 服务器回包信息
      }
    })
  }
})