<template>
   <div id="List">
      <ul>
        <li>
          <img src="../assets/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png" alt="" />
          <p>微专业</p>
        </li>
        <li>
          <img src="../assets/23444883-fc1a-4972-8a22-591e5b790ee0.png" alt="" />
          <p>职业提升</p>
        </li>
        <li>
          <img src="../assets/b216231d-4b93-4d5c-8e7c-e22389f194b8.png" alt="" />
          <p>编程开发</p>
        </li>
        <li>
          <img src="../assets/55329cd44f7142c7b2eaaca1a68e2430.png" alt="" />
          <p>人工智能</p>
        </li>
      </ul>
      <ul>
        <li>
           <img src="../assets/8f2db166988542c2b720f418e6330500.png" alt="" />
           <p>产品与运营</p>
         </li>
         <li>
           <img src="../assets/dd3fdff7aeea4b37af8d623be3695331.png" alt="" />
           <p>设计创意</p>
         </li>
         <li>
           <img src="../assets/c0c090e1872748ff8cec40ed03b3e476.png" alt="" />
           <p>电子商务</p>
         </li>
        <li>
           <img src="../assets/fd322af24d8947a8961b99c42b8261e8.png" alt="" />
           <p>语言学习</p>
         </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: ' ProfessionalList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #List {
    *{
      padding: 0;
      margin: 0;
    }
    margin-top: 12rem;
    background: #FFFFFF;
    width: 100%;
    height:10.9rem ;
    box-sizing:border-box;
    ul {
      width: 100%;
      list-style: none;
      clear: both;
      li {
        width: 25%;
        float: left;
        margin: 0.5rem 0;
        img {
          width: 2rem;
          margin: 0.5rem 0;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>
