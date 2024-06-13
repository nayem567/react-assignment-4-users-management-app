import { useState } from "react";
import Article from "./Article";

function Form() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Pre Defined Title 1",
      desc: "React is awesome. Description 1",
    },
    {
      id: 2,
      title: "Pre Defined Title 2",
      desc: "JavaScript is awesome. Description 2",
    },
  ]);

  const handleForm = (event) => {
    event.preventDefault();

    const newArticle = {
      id: articles.length + 1,
      title,
      desc,
    };

    setArticles([...articles, newArticle]);
    setTitle("");
    setDesc("");
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    <div>
      <form className="FormContainer" onSubmit={handleForm}>
        <div>
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitle}
          />
        </div>

        <br />

        <div>
          <label htmlFor="desc">Description : </label>
          <br />
          <textarea
            name="desc"
            id="desc"
            value={desc}
            onChange={handleDesc}
          ></textarea>
        </div>

        <button type="submit">Add</button>
      </form>
      <Article articles={articles}/>
    </div>
  );
}

export default Form;
