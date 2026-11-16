import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog article',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Article title', type: 'string', validation: (rule) => rule.required().max(120)}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {list: ['Field Reports', 'Youth & Schools', 'Discipleship', 'Devotional']},
      initialValue: 'Field Reports',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'excerpt', title: 'Short introduction', type: 'text', rows: 3, validation: (rule) => rule.required().max(300)}),
    defineField({name: 'author', title: 'Author name', type: 'string', initialValue: 'Evang. David Abrebor'}),
    defineField({name: 'authorRole', title: 'Author role', type: 'string', initialValue: 'President & Founder'}),
    defineField({name: 'region', title: 'Mission field / region', type: 'string'}),
    defineField({name: 'featured', title: 'Feature this article', type: 'boolean', initialValue: false}),
    defineField({
      name: 'coverImage',
      title: 'Cover photograph',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
        defineField({name: 'caption', title: 'Photo caption', type: 'string'}),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Article content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
            defineField({name: 'caption', title: 'Photo caption', type: 'string'}),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'translations',
      title: 'Translations',
      type: 'object',
      description: 'Optional French and Spanish versions. Blank fields fall back to the English article.',
      fields: [
        defineField({name: 'fr', title: 'French', type: 'object', fields: [
          defineField({name: 'title', title: 'Article title (French)', type: 'string'}),
          defineField({name: 'excerpt', title: 'Short introduction (French)', type: 'text', rows: 3}),
          defineField({name: 'authorRole', title: 'Author role (French)', type: 'string'}),
          defineField({name: 'region', title: 'Mission field / region (French)', type: 'string'}),
          defineField({name: 'coverImageAlt', title: 'Cover photo alternative text (French)', type: 'string'}),
          defineField({name: 'coverImageCaption', title: 'Cover photo caption (French)', type: 'string'}),
          defineField({name: 'body', title: 'Article content (French)', type: 'array', of: [{type: 'block'}]}),
        ]}),
        defineField({name: 'es', title: 'Spanish', type: 'object', fields: [
          defineField({name: 'title', title: 'Article title (Spanish)', type: 'string'}),
          defineField({name: 'excerpt', title: 'Short introduction (Spanish)', type: 'text', rows: 3}),
          defineField({name: 'authorRole', title: 'Author role (Spanish)', type: 'string'}),
          defineField({name: 'region', title: 'Mission field / region (Spanish)', type: 'string'}),
          defineField({name: 'coverImageAlt', title: 'Cover photo alternative text (Spanish)', type: 'string'}),
          defineField({name: 'coverImageCaption', title: 'Cover photo caption (Spanish)', type: 'string'}),
          defineField({name: 'body', title: 'Article content (Spanish)', type: 'array', of: [{type: 'block'}]}),
        ]}),
      ],
    }),
    defineField({name: 'publishedAt', title: 'Publish date and time', type: 'datetime', validation: (rule) => rule.required()}),
  ],
  orderings: [
    {title: 'Publish date, newest first', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'coverImage'},
  },
});
