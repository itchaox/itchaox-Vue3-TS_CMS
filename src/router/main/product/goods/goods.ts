/*
 * @Desc: 商品中心-商品信息
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:14:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:14:32
 */

const goods = () => import('@/views/main/product/goods/goods.vue')

export default {
  path: '/main/product/goods',
  name: 'goods',
  component: goods,
  children: []
}
