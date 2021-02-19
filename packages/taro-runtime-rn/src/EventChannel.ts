import { DeviceEventEmitter } from 'react-native'

let currentPagePath: string
const events: any = {}
const evtInfo: any = {
  args: null,
  eventName: '',
  pagePath: ''
}
class EventChannel {
  // constructor() {
  //   this.events = {};
  // }
  checkExistence (eventName) {
    if (!events[eventName]) {
      events[eventName] = []
    }
  }

  once (eventName, callback) {
    this.checkExistence(eventName)
    const cbWithRemove = (...args) => {
      callback(...args)
      this.off(eventName, cbWithRemove)
    }
    events[eventName].push(DeviceEventEmitter.addListener(eventName, cbWithRemove))
  }

  on (eventName, callback) {
    this.checkExistence(eventName)
    const hasExist = events[eventName].some(emitter => emitter.listener.name === callback.name)
    if (!hasExist) {
      events[eventName].push(DeviceEventEmitter.addListener(eventName, callback))
      if (evtInfo.eventName === eventName && evtInfo.pagePath !== currentPagePath) {
        evtInfo.pagePath = currentPagePath
        callback(...evtInfo.args)
      }
    }
  }

  off (eventName, callback) {
    this.checkExistence(eventName)
    if (callback && typeof callback === 'function') {
      events[eventName] = events[eventName].filter(emitter => {
        if (emitter.listener.name === callback.name) {
          emitter.remove()
          return false
        }
        return true
      })
    } else {
      events[eventName].forEach(emitter => emitter.remove())
      events[eventName] = []
    }
  }

  emit (eventName, ...args) {
    this.checkExistence(eventName)
    evtInfo.args = args
    evtInfo.eventName = eventName
    evtInfo.pagePath = currentPagePath
    DeviceEventEmitter.emit(eventName, ...args)
  }
}
// 挂载至原型，从而this.getOpenerEventChannel()方式使用,对标微信小程序相关方法
// Object.assign(React.Component.prototype, {
//   getOpenerEventChannel
// })
const eventChannel = new EventChannel()

export const getEventChannel = (path) => {
  currentPagePath = path
  return eventChannel
}
