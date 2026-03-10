# Portfolio - Youssef Ashraf

A high-performance, terminal-themed portfolio website built with Astro, React, and Tailwind CSS. The design reflects a "Systems & Data Engineer" persona with a cyberpunk/matrix aesthetic.

## 🚀 How to Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    - Open your browser and visit `http://localhost:4321` to see the site.
    - The server supports hot-reloading, so changes will appear instantly.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    - The built files will be in the `dist/` directory.

4.  **Preview Production Build:**
    ```bash
    npm run preview
    ```

## 🛠️ Tech Stack
-   **Core Framework:** Astro (Zero-JS by default)
-   **UI Library:** React (for interactive islands like the Navbar)
-   **Styling:** Tailwind CSS (Custom dark theme)
-   **Topography:** Inter & Fira Code
-   **Animations:** Framer Motion

## 📂 Project Structure
-   `src/pages/index.astro`: The main landing page assembling all sections.
-   `src/components`:
    -   `Navbar.tsx`: Interactive React navigation bar.
    -   `Hero.astro`: Intro section with "Systems & Data" headline.
    -   `About.astro`: "Person Behind the Code" data.
    -   `Skills.astro`: Tech stack (Data, Systems, Tools).
    -   `Projects.astro`: Featured projects list.
    -   `Footer.astro`: Credits and social links.
-   `src/layouts/Layout.astro`: Global layout with fonts and background.
-   `src/styles/global.css`: Global styles including Tailwind directives.
