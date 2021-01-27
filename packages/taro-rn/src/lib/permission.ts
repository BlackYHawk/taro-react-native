import { Alert ,Linking, Platform, AppState } from 'react-native';
import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';

const scopeMap = {
  'scope.userLocation': Permissions.LOCATION,
  'scope.record': Permissions.AUDIO_RECORDING,
  'scope.writePhotosAlbum': (Permissions as any).MEDIA_LIBRARY,
  'scope.camera': Permissions.CAMERA,
  'scope.NOTIFICATIONS': Permissions.NOTIFICATIONS,
  'scope.USER_FACING_NOTIFICATIONS': Permissions.USER_FACING_NOTIFICATIONS,
  'scope.CONTACTS': Permissions.CONTACTS,
  'scope.CALENDAR': Permissions.CALENDAR,
  // 'scope.REMINDERS': Permissions.REMINDERS, // ios only
  'scope.SYSTEM_BRIGHTNESS': Permissions.SYSTEM_BRIGHTNESS
}

const getAuthSetting = async () => {
  const scopeArr = Object.keys(scopeMap).map(key => scopeMap[key])
  let auths = {}
  const { permissions } = await Permissions.getAsync(...scopeArr)
  Object.keys(permissions).forEach(key => {
    auths[key] = permissions[key].status === 'granted'
  })
  return auths
}

const handleAppStateChange = async (nextAppState, resolve, reject, opts) => {
  const { success, fail, complete } = opts
  const res: any = {}

  if (
    AppState.currentState.match(/inactive|background/) &&
    nextAppState === "active"
  ) {
    console.log("App has come to the foreground!");
    try {
      res.authSetting = await getAuthSetting()
      res.errMsg = 'openSetting:ok'
      success && success(res)
      complete && complete(res)
  
      AppState.removeEventListener("change", handleAppStateChange as any);
      resolve(res)
    } catch (error) {
      res.errMsg = 'openSetting:fail'
      fail && fail(res)
      complete && complete(res)
  
      reject(error)
    }
  }
  AppState.currentState = nextAppState;
};

export function authorize(opts: Taro.authorize.Option): Promise<Taro.General.CallbackResult> {
  const { scope, success, fail, complete } = opts
  const res: any = {}

  if (Platform.OS === 'ios') {

  }

  return new Promise(async (resolve, reject) => {
    try {
      const { status } = await Permissions.askAsync(scopeMap[scope])
      if (status === 'granted') {
        res.errMsg = 'authorize:ok'
        success && success(res)
        complete && complete(res)

        resolve(res)
      } else {
        res.errMsg = 'authorize:not granted'
        fail && fail(res)
        complete && complete(res)

        reject(res)
      }
    } catch (error) {
      res.errMsg = 'authorize:fail'
      fail && fail(res)
      complete && complete(res)

      reject(error)
    }
  })
}

export function getSetting(opts: Taro.getSetting.Option): Promise<Taro.getSetting.SuccessCallbackResult> {
  const { success, fail, complete } = opts
  const res: any = {}

  if (Platform.OS === 'ios') {

  }

  return new Promise(async (resolve, reject) => {
    try {
      res.authSetting = await getAuthSetting()
      res.errMsg = 'getSetting:ok'
      success && success(res)
      complete && complete(res)

      resolve(res)
    } catch (error) {
      res.errMsg = 'getSetting:fail'
      fail && fail(res)
      complete && complete(res)

      reject(error)
    }
  })
}

export function openSetting(opts: Taro.openSetting.Option): Promise<Taro.openSetting.SuccessCallbackResult> {
  if (Platform.OS === 'ios') {

  }

  return new Promise(async (resolve, reject) => {
    AppState.addEventListener("change", (next) => handleAppStateChange(next, resolve, reject, opts))
    Linking.openSettings()
  })
}

