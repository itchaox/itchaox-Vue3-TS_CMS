/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 14:18:36
 * @LastEditors: wc
 * @LastEditTime: 2022-11-14 14:50:32
 */
// 缓存类型 localStorage/sessionStorage
enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  // 设置缓存
  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  // 获取缓存
  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 移除缓存
  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
