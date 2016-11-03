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
			<p style="text-transform: uppercase;">We are a volunteer-run organization working to get candidates inspired by the Bernie Sanders platform into office. Sign up for our mailing list to join the Revolution:</p>
			<form id="email-signup" autocomplete="on" method="post" action="https://tinyletter.com/ThePoliticalRevolution">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" placeholder="johndoe@gmail.com"/>
				<button type="submit">Join</button>
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
