export function getSrcsetFromOptions(srcsetOptions = {}) {
    return Object.entries(srcsetOptions)
        .map(([width, url]) => `${url} ${width}w`)
        .join(', ');
}
