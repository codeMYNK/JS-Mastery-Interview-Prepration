// Select only images meant for lazy-loading (have `data-src`)
let imgs = document.querySelectorAll(".lazy-image");

// Options control when the observer callback runs:
// - `root: null` -> viewport
// - `rootMargin` -> start loading slightly before image enters viewport (200px)
// - `threshold: 0.1` -> callback when ~10% of the image is visible
const observerOptions = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.1
};

// Create observer: when an observed element intersects, this callback runs
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        // `isIntersecting` is true when the element is inside the root area
        if(entry.isIntersecting){
            const img = entry.target; // the <img> element that intersected

            // The real image URL is stored in `data-src` to avoid loading it
            // until we actually need it. Only set `src` if `data-src` exists.
            const dataSrc = img.dataset.src;
            if(dataSrc){
                img.src = dataSrc; // start loading the real image
            }

            // We no longer need to observe this image after we've started loading it
            observer.unobserve(img);
        }
    });
}, observerOptions);

// Begin observing each lazy image so the callback can load them when needed
imgs.forEach(function(img){
    observer.observe(img);
});