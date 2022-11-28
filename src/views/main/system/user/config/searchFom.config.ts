/*
 * @Desc: 查询表单配置项
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-28 11:14:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-28 13:14:05
 */

const searchFormConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      prop: ' realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      prop: ' cellphone',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      type: 'select',
      prop: ' enable',
      label: '状态',
      placeholder: '请选择状态'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchFormConfig
