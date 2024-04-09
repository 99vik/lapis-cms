import { CollectionConfig } from 'payload/types';
import revalidateContent from '../hooks/revalidateContent';

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: ({ req }) => {
      if (req.user || req.headers.authorization === process.env.API_KEY)
        return true;
      return false;
    },
  },
  hooks: {
    afterChange: [revalidateContent],
    afterDelete: [revalidateContent],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default Posts;
