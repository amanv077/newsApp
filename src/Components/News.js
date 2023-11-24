import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setlaoding] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;
    // setlaoding(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);

    setarticles(parseData.articles);
    settotalResult(parseData.totalResult);
    setlaoding(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setlaoding(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;
    // console.log({ propPage: props.page, page: page });
    setpage(nextPage);
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResult(parseData.totalResult);
    setlaoding(false);
  };
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "70px" }}
      >
        NewsMonkey - Top Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={loading ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 12,
  page: 1,
  category: "general",
};

// eslint-disable-next-line react/no-typos
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
