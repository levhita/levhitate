/** Levhitate (as in levitation) an element increasing and decreasing his paddings
using and the standard jquery animate functions.

$('a').levhitate(); //Standard 20px range in 2 seconds cycles
$('a').levhitate({range:40, speed:1000}) // overwrites range and speed
$('a').levhitate({stop:true}) // Current cycle will continue until it ends, and an animation to initial state will run.

Only works well in block elements, best used to animate levhita's logo on his homepage.

@TODO: Right now it matchs ands creates a single interval for the whole collection
need to change it to individual animations so we can stop individual elements.
**/

(function ( $ ) {

  $.fn.levhitate = function(options) {
    var opts = $.extend({}, $.fn.levhitate.settings, options )

    if(opts.stop==true){
      //Stop the levitation, reseting to original state and stoping interval
      clearInterval(this.data('lev_interval'));
      this.data('lev_stop', true);
      return this;
    }

    // Gets and Save original position data so we restore it later
    opts.padding_top = parseInt(this.css('padding-top'));
    opts.padding_bottom = parseInt(this.css('padding-bottom'));

    this.data('lev_padding-top', opts.padding_top);
    this.data('lev_padding-bottom', opts.padding_bottom);
    
    // Give the element room to levhitate
    this.animate({'padding-top': opts.padding_top+opts.range}, opts.speed*.8);
    
    
    var element = this;
    var interval = setInterval(function() {
      applyLevitation(element, opts);  
    }, opts.speed);

    //Save interval so we can stop it later
    this.data('lev_interval', interval);
        
    return this;
  };
  
  function applyLevitation(element, opts){
    $(element).animate({
        'padding-top': opts.padding_top,
        'padding-bottom': opts.padding_bottom+opts.range
      }, opts.speed/2, function(){
        $(element).animate({
          'padding-top': opts.padding_top+opts.range,
          'padding-bottom': opts.padding_bottom
        }, opts.speed/2,function() {
            if($(element).data('lev_stop')==true){
              //Stop signal given, clean
              $(element).animate({
                'padding-top': $(element).data('lev_padding-top'),
                'padding-bottom': $(element).data('lev_padding-bottom')
              },opts.speed/2);
              $(element).removeData('lev_stop');
              $(element).removeData('lev_padding_top');
              $(element).removeData('lev_padding_bottom');
              $(element).removeData('lev_interval');
            }
          }
        );
      });
  }
  
  $.fn.levhitate.settings = {
    range: 20,
    speed: 2000
  };

}( jQuery ));