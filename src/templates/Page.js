import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import Seo from "../containers/Seo";

export default ({ data }) => {
  const {pageData} = data.allPage.edges[0].node;
  const seoData = {
    title: pageData.title,
    meta: [
      {
        name: 'description',
        content: 'Some meta description - yes'
      },
      {
        name: 'custom name',
        content: 'custom description'
      }
    ]
  };
  return (
    <Layout >
      <Seo seoData={seoData}/>
      <h1>{pageData.title}</h1>
    </Layout>
  )
};

export const query = graphql `
   query($slug: String!) {
    allPage(filter: {
      pageData: {
        slug: {
          eq: $slug
        }
      }
    }){
      edges {
        node {
          id
          pageData {
            slug
            content
            title
          }
        }
      }
    }
  }
`;
