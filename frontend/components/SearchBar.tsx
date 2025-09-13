'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search products...",
  className = ""
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // Real-time search as user types
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div style={{
        position: 'relative',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 48px 12px 16px',
            fontSize: '16px',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            outline: 'none',
            transition: 'border-color 0.2s',
            backgroundColor: 'white'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#2563eb';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e5e7eb';
          }}
        />
        <button
          type="submit"
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#6b7280',
            fontSize: '18px'
          }}
        >
          🔍
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
