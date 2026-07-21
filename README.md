# Starbucks Clone Website
A beginner Starbucks cloned frontend built using Node.js, Express and the EJS templating engine. The goal of this project is to practice server-side rendering, modular components, custom CSS layouts and route management.

# Tech Stack
* Node.js

* Express.js

* EJS (Embedded JavaScript)

* CSS (Modular stylesheets)

* Icons: Font Awesome

## Website Sections
-Home page

-Menu page

-Rewards page

## Project Tree
```text
starbucks-clone/
├── index.js                  # Express server entry point & route handlers
├── package.json              # Project dependencies and scripts
├── README.md
├── public/                   # Static assets served directly by Express
│   ├── css/
│   │   ├── partials
│   │   │     ├── Footer.css  # Modular footer styling
│   │   │     └── Navbar.css  # Modular navigation bar styling
│   │   ├── Global.css        # Resets, navbar, footer, and shared utilities
│   │   ├── home.css          # Page-specific styling for the home page
│   │   └── navbar.css        # Modular navbar styles
│   └── images/
│       ├── icons
│       └── starbucks-icon.svg
└── views/                    # EJS views compiled on the server
    ├── pages/
    │   ├── home.ejs          # Home page template
    │   ├── about.ejs         # About Us page template
    │   └── login.ejs         # Login page template
    └── partials/             # Reusable UI partial components
        ├── header.ejs        # Shared HTML <head> & stylesheet links
        ├── navbar.ejs        # Primary global navigation bar
        └── footer.ejs        # Site-wide Starbucks footer section
```

# Disclaimer
This project is strictly for educational purposes only. It is not endorsed or affiliated with Starbucks.
The Starbucks name, trademarks and brand assests belong to their respective owner.
The design of this project is inpired by the public Starbucks website. 

## Preview

You can view the website here: 

https://bunako-png.github.io/starbucks-clone/
