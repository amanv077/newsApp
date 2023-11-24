import React from "react";

const NewsItem = (props) => {
  let { tittle, description, imageurl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageurl
              ? "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-11-03_shkjptr3ix.jpg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-body-secondary ">
              By {!author ? "unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
