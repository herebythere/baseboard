# Baseboard

Baseboard is a minimalist stylesheet for web projects.

## About

Baseboad is built with the following design contraints:
- styles are based on firefox, webkit, and chromium defaults
- do not inlcude deprecated elements
- assume nothing about typography
- no wildcard (*) rules
- accept styling input element across browsers is currently not possible
- no italic styles excpet for `<i>` elements
- no bold styles except for `<b>` or `<strong>` elements

## Theme

Baseboard includes `baseboard-theme.css` which provides CSS Custom Properties for the following values:

	--line-height: 2rem;
	--color: #121212;
	--background: repeating-linear-gradient(#efefef, #efefef var(--line-height), #ffffff var(--line-height), #ffffff calc(var(--line-height) * 2));
	--font: 1rem/var(--line-height) serif;
	--h1-font: 1.6rem/var(--line-height) serif;
	--h1-color: #212121;
	--h2-font: 1.5rem/var(--line-height) serif;
	--h2-color: #323232;
	--h3-font: 1.4rem/var(--line-height) serif;
	--h3-color: #433434;
	--h4-font: 1.3rem/var(--line-height) serif;
	--h4-color: #545454;
	--h5-font: 1.2rem/var(--line-height) serif;
	--h5-color: #656565;
	--h6-font: 1.1rem/var(--line-height) serif;
	--h6-color: #676767;
	--code-font: 1rem/var(--line-height) monospace, monospace;
	--code-color: #000000;
	--sub-font: 0.8rem/var(--line-height) monospace, monospace;
	--sub-color: #000000;

## License

BSD 3-Clause License.
