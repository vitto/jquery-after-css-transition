jquery-after-css-transition
===========================

A simple jQuery plugin that help to append classes **after CSS transitions** or **after another CSS class**.

You can try it on [JSFiddle](http://jsfiddle.net/tonino/A9epx/) or view the code below:

####CSS code

```
#dropdown {
	opacity: 1;
	transition: opacity 0.25s ease-out;
}
.hidden {
	display: none;
}
.invisible {
	opacity: 0;
}
```

####jQuery code

```
$(function() {
    var $area = $("#hover-area");
	var $dropdown = $("#dropdown");

	$area.on("mouseenter", function () {
	    $dropdown.removeClass("hidden").removeClassAfter("invisible");
	});
	
	$area.on("mouseleave", function () {
	    $dropdown.addClass("invisible").addClassAfterTransition("hidden");
	});
});
    
```