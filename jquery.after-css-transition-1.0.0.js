var transitionEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

$.fn.addClassAfter = function(className) {
	var $this = this;
	setTimeout(function(){
		$this.addClass(className);
	},1);
};
$.fn.addClassAfterTransition = function(className) {
	this.bind(transitionEnd, function() {
		$(this).addClass(className);
		$(this).unbind(transitionEnd);
	});
	return this;
};
$.fn.removeClassAfter = function(className) {
	var $this = this;
	setTimeout(function(){
		$this.removeClass(className);
	},1);
};
$.fn.removeClassAfterTransition = function(className) {
	this.bind(transitionEnd, function() {
		$(this).removeClass(className);
		$(this).unbind(transitionEnd);
	});
	return this;
};