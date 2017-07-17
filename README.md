# Baseboard #

## Abstract ##

Baseboard is a CSS "reset" button.

## Details ##

Function, flow, and experience should be created by design teams and developers, not libraries or boilerplates. Baseboard supports this philosophy and lets you begin from (almost) nothing, eliminating default styles and reducing HTML elements to a purely semantic foundation.

Baseboard is an alternative to Reset CSS and Normalize CSS. Reset CSS creates convoluted CSS and confusing inheritance trees. Normalize CSS has a large footprint and many repeated declarations.

Baseboard tries to reconcile the two. It's modular and easy to debug. There are no repeated declarations and each element derives from a single chain of inheritance.

The purpose of Baseboard is to give developers, artists, and designers a little more control and a fair blank-slate. It's the best place to start new projects. Included are a main, min, and a less file. I hope it helps.

## Usage ##

Grab `baseboard.css` from the src directory and copy it into your resources or project directory. Rename it something related to your project.

Add your '@font-faces' after:

`/* Put @font-faces here.*/`

Add custom declarations after:

`/* Put custom declarations here. */`

## License ##

Baseboard is released under the [MIT License](https://opensource.org/licenses/MIT) and is intended for students, artists, and small start-ups.
