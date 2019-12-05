<template>
	<div id="Search">
		<!--头部过滤-->
		<div class="TopSearch">
			<p class="top-left">共2664们相关课程</p>
			<div class="top-right">
				<span class="filter-label">筛选：</span>
				<div class="filter-type">
					<span class="filter-down">全部</span>
					<i class="icon"></i>
					<div class="dropdown-menu" style="display: none;">
						<ul>
							<li>全部</li>
							<li>免费</li>
							<li>收费</li>
							<li>只看vip会员</li>
						</ul>
					</div>
				</div>
				<span class="pai">排序:</span>
				<div class="filter-type">
					<span class="filter-down">最热</span>
					<i class="icon"></i>
					<div class="dropdown-menu" style="display: none;">
						<ul>
							<li>全部</li>
							<li>免费</li>
							<li>收费</li>
							<li>只看vip会员</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--课程详情-->
		<div id="CourseDetail">
			<SearchItem v-for="item in items" :key="item.title" :src="item.src" >
			<main>
				{{item.title}}
				<div>
					<span slot="slotgrade"  class="course_mark-count">{{item.grade}}</span>
					<span slot="slotnumber"  class="course_learn-count">{{item.number}}</span>
					</div>
					<p class="course_price"><span slot="slotprice" class="course_price-discount">{{item.price}}</span></p>
			</main>
			</SearchItem>
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
		src: require('../assets/images/7bd23890-2a16-439f-bb94-bde8079e3bd6.jpg'),
		title: '一次搞定Java入门-高薪全栈+安卓',
		grade: '4.8',
		number: '6666人学过',
		price: '￥5'
	}
	
]
export default {
	name: 'Search',
	data () {
		return {
			items: items
		}
	},
	components: {
		SearchItem
	}
}
</script>

<style scoped lang="less">
#Search {
	.TopSearch {
		width: 100%;
		height: 0.37333rem;
		line-height: 0.37333rem;
		color: #999;
		font-size: 0.9rem;
		.top-left {
			display: inline-block;
			margin-left: 1rem;
			font-size: 0.9rem;
		}
		.top-right {
			.pai {
				padding-left: 1rem;
			}
			display: inline;
			padding-left: 3rem;
			.filter-type {
				display: inline-block;
				.filter-down {
					color: #36b378;
					border-right: 1px solid #c8c8cd;
					padding: 0.2rem;
				}
			}
		}
	}
	#CourseDetail {
		.course_mark {
			font-size: 0.42667rem;
			position: relative;
			bottom: 0.3rem;
			.course_price-discount {
				color: #333;
				font-size: 0.4rem;
				padding: 2rem 0;
			}
		}
		.course {
			margin: -0.6rem 1rem;
			width: 20.583333333333332rem;
			height: 6.5rem;
			border-bottom: 1px solid #cccccc;
			.course_mark-count {
				padding: 0 0.21333rem 0 0.10667rem;
				line-height: 0.34667rem;
			}
			.course_price-free {
				position: relative;
				font-size: 0.8rem;
				bottom: 1rem;
			}
			h5 {
				font-size: 0.9rem;
				line-height: 0.58667rem;
				color: #333;
				font-weight: normal;
			}
			padding: 0.42667rem 0;
			display: flex;
			aside {
				flex: 0 0 2.93333rem;
				position: relative;
				top: 2rem;
			}
			.course_img {
				width: 2.93333rem;
				height: 1.84rem;
				vertical-align: top;
				border-radius: 0.08rem;
			}
			main {
				position: relative;
				width: 100%;
				padding-left: 0.42667rem;
				top: 1rem;
				.course_price {
					.course_price-discount {
						font-size: 0.9rem;
						position: relative;
						bottom: 1rem;
					}
				}
				.course_learn-count {
					padding-left: 0.3rem;
				}
			}
			.course_img {
				width: 6.875rem;
				height: 4.375rem;
				vertical-align: top;
				border-radius: 0.08rem;
			}
		}
	}
}
</style>
