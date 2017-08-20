/**
 * Created by Francisco Suárez <fsuarezm@gmail.com> on 20/08/17.
 */

var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .enableSassLoader(function(sassOptions) {}, {
        resolve_url_loader: false
    })
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/ie10-viewport-bug-workaround', './assets/js/ie10-viewport-bug-workaround.js')
    .addStyleEntry('css/app', './assets/css/app.scss')
    .addStyleEntry('css/dashboard', './assets/css/dashboard.css')

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

module.exports = Encore.getWebpackConfig();