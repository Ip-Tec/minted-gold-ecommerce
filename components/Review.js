import React, { useEffect, useState } from "react";
import axios from "axios";

function Review({ product }) {
  const [reviews, setReviews] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    currentPage: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/productReviews", {
          productId: product.id,
          page: 1,
          pageSize: 10,
        });

        setReviews(response.data.reviews);
        setPagination({
          totalPages: response.data.totalPages,
          currentPage: response.data.currentPage,
        });
      } catch (error) {
        console.error("Error fetching product reviews:", error.message);
      }
    };

    fetchData();
  }, [product.id]);

  const handlePageChange = async (page) => {
    try {
      const response = await axios.post("/api/productReviews", {
        productId: product.id,
        page: page,
        pageSize: 10,
      });

      setReviews(response.data.reviews);
      setPagination({
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
      });
    } catch (error) {
      console.error("Error fetching product reviews:", error.message);
    }
  };

  const renderPaginationLinks = () => {
    const links = [];

    for (let i = 1; i <= pagination.totalPages; i++) {
      links.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            cursor: "pointer",
            marginRight: "5px",
            textDecoration: i === pagination.currentPage ? "underline" : "none",
          }}
        >
          {i}
        </span>
      );
    }

    return links;
  };

  return (
    <>
      <div>Reviews:</div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>User: {review.user.name}</div>
            <div>Rating: {review.rating}</div>
            <div>Comment: {review.comment || "No comment"}</div>
          </li>
        ))}
      </ul>
      <div>
        Pagination: {renderPaginationLinks()}
      </div>
    </>
  );
}

export default Review;
