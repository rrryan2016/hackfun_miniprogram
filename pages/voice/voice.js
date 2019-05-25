const plugin = requirePlugin("WechatSI")

const manager = plugin.getRecordRecognitionManager()

Page({
  data: {
    currentText: '',
    showmicro:false,
    shownull:false

  },
  streamRecord: function() {
    manager.start({
      lang: 'zh_CN',
      duration: 30000
    })
    this.setData({
      showmicro:true
    })
  },
  endStreamRecordEnd: function() {
    manager.stop()
    this.setData({
      showmicro:false
    })

  },

  dele:function(e){
    this.setData({
      currentText:''
    })
  },

  // record:function(){
  // 	wx.startRecord({
  // 		success(res){
  // 			const tempFilePath = res.tempFilePath
  // 		}
  // 	})
  // 	setTimeout(function(){
  // 		wx.stopRecord()
  // 	},10000)
  // }

  initRecord: function() { //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      let text = res.result
      this.setData({
        currentText: text,
      })
    } // 识别结束事件
    manager.onStop = (res) => {
      let text = res.result
      if (text == '') { // 用户没有说话，可以做一下提示处理...
        this.setData({
          shownull:true
        })
        setTimeout(function (){
          that.setData({
            shownull:false
          })
        },500)
        // return
      }
      this.setData({
        currentText: text,
      }) // 得到完整识别内容就可以去翻译了
      this.translateTextAction()
    }
  },
  translateTextAction: function() {},
  onLoad: function() {
    this.initRecord()
  }

})