<template>
  <form class="search-form form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" v-model="q" placeholder="搜索讨论" aria-label="Search">
    <div class="list-group" v-if="threads.length > 0">
      <div class="list-group-item list-group-item-action cursor-pointer" v-for="item of threads" :key="item.id" @click="$router.push({name: 'threads.show', params:{id: item.id}})">
        <div class="d-flex align-items-center">
          <a href="#" class="mr-2"><img :src="item.user.avatar" alt="" class="avatar-30"></a>
          <div class="highlights text-gray-50 text-truncate" v-html="item['highlights'] && item['highlights']['title'] ? item.highlights.title[0] : item.title"></div>
        </div>
        <p class="highlights mt-1 text-gray-60" v-if="item.highlights['content']" v-html="highlightContent(item)"></p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'nav-search',
  data () {
    return {
      q: '',
      threads: []
    }
  }
}
</script>

<style scoped lang="scss">
  .search-form {
    position: relative;
    .list-group {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
      z-index: 99;
    }
  }
</style>
