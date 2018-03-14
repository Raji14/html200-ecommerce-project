# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
STEP 1: 

Used the website audience classification tool to document the different audience attributes and their relevant impact (Added the updated websiteaudienceclassificationtool.doc document to the gh-pages repo). 
Based on this exercise, deduced the following:
[1] Audience with the highest impact - Adults and teenagers, mostly female
[2] Device they will use mostly - PC, smartphones
[3] User's location will have medium/low impact
[4] Importance of showing the right content to the user would have a high impact

STEP 2:

Researched a couple of sites to gather data on the most commonly used breakpoints and data on most popular devices. These articles were pretty useful.
- https://medium.com/@uiuxlab/the-most-used-responsive-breakpoints-in-2017-of-mine-9588e9bd3a8a
- https://www.w3schools.com/browsers/browsers_display.asp
- http://www.pewinternet.org/2015/10/29/the-demographics-of-device-ownership/

These sites provided information on the most popular smartphones in 2017 
- https://deviceatlas.com/blog/most-popular-smartphones-2017
- https://www.statista.com/statistics/716302/cell-phone-brands-commonly-owned-by-us-consumers/

STEP 3:

Used the http://responsivedesignchecker.com website to check how the website displays on various screens.
Based on the research, arrived at the following popular resolutions to test for:
[1] 1366x768 
    Result - Website looks fine, and exactly as designed.
[2] 1920x1080
    Result - Website appears as desired. Image and text scales as desired.
[3] 1280x1024
    Result - This resolution was not an option on the website, could not test.

Popular devices to test for: 
[1] iPhone 6/6S/7
    Result - Index and dresses page appears fine, but some text wrapping occurs in the signup page.
[2] iPhone 6s Plus/7 Plus
    Result - Index and dresses page appears fine, but some text wrapping occurs in the signup page.
[3] Samsung Galaxy S7
    Result - Index and dresses page appears fine, but some text wrapping occurs in the signup page.

STEP 4:
Ran the web page performance test at https://www.webpagetest.org
Results: 
First Byte Time       - A
Keep-Alive Enabled    - A
Compress Transfer     - A
Compress Images       - B
Cache Statis content  - F
Effective use of CDN  - Checkmark

































