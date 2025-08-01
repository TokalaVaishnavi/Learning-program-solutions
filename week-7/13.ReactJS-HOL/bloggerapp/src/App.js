import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book");

  // Element variable method
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Blogger App</h1>

      {/* Buttons to switch views */}
      <button onClick={() => setView("book")}>Book Details</button>&nbsp;
      <button onClick={() => setView("blog")}>Blog Details</button>&nbsp;
      <button onClick={() => setView("course")}>Course Details</button>

      <hr />

      {/* 1. Using element variable */}
      {content}

      {/* 2. Using ternary operator */}
      {/* {view === "book" ? <BookDetails /> : view === "blog" ? <BlogDetails /> : <CourseDetails />} */}

      {/* 3. Using short-circuit (logical &&) */}
      {/* {view === "book" && <BookDetails />}
      {view === "blog" && <BlogDetails />}
      {view === "course" && <CourseDetails />} */}
    </div>
  );
}

export default App;

