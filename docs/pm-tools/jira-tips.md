# Priorities

Jira's default priorities are essentially meaningless (and I find this common with most "priority" lists). Highest, High, Medium, Low, Lowest are ill defined and relative to an arbitrary basis. Your definition of "High" might be very different than mine, depending on context. Is the client _demanding_ progress on an issue? Then the account manager might think it's high priority, but the product owner may have a different vision of how the issue might be better implemented (while still satisfying the client).

In this case, for the PO, it's all part of the plan, so the priority is... "Medium?" What does that even mean? (BTW, Jira's default description is "Has the potential to affect progress." Great. Isn't that what ALL issues do?)

I always change the priorities in a project system I'm managing to better reflect the picture of reality. My priority levels of choice are:

- Blocker - Something about this issue is literally blocking the part of or the whole project. This is tangible and real. A server is down. The cat swiped the keys to the locker with the snacks in it. Whatever. What a blocker is not is something that "feels" like it's slowing things down. Either someone or the entire team is stopped in its tracks because of this issue.
- Urgent - This is probably the weakest of my priority lists, but I have it as a nod to the need we have to try and order things outside of the backlog. In this case, Urgent means that if it is not attended to, a blocker could arise in its place, or an unforeseen schedule issue came to light. Urgent is essentially a "pay attention to me!" or a "time is of the essence" flag.
- Normal - This is the default and where almost every issue should live. You prioritize these issues by actually rearranging them in the queue. Top is more important than below. Some of these issues may be short and sweet, some may take a long time. The time to completion is _not_ an excuse to bump up the priority to Urgent; rather, if there is concern about the schedule, then adjust the backlog, or better, break the issue up into more manageable chunks.

Those three priorities should be enough for any project to run. You'll notice that there is no "Low" or "Lowest." Why would you want them? Either the task is on the backlog to be worked on, or it's not. If it's not going to be worked on soon, the issue should float to the bottom of the backlog.

That said, I do like to add two addition "priorities" to the list.

- Deferred - This priority acknowledges is that while we'd like to to do something with it, we probably won't. Until a higher level decision is made to (not) do something with the issue, it can languish, visible, but unloved.
- Informative - This priority addresses those issues that aren't necessarily actionable, but should probably be visible to the team for at least a short while. Links to documents, comments that don't fit in other issues, that sort of thing.

I find that these last two are rarely used once I train the team on full usage of the main priority system as well as train others on the outside (like account managers) how best to submit features, stories, tasks, and bugs. Basically, I use Deferred and Informative more as training wheels than anything else.

# Adding a Template to the Description Field

All of these start in Settings -> Issues

1. Add a new custom field in Custom Fields
   - Use Text Field (multi-line).
   - Give it a name you can track, like "Bug Description."
   - Fill in the text field the way you want. Note this is in the Default Value field, not the Description field.
   - Associate with the screen you created above.
1. In Field Configurations
   - Select the appropriate configuration and find the new field.
   - Three dots -> Renderers -> Choose Wiki-Style as the Active Renderer.
1. Add a new screen in Screens
   - Copy an existing appropriate screen.
   - Give it a name you can track, like "Create Bug Screen."
   - Move the new field to be near the original field. You could remove the Description field now, but it's best to confirm things work first.
1. Associate screen with schema in Screen Schemas
   - Create a news screen schema
   - Associate the Create Issue with the new screen
   - Associate the Issue type with the screen schema
1. Associate the issue type with the screen schema in Issue type screen schemes
   - Select Configure on the Default, or 'Add issue type screen scheme'
1. Test to see if it works; you should see both the old and new field, with the new field filled in with your template.
1. Remove the original Description field.
1. Create separate workflow for the new issue type.
1. Edit the Create Issue transition.
   - Add a Post Function: Copy Field
   - Set Source to new Description and Destination to the original Description.
   - Using the up arrow, move this new action _above_ the 'Creates the issue originally' action. This ensures the fields will be copied; yes, it's counter intuitive.
1. Publish the workflow and test.

If you have troubles, make sure to check the project settings and ensure all of the schemes are associated with it.
