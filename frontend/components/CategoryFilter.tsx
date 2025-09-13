'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className = ""
}) => {
  return (
    <div className={className}>
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <button
          onClick={() => onCategoryChange('All')}
          style={{
            backgroundColor: selectedCategory === 'All' ? '#2563eb' : 'white',
            color: selectedCategory === 'All' ? 'white' : '#374151',
            border: '2px solid #e5e7eb',
            borderColor: selectedCategory === 'All' ? '#2563eb' : '#e5e7eb',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#2563eb' : 'white',
              color: selectedCategory === category ? 'white' : '#374151',
              border: '2px solid #e5e7eb',
              borderColor: selectedCategory === category ? '#2563eb' : '#e5e7eb',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
