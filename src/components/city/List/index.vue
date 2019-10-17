<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-lsit">
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-lsit">
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
          <div class="item border-bottom">ala</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted(){
   this.scroll=new Bscroll(this.$refs.wrapper)
  },
};
</script>
<style scoped lang="stylus">
.list{
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
}
.border-topbottom {
  &::before {
    border-color: #777;
  }

  &::after {
    border-color: #777;
  }

  .border-bottom {
    &::before {
      border-color: #777;
    }

    &::after {
      border-color: #777;
    }
  }
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem;
      text-align: center;
      border: 0.02rem solid #ccc;
      padding: 0.1rem 0;
      border-radius: 0.06rem;
    }
  }
}

.item-lsit {
  .item {
    line-height: 0.76rem;
    color: #666;
    padding-left: 0.2rem;
  }
}
</style>