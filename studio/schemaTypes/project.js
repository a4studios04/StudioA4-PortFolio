export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    // CORE INFO (Homepage)
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'mainImage', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'tag', title: 'Category', type: 'string' },
    
    // DEEP DIVE (The project page)
    { name: 'description', title: 'Story / Process Text', type: 'text' },
    { name: 'gallery', title: 'Process Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'shortVideo', title: 'Cinematic Video (MP4)', type: 'file', options: { accept: 'video/*' } },
    { name: 'videoUrl', title: 'YouTube/Vimeo Embed URL', type: 'url' },
    
    // SOCIAL LINKS
    { 
      name: 'socialLinks', 
      title: 'Where is this hosted?', 
      type: 'array', 
      of: [{ 
        type: 'object', 
        fields: [
          { name: 'platform', type: 'string', title: 'Platform (e.g., ArtStation)' },
          { name: 'url', type: 'url', title: 'URL' }
        ] 
      }] 
    }
  ],
}