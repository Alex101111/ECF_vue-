<template>
<div id="body">

			<!-- Header Wrapper -->
			<div id="header-wrapper">
				<div class="container">

					<!-- Header -->
						<header id="header">
							<div class="inner">

								<!-- Logo -->
									<h1><a href="index.html" id="logo">Magic</a></h1>

								<!-- Nav -->
									<nav id="nav">
										<ul>
											<li ><router-link to ="/"> Home</router-link></li>
											<li class="current_page_item"><a href="collection.html">Ma Collection</a></li>
										</ul>
									</nav>

							</div>
						</header>

				</div>
			</div>

			<!-- Main Wrapper -->
				<div id="main-wrapper">
					<div class="wrapper style2">
						<div class="inner">
							<div class="container">
								<div id="content">

									<!-- Content -->

										<article>
											<header class="major">
												<h2>Ma Collection</h2>
											</header>
											<div class='card-list' v-for="card in cards.cards" :key="card.id"  >
												<div class='card-title'><b>{{card.id}}</b> {{card.name}}</div>
												<div class='card-action' @click="checkThisCard(card.id)">👀</div>
											</div>
											
										</article>

								</div>
							</div>
						</div>
					</div>

				</div>

			


	</div>
</template>

<script>
import axios from 'axios';

export default {
name:'MaCollection',

props:[
'cardId'
],
 data:() => ({

      cards:[]
  }),
  methods:{
checkThisCard(id_card){
    this.$router.push({name:"CardDetail", params:{ cardId: id_card}})
},

funcPlus(param){
return param ++
}
  },

  async created(){

      const cards = await axios.get("https://api.magicthegathering.io/v1/cards");
  this.cards = cards.data;
  console.log(cards)
  }
  
  
}


</script>

<style>

</style>