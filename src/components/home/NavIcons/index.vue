<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <a :href="item.link">
              <img :src="item.imgUrl" :alt="item.desc" class="img-content" />
            </a>
          </div>
          <p class="icon-desc" v-text="item.desc"></p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { getData } from "@/api/home";
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      iconsList: []
    };
  },
  created() {
    this._geticonsList();
  },
  methods: {
    _geticonsList() {
      getData().then(response => {
        const resp = response.data;
        if (resp.ret) {
          this.iconsList = resp.data.iconList;
        }
      });
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 55%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>