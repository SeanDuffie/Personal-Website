# Personal Website

## Tech Stack

For this Project I'm going with TypeScript React, Vite, and Vercel for my tech stack.

1. Language
    1. HTML - The raw text and basic formatting that gets sent to the user.
    2. CSS - The raw styling instructions that gets sent to the user.
    3. JavaScript - a web-based scripting language for more complex functions.
        - TypeScript - A variant of JavaScript that follows typing rules for better performance.

2. Framework
    1. React - Made by Meta. The golden standard.
    2. Vue.js - Simple and easy to use, popular among solo devs.
    3. Svelte - Open Source, doesn't run in browser like react. Very small and fast sites.
    4. Angular - Made by Google. Very heavy, but popular with large corporations.
    5. Astro - A framework for frameworks. Allows you to plug other frameworks together.

3. Build Tools
    1. Vite - Modern, very fast and lightweight.
    2. Turbopack - Developed by Vercel creators to compete with Vite. Successor to Webpack. Built in Rust.
    3. Parcel - Marketed as "zero configuration". Plug and Play with an HTML file.

4. Platform
    1. GitHub Pages
    2. Vercel
    3. Netlify

## Setup

1. Select a location and create the Vite Project.
    ```bash
    npm create vite@latest my-portfolio -- --template react-ts
    cd my-portfolio
    npm install
    ```
2. Install Tailwind CSS v3 (v4 is unstable for my purposes).
    ```bash
    npm install -D tailwindcss@^3 postcss autoprefixer
    npx tailwindcss init -p
    ```
3. Modify the tailwind configuration in `tailwind.config.js`.
    <details>
    <summary>Click to view the intended contents of the tailwind config</summary>

    ``` javascript
        /** @type {import('tailwindcss').Config} */
        export default {
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {
                    colors: {
                        border: "hsl(var(--border))",
                        input: "hsl(var(--input))",
                        ring: "hsl(var(--ring))",
                        background: "hsl(var(--background))",
                        foreground: "hsl(var(--foreground))",
                        primary: {
                            DEFAULT: "hsl(var(--primary))",
                            foreground: "hsl(var(--primary-foreground))",
                        },
                        secondary: {
                            DEFAULT: "hsl(var(--secondary))",
                            foreground: "hsl(var(--secondary-foreground))",
                        },
                        destructive: {
                            DEFAULT: "hsl(var(--destructive))",
                            foreground: "hsl(var(--destructive-foreground))",
                        },
                        muted: {
                            DEFAULT: "hsl(var(--muted))",
                            foreground: "hsl(var(--muted-foreground))",
                        },
                        accent: {
                            DEFAULT: "hsl(var(--accent))",
                            foreground: "hsl(var(--accent-foreground))",
                        },
                        popover: {
                            DEFAULT: "hsl(var(--popover))",
                            foreground: "hsl(var(--popover-foreground))",
                        },
                        card: {
                            DEFAULT: "hsl(var(--card))",
                            foreground: "hsl(var(--card-foreground))",
                        },
                    },
                    borderRadius: {
                        lg: "var(--radius)",
                        md: "calc(var(--radius) - 2px)",
                        sm: "calc(var(--radius) - 4px)",
                    },
                },
            },
            plugins: [],
        }
    ```
4. Verify the postcss configuration in `postcss.config.js`.
    <details>
    <summary>Click to view the intended contents of the postcss config</summary>

    ``` javascript
        export default {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        }
    ```
5. Create or verify the `src/globals.css` file.
    <details>
    <summary>Click to view changes to `src/globals.css` (mainly in the "content" and "theme").</summary>

    ``` css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
        :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
            --primary: 222.2 47.4% 11.2%;
            --primary-foreground: 210 40% 98%;
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 222.2 84% 4.9%;
            --radius: 0.5rem;
        }

        .dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
            --card: 222.2 84% 4.9%;
            --card-foreground: 210 40% 98%;
            --popover: 222.2 84% 4.9%;
            --popover-foreground: 210 40% 98%;
            --primary: 210 40% 98%;
            --primary-foreground: 222.2 47.4% 11.2%;
            --secondary: 217.2 32.6% 17.5%;
            --secondary-foreground: 210 40% 98%;
            --muted: 217.2 32.6% 17.5%;
            --muted-foreground: 215 20.2% 65.1%;
            --accent: 217.2 32.6% 17.5%;
            --accent-foreground: 210 40% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 40% 98%;
            --border: 217.2 32.6% 17.5%;
            --input: 217.2 32.6% 17.5%;
            --ring: 212.7 26.8% 83.9%;
        }
    }

    @layer base {
        body {
            @apply bg-background text-foreground;
        }
    }
    ```

6. Point to the `src/globals.css` file in the `src/main.tsx` file (this applies globally to the project).
    ``` typescript
        import App from './App.tsx'
        import './globals.css'
    ```

7. Install any additional dependencies
    `npm install {dependency 1} {dependency 2} {...}`

8. Add the rest of the `*.tsx` components from the Figma application. (Only the main App and the pages are necessary, as well as any custom UI components. The rest should be downloaded when you do the final step)
    - `src/App.tsx`
    - `src/components/Navigation.tsx`
    - `src/components/LandingPage.tsx`
    - `src/components/ProjectsPage.tsx`
    - `src/components/ExperiencePage.tsx`
    - `src/components/SchedulePage.tsx`
    - `src/components/ProjectDetailPage.tsx`
    - `src/components/ui/` (this)

9. Run Locally
    - `npm run dev`
    - Access page from `http://localhost:5173`

10. Deploy to Vercel through Git
    1. Push changes to Git
    ``` bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin <your-github-repo-url>
        git push -u origin main
    ```
    2. Import project from GitHub into Vercel
    3. Click "Deploy"
    4. Or through Vercel CLI
    ``` bash
        npm install -g vercel
        vercel
    ```

## NPM

1. Create the npm package:
`npm init` (This will walk you through the process in the terminal)
    1. Package Name: ([default]): By default this is the folder name, it cannot contain capital letters.
    2. Version: (1.0.0): What version of development is this?
    3. Description: A text description of the project
    4. Entry Point: (index.js): Where does the website start?
    5. Test Command: ("Error: no test specified"; false): What command should be run when you type `npm test`?
    6. Git Respository: What repository is the project linked to?
    7. Keywords: Project SEO?
    8. Author: Your name
    9. License: (ISC): 
    10. Type (commonjs): Either commonjs or module. Are you using original or modern Node.js? require() or import/export? synchronous or asynchronous/await?
2. Install JavaScript dependencies from npm registry:
`npm install`
3. npm run dev


## NOTES

1. dimensions of landing page
    - Desktop:
        - Width = 940-960 pixels
        - Height = ~720 pixels
    - Mobile:
        - Width = 320 pixels
2. Byte size of landing page
    - Desktop average = 1.5-3 MB
    - Mobile average = 1-2.5 MB
3. Contributors to size
    - Images and Videos
        - Optimize
            - PNG for transparency
            - JPEG for images with lots of adjacent color
            - WEBP for quality compression
        - Hero Image
        - Headshot Image
        - Linkedin, github, and gmail icon images
        - Student ID image
    - Javascript and CSS
    - Third party integrations
        - Bootstrap.min.css: 31.1 kB
        - Bootstrap.min.js: 18.1 kB
        - free.min.css: 13.3 kB
        - lucide-react.js: 959 kB
        - react-day-picker.js: 898 kB
        - @radix-ui_react-select: 174 kB
