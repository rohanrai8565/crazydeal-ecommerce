'use client';

import { useState } from 'react';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSystemProps {
  productId: string;
  reviews?: Review[];
  onAddReview?: (review: Omit<Review, 'id' | 'date'>) => void;
}

const StarRating: React.FC<{ rating: number; onRatingChange?: (rating: number) => void; readonly?: boolean }> = ({
  rating,
  onRatingChange,
  readonly = false
}) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => !readonly && onRatingChange?.(star)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: readonly ? 'default' : 'pointer',
            color: star <= rating ? '#fbbf24' : '#d1d5db'
          }}
          disabled={readonly}
        >
          ⭐
        </button>
      ))}
    </div>
  );
};

const ReviewSystem: React.FC<ReviewSystemProps> = ({ productId, reviews = [], onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 0,
    comment: ''
  });

  // Mock reviews for demo
  const mockReviews: Review[] = [
    {
      id: '1',
      userName: 'John D.',
      rating: 5,
      comment: 'Excellent product! Great quality and fast shipping.',
      date: '2024-01-15'
    },
    {
      id: '2',
      userName: 'Sarah M.',
      rating: 4,
      comment: 'Good value for money. Works as expected.',
      date: '2024-01-10'
    },
    {
      id: '3',
      userName: 'Mike R.',
      rating: 5,
      comment: 'Amazing! Exceeded my expectations. Highly recommend.',
      date: '2024-01-08'
    }
  ];

  const displayReviews = reviews.length > 0 ? reviews : mockReviews;
  const averageRating = displayReviews.reduce((sum, review) => sum + review.rating, 0) / displayReviews.length;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating === 0 || !newReview.userName.trim() || !newReview.comment.trim()) {
      alert('Please fill in all fields and select a rating');
      return;
    }

    onAddReview?.(newReview);
    setNewReview({ userName: '', rating: 0, comment: '' });
    setShowReviewForm(false);
    alert('Review submitted successfully!');
  };

  return (
    <div style={{ marginTop: '40px' }}>
      {/* Reviews Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            Customer Reviews ({displayReviews.length})
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <StarRating rating={Math.round(averageRating)} readonly />
            <span style={{ fontSize: '16px', color: '#6b7280' }}>
              {averageRating.toFixed(1)} out of 5
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            Write Your Review
          </h4>
          <form onSubmit={handleSubmitReview} style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Your Name
              </label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Rating
              </label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Your Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  minHeight: '100px',
                  resize: 'vertical'
                }}
                placeholder="Share your experience with this product..."
              />
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div style={{ display: 'grid', gap: '20px' }}>
        {displayReviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '20px'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '4px'
                }}>
                  {review.userName}
                </div>
                <StarRating rating={review.rating} readonly />
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>
            <p style={{
              fontSize: '16px',
              color: '#374151',
              lineHeight: '1.6',
              margin: 0
            }}>
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;
