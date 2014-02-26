var transitionEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

$.fn.addClassAfter = function(className) {
    var $this = this;
    this.unbind(transitionEnd);
    setTimeout(function(){
        $this.addClass(className);
    },1);
};
$.fn.addCallbackAfter = function(callback) {
    var $this = this;
    this.unbind(transitionEnd);
    setTimeout(function(){
        callback();
    },1);
};
$.fn.addClassAfterTransition = function(className) {
    this.unbind(transitionEnd);
    this.bind(transitionEnd, function(e) {
        $(this).addClass(className);
        $(this).unbind(transitionEnd);
    });
    return this;
};
$.fn.addCallbackAfterTransition = function(callback) {
    this.unbind(transitionEnd);
    this.bind(transitionEnd, function(e) {
        callback();
        $(this).unbind(transitionEnd);
    });
    return this;
};
$.fn.removeClassAfter = function(className) {
    var $this = this;
    this.unbind(transitionEnd);
    setTimeout(function(){
        $this.removeClass(className);
    },1);
};
$.fn.removeClassAfterTransition = function(className) {
    this.unbind(transitionEnd);
    this.bind(transitionEnd, function() {
        $(this).removeClass(className);
        $(this).unbind(transitionEnd);
    });
    return this;
};
