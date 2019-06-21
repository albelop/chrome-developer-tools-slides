# Chrome developer tools

## History

- View page source
- Alert boxes
- Firebug
- Chrome dev tools
- Extras (nodejs, react, angular, redux...)

## Overview: Opening the DevTools


## Overview: Panels

### Elements
 
 View and change the DOM and CSS
 ![Elements panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/elements.png)

### Console

View messages and run JavaScript from the Console
![Console Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/console.png)

### Sources

Debug JavaScript, persist changes made in DevTools across page reloads, save and run snippets of JS, and save changes that you make in DevTools to disk.
![Sources panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/sources.png)

### Network

View and debug network activity.performance.
![Network Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/network.png)

### Performance

Find ways to improve load and runtime 
![Performance Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/performance.png)

### Memory

Profile memory usage and track down leaks.
![Memory Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/memory.png)


### Application

Inspect all resources that are loaded, including IndexedDB or Web SQL databases, local and session storage, cookies, Application Cache, images, fonts, and stylesheets.
![Application Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/application.png)

### Security

Debug mixed content issues, certificate problems, and more.
![Security Panel](https://developers.google.com/web/tools/chrome-devtools/images/panels/security.png)

### Device mode

Simulate mobile devices.
![Device mode](https://developers.google.com/web/tools/chrome-devtools/images/device-mode.png)


## Overview: Command menu

The Command Menu provides a fast way to navigate the Chrome DevTools UI and accomplish common tasks

![Command menu](https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/disable-javascript.png)

### Opening the menu

Press Control+Shift+P or Command+Shift+P (Mac). Or, click Customize And Control DevTools Customize And Controls DevTools and then select Run Command.

![Openening the command menu](https://developers.google.com/web/tools/chrome-devtools/command-menu/imgs/runcommand.png)

### Possible actions

The first character in the line defines the type of action you want to perform:

| Character | Action |
|---|---|
| ... | Open file
| : | Go to line
| @ | Go to symbol
| ! | Run snippet
| > | Run command

![Command menu actions](https://developers.google.com/web/tools/chrome-devtools/command-menu/imgs/actions.png)

## Elements panel: The DOM

### Traversing the DOM tree

- Inspect a node: `Left click` + Inspect / Inspect button
- Keyboard navigation
- Scroll into view
- Search nodes (`Ctrl + F`) Accepts CSS and XPath selectors

### Edit the DOM

- Double click on the content, tag, attribute value or attribute name to modify
- Edit as HTML
- Remove nodes
- Reorder DOM nodes 
- Force state
- Hide element: `H` 
- Extra: Scroll into view
- More: Console
- More: Break on DOM changes


## Elements panel: Styles

### Get started

- View an element's CSS
- Add CSS declaration
- Add class
- Add pseudostate
- Change dimensions (box model

### CSS Reference

- View CSS declaration
- Computed styles
- Filter
- Add declaration: inline vs rule
- Activate/deactivate declarations

### Animations

- Inspect
- Modify

## Console

### Overview

### Logging
- Types of message
    - warning
    - log
    - error
    - table
    - group
    - trace
- Filter logged messages
    - By log level
    - By text
    - By regex
- Clear console
    - Clear Console button
    - clear()
    - console.clear()
    - Ctrl + L

### Run JS
https://developers.google.com/web/tools/chrome-devtools/console/images/playground.png

### Utilities API

- $_
- $0-$4
- $(selector) == document.querySelector
- $$(selector) == document.querySelectorAll
- $x(path)
- copy()
- dir()
- monitor(fn) / unmonitor
- monitorEvents(object [,events]) / unmonitorEvents

### Live expressions

## Sources

### Panel



## Network

-----

## Sources:

[Front-end Masters - History of developer tools](https://frontendmasters.com/courses/chrome-dev-tools/history-of-developer-tools/)

[The History of Firebug](http://flailingmonkey.com/the-history-of-firebug/)

[Chrome DevTools Documentation](https://developers.google.com/web/tools/chrome-devtools/command-menu/)
