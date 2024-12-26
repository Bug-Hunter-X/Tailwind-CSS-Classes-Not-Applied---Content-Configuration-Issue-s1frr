```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // This line is important!
  theme: {
    extend: {
      // ... your custom theme ...
    },
  },
  plugins: [],
};
```
This configuration is incomplete and assumes that your HTML files, JavaScript files and any other files that use Tailwind classes are in the `src` directory and in the `index.html` file.  If your file structure is different, you need to adjust the `content` array accordingly.  Missing or incorrectly specified paths in the `content` option is a very common reason for Tailwind not picking up your classes.