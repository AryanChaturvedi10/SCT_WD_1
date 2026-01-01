# SCT_WD_1

Finpay Landing Page This repository contains the front-end code for the Finpay landing page, a modern, responsive, and interactive website designed to showcase Finpay's financial management solutions for small businesses.

Table of Contents Features

Technologies Used

Project Structure

Setup and Running Locally

Customization

Features Responsive Design: Built with Tailwind CSS, ensuring an optimal viewing experience across various devices (desktops, tablets, and mobile phones).

Dynamic Navigation: The header dynamically changes its style (background and padding) on scroll, and a mobile-friendly menu provides easy navigation on smaller screens.

Authentication Modal: A pop-up modal for user login and sign-up with a sleek tab-based interface for switching between forms.

Product Showcase: Dedicated sections highlighting Finpay's core offerings:

Smart Invoicing

Cash Flow Management

Powerful Integrations

Customer Testimonials: A section to display customer feedback and build trust, featuring avatar placeholders.

Transparent Pricing: Clear and concise pricing plans (Starter, Pro, Enterprise) with features listed and a "Most Popular" highlight for the Pro plan.

Educational Resources: A "Learn" section featuring mock blog posts/articles with images and descriptions.

Interactive Elements: Includes hover effects on buttons and cards, smooth transitions, and form inputs.

Hero Section with Payment Card UI: An engaging hero section featuring a mock payment card UI to visually represent the core service.

Brand Logos: Integration of grayscale and opacity-reduced logos for partners like Klarna, Coinbase, and Instacart.

Technologies Used HTML5: Provides the structural foundation of the web page.

Tailwind CSS: A utility-first CSS framework used for rapid and responsive UI development. Loaded via CDN.

JavaScript (Vanilla JS): Powers the interactive elements, including:

Header scroll effects.

Mobile menu toggle functionality.

Authentication modal display, hide, and tab switching logic.

Google Fonts (Inter): Utilized for a modern, clean, and highly readable typography throughout the site.

SVG Icons: Used extensively for various UI elements such as the logo, feature icons, and payment options, ensuring scalability and crisp visuals.

Placeholder Images: Used for testimonials and blog post images (placehold.co).

Project Structure . ├── landingpage.html # The main HTML file defining the structure and content of the landing page. ├── landingpage.css # Custom CSS rules, primarily for applying the 'Inter' font, header scroll effects, modal transitions, and pricing button hover states. └── landingpage.js # JavaScript file containing all the client-side logic for interactive components.

Setup and Running Locally To get a local copy up and running, follow these simple steps:

Clone the repository:

git clone

Navigate to the project directory:

cd finpay-landing-page # Replace with your actual directory name if different

Open landingpage.html in your web browser: You can simply double-click the landingpage.html file, or right-click and choose "Open with" your preferred web browser.

No special server setup or build process is required as this is a static HTML, CSS, and JavaScript website.

Customization Content: All text content, images (placeholders), and links can be directly edited within landingpage.html.

Styling:

Tailwind CSS: Most of the styling is handled by Tailwind CSS classes directly in the HTML. Refer to the Tailwind CSS documentation for more customization options.

landingpage.css: For any custom CSS rules that extend beyond Tailwind's utility classes (e.g., font imports, specific transitions not easily done with Tailwind), modify landingpage.css.

JavaScript: The landingpage.js file contains the core logic for interactive components. You can modify or extend this file to add new functionalities or alter existing ones.
