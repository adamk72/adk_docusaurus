---
title: Jira on Slack
---

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
