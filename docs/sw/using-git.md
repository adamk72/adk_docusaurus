---
title: Git and GitHub
---

As the most widely used version control system, it's important to understand how Git works and how to take advantage of it.

## Best Practices

<h3>Commit small and commit often.</h3>

### General Practice

1. Think of a commit as a wrapper for related changes. Commits should be single-purpose. Two bug fixes should produce two different commits.
2. Split features and fixes into logical chunks and only comment chunks that have complete code, i.e., don't break the build.
3. Write good commit messages.
4. Make pull requests (PR) to main when you’ve completed a feature.
   - Don't push to main!
   - **_Never_** merge your own PR.
5. Prefer rebase over merge. [Merging vs Rebasing Article](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

## Commits

- Test before you commit. This means doing slightly more than just glancing at the UI. If you have automated tests, run them. Check boundary conditions.
- Messages: Use the imperative, present tense ("Change", not "Changed" or "Changes") to be consistent with generated messages from git.
  - <strong>Pro tip:</strong> The first line of the commit will be the summary. Follow that line by a blank line to add additional details; you'll have plenty of room.
- With Jira, make sure to add the issue key and use smart commits.

## Branching

- Alway branch from main. Branches are cheap, so use them frequently for atomic feature changes.
  - <strong>Pro tip:</strong> The first line of the commit will be the summary. Follow that line by a blank line to add additional details; you'll have plenty of room.
- Make local commits frequently, after each atomic change. This lets you easily “backup” if something goes wrong.
- Don’t be afraid to push to your new branch on origin. Just make sure the code works before pushing, though. `git commit --amend` doesn't work on commits once they are pushed to remote.

## Pull Requests

Based on everything before, the details here should be obvious. If the team is practicing continual iterative development, a pull request should go smoothly with only minor hiccups as worst. If the team is having trouble merging the code from local to GitHub, then there may be a bigger problem.

- Work should not be considered complete (and thus ready for a pull request and set to resolved) unless:

  - It's been tested.
  - It's generating zero lint or browser console errors.
  - Unnecessary console logs are removed.
  - Results have been logged in Jira (or a comparable solution).

- Make sure to pull from main to ensure proper integration. Resolve _all_ conflicts before making the PR.
- Request that someone else make the pull request happen. The original coder is biased and will likely cause problems if left to merging their own code.

### Performing a PR

- Reject any PR that isn't complete:
  - There is no ticket associate with it.
  - There are on reasonable instructions on how to test the branch.
  - The PR isn't clear.
- The PR person should download the branch and do preliminary testing on it. Any anomalies or failures are justification for rejecting the PR.
- Lastly, after the merge to main, inform the team of the need to pull from main so they can incorporate the new changes.

## Jira & Smart Commits

Jira can connect with GitHub so that changes made on the git command line and that are pushed to a repository can be captured in specific issues. A lot of functionality of Jira can happen on the command line, freeing you from having to bounce back and forth between Jira, GitHub, and the git command line.

Smart commits are how a git commit is linked to a particular Jira issue.

- Syntax: `<ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>`
- Example: git commit -a -m"JRA-090 #close Fixed this today"
  Where `#<COMMAND>` can be one of the following:
- comment
- `<transition name>`
- time

You can find more at Atlassian's document site: [Smart Commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html).

## Git Commands of Note

Take the time to understand these:

- `git commit`
  - `git commit -b <new branch>`
  - `git commit --amend`
- `git stash`
  - `git stash pop`
- `git push`
- `git pull`
- `git reset`
- `git revert`
- `git remote`
- `git config`
- `git branch`
- `git merge`
- `git rebase`
- [Git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) (very helpful to know on the command line)
