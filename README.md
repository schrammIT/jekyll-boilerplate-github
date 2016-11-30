# Jekyll Boilerplate

* a lightweight and cleaned up version of the initial [Jekyll](https://jekyllrb.com/) setup
* based on: [HugoGiraudel / jekyll-boilerplate](https://github.com/HugoGiraudel/jekyll-boilerplate)

## Setup/Run
* clone: `git clone https://github.com/schrammIT/jekyll-boilerplate-github.git myNewProject`
* change directory: `cd myNewProject`
* open in atom: `atom .` (opens folder)
* run: `bundle exec jekyll serve`

## gulp
* install node_modules: `npm install` (package.json included)
  * better: install somewhere global and symlink to here `cd myNewProject` + `ln -s /Users/mirko/NodeJsModules/jekyll/node_modules/ node_modules`
* run gulp with: `gulp watch` (in a new terminal from within the project)

## create new project
* Prerequirements: cloned project, changed into new project-folder
* delete existing git: `.git`-folder
* init git: `git init`
* in Bitbucket create new repository
* follow BitBucket instruction `I have an existing project`

## Problems
* Terminal Error Message: `Bundler can't satisfy your Gemfile's dependencies.`
  * run: `bundle update` (maybe delete file `Gemfile.lock`, should be recreated after update)
    * article: [bundler-best-practices](https://www.viget.com/articles/bundler-best-practices)

## Features

### Additions

* An empty folder has been created at `assets/images`.
* An empty folder has been created at `assets/js`.
* An initial configuration for Kramdown has been added.
* The CSS is being minified via Sass.
* Some project-agnostic base styles have been added.
* Normalize.css has been added.
* `.DS_Store` and `node_modules` have been added to `.gitignore`.
* The `jekyll-feed` gem has been added to automate Atom feed generation.
* The `jekyll-sitemap` gem has been added to automate sitemap generation.

### Editions

* The `_sass` folder has been moved to `assets/sass`.
* The `css` folder has been moved to `assets/css`.
* The `default.html` layout has been cleaned up.
* The `index.html` has been cleaned up.

### Deletions

* The `about.md` file has been removed.
* The `page.html` and `post.html` layouts have been removed.
* The sample post and the `_posts` folder have been removed.
* All initial partials from the `_includes` folder but `head.html` have been removed.
* Options `email`, `twitter_username`, `github_username` have been removed.
* All the existing styles have been removed.

### Fixes

* A `lang` attribute has been added to the default layout.
* A `<main>` element has been added to the default layout.

## Credits

* [Jekyll](https://jekyllrb.com/)
* [Hugo Giraudel](https://twitter.com/HugoGiraudel)
