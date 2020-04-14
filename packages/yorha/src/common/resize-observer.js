import ResizeObserver from 'resize-observer-polyfill';

const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.onResize(entry);
    });
});

function observe(callback, element) {
    element.onResize = callback;
    resizeObserver.observe(element);
}

function unobserve(element) {
    resizeObserver.unobserve(element);
}

export default {
    observe,
    unobserve
};
