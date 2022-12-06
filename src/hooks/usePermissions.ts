/*
 * @Desc: 按钮鉴权
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 10:38:18
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 11:02:36
 */

import useLoginStore from '@/store/login/login'

/**
 * @desc: 按钮鉴权
 * @param { string } permissionsId 权限 id
 * @return { boolean } 是否有权限
 * @author: wc
 */
function usePermissions(permissionsId: string): boolean {
  const { permissionList } = useLoginStore()

  // 是否有权限
  const isPermission = permissionList.find((item) =>
    item.includes(permissionsId)
  )

  //* isPermission 为字符串
  //* !!isPermission , 转换为布尔值

  return !!isPermission
}

export default usePermissions
