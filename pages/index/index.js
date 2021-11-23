var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js
Page({
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'b6973a26aa7e357cbddd19fb59979834'});
    myAmapFun.getPoiAround({
      success: function(data){
        //成功回调
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  },
})