---
title: Git on Slack
---

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
