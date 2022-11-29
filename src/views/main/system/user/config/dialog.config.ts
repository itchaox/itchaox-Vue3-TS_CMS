/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-29 10:01:45
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 10:40:12
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
      options: [
        {
          label: '卡莎',
          value: 60
        },
        {
          label: '阿卡丽',
          value: 18
        }
      ]
    },
    {
      type: 'select',
      prop: 'departmentId',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [
        {
          label: '艾欧尼亚',
          value: 18
        },
        {
          label: '黑色玫瑰',
          value: 20
        }
      ]
    }
  ]
}

export default dialogConfig
