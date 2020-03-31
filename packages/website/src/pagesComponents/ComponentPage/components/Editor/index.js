import React, { useState } from "react"
import styled, { css } from "styled-components"
import { reduce } from "lodash"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

import {
  Alert,
  Avatar,
  Badge,
  BigText,
  Breadcrumb,
  Button,
  ButtonGroup,
  Cell,
  CheckBox,
  Collapsible,
  Container,
  Grid,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Image,
  Input,
  InputCalendar,
  InputFile,
  InputGroup,
  InputMonth,
  InputPopdown,
  InputTime,
  Label,
  Link,
  Loader,
  Menu,
  Modal,
  ProgressBar,
  Radio,
  Select,
  SmallText,
  Slider,
  Stepper,
  Table,
  Text,
  TextArea,
  ThemeProvider,
  Toggle,
  Tooltip,
  defaultTheme,
} from "atti-components"

import LiveProviderContainer from "./LiveProviderContainer"
import PreviewContainer from "./PreviewContainer"

const scope = {
  Alert,
  Avatar,
  Badge,
  BigText,
  Breadcrumb,
  Button,
  ButtonGroup,
  Cell,
  CheckBox,
  Collapsible,
  Container,
  Grid,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Image,
  Input,
  InputCalendar,
  InputFile,
  InputGroup,
  InputMonth,
  InputPopdown,
  InputTime,
  Label,
  Link,
  Loader,
  Menu,
  Modal,
  ProgressBar,
  Radio,
  Select,
  Slider,
  SmallText,
  Stepper,
  Table,
  Text,
  TextArea,
  ThemeProvider,
  Toggle,
  Tooltip,
  css,
  defaultTheme,
  reduce,
  styled,
  useState,
}

export default ({ children }) => {
  const code = `${children}`

  const noInline = children.includes("render(")

  const theme = {
    plain: {
      color: "#e7d2ed",
      backgroundColor: "#444",
    },
    styles: [
      {
        types: ["prolog", "comment", "doctype", "cdata"],
        style: {
          color: "#65737e",
        },
      },
      {
        types: ["property", "tag", "boolean", "number", "constant", "symbol"],
        style: {
          color: "#5FB3B3",
        },
      },
      {
        types: ["attr-name", "string", "char", "builtin", "insterted"],
        style: {
          color: "#ed6f7d",
        },
      },
      {
        types: [
          "operator",
          "entity",
          "url",
          "string",
          "variable",
          "language-css",
        ],
        style: {
          color: "#CDD3DE",
          backgroundColor: "#444",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#5a9bcf",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "rgb(255, 85, 85)",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["regex", "important"],
        style: {
          color: "#e90",
        },
      },
      {
        types: ["atrule", "attr-value", "keyword"],
        style: {
          color: "#f677e1",
        },
      },
      {
        types: ["punctuation", "symbol"],
        style: {
          opacity: "0.7",
        },
      },
    ],
  }

  return (
    <LiveProviderContainer>
      <LiveProvider code={code} scope={scope} noInline={noInline} theme={theme}>
        <PreviewContainer>
          <LiveError />
          <LivePreview />
        </PreviewContainer>
        <LiveEditor language="jsx" />
      </LiveProvider>
    </LiveProviderContainer>
  )
}
