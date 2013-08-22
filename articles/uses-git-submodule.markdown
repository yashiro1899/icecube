Title: 使用 Git Submodule
Author: Ice White
Date: Tue Aug 20 2013 14:32:03 GMT+0800 (CST)
Node: v0.10.16
Tags: git,about
Theme: solarized

> 经常有这样的事情，当你在一个项目上工作时，你需要在其中使用另外一个项目。也许它是一个第三方开发的库或者是你独立开发和并在多个父项目中使用的。这个场景下一个常见的问题产生了：你想将两个项目单独处理但是又需要在其中一个中使用另外一个。
>
> 这里有一个例子。假设你在开发一个网站，为之创建Atom源。你不想编写一个自己的Atom生成代码，而是决定使用一个库。你可能不得不像CPAN install或者Ruby gem一样包含来自共享库的代码，或者将代码拷贝到你的项目树中。如果采用包含库的办法，那么不管用什么办法都很难去定制这个库，部署它就更加困难了，因为你必须确保每个客户都拥有那个库。把代码包含到你自己的项目中带来的问题是，当上游被修改时，任何你进行的定制化的修改都很难归并。
>
> from [Pro Git](http://git-scm.com/book/zh/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97 "Pro Git")

## 使用 Git Submodule

在几个月前，我也遇到了这样的问题。

在利用 [Wheat][w] 搭建此站的时候，出现了一些特定的需求。随后我就在 [Wheat][w] 的源码上叮了当琅猛改了一通，可以发现这事不行啊！！改了这么一坨东西，不提交到版本控制里，岂不是太易失了。

于是，我就把 `npm install` 的全部 `node_modules` 一通 `git add` 了，就像下图那样，这代码提交量一下子就可观了。每次 `npm update` 了，就再提交一次，这反复搞了那么几次，总觉得这事有点不够文艺。文艺程序员都是怎么干的呢？搜索了一番，发现 `git submodule` 可完美解决啊。接着我就痛改前非啊，下图的红色倒三角就又出现了。

![Code Frequency](s3://ice.cube:code-frequency.png "Code Frequency")


### 新增 submodule

先 Fork 一份 [Wheat][w] 的代码，以获得写的权限。再通过 `git submodule add` 将 [Wheat][w] 加为子模块：

    $ git submodule add git@github.com:yashiro1899/wheat.git node_modules/wheat
    Cloning into 'node_modules/wheat'...
    remote: Counting objects: 717, done.
    remote: Compressing objects: 100% (416/416), done.
    remote: Total 717 (delta 343), reused 645 (delta 282)
    Receiving objects: 100% (717/717), 161.81 KiB | 53.00 KiB/s, done.
    Resolving deltas: 100% (343/343), done.
    Checking connectivity... done
    $ git status 
    # On branch master
    # Changes to be committed:
    #   (use "git reset HEAD <file>..." to unstage)
    #
    #       new file:   .gitmodules
    #       new file:   node_modules/wheat
    #

增加了一个.gitmodules文件，保存了项目 URL 和拉取到的本地子目录

    $ cat .gitmodules 
    [submodule "node_modules/wheat"]
            path = node_modules/wheat
            url = git@github.com:yashiro1899/wheat.git

以及 `node_modules/wheat` ，在上层仓库中被视为一个指向 `submodule` 仓库的一个提交。事实上，是一个包含着 `submodule` 仓库的所有代码，并作为一个独立 `git` 仓库存在的子目录

<uses-git-submodule/submodule1.diff>

### 更新 submodule

因为每个 `submodule` 都是独立工作的，可以分别 `cd` 到相应的目录下，执行 `git pull` 进行更新。也可以使用 `submodule` 的 `foreach` 一块来

    $ git submodule foreach --recursive git pull origin master
    Entering 'node_modules/codemirror'
    From git://github.com/marijnh/CodeMirror
     * branch            master     -> FETCH_HEAD
    Already up-to-date.
    Entering 'node_modules/wheat'
    From github.com:yashiro1899/wheat
     * branch            master     -> FETCH_HEAD
    Already up-to-date.


### 部署

接下来，就是把代码 `clone` 到服务器上部署，`git clone` 时不会自动把 `submodule` 一起 `clone` 过来，需要执行：

    git submodule init
    git submodule update --recursive

或合并为一行 `git submodule update --init --recursive`

要是加上 `--recursive` 参数，`git clone` 也可以把所有一起 `clone` 过来哦

    $ git clone --recursive git@github.com:yashiro1899/icecube.git
    Cloning into 'icecube'...
    remote: Counting objects: 2176, done.
    remote: Compressing objects: 100% (1286/1286), done.
    remote: Total 2176 (delta 827), reused 2118 (delta 769)
    Receiving objects: 100% (2176/2176), 5.33 MiB | 31.00 KiB/s, done.
    Resolving deltas: 100% (827/827), done.
    Checking connectivity... done
    Cloning into 'node_modules/wheat'...
    remote: Counting objects: 717, done.
    remote: Compressing objects: 100% (416/416), done.
    remote: Total 717 (delta 343), reused 645 (delta 282)
    Receiving objects: 100% (717/717), 161.81 KiB | 15.00 KiB/s, done.
    Resolving deltas: 100% (343/343), done.
    Checking connectivity... done

### 刪除 submodule

想删除 `submodule`，貌似 `git` 没给出便捷的指令啊，只能手动来了：

    $ git rm --cached node_modules/wheat && rm -rf node_modules/wheat/
    rm 'node_modules/wheat'

再有就是把 `.gitmodules` 的相关内容删除

<uses-git-submodule/submodule2.diff>

[w]: https://github.com/creationix/wheat "Wheat"

