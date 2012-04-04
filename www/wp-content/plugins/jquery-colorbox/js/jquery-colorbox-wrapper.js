/**
 * @package Techotronic
 * @subpackage jQuery Colorbox
 *
 * @since 3.2
 * @author Arne Franken
 * @author (Contributor) Fabian Wolf (http://usability-idealist.de/)
 * @author (Contributor) Jason Stapels (jstapels@realmprojects.com)
 *
 * Colorbox Javascript
 */
var COLORBOX_INTERNAL_LINK_PATTERN = /^#.*/;
var COLORBOX_SUFFIX_PATTERN = /\.(?:jpe?g|gif|png|bmp)/i;
var COLORBOX_MANUAL = "colorbox-manual";
var COLORBOX_OFF_CLASS = ".colorbox-off";
var COLORBOX_LINK_CLASS = ".colorbox-link";
var COLORBOX_OFF = "colorbox-off";
var COLORBOX_CLASS_MATCH = "colorbox-[0-9]+";

/**
 * This block calls all functions on page load.
 */
jQuery(document).ready(function() {

  //check if config JavaScript was successfully inserted. Load defaults otherwise.
  if(!(typeof jQueryColorboxSettingsArray == 'object')) {
    jQueryColorboxSettingsArray = getColorboxConfigDefaults();
  }


  if (jQueryColorboxSettingsArray.autoColorboxJavaScript == "true") {
    colorboxAddManualClass();
  }
  if (jQueryColorboxSettingsArray.colorboxAddClassToLinks == "true") {
    colorboxAddClassToLinks();
  }
  if (jQueryColorboxSettingsArray.autoHideFlash == "true") {
    colorboxHideFlash();
    colorboxShowFlash();
  }
  colorboxSelector();
});

/**
 * colorboxShowFlash
 *
 * show embedded flash objects when Colorbox closes
 */
(function(jQuery) {
  colorboxShowFlash = function() {
    jQuery(document).bind('cbox_closed', function() {
      var flashObjects = document.getElementsByTagName("object");
      for (i = 0; i < flashObjects.length; i++) {
        flashObjects[i].style.visibility = "visible";
      }
      var flashEmbeds = document.getElementsByTagName("embed");
      for (i = 0; i < flashEmbeds.length; i++) {
        flashEmbeds[i].style.visibility = "visible";
      }
    });
  }
})(jQuery);

// colorboxShowFlash()

/**
 * colorboxHideFlash
 *
 * hide embedded flash objects when Colorbox opens
 */
(function(jQuery) {
  colorboxHideFlash = function() {
    jQuery(document).bind('cbox_open', function() {
      var flashObjects = document.getElementsByTagName("object");
      for (i = 0; i < flashObjects.length; i++) {
        flashObjects[i].style.visibility = "hidden";
      }
      var flashEmbeds = document.getElementsByTagName("embed");
      for (i = 0; i < flashEmbeds.length; i++) {
        flashEmbeds[i].style.visibility = "hidden";
      }
    });
  }
})(jQuery);

// colorboxHideFlash()

/**
 * colorboxAddClassToLinks
 *
 * add colorbox-link to anchor tags
 */
(function(jQuery) {
  colorboxAddClassToLinks = function() {
    jQuery("a:not(:contains(img))").each(function(index, obj) {
      var $link = jQuery(obj);
      var $linkClass = $link.attr("class");
      if ($linkClass !== undefined && !$linkClass.match('colorbox')) {
        var $linkHref = $link.attr("href");
        if ($linkHref !== undefined && jQuery(obj).attr("href").match(COLORBOX_SUFFIX_PATTERN)) {
          $link.addClass('colorbox-link');
        }
      }

    });
  }
})(jQuery);

// colorboxAddClassToLinks()

/**
 * colorboxAddManualClass
 *
 * add colorbox-manual to ALL img tags
 */
(function(jQuery) {
  colorboxAddManualClass = function() {
    jQuery("img").each(function(index, obj) {
      var $img = jQuery(obj);
      var $imgClass = $img.attr("class");
      if ($imgClass == undefined || !$imgClass.match('colorbox')) {
        $img.addClass('colorbox-manual');
      }
    });
  }
})(jQuery);

// colorboxAddManualClass()

/**
 * colorboxSelector
 *
 * call colorboxImage on all "a" elements that have a nested "img"
 */
(function(jQuery) {
  colorboxSelector = function() {
    jQuery("a:has(img[class*=colorbox-]):not(.colorbox-off)").each(function(index, obj) {
      //create local copy of Colorbox array so that modifications can be made for every link
      ColorboxLocal = jQuery.extend(true,{},jQueryColorboxSettingsArray);
      //set variables for images
      ColorboxLocal.colorboxMaxWidth = ColorboxLocal.colorboxImageMaxWidth;
      ColorboxLocal.colorboxMaxHeight = ColorboxLocal.colorboxImageMaxHeight;
      ColorboxLocal.colorboxHeight = ColorboxLocal.colorboxImageHeight;
      ColorboxLocal.colorboxWidth = ColorboxLocal.colorboxImageWidth;
      var $linkHref = jQuery(obj).attr("href");
      if ($linkHref !== undefined && $linkHref.match(COLORBOX_SUFFIX_PATTERN)) {
        colorboxImage(index, obj)
      } else {
        //TODO: does not work, every link from an image will be opened in a colorbox...
        //colorboxLink(index, obj,$linkHref)
      }
    });

    jQuery("a[class*=colorbox-link]").each(function(index, obj) {
      //create local copy of Colorbox array so that modifications can be made for every link
      ColorboxLocal = jQuery.extend(true,{},jQueryColorboxSettingsArray);
      var $linkHref = jQuery(obj).attr("href");
      if ($linkHref !== undefined) {
        colorboxLink(index, obj,$linkHref)
      }
    });
  }
})(jQuery);

// colorboxSelector()

/**
 * colorboxImage
 *
 * selects only links that point to images and sets necessary variables
 */
(function(jQuery) {
  colorboxImage = function(index, obj) {
    var $image = jQuery(obj).find("img:first");
    //check if the link has a colorbox class
    var $linkClasses = jQuery(obj).attr("class");
    if ($linkClasses !== undefined) {
      ColorboxLocal.colorboxGroupId = $linkClasses.match(COLORBOX_CLASS_MATCH) || $linkClasses.match(COLORBOX_MANUAL);
    }
    if (!ColorboxLocal.colorboxGroupId) {
      // link does not have colorbox class. Check if image has colorbox class.
      var $imageClasses = $image.attr("class");
      if ($imageClasses !== undefined && !$imageClasses.match(COLORBOX_OFF)) {
        //groupId is either the automatically created colorbox-123 or the manually added colorbox-manual
        ColorboxLocal.colorboxGroupId = $imageClasses.match(COLORBOX_CLASS_MATCH) || $imageClasses.match(COLORBOX_MANUAL);
      }
      //only call ColorboxLocal if there is a groupId for the image
      if (ColorboxLocal.colorboxGroupId) {
        //convert groupId to string and lose "colorbox-" for easier use
        ColorboxLocal.colorboxGroupId = ColorboxLocal.colorboxGroupId.toString().split('-')[1];

        //if groudId is colorbox-manual, set groupId to "nofollow" so that images are not grouped
        if (ColorboxLocal.colorboxGroupId === "manual") {
          ColorboxLocal.colorboxGroupId = "nofollow";
        }
        //the title of the img is used as the title for the Colorbox.
        var $imageTitle = $image.attr("title");
        if ($imageTitle !== undefined) {
          ColorboxLocal.colorboxTitle = $imageTitle;
        }
        colorboxWrapper(obj);
      }
    }
  }
})(jQuery);

// colorboxImage()

/**
 * colorboxLink
 *
 * sets necessary variables
 */
(function(jQuery) {
  colorboxLink = function(index, obj,$linkHref) {
    //Colorbox links should not be grouped
    ColorboxLocal.colorboxGroupId = "nofollow";

    var $link = jQuery(obj);
    //the title of the link is used as the title for the Colorbox
    var $linkTitle = $link.attr("title");
    if ($linkTitle !== undefined) {
      ColorboxLocal.colorboxTitle = $linkTitle;
    } else {
      ColorboxLocal.colorboxTitle = '';
    }

    // already checked for ($linkHref !== undefined) before calling this method
    if ($linkHref.match(COLORBOX_SUFFIX_PATTERN)) {
      //set variables for images
      ColorboxLocal.colorboxMaxWidth = ColorboxLocal.colorboxImageMaxWidth;
      ColorboxLocal.colorboxMaxHeight = ColorboxLocal.colorboxImageMaxHeight;
      ColorboxLocal.colorboxHeight = ColorboxLocal.colorboxImageHeight;
      ColorboxLocal.colorboxWidth = ColorboxLocal.colorboxImageWidth;
    } else {
      //set variables for non-images
      ColorboxLocal.colorboxMaxWidth = false;
      ColorboxLocal.colorboxMaxHeight = false;
      ColorboxLocal.colorboxHeight = ColorboxLocal.colorboxLinkHeight;
      ColorboxLocal.colorboxWidth = ColorboxLocal.colorboxLinkWidth;

      if ($linkHref.match(COLORBOX_INTERNAL_LINK_PATTERN)) {
        //link points to inline content
        ColorboxLocal.colorboxInline = true;
      } else {
        //link points to something else, load in iframe
        ColorboxLocal.colorboxIframe = true;
      }
    }

    colorboxWrapper(obj);
  }
})(jQuery);

// colorboxLink()

/**
 * colorboxWrapper
 *
 * actually calls the colorbox function on the links
 * elements with the same groupId in the class attribute are grouped
 */
(function(jQuery) {
  colorboxWrapper = function(obj) {
    //workaround for wp_localize_script behavior:
    //the function puts booleans as strings into the "ColorboxLocal" array...
    jQuery.each(ColorboxLocal, function(key, value) {
      if (value === "false") {
        ColorboxLocal[key] = false;
      } else if (value === "true") {
        ColorboxLocal[key] = true;
      }
    });

    //finally call Colorbox library
    jQuery(obj).colorbox({
      rel:ColorboxLocal.colorboxGroupId,
      title:ColorboxLocal.colorboxTitle,
      maxHeight:ColorboxLocal.colorboxMaxHeight,
      maxWidth:ColorboxLocal.colorboxMaxWidth,
      initialHeight:ColorboxLocal.colorboxInitialHeight,
      initialWidth:ColorboxLocal.colorboxInitialWidth,
      height:ColorboxLocal.colorboxHeight,
      width:ColorboxLocal.colorboxWidth,
      slideshow:ColorboxLocal.colorboxSlideshow,
      slideshowAuto:ColorboxLocal.colorboxSlideshowAuto,
      scalePhotos:ColorboxLocal.colorboxScalePhotos,
      preloading:ColorboxLocal.colorboxPreloading,
      overlayClose:ColorboxLocal.colorboxOverlayClose,
      loop:ColorboxLocal.colorboxLoop,
      escKey:ColorboxLocal.colorboxEscKey,
      arrowKey:ColorboxLocal.colorboxArrowKey,
      scrolling:ColorboxLocal.colorboxScrolling,
      opacity:ColorboxLocal.colorboxOpacity,
      transition:ColorboxLocal.colorboxTransition,
      speed:parseInt(ColorboxLocal.colorboxSpeed),
      slideshowSpeed:parseInt(ColorboxLocal.colorboxSlideshowSpeed),
      close:ColorboxLocal.colorboxClose,
      next:ColorboxLocal.colorboxNext,
      previous:ColorboxLocal.colorboxPrevious,
      slideshowStart:ColorboxLocal.colorboxSlideshowStart,
      slideshowStop:ColorboxLocal.colorboxSlideshowStop,
      current:ColorboxLocal.colorboxCurrent,
      inline:ColorboxLocal.colorboxInline,
      iframe:ColorboxLocal.colorboxIframe
    });
  }
})(jQuery);

// colorboxWrapper()

/**
 * colorboxConfigDefaults
 *
 * default values for colorbox configuration in case the configuration array was not added successfully to the HTML.
 */
(function(jQuery) {
  getColorboxConfigDefaults = function() {
    return {
      colorboxInline: false,
      colorboxIframe: false,
      colorboxGroupId: '',
      colorboxTitle: '',
      colorboxWidth: false,
      colorboxHeight: false,
      colorboxMaxWidth: false,
      colorboxMaxHeight: false,
      colorboxSlideshow: false,
      colorboxSlideshowAuto: false,
      colorboxScalePhotos: false,
      colorboxPreloading: false,
      colorboxOverlayClose: false,
      colorboxLoop: false,
      colorboxEscKey: true,
      colorboxArrowKey:true,
      colorboxScrolling:false,
      colorboxOpacity:'0.85',
      colorboxTransition:'elastic',
      colorboxSpeed:'350',
      colorboxSlideshowSpeed:'2500',
      colorboxClose: 'close',
      colorboxNext:'next',
      colorboxPrevious:'previous',
      colorboxSlideshowStart:'start slideshow',
      colorboxSlideshowStop:'stop slideshow',
      colorboxCurrent:'{current} of {total} images',

      colorboxImageMaxWidth: false,
      colorboxImageMaxHeight: false,
      colorboxImageHeight: false,
      colorboxImageWidth:false,

      colorboxLinkHeight: false,
      colorboxLinkWidth: false,

      colorboxInitialHeight: 100,
      colorboxInitialWidth: 300,
      autoColorboxJavaScript: false,
      autoHideFlash: false,
      autoColorbox: false,
      autoColorboxGalleries: false,
      colorboxAddClassToLinks: false
    }
  }
})(jQuery);

// getColorboxConfigDefaults()