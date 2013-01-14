Title: Mac OS 奇怪的“类”字
Author: Ice White
Date: Sun Jan 06 2013 15:34:34 GMT+0800 (CST)
Node: v0.8.16
Tags: Mac OS, iOS, unicode

有那么一天，我突然意识到 Mac OS 上的“类”字肿么如此奇怪，那多出来的点是神马情况。。。

![lei](s3://ice.cube:a1.png "on Mac OS")

## 奇怪的“类”字

唔系啊嘛，iOS 亦是如此。。。

![lei](s3://ice.cube:b1.png "on iOS")

纠结许久后，分别在它们的系统设置中发现了蛛丝马迹。我使用的默认言是英语，而接下来的顺序是“日本语”、“简体中文”。。。

![System Preferences](s3://ice.cube:a2.png "System Preferences")

![System Preferences](s3://ice.cube:b2.png "System Preferences")

“日本语”的优先级高过了“简体中文”，所以显示成了日本汉字。可为什么两种语言的文字使用了同一个编码呢？在网上看到了这样一段文字：

> 在 Unicode 制定过程中，像上面这样不同国家的同一个汉字（写法上稍有区别）是否应当编码为同一个字时， 引起了很大的争议。争议的最终结果，是两个字被赋予同一个编码。就这样，中文、日文、韩文中的所有汉字都被搜集整理到一起，填充到 Unicode 编码的 `0×4E00` 到 `0×9FFF` 的庞大 block 当中。这些字按照字形排列，不再区分哪个是中文字符，哪个是日文字符，哪个是韩文字符，统一叫做 “CJK Unified Ideographs”。

类似的汉字还有“才”、“具”、“画”、“角”、“骨”等等。这样，一个字符本身不具有了语言的属性，它到底是中文还是日文，取决于显示它的字体。就像下面显示的那样，在 LibreOffice 中两行分别输入前面提到的几个字，第一行应用日文字体（例如 Hiragino Kaku Gothic Pro），第二行应用中文字体（例如 STXihei）。。。

![in office](s3://ice.cube:c1.png "in office")

> Mac OS 按照系统的语言顺序依次选择语言对应的默认字体。日文默认字体为 Hiragino Kaku Gothic Pro、简体中文为 STXihei、繁体中文可能为 LiHei Pro Medium、韩文为 AppleGothic。在一个字体缺乏对应字的情况下会在下一个语言默认字体里寻找对应。英文系统的 Mac 默认的顺序是英文，日文，中文。    

> via [http://www.typeisbeautiful.com/2009/01/745](http://www.typeisbeautiful.com/2009/01/745 "Mac OS X 默认中文字体")

So，我的系统默认语言是英文，随之默认字体就是 Arial 神马的非中文字体，所以就依照系统设置中的优先顺序选择了日文字体喽。

