![The Political Revolution](assets/images/Bumper.png "The Political Revolution")[![Build Status](https://travis-ci.org/politicalrev/thepoliticalrev.org.svg?branch=master)](https://travis-ci.org/politicalrev/thepoliticalrev.org)

# The Political Revolution
- **Coordination:** https://trello.com/b/B5swDgn1/tpr-website
- **Live Site:** https://thepoliticalrev.org
- **Staging/Test Site:** https://politicalrev.github.io/thepoliticalrev.org/

# How to Contribute

Submit an issue, open a new branch, or fork! Our current priorities and todos are on [Trello](https://trello.com/b/B5swDgn1/tpr-website).

Members of the Political Rev org: Please remember to create a new branch for new features! It's okay to merge to master to check your work on the testing site, but let's try to keep master as close to ready to deploy as possible.

## Development

To get started, clone the repo. To get your dev environment set up:

1. run `npm install`
2. run `webpack`
3. In a different console window, run `jekyll serve`

All changes will be built and served at localhost:4000

## Testing Site

Pushes to the master branch on GitHub will trigger a 
[Travis CI](https://travis-ci.org/politicalrev/thepoliticalrev.org) build. This will publish
the site on GitHub Pages, to <https://politicalrev.github.io/thepoliticalrev.org>.

The Travis build script at `.travis.yml` installs node.js and rvm, and then runs the
`ci-deploy.sh` script.

`ci-deploy.sh` clones the repo into the `public_html` directory, runs `ci-compile.sh`
which compiles the JS files and HTML files using webpack and jekyll into that
directory, and then commits and pushes to the `gh-pages` branch. (This file is
well-commented, so most of the details are in the file itself.)

The script uses Travis CI encypted keys. For more info, see
<https://gist.github.com/domenic/ec8b0fc8ab45f39403dd>.

# Credits

Forty by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the [CCA 3.0 license](html5up.net/license)
