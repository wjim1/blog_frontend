<template>
  <div class="home">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-9">
          <div class="box box-flush">
            <div class="box-body">
              <ul class="nav nav-pills">
                <li class="nav-item" v-for="item in categories" :key="item.id">
                  <a class="nav-link" :class="{active: currentIndexTab === item.id}" href="javascript:;" @click="currentIndexTab = item.id">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <article-list :articles="articles" @page-changed="handlePageChanged"></article-list>
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
import { getCategory, getArticles } from '@/api/home'
import ArticleList from '../views/blog/article-list'
export default {
  name: 'Home',
  components: {
    ArticleList
  },
  data () {
    return {
      articles: {
        data: [],
        meta: {
          total: 1,
          per_page: 1,
          from: 1,
          to: 1,
          last_page: 1,
          current_page: 1
        }
      },
      categories: [],
      currentIndexTab: ''
    }
  },
  created () {
    this.getCategories()
  },
  watch: {
    currentIndexTab () {
      // 监听分类索引, 加载数据
      this.loadArticles(1)
    }
  },
  methods: {
    getCategories () {
      getCategory().then(res => {
        this.categories = res.data
        this.currentIndexTab = res.data[0].id
      })
    },
    handlePageChanged (page) {
      this.loadArticles(page)
    },
    loadArticles (page = 1) {
      const query = {
        page: page,
        category: this.currentIndexTab
      }
      getArticles(query).then(res => {
        this.articles = res
      })
    }
  }
}
</script>
