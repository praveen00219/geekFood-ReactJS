import React from "react";
import Quote from "../components/Quote/Quote";

function QuotePage() {
  return (
    <>
      <article className="quote active my-32 mx-10" data-page="quote">
        <Quote />
      </article>
    </>
  );
}

export default QuotePage;
