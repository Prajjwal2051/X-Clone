# X-Clone
X (Twitter) Clone
A visually accurate, modern X (Twitter) clone focused on clean layout, live Tailwind utility CSS, and a professional foundation for building social features.

Features
Responsive 3-column layout:
Left navigation bar, scrollable timeline, and interactive right sidebar.

Sidebar navigation:
Home, Explore, Notifications, Messages, Grok, Communities, Premium, Verified Orgs, Profile, More.

Central content feed:
Placeholder for tweet timeline (ready for dynamic expansion).

Right sidebar widgets:

Search bar

"What's Happening" trending list

"Who to Follow" suggestions, all styled and animated

Modern UI & UX:
Smooth hover/focus transitions, gradients, shadows, accessibility-conscious.

Stack
Vite — superfast development server and build tool

Tailwind CSS — utility-first styling, custom colors/fonts, production-ready

Icon library: Google Material Symbols

Getting Started
1. Clone the repository
bash
git clone https://github.com/Prajjwal2051/X-Clone.git
cd X-Clone
2. Install dependencies
bash
npm install
3. Start the development server
bash
npm run dev
The app will be hosted locally (default: http://localhost:5173).

4. Build for production
bash
npm run build
5. Preview production build
bash
npm run preview
Project Structure
text
/
│  main.html           # Main page markup
│  output.css          # Built Tailwind CSS file
│  tailwind.config.js  # Tailwind configuration and custom theme
│  package.json        # Dependencies and scripts
│  ...
Customization
Styling:
Edit your tailwind.config.js for colors and fonts.

Feed and widgets:
Expand main.html content area for dynamic posts and more components.

Icons:
Uses Material Symbols; add more as needed.

License
Licensed under the MIT License.

Credits
Built by Prajjwal2051.

Note:
This project is built for UI/UX demonstration and learning purposes only; it does not implement backend APIs or real user data.