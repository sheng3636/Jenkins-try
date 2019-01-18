<template>
  <el-container>
    <el-aside :class="{shouHide: isCollapse}">
      <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        :collapse="isCollapse">
        <template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <!-- 有子菜单 -->
            <el-submenu :index="index+''" v-if="!item.sigleMenu">
              <template slot="title"><i :class="item.iconCls"></i> <span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden"
                @click="()=>$router.push(child.path)">{{child.name}}</el-menu-item>
            </el-submenu>
            <!-- 主菜单 -->
            <el-menu-item v-if="item.sigleMenu&&item.children.length>0" :index="item.children[0].path" @click="()=>$router.push(item.children[0].path)">
              <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
            </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
					<el-col :span="1"><i class="icon el-icon-menu" @click="collapse"></i></el-col>
          <el-col :span="2" :offset="21">
            <el-dropdown class="userinfo">
              <span class="el-dropdown-link">
                个人中心 <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮助中心</el-dropdown-item>
								<el-dropdown-item>修改密码</el-dropdown-item>
								<el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="routes">
          <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          menuList: []
        }
      }
    },
    computed: {},
    created: function () {
      // console.log(this.$router.options.routes)
    let routes = this.$store.state.routerList;

            let menuList = [];
            let subMenu = [];
        
            routes.map((item,index)=> {

                const subMenu1 = item.children.map( (child) => {
                    return {
                        path: child.path,
                        name: child.name,
                        component: resolve => require([`@/${child.component}.vue`], resolve)
                    }
                })
                // console.log(subMenu1)

                let menu = {
                    path: '/',
                    name: item.name,
                    component: resolve => require(['@/views/Home'], resolve),
                    iconCls: 'iconfont icon-index',
                    sigleMenu: true,//只有一个节点
                    children: subMenu1
                };
                menuList.push(menu);
                // this.$router.addRoutes(menu)
                
            });
    },
    methods: {
  	//退出登录
			logout() {
				let _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('login');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
      //折叠导航栏
      collapse: function () {
        this.isCollapse = !this.isCollapse;
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
      }
    }
  }

</script>

<style scoped>
	.el-aside {
		width: 200px !important;
		background-color: #545c64;
	}
	.el-aside.shouHide {
		width: 64px !important;
	}
	.userinfo {
		cursor: pointer;
		font-size: 15px;
    padding: 5px 10px;
  }
  .userinfo .el-dropdown-link:hover {
        color: #fff;
    background-color: #409EFC;
    padding: 5px 10px;
    border-radius: 3px;
  }
	.routes {
		height: 32px;
		/* padding-top: 10px; */
	}
  .el-container {
    height: 100%;
  }
  ul.el-menu-vertical-demo.el-menu {
    border-right: none;
  }

  .el-footer,
  .el-header {
		line-height: 60px;
    background-color: #fff;
  }
  .icon {
    display: inline-block;
    width: 40px;
    line-height: 40px;
    text-align: center;
    /* color: #fff; */
    font-size: 24px;
    cursor: pointer;
  }

</style>
