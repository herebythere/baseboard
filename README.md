# Baseboard #

## Abstract ##

Baseboard is a CSS "reset" button.

## Details ##

Initial browser defaults go unnoticed *until* it's a problem. Baseboard gives the most useful and semantic HTML5 elements a clean cross-browser start.

Function, flow, and experience should be created by design teams and developers, not libraries or boilerplates. Baseboard supports this philosophy and lets you begin from (almost) nothing. Less than 65 lines of CSS eliminate default styling and reduce HTML elements to a purely semantic foundation.

Baseboard is an alternative to Reset CSS and Normalize CSS. Both of these boilerplates are functional but overused and misunderstood. Reset CSS creates convoluted CSS, confusing inheritance issues, and unnecessary declarations. Normalize CSS tries for a smooth cross-browser experience at the risk of a large file size and many repeated declarations.

Baseboard tries to reconcile between the two. There are no repeated declarations. Each element derives from a single default point of inheritance. Block level objects have their "box-sizing" property set to "border-box" by default.

The purpose of Baseboard is to give developers, artists, and designers a little more control and a fair blank-slate.

## Usage ##

Grab `baseboard.css` from the src directory and copy it into your resources or project directory. Rename it something relative to your project. 

Add your '@font-faces' after:

`/* Put @font-faces here.*/`

Add custom declarations after:

`/* Put custom classes here. */`

## License ##

Baseboard is released under the [MIT License](https://opensource.org/licenses/MIT) and is intended for students, artists, and small start-ups.
