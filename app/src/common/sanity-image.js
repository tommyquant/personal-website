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
    return WIDTHS.reduce((accum, width) => {
        // console.log(imageUrlBuilder.image(source).width(width).fit('max').url());
    });
}
