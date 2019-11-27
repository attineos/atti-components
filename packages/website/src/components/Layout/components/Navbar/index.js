import React from "react"
import Link from "gatsby-link"
import { Menu } from "atti-components"

const Item = Menu.Item

const Navbar = () => (
  <Menu isResponsive isVertical>
    <Item as={Link} to="/alert" activeClassName="active">
      Alert
    </Item>
    <Item as={Link} to="/avatar" activeClassName="active">
      Avatar
    </Item>
    <Item as={Link} to="/badge" activeClassName="active">
      Badge
    </Item>
    <Item as={Link} to="/bigtext" activeClassName="active">
      BigText
    </Item>
    <Item as={Link} to="/breadcrumb" activeClassName="active">
      Breadcrumb
    </Item>
    <Item as={Link} to="/button" activeClassName="active">
      Button
    </Item>
    <Item as={Link} to="/buttongroup" activeClassName="active">
      ButtonGroup
    </Item>
    <Item as={Link} to="/cell" activeClassName="active">
      Cell
    </Item>
    <Item as={Link} to="/checkbox" activeClassName="active">
      CheckBox
    </Item>
    <Item as={Link} to="/container" activeClassName="active">
      Container
    </Item>
    <Item as={Link} to="/grid" activeClassName="active">
      Grid
    </Item>
    <Item as={Link} to="/header1" activeClassName="active">
      Header1
    </Item>
    <Item as={Link} to="/header2" activeClassName="active">
      Header2
    </Item>
    <Item as={Link} to="/header3" activeClassName="active">
      Header3
    </Item>
    <Item as={Link} to="/header4" activeClassName="active">
      Header4
    </Item>
    <Item as={Link} to="/image" activeClassName="active">
      Image
    </Item>
    <Item as={Link} to="/input" activeClassName="active">
      Input
    </Item>
    <Item as={Link} to="/inputcalendar" activeClassName="active">
      InputCalendar
    </Item>
    <Item as={Link} to="/inputfile" activeClassName="active">
      InputFile
    </Item>
    <Item as={Link} to="/inputgroup" activeClassName="active">
      InputGroup
    </Item>
    <Item as={Link} to="/inputmonth" activeClassName="active">
      InputMonth
    </Item>
    <Item as={Link} to="/inputpopdown" activeClassName="active">
      InputPopdown
    </Item>
    <Item as={Link} to="/inputtime" activeClassName="active">
      InputTime
    </Item>
    <Item as={Link} to="/label" activeClassName="active">
      Label
    </Item>
    <Item as={Link} to="/link" activeClassName="active">
      Link
    </Item>
    <Item as={Link} to="/loader" activeClassName="active">
      Loader
    </Item>
    <Item as={Link} to="/menu" activeClassName="active">
      Menu
    </Item>
    <Item as={Link} to="/modal" activeClassName="active">
      Modal
    </Item>
    <Item as={Link} to="/option" activeClassName="active">
      Option
    </Item>
    <Item as={Link} to="/optionpanel" activeClassName="active">
      OptionPanel
    </Item>
    <Item as={Link} to="/progressbar" activeClassName="active">
      ProgressBar
    </Item>
    <Item as={Link} to="/radio" activeClassName="active">
      Radio
    </Item>
    <Item as={Link} to="/select" activeClassName="active">
      Select
    </Item>
    <Item as={Link} to="/smalltext" activeClassName="active">
      SmallText
    </Item>
    <Item as={Link} to="/table" activeClassName="active">
      Table
    </Item>
    <Item as={Link} to="/text" activeClassName="active">
      Text
    </Item>
    <Item as={Link} to="/textarea" activeClassName="active">
      TextArea
    </Item>
    <Item as={Link} to="/themeprovider" activeClassName="active">
      ThemeProvider
    </Item>
    <Item as={Link} to="/tooltip" activeClassName="active">
      Tooltip
    </Item>
  </Menu>
)

export default Navbar
