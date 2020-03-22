import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import ContentfulRichText from '@common/ContentfulRichText';
import Page from '@common/Page';
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
    <Page>
      <SEO title="Home" />
      {pageContent.title}
      <ContentfulRichText document={pageContent.richText.json} />
    </Page>
  );
};

export default IndexPage;
