![The Political Revolution](assets/images/Bumper.png "The Political Revolution")

# Color Palette

Navy #04243E | Red #D34749 | Aqua #43C4DA | Cream #F9F9F9 | Olive #B9C3B7

# Deployment

## Development

Pushes to the master branch on GitHub will trigger a 
[Travis CI](https://travis-ci.org/Smona/thepoliticalrev.org) build. This will publish
the site on GitHub Pages, to <https://smona.github.io/thepoliticalrev.org>.

The Travis build script at `.travis.yml` installs node.js and rvm, and then runs the
`ci-deploy.sh` script.

`ci-deploy.sh` clones the repo into the `public_html` directory, runs `ci-compile.sh`
which compiles the JS files and HTML files using webpack and jekyll into that
directory, and then commits and pushes to the `gh-pages` branch. (This file is
well-commented, so most of the details are in the file itself.)

The script uses Travis CI encypted keys. For more info, see
<https://gist.github.com/domenic/ec8b0fc8ab45f39403dd>.

# Credits

Original README from HTML5 UP:

```
Forty by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Forty, my latest and greatest addition to HTML5 UP and, per its incredibly
creative name, my 40th (woohoo)! It's built around a grid of "image tiles" that are
set up to smoothly transition to secondary landing pages (for which a separate page
template is provided), and includes a number of neat effects (check out the menu!),
extra features, and all the usual stuff you'd expect. Hope you dig it!

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		background-size polyfill (github.com/louisremi)
		Misc. Sass functions (@HugoGiraudel)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)
```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).
