export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'ID_2checkout',
      title: 'Link',
      type: 'string',
    },
    { 
      name: 'price',
      title: 'Text on main page',
      type: 'string',
    },

    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },



    {
      title: 'Details', 
      name: 'details',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ]
}