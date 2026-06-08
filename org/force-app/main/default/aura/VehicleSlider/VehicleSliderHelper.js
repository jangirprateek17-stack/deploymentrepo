({
    loadSlides : function(component) {
        component.set("v.slides", [
            {
                imageUrl: "/sfsites/c/resource/Car1",
                title: "Latest SUV",
                description: "Explore powerful performance and comfort"
            },
            {
                imageUrl: "/sfsites/c/resource/Car2",
                title: "Electric Future",
                description: "Drive the future with EV technology"
            },
            {
                imageUrl: "/sfsites/c/resource/Car3",
                title: "Luxury Sedan",
                description: "Premium design with top-class features"
            }
        ]);
    },

    next : function(component) {
        let index = component.get("v.currentIndex");
        let slides = component.get("v.slides");

        index = (index + 1) % slides.length;
        component.set("v.currentIndex", index);
    },

    prev : function(component) {
        let index = component.get("v.currentIndex");
        let slides = component.get("v.slides");

        index = (index - 1 + slides.length) % slides.length;
        component.set("v.currentIndex", index);
    },

    startAutoSlide : function(component) {
        window.setInterval($A.getCallback(function() {
            this.next(component);
        }.bind(this)), 4000);
    }
})