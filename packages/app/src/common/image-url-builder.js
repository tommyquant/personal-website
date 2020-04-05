import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET
});

export default builder;
