# gitbook-plugin-local-pagefooter

根据 [https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter](https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter)
改造，成支持本地时间的插件

* 插件配置

```javascript
"local-pagefooter": {
  "copyright":"&copy someone",
  "islocal" : true,
  "modify_label": "该文件修订时间：",
  "modify_format": "YYYY-MM-DD HH:mm:ss"
}
```

> copyright 和 modify_label 支持 html 代码
