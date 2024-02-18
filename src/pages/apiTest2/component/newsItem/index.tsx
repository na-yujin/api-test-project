interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface NewsItemProps {
  article: Article;
}
export default function NewsItem({ article }: NewsItemProps) {
  const { title, description, url, urlToImage } = article;
  return (
    <div>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
