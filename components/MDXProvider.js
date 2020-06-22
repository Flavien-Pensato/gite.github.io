
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Title from './Title'
import Onglet from './Onglet'
import Image from './Image'
import Menu from './Menu'
import Gallery from './Gallery'
import LinkAccordion from './LinkAccordion'
import LayoutTextImage from './LayoutTextImage'
import ListImages from './ListImages'
import ImagePopup from './ImagePopup'
import Section from './Section'

// console.log(LayoutTextImage)

const mdComponents = {
  Title,
  Onglet,
  Menu,
  Image,
  LayoutTextImage,
  ImagePopup,
  ListImages,
  Section,
  Gallery,
  LinkAccordion,
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
