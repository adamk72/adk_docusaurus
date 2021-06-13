module.exports = {
  docs: [
    // {
    //   type: 'category',
    //   label: 'On Better Organizations',
    //   items: ['getting-started', 'emails', 'meetings', 'spreadsheets'],
    // },
    {
      type: 'category',
      label: 'For the Non-Technical',
      items: ['pm-tools/shopping-for-a-dev-shop'],
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
    // {
    //   type: 'category',
    //   label: 'Information Architecture',
    //   items: ['ia/getting-started', 'ia/taxonomy'],
    // },
  ],
  software: [
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'sw/snapshot-mindset',
        'sw/using-jira',
        'sw/jira-on-slack',
        'sw/using-git',
        'sw/git-on-slack',
      ],
    },
    {
      type: 'category',
      label: 'General Javascript',
      items: ['js/interesting-features', 'js/debugging-tips'],
    },
    {
      type: 'category',
      label: 'Vue',
      items: [
        'vue-lessons/getting-started',
        'vue-lessons/single-file-components',
        'vue-lessons/data-binding',
        'vue-lessons/expressions',
        'vue-lessons/directives',
        'vue-lessons/script-section',
        'vue-lessons/lifecycle-hooks',
        'vue-lessons/list-rendering',
        'vue-lessons/slots',
        // 'vue-lessons/custom-events',
        'vue-lessons/mixins',
        'vue-lessons/router',
        'vue-lessons/vuex',
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
        // 'speaking-lessons/interviewing-in-general',
        'speaking-lessons/interviewing-for-podcasts',
        // 'speaking-lessons/interviewing-for-jobs',
        // 'speaking-lessons/being-the-interviewer',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Ancient Wisdom, Modern Take',
    //   items: [
    //     'speaking-lessons/lessons-from-ancient-times',
    //     'speaking-lessons/ethos',
    //     'speaking-lessons/pathos',
    //     'speaking-lessons/logos',
    //   ],
    // },
    {
      type: 'category',
      label: 'Body & Mind',
      items: [
        // 'speaking-lessons/your-feet-are-your-foundation',
        // 'speaking-lessons/speaking-in-groups',
        'speaking-lessons/factoids-dont-matter',
      ],
    },
  ],
};
