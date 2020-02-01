export default {
  getIsReady() {//由父窗口调用判断是否初始化
    return true
  },
  loadFinish() {//由集成编辑器调用判断是否加载完成,用于控制进度条
    return true
  },
  loadFinishAfter() {//由集成编辑器调用，在进度条关闭后调用，可就是说在loadFinish方法调用返回TRUE后调用
    return
  }
}
