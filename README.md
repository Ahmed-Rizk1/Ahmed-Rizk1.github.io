# Portfolio Website - Ahmed Rizk

This is a personal portfolio website designed for deployment on GitHub Pages. It features a modern, responsive design and showcases projects in Data Science, Machine Learning, and Generative AI.

## 📂 Project Structure

```
Ahmed-Rizk1.github.io/
├── index.html          # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet (Vanilla CSS)
│   ├── js/
│   │   └── main.js     # Interaction logic
│   └── images/
│       └── profile.jpg # Profile photo
└── projects/           # Individual project pages
    ├── ai-agents.html
    ├── distilbert-imdb.html
    ├── churn-prediction.html
    ├── land-classification.html
    ├── car-price-predictor.html
    └── yolov8-app.html
```

## 🚀 Deployment Instructions

Since this repository is named `Ahmed-Rizk1.github.io`, GitHub should automatically treat it as a User Pages site.

1.  **Push Changes**: Ensure all files are committed and pushed to the `main` (or `master`) branch.
2.  **Verify Settings**:
    -   Go to **Settings** > **Pages** in your GitHub repository.
    -   Under **Source**, select **Deploy from a branch**.
    -   Under **Branch**, select `main` and `/ (root)`.
    -   Click **Save** (if not already set).
3.  **Visit Site**: Your portfolio will be live at `https://Ahmed-Rizk1.github.io/`.

## 🛠 Management

### Adding a New Project
1.  Copy one of the existing files in `projects/` (e.g., `projects/template.html` if you create one, or just copy `ai-agents.html`).
2.  Update the content (Title, Description, Technologies, Links).
3.  Add a new card in `index.html` under the `#projects` section linking to the new file.

### Customization
-   **Colors**: Edit the CSS variables in `assets/css/style.css` (root).
-   **Content**: Edit `index.html` directly for any resume updates.
