icecube
=======

This is my blog IceCube.

[http://icewhite.us](http://icewhite.us/ "IceCube")

### Article format

Every article is a markdown file with some meta-data at the top of the file.

    Title: Mac OS 奇怪的“类”字
    Author: Ice White
    Date: Sun Jan 06 2013 15:34:34 GMT+0800 (CST)
    Node: v0.8.16
    Tags: Mac OS, iOS, unicode
    Theme: monokai

    some descriptions

    ## Title

    * display contents of external readable file (path is relative to .markdown file)
    <test-code/test-file.js>

    * display contents of external JavaScript file and evaluate its contents
    <test-code/evaluate-file.js*>

    * display the specified function of external JavaScript file
    <test-code/test-file.js#test-function>

    More content goes here.

### Example test-file.js
    //isArray
    function isArray (obj) {
        return Array.isArray(obj);
    }
    //test-function
    function isString (obj) {
        return typeof(obj) === 'string' || obj instanceof String;
    }
    //isObject
    function isObject (obj) {
        return typeof(obj) === 'object' && obj && !isArray(obj);
    }

### Theme List

* ambiance-mobile
* ambiance
* blackboard
* cobalt
* eclipse
* elegant
* erlang-dark
* lesser-dark
* monokai
* neat
* night
* rubyblue
* solarized
* twilight
* vibrant-ink
* xq-dark

Preview the themes on [CodeMirror](http://codemirror.net/demo/theme.html "CodeMirror").

