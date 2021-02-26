<template>
  <div class="home">
    <div class="row mt-3">
      <div class="col-md-9">
        <div class="box box-flush">
          <div class="box-body">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" :class="{active: currentThreadsTab === 'default'}" href="javascript:;" @click="currentThreadsTab = 'default'">活跃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{active: currentThreadsTab === 'featured'}" href="javascript:;" @click="currentThreadsTab = 'featured'">精选</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{active: currentThreadsTab === 'zeroComment'}" href="javascript:;" @click="currentThreadsTab = 'zeroComment'">零回复</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{active: currentThreadsTab === 'recent'}" href="javascript:;" @click="currentThreadsTab = 'recent'">最新发布</a>
              </li>
            </ul>
          </div>
          <threads-list :threads="threads[currentThreadsTab]" @page-changed="handlePageChanged"></threads-list>
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
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
