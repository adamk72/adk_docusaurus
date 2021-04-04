module.exports = {
  docs: [
    {
      type: 'category',
      label: 'On Better Organizations',
      items: [
        'getting-started', { type: 'category', label: 'PM Tools', items: ['pm-tools/the-list'] }, 'emails', 'meetings', 'spreadsheets'
      ],
    },
    { type: 'category', label: 'Information Architecture', items: ['ia/getting-started', 'ia/taxonomy'] },
    { type: 'category', label: 'Project Management Tools', items: ['getting-started'] }

  ],
  vueLessons: [
    {
      type: 'category',
      label: 'Lessons in Vue',
      items: ['vue-lessons/getting-started', 'vue-lessons/going-over-the-basics']
    },
  ],
  speakingLessons: [
    {
      type: 'doc',
      id: 'speaking-lessons/speaking-fu', // string - document id
    },
    {
      type: 'category',
      label: 'Ancient Wisdom, Modern Take',
      items: ['speaking-lessons/lessons-from-ancient-times', 'speaking-lessons/ethos', 'speaking-lessons/pathos', 'speaking-lessons/logos']
    },
    {
      type: 'category',
      label: 'Body & Mind',
      items: ['speaking-lessons/your-feet-are-your-foundation']
    },
  ],
};
