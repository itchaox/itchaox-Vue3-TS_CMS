/*
 * @Desc: 查询表单配置项
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-28 11:14:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-28 11:48:18
 */

const searchFormConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名字',
      placeholder: '请输入部门名字'
    },
    {
      type: 'input',
      prop: ' leader',
      label: '部门领导',
      placeholder: '请输入领导名字'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchFormConfig
