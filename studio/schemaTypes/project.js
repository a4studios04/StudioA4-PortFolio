export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'e.g., Cyberpunk Alleyway, Neon Ronin',
    },
    {
      name: 'tag',
      title: 'Category Tag',
      type: 'string',
      description: 'e.g., 3D Render, Illustration, Manga Panel',
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Details',
      type: 'string',
      description: 'e.g., Environment Design · Lighting',
    },
    {
      name: 'projectNumber',
      title: 'Project Number',
      type: 'string',
      description: 'e.g., 01, 02, 03',
    },
    {
      name: 'mainImage',
      title: 'Showcase Image',
      type: 'image',
      options: {
        hotspot: true, // Let's you crop the center perfectly inside the dashboard
      },
    },
  ],
}