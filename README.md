# Layer Health Dashboard

React + TypeScript + Vite template provided a minimal setup (and bit of a versioning-hell) to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## About the project 

This project is a React-based patient records dashboard designed to showcase a clean, modern front‑end architecture. It leverages Vite, TypeScript, and TailwindCSS for speed and maintainability, with DaisyUI for pre‑built components. State is managed via React Context API, and page routing is handled by React Router. The app demonstrates best practices for filtering, searching, and visualizing patient data in a scalable way.

Assessment details and requirements are in [ASSIGNMENT.md](ASSIGNMENT.md) file 

To test the app locally on port 5173, clone this repo and run:

```js
$ npm install
$ npm run dev
```
## Review our Features

### Features
* Modern stack: Vite + React + TypeScript with Tailwind CSS for styling and DaisyUI for ready‑made components.
* State management: React Context API to keep data flow clean.
* Navigation: Sticky navbar with dropdown menus; integrated React Router for seamless page transitions.
* Layout: Functional navbar/footer with working links across all dashboards.

### Pages
* Landing Page: Entry point with quick navigation to dashboards.
* Patient Records Dashboard:
    * Records sorted in alphabetical order
    * Combined filters for metadata across patients and notes.
    * Duplicate‑tag prevention and case‑insensitive string search.
    * Resetting category after each selection
    * Updated the search results when filters removed
    * Unified date formatting between raw data and calendar inputs.
    * Built‑in pagination for large datasets.
* Stats Dashboard: Visual mockups and image placeholders for analytics.
* Notes Dashboard: 
    * Detailed view of notes for individual patients.
    * Shows results based on the filter (specific doctor/hospital)
* Error Page: Graceful fallback for invalid or mutated URLs.



## Coming up next:
* Pagination enhancements: Refine page navigation for large result sets.
* Date handling: Replace brute‑force fix for calendar dropdown with proper formatting logic.
* Navbar UX: Auto‑close dropdown menus on click or cursor‑away.
* Reusable components: Extract shared elements (e.g., tables for results and notes) to reduce duplication.
* Error handling: Graceful UI for empty or failed data fetches.
* Sorting: Add sorting by age, gender, and alphabetical order.
* Gender filter: Convert gender selection to a two‑option dropdown.
* Age filtering: Replace date‑of‑birth input with an age dropdown (0–130) and support range filtering.
* AI‑assisted filtering: Implement an AI agent to suggest and auto‑complete search terms by category.
* Styling upgrades: Improve visuals and ensure consistent code formatting (VSCode settings).
* Testing: Add unit/integration tests for core components and workflows.
* State management improvements
* Make search results persistent using Context, Redux, or local storage.
* Saved queries: Allow users to store and reuse frequently used filters, combinable with new ones.
* Themes and modes: Introduce color themes or light/dark modes.
* Print functionality: Enable printing of single or multiple patient notes.
* Record popup: Expand popup for detailed notes (open on click or hover).
* Landing page content: Add company info and engaging facts.
* Performance optimizations: Apply caching and React.memo for UI responsiveness.
* Backend roadmap: Explore ElasticSearch/OpenSearch for notes, SQL for patient data, and caching strategies.
* Monitoring & analytics: Add metrics and user behavior tracking (e.g., Heap).



```js
$ Cheers!!!
```
