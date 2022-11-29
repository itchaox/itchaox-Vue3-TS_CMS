/*
 * @Desc: 用户管理-对话框 config 处理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-29 15:16:52
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 15:26:21
 */

import { computed } from 'vue'
import useMainStore from '@/store/main/main'

function useUserDialogConfig(dialogConfig: any) {
  // 完善 dialogConfig 下拉菜单数据
  const dialogConfigWhole = computed(() => {
    const { roleList, departmentList } = useMainStore()

    // 重构属性名
    const _roleList = roleList.map((item) => ({
      label: item.name,
      value: item.id
    }))

    const _departmentList = departmentList.map((item) => ({
      label: item.name,
      value: item.id
    }))

    dialogConfig.formItems.forEach((item: any) => {
      // 角色下拉
      if (item.prop === 'roleId') {
        item.options.push(..._roleList)
      }

      // 部门下拉
      if (item.prop === 'departmentId') {
        item.options.push(..._departmentList)
      }
    })
    return dialogConfig
  })

  return dialogConfigWhole
}

export default useUserDialogConfig
