import { getRouteEventChannel } from '@tarojs/router-rn'
import { Events } from './emmiter'

interface ExeListItem {
  eventName: string,
  data: object
}

interface RouteEvt extends Events {
  emit?: (events: any, params: any) => void,
  addEvents?: (events: any) => void
}

interface PageEvt extends Events {
  exeList: any[],
  emit: object
}

class PageEvts extends Events {
  exeList = []

  on (eventName, callback) {
    super.on(eventName, callback, this)
    this.exeList.forEach((item: ExeListItem) => {
      if (item.eventName === eventName) {
        super.trigger(item.eventName, item.data)
      }
    })
    this.exeList = []
    return this
  }

  emit (events, params) {
    routeChannel.trigger(events, params.data)
  }
}

const routeChannel: RouteEvt = new Events()
const pageChannel: PageEvt = new PageEvts()

// pageChannel.exeList = []
routeChannel.emit = (events, params) => {
  pageChannel.exeList.push({
    eventName: events,
    data: params.data
  })
}
routeChannel.addEvents = (events) => {
  if (!events || typeof events !== 'object') return
  Object.keys(events).forEach(key => {
    routeChannel.on(key, events[key], routeChannel)
  })
}
getRouteEventChannel(routeChannel)

export default {
  routeChannel,
  pageChannel
}
