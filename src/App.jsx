import React from 'react';
import { articles } from './data';
import ComparisonRow from './components/ComparisonRow';
import './App.css'; // We'll clean this up

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Content Transformation Showcase</h1>
        <p className="subtitle">
          Comparing standard blog posts with structured, high-conversion content.
        </p>
      </header>

      <main>
        {articles.map((article, index) => (
          <ComparisonRow key={article.id} article={article} index={index} />
        ))}
      </main>

      <footer className="main-footer">
        <p>© 2025 Content Showcase. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
