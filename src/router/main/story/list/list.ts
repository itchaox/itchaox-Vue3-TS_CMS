/*
 * @Desc: 随便聊聊-故事列表
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:16:11
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:17:16
 */

const list = () => import('@/views/main/story/list/list.vue')

export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  children: []
}
