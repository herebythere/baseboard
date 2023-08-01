# Baseboard

Baseboard keeps styles consistent between firefox, webkit, and chromium
browsers.

## About

Baseboard removes the following default styles:

- paddings
- margins
- borders
- text-alignments

Baseboard is built with the following contraints:

- deprecated elements are not considered
- typography is styled in a later theme
- input elements cannot be styled consistently across browsers through CSS alone
  (Aug 2023)

## How to use

Copy `./v0.1/baseboard.css` into a project.

Copy `./v0.1/baseboard_inputs.css` into a project for consistent `input`
interactions.

## License

Baseboard is released under the BSD 3-Clause License.
