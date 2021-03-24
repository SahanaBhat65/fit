const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/home.scss','public/css/home.css')
    .copy('resources/img','public/img')
    .sass('resources/scss/login.scss','public/css/login.css')
    .sass('resources/scss/adminlogin.scss','public/css/adminlogin.css')
    .sass('resources/scss/userinfo.scss','public/css/userinfo.css')
    .sass('resources/scss/weightloss.scss','public/css/weightloss.css')
    .sass('resources/scss/weightgain.scss','public/css/weightgain.css')
    .sass('resources/scss/belly.scss','public/css/belly.css')
    .sass('resources/scss/armfat.scss','public/css/armfat.css')
    .sass('resources/scss/doubleChin.scss','public/css/doubleChin.css')
    .sass('resources/scss/thighfat.scss','public/css/thighfat.css')
    .sass('resources/scss/aboutus.scss','public/css/aboutus.css')
    .sass('resources/scss/signup.scss','public/css/signup.css');
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);
