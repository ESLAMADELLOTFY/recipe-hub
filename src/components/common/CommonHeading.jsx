import React from "react";

export default function CommonHeading({ title, description }) {
  return (
    <>
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
      <small class="d-inline-flex fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3 align-items-center justify-content-center">
          {title}
        </small>
        <h1 className="display-5 mb-5">{description}</h1>
      </div>
    </>
  );
}