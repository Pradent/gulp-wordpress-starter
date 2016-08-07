## Gulp WordPress Starter
Gulp tasks with sample assets structure which can be use as a starting point for a WordPress theme. Configure as required and integrate in your own workflow.

## Features
#### WordPress
- Generates .pot file from the text-domains used in Theme's PHP files using [gulp-wp-pot]
- Adds theme information to the style.css header

#### CSS
- Compiles SASS using [gulp-sass]
- Autoprefixes CSS properties using [gulp-autoprefixer]
- Minifies CSS using [gulp-clean-css]
- Generates sourcemap using [gulp-sourcemaps]

#### Javascript
- Concatinates multiple files into one JS file using [gulp-concat]
- Minifies the JS file
- *Lints JS code* // Todo

#### Images
- Compresses images using [gulp-imagemin]


## Usage
Make sure you have Node and Gulp installed.

#### Clone and Install Dependencies
```
git clone https://github.com/Pradent/gulp-wordpress-starter MyTheme
cd MyTheme
npm install
```
#### Configs
- Configure your text-domain information in config.json file.
- Optionally, you could also change the paths from that same file.

#### Build Manually
```
gulp
```

#### Watch Changes Automatically
```
gulp watch
```

#### Add more tasks
- Create yourtask.js in [tasks] directory
- Add your task name to [default.js]

[gulp-wp-pot]: https://www.npmjs.com/package/gulp-wp-pot
[gulp-sass]: https://www.npmjs.com/package/gulp-sass
[gulp-autoprefixer]: https://www.npmjs.com/package/gulp-autoprefixer
[gulp-clean-css]: https://www.npmjs.com/package/gulp-clean-css
[gulp-sourcemaps]: https://www.npmjs.com/package/gulp-sourcemaps
[gulp-concat]: https://www.npmjs.com/package/gulp-concat
[gulp-imagemin]: https://www.npmjs.com/package/gulp-imagemin

[tasks]:[https://github.com/Pradent/gulp-wordpress-starter/tree/master/gulpfile.js/tasks]
[default.js]: [https://github.com/Pradent/gulp-wordpress-starter/blob/master/gulpfile.js/tasks/default.js]
