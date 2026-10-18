# Quick Start Guide

## 🚀 Get Your Project Running in 5 Minutes

### Step 1: Navigate to Project Directory
```bash
cd paradise-nursery
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Visit: `http://localhost:5173`

## 🌐 Deploy to GitHub Pages

### Quick Deploy (3 Steps)

1. **Initialize Git and Push**
```bash
git init
git add .
git commit -m "Paradise Nursery Shopping Application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/paradise-nursery.git
git push -u origin main
```

2. **Enable GitHub Pages**
- Go to: `https://github.com/YOUR-USERNAME/paradise-nursery/settings/pages`
- Wait for GitHub Actions to finish (check Actions tab)
- Your site will be live at: `https://YOUR-USERNAME.github.io/paradise-nursery/`

3. **Verify Deployment**
- Visit your live site
- Test all features
- Verify cart functionality works

## 📋 URLs for Submission

Replace `YOUR-USERNAME` with your GitHub username:

```
Repository: https://github.com/YOUR-USERNAME/paradise-nursery
Live Site: https://YOUR-USERNAME.github.io/paradise-nursery/

README.md: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/README.md
AboutUs.jsx: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/AboutUs.jsx
App.css: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.css
App.jsx: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.jsx
CartSlice.jsx: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/redux/CartSlice.jsx
ProductList.jsx: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/ProductList.jsx
CartItem.jsx: https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/CartItem.jsx
```

## ✅ Pre-Submission Checklist

Test these features on your deployed site:

**Landing Page:**
- [ ] Background image loads
- [ ] Company name is visible
- [ ] Company description is readable
- [ ] "Get Started" button navigates to products

**Product Listing:**
- [ ] All 11 plants display
- [ ] Images load correctly
- [ ] Prices are visible
- [ ] "Add to Cart" buttons work
- [ ] Buttons disable after clicking
- [ ] Cart badge updates with item count

**Navigation Header:**
- [ ] Home link works
- [ ] Plants link works
- [ ] Cart link works
- [ ] Cart badge shows correct number

**Shopping Cart:**
- [ ] Added items appear in cart
- [ ] Thumbnails display
- [ ] Prices are correct
- [ ] Quantity controls work (+ and -)
- [ ] Subtotals calculate correctly
- [ ] Total items count is accurate
- [ ] Total cost is correct
- [ ] Delete button removes items
- [ ] "Continue Shopping" returns to products
- [ ] "Checkout" shows "Coming Soon"

## 🐛 Common Issues & Fixes

**Issue: Blank page after deployment**
```
Fix: Clear browser cache (Ctrl + Shift + R)
```

**Issue: 404 on GitHub Pages**
```
Fix: Check Settings > Pages, ensure gh-pages branch is selected
```

**Issue: Images not loading**
```
Fix: Images use Unsplash CDN - check internet connection
```

**Issue: Cart not updating**
```
Fix: Check browser console for Redux errors
```

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Quick Feature Test

1. Visit landing page → Click "Get Started"
2. Add 3 different plants to cart
3. Check cart badge shows "3"
4. Go to cart page
5. Increase quantity of one item
6. Decrease quantity of another
7. Delete one item
8. Verify totals update correctly
9. Click "Continue Shopping"
10. Click "Checkout" to see "Coming Soon"

## 📞 Need Help?

Check these files for detailed information:
- `README.md` - Full project documentation
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- `PROJECT_SUMMARY.md` - Complete feature list

---

**Time to Complete**: 5 minutes for setup + 10 minutes for deployment = 15 minutes total

**You're ready to submit!** 🎉
