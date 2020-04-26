import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image08042020Thumbnail from '../images/08-04-2020-Thumbnail.jpg';
import image08042020 from '../images/08-04-2020.jpg';
import image09042020Thumbnail from '../images/09-04-2020-Thumbnail.jpg';
import image09042020 from '../images/09-04-2020.jpg';
import image10042020Thumbnail from '../images/10-04-2020-Thumbnail.jpg';
import image10042020 from '../images/10-04-2020.jpg';
import image14042020Thumbnail from '../images/14-04-2020-Thumbnail.jpg';
import image14042020 from '../images/14-04-2020.jpg';
import image15042020Thumbnail from '../images/15-04-2020-Thumbnail.jpg';
import image15042020 from '../images/15-04-2020.jpg';
import image16042020Thumbnail from '../images/16-04-2020-Thumbnail.jpg';
import image16042020 from '../images/16-04-2020.jpg';
import image17042020Thumbnail from '../images/17-04-2020-Thumbnail.jpg';
import image17042020 from '../images/17-04-2020.jpg';
import image20042020Thumbnail from '../images/20-04-2020-Thumbnail.jpg';
import image20042020 from '../images/20-04-2020.jpg';
import image21042020Thumbnail from '../images/21-04-2020-Thumbnail.jpg';
import image21042020 from '../images/21-04-2020.jpg';
import image22042020Thumbnail from '../images/22-04-2020-Thumbnail.jpg';
import image22042020 from '../images/22-04-2020.jpg';
import image23042020Thumbnail from '../images/23-04-2020-Thumbnail.jpg';
import image23042020 from '../images/23-04-2020.jpg';
import image24042020Thumbnail from '../images/24-04-2020-Thumbnail.jpg';
import image24042020 from '../images/24-04-2020.jpg';

const images = [
  {
    original: image08042020,
    thumbnail: image08042020Thumbnail,
  },
  {
    original: image09042020,
    thumbnail: image09042020Thumbnail,
  },
  {
    original: image10042020,
    thumbnail: image10042020Thumbnail,
  },
  {
    original: image14042020,
    thumbnail: image14042020Thumbnail,
  },
  {
    original: image15042020,
    thumbnail: image15042020Thumbnail,
  },
  {
    original: image16042020,
    thumbnail: image16042020Thumbnail,
  },
  {
    original: image17042020,
    thumbnail: image17042020Thumbnail,
  },
  {
    original: image20042020,
    thumbnail: image20042020Thumbnail,
  },
  {
    original: image21042020,
    thumbnail: image21042020Thumbnail,
  },
  {
    original: image22042020,
    thumbnail: image22042020Thumbnail,
  },
  {
    original: image23042020,
    thumbnail: image23042020Thumbnail,
  },
  {
    original: image24042020,
    thumbnail: image24042020Thumbnail,
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
