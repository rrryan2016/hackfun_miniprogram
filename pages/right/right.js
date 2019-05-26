Page({
  data: {
    imgUrls: [
      'http://qcloud.dpfile.com/pc/SOqn8HKhN5NEHTE_DLw3mB1d6rMYoStwknNjhT2jNeIru7nMSCtlSj7iGU77jW6ujoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
      'http://qcloud.dpfile.com/pc/wpcSSbVy32qEOYGLy7mxCJTeJTD9dOdTWhacs9nxt0SfCk7DH6z8B4ncORz8P0FjjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
      'http://qcloud.dpfile.com/pc/YSOa6Vk134_R_IpojXp7-lu4FkGV7mUZFuiO29NAhnuOIamtgn9yOgxm7XNDABlujoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
      'http://qcloud.dpfile.com/pc/TED4_AXvS2xqC_9tSmYJPiGNHKeiSoMvnqwICA4dIpwXKNwzfgiuxdswZL2PI7n0joJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
      'http://qcloud.dpfile.com/pc/Rmt8Xv9CHkwmPMktxwFSmo5cfN4v1E02ySEXZuTwRGSBdcRp7VNPpghJ6raVQkb_joJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
      'http://qcloud.dpfile.com/pc/PtMDu8mXwP8_nR8RwOWFIChYFaRmWM5_ZRm6EubM5XYcFfRZ5wabl6jnzqlB0dGPHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg',
      'http://qcloud.dpfile.com/pc/Z4r33gXeCNq5yMOJG5IYhkSmjOHOI8cs-gBgLXzG1ukeoI7WC99igmo5X3vtdH4LHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg',
      'http://qcloud.dpfile.com/pc/w8dhGAp5-8Lmn-Vi84vE4ECandKadBRBF8ZEraNbs4tFCoD-i2665Hq9Mu1yqTjpHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg',
      'http://qcloud.dpfile.com/pc/Y9Kl_j6nesfRpUba2OVc8TciLkG7yjF3SXyzuLq3ejGx6CJbDMzuLvbsbXyIeVdnHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg',
      'http://qcloud.dpfile.com/pc/_fBRKRm2UlEMJvbwhxFB5v6KtsdhqVCjHCCQIAqa32mBdcRp7VNPpghJ6raVQkb_joJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg'
    ],
    depart_date: "2019-5-25",
    depart_time: "12:01",
    return_date: "2019-5-26",
    return_time: "14:01",
    origin: '',
    destination: '',
    // c_type:'',
    // j_type:'',
    current_time: (new Date()).toString,
    restaurants: ["中餐厅", "外国餐厅", "小吃快餐店", "蛋糕甜品店", "咖啡厅", "茶座", "酒吧"],
    restaurantIndex: 0,
    hotels: ["星级酒店", "快捷酒店", "公寓式酒店"],
    hotelIndex: 0,
    recommendedHotel:[],
    recommendedRestaurant:[]

  },
  bindHotelChange: function(e) {
    console.log('picker hotel 发生选择改变，携带值为', e.detail.value);

    this.setData({
      hotelIndex: e.detail.value
    })
  },
  bindRestaurantChange: function(e) {
    console.log('picker restaurant 发生选择改变，携带值为', e.detail.value);

    this.setData({
      restaurantIndex: e.detail.value
    })
  },

  updateData:function(e){
    var that = this;

    var destination_address = that.data.destination;
    var restaurants = that.data.restaurants;
    var hotels = that.data.hotels;
    var restaurantIndex = that.data.restaurantIndex;
    var hotelIndex = that.data.hotelIndex;

    // var destination_address = this.data.destination;
    // var restaurants = this.data.restaurants;
    // var hotels = this.data.hotels;
    // var restaurantIndex = this.data.restaurantIndex;
    // var hotelIndex = this.data.hotelIndex;

    console.log("check1: " + restaurants[restaurantIndex])
    console.log("check2: " + hotels[hotelIndex])
    console.log("check3: " + destination_address)

    

    wx.request({
      url: 'https://www.javasocket.top/get_hotel',
      data: {
        hotel_type: hotels[hotelIndex], // hotel
        address: destination_address
      },
      success: function (res) {
        console.log(res)
        that.setData({
          recommendedHotel: res.data
        })
      },
    })

    wx.request({
      url:'https://www.javasocket.top/get_restuarant',
      data:{
        restuarant_type: restaurants[restaurantIndex], //restaurant
        address:destination_address
      },
      success:function(res){
        console.log(res)
        that.setData({
          recommendedRestaurant:res.data
        })
      },
      })



      wx.showToast({
        title: '定制成功',
        icon: '',
        image: '',
        duration: 2000,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })


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
})