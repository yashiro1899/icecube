Title: 集成 CSS Lint 到 Vim
Author: Ice White
Date: Thu Jan 24 2013 14:09:42 GMT+0800 (CST)
Node: v0.8.18
Tags: vim, csslint, jslint
Theme: monokai

作为前端工程师，最常编辑的文件可能就是 html/css/javascript 了吧。

工欲善其事，必先利其器。之前通过 [http://blogs.linux.ie/kenguest/2007/03/18/integrating-javascript-lint-with-vim/](http://blogs.linux.ie/kenguest/2007/03/18/integrating-javascript-lint-with-vim/) 介绍的方法，将 [Javascript Lint](http://www.javascriptlint.com/) 集成到 vim 中，对 .js 文件进行语法检查，生活顿时变得美好了许多。

而对于 css，[Nicholas C. Zakas](http://www.nczonline.net/blog/) 的 [CSS Lint](http://csslint.net/index.html) 为什么不用同样的办法集成到 vim 中呢？

## 集成 CSS Lint 到 Vim

### 安装 CSS Lint

首先，要在命令行下使用 CSS Lint ，确保你的系统已经安装有 node 和 npm，没有可以按照这个进行安装 [https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) 。

使用下面的命令，轻松安装 CSS Lint。

    sudo npm install -g csslint

可以 `csslint --list-rules` 查看所有的规则，用选项 `--errors` 定义触犯那些规则报 error，
`--warnings` 定义触犯那些规则报 warning。传入多条规则以 `,` 格开。下面是我定义的规则：

<jslint-csslint-to-vim/cssl.sh>

### 集成到 vim

之前利用 vim 的 makeprg 集成 Javascript Lint 到 vim 中。我们同样用它，把 CSS Lint 集成到 vim 中。在 .vimrc 中添加如下代码：

    autocmd FileType css set makeprg=cssl\ %
    autocmd FileType css set errorformat=%f(%l):\ %m
    autocmd FileType css inoremap <F9> <C-o>:make<CR>
    autocmd FileType css nmap <F9> :make<CR>

这时打开你的 .css 文件后按 F9，就会出现像下面的图中的那样，提示你的代码在哪一行有问题，并在按下回车后，定位到第一次出现问题的那一行。

    30 #content .del{
    31     background: url(/resource/img/chrome/tools.png) no-repeat;
    32 }
    33 #doc header button{
    34     float: right;
    35     border: none;
    :!lints resource/css/chrome.css  2>&1| tee /tmp/vuVeymj/0
    resource/css/chrome.css(99): Warning - Values of 0 shouldn't have units specified.
    resource/css/chrome.css(102): Warning - Values of 0 shouldn't have units specified.
    resource/css/chrome.css(277): Warning - Values of 0 shouldn't have units specified.
    resource/css/chrome.css(285): Warning - Element (input.loading) is overqualified, just use .loading without element name.
    resource/css/chrome.css(393): Warning - Values of 0 shouldn't have units specified.
    resource/css/chrome.css(548): Error - float can't be used with display: table-cell.
    resource/css/chrome.css(549): Error - margin can't be used with display: table-cell.
    resource/css/chrome.css: Warning - Too many floats (12), you're probably using them for layout. Consider using a grid system instead.

    Press ENTER or type command to continue

### jslint & csslint

通过下面的分发脚本，把 jslint 和 csslint 绑定在同一快捷键上。

<jslint-csslint-to-vim/lints.sh>

.vimrc 再做相应修改，vim 在编辑 .js 、 .css 文件时，只要按下 F9，就会对代码进行检查鸟。。。

    autocmd FileType javascript,css set makeprg=lints\ %
    autocmd FileType javascript,css set errorformat=%f(%l):\ %m
    autocmd FileType javascript,css inoremap <F9> <C-o>:make<CR>
    autocmd FileType javascript,css nmap <F9> :make<CR>
