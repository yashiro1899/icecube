Title: Chrome Extension 开发
Author: Ice White
Date: Sun Apr 07 2013 16:42:24 GMT+0800 (CST)
Node: v0.10.3
Tags: chrome extention
Theme: solarized


#### Extension vs Plugin

*扩展：*

> 扩展通常是通过浏览器自身所开放的 API 来实现的，用于扩展浏览器自身功能的东西，比如 AdBlock。扩展很多都是增加一些浏览器上的窗口或者按钮，来扩展浏览器的功能。这里有一点需要说明一下，扩展本身可以包含一个或者多个插件，但是插件不能包含扩展。

*插件：*

> 在浏览器中，插件的功能就是将第三方库提供的功能，通过 embed、object 标签在页面中应用起来，比如 Shockwave Flash。这些插件就像驱动程序一样，使得你的浏览器可以调用本地方法，系统的接口，实现浏览器无法独立实现的功能。或者这么讲，插件使得别的程序才能处理的内容，在浏览器的页面中得以展现和处理。

## Chrome Extension 开发

chrome extension 基本上以 3 种形态在 Chrome 中存在。

1. browser action，像图中的 Google Mail Checker，显示 Google Mail 收件箱中的未读邮件数；
2. page action。像图中的星条旗，flags for chrome，展示当前站点服务器所在的国家或地区。页面级别；
3. 不可见，默默地存在于 chrome://extensions/ 中

![Chrome's top right corner](s3://ice.cube:chrome-top-right-corner.png "Chrome's top right corner")

#### Location

On Windows:

	C:\Users\%username%\AppData\Local\Google\Chrome\User Data\Default\Extensions\

On Mac OS X:

	~/Library/Application\ Support/Google/Chrome/Default/Extensions/

随便找个已安装的扩展，tree 下它们的目录结构，不尽相同但也类似。咦，这不就是前端代码。。。

	├── _locales
    │   ├── en
    │   │   └── messages.json
    │   └── zh_CN
    │       └── messages.json
    ├── css
    │   ├── popup.css
    │   ...
    ├── images
    │   ...
    ├── js
    │   ├── background.js
    |   ...
    ├── manifest.json
    └── popup.html

#### manifest.json

每一个扩展都有一个 manifest.json，提供给 Chrome 关于扩展的相关信息。

<chrome-extension-development/manifest.json>

#### permissions

相比普通的页面代码而言，扩展可以按需增加更多权限，扫除跨域、存储限制等困扰。

    match pattern
    "background"
    "bookmarks"
    "chrome://favicon/"
    "contextMenus"
    "cookies"
    "experimental"
    "geolocation"
    "history"
    "idle"
    "management"
    "notifications"
    "tabs"
    "unlimitedStorage"

#### messages passing

![Chrome's task manager](s3://ice.cube:chrome-task-manager.png "Chrome's task manager")

打开 Chrome 的任务管理器，不难看出，
扩展程序以独立进程存在，每个页面也是一个独立进程。而 content script 是与页面上下文相隔离、注入到页面中。
点击扩展出现的 popup 又是扩展程序的子进程。这样它们之间的通讯就比较微妙了。

![messages passing](/chrome-extension-development/messages-passing.dot "messages passing")

#### references

* [http://developer.chrome.com/extensions/](http://developer.chrome.com/extensions/)
* [http://open.chrome.360.cn/extension\_dev/overview.html](http://open.chrome.360.cn/extension_dev/overview.html)

