module.exports = {
  docs: [
    {
      type: 'category',
      label: 'On Better Organizations',
      items: ['getting-started', 'emails', 'meetings', 'spreadsheets'],
    },
    {
      type: 'category',
      label: 'For the Non-Technical',
      items: ['pm-tools/non-technical-officers'],
    },
    {
      type: 'category',
      label: 'Project Management Tools',
      items: [
        'pm-tools/the-list',
        'pm-tools/reviews',
        'pm-tools/excel',
        'pm-tools/emojis',
      ],
    },
    {
      type: 'category',
      label: 'Information Architecture',
      items: ['ia/getting-started', 'ia/taxonomy'],
    },
  ],
  software: [
    {
      type: 'category',
      label: 'Best Practices',
      items: ['sw/snapshot-mindset', 'sw/using-jira', 'sw/using-git'],
    },
    {
      type: 'category',
      label: 'General Javascript',
      items: ['sw/js/interesting-features', 'sw/js/debugging-tips'],
    },
    {
      type: 'category',
      label: 'Vue',
      items: [
        'sw/vue-lessons/getting-started',
        'sw/vue-lessons/single-file-components',
        'sw/vue-lessons/data-binding',
        'sw/vue-lessons/expressions',
        'sw/vue-lessons/directives',
        'sw/vue-lessons/script-section',
        'sw/vue-lessons/lifecycle-hooks',
        'sw/vue-lessons/list-rendering',
        'sw/vue-lessons/slots',
        'sw/vue-lessons/custom-events',
        'sw/vue-lessons/mixins',
        'sw/vue-lessons/router',
        'sw/vue-lessons/vuex',
      ],
    },
  ],
  speaking_lessons: [
    {
      type: 'doc',
      id: 'speaking-lessons/speaking-fu', // string - document id
    },
    {
      type: 'category',
      label: 'Interviewing',
      items: [
        'speaking-lessons/interviewing-in-general',
        'speaking-lessons/interviewing-for-podcasts',
        'speaking-lessons/interviewing-for-jobs',
        'speaking-lessons/being-the-interviewer',
      ],
    },
    {
      type: 'category',
      label: 'Ancient Wisdom, Modern Take',
      items: [
        'speaking-lessons/lessons-from-ancient-times',
        'speaking-lessons/ethos',
        'speaking-lessons/pathos',
        'speaking-lessons/logos',
      ],
    },
    {
      type: 'category',
      label: 'Body & Mind',
      items: [
        'speaking-lessons/your-feet-are-your-foundation',
        'speaking-lessons/speaking-in-groups',
      ],
    },
  ],
};
