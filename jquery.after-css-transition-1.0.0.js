var transitionEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

$.fn.addClassAfter = function(className) {
	var that = this;
	setTimeout(function(){
		that.addClass(className);
	},1);
};
$.fn.addClassAfterTransition = function(className) {
	var that, transitionEnd;
	that = this;
	that.bind(transitionEnd, function() {
		$(this).addClass(className);
		$(this).unbind(transitionEnd);
	});
};
$.fn.removeClassAfter = function(className) {
	var that = this;
	setTimeout(function(){
		that.removeClass(className);
	},1);
};
$.fn.removeClassAfterTransition = function(className) {
	var that, transitionEnd;
	that = this;
	that.bind(transitionEnd, function() {
		$(this).removeClass(className);
		$(this).unbind(transitionEnd);
	});
};