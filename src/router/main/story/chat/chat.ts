/*
 * @Desc: 随便聊聊-你的故事
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:15:07
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:15:34
 */

const chat = () => import('@/views/main/story/chat/chat.vue')

export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  children: []
}
