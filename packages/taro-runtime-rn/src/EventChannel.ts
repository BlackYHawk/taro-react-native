import { DeviceEventEmitter } from 'react-native'

const events: any = {}
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
    events[eventName].push(DeviceEventEmitter.addListener(eventName, callback))
  }

  off (eventName, callback) {
    this.checkExistence(eventName)
    if (callback && typeof callback === 'function') {
      events[eventName] = events[eventName].filter(emitter => {
        if (emitter.listener === callback) {
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
    DeviceEventEmitter.emit(eventName, ...args)
  }
}
// 挂载至原型，从而this.getOpenerEventChannel()方式使用,对标微信小程序相关方法
// Object.assign(React.Component.prototype, {
//   getOpenerEventChannel
// })
export default new EventChannel()
