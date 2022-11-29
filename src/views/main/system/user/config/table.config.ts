/*
 * @Desc: 表格_配置项
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-28 15:09:05
 * @LastEditors: wangchao
 * @LastEditTime: 2022-11-29 23:22:35
 */

const tableConfig = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
  },
  tableItems: [
    {
      type: 'selection',
      width: '60'
    },
    {
      type: 'index',
      label: '序号',
      width: '80'
    },

    {
      prop: 'name',
      label: '名字',
      width: '130'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      width: '130'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      width: '130'
    },
    {
      type: 'custom',
      prop: 'enable',
      label: '状态',
      width: '100',
      slotName: 'enableSlot'
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间'
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间'
    },
    {
      type: 'operate',
      label: '操作',
      width: '180'
    }
  ]
}

export default tableConfig
