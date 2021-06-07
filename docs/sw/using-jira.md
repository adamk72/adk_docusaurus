---
title: Using Jira
---

Jira is a powerful and highly customizable software project management tool. Because of its popularity and long-time presence in the industry, there is a myriad of add-on and integrations to the platform, including Slack and GitHub.

# Best Practices

<h3>Make it easy for your co-workers NOT have to ask you questions.</h3>

## General Practice:

1. You should never be talking about work without also being able to refer to a Jira issue number.
2. Think of Jira as a journal. In each issue, record all the details you can think of. While it's best to plan ahead, it's just as valid as to update a Jira issue on the fly or before you transition it or assign it to another person.
3. Do not leave an issue in an ambiguous state. Go with the workflow. Tell others what your current state is by transitioning the issue.
4. Always provide enough information on an ongoing basis to let your peers and managers what your current status is.
5. Anticipate questions and answer them in advance in the issue.
6. Add comments, screenshots, and document and web links like crazy.

## Tasks & Sub-tasks

Task-type issues should be atomic and single purpose. In terms of code, a task should be able to be made with a single commit.

Task summaries should be actionable. Write the take with what is expected to happen, not the object that is to be worked on. For example, "Change background color to blue," (good) versus, "Background color blue" (bad). The latter "task" doesn't tell anyone what is supposed to happen. Is the background currently blue? Then what do I do with it?

## User Stories

Story summaries should always be written from an actor's perspective and with a goal in mind:

- “As a [role] I’d like to/should be able to [activity] because [reason]”
- “[Role] should be able to [activity] because [reason]”

Stories may take multiple commits to complete and may touch multiple parts of the UI or code. Unlike with Tasks, a Story is not necessarily discrete or atomic. To work with stories, either create Sub-tasks within the Story work on or create full Tasks and link the two tasks together.

## Bugs

When a bug is generated, the description field should contain enough information for the assignee to begin work. This includes, but is not limited to:

- How to replicate the bug.
- Under what conditions was the bug found? (e.g, which browser, OS, system, etc).
- What was expected to happen?

## What doesn't need to go in Jira

If you're developer, pretty much everything you do needs to be recorded in Jira. If you're working, you're working on a Jira issue, not some abstracted thought.

However, there are plenty of things that don't need to be recorded as Jira issues. You may refer to these items within an existing Jira issue, but you don't need to create a unique issue for them:

Jira is not:

- A glorified to-do list.
- A reminder system
- A calendar
- A time-tracking system (though it does track the time it takes you to accomplish your tasks)

So these are the types of things you don't need to put into Jira:

- Tasks as reminders for meetings - Use a calendar or the /remind feature of Slack.
- Tasks to write documentation - instead, make a note that a task isn't complete until documentation is finished (or create a sub-task).
- Generalized thoughts about what you might want to do. If it isn't distinctly part of the project, don't add it to Jira.

# Jira on Slack

Using Jira on Slack is trivial and arguably a better way to interface with Jira for basic and quick day-to-day activities such as updating and creating ad-hoc issues. It is not suitable for managing scums and making large changes.

## Setup

Start by adding the Jira app to Slack:

1. Scroll to the bottom of the left sidebar to the Apps section.
2. Click on the + Add Apps and look for Jira Cloud. That should do the trick!
3. Once installed, you can do much of the work from the new Jira app. However, the real power is in attaching a specific project to a specific Slack channel.
4. Go to the channel and type: /jira connect
5. Select a project.
   Done!

Once a project is associated to a channel, you access the Jira project via slash command. You can start by typing: `/jira help`. The most powerful things you can do are create and get information on issues.

## Create

- Command: `/jira create Summary`
- Example: `/jira create As a user, I'd like to be able to choose the color.`

Creating an issue will bring up a modal dialog for you to complete if you would like to add additional details. The default issue type will depend on the project, but will typically be Task or Story.

## Get Information

- Command: `/jira ISSUE_KEY`
- Example: `/jira WEB-30`

This will bring up a Slack comment that is visible only to you. From there, you can make a Comment, Watch, Assign, or Transition the issue.

##Tips to get the most out of Jira on Slack

- Comment often. If a discussion on Slack has details worth noting, such as code suggestions, links, or actions taken (or that need to be taken), add a comment.
- When creating an issue from Jira, don't worry if it's a possible duplicate. Simply create it. If it is a duplicate, it can be set as Resolved-> Duplicate.
- New Jira issues should be atomic; that is, they should really be about one single task, element, concept, or story. Even if the code might be the same, but it applies to different sections of the UI, for example, make two separate issues in that case.

# Jira on GitHub

Jira can connect with GitHub so that changes made on the git command line and that are pushed to a repository can be captured in specific issues. A lot of functionality of Jira can happen on the command line, freeing you from having to bounce back and forth between Jira, GitHub, and the git command line.

## Smart Commits

Smart commits are how a git commit is linked to a particular Jira issue.

- Syntax: `<ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>`
- Example: git commit -a -m"JRA-090 #close Fixed this today"
  Where `#<COMMAND>` can be one of the following:
- comment
- `<transition name>`
- time

You can find more at Atlassian's document site: [Smart Commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html).
