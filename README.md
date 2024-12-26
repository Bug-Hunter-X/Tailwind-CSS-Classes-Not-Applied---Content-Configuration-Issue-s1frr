# Tailwind CSS Classes Not Applied - Content Configuration Issue

This repository demonstrates a common issue encountered when using Tailwind CSS: classes not being applied due to an incorrect or incomplete `content` array in the `tailwind.config.js` file.

## Problem

Tailwind CSS directives are not being applied to your HTML elements, even though you've correctly included the Tailwind CSS directives. This often indicates a problem with the paths specified in the `content` option of the Tailwind configuration file.

## Solution

The `content` option in your `tailwind.config.js` file must accurately specify the locations where Tailwind CSS classes are used.  Ensure that your `tailwind.config.js` file has a correct and comprehensive content array which correctly points to your html and js files. 

This usually involves updating the `content` option to include all relevant files and directories containing your HTML and JavaScript files where you are using Tailwind classes. Check your directory structure and adjust the paths accordingly.

## How to use this example

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run build` or similar to build your project and generate the necessary CSS file. You may have to check your project's documentation on how to run build.
4. Open `index.html` to view the example.

This will show you how to configure the `content` array correctly.