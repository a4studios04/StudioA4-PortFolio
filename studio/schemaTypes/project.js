export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    // --- ORIGINAL FIELDS ---
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
      title: 'Showcase Image (Thumbnail)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    // --- NEW "DEEP DIVE" FIELDS ---
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Tell the story of the project, your process, and the client brief.',
    },
    {
      name: 'gallery',
      title: 'Project Gallery (Inside the Page)',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'videoUrl',
      title: 'YouTube or Vimeo Link',
      type: 'url',
      description: 'Paste a link to your video here to save bandwidth.',
    },
    {
      name: 'shortVideo',
      title: 'Short Looping Video (MP4)',
      type: 'file',
      options: { accept: 'video/mp4' },
      description: 'Only for very small, compressed looping videos (Under 5MB).',
    },
  ],
}