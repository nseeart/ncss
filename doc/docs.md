## ncss教程

### nav
- [content](#content)
- [border](#border)
- [grid](#grid)
- [img](#img)
- [loading](#loading)
- [prompt](#prompt)

### content
文章内容

导入 _article.scss
```scss
import "layout/_article.scss"
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
    <ul>
        <li><i></i>字文字文字文字 li</li>
        <li><i></i>字文字文字文字 li
            <ul>
                <li><i></i>字文字文字文字 li</li>
                <li><i></i>字文字文字文字 li</li>
            </ul>
        </li>
    </ul>
</article>
```

result
<div class="result loading-container">
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
        <ul>
            <li><i></i>字文字文字文字 li</li>
            <li><i></i>字文字文字文字 li
                <ul>
                    <li><i></i>字文字文字文字 li</li>
                    <li><i></i>字文字文字文字 li</li>
                </ul>
            </li>
        </ul>
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
