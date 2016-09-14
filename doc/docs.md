### nav

- [content](#content)
- [border](#border)
- [grid](#grid)
 - [grid-base](#grid-base)
 - [grid-li](#grid-li)
 - [grid-table](#grid-table)
 - [grid-flex](#grid-flex)
- [img](#img)
- [loading](#loading)
- [prompt](#prompt)
 - [auto](#auto)
 - [around](#around)
 - [horizontal](#horizontal)
- [form](#form)
 - [radio](#form)
 - [checkbox](#checkbox)
 - [toggle](#toggle)

### content
文章内容

导入 _article.scss
```scss
  @import "layout/_article.scss";
```

html 标题
```html
<header class="title">
    <h1>我是文章标题</h1>
    <div class="meta">
        <time>11/9/2016</time>
        ...   //写作者...
    </div>
</header>
```

html 内容
```html
<article class="content">
    <h2>标题 h2</h2>
    <h3>标题 h3</h3>
    <h4>标题 h4</h4>
    <h5>标题 h5</h5>
    <h6>标题 h6</h6>
    <b>文字 b</b><br/>
    <strong>文字 strong</strong><br/>
    <small>文字 small</small>
    <br/>
    <p>文字文字字<sub>文字 sub</sub>文字文文字<sup>文字文 sup</sup>字文字文</p>
    <p>文字文<code>字文字文</code>字文文字文字文字文字文字文字</p>
    <blockquote>
        <p>字文字文字文字文字文字文字文字文字文字文字文字文字字文字文字文字文字文字文字文</p>
    </blockquote>
    <p>文字文字文字文字:<q>q字文字文字文文字文字文字文字q</q>字字文字文字</p>
</article>
```

result
<div class="result">
    <header class="title">
        <h1>我是文章标题</h1>
        <div class="meta">
            <time>11/9/2016</time>
        </div>
    </header>
    <article class="content">
        <h2>标题 h2</h2>
        <h3>标题 h3</h3>
        <h4>标题 h4</h4>
        <h5>标题 h5</h5>
        <h6>标题 h6</h6>
        <b>文字 b</b><br/>
        <strong>文字 strong</strong><br/>
        <small>文字 small</small>
        <br/>
        <p>文字文字字<sub>文字 sub</sub>文字文文字<sup>文字文 sup</sup>字文字文</p>
        <p>文字文<code>字文字文</code>字文文字文字文字文字文字文字</p>
        <blockquote>
            <p>字文字文字文字文字文字文字文字文字文字文字文字文字字文字文字文字文字文字文字文</p>
        </blockquote>
        <p>文字文字文字文字:<q>q字文字文字文文字文字文字文字q</q>字字文字文字</p>
    </article>
</div>

### border
高清屏1px的处理
- border-top:上
- border-right:右
- border-bottom:下
- border-left:左
- border-vertical:垂直
- border-horizontal:水平
- border-around:四周

html
```html
<div class="item border-top">top</div>
```

result
<div class="result">
    <div class="border-top border-item">top</div>
    <div class="border-right border-item">right</div>
    <div class="border-bottom border-item">bottom</div>
    <div class="border-left border-item">left</div>
    <div class="border-vertical border-item">vertical</div>
    <div class="border-horizontal border-item">horizontal</div>
    <div class="border-around border-item">around</div>
</div>

### grid
删格系统
- grid/base
- grid/flex
- grid/li
- grid/table

> row 行 
<br/>col 列
##### col-x-y : 
- x 是分母2,3,4,5,最大是5
- y 是分子1,2,3,4

#### grid-base
html
```html
<div class="row text-center grid-border">
    <div class="col-2-1">50%</div>
    <div class="col-2-1">50%</div>
</div>
<div class="row text-center grid-border">
    <div class="col-3-1">33.333%</div>
    <div class="col-3-2">66.666%</div>
</div>
<div class="row text-center grid-border">
    <div class="col-4-1">25%</div>
    <div class="col-4-3">75%</div>
</div>
<div class="row text-center grid-border">
    <div class="col-5-1">20%</div>
    <div class="col-5-4">80%</div>
</div>
<div class="row text-center grid-border">
    <div class="col-5-2">40%</div>
    <div class="col-5-3">60%</div>
</div>
```
result
<div class="result">
    <div class="row text-center grid-border">
        <div class="col-2-1">50%</div>
        <div class="col-2-1">50%</div>
    </div>
    <div class="row text-center grid-border">
        <div class="col-3-1">33.333%</div>
        <div class="col-3-2">66.666%</div>
    </div>
    <div class="row text-center grid-border">
        <div class="col-4-1">25%</div>
        <div class="col-4-3">75%</div>
    </div>
    <div class="row text-center grid-border">
        <div class="col-5-1">20%</div>
        <div class="col-5-4">80%</div>
    </div>
    <div class="row text-center grid-border">
        <div class="col-5-2">40%</div>
        <div class="col-5-3">60%</div>
    </div>
</div>
 
#### grid-li 

等分
```html
<ul class="row-li-2 text-center grid-border">
    <li>50%</li>
    <li>50%</li>
</ul>
<ul class="row-li-3 text-center grid-border">
    <li>33.333%</li>
    <li>33.333%</li>
    <li>33.333%</li>
</ul>
<ul class="row-li-4 text-center grid-border">
    <li>25%</li>
    <li>25%</li>
    <li>25%</li>
    <li>25%</li>
</ul>
<ul class="row-li-5 text-center grid-border">
    <li>20%</li>
    <li>20%</li>
    <li>20%</li>
    <li>20%</li>
    <li>20%</li>
</ul>
```
result
<div class="result">
    <ul class="row-li-2 text-center grid-border">
        <li>50%</li>
        <li>50%</li>
    </ul>
    <ul class="row-li-3 text-center grid-border">
        <li>33.333%</li>
        <li>33.333%</li>
        <li>33.333%</li>
    </ul>
    <ul class="row-li-4 text-center grid-border">
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
    </ul>
    <ul class="row-li-5 text-center grid-border">
        <li>20%</li>
        <li>20%</li>
        <li>20%</li>
        <li>20%</li>
        <li>20%</li>
    </ul>
</div>

#### grid-table 

等分
html
```html
<div class="row-table text-center grid-border">
    <div class="col">100%</div>
</div>
<div class="row-table text-center grid-border">
    <div class="col">50%</div>
    <div class="col">50%</div>
</div>
<div class="row-table text-center grid-border">
    <div class="col">33.333%</div>
    <div class="col">33.333%</div>
    <div class="col">33.333%</div>
</div>
<div class="row-table text-center grid-border">
    <div class="col">25%</div>
    <div class="col">25%</div>
    <div class="col">25%</div>
    <div class="col">25%</div>
</div>
<div class="row-table text-center grid-border">
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
</div>
<div class="row-table text-center grid-border">
    <div class="col">16.6%</div>
    <div class="col">16.6%</div>
    <div class="col">16.6%</div>
    <div class="col">16.6%</div>
    <div class="col">16.6%</div>
    <div class="col">16.6%</div>
</div>
```
result
<div class="result">
    <div class="row-table text-center grid-border">
        <div class="col">100%</div>
    </div>
    <div class="row-table text-center grid-border">
        <div class="col">50%</div>
        <div class="col">50%</div>
    </div>
    <div class="row-table text-center grid-border">
        <div class="col">33.333%</div>
        <div class="col">33.333%</div>
        <div class="col">33.333%</div>
    </div>
    <div class="row-table text-center grid-border">
        <div class="col">25%</div>
        <div class="col">25%</div>
        <div class="col">25%</div>
        <div class="col">25%</div>
    </div>
    <div class="row-table text-center grid-border">
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
    </div>
    <div class="row-table text-center grid-border">
        <div class="col">16.6%</div>
        <div class="col">16.6%</div>
        <div class="col">16.6%</div>
        <div class="col">16.6%</div>
        <div class="col">16.6%</div>
        <div class="col">16.6%</div>
    </div>
</div>

#### grid-flex

html
```html
<div class="row-flex text-center grid-border">
    <div class="col">50%</div>
    <div class="col">50%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col">33.333%</div>
    <div class="col">33.333%</div>
    <div class="col">33.333%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col">25%</div>
    <div class="col">25%</div>
    <div class="col">25%</div>
    <div class="col">25%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
    <div class="col">20%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col-1-3">33.333%</div>
    <div class="col-2-3">66.666%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col-1-4">25%</div>
    <div class="col-3-4">75%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col-1-5">20%</div>
    <div class="col-4-5">80%</div>
</div>
<div class="row-flex text-center grid-border">
    <div class="col-2-5">40%</div>
    <div class="col-3-5">60%</div>
</div>
```
result
<div class="result">
    <div class="row-flex text-center grid-border">
        <div class="col">50%</div>
        <div class="col">50%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col">33.333%</div>
        <div class="col">33.333%</div>
        <div class="col">33.333%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col">25%</div>
        <div class="col">25%</div>
        <div class="col">25%</div>
        <div class="col">25%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
        <div class="col">20%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col-1-3">33.333%</div>
        <div class="col-2-3">66.666%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col-1-4">25%</div>
        <div class="col-3-4">75%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col-1-5">20%</div>
        <div class="col-4-5">80%</div>
    </div>
    <div class="row-flex text-center grid-border">
        <div class="col-2-5">40%</div>
        <div class="col-3-5">60%</div>
    </div>
</div>

#### img

##### img-inner
html
```html
<div class="img-inner"></div>
```

##### img-1-2
html
```html
<div class="img-inner img-1-2">
```

##### img-1-3
html
```html
<div class="img-inner img-1-3">
```
result
<div class="result">
    <div class="img-inner img-1-3"></div>
</div>

##### row-li-2
html
```html
<ul class="row-li-2 row-li-space text-center grid-border">
    <li>
        <div class="img-inner"></div>
    </li>
    <li>
        <div class="img-inner"></div>
    </li>
</ul>
```
result
<div class="result">
    <ul class="row-li-2 row-li-space text-center grid-border">
        <li>
            <div class="img-inner"></div>
        </li>
        <li>
            <div class="img-inner"></div>
        </li>
    </ul>
</div>

##### row-li-4
html
```html
<ul class="row-li-4 row-li-space text-center grid-border">
    <li>
        <div class="img-inner"></div>
    </li>
    <li>
        <div class="img-inner"></div>
    </li>
    <li>
        <div class="img-inner"></div>
    </li>
    <li>
        <div class="img-inner"></div>
    </li>
</ul>
```
result
<div class="result">
    <ul class="row-li-4 row-li-space text-center grid-border">
        <li>
            <div class="img-inner"></div>
        </li>
        <li>
            <div class="img-inner"></div>
        </li>
        <li>
            <div class="img-inner"></div>
        </li>
        <li>
            <div class="img-inner"></div>
        </li>
    </ul>
</div>

### loading
配置在 config/_loading.scss
```scss
$loading-width:3rem; //外盒子大小
$loading-radius:.25rem; //外盒子圆角
$loading-bgcolor:rgba(0,0,0,.5); ////外盒子背景
$loading-color:#fff; //loading颜色
```
html
```html
<div class="loading loading-center">
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```
css 用于外盒子大小 <code> .loading-center </code> 是自己定义的
```css
.loading-center{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
```
result
<div class="result loading-container">
    <div class="loading loading-center">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>

#### prompt

##### auto
上下左右都自适应

html
```html
<div class="prompt">
    <div class="prompt-mask"></div>
    <div class="prompt-box prompt-auto">
        <div class="prompt-content"></div>
    </div>
</div>
```
resutl
<div class="result prompt-window">
    <div class="prompt">
        <div class="prompt-mask"></div>
        <div class="prompt-box prompt-auto">
            <div class="prompt-content"></div>
        </div>
    </div>
</div>

##### around
上下左右边距相等

html
```html
<div class="prompt">
    <div class="prompt-mask"></div>
    <div class="prompt-box prompt-around">
        <div class="prompt-content"></div>
    </div>
</div>
```
resutl
<div class="result prompt-window">
    <div class="prompt">
        <div class="prompt-mask"></div>
        <div class="prompt-box prompt-around">
            <div class="prompt-content"></div>
        </div>
    </div>
</div>

##### horizontal
上下自适应,左右边距相等

html
```html
<div class="prompt">
    <div class="prompt-mask"></div>
    <div class="prompt-box prompt-horizontal">
        <div class="prompt-content"></div>
    </div>
</div>
```
resutl
<div class="result prompt-window">
    <div class="prompt">
        <div class="prompt-mask"></div>
        <div class="prompt-box prompt-horizontal">
            <div class="prompt-content"></div>
        </div>
    </div>
</div>

### form

#### radio
##### radio-fill
html
```html
<div class="row border-bottom padding-lr">
    <label for="men" class="radio-item radio-fill">
        <input type="radio" checked="checked" name="sex" value="men" id="men"/>
        <span class="radio-icon left"></span>
        <span class="radio-text auto text-right">男性</span>
    </label>
</div>
<div class="row border-bottom padding-lr">
    <label for="wemen" class="radio-item radio-fill">
        <input type="radio" name="sex" value="wemen" id="wemen"/>
        <span class="radio-icon left"></span>
        <span class="radio-text auto text-right">女性</span>
    </label>
</div>
```

result
<div class="result">
    <div class="row border-bottom padding-lr">
        <label for="men" class="radio-item radio-fill">
            <input type="radio" checked="checked" name="sex" value="men" id="men"/>
            <span class="radio-icon left"></span>
            <span class="radio-text auto text-right">男性</span>
        </label>
    </div>
    <div class="row border-bottom padding-lr">
        <label for="wemen" class="radio-item radio-fill">
            <input type="radio" name="sex" value="wemen" id="wemen"/>
            <span class="radio-icon left"></span>
            <span class="radio-text auto text-right">女性</span>
        </label>
    </div>
</div>

##### radio-inline
html
```html
<div class="row border-bottom padding-lr">
    <div class="col col-2-1 radio-col">
        <label for="men-inline" class="radio-item left radio-inline">
            <input type="radio" checked="checked" name="sex-inline" value="men" id="men-inline"/>
            <span class="radio-icon"></span>
            <span class="radio-text">男性</span>
        </label>
    </div>
    <div class="col col-2-1 radio-col">
        <label for="wemen-inline" class="radio-item left radio-inline">
            <input type="radio" name="sex-inline" value="wemen" id="wemen-inline"/>
            <span class="radio-icon"></span>
            <span class="radio-text">女性</span>
        </label>
    </div>
</div>
```

result
<div class="result">
    <div class="row border-bottom padding-lr">
        <div class="col col-2-1 radio-col">
            <label for="men-inline" class="radio-item left radio-inline">
                <input type="radio" checked="checked" name="sex-inline" value="men" id="men-inline"/>
                <span class="radio-icon"></span>
                <span class="radio-text">男性</span>
            </label>
        </div>
        <div class="col col-2-1 radio-col">
            <label for="wemen-inline" class="radio-item left radio-inline">
                <input type="radio" name="sex-inline" value="wemen" id="wemen-inline"/>
                <span class="radio-icon"></span>
                <span class="radio-text">女性</span>
            </label>
        </div>
    </div>
</div>

#### checkbox
##### checkbox-fill
html
```html
<div class="row border-bottom">
    <label for="agree5" class="checkbox-item checkbox-fill">
        <input type="checkbox" checked name="agree" id="agree5"/>
        <span class="checkbox-icon left"></span>
        <span class="checkbox-text auto text-right">同意</span>
    </label>
</div>
<div class="row border-bottom">
    <label for="agree6" class="checkbox-item  checkbox-fill">
        <input type="checkbox" name="agree" id="agree6"/>
        <span class="checkbox-icon left"></span>
        <span class="checkbox-text auto text-right">同意</span>
    </label>
</div>
<div class="row border-bottom">
    <label for="agree7" class="checkbox-item  checkbox-fill">
        <input type="checkbox" name="agree" id="agree7"/>
        <span class="checkbox-icon left"></span>
        <span class="checkbox-text auto text-right">同意</span>
    </label>
</div>
```
result
<div class="result">
    <div class="row border-bottom padding-lr">
        <label for="agree5" class="checkbox-item checkbox-fill">
            <input type="checkbox" checked name="agree" id="agree5"/>
            <span class="checkbox-icon left"></span>
            <span class="checkbox-text auto text-right">同意</span>
        </label>
    </div>
    <div class="row border-bottom padding-lr">
        <label for="agree6" class="checkbox-item  checkbox-fill">
            <input type="checkbox" name="agree" id="agree6"/>
            <span class="checkbox-icon left"></span>
            <span class="checkbox-text auto text-right">同意</span>
        </label>
    </div>
    <div class="row border-bottom padding-lr">
        <label for="agree7" class="checkbox-item  checkbox-fill">
            <input type="checkbox" name="agree" id="agree7"/>
            <span class="checkbox-icon left"></span>
            <span class="checkbox-text auto text-right">同意</span>
        </label>
    </div>
</div>

##### checkbox-inline
html
```html
<div class="row border-bottom checkbox-inline">
    <div class="col col-4-1">
        <label for="agree1" class="checkbox-item">
            <input type="checkbox" name="agree" id="agree1"/>
            <span class="checkbox-icon"></span>
            <span class="checkbox-text">同意</span>
        </label>
    </div>
    <div class="col col-4-1">
        <label for="agree2" class="checkbox-item">
            <input type="checkbox" checked="checked" name="agree" id="agree2"/>
            <span class="checkbox-icon"></span>
            <span class="checkbox-text">同意</span>
        </label>
    </div>
    <div class="col col-4-1">
        <label for="agree3" class="checkbox-item">
            <input type="checkbox" checked="checked" name="agree" id="agree3"/>
            <span class="checkbox-icon"></span>
            <span class="checkbox-text">同意</span>
        </label>
    </div>
    <div class="col col-4-1">
        <label for="agree4" class="checkbox-item">
            <input type="checkbox" checked="checked" name="agree" id="agree4"/>
            <span class="checkbox-icon"></span>
            <span class="checkbox-text">同意</span>
        </label>
    </div>
</div>
```
result
<div class="result">
    <div class="row border-bottom checkbox-inline padding-lr">
        <div class="col col-4-1">
            <label for="agree1" class="checkbox-item">
                <input type="checkbox" name="agree" id="agree1"/>
                <span class="checkbox-icon"></span>
                <span class="checkbox-text">同意</span>
            </label>
        </div>
        <div class="col col-4-1">
            <label for="agree2" class="checkbox-item">
                <input type="checkbox" checked="checked" name="agree" id="agree2"/>
                <span class="checkbox-icon"></span>
                <span class="checkbox-text">同意</span>
            </label>
        </div>
        <div class="col col-4-1">
            <label for="agree3" class="checkbox-item">
                <input type="checkbox" checked="checked" name="agree" id="agree3"/>
                <span class="checkbox-icon"></span>
                <span class="checkbox-text">同意</span>
            </label>
        </div>
        <div class="col col-4-1">
            <label for="agree4" class="checkbox-item">
                <input type="checkbox" checked="checked" name="agree" id="agree4"/>
                <span class="checkbox-icon"></span>
                <span class="checkbox-text">同意</span>
            </label>
        </div>
    </div>
</div>

#### toggle
html
```html
```
result
<div class="result">
    <div class="row border-bottom toggle-row">
        <div class="col right">
            <label for="toggle-a" class="toggle right">
                <input type="checkbox" checked name="toggle-a" id="toggle-a"/>
                <div class="track">
                    <div class="handle"></div>
                </div>
            </label>
        </div>
        <div class="col auto title">下载图片 a</div>
    </div>
    <div class="row border-bottom toggle-row">
        <div class="col right">
            <label for="toggle-b" class="toggle toggle-b right">
                <input type="checkbox" checked name="toggle-b" id="toggle-b"/>
                <div class="track">
                    <div class="handle"></div>
                </div>
            </label>
        </div>
        <div class="col auto title">下载图片 b</div>
    </div>
    <div class="row border-bottom toggle-row">
        <div class="col right">
            <label for="toggle-c" class="toggle toggle-c right">
                <input type="checkbox" name="toggle-c" id="toggle-c"/>
                <div class="track">
                    <div class="handle"></div>
                </div>
            </label>
        </div>
        <div class="col auto title">下载图片 c</div>
    </div>
</div>