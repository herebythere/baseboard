#Baseboard#

##Abstract##

If CSS had a reset button, it would be Baseboard.

Check out this brutal [demo](https://taylor-vann.github.io/baseboard). It's as ugly as it should be. 

##Details##

Terrible, right? Now compare it to the same [page](https://taylor-vann.github.io/baseboard/example/plank.html) without Baseboard. Initial browser defaults go unnoticed *until* it's a problem. Baseboard attempts to remedy that. It's not about fonts, colors, or holding your hand. It's a cross-platform clean canvas for the most useful and semantic HTML5 elements.

Function, flow, and the user experience should be reserved for design teams, not libraries or trend fonts. Baseboard supports this philosophy and lets you begin from (almost) nothing. Less than 75 lines eliminate default stylings. Less than 40 lines contain utility classes covering media queries, floats, and possibly the smallest responsive grid ever. 

Baseboard is meant for the developer who doesn't need boilerplates but also doesn't want to start from scratch. The goal is to give you a little more control and a fair blank-slate.

CSS from scratch doesn't have to be so bad.


##Usage##

Grab `baseboard.css` from the src directory and copy it into your resources folder or project directory. Rename it anything you want. 

To link custom fonts, add your '@font-faces' after:

`/*Put your @font-faces here.*/`

To style the body edit the blank body class:

`/* Put your own body declarations here... */
body { }
`

Add your custom declarations after:

`/* Put your custom classes here. */`

Remember to delete the unused media queries and utility classes before you push your final solutions.

##License##
Baseboard is released under the [MIT License](https://opensource.org/licenses/MIT) and is intended for students, artists, and small start-ups.
