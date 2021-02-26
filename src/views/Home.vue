<template>
  <div class="home">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-9">
          <div class="box box-flush">
            <div class="box-body">
              <ul class="nav nav-pills">
                <li class="nav-item" v-for="(item, index) in categories" :key="index">
                  <a class="nav-link" :class="{active: currentThreadsTab === item.name}" href="javascript:;" @click="currentThreadsTab = item.name">{{ item.name }}</a>
                </li>
              </ul>
            </div>
<!--            <threads-list :threads="threads[currentThreadsTab]" @page-changed="handlePageChanged"></threads-list>-->
          </div>
        </div>
        <!--      <div class="col-md-3">-->
        <!--        <guest-login-guide class="mb-2" />-->
        <!--        &lt;!&ndash; <quick-docs class="mb-2" /> &ndash;&gt;-->
        <!--        <hot-tags />-->
        <!--        <user-ranking class="mt-2" />-->
        <!--        <new-users class="mt-2" />-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory } from '../api/home'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      threads: {
        default: {},
        featured: {},
        zeroComment: {},
        recent: {}
      },
      categories: [],
      currentThreadsTab: ''
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      getCategory().then(res => {
        this.categories = res.data
        this.currentThreadsTab = res.data[0].name
      })
    }
  }
}
</script>
