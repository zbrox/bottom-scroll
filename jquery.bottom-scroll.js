(function($) {
  $.fn.bottom_scroll = function(opts) {
    var options = $.extend({},
        {
          css_class: 'bottom-scroll',
          out_of_viewport: function(){},
          back_in_viewport: function(){}
        },
        opts || {}
    );

    return this.each(function() {
      var $this = $(this);
      var $window = $(window);
      var element_position = $this.position().top + $this.outerHeight();

      var switch_classes = function() {
        var bottom_edge_position = $window.scrollTop() + $window.innerHeight();

        if (bottom_edge_position < element_position) {
          if ( ! $this.hasClass(options.css_class)) {
            $this.addClass(options.css_class);
            options.out_of_viewport.call($this);
          }
        } else {
          if ($this.hasClass(options.css_class)) {
            $this.removeClass(options.css_class);
            options.back_in_viewport.call($this);
          }
        }
      };

      switch_classes();

      $window.scroll(switch_classes).resize(switch_classes);
    });
  };
})(jQuery);