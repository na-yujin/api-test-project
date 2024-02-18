import NewsItem from "@/pages/apiTest2/component/newsItem";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

export default function NewsList() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<{ articles: Article[] }> =
          await axios.get(
            "https://newsapi.org/v2/top-headlines?country=kr&apiKey=09ef4983fdea4604865f57472c35127b",
          );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기중...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
