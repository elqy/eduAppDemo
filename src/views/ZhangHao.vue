<template>
	<div id="Account">
		<div class="Search-hear">
			<div class="Search">
				<img src="../assets/头像.png" alt="头像" />
				<a>登录/注册</a>
			</div>
			<ul class="seetting-item">
				<a href="#" target="_blank" class="setting-link">
					<li class="setting-wrap">
						<span class="fa fa-cny stu"></span>
						我的订单
						<span class="fa fa-chevron-right indicate1"></span>
					</li>
				</a>

				<a href="#" target="_blank" class="setting-link">
					<li class="setting-wrap">
						<span class="fa fa-money stu"></span>
						我的优惠券
						<span class="fa fa-chevron-right indicate"></span>
					</li>
				</a>

				<a href="#" target="_blank" class="setting-link">
					<li class="setting-wrap">
						<span class="fa fa-shopping-basket stu"></span>
						我的购物车
						<span class="fa fa-chevron-right indicate"></span>
					</li>
				</a>

				<a href="#" target="_blank" class="setting-link">
					<li class="setting-wrap">
						<span class="fa fa-id-card stu"></span>
						我的学习卡
						<span class="fa fa-chevron-right indicate"></span>
					</li>
				</a>
			</ul>

			<ul class="seetting-item-wrap">
				<a href="#" target="_blank" class="setting-link">
					<li class="setting-wrap">
						<span class="fa Example of glass fa-glass stu"></span>
						分享赚钱
						<span class="fa fa-chevron-right indicate2"></span>
					</li>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ZhangHao'
}
</script>

<style scoped lang="less">
body {
}

#Account {
	.Search-hear {
		.Search {
			background-color: white;
			img {
				width: 2.8rem;
				height: 2.8rem;
				margin-left: 0.8rem;
				margin-top: 0.5rem;
			}

			a {
				color: #333740;
				position: relative;
				bottom: 1rem;
				padding-left: 1rem;
				font-size: 1rem;
			}
		}

		.seetting-item {
			margin-top: 0rem;
			background-color: white;
			margin: 0px;
			padding: 0px;
			font-size: 100%;
		}
		.setting-wrap {
			// color: #000000;
			// height: 1.53333rem;
			// line-height: 1rem;
			// font-size: 0.8rem;
			// padding: 0.4rem 0;
			// margin-left: 1.13333rem;
			// width: 8.86667rem;
			// border-top: 1px solid #dddd;
			.indicate1 {
				margin-left: 14.8rem;
				color: #999999;
			}

			.indicate2 {
				margin-left: 14.8rem;
				color: #999999;
			}
			.indicate {
				margin-left: 14rem;
			}
			height: 1.5rem;
			font-size: 0.9rem;
			line-height: 1.3rem;
			color: black;
			padding: 0.7rem 0;
			// border-top: 1px solid #ddd;
			margin-left: 1.8rem;
		}

		// .top-setting {
		//   height: 1.7rem;
		//   font-size: 0.8rem;
		//   line-height: 1rem;
		//   color: black;
		//   padding: 0.8rem 0;
		//   border-top: 1px solid #ddd;
		//   box-sizing: border-box;
		// }

		.stu {
			color: #999999;
			width: 1.5rem;
			margin-left: -1rem;
		}

		.indicate {
			color: #999999;
			// margin-left: 16rem;
			// margin-top: 0.5rem;
			line-height: 1rem;
			// margin-left:auto;
			// margin-right:auto;
		}

		// .upm-setting_item_wrap {
		//   margin-top: 0.21333rem;
		// }

		.seetting-item-wrap {
			background-color: white;
			height: 1.5rem;
			font-size: 0.9rem;
			line-height: 1.3rem;
			color: black;
			padding: 0.7rem 0;

			// border-top: 1px solid #ddd;
			// margin-top: 1.8rem;
		}
	}
}
</style>
