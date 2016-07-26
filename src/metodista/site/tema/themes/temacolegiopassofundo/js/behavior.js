$(window).load(function() {

    if ($('.wrapper').width() >= 760) {

        var menu = $("#main-navigation");
        var lis = menu[0].getElementsByTagName('li');
        for (var i = 0, li; li = lis[i]; i++) {
            var link = li.getElementsByTagName('a')[0];
            if (link) {
                link.onfocus = function() {
                    var ul = this.parentNode.getElementsByTagName('ul')[0];
                    if (ul) {
                        this.parentNode.style.background = 'rgba(93, 80, 166, 0.9)';
                        var alink = this.parentNode.getElementsByTagName('a')[0]
                        alink.style.color = '#FFF';
                        ul.style.display = 'block';
                        ul.style.visibility = 'visible';
                        ul.style.background = 'rgba(93, 80, 166, 0.9)';
                        ul.style.opacity = '1';
                        ul.style.padding = '5px 0';
                        ul.style.font = '13px';
                        ul.style.margin = '0';
                        ul.style.position = 'absolute';
                        ul.style.width = '200px';
                    }
                    $('div#btnav ul#navigation').css('overflow', 'visible');
                }
                var ul = link.parentNode.getElementsByTagName('ul')[0];
                if (ul) {
                    var ullinks = ul.getElementsByTagName('a');
                    var ullinksqty = ullinks.length;
                    var lastItem = ullinks[ullinksqty - 1];
                    if (lastItem) {
                        lastItem.onblur = function() {
                            this.parentNode.parentNode.parentNode.style.background = '';
                            this.parentNode.parentNode.parentNode.getElementsByTagName('a')[0].style.color = '';
                            this.parentNode.parentNode.style.display = '';
                            this.parentNode.parentNode.style.visibility = '';
                            this.parentNode.parentNode.style.padding = '';
                            this.parentNode.parentNode.style.padding = '';
                            this.parentNode.parentNode.style.font = '';
                            this.parentNode.parentNode.style.margin = '';
                            this.parentNode.parentNode.style.position = '';
                            this.parentNode.parentNode.style.width = '';
                        }
                    }
                }
            }
        }
        jQuery('*').removeAttr("tabindex")//;
        var valor = 1;
        jQuery("#searchGadget").attr("tabindex", valor);
        jQuery("#navigation li a").attr("tabindex", valor + 1);

        var len = $('#navigation > li a').length;

        jQuery("logo a").attr("tabindex", len + 1);

    }
  
});

