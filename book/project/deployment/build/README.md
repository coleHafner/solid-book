* Things needed to build a webpage
    * build script(should be in bin of project)
        * replace watchify with browserify
        * make sure bin/deploy acutally builds all js/css/etc
        * make sure built assets are gitignore (bundle.js, main.css, etc)
    * cache busting
        * nice to do hash of file Contents
    * serving static assets 
        * gzip and minify, ETAGs, ttl
            * gzip, minify, cache headers can be set in both nginx and node
            * gzip, minify nginx is good at
            * usually do etags on node
    * https://github.com/h5bp good source for boilerplate
    * awesome check http://tools.pingdom.com/fpt/
    * baseurl - if you want to be able to build to various folders
    *
