import { withTheme } from "styled-components"
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
  ProgressBar,
  Radio,
  Select,
  SmallText,
  Stepper,
  Table,
  TextArea,
  ThemeProvider,
  Tooltip,
} from "atti-components"

import { Editor, InlineCode, Pre, ThemeRenderer } from "./components"
import { Header1, Header2, Text } from "@components/global"

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
  code: Editor,
  Code: InlineCode,
  Collapsible: Collapsible,
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
  p: Text,
  pre: Pre,
  ProgressBar: ProgressBar,
  Radio: Radio,
  Select: Select,
  SmallText: SmallText,
  Stepper: Stepper,
  Table: Table,
  Text: Text,
  TextArea: TextArea,
  Theme: withTheme(ThemeRenderer),
  ThemeProvider: ThemeProvider,
  Tooltip: Tooltip,
}

export default mdxComponents
