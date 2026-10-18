# Deployment Guide - Paradise Nursery

## Quick Setup for GitHub and GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd paradise-nursery
git init
git add .
git commit -m "Initial commit: Paradise Nursery Shopping Application"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click on "New Repository" button
3. Name it: `paradise-nursery`
4. Keep it **PUBLIC** (required for GitHub Pages free tier)
5. Do NOT initialize with README (we already have one)
6. Click "Create Repository"

### Step 3: Push to GitHub

Replace `<your-username>` with your actual GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/paradise-nursery.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", wait for the GitHub Actions workflow to complete
5. Once deployed, your site will be available at:
   ```
   https://<your-username>.github.io/paradise-nursery/
   ```

### Step 5: Wait for Deployment

- The GitHub Actions workflow will automatically build and deploy your app
- Check the "Actions" tab to monitor the deployment progress
- First deployment typically takes 2-3 minutes

## URLs for Submission

After deployment, use these URL patterns for your submission:

### GitHub File URLs

1. **README.md**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/README.md
   ```

2. **AboutUs.jsx**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/components/AboutUs.jsx
   ```

3. **App.css**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/App.css
   ```

4. **App.jsx**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/App.jsx
   ```

5. **CartSlice.jsx**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/redux/CartSlice.jsx
   ```

6. **ProductList.jsx**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/components/ProductList.jsx
   ```

7. **CartItem.jsx**
   ```
   https://github.com/<your-username>/paradise-nursery/blob/main/src/components/CartItem.jsx
   ```

8. **Repository URL**
   ```
   https://github.com/<your-username>/paradise-nursery
   ```

### Deployed Application URL

```
https://<your-username>.github.io/paradise-nursery/
```

## Troubleshooting

### Issue: GitHub Pages not deploying

**Solution:**
1. Check if GitHub Actions workflow ran successfully in the "Actions" tab
2. Make sure the repository is public
3. Verify that GitHub Pages is enabled in Settings > Pages
4. Check if the gh-pages branch was created automatically

### Issue: Blank page after deployment

**Solution:**
1. Check browser console for errors
2. Verify the `base` path in `vite.config.js` matches your repository name
3. Clear browser cache and try again

### Issue: 404 errors for assets

**Solution:**
- Ensure `base: '/paradise-nursery/'` in `vite.config.js` is correct
- Assets must be loaded relative to this base path

### Issue: GitHub Actions workflow fails

**Solution:**
1. Check the Actions tab for error messages
2. Ensure `package.json` has correct scripts
3. Verify all dependencies are in `package.json`
4. Re-run the workflow from the Actions tab

## Making Updates

After making changes to your code:

```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your application.

## Testing Locally Before Deployment

Always test your build locally before pushing:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## Grading Checklist

Before submission, verify:

- [ ] Repository is public
- [ ] All files are committed and pushed
- [ ] GitHub Pages is enabled and site is live
- [ ] Landing page displays with background image
- [ ] Company name and description are visible
- [ ] "Get Started" button navigates to products page
- [ ] At least 6 plants are displayed across 3+ categories
- [ ] Each plant has thumbnail, name, description, and price
- [ ] "Add to Cart" button works and becomes disabled
- [ ] Cart icon shows correct item count
- [ ] Navigation links work (Home, Plants, Cart)
- [ ] Shopping cart displays all added items
- [ ] Quantity increase/decrease buttons work
- [ ] Delete button removes items
- [ ] Total items and total cost are displayed correctly
- [ ] "Continue Shopping" button works
- [ ] "Checkout" button shows "Coming Soon" message
- [ ] All Redux functionality works properly

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Review the GitHub Actions logs
3. Verify all files are present and correctly named
4. Ensure all imports in components are correct
5. Check that vite.config.js has the correct base path

---

Good luck with your submission! 🌿
