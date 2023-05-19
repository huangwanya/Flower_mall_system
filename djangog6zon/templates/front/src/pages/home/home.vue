<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px auto","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>

		<!-- 系统简介 -->
		<div :style='{"padding":"0 0 30px","boxShadow":"0px 0px 0px #eee","margin":"30px 7% 30px","borderColor":"#98c6e2","display":"flex","justifyContent":"space-between","flexWrap":"wrap","background":"none","borderWidth":"0 0 0px","width":"100%","position":"relative","borderStyle":"dotted","height":"auto","order":"18"}'>
		  <div :style='{"padding":"0 20px 0 0px","margin":"0 0 0px","color":"#fff","textAlign":"center","display":"block","top":"120px","left":"0px","background":"#0087a7","width":"50%","lineHeight":"44px","fontSize":"18px","position":"absolute","height":"44px","zIndex":"999"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"padding":"0px 20px 0px  20px ","margin":"0","color":"#333","textAlign":"left","background":"#9cc1d7","display":"none","width":"50%","lineHeight":"50px","fontSize":"24px","height":"50px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0px","margin":"20px 0 0","flexWrap":"wrap","display":"block","width":"50%","float":"right","justifyContent":"space-between","height":"400px","order":"2"}'>
		    <img :style='{"boxShadow":"0px 0px 0px #ddd","padding":"20px","margin":"0px","borderColor":"#9dcde9","objectFit":"cover","borderRadius":"0","borderWidth":"0","background":"#0087a7","display":"block","width":"100%","borderStyle":"dotted","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"padding":"0px","margin":"0px","borderColor":"#9dcde9","objectFit":"cover","borderWidth":"0px","background":"#fff","display":"none","width":"48%","borderStyle":"dashed","height":"150px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"boxShadow":"1px 1px 1px #ddd","margin":"0px","objectFit":"cover","borderRadius":"8px","flex":1,"display":"none","width":"265px","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"20px 40px 20px","boxShadow":"0px 0px 0px #eee","margin":"164px 0 0","borderColor":"#ffec9d","color":"#555","display":"block","textIndent":"2em","overflow":"hidden","borderRadius":"0px","background":"none","borderWidth":"0px","width":"50%","lineHeight":"24px","fontSize":"14px","borderStyle":"double dotted solid double","height":"210px"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"320px","position":"absolute","top":"80px","background":"url() no-repeat center top","display":"none","height":"200px"}' />
		  <div :style='{"top":"84px","left":"0","background":"#08b344","display":"none","width":"calc(100% - 0px)","position":"absolute","height":"100px","zIndex":"0"}' />
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		</div>
		
								<div class="news" :style='{"padding":"0","margin":"40px 0 0","borderColor":"#98c6e2","overflow":"hidden","borderRadius":"0px","background":"none","borderWidth":"0px","width":"100%","position":"relative","borderStyle":"dotted","height":"auto","order":"3"}'>
		
		<div class="title" :style='{"padding":"0px 20px 0 0px","margin":"0px 7% 40px","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230209/f86be17c39ec4de6afd148570ce1b67c.png) repeat-x right top / auto 100%,#0087a7","width":"86%","position":"relative","height":"40px"}'>
			<span :style='{"padding":"0 150px 0 80px","color":"#fff","background":"url(http://codegen.caihongy.cn/20230209/9022d8ae645b41e0b62870c6884b4057.png) no-repeat right top / auto 100%,#0087a7","display":"inline-block","fontSize":"18px","lineHeight":"40px","textShadow":"0px 0px 0px #eee","fontWeight":"500"}'>鲜花资讯</span>
		</div>
		
			
			
			<!-- 样式二 -->
		<div class="list list2 index-pv1" :style='{"padding":"0 7%","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' v-if="newsList.length">
			<div :style='{"cursor":"pointer","margin":"0 0 40px","background":"none","display":"inline-block","width":"48%","fontSize":"0","position":"relative","height":"auto"}' v-for="(item,index) in newsList" :key="index" class="list-item animation-box" @click="toDetail('newsDetail', item)">
				<img :style='{"padding":"10px","boxShadow":"0px 6px 6px -6px #80afba","borderColor":"#0087a7 #bdeaf4 #bdeaf4 #0087a7","objectFit":"cover","borderRadius":"20px","borderWidth":"1px 1px 2px 1px","display":"inline-block","width":"180px","borderStyle":"dotted","height":"180px"}' :src="baseUrl + item.picture" alt="" />
				<div :style='{"padding":"10px","boxShadow":"0px 12px 12px -12px #80afba","borderColor":"#0087a7 #bdeaf4 #0087a7 #bdeaf4","margin":"50px 0 0","display":"inline-block","float":"right","overflow":"hidden","borderRadius":"20px 20px","borderWidth":"8px 3px 1px 2px","background":"url(http://codegen.caihongy.cn/20230210/7d53b0e6bd6b44dc87a1dcd33f7af58f.gif)","width":"calc(100% - 200px)","borderStyle":"solid","height":"auto"}' class="item-info">
					<div class="name line1" :style='{"lineHeight":"32px","fontSize":"14px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","color":"#333"}'>{{item.title}}</div>
					<div :style='{"color":"#999","textAlign":"right","fontSize":"12px"}' class="time">{{item.addtime}}</div>
				</div>
			</div>
		</div>
			
			
			
			
			
			
			
			
			
		<div @click="moreBtn('news')" :style='{"cursor":"pointer","boxShadow":"0px 0px 0px #ddd5c6,inset 0px 0px 0px 0px #ffa100","padding":"0 12px 0 20px","margin":"0px auto 0","borderColor":"#9dcde9","textAlign":"center","display":"block","right":"calc(7% + 20px)","borderRadius":"0px","top":"0px","background":"none","borderWidth":"0px","width":"auto","lineHeight":"40px","position":"absolute","borderStyle":"dotted"}'>
			<span :style='{"color":"#333","background":"none","fontSize":"15px"}'>查看更多</span>
			<i v-if="true" :style='{"color":"#333","fontSize":"15px","display":"inline-block"}' class="el-icon-d-arrow-right"></i>
		</div>
		
			<div v-if="true" class="idea newsIdea" :style='{"padding":"0","margin":"0 auto","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between"}'>
			<div class="box1" :style='{"width":"100%","background":"url(http://codegen.caihongy.cn/20230210/3b7bf49b27c640098ae3a8c454e1e35c.jpg) no-repeat center top","height":"320px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		</div>
						

<div class="recommend" :style='{"border":"0px solid #dfdfdf","boxShadow":"0px 0px 0px #eee","padding":"20px 0 0px","margin":"0px auto","borderColor":"#98c6e2","display":"flex","overflow":"hidden","borderRadius":"0","flexWrap":"wrap","background":"none","borderWidth":"0 0 0px","width":"100%","position":"relative","borderStyle":"dotted","height":"auto","order":"20"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"0","margin":"0 auto","flexWrap":"wrap","background":"#efefef","display":"flex","width":"1200px","justifyContent":"space-between"}'>
		<div class="box1" :style='{"width":"1200px","position":"absolute","top":"74px","background":"#08b344","height":"1px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"padding":"0px 20px 0 0px","margin":"0px 7% 40px","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230209/f86be17c39ec4de6afd148570ce1b67c.png) repeat-x right top / auto 100%,#0087a7","width":"86%","position":"relative","height":"40px"}'>
		<span :style='{"padding":"0 150px 0 80px","margin":"0 auto","color":"#fff","background":"url(http://codegen.caihongy.cn/20230209/9022d8ae645b41e0b62870c6884b4057.png) no-repeat right top / auto 100%,#0087a7","display":"inline-block","fontSize":"18px","lineHeight":"40px","textShadow":"0px 0px 0px #eee","fontWeight":"500"}'>鲜花信息推荐</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 7%","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"cursor":"pointer","margin":"0 0 40px","flexWrap":"wrap","background":"none","display":"flex","width":"48%","fontSize":"0","position":"relative","justifyContent":"space-between","height":"320px"}' v-for="(item,index) in xianhuaxinxiRecommend" class="list-item animation-box" :key="index" @click="toDetail('xianhuaxinxiDetail', item)">
			<img :style='{"padding":"10px","boxShadow":"0px 6px 6px -6px #80afba","margin":"0px 0 0","borderColor":"#0087a7 #bdeaf4 #0087a7 #bdeaf4","objectFit":"cover","borderRadius":"20px","borderWidth":"2px 2px 1px 1px","display":"inline-block","width":"48%","borderStyle":"solid","height":"100%","order":"2"}' v-if="preHttp(item.xianhuatupian)" :src="item.xianhuatupian.split(',')[0]" alt="" />
			<img :style='{"padding":"10px","boxShadow":"0px 6px 6px -6px #80afba","margin":"0px 0 0","borderColor":"#0087a7 #bdeaf4 #0087a7 #bdeaf4","objectFit":"cover","borderRadius":"20px","borderWidth":"2px 2px 1px 1px","display":"inline-block","width":"48%","borderStyle":"solid","height":"100%","order":"2"}' v-else :src="baseUrl + (item.xianhuatupian?item.xianhuatupian.split(',')[0]:'')" alt="" />
			<div class="item-info" :style='{"padding":"10px 0px","borderColor":"#bdeaf4 #0087a7 #bdeaf4 #0087a7","margin":"20px 0 0","alignItems":"center","display":"flex","justifyContent":"center","overflow":"hidden","borderRadius":"20px","background":"url(http://codegen.caihongy.cn/20230210/7d53b0e6bd6b44dc87a1dcd33f7af58f.gif)","borderWidth":"1px 1px 3px 4px","width":"50%","borderStyle":"solid","height":"280px"}'>
				<div class="name line1" :style='{"padding":"10px","margin":"0 10px 0 0","overflow":"hidden","color":"#333","alignItems":"center","textAlign":"center","display":"flex","width":"40px","lineHeight":"16px","fontSize":"14px","justifyContent":"center","height":"100%"}'>鲜花名称:{{item.xianhuamingcheng}}</div>
				<div class="name line1" :style='{"padding":"10px","margin":"0 10px 0 0","overflow":"hidden","color":"#333","alignItems":"center","textAlign":"center","display":"flex","width":"40px","lineHeight":"16px","fontSize":"14px","justifyContent":"center","height":"100%"}'>{{item.xianhualeixing}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('xianhuaxinxi')" :style='{"border":"0px solid #ffa100","cursor":"pointer","boxShadow":"0px 0px 0px #ddd5c6,inset 0px 0px 0px 0px #ffa100","padding":"0 20px","margin":"20px auto 20px","borderColor":"#9dcde9","textAlign":"center","display":"block","right":"calc(7% + 20px)","borderRadius":"0px","top":"0px","background":"none","borderWidth":"0px","width":"auto","lineHeight":"40px","position":"absolute","borderStyle":"dotted"}'>
		<span :style='{"color":"#333","background":"none","fontSize":"15px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#333","fontSize":"15px","display":"inline-block"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>


	<!-- 关于我们 -->
	<div :style='{"padding":"0px 0","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"50px 7% 30px","borderColor":"#98c6e2","display":"block","justifyContent":"center","overflow":"hidden","borderRadius":"4px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"86%","position":"relative","borderStyle":"dotted","height":"auto","order":"2"}'>
	  <div :style='{"padding":"0 20px","margin":"0","color":"#fff","textAlign":"center","top":"100px","left":"calc(50% + 0px)","background":"#0087a7","width":"50%","lineHeight":"40px","fontSize":"18px","position":"absolute","textShadow":"0px 0px 0px #eee","zIndex":"9"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"padding":"0 40px 0","margin":"0px 0 0px","color":"#333","textAlign":"left","background":"none","display":"none","width":"auto","lineHeight":"60px","fontSize":"24px","zIndex":"9","height":"66px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0","margin":"0px 0 0","flexWrap":"wrap","display":"block","width":"50%","position":"relative","float":"left","height":"400px"}'>
	    <img :style='{"boxShadow":"0px 0px 0px #eee","padding":"20px","margin":"0px","borderColor":"#9dcde9","objectFit":"cover","borderRadius":"0","borderWidth":"0px","background":"#0087a7","display":"block","width":"100%","borderStyle":"dotted","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 0px","objectFit":"cover","borderRadius":"8px","display":"none","width":"48%","float":"right","height":"170px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px 40px 0","boxShadow":"0px 0px 0px #eee","margin":"142px 0 0 0","borderColor":" #9dcde9","color":"#555","display":"inline-block","float":"right","textIndent":"2em","overflow":"hidden","borderRadius":"0px","background":"none","borderWidth":"0","width":"50%","lineHeight":"24px","fontSize":"16px","borderStyle":"dotted","zIndex":"9","height":"228px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"margin":"80px 0 40px 0px","background":"url() no-repeat center top","display":"none","width":"600px","position":"absolute","height":"400px","zIndex":"1"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>



</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        xianhuaxinxiRecommend: [],

      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 4,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "xianhuaxinxi/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "xianhuaxinxi/autoSort2";
          }
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 4,
			}}).then(res => {
				if (res.data.code == 0) {
					this.xianhuaxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				filter: brightness(1);
				transform: scale(1);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: all 0.3s ease-in-out 0s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px,-10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				filter: brightness(1);
				transform: scale(1);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: all 0.3s ease-in-out 0s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #08b344;
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: #08b344;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(1);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 1;
				transition: all 0.3s ease-in-out 0s;
			}
		}
	}
</style>
