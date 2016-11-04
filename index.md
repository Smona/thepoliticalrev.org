---
layout: home
landing-title: <em>Join The Revolution</em>
title: The Political Revolution
description: {{ site.description }}
image: /assets/images/background-polrev-compressed.png
---

<!-- Banner -->
<section id="banner" class="major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p>Change will only take place once every one of us gets involved in the political process. Sign up for our mailing list now to join the revolution!</p>
			<form id="email-signup" autocomplete="on" method="post" action="https://tinyletter.com/ThePoliticalRevolution">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" placeholder="sen.sanders@gmail.com" autofocus/>
				<button type="submit" class="important">Join Us</button>
			</form>
			<!-- <ul class="actions">
				<li><a href="#one" class="button next scrolly">More</a></li>
			</ul> -->
		</div>
	</div>
</section>

<!-- Main -->
<div id="main">

<!-- One -->
{% include tiles.html %}

<!-- Two -->
<section id="two">
	<div class="inner">
		<header class="major">
			<h2>Let's do this</h2>
		</header>
		<p>With your help, we can build a better United States for everyone, not just the top one percent.</p>
		<ul class="actions">
			<li><a href="{{ site.baseurl }}fight" class="button next">Get Started</a></li>
		</ul>
	</div>
</section>

</div>
