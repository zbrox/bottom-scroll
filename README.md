# Bottom scroll

A jquery plugin for semi-fixed position scrolling, with a highly original name

# What's this about

A really simple jQuery plugin for manipulating elements when they go outside of the Y axis of the viewport.

I created this because I needed something simple to keep some buttons always visible no matter where you scrolled in the form (which was kinda tall).  
This plugin adds a class to the element when you scroll pass it. You can easily add a fixed position to it that way or any other shenanigans. Also there are two event triggers - one when the element is supposed to disappear from the viewport and one for coming back in it. This can be helpful when you want to do some other manipulations for positioning, animations or something completely different.

This is only for scrolling on the Y axis and doesn't take into account if the element escapes the viewport on the left or right.

# Sample usage

    $('#some-element').bottom_scroll();

    $('#some-element').bottom_scroll({
      css_class: 'some-class', // default is bottom-scroll
      out_of_viewport: function() {
        // do stuff in the context of the element
      },
      back_in_viewport: function() {
        // do stuff in the context of the element
      }
    });

# Demo

Soon.