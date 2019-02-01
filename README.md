# gitbook-plugin-local-pagefooter

[English](./README.md) [简体中文](./README_zh.md)

Customize the footer of each article, you can add copyright and document reversion of time. The time can be local or UTC.

### Install

```
npm install gitbook-plugin-local-pagefooter

or in book.json

"plugins":{
	"local-pagefooter",
}
and run
gitbook install
```

### Useage

```
"plugins":{
	"local-pagefooter",
}
```

### Configuration

```javascript
"local-pagefooter": {
  "copyright":"&copy someone",
  "islocal" : true, // true/false
  "modify_label": "The document reversion time: ",
  "modify_format": "YYYY-MM-DD HH:mm:ss"
}
```

> fields copyright and modify_label support html code.
