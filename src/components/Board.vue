<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <!-- ★ここから追記 -->
      <div class="list-index">
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :listIndex="index"
        />
        <list-add />
      </div>
      <!-- ★ここまで追記 -->
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd'
// ★ここから追記
import List from './List'
import { mapState } from 'vuex'
// ★ここまで追記

export default {
  components: {
    ListAdd,
    // ★追記
    List,
  },
  // ★追記
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>
