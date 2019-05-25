const plugin = requirePlugin("WechatSI")

const manager = plugin.getRecordRecognitionManager()

Page({
  data: {
    currentText: '',
    input:'',
    showmicro:false,
    shownull:false

  },


    initRecord: function () {
    var that = this
    manager.onStart = (res) => {
      that.setData({
        showmicro:true
      })
    }

    // 识别结束事件
    manager.onStop = (res) => {
      var that = this
      let text = res.result

      if (text == '') {
        this.setData({
          shownull: true
        })
        setTimeout(function () {
          that.setData({
            shownull: false
          })
        }, 500) 
      }

      this.setData({
        currentText: text,
        showmicro: false
      })
    }

  },

  // listenInput: function (e) {
  //   var content = e.detail.value
  //   if (content == '') {
  //     content = '请您告诉我您的出发点和目的地'
  //   }
  //   this.setData({
  //     currentText: content
  //   })
  // },

  dele: function (e) {
    this.setData({
      currentText: '',
      input: ''
    })
  },



  //手指按下
  touchdown_plugin: function (e) {
    // wx.stopBackgroundAudio();
    manager.start({
      lang: "zh_CN"
    })
  },
  //手指松开
  touchup_plugin: function () {

    manager.stop();
  },
  onLoad:function(){
    this.initRecord()
    app.getRecordAuth()
  }
})