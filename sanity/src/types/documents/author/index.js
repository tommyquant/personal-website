export const reference = 'author';

export default {
    title: 'Author',
    name: reference,
    type: 'document',
    fields: [
        {
            title: 'First Name',
            name: 'first_name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Last Name',
            name: 'last_name',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            firstName: 'first_name',
            lastName: 'last_name',
        },
        prepare: ({firstName, lastName}) => ({
            title: `${firstName} ${lastName}`
        })
    }
};
