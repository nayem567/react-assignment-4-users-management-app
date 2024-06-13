
const SingleArticle = ({id, title, desc}) =>{

    return(
        <div className="ArticleBox">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default SingleArticle;