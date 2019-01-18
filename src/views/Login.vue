<template>
    <div class="login">
        <div class="header">
            <div class="wrapper">
                <p class="imgs"><img src="../assets/images/login/logo01.png" alt=""></p>
            </div>
        </div>
        <div class="section clearfix">
            <div class="divleft">
                <p class="imgs"><img src="../assets/images/login/title01.png" alt=""></p>
            </div>
            <div class="divright">
                <div class="form-groups">
                    <p class="title">登录</p>
                    <div class="form-group">
                        <label for="" class=""><i class="iconfont icon-user"></i></label>
                        <input type="text" name="user" id="user" v-bind:class="[classA, classB]" value="" v-model="user"
                               placeholder="邮箱/用户名">
                        <span class="clear" v-if="show01" @click="clearuser"><i class="iconfont icon-guanbi"></i></span>
                    </div>
                    <div class="form-group">
                        <label for=""><i class="iconfont icon-password"></i></label>
                        <input type="password" name="password" id="psw" :class="[classA, classb]" value=""
                               v-model="password" placeholder="密码">
                        <span class="clear" v-if="show02" @click="clearpsw"><i class="iconfont icon-guanbi"></i></span>
                    </div>
                    <div class="info clearfix">
                        <span class="auto" v-on:click="checkEvent"><i :class="[classC, classD,classE]"></i>记住密码</span>
                        <span class="forget"><a href="javascript:;">忘记密码</a></span>
                    </div>
                    <p class="prompt" v-if="seen"><i class="iconfont icon-icon13"></i>{{prompt}}</p>
                    <div class="btns">
                        <input type="button" :disabled="isDisabled" :class="{disabled:isDisabled}" value="登录"
                               @click="login">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import {requestLogin} from '../api/api';
    // import Home from ''

    export default {

        data() {
            return {
                user: "13761554507",
                password: "123456",
                classA: 'form-control',
                classB: '',
                classb: '',
                classC: 'iconfont',
                classD: 'icon-fuxuankuang',
                classE: true,
                checked: true,
                seen: false,
                prompt: '请输入正确手机号',
                show01: false,
                show02: false
            }
        },
        computed: {
            
            isDisabled() {
                return !(this.user != "" && this.password != "");
            }
        },
        methods: {
            //  记住密码
            checkEvent: function () {
                if (this.classE) {
                    this.classD = "icon-fuxuankuang1";
                    this.classE = false;
                } else {
                    this.classD = "icon-fuxuankuang";
                    this.classE = true;
                }
            },
            //   登录按钮
            login: function (event) {
                // console.log(this.$store.state.routerList);
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

        // this.$router不是响应式的，所以手动将路由元注入路由对象

        // this.$router.options.routes.push(menu)
                
            });

console.log(menuList);

                var _this = this;
                var nameReg = /^1(3|4|5|7|8)\d{9}$/;
                var pswReg = /^\d{6,}$/;
                var _user = _this.user;
                if (nameReg.test(_this.user) && _this.user != "13761554507" && this.password.match(pswReg)) {
                    sessionStorage.setItem('user', true);
                    this.$router.push({
                        path: '/imp/index',
                    })
                } else if (_this.user == "13761554507" && this.password.match(pswReg)) {
                    sessionStorage.setItem('user', true);
                    this.$router.push({
                        path: '/imp/index',
                    })
                } else if (!nameReg.test(_this.user)) {
                    this.seen = true;
                    this.prompt = "请输入正确手机号"
                    this.classB = "error";
                    this.show01 = true;
                    return
                } else if (!this.password.match(pswReg)) {
                    this.seen = true;
                    this.prompt = "请输入正确密码"
                    this.classb = "error";
                    this.show02 = true
                    return
                }
            },
//  清空value值
            clearpsw: function (event) {
                this.password = ""
            },
            clearuser: function () {
                this.user = ""
            }
        },
    }
</script>

<style scoped>
	@import '../assets/css/login_style.css';
</style>
