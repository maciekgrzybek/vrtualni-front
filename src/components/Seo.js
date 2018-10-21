import React from 'react';
import Helmet from "react-helmet";

const Seo = ({seoData}) => {
  console.log(seoData);

  return (
    <>
      <Helmet
        htmlAttributes={{lang: 'pl'}}
        meta={seoData.meta}
        title={seoData.title}
      />
    </>
  )
};

export default Seo;
