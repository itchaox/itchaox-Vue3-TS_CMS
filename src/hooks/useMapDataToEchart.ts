/*
 * @desc: 重构用于 Echarts 数据
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-08 09:58:48
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 10:47:04
 */

import { computed } from 'vue'

/**
 * @desc: 重构用于 Echarts 数据
 * @param rawData 原始数据
 * @param fieldName 字段-名字
 * @param fieldValue 字段-数据
 * @author: wc
 */
function useMapDataToEchart(
  rawData: any,
  fieldName: string,
  fieldValue: string
) {
  let replaceData: any = [] // 处理后数据

  // 重构数据
  replaceData = computed(() => {
    return rawData.value.map((item) => ({
      name: item[fieldName],
      value: item[fieldValue]
    }))
  })

  return replaceData
}

export default useMapDataToEchart
