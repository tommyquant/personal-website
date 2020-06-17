import createBuilder from '@sanity/image-url';

const WIDTHS = [
    150,
    300,
    600,
    1200
];

export const imageUrlBuilder = createBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET
});

export function getImageUrl(source) {
    return imageUrlBuilder.image(source).url();
}

/**
 * Given a Sanity image source object, return an object where each entry is in the
 * form of `width: url`. This object can then be easily converted to a srcset string.
 * @param {*} source 
 */
export function getSrcsetOptions(source) {
    const id = source.asset._ref || source.asset._id;

    if (!id) {
        return undefined;
    }

    // It is not always possible to retrieve the image's original dimensions
    // through the source object's properties. Luckily, Sanity saves the
    // original dimensions in the ID so we can just extract that.
    const [, originalWidth] = id.match(/-(\d+)x(\d+)-/);

    const srcsetOptions = WIDTHS.reduce((accum, width) => {
        // Only add a new entry if the desired width is less than the original width
        if (width < originalWidth) {
            return {
                ...accum,
                [width]: imageUrlBuilder.image(source).width(width).fit('max').url()
            };
        }

        return accum;
    });

    return {
        ...srcsetOptions,
        [originalWidth]: getImageUrl(source)
    };
}
