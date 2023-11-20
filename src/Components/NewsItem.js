import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { tittle, description, imageurl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
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
            <p class="card-text">
              <small class="text-body-secondary ">
                By {!author ? "unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
