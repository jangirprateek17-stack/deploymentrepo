({
    doInit : function(component, event, helper) {
        helper.loadSlides(component);
        helper.startAutoSlide(component);
    },

    nextSlide : function(component, event, helper) {
        helper.next(component);
    },

    prevSlide : function(component, event, helper) {
        helper.prev(component);
    }
})