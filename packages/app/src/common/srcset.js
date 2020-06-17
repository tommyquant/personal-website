/**
 * Given an object where each entry is in the form of `width: url`, return a string that
 * can be passed into the `srcset` attribute.
 * @param {*} srcsetOptions - An object where each entry is in the form of `width: url`.
 */
export function getSrcsetFromOptions(srcsetOptions = {}) {
    return Object.entries(srcsetOptions)
        .map(([width, url]) => `${url} ${width}w`)
        .join(', ');
}
