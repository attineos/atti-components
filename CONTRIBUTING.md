# Conventions

This document explains the conventions which apply to this project. Please, follow all these rules.

## Git conventions

### Branch conventions

This project follows the Gitflow pattern (https://datasift.github.io/gitflow/IntroducingGitFlow.html), so will always have at least two branches :
* `master` : the production branch, can't be edited directly, should only be updated with merge requests
* `develop` : the development branch, shouldn't be edited directly

#### Branch naming convention

At the exception of `master` and `develop` branches, all branches should be named according to 
this pattern : `<type>/<issueNumber>_<description>`.

`type`, here, could be one of :
* `feature` : indicates that this branch was created for the development of one feature
* `fix` : indicates that this branch was created for a bug fix
* `refactor` : indicates that this branch is used to clean or ameliorate code clarity
* `doc` : indicates that this branch was created to add some documentation to the project
* `tech` : indicates that you are on a pure technical project (eg: updating the dependencies)

`issueNumber` is the number of the ticket where your task is described. If no ticket was 
created for this task, don't put any number and remove the unnecessary underscore.

`description` is a three or four words max description of the ticket. Each word should be in 
lower case and separate from other by underscores.

Invalid examples :
* `f/562_button_component` : `f` isn't a valid `type`
* `feature/562` : the `description` is missing from the branch name
* `feature562ButtonComponent` : the pattern was not followed

Valid examples :
* `feature/562_button_component`
* `fix/button_click_property`
* `doc/conventions`

#### Branch creation convention

When developing a new feature, please start a new feature branch from the develop branch. Once your 
feature is finished, open a merge request to develop to merge your work with the rest of the project.

```
master
develop
|-- feature/562_button_component
|-- fix/button_click_property
```

Big features are developed on a feature branch too, but can have multiple subbranches starting from 
them. These subbranches allow us to subdivide the big feature in parts, which can be developed
one by one. Each feature part, once done, should be merge into the big feature branch with 
a merge request.

```
master
develop
|-- feature/562_button_component
    |-- feature/562_button_theme
    |-- doc/562_button_component
|-- fix/button_click_property
```

### Commit conventions

The commit convention used in this project is inspired by the AngularJS commit convention (https://gist.github.com/brianclements/841ea7bffdb01346392c). 
A commit should follow this format :
```
<type> <issueNumber> : <description>
<BLANK_LINE>
<body>
<BLANK_LINE>
<footer>
```

All the texts are written in imperative, present tense : use "change", not "changed" nor "changes".

`type`, as explained before, describe the type of modifications done in this commit. It can 
have all values defined before, with the first letter capitalized :
* `Feature`
* `Fix`
* `Refactor`
* `Doc`

`issueNumber` is optional and is the number of the ticket created for the modifications in this 
commit.

`description` is a small description of 3-4 words indicating what can be found in this ticket or 
which files are modified, if there is only one or two. It is written in lower case.

`body` is the list of the modifications done in this commit. Each element of the list starts by a 
capitalized letter and ends with a dot.

`footer` is reserved for indicating breaking changes.

Invalid examples :
```
Add wording
```
There no `type`, no `body` and the `description` is too short.
```
562: button component

- Add button component.
```
No `type` is given.
```
Feature 562: button component
add button component, add tests on button
```
The `body` part is incorrectly formatted.
```
Feature 562: button component

- Old button should be removed as it will now throw an exception.
- Add Button component.
```
Breaking changes should be put in the footer.

Valid example :
```
Feature 562: button component

- Add Button component.

BREAKING CHANGE : old button should be removed as it will now throw an exception.
```

Before each commit it is mandatory to run the command `yarn preparecommit`. The command will :

- Create all snapshots.
- Fix the style of all files.
- Check the code quality.
- Run all tests.

The option `-u` can be added to also update all tests before launching them.


## JS conventions

This project follow the W3Schools JS conventions (https://www.w3schools.com/js/js_conventions.asp),
at the exception of these points :
* Use 2 spaces when indenting your files.
* Don't use semicolon at the end of your lines.
* Line length is at 100 characters.
* Our naming convention is camelCase.

## React conventions

This project follows all Airbnb React/JSX conventions 
(https://github.com/airbnb/javascript/blob/master/react/README.md), except for these exceptions :
* Use `.js` extension for all files, including React components.
* Always use single quotes, even in JSX.
* Define propTypes and defaultProps as static property in your component class.

### Files architecture

Each component should be developed in its own folder, under the `src/components` folder. Each 
component folder should follow this architecture :
```
Component
|-- config
|-- components
|-- styles
|-- tests
|-- types
|-- index.js
```
With :
* `config` :  contains the internal configuration of the component
* `components` : contains the sub components, only useful for this component. Only contains 
React component, no styled-components.
* `styles` : contains all styled-components reserved for this component
* `tests` : contains the tests for this component
* `types` : contains the declarations of Flow types used by this component internally, if they 
are too big to be put in the `index.js` or if they are used in multiples sub components
