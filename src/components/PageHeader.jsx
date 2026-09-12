import React from 'react';

export default function PageHeader({ category, title, description, badge }) {
  return (
    <header className="page-header">
      {category && (
        <div className="page-category">
          {badge && <span className="tag tag-blue">{badge}</span>}
          <span>{category}</span>
        </div>
      )}
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}
