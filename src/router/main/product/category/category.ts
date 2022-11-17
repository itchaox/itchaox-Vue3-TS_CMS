/*
 * @Desc: 商品中心-商品类别
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:12:40
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:13:17
 */

const category = () => import('@/views/main/product/category/category.vue')

export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  children: []
}
