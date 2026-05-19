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
    // 1. URL Slug Generator (NEW)
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generates the URL from the project title
        maxLength: 96,
      },
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
    // 2. Deep Dive Description (NEW)
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Tell the story of the project, your process, and the client brief.',
    },
    {
      name: 'mainImage',
      title: 'Showcase Image (Thumbnail)',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
    // 3. Image Gallery for WIPs, Renders, and Wireframes (NEW)
    {
      name: 'gallery',
      title: 'Project Gallery (Inside the Page)',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
  ],
}