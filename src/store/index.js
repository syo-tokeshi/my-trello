import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')　//ローカルストレージへ、値をセット


const store = new Vuex.Store({
　state: {
   　// もしデータがなければ作成
　  lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  // state(store)へ値を送信
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    // ★ここに追記
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    // ★ここに追記
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
  },
  
  // データを変更したければここで
  getters: {
  }
})

// ここでデータが実際に保存される
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
// ★ここまで追記
