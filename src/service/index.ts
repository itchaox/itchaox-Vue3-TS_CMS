import { TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求拦截
    requestSuccessFn: (config) => {
      const token = localCache.getCache(TOKEN) // 获取 token
      // 类型缩小
      if (config.headers && token) {
        //! 请求头携带 token
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default hyRequest
