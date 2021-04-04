module.exports = {
  docs: [
    {
      type: 'category',
      label: 'On Better Organizations',
      items: [
        'getting-started', 'emails', 'meetings', 'spreadsheets'
      ],
    },
    { type: 'category', label: 'Project Management Tools', items: ['pm-tools/the-list'] },
    { type: 'category', label: 'Information Architecture', items: ['ia/getting-started', 'ia/taxonomy'] },

  ],
  vueLessons: [
    {
      type: 'category',
      label: 'Lessons in Vue',
      items: ['vue-lessons/getting-started', 'vue-lessons/single-file-components', 'vue-lessons/expressions', 'vue-lessons/directives', 'vue-lessons/data-binding', 'vue-lessons/lifecycle-hooks', 'vue-lessons/list-rendering', 'vue-lessons/slots', 'vue-lessons/custom-events',]
    },
    {
      type: 'category',
      label: 'Lessons Learned',
      items: ['vue-lessons/import-array-into-component']
    }
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
