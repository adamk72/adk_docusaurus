---
title: Best Practices with Git
---

As the most widely used version control system, it's important to understand how Git works and how to take advantage of it.

## Best Practices

<h3>Commit small and commit often.</h3>

### General Practice:

1. Think of a commit as a wrapper for related changes. Commits should be single-purpose. Two bug fixes should produce two different commits.
2. Split features and fixes into logical chunks and only comment chunks that have complete code, i.e., don't break the build.

   - <strong>Pro tip:</strong> If you're only partially done on something but need to switch to another issue, use git stash to temporarily put those changes away while you work on the new issue.

3. Test before you commit. This means doing slightly more than just glancing at the UI. If you have automated tests, run them. Check boundary conditions.
4. Write good commit messages.

   - <strong>Pro tip:</strong> The first line of the commit will be the summary. Follow that line by a blank line to add additional details; you'll have plenty of room.

5. Use the imperative, present tense ("Change", not "Changed" or "Changes") to be consistent with generated messages from git.
6. With Jira, make sure to add the issue key and use smart commits.
