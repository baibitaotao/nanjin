<template>
  <div v-if="showTags" class="tags">
    <div class="toggleClick">
      <i :class="icon" style="fontSize:30px;transform: translate(5px, 5px)" @click="toggleSideBar"></i>
    </div>
    <ul>
      <li
        v-for="(item,index) in tagsList"
        :key="index"
        class="tags-li"
        :class="{'active': isActive(item.path)}"
      >
        <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
        <span class="border-bottom" />
        <span class="tags-li-icon" @click="closeTags(index)" v-show="!(tagsList.length == 1)">
          <i class="el-icon-close" />
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini">
          <i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown" size="small">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters } from "vuex";

import bus from "./bus";
export default {
  components: {
    swiper,
    swiperSlide
  },

  data() {
    return {
      icon: "el-icon-s-unfold",
      tagsList: [],
      swiperOption: {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },

  computed: {
    showTags() {
      return this.tagsList.length > 0;
    },
    ...mapGetters(["routerData"])
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.hash) {
        return;
      }
      this.setTags(newValue);
    }
  },
  created() {
    this.setTags(this.$route);
    // 监听关闭当前页面的标签页
    bus.$on("close_current_tags", () => {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item = this.tagsList[i];
        if (item.path === this.$route.fullPath) {
          if (i < len - 1) {
            this.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
            this.$router.push(this.tagsList[i - 1].path);
          } else {
            this.$router.push("/");
          }
          this.tagsList.splice(i, 1);
          break;
        }
      }
    });
  },
  methods: {
    toggleSideBar() {
      if (this.icon === "el-icon-s-unfold") {
        this.icon = "el-icon-s-fold";
      } else if (this.icon === "el-icon-s-fold") {
        this.icon = "el-icon-s-unfold";
      }
      this.$store.dispatch("app/toggleSideBar");
    },
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push(
        `${this.routerData[0].path}/${this.routerData[0].children[0].path}`
      );
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      bus.$emit("tags", this.tagsList);
    },
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    }
  }
};
</script>

<style lang='scss' scope>
.toggleClick {
  position: absolute;
  left: 0;
}

.tags {
  position: relative;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  background: #fff;
  padding-right: 78px;
  // box-shadow: 0 5px 10px #ddd;
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 140px !important;
  }
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  padding-left: 40px;
}

.tags-li {
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  width: 140px;
  position: relative;
  box-sizing: border-box;
  padding-left: 14px;
  border-left: 1px solid #ccc;
  // & +.tags-li{
  //   border-left: 1px solid #ccc;
  // }
  &.tags-li:last-child {
    border-right: 1px solid #ccc;
  }
}

.tags-li:not(.active):hover {
  background: #f2f2f2;
}
.tags-li.active {
  background: #f2f2f2;
  .border-bottom {
    width: 100%;
    height: 3px;
    background-color: #D09551;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.tags-li-title {
  float: left;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}
.tags-li-title:hover {
  color: #D09551;
}
.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  // box-sizing: border-box;
  // padding-top: 1px;
  // text-align: center;
  // width: 110px;
  // height: 30px;
  // background: #fff;
  // box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
  // z-index: 10;
  .el-button {
    height: 40.5px;
    border-left: 1px solid rgb(205, 205, 205) !important;
    border: none;
    border-radius: 0;
  }
}
.tags-li-icon {
  position: absolute;
  right: 5px;
  top: 3px;
  i {
    font-size: 18px;
  }
}
</style>
