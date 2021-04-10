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
  javaScript: [
    {
      type: 'category',
      label: 'General Javascript',
      items: [
        'js/interesting-features', 'js/debugging-tips'
      ],
    },
    {
      type: 'category',
      label: 'Lessons in Vue',
      items: ['js/vue-lessons/getting-started', 'js/vue-lessons/single-file-components', 'js/vue-lessons/data-binding', 'js/vue-lessons/expressions', 'js/vue-lessons/directives', 'js/vue-lessons/script-section', 'js/vue-lessons/lifecycle-hooks', 'js/vue-lessons/list-rendering', 'js/vue-lessons/slots', 'js/vue-lessons/custom-events', 'js/vue-lessons/mixins', 'js/vue-lessons/router']
    },
  ],
  speakingLessons: [
    {
      type: 'doc',
      id: 'speaking-lessons/speaking-fu', // string - document id
    },
    {
      type: 'category',
      label: 'Interviewing',
      items: ['speaking-lessons/interviewing-in-general', 'speaking-lessons/interviewing-for-podcasts', 'speaking-lessons/interviewing-for-jobs', 'speaking-lessons/being-the-interviewer']
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
