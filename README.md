# Paradise Nursery Shopping Application

A beautiful and fully functional e-commerce application for browsing and purchasing houseplants. Built with React, Redux, and Vite.

## 🌿 Project Overview

Paradise Nursery is a modern shopping application that allows users to browse a curated collection of houseplants, add them to a shopping cart, and manage their purchases. The application features a responsive design that works seamlessly across desktop, tablet, and mobile devices.

## ✨ Features

### Landing Page
- Eye-catching background image showcasing nature
- Company name and mission statement
- "Get Started" button that navigates to the product listing page
- Responsive design with smooth animations

### Product Listing Page
- **11 unique houseplants** organized into **4 categories**:
  - Air Purifying Plants (3 plants)
  - Low Maintenance Plants (3 plants)
  - Flowering Plants (3 plants)
  - Succulents (2 plants)
- Each plant displays:
  - High-quality thumbnail image
  - Plant name and description
  - Price
  - "Add to Cart" button
- Add to Cart button becomes disabled after adding item
- Navigation header with cart icon showing total items
- Smooth hover effects and transitions

### Shopping Cart Page
- Displays all items in the cart with:
  - Thumbnail image
  - Plant name
  - Unit price
  - Quantity controls (increase/decrease)
  - Subtotal for each plant type
  - Delete button to remove items
- Cart summary showing:
  - Total number of plants
  - Total cost of all items
- "Continue Shopping" button to return to product listing
- "Checkout" button displaying "Coming Soon" message
- Real-time updates when quantities change
- Empty cart state with helpful message

### Navigation Header
- Present on both Product Listing and Shopping Cart pages
- Links to Home, Plants, and Cart pages
- Shopping cart icon with dynamic badge showing total item count
- Sticky header that stays visible while scrolling
- Responsive design for mobile devices

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **Redux Toolkit 2.0.1** - State management
- **React Router DOM 6.20.0** - Navigation and routing
- **Vite 5.0.8** - Build tool and development server
- **CSS3** - Styling with modern features

## 📁 Project Structure

```
paradise-nursery/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx         # Landing page component
│   │   ├── AboutUs.css
│   │   ├── ProductList.jsx     # Product listing page
│   │   ├── ProductList.css
│   │   ├── CartItem.jsx        # Shopping cart page
│   │   ├── CartItem.css
│   │   ├── Header.jsx          # Navigation header
│   │   └── Header.css
│   ├── redux/
│   │   ├── CartSlice.jsx       # Redux slice for cart
│   │   └── store.js            # Redux store configuration
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Base styles
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow for automatic deployment:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as the source
   - Save the settings

3. The site will automatically deploy when you push to the main branch

### Option 2: Manual Deployment

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔗 Important GitHub URLs

After deploying your project, you'll need the following URLs for submission:

- **README.md**: `https://github.com/<username>/<repository>/blob/main/README.md`
- **AboutUs.jsx**: `https://github.com/<username>/<repository>/blob/main/src/components/AboutUs.jsx`
- **App.css**: `https://github.com/<username>/<repository>/blob/main/src/App.css`
- **App.jsx**: `https://github.com/<username>/<repository>/blob/main/src/App.jsx`
- **CartSlice.jsx**: `https://github.com/<username>/<repository>/blob/main/src/redux/CartSlice.jsx`
- **ProductList.jsx**: `https://github.com/<username>/<repository>/blob/main/src/components/ProductList.jsx`
- **CartItem.jsx**: `https://github.com/<username>/<repository>/blob/main/src/components/CartItem.jsx`
- **Live Demo**: `https://<username>.github.io/paradise-nursery/`

## 🎯 Key Features Implementation

### Redux State Management

The application uses Redux Toolkit for state management with the following actions:
- `addItem` - Adds a plant to the cart
- `removeItem` - Removes a plant from the cart
- `incrementItem` - Increases quantity of a plant
- `decrementItem` - Decreases quantity of a plant
- `updateQuantity` - Updates quantity directly

### Responsive Design

The application is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### User Experience Features

- Smooth animations and transitions
- Hover effects on interactive elements
- Visual feedback for user actions
- Dynamic cart badge updates
- Disabled state for "Add to Cart" after adding
- Empty cart state handling

## 📝 Component Details

### AboutUs.jsx
Contains the landing page with company information and call-to-action button.

### ProductList.jsx
Displays all available plants organized by categories with add to cart functionality.

### CartItem.jsx
Shows the shopping cart with item management capabilities and checkout options.

### Header.jsx
Provides navigation across the application with a dynamic cart counter.

### CartSlice.jsx
Redux slice managing the shopping cart state and all cart-related operations.

## 🐛 Known Issues

- Checkout functionality shows "Coming Soon" message (intentional for this project)
- Image loading depends on external URLs (Unsplash)

## 🔮 Future Enhancements

- Complete checkout process
- User authentication
- Product search and filtering
- Wishlist functionality
- Product reviews and ratings
- Payment gateway integration
- Order history

## 📄 License

This project is created for educational purposes as part of a React development course.

## 👨‍💻 Author

Created as a final project for the Front-End Development with React course.

## 🙏 Acknowledgments

- Plant images from Unsplash
- Icons and design inspiration from modern e-commerce platforms
- React and Redux documentation

---

**Note**: Make sure to replace `<username>` and `<repository>` with your actual GitHub username and repository name in all URLs before submission.
