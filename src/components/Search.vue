<template>
	<div id="Search" :style="{ height: wrapperHeight + 'px' }">
		<!--头部过滤-->
		<div id="topfilter">
			<span class="top-title">共{{ num }}门课程</span>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</div>
		<!--课程详情-->
		<div class="page-loadmore-wrapper" :style="{ height: wrapperHeight + 'px' }">
			<mt-spinner v-show="list < 1 && InitialLoading" class="quan"  color="#26a2ff"></mt-spinner>
			<mt-loadmore
				:top-method="loadTop"
				@translate-change="translateChange"
				@top-status-change="handleTopChange"
				:bottom-method="loadBottom"
				@bottom-status-change="handleBottomChange"
				:bottom-all-loaded="allLoaded"
				:auto-fill="false"
				ref="loadmore"
			>
				<!-- :auto-fill="true" 时页面加载完毕时 默认执行loadBottom 值为false时 自己写一个加载 -->
				<div class="hot-list">
					<SearchItem class="hot-one hot-item" v-for="(item, index) in items" :key="index">
						<a href="javascript:;" class="show clearfix">
							<div class="img-box"><img :src="item.src" class="fl" /></div>
							<h5 class="white-space">{{ item.title }}</h5>
							<p>
								<span class="color_e85647">{{ item.grade }}</span>
								&nbsp;&nbsp;&nbsp;
								<span>{{ item.number }}</span>
							</p>
							<p class="content-price">{{ item.price }}</p>
						</a>
					</SearchItem>
				</div>
				<div slot="top" class="mint-loadmore-top" style="text-align:center">
					<span v-show="topStatus !== 'loading'" :class="{ rotate: topStatus === 'drop' }">↓</span>
					<mt-spinner v-show="topStatus == 'loading'"  class="quan" color="#26a2ff"></mt-spinner>
				</div>
				<div v-if="allLoaded" style="text-align:center;">没有更多数据了</div>
				<div slot="bottom" class="mint-loadmore-bottom">
					<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
					<span v-show="bottomStatus === 'loading'"><mt-spinner v-show="bottomStatus == 'loading'" class="quan" color="#26a2ff"></mt-spinner></span>
				</div>
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
import SearchItem from './SearchItem.vue'
let items = [
	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师1',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)1',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备1',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】1',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶1',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓1',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师2',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)2',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备2',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】2',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶2',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓2',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},

	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师3',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)3',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备3',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】3',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶3',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓3',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},

	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师4',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)4',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备4',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】4',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶4',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓4',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/5e3104af1e814b4ba8f380581610f771.jpg'),
		title: '免费Python全系列教程全栈工程师5',
		grade: '4.7',
		number: '2222人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6cbd1cd50e224cadb476293081563bf2.jpg'),
		title: 'C语言零基础入门（详细讲解)5',
		grade: '4.8',
		number: '3333人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: 'Python开发21天入门必备5',
		grade: '4.8',
		number: '4444人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/6631742865841211713.jpg'),
		title: 'AI前奏必备-数据结构【C语言版】5',
		grade: '4.8',
		number: '5555人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/d3d4e073db8744578ea3ff706d8cb0a0.jpg'),
		title: 'Java快速入门与进阶5',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	},
	{
		src: require('../assets/images/dbaeda15b0394f95a2647852adc8876e.png'),
		title: '一次搞定Java入门-高薪全栈+安卓5',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	}
]
export default {
	name: 'Search',
	data () {
		return {
			items: items,
			examplename: 'Loadmore',
			pageNum: 1, // 页码
			InitialLoading: true, // 初始加载
			list: 5, // 数据
			allLoaded: false, // 数据是否加载完毕
			bottomStatus: '', // 底部上拉加载状态
			wrapperHeight: 0, // 容器高度
			topStatus: '', // 顶部下拉加载状态
			translate: 0, //
			moveTranslate: 0,
			value1: 0,
			value2: 'a',
			option1: [{ text: '全部', value: 0 }, { text: '免费', value: 1 }, { text: '收费', value: 2 }, { text: '只看VIP', value: 3 }],
			option2: [{ text: '最热', value: 'a' }, { text: '最新', value: 'b' }, { text: '最喜欢', value: 'c' }],
			num: '906'
		}
	},
	components: {
		SearchItem
	},
	mounted () {
		let windowWidth = document.documentElement.clientWidth // 获取屏幕宽度
		if (windowWidth >= 768) {
			// 这里根据自己的实际情况设置容器的高度
			this.wrapperHeight = document.documentElement.clientHeight - 105
		} else {
			this.wrapperHeight = document.documentElement.clientHeight - 80
		}
		// const that = this;
		// window.onresize = function temp() {
		//   windowWidth = document.documentElement.clientWidth;//获取屏幕高度
		//   console.log(windowWidth);
		//   if(windowWidth >= 768){//这里根据自己的实际情况设置容器的高度
		//     this.wrapperHeight = document.documentElement.clientHeight - 105;
		//   }else{
		//     this.wrapperHeight = document.documentElement.clientHeight - 80;
		//   }
		// };
		setTimeout(() => {
			// 页面挂载完毕 模拟数据请求 这里为了方便使用一次性定时器
			this.list = 5
		}, 1500)
	},
	methods: {
		handleBottomChange (status) {
			this.moveTranslate = 1
			this.bottomStatus = status
		},
		loadBottom () {
			this.handleBottomChange('loading') // 上拉时 改变状态码
			this.pageNum += 1
			setTimeout(() => {
				// 上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
				if (this.pageNum <= 3) {
					// 最多下拉三次
					this.list += 5 // 上拉加载 每次数值加5
				} else {
					this.allLoaded = true // 模拟数据加载完毕 禁用上拉加载
				}
				this.handleBottomChange('loadingEnd') // 数据加载完毕 修改状态码
				this.$refs.loadmore.onBottomLoaded()
			}, 1500)
		},
		handleTopChange (status) {
			this.moveTranslate = 1
			this.topStatus = status
		},
		translateChange (translate) {
			const translateNum = +translate
			this.translate = translateNum.toFixed(2)
			this.moveTranslate = (1 + translateNum / 70).toFixed(2)
		},
		loadTop () {
			// 下拉刷新 模拟数据请求这里为了方便使用一次性定时器
			this.handleTopChange('loading') // 下拉时 改变状态码
			this.pageNum = 1
			this.allLoaded = false // 下拉刷新时解除上拉加载的禁用
			setTimeout(() => {
				this.list = 5 // 下拉刷新 数据初始化
				this.handleTopChange('loadingEnd') // 数据加载完毕 修改状态码
				this.$refs.loadmore.onTopLoaded()
			}, 1500)
		}
	}
}
</script>

<style scoped lang="less">
#Search {
	.quan1 {
		position: relative;
		left: 50%;
	}
	#topfilter {
		.van-ellipsis {
			padding-left: 2rem;
		}
		.top-title {
			position: absolute;
			top: 0.8rem;
			left: 0.5rem;
			color: #999;
			z-index: 10;
		}
	}
	.quan {
		position: relative;
		left: 50%;
	}
	.page-loadmore-wrapper {
		overflow: scroll;
	}

	.hot-list {
		padding: 0 8px;
		.content-price {
			font-size: 1rem;
			color: black;
		}
	}
	.hot-item {
		padding: 10px 0;
	}
	.hot-one {
		overflow: hidden;
		border-bottom: 1px solid #ccc;
	}
	.hot-one a img {
		padding-right: 10px;
	}
	.hot-item a img {
		width: 120px;
		height: 80px;
		border-radius: 0.8rem;
	}
	.fl {
		float: left;
	}
	.hot-one a h5 {
		margin-top: 2px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 6px;
		font-size: 16px;
		color: #000;
	}
	.hot-one a p {
		font-size: 12px;
		color: #828282;
		margin: 0 0 3px;
	}
	.color_e85647 {
		color: #e85647;
	}
	div.hot-list > div:first-child .img-box {
		overflow: hidden;
	}
	div.hot-list > div:first-child img {
		width: 100%;
		height: auto;
		padding-right: 0;
	}
}
</style>
