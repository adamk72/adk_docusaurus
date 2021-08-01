title: Shopping for a Dev Shop
slug: /preparing-for-the-project

---

{TIME WORKED ON:

Sun Aug 1: 60min

}

Great! You've found a dev shop you and your team can work with. Hopefully, they've not only answered your questions, but also told you what you need to move forward.

There's a lot of fuzziness around this conversation, and lot of it has to do with how much work you want your team to do compared to having the dev shop do the work. Somethings are simply out of the creative or technical realm for either yourself or the shop you're looking to hire, and this is okay. Other solutions can make up for any gaps.

Let's look at this from two perspectives: Product Design and Technical. I'm adding a Cost note to each of the sections so you can see how and why what seems like a "simple" project can be so expensive to run, and why schedules can often be unpredictable (hint, issues are often directly related to how much you provide up front and participate in the project; the less you add, the more expensive a project becomes).

# Product Design

This covers the visible parts of the application. You can actually do a lot on this side of the project to help make it an overall success, even well before you hire a dev shop to do the implementation work.

## Graphics

Many dev shops simply do not have the capacity to do illustrations and graphical design. They can hire out to someone to do the work, but this sometimes adds a layer of communication complexity. You can either let that be, or you can hire your own illustrator or designer (as an individual or a firm). In any case, a project manager needs to ensure everyone is talking.

**Cost:** The cost for an illustrator or design firm can vary wildly. If you let the dev shop manage this, expect additional costs to be added in.

Hiring yourself takes a big burden off the dev shop and may 1) Save you money in the long run and 2) Get you closer to what you want, as you can have more casual conversations with your own illustrator (maybe; it depends on your contract with the individual).

Remember, looking for an illustrator can take just as long as looking for a dev shop, so get started early.

:::tip CSS
A subset of design is how the style is applied to a web-based application through cascading style sheets. If you need sophisticated animations and positioning, this will take a lot of time and effort
:::

## Wireframes

Wire frames come in different levels of fidelity:

- Low: Raw boxes and lines and arbitrary text. Usually accompanied by a flowchart and general outline of processes.
- Medium: Some minor styling and placeholder graphics to indicate theme/ideas/plans. The flow is more well thought out and there is usually additional support documentation.
- High: A near complete version of the app, with proper wording where expected and a clear vision of the workflow. This could be used almost as visual step-by-step guide to the development team.

There are broad definitions and the reality of wireframes depend on the effort expended. The key thing to note is that a wireframe of an fidelity doesn't have to be perfect. Its goal is to get the big picture of the user interface and work out the kinks of the user experience.

:::tip Don't forget about the Admin Panel!
Many designers forget there is almost always an administrative side of an application, where the owner/admin/manager of the app goes to manage things like user accounts, tags, blog posts, and the like. It's the behind-the-scenes UI, but it's important to consider as part of wireframes.
:::

**Cost:** It is highly recommend that you have at the very least a strong set of low-fi wireframes in place _before_ you even go shopping for a dev shop. If you bring at least low-fi wireframes to the discussion, the shop can provide a better project cost estimate.

Leaving the wireframes to the dev shop will take a lot of extra time, as the project manager will have to communicate with you often in order to make sure the project is on the right track.

## Product Owner

If you can be or bring a product owner (PO) to the project, this will make a _huge_ difference in the cost, schedule, and cost of the project. Being a product owner is straight forward, but that does not mean it's easy. In an Agile process, the PO needs to be involved in various meetings and is also the primary creator of the stories about the product that the developers will work from.

**Cost:** If you have a PO as part of, then it's just business as normal. Having the dev shop act as a proxy-PO is workable, but adds extra time and cost to the project.

# Technical

There really isn't a whole lot you can do on this side of a project unless you are technically savvy yourself (and/or you have a support team that can aid in the project, in which case, the more information that can be provided, the better).

In this section, I go over some of the pieces and parts that need to be considered, which will hopefully enlighten you to some of the complexities of software development. The perspective will be from a web-based application, but the ideas apply to most any software project.

## User Interface (UI)

This is, of course, what everyone thinks about and sees when working with software. Of all the sub-systems this is usually the technically easiest part to implement, but it is _highly_ dependent on what you and your team brings to the project before it even start, and how much you participate in providing a clear vision.

The UI ultimately defines the rest of the application (all of the hidden parts where the bulk of the work is done), so without good wireframes, workflows, and documentation, work becomes very hard to do and issues cascade down into the rest of the software lifecycle process.

### Customer Facing

The "actual" interface. Complexity arises when these type of features are requested/needed (and you'll see most of these are very common, almost mandatory):

- User login
- Permissions management
  - This gets doubly complex for deep layering/requirements or white-label services
- Filtering
- Searching
- External API connections (usually to other services that aid in the program; e.g.; today's weather)
- Animations (CSS)
- Tags/Labels
- User guide/Tutorial layers
- User drawings
- Imbedded features (usually from social media sites)
- Video management
- Blockchain/Crypto features
  - Layer 2 reduces cost, but add some complexity

Plus a lot more. The more unique a feature is, the more custom work that has to be done. Again, this is why estimates for cost and schedule are so hard to do. Software implementation is simply too non-deterministic.

**Cost:** UIs are usually just "blocks" that get assembled together. However, how those blocks interact can make a huge difference in not only the immediate project, but also on future development, feature additions, or upgrades that use the same code base. Getting this right the first time around takes more time but will save more time and money in the long run.

Speaking of "getting it right", a dev shop can (and many often do) take shortcuts to "improve" the release schedule. The consequences of these shortcuts are often devastating, even within the current scope. All it takes is an innocuous request from you, the client, and suddenly there's a lot of hemming and hawing and a sudden rush to re-write large chunks of the code to make it work. If you've hired a good dev team, they can either add the request with little hassle, even late in the game, or they can give a concrete reason as to why it can't happen within the current schedule.

### Administrative

The backend interface, where the administrative activities happen. While graphically, the UI be lacking, UX is is as critical here as it is for the customer facing site. Interacting with this part of the site should be easy for an admin. Hard-to-use admin interfaces are clear indications of poor implementation under the hood of the overall application.

Typical features include:

- Account management (password resets, changing user info, banning, changing roles, etc.)
- Permissions management
- Tag/Labels/Category approval/deletion
- Creating and managing blogs (a user will be given a role to be able do this.)

And much more.

**Cost:** The cost of an admin system often dramatically increases the project's overall cost when it isn't planned for (which is far to often). Otherwise, it's just additional screens and interfaces just like the customer interface and not any less important.

## Application Programming Interfaces (APIs)

## Data Layers

## Infrastructure

## Diagrams & Documentation

## Code Pattens

## Technical Debt
