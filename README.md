Analytics Dashboard
📌 Project Overview

This project is a responsive Analytics Dashboard created using only HTML, CSS, and JavaScript.

The dashboard is designed based on the provided UI reference and displays business analytics, performance metrics, charts, and an ML Model Registry.

No frameworks or external UI libraries are used.

🚀 Technologies Used
HTML5 – Page structure and content
CSS3 – Styling, layout, responsiveness, cards, buttons, and table
JavaScript – Interactions and chart functionality
HTML Canvas – Revenue and Demand charts
📂 Project Structure
analytics-dashboard/
│
├── index.html
├── styles.css
├── script.js
└── README.md
index.html

Contains the complete dashboard structure:

Header
Search box
Analytics page header
Welcome card
Metric cards
Revenue Forecast section
Demand Prediction section
ML Model Registry
Footer
Floating action button
styles.css

Contains all the styling for:

Dashboard layout
Header
Cards
Buttons
Charts
Table
Status badges
Footer
Responsive design
script.js

Contains the dashboard functionality:

Search filtering
Clear search
Refresh button
Revenue chart
Demand prediction chart
Responsive chart resizing
Model View button interaction
✨ Features
1. Search Functionality

The search box allows users to search through the ML Model Registry.

For example:

Sales

will display the matching:

Sales Forecasting
2. Dashboard Metrics

The dashboard displays four main metrics:

Model Accuracy – 98.4%
Precision – 0.97
Recall – 0.96
F1 Score – 0.96

Each metric contains:

Icon
Metric value
Mini chart
Performance indicator
3. Revenue Forecast

A revenue forecast chart displays monthly revenue data from:

Jan → Sep

The chart is created using the HTML <canvas> element and JavaScript.

4. Demand Prediction

The Demand Prediction chart displays predicted demand for seven days:

Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday

The chart displays the corresponding demand values using JavaScript.

5. ML Model Registry

The dashboard contains a model registry table with:

Model Name	Type	Accuracy	Status
Sales Forecasting	Regression	98.4%	Training 75%
Demand Prediction	Forecast	94.2%	Active
Customer Churn	Classification	91.8%	Active
Inventory Optimization	Optimization	-	Pending
6. Refresh Button

The Refresh button provides a simple interactive refresh effect.

When clicked:

↻ Refreshing...

is displayed temporarily before returning to:

↻ Refresh
7. View Button

Each model contains a View button.

When clicked, JavaScript displays the selected model name.

Example:

You selected: Sales Forecasting
8. Responsive Design

The dashboard is responsive and adjusts its layout for:

Desktop
Tablet
Mobile

CSS media queries are used to change the layout depending on screen size.

🎨 UI Sections

The dashboard contains the following sections:

┌──────────────────────────────────────┐
│ Header / Search                      │
├──────────────────────────────────────┤
│ Analytics + Export                   │
├──────────────────────────────────────┤
│ Welcome Back                         │
├──────────────────────────────────────┤
│ Metric  │ Metric │ Metric │ Metric   │
├────────────────────┬─────────────────┤
│ Revenue Forecast   │ Demand Prediction│
├────────────────────┴─────────────────┤
│ ML Model Registry                    │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
▶️ How to Run the Project
Step 1: Create a project folder
analytics-dashboard
Step 2: Create the files
index.html
styles.css
script.js
README.md
Step 3: Add the code

Add the HTML code to:

index.html

Add the CSS code to:

styles.css

Add the JavaScript code to:

script.js
Step 4: Open the project

Open index.html in a web browser.

You can also use VS Code Live Server to run the project.

📱 Responsive Behavior

On smaller screens:

Metric cards change from 4 columns to 2 columns.
Charts change to a single-column layout.
Welcome actions become vertically arranged.
Metric content becomes vertically aligned.
Footer content becomes centered.
Tables can scroll horizontally.
🧠 Concepts Practiced

This project demonstrates the following concepts:

HTML
Semantic HTML
Forms and inputs
Buttons
Tables
Canvas
Sections
Header and footer
CSS
Flexbox
CSS Grid
Box model
Borders
Border radius
Shadows
Responsive design
Media queries
Hover effects
JavaScript
DOM manipulation
querySelector
addEventListener
Array iteration
Event handling
Dynamic filtering
Canvas API
Functions
setTimeout
Window resize events
🔮 Future Improvements

The project can be enhanced by adding:

Real API data
Dynamic charts
Dark mode
Dropdown filters
Date range filtering
Export to Excel/PDF
Authentication
Backend integration
Real-time analytics
Interactive chart tooltips
