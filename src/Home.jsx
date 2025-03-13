// src/components/Home.jsx
import BookCard from "./components/BookCard";
import books from "./booksData";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>Book Library</h1>

      <button
        onClick={() => navigate("/add-book")}
        style={{
          padding: "10px 20px",
          marginTop:"20px",
          marginBottom: "20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
