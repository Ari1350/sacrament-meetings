# Sacrament Meetings Planner

A modern Next.js web application built with TypeScript and Tailwind CSS for organizing, managing, and viewing ward sacrament meeting agendas efficiently.

##  Author & Team
*   **Individual Developer:** Ari1350 (Completed individually to maintain milestones following a hardware recovery process).

## Features
*   **Meeting Management:** Browse upcoming sacrament meetings, view detailed agendas, and display the current week's schedule.
*   **Security & Authentication:** Fully integrated with **Auth.js v5 (NextAuth.js)** credentials strategy to protect bishopric administrative routes.
*   **Dynamic Metadata:** Optimized with custom page-level titles and Open Graph metadata rules across layouts and subroutes for production quality.
*   **Architecture Quality:** Implements Next.js App Router conventions with distinct Client and Server boundaries.
*   **Responsive UX:** Styled with Tailwind CSS to ensure mobile-first layouts and accessible viewing experiences.

## Technologies Used
*   Next.js (App Router)
*   React & TypeScript
*   Tailwind CSS
*   Auth.js (v5 Beta)

## Getting Started Locally

1. Clone the repository and navigate into the project directory:
   ```bash
   cd sacrament-meetings
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Create an environment file named `.env.local` in the project root and add a secure secret string:
   ```env
   AUTH_SECRET="your-long-random-secure-secret-key-phrase"
   ```

4. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Production Deployment (Vercel)
This project is configured for automated builds on the **Vercel Platform**. 
*   **Production Deployment URL:** https://sacrament-meetings-git-peer-code-review-ari1350s-projects.vercel.app/login 
*   *Note:* Ensure that the environment variable `AUTH_SECRET` is added to the Vercel Project Dashboard under Settings -> Environment Variables before building.

## API Notes & Route Handlers
The application hosts the following core database-backed API endpoint to serve content to client components:
*   `GET /api/auth/[...nextauth]` - Handles OAuth, token verification, and administrative session management.

## Demo Credentials
To review protected dashboards and mock CRUD structures, use the following credentials on the `/login` route:
*   **Email:** `bishopric@church.org`
*   **Password:** `password123`

## Known Issues & Future Opportunities
*   **Synchronization:** Minor branch divergence caused Vercel deployment routes to lag slightly behind local pushes; resolved by migrating active modules directly to the `peer-code-review` branch.
*   **Future Upgrades:** Plan to integrate a live database adapter (Prisma/Supabase) to replace static credential verification for complex multi-model CRUD persistence.
