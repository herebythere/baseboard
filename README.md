#Baseboard#

##Abstract##

It's not a boilerplate. It's not a library. It's a comfortable place to start new CSS templates.

Check out the [demo](http://taylor-vann.github.io/baseboard). It's as ugly as it should be. 

##Details##

Terrible, right? Now compare it to the same [page](example/plank.html) without Baseboard. This is how you browser styles your elements by default. Now consider the little browser differences across platforms. Maybe recall the fatigue of starting a new custom stylesheet for a small project. Suddenly, the squished little demo doesn't seem like a bad place to start.

This compact, less than 75-line, style-sheet is meant for the developer who doesn't want (or need) a bulky boilerplate but also doesn't want to start from scratch. It's the result of more than a few headaches and hopefully the solution to a few of yours.

Initial styling differences between browsers usually go unnoticed *until* it's a problem. This style-sheet attempts to fix that. It's not about fonts, colors, holding your hand, or making your website *pretty*. 

Function, flow, and the user experience should be purposefully delegated by a design teams and not libraries or trend fonts. This minimal stylesheet capitalizes on this philosophy and lets you begin from (almost) nothing.

Baseboard is a cross-platform starting point for the most useful, semantic, and functional HTML5 elements. This minimal style-sheet is intended to be the foundation of smaller mobile-first and BEM style projects.

The purpose of Baseboard is to isolate the development process to just your declarations. The goal is to give design engineers and developers a little more control and a fair blank-slate.

Starting from nothing isn't so bad with Baseboard. 
I hope it helps!

##Usage##

Grab `baseboard.css` from the src directory and copy it into your resources folder or project directory.

To link custom fonts add your '@font-faces' at the beginning of the document after you see:

`/*Put your @font-faces here.*/`

Add your custom declarations after you see:

`/* Put your custom classes here. */`

Remember to delete the unused helper classes or media queries when you push your final solutions.

##License##
Baseboard is released under the [MIT License]() and is intended to be used for students and small start-ups.
