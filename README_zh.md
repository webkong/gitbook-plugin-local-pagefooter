# gitbook-plugin-local-pagefooter

[English](./README.md) [简体中文](./README_zh.md)

自定义每篇文章的页脚，可以添加版权和文件的修订时间。

### 安装

```
npm install gitbook-plugin-local-pagefooter

或在book.json配置好之后,运行

gitbook install
```

### 使用

```
"plugins":{
	"local-pagefooter",
}
```

### 插件配置

```javascript
"local-pagefooter": {
  "copyright":"&copy someone",
  "islocal" : true, //是否使用本地时间还是utc时间
  "modify_label": "该文件修订时间：",
  "modify_format": "YYYY-MM-DD HH:mm:ss"
}
```

> copyright 和 modify_label 支持 html 代码
