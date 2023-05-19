<template>
	<div class="main-containers">
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"0 20px","margin":"0 auto","alignItems":"center","display":"flex","right":"0","justifyContent":"flex-end","overflow":"hidden","top":"0","left":"0","background":"#0087a7","width":"100%","lineHeight":"64px","position":"fixed","height":"44px","zIndex":"1002"}'>
			<img v-if='false' :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"block","height":"44px"}' src='http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg'>
			<div v-if="true" :style='{"margin":"0 20%","color":"#fff","top":"0","textAlign":"center","background":"none","display":"inline-block","width":"60%","fontSize":"22px","lineHeight":"44px","position":"absolute"}'>基于Django框架的小时间鲜花商城系统</div>
			<div>
				<div v-if="false" :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}'>0753-1234567</div>
				<div v-if="Token" :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}'>{{username}}</div>
				<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0px solid #00adb5","padding":"0 10px","boxShadow":"0px 0px 0px #ccc","margin":"10px 0 12px","color":"#0087a7","borderRadius":"2px","background":"#fff","display":"inline-block","fontSize":"14px","lineHeight":"30px","minWidth":"60px","height":"30px"}'>登录/注册</el-button>
                <el-button v-if="Token" @click="logout" :style='{"border":"0px solid #00adb5","padding":"0 10px","boxShadow":"0px 0px 0px #bbb","margin":"10px 20px 0 10px","color":"#fff","borderRadius":"2px","background":"#72bb3e","display":"inline-block","fontSize":"14px","lineHeight":"30px","minWidth":"60px","height":"30px"}'>退出</el-button>
			</div>
		</div>
		
		<div class="menu-preview" :style='{"padding":"64px 0 0","boxShadow":"1px 0 0px  #ddd","overflow":"hidden","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230210/06a0756a19f142bf97683f032fcc5afb.gif) ,#fff","bottom":"0","width":"210px","fontSize":"0px","position":"fixed","height":"100%","zIndex":"1001"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-menu class="el-menu-vertical-demo" :default-active="activeIndex" :style='{"border":0,"padding":"0","listStyle":"none","margin":"0","position":"relative","background":"none"}' :unique-opened="true" mode="vertical" :router="true" @select="handleSelect">
					<el-image v-if="false" :style='{"width":"44px","margin":"10px auto","objectFit":"cover","borderRadius":"100%","display":"block","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					<el-menu-item v-for="(menu, index) in menuList" :index="index + ''" :key="index" :route="menu.url">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"44px","fontSize":"14px","height":"44px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"44px","fontSize":"14px","color":"inherit","height":"44px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 1 + ''" @click="goMenu('/index/cart')">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"44px","fontSize":"14px","height":"44px"}' class="el-icon-shopping-cart-2"></i>
						<span :style='{"padding":"0 10px","lineHeight":"44px","fontSize":"14px","color":"inherit","height":"44px"}'>购物车</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 2 + ''" v-if="Token && notAdmin" @click="goMenu('/index/center')">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"44px","fontSize":"14px","height":"44px"}' class="el-icon-user"></i>
						<span :style='{"padding":"0 10px","lineHeight":"44px","fontSize":"14px","color":"inherit","height":"44px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
		</div>
		
		<div class="body-containers" :style='"vertical" == "vertical" ? {"minHeight":"100vh","padding":"44px 0px 0px","margin":"0 0 0 210px","position":"relative","background":"#fff","display":"block"} : {"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fff"}'>
			
			<div class="banner-preview" :style='{"width":"100%","padding":"60px 7% 120px","margin":"0 auto 10px","background":"url(http://codegen.caihongy.cn/20230209/d2a10004f425437c832e4d2056959711.png) no-repeat center -90px / 100% auto,url(http://codegen.caihongy.cn/20230209/9b49c13ae8134163bec33808d3a4b552.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20230210/7d53b0e6bd6b44dc87a1dcd33f7af58f.gif)","height":"720px"}'>
				<el-carousel :style='{"width":"100%","margin":"0 auto"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="550px" :autoplay="true" :interval="5000" :loop="true">
					<el-carousel-item :style='{"borderRadius":"8px","width":"100%","height":"100%"}' v-for="item in carouselList" :key="item.id">
						<el-image :style='{"padding":"10px","borderColor":"#bcdbdf","objectFit":"cover","borderRadius":"8px","background":"#fff","borderWidth":"4px 3px 4px 1px","width":"100%","borderStyle":"outset","height":"100%"}' :src="baseUrl + item.value" fit="cover"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
			
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"minHeight":"120px","padding":"20px 0","borderColor":"#222","alignItems":"center","color":"#fff","background":"#125868","flexDirection":"column","borderWidth":"0 0 0px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center"}'>
			    <img :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"none","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" >
			    <div :style='{"margin":"0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"客户","menuJump":"列表","tableName":"kehu"}],"menu":"客户管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"鲜花类型","menuJump":"列表","tableName":"xianhualeixing"}],"menu":"鲜花类型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","查看评论"],"menu":"鲜花信息","menuJump":"列表","tableName":"xianhuaxinxi"}],"menu":"鲜花信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"鲜花资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-goods","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除","物流"],"menu":"已发货订单","tableName":"orders/已发货"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"鲜花信息列表","menuJump":"列表","tableName":"xianhuaxinxi"}],"menu":"鲜花信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"鲜花信息列表","menuJump":"列表","tableName":"xianhuaxinxi"}],"menu":"鲜花信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"客户","tableName":"kehu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			Token: localStorage.getItem('Token'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],	
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
        },
    },
    methods: {
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            if (!localStorage.getItem('Token')) {
                this.toLogin();
            } else {
                this.$router.push(path);
            }
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	
	    & /deep/ .scrollbar-wrapper {
	      overflow-x: hidden;
	    }
	  }
	}
	
	.menu-preview .el-menu-vertical-demo .el-menu-item {
		cursor: pointer;
		padding: 0 20px;
		margin: 0 auto 20px;
		color: #555;
		white-space: nowrap;
		display: flex;
		font-size: 14px;
		border-color: #33b4d2;
		line-height: 40px;
		border-radius: 0px 20px 0 20px;
		box-shadow: 0px 0px 0px #ddd;
		background: linear-gradient(320deg, rgba(172,240,255,1) 0%, rgba(46,185,218,1) 28%, rgba(160,237,255,1) 68%, rgba(46,185,218,1) 100%);
		width: 86%;
		border-width: 0 0 4px;
		align-items: center;
		position: relative;
		border-style: outset;
		list-style: none;
		height: 44px;
	}
	
	.menu-preview .el-menu-vertical-demo .el-menu-item:hover {
		cursor: pointer;
		padding: 0 20px;
		margin: 0 auto 20px;
		color: #000;
		white-space: nowrap;
		font-size: 14px;
		border-color: #0087a7;
		line-height: 40px;
		border-radius: 0px 20px 0 20px;
		box-shadow: 0px 6px 8px -2px #448290;
		background: linear-gradient(230deg, rgba(172,240,255,1) 0%, rgba(46,185,218,1) 28%, rgba(160,237,255,1) 68%, rgba(46,185,218,1) 100%);
		width: 86%;
		border-width: 0 0 4px;
		position: relative;
		border-style: outset;
		list-style: none;
		height: 44px;
	}
	
	.menu-preview .el-menu-vertical-demo .el-menu-item.is-active {
		cursor: pointer;
		padding: 0 20px;
		margin: 0 auto 20px;
		color: #000;
		white-space: nowrap;
		font-size: 14px;
		border-color: #0087a7;
		line-height: 40px;
		border-radius: 0px 20px 0 20px;
		box-shadow: 0px 6px 8px -2px #448290;
		background: linear-gradient(230deg, rgba(172,240,255,1) 0%, rgba(46,185,218,1) 28%, rgba(160,237,255,1) 68%, rgba(46,185,218,1) 100%);
		width: 86%;
		border-width: 0 0 4px;
		position: relative;
		border-style: outset;
		list-style: none;
		height: 44px;
	}
	
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: #2087c3;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: #2087c3;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 30px 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
      .left-content {
          width: 100%;
          text-align: left;
      }
      .right-content {
          width: 100%;
          text-align: right;
      }
    }
</style>
