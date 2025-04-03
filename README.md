# Assignment : Supreme group

## Overview

Supreme Group is a React-based web application designed with modern frontend technologies. The project utilizes Tailwind CSS for styling and Context API for state management, ensuring a scalable and maintainable architecture.

## Deployment

The **Supreme Group** app is deployed and accessible at:  

🔗 [Live Deployment](https://supreme-web.netlify.app/) *app link*  
🔗 [Source Code](https://github.com/riteshmyhub/blacksof-assignment) *github repo*  

### Deployment Details  
- **Hosting Platform:** Netlify  
- **Build Tool:** Vite for optimized performance  

## Project Setup

```bash
npm install

```

## Tech Stack
- **Frontend:** React.js with Vite  
- **Styling:** ShadCN UI, Tailwind CSS  
- **Architecture:** Modular and component-driven structure  
- **State Management:** Context API 
- **Animations :** Framer Motion

## Architecture
```bash
   src/
      ├── app/ 
              ├─ [pageName]/      
                ├─ [pageName].page.tsx  # View: Defines the UI and layout for the page
                     ├── [pageName].controller.tsx  # Controller: Manages data fetching and logic, imported into the view
                     ├── partials/
                         ├── Component.tsx         # Page-specific components (used only within this page)
              ├── app.tsx                           # Root application component
              ├── app.routing.tsx                   # Configures lazy-loaded page routes
    
      ├── assets/ 
          ├── fonts/                               # Font files and configurations
          ├── styles/
               ├── index.css                       # Global styles and theme settings
         
      ├── context/ 
               ├── app.context.tsx                 # Global context provider for application-wide state management
         
      ├── lib/ 
               ├── utils.ts                        # Utility functions used across the application
         
      ├── shared/ 
          ├── components/                          # Global reusable components (Card, Modals, etc.)
          ├── hooks/                               # Global reusable custom hooks
          ├── ui/                                  # Low-level UI elements (inputs, checkboxes, etc.)
          
      ├── main.tsx                                 # Application entry point
```
## optimization techniques

- **Lazy Loading:** Use `React.lazy()` and `Suspense` to load components only when needed.  
- **Code Splitting:** Utilize dynamic imports (`import()` with `React.lazy`) to split bundles.  
- **Tree Shaking:** Remove unused code by leveraging ES6 module imports.  
- **Memoization:** Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
- **Efficient State Management:** Avoid unnecessary re-renders by structuring state optimally.   
- **Optimized Rendering:** Use key props correctly to prevent unnecessary list re-renders.   
- **Optimized Image Loading:** Use WebP format for images to reduce file size and improve page speed.  

## Third-party libraries used
- **Formik:** For form handling and validation.  
- **React Framer Motion:** For smooth animations and transitions.  
- **Axios:** For making API requests efficiently.  
- **Tailwind CSS:** For utility-first styling and responsive design.  
- **ShadCN UI:** For pre-built, customizable UI components.  

## Assumptions Made and Decisions Taken

- Used **Context API** for lightweight state management.  
- Chose **Tailwind CSS** and **ShadCN UI** for styling.  
- Used **Formik** for efficient form handling.  
- Preferred **Axios** over Fetch for API requests.  
- Implemented **Framer Motion** for smooth animations.  
- Applied **lazy loading & code splitting** for performance.  
- Optimized images using **WebP** format.

## Challenges Faced and Potential Solutions

- **Animation Performance:** Avoiding janky animations in UI interactions.  
  - *Solution:* Used **Framer Motion** for GPU-accelerated, smooth animations.
  
 ## Suggested Upcoming Features and Improvements
- **Dark Mode Support:** Implement a toggle for light and dark themes. 

## Responsive Design Strategy

- **Mobile-First Approach:** Designed layouts prioritizing smaller screens first, then scaled up.    
- **Tailwind CSS Breakpoints:** Leveraged Tailwind’s responsive classes for consistency across devices.  

