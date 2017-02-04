#Baseboard#

##Abstract##

If CSS had a reset button, it would be Baseboard.

Check out this [demo](https://taylor-vann.github.io/baseboard). It's as ugly as it should be. 

##Details##

Terrible, right? Now compare it to the same [page](https://taylor-vann.github.io/baseboard/example/plank.html) without Baseboard. Initial browser defaults go unnoticed *until* it's a problem and Baseboard attempts to remedy that. It gives you a clean cross-platform canvas for the most useful and semantic HTML5 elements.

Function, flow, and the user experience should be created by design teams, not libraries or boilerplates. Baseboard supports this philosophy and lets you begin from (almost) nothing. Less than 75 lines eliminate default styling. Less than 40 lines contain utility classes covering media queries, floats, and possibly the smallest responsive grid ever. 

Baseboard is made for the developer who doesn't need a boilerplate but also doesn't want to start from scratch. The goal is to give you a little more control and a fair blank-slate.

CSS from scratch doesn't have to be so bad.


##Usage##

Grab `baseboard.css` from the src directory and copy it into your resources or project directory. Rename it something relative to your project. 

Add your '@font-faces' after:

`/* Put @font-faces here.*/`

If necessary, style the body element after:

`/* Put body declarations (like fonts) here... */`

Add custom declarations or copy and paste utility classes after:

`/* Put custom classes here. */`

Remember to delete the unused utility classes and media queries before you push your final solutions.

##License##
Baseboard is released under the [MIT License](https://opensource.org/licenses/MIT) and is intended for students, artists, and small start-ups.
