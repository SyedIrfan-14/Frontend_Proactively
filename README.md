# Frontend_Proactively

A modern, responsive React web application built with custom Webpack and Babel configuration, styled with CSS, and deployed on Vercel.

---

## Features

- **React 19** for building interactive user interfaces
- **Custom Webpack setup** for flexible asset bundling and optimization
- **Babel** for compiling modern JavaScript and JSX
- **CSS** for styling components
- **Image asset handling** (both static and imported)
- **Single Page Application (SPA)** routing support
- **Deployed on Vercel** with continuous deployment from GitHub

---

## 🗂️ Folder Structure
```
/public
/images # All static images used in the app
index.html # Main HTML template
/src
/components # React components
App.jsx # Main app component
index.jsx # Entry point
*.css # Stylesheets
webpack.config.js # Webpack configuration
.babelrc # Babel configuration
vercel.json # Vercel SPA routing config
```


---

## How it Works

### 1. **Webpack**

Webpack is a module bundler. It takes your React code, CSS, and images, processes them, and outputs optimized files in the `dist` directory for deployment.

- **Entry Point:** `src/index.jsx`
- **Output Directory:** `dist` (all deployable files go here)
- **Image Handling:**  
  - Images in `public/images/` are copied to `dist/images/` using `copy-webpack-plugin`.
  - Images imported in JS/JSX are processed and output to `dist/images/`.
- **SPA Support:** `historyApiFallback: true` ensures React Router works locally.

### 2. **Babel**

Babel is a JavaScript compiler that lets you use modern JS (ES6+) and JSX.  
The `.babelrc` file configures Babel to use:
- `@babel/preset-env` for modern JS
- `@babel/preset-react` for JSX

### 3. **Vercel Deployment**

The app is deployed on [Vercel](https://vercel.com/), which:
- Automatically builds the app using `npm run build`
- Serves files from the `dist` directory
- Uses `vercel.json` to ensure all routes serve `index.html` (SPA fallback)
- Provides continuous deployment from GitHub

---

## 🛠️ Getting Started

### **Clone the repository**

```
git clone https://github.com/SyedIrfan-14/Frontend_Proactively.git
cd Frontend_Proactively
```


### **Install dependencies**
```
npm install
```


### **Run locally**

```
npm start
```

- App will be available at [http://localhost:3000](http://localhost:3000)

### **Build for production**

```
npm run build
```

- Final deployable files will be in the `dist` folder.

---

## 🖼️ Handling Images

- Place all static images in `public/images/`.
- Reference them in JSX as:


🌐 Deployment on Vercel
1.Push your code to GitHub.
2.Import the repo into Vercel.
3.Set the following in Vercel project settings:
4.Framework Preset: Other
5.Build Command: npm run build
6.Output Directory: dist

Add vercel.json to project root:

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
This ensures SPA routing works on Vercel.
7.Redeploy on Vercel.

📝 Key Configuration Files
webpack.config.js
Bundles JS, CSS, and images.

Copies static images from public/images to dist/images using copy-webpack-plugin.

Sets output directory to dist and publicPath to './' for correct asset loading.
.babelrc
```
text
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Allows use of modern JS and JSX.

vercel.json

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

* Common Issues & Fixes
1.White Screen After Deploy:
2.Ensure output.publicPath is './' in webpack.config.js.
3.Set Vercel Output Directory to dist.
4.Add vercel.json for SPA routing.
5.Images Not Loading:
6.Make sure images are in public/images/ and committed to GitHub.
7.Use copy-webpack-plugin to copy them during build.
8.Reference images with /images/your-image.png in JSX.

* Comments & Documentation
1.Webpack: Bundles all JS/CSS/images and outputs to dist.
2.Output Directory (dist): Only files in dist are deployed to Vercel.
3.Babel (.babelrc): Transpiles modern JS and JSX for browser compatibility.
4.SPA Routing: Handled by vercel.json and Webpack dev server config.
5.Image Handling: Static images are copied to dist/images for deployment.

🙏 Credits
Created by Syed Irfan
Deployed using Vercel link https://frontend-proactively.vercel.app/


This README covers all the steps, tools, and troubleshooting you discussed and will be helpful for anyone viewing your project.



