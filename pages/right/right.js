Page({
  data: {
    imgUrls: [
      '/images/exp/harden1.jpg',
      '/images/exp/harden2.jpg',
      '/images/exp/harden3.jpg',
      // '/images/exp/graffiti_1.jpg',
      // '/images/exp/graffiti_2.jpg',
      // '/images/exp/graffiti_3.jpg',
      // '/images/exp/graffiti_4.jpg',
      // '/images/exp/graffiti_5.jpg',
      // '/images/exp/graffiti_6.jpg',
      // '/images/exp/graffiti_7.jpg',
      // '/images/exp/graffiti_8.jpg',
    ],
    depart_date: "2019-5-25",
    depart_time: "12:01",
    return_date: "2019-5-26",
    return_time: "14:01",
    origin: '',
    destination: '',
    current_time: (new Date()).toString
  },

  bindReturnDateChange: function(e) {
    this.setData({
      return_date: e.detail.value
    })
  },
  bindReturnTimeChange: function(e) {
    this.setData({
      return_time: e.detail.value
    })
  },

  bindDepartDateChange: function(e) {
    this.setData({
      depart_date: e.detail.value
    })
  },
  bindDepartTimeChange: function(e) {
    this.setData({
      depart_time: e.detail.value
    })
  },

  beginJourney: function() {
    setTimeout(function() {
      wx.showModal({
        title: '提醒',
        content: '现在时间是' + current_time + '，您的XXXX将于XX出发。',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('User Confirmed')

          }
        }
      });
      // wx.showToast({
      //   title:'',
      //   icon:'success',
      //   duration
      // })
    }, 1000)
    setTimeout(function() {
      wx.showModal({
        title: '登车提醒',
        content: '您的司机（车牌尾号：XXX）正在出发点等您。',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('User Confirmed')
          }
        }
      });
      // wx.showToast({
      //   title:'',
      //   icon:'success',
      //   duration
      // })
    }, 5000)




  },
  toupper: function() {
    console.log("Toupper Triggered")
  },

  chooseOrigin: function() {
    var that = this;
    wx.chooseLocation({
      type: 'gcj02',
      // type:'wgs84',
      success(res) {
        const origin_name = res.name; //string
        const origin_address = res.address; //string
        const origin_latitude = res.latitude; //string
        const origin_longitude = res.longitude; // string
        console.log("name " + origin_name);
        console.log("address " + origin_address);
        console.log("latitude " + origin_latitude);
        console.log("longitude " + origin_longitude);
        that.setData({
          origin: origin_address
        })
      }
    })
  },

  chooseDestination: function() {
    var that = this;
    wx.chooseLocation({
      type: 'gcj02',
      // type:'wgs84',
      success(param) {
        const destination_name = param.name; //string
        const destination_address = param.address; //string
        const destination_latitude = param.latitude; //string
        const destination_longitude = param.longitude; // string
        console.log("name " + destination_name);
        console.log("address " + destination_address);
        console.log("latitude " + destination_latitude);
        console.log("longitude " + destination_longitude);
        that.setData({
          destination: destination_address
        })
      }
    })
  }

  // getLocationOnMap: function() {
  //   var that = this;
  //   wx.authorize({
  //     scope: 'scope.userLocation',
  //     complete: function(res) {
  //       console.log(res)
  //       wx.chooseLocation({
  //         success(str) {
  //           console.log(str)
  //           var key = 'V7DBZ-K7C22-SXXUJ-CDUE7-AM2LH-AEFCM';
  //           //发送请求通过经纬度反查地址信息
  //           var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + str.latitude + "," + str.longitude + "&key=" + key + "&get_poi=1";
  //           wx.request({
  //             url: getAddressUrl,
  //             // console.log('url:'+url),
  //             success: function(result) {
  //               var province = result.data.result.address_component.province;
  //               var city = result.data.result.address_component.city;
  //               var district = result.data.result.address_component.district;
  //               var address = result.data.result.formatted_addresses.recommend;
  //               console.log('check_it')
  //               console.log('province: ' + province)
  //               console.log('city: ' + city)
  //               console.log('district: ' + district)
  //               console.log('省市县:' + province + city + district)
  //               console.log('地址：' + address)
  //               console.log('name：' + name)
  //               console.log('latitude：' + latitude)
  //               console.log('longitude' + longitude)
  //               // 返回 name address latitude longitude 

  //               that.setData({
  //                 "input[1].val": [province, city, district],
  //                 "input[2].val": address
  //               })
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // },

  // openMap2: function() {
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success(res) {
  //       const latitude = res.latitude
  //       const longitude = res.longitude
  //       const accuracy = res.accuracy
  //       // console.log(latitude)
  //       // console.log(longitude) //correct but how to trans this to wxml 
  //       that.setData({
  //         accuracy: res.accuracy,
  //         latitude: res.latitude,
  //         longitude: res.longitude
  //       })
  //     },
  //     fail(res) {
  //       console.log("Hate it")
  //     }

  //   })
  // },

  // openMap1: function() {
  //   let that = this;
  //   wx.getLocation({
  //     //定位类型 wgs84, gcj02
  //     type: 'gcj02',
  //     success: function(res) {
  //       console.log(res)
  //       wx.openLocation({
  //         //当前经纬度
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //         //缩放级别默认28
  //         scale: 28,
  //         // //位置名
  //         // name: '测试地址',
  //         // //详细地址
  //         // address: '火星路24号',
  //         //成功打印信息
  //         success: function(res) {
  //           console.log(res)
  //         },
  //         //失败打印信息
  //         fail: function(err) {
  //           console.log(err)
  //         },
  //         //完成打印信息
  //         complete: function(info) {
  //           console.log(info)
  //         },
  //       })

  //     },
  //     fail: function(err) {
  //       console.log(err)
  //     },
  //     complete: function(info) {
  //       console.log(info)
  //     },
  //   })
  // }

})