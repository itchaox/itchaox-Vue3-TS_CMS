/*
 * @Desc: 对话框_配置项
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-29 10:01:45
 * @LastEditors: wangchao
 * @LastEditTime: 2022-11-29 23:22:21
 */

const dialogConfig = {
  pageName: 'users',
  header: {
    addTitle: '新建用户',
    editTitle: '编辑用户'
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input-password',
      prop: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      type: 'select',
      prop: 'roleId',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    },
    {
      type: 'select',
      prop: 'departmentId',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ]
}

export default dialogConfig
