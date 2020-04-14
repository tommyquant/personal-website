import ResizeObserver from 'resize-observer-polyfill';

const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.onResize(entry);
    });
});

export function observe(callback, element) {
    element.onResize = callback;
    resizeObserver.observe(element);
}

export default {
    observe,
    unobserve: resizeObserver.unobserve,
    disconnect: resizeObserver.disconnect
};
