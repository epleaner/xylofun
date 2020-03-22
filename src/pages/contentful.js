import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import ContentfulRichText from '@common/ContentfulRichText';
import Layout from '@common/Layout';
import SEO from '@common/SEO';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Home" } }) {
        edges {
          node {
            title
            richText {
              json
            }
          }
        }
      }
    }
  `);

  const pageContent = data.allContentfulPage.edges[0].node;

  return (
    <Layout>
      <SEO title="Home" />
      {pageContent.title}
      <ContentfulRichText document={pageContent.richText.json} />
    </Layout>
  );
};

export default IndexPage;
