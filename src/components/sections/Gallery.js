import React, {useState, useCallback} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Gallery from 'react-photo-gallery';
import Carousel, {Modal, ModalGateway} from 'react-images';

import Section from '@common/Section';

export default () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMedia: allContentfulAsset {
        edges {
          node {
            fixed {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  `);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const {contentfulMedia} = data;

  const photos = contentfulMedia.edges.map(({node: {fixed}}) => fixed);
  debugger;
  return (
    <Section>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Section>
  );
};
