import React, { useState } from "react"
import styled, { css } from "styled-components"
import { reduce } from "lodash"
// TODO: improve
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
  Container,
  Grid,
  Header1,
  Header2,
  Header3,
  Header4,
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
  Option,
  OptionPanel,
  ProgressBar,
  Radio,
  Select,
  SmallText,
  Table,
  Text,
  TextArea,
  ThemeProvider,
  Tooltip,
} from "atti-components"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

// TODO: improve
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
  Container,
  Grid,
  Header1,
  Header2,
  Header3,
  Header4,
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
  Option,
  OptionPanel,
  ProgressBar,
  Radio,
  Select,
  SmallText,
  Table,
  Text,
  TextArea,
  ThemeProvider,
  Tooltip,
  css,
  reduce,
  styled,
  useState,
}

const Pre = ({ children }) => <div>{children}</div>

const LiveProviderTrue = ({ children }) => {
  const code = `${children}`

  const noInline = children.includes("render(")

  return (
    <LiveProvider code={code} scope={scope} noInline={noInline}>
      <LiveError />
      <LivePreview />
      <LiveEditor />
    </LiveProvider>
  )
}

// TODO: improve
const mdxComponents = {
  Alert: Alert,
  Avatar: Avatar,
  Badge: Badge,
  BigText: BigText,
  Breadcrumb: Breadcrumb,
  Button: Button,
  ButtonGroup: ButtonGroup,
  Cell: Cell,
  CheckBox: CheckBox,
  code: LiveProviderTrue,
  Container: Container,
  Grid: Grid,
  Header1: Header1,
  Header2: Header2,
  Header3: Header3,
  Header4: Header4,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  Image: Image,
  Input: Input,
  InputCalendar: InputCalendar,
  InputFile: InputFile,
  InputGroup: InputGroup,
  InputMonth: InputMonth,
  InputPopdown: InputPopdown,
  InputTime: InputTime,
  Label: Label,
  Link: Link,
  Loader: Loader,
  Menu: Menu,
  Modal: Modal,
  Option: Option,
  OptionPanel: OptionPanel,
  p: Text,
  pre: Pre,
  ProgressBar: ProgressBar,
  Radio: Radio,
  Select: Select,
  SmallText: SmallText,
  Table: Table,
  Text: Text,
  TextArea: TextArea,
  ThemeProvider: ThemeProvider,
  Tooltip: Tooltip,
}

export default mdxComponents
