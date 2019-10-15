<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getData } from "@/api/home";
export default {
  data() {
    return {
      recommendList: []
    };
  },
  created() {
    this._getRecomend();
  },
  methods: {
    _getRecomend() {
      getData().then(response => {
        const resp = response.data;
        if (resp.ret) {
          this.recommendList = resp.data.recommendList;
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  height: 0.8rem;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
  }

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }

  .item-button {
    line-height: 0.44rem;
    background: #ff9300;
    margin-top: 0.16rem;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    color: #fff;
  }
}
</style>