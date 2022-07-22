<template>
  <div id="app">
    <!-- ★Boardコンポーネント呼び出し -->
    <Board />
  </div>
</template>

<script>
// ★インポート文を追加
import Board from './components/Board.vue'

export default {
  // 上と紐づく
  name: 'app',
  components: {
    // ★コンポーネントに登録する
    Board
  }
}
</script>
