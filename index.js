(function () {
  
  'use strict';

  function browserInfo() {
    
    var userAgent = navigator.userAgent;
    
    return {
      
      'browser':   userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],

      'getBrowser': function getBrowser() {
        var browser = this.browser;
        
        if ( this.browser[1] === 'Trident' ) browser = this.isIe();
                
        if ( this.browser[1] === 'Chrome' ) {
          if ( this.isEdge() )  browser = this.isEdge();
          if ( this.isOpera() ) browser = this.isOpera();
        }

        return {
          complet : browser[0],
          name    : browser[1],
          version : browser[2]
        }        
      },

      'isIe': function isIe() {
        var browser = this.browser;
        return {
          complet : browser[0],
          name    : 'ie',
          version : browser[2]
        }
      },

      'isEdge': function isEdge() {
        var edge = userAgent.match(/(edge(?=\/))\/?\s*(\d+)/i) || [];
        if ( edge[1] === 'Edge' ) return edge;
      },

      'isOpera': function isOpera() {
        var opera = userAgent.match(/(OPR(?=\/))\/?\s*(\d+)/i) || [];
        if ( opera[1] === 'OPR' ) return opera;
      },

      addBrowser: function addBrowser () {
        var browser = browserInfo().getBrowser().name;
        $('body').addClass( browser.toLowerCase() );
      }
    }
  }

  console.log(browserInfo().getBrowser());
})();