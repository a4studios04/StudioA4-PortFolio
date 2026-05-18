export default {
  name: 'testimonial',
  title: 'Client Review',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Review Quote',
      type: 'text', // 'text' gives you a bigger box than 'string' for long reviews
      description: 'The actual review from the client (do not include the quote marks "")'
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'e.g., VStrife'
    },
    {
      name: 'clientTitle',
      title: 'Client Role',
      type: 'string',
      description: 'e.g., Art Director, Indie Dev, or just leave blank'
    }
  ],
}