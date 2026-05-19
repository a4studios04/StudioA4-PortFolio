export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'mainImage', title: 'Showcase Image (Thumbnail)', type: 'image', options: { hotspot: true } },
    { name: 'tag', title: 'Category Tag', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'projectNumber', title: 'Project Number', type: 'string' },
    { name: 'description', title: 'Full Project Story', type: 'text' },
    { name: 'gallery', title: 'Process Gallery', type: 'array', of: [{ type: 'image' }], options: { layout: 'grid' } },
    { name: 'videoUrl', title: 'YouTube/Vimeo Link', type: 'url' },
    { 
      name: 'shortVideo', 
      title: 'Background Loop Video', 
      type: 'file', 
      options: { accept: 'video/mp4,video/x-matroska,video/quicktime,video/x-msvideo' },
      description: 'Upload MP4, MKV, MOV, or AVI. Keep file size small!'
    },
  ],
}