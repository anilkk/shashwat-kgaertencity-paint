import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image14042020Thumbnail from '../images/14-04-2020-Thumbnail.jpg';
import image14042020 from '../images/14-04-2020.jpg';
import image17042020Thumbnail from '../images/17-04-2020-Thumbnail.jpg';
import image17042020 from '../images/17-04-2020.jpg';
import image21042020Thumbnail from '../images/21-04-2020-Thumbnail.jpg';
import image21042020 from '../images/21-04-2020.jpg';

const images = [
  {
    original: image14042020,
    thumbnail: image14042020Thumbnail,
  },
  {
    original: image17042020,
    thumbnail: image17042020Thumbnail,
  },
  {
    original: image21042020,
    thumbnail: image21042020Thumbnail,
  },
];

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const MyImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <ImageGallery items={images} />;
};

export default MyImageGallery;
