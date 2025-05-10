# FakeStore E-Commerce App

## Overview

This project is a React-based e-commerce web application built using the FakeStoreAPI.
It allows users to browse a list of products, view product details, add new products, edit existing products, and delete products. 
The app is styled with React Bootstrap for a clean, responsive UI and uses React Router for navigation. (no css)
This project was developed as part of our coursework assignment at CodingTemple, Module 7- to demonstrate skills in React, API integration, state management, and responsive design.

## Features

- Home Page: A welcoming landing page with a button to navigate to the product list.
- Product Listing Page: Displays a grid of products fetched from FakeStoreAPI, with each product showing its image, title, price, and a "View Details" button.
- Product Details Page: Shows detailed information about a selected product, including options to edit or delete the product.
- Add Product Page: A form to create a new product with fields for title, price, description, and category.
- Edit Product Page: A pre-filled form to update an existing product’s details.
- Delete Product: A confirmation modal to delete a product safely.
- Navigation: A responsive navbar for easy navigation across pages (Home, Products, Add Product).
- 404 Page: A custom "Not Found" page with a countdown redirect to the home page for invalid routes.
- Responsive Design: Fully responsive UI using React Bootstrap, tested on desktop and mobile devices.
- Error Handling: Displays loading spinners and error messages for API failures.

## Tech Used

- React: Frontend JavaScript library for building the UI.
- Vite: Build tool and development server for fast setup and hot module replacement.
- React Router: For client-side routing and navigation.
- Axios: For making HTTP requests to the FakeStoreAPI.
- React Bootstrap: For styling and responsive layout.
- Bootstrap: CSS framework (used via React Bootstrap).
- FakeStoreAPI: A mock API for product data (`https://fakestoreapi.com/`).

## Setup Instructions

### Prerequisites
- Node.js: Ensure Node.js is installed
- npm: Comes with Node.js

### Installation
1. Clone or Download the Project:
     git clone [<repository-url>]      (https://github.com/Astor2386/FakeStore-app.git)
     cd fakestore-app
   
   - Sometimes it doesn't require it, but just in case, ensure you’re in the project directory (`fakestore-app`).

2. **Install Dependencies**:
   - Run the following command to install all required packages:
     
     npm install
     
3. **Start the Development Server**:
   - Launch the app with:
     npm run dev
   - Open your browser and navigate to the port shown in the terminal.

### Project Structure
fakestore-app/
├── src/
│   ├── components/
│   │   ├── AddProduct.jsx
│   │   ├── DeleteModal.jsx
│   │   ├── EditProduct.jsx
│   │   ├── HomePage.jsx
│   │   ├── NavBar.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProductList.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── App.css
├── package.json
(ReadMe has been omitted, and added directly to GitHub)
(App.CSS and index.CSS are empty due to full reliance on React Bootstrap for styling per the outline of project)


## API Details

- FakeStoreAPI: This project uses the FakeStoreAPI (`https://fakestoreapi.com/`) for product data.
- Important Note: FakeStoreAPI is a mock API and does not persist changes. When you add, edit, or delete a product, the API returns a success response, but the changes are not saved.
-  The product list (`/products`) always shows the original products provided by the API.
- Image Handling: The Add and Edit Product forms include a placeholder image (`https://via.placeholder.com/150`) in the API requests because FakeStoreAPI requires an `image` field for `POST` and `PUT` requests.
  Since image uploads are not part of the project requirements, a placeholder is used. **(It will cause the whole app to go to an error page if this is not done correctly.)**


## Special Notes, & Thanks.
- Project outline and guidance was from Jeremy Alkire at CodingTemple, and his recording of "React: FakeStoreApp"
  Note: Amongst a few differences, Jeremy uses App.css and index.css in his project incorporating CSS. I did not go this route and fully relied on Bootstrap styling for the project
  thus leaving App.css and index.css empty. To give the project my own look and feel, I also chose to change placement of NavBar, and margins / sizes throughout the app. 
