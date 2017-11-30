var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = 'powered by Gitbook',
          _islocal = true;
      if(this.options.pluginsConfig['local-pagefooter']) {
        _label = this.options.pluginsConfig['local-pagefooter']['modify_label'] || _label;
        _format = this.options.pluginsConfig['local-pagefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['local-pagefooter']['copyright'];
        _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var str = ' \n\n<footer class="page-footer">' + _copy +
        '<span class="footer-modification">' +
        _label +
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>'
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function(d, format) {
      var _islocal = this.options.pluginsConfig['local-pagefooter']['islocal'] || _islocal;
      var time = '';
      if (_islocal){
        time = moment(d).local().format(format)
      }else{
        time = moment(d).format(format)
      }
      return time
    }
  }
};
