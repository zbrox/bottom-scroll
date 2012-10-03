(function($) {
  $.fn.bottom_scroll = function(opts) {
    var options = $.extend({},
        {
          class_fixed: 'bottom-scroll',
          on_fixed: function(){},
          on_relative: function(){}
        },
        opts || {}
    );

    return this.each(function() {
      var $this = $(this);
      var $window = $(window);
      var buttons_position = $this.position().top + $this.outerHeight();

      var switch_classes = function() {
        var bottom_edge_position = $window.scrollTop() + $window.innerHeight();

        if (bottom_edge_position < buttons_position) {
          $this.addClass(options.class_fixed);
          options.on_fixed.call($this);
        } else {
          $this.removeClass(options.class_fixed);
          options.on_relative.call($this);
        }
      };

      switch_classes();

      $window.scroll(switch_classes).resize(switch_classes);
    });
  };
})(jQuery);