Page({
  data:{
  	tip:'',
  	input1:'',
  	input2:''
  },
  input1Input:function(e){
  	this.setData({
  		input1:e.detail.value
  	})
  },
  input2Input:function(e){
  	this.setData({
  		input2:e.detail.value
  	})
  },

  inputBtnClick:function(e){
  	console.log("input_1:"+this.data.input1+"	input_2:"+this.data.input2);
  }


  // formBindsubmit:function(e){
  // 	if(e.detail.value.input1.length==0||e.detail.value.input2.length==0){
  // 		this.setData({
  // 			tip:"Cannot be empty here",
  // 			input1:'',
  // 			input2:''
  // 		})
  // 	}else{this.setData({
  // 		tip:'',
  // 		input1:e.detail.value.input1,
  // 		input2:e.detail.value.input2
  // 	})

  // 	}
  // },

  // formReset:function(){
  // 	this.setData({
  // 		tip:'',
  // 		input1:'',
  // 		input2:''
  // 	})
  // }

})