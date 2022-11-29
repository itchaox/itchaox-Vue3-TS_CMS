/*
 * @Desc: 对话框 hook
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-29 14:55:11
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 15:10:35
 */

import { ref } from 'vue'

function usePageDialog(component: any) {
  const dialogRef = ref<InstanceType<typeof component>>()

  /**
   * @desc: 新增
   * @author: wc
   */
  function addClick() {
    dialogRef.value?.setDialog()
  }

  /**
   * @desc: 编辑
   * @author: wc
   */
  function editClick(itemData: any) {
    dialogRef.value?.setDialog(false, itemData)
  }

  return {
    dialogRef,
    addClick,
    editClick
  }
}

export default usePageDialog
