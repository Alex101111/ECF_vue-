<template>
  <div class="home">
<body class="homepage is-preload">
		<div id="page-wrapper">

			<!-- Header -->
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
												<li class="current_page_item"><router-link to ="/"> Home</router-link></li>
												<li><router-link to ="/MaCollection"> Collection </router-link></li>
											</ul>
										</nav>

								</div>
							</header>

						<!-- Banner -->
							<div id="banner">
								<h2><strong>Magic Card:</strong> Ma collection </h2>
							</div>

					</div>
				</div>

			<!-- Main Wrapper -->
				<div id="main-wrapper">
					<div class="wrapper style1">
						<div class="inner">

							<!-- Feature 1 -->
								<section class="container box feature1">
									<div class="row">
										<div class="col-12">
											<header class="first major">
												<h2>Mes 3 Dernières Cartes</h2>
											</header>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>Titre de la carte</h3>
													<p>And a subtitle</p>
												</header>
											</section>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>Titre de la carte</h3>
													<p>And a subtitle</p>
												</header>
											</section>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>Titre de la carte</h3>
													<p>And a subtitle</p>
												</header>
											</section>
										</div>

									</div>
								</section>

						</div>
					</div>
				</div>

				<!-- Footer Wrapper -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>

		</div>

	</body>
  </div>
</template>

<script>
import axios from 'axios'
const CardsApi = "https://api.magicthegathering.io/v1/cards"

export default {
  name: 'HomeView',
  components: {

  },
 data:()=>({
      cards:[],
  }),

  async created(){

      const cards = await axios.get(CardsApi)
  this.cards = cards.data
  console.log(cards.data)
  }
  
  
}
</script>

<style scoped>
@import "../assets/css/main.css"
</style>
