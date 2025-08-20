<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>X (Twitter) Clone – README</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background: #0a0a0a; color:#f9fafb; margin: 0; padding: 0; }
    main { max-width: 700px; padding: 32px 24px; margin: 0 auto; }
    h1 { font-size: 2.25rem; color: #1DA1F2; font-weight: 700; letter-spacing: -1.5px; }
    h2 { color: #f1f5f9; font-size: 1.3rem; margin-top: 2rem;}
    h3 { color: #bae6fd; font-size: 1.1rem; margin-top: 1.5rem;}
    p, li { color: #e5e7eb; line-height: 1.7; }
    kbd { background: #18181b; color: #6ee7b7; border-radius:5px; padding: 2px 6px; font-size:0.95em;}
    code { background:#18181b; color:#bef264; padding:2px 4px; border-radius: 4px;}
    .feature-list, .tree { margin: 1em 0 1.75em 0; padding-left:1.0em;}
    .feature-list li, .tree li { margin-bottom: .4em;}
    .tree {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;}
    .badge { padding:2px 8px; background:#1da1f2; color:white; border-radius:4px; font-size:0.93em;}
    .note { color:#facc15; margin-left:0.4em;}
    .author { margin-top:2.8em; color:#64748b; font-size: 1em;}
    a { color:#60a5fa; text-decoration:none;}
    a:hover {text-decoration:underline;}
    .brand { color:#1DA1F2; }
    pre { background:#0a0a0a; color:#38bdf8; padding:12px 10px; border-radius:7px; font-size:1em;}
    hr  { border:1px solid #27272a; margin:32px 0 24px 0;}
  </style>
</head>
<body>
<main>
  <h1><span class="brand">X</span> (Twitter) Clone <span class="badge">UI</span></h1>
  <p>
    A visually-accurate, modern X (Twitter) clone built with <b>Tailwind CSS</b> and <b>Vite</b>.  
    The project includes all major layout elements and interactive widgets to inspire further development and learning.
  </p>
  <h2>🚀 Features</h2>
  <ul class="feature-list">
    <li>Three-column responsive layout</li>
    <li>Sidebar navigation with <b>Material Symbols</b> icons</li>
    <li>Central timeline/feed component (expandable for tweets/posts)</li>
    <li>Right sidebar with search, <b>What's Happening</b>, and <b>Who to Follow</b></li>
    <li>Modern <span style="color:#f472b6;">hover</span>/<span style="color:#60a5fa;">focus</span> effects, gradients, and clean shadows</li>
    <li>Custom <code>brand</code> color and <code>Inter</code> font via Tailwind config</li>
    <li>Ready for Vite-powered dev and build workflows</li>
  </ul>

  <h2>🛠 Stack</h2>
  <ul class="feature-list">
    <li>Vite <span class="badge">dev</span> &mdash; lightning-fast build tool</li>
    <li>Tailwind CSS <span class="badge">utility-first</span> framework</li>
    <li>Material Symbols (<a href="https://fonts.google.com/icons">Google Fonts</a>)</li>
  </ul>

  <h2>📦 Project Structure</h2>
  <ul class="tree">
    <li><b>main.html</b> – primary markup</li>
    <li><b>tailwind.config.js</b> – styling/theme config</li>
    <li><b>output.css</b> – compiled Tailwind CSS</li>
    <li><b>package.json</b>, <b>package-lock.json</b> – npm scripts & dependencies</li>
    <li><b>file.gitignore</b> – standard ignores</li>
    <li><b>README.html</b> – (this file)</li>
  </ul>

  <h2>⚡️ Quick Start</h2>
  <ol class="feature-list">
    <li>
      <b>Install:</b><br>
      <code>npm install</code>
    </li>
    <li>
      <b>Start Development:</b><br>
      <code>npm run dev</code>
      <br><span class="note">Visit http://localhost:5173 in your browser</span>
    </li>
    <li>
      <b>Build for Production:</b><br>
      <code>npm run build</code>
    </li>
    <li>
      <b>Preview Production Build:</b><br>
      <code>npm run preview</code>
    </li>
  </ol>
  
  <h2>🖌 Customization</h2>
  <ul class="feature-list">
    <li>Edit <code>tailwind.config.js</code> to tweak colors, fonts, or spacing</li>
    <li>Extend <b>main.html</b> for additional pages, components, or widgets</li>
    <li>Add your own tweets/posts to the feed area</li>
  </ul>

  <h2>📖 License</h2>
  <p>
    This project is <b>MIT</b> licensed.
  </p>
  
  <hr>
  <div class="author">
    Built by <a href="https://github.com/Prajjwal2051">@Prajjwal2051</a>.<br>
    <span class="note">This UI clone is for demonstration and educational purposes only.</span>
  </div>
</main>
</body>
</html>
