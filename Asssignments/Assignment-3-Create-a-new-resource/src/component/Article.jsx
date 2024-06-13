import DefaultFormDatas from "./FormData";
import SingleArticle from "./SingleArticle";

function Article({ articles }) {
  return (
    <div>
      {articles.map((SingleItem) => (
        <SingleArticle key={SingleItem.id} {...SingleItem} />
      ))}
    </div>
  );
}

export default Article;
