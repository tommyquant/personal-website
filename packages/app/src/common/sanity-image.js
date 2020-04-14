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

export function getSrcsetOptions(source) {
    const id = source.asset._ref || source.asset._id;

    if (!id) {
        return undefined;
    }

    const [, originalWidth] = id.match(/-(\d+)x(\d+)-/);

    const srcsetOptions = WIDTHS.reduce((accum, width) => {
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
