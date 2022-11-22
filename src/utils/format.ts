/*
 * @Desc: 格式化工具函数
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-22 14:20:10
 * @LastEditors: wc
 * @LastEditTime: 2022-11-22 14:36:56
 */

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

/**
 * @desc: 格式化 UTC 时间
 * @param { string } UTCstring 格式时间
 * @param { string } format 格式类型
 * @author: wc
 */
export function formatUTC(UTCstring: string, format = 'YYYY-MM-DD hh:mm:ss') {
  const time = dayjs.utc(UTCstring).utcOffset(8).format(format)
  return time
}
