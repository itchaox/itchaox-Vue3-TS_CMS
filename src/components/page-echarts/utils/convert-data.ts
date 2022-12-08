/*
 * @desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-08 14:29:40
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 14:30:30
 */
import { coordinateData } from './coordinate-data'

export function convertData(data: any) {
  const res: any = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
