<template>
	<section class="course">
		<aside><img class="course_img" :src="src" alt="" /></aside>
		<main>
		<slot></slot>
			<div class="course_mark">
				<slot name="slotgrade"></slot>
				<slot name="slotnumber"></slot>
			</div>
			<p class="course_price"><slot name="slotprice"></slot></p>
		</main>
	</section>
</template>

<script>
export default {
	props: ['src', 'title', 'grade', 'number', 'price']
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
			// .course_price-discount {
			// 	color: #333;
			// 	font-size: 0.4rem;
			// 	padding: 2rem 0;
			// }
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
