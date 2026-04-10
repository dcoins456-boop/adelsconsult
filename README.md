# Adels Consult Landing Page

This is a static one-page website prepared for Netlify deployment.

## Main Files

- `index.html` contains the full landing page layout based on the provided PNG mockup.
- `styles.css` contains the brand styling using `#0504AA`, `#EDC531`, `#000000`, and `#FFFFFF`.
- `script.js` handles smooth scrolling for the navigation links.
- `success.html` is the thank-you page shown after a successful quote request.
- `assets/images/` contains the logo and image placeholder locations.

## Image Placement

Replace these placeholder areas with your real images:

- Hero main image area in the top section
- Small hero image card in the top-right
- About section image block
- Quote section image block

You can either keep the current placeholders and swap them for real `<img>` tags later, or I can wire the final image files in for you once you have them.

## GitHub Pages Form

The quote form is now configured to use `FormSubmit`, which works for static sites on GitHub Pages without needing a backend.

Important:

1. The first test submission will trigger a confirmation email to `info@adelsconsult.co.uk`.
2. You must confirm that email once before future submissions are delivered normally.
3. After confirmation, the form will send submissions to that inbox and return visitors to `success.html`.

FormSubmit docs:

- https://formsubmit.co/
