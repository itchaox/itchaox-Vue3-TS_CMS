/*
 * @Desc: 表格 hook
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-29 14:55:00
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 15:02:18
 */

import { ref } from 'vue'

function usePageTable(component: any) {
  const tableRef = ref<InstanceType<typeof component>>()

  /**
   * @desc: 搜索按钮
   * @param { any } formData 表单数据
   * @author: wc
   */
  function searchClick(formData: any) {
    tableRef.value?.getPageList(formData)
  }

  /**
   * @desc: 重置按钮
   * @author: wc
   */
  function resetClick() {
    tableRef.value?.getPageList()
  }

  return {
    tableRef,
    searchClick,
    resetClick
  }
}

export default usePageTable
