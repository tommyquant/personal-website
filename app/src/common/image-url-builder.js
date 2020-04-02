import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET
});

export default builder;
