Hide the "Explore more projects" section on the Vida Rosa case study page.

In `src/routes/work.$slug.tsx`, wrap the `/* More work */` section so it only renders when `project.slug !== "vida-rosa"`. All other case studies continue to show it.