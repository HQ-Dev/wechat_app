// pages/post-detail/post-detail.js

import {postList} from "../../data/data"
// 小程序所有 js 文件中都能获取到
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null,
    collected:false,
    _postCollected:{},
    isPlaying:false,
  },


  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: async function (options) {
     // 测试 App.js 中的全局变量打印
    console.log(app.test)

    // 获取文章 pid ，中转保存到本 js 的定义变量中
    const postData = postList[options.pid]
    this.data._pid = options.pid
    this.setData({postData})

    // 获取文章收藏状态
    const postsCollected = wx.getStorageSync('posts_collected');
    this.data._postCollected = postsCollected;
    const collected = postsCollected[this.data._pid];

    if (collected === undefined) {
      collected = false
    }

    console.log(collected)
    this.setData({
      collected
    })
    // 同步设置小程序缓存；异步读取；然后打印小程序缓存
    // wx.setStorageSync('flag', 2)
    // const flag = await wx.getStorage({
    //   key: 'flag'
    // })
    // console.log(flag)
  },

  // 文章收藏事件
  onCollection(event) {
    const status = this.data._postCollected;
    status[this.data._pid]  = !this.data.collected
    wx.setStorageSync('posts_collected', status)
    this.setData({
      collected:!this.data.collected
    })

    wx.showToast({
      title: (this.data.collected ? "收藏成功":"取消收藏")
    })
  },

  async sharePost(event) {
    const result = await wx.showActionSheet({
      itemList: ["分享到微博","分享到朋友圈","分享到微信","分享到支付宝"],
      // success(res) {
      //   console.log(res)
      // }
    })
    console.log(result)
  },

  musicStart(event) {
    const musicManger = wx.getBackgroundAudioManager();
    const music = postList[this.data._pid].music;
    musicManger.src = music.url;
    musicManger.title = music.title;
    musicManger.coverImgUrl = music.coverImg;
    this.setData({
      isPlaying:true
    })
  },

  musicStop(event) {
    const musicManager = wx.getBackgroundAudioManager();
    musicManager.pause();
    this.setData({
      isPlaying:false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})