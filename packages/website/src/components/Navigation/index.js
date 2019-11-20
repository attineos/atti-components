import React from "react"
import { CustomLink, CustomMenu, MenuContainer } from "./styles"

const Navigation = () => (
  <MenuContainer>
    <CustomMenu
      isVertical
      // TODO: improve
      elements={[
        { name: "Alert", url: "/alert" },
        { name: "Avatar", url: "/avatar" },
        { name: "Badge", url: "/badge" },
        { name: "BigText", url: "/bigtext" },
        { name: "Breadcrumb", url: "/breadcrumb" },
        { name: "Button", url: "/button" },
        { name: "ButtonGroup", url: "/buttongroup" },
        { name: "Cell", url: "/cell" },
        { name: "CheckBox", url: "/checkbox" },
        { name: "Container", url: "/container" },
        { name: "Grid", url: "/grid" },
        { name: "Header1", url: "/header1" },
        { name: "Header2", url: "/header2" },
        { name: "Header3", url: "/header3" },
        { name: "Header4", url: "/header4" },
        { name: "Image", url: "/image" },
        { name: "Input", url: "/input" },
        { name: "InputCalendar", url: "/inputcalendar" },
        { name: "InputFile", url: "/inputfile" },
        { name: "InputGroup", url: "/inputgroup" },
        { name: "InputMonth", url: "/inputmonth" },
        { name: "InputPopdown", url: "/inputpopdown" },
        { name: "InputTime", url: "/inputtime" },
        { name: "Label", url: "/label" },
        { name: "Link", url: "/link" },
        { name: "Loader", url: "/loader" },
        { name: "Menu", url: "/menu" },
        { name: "Modal", url: "/modal" },
        { name: "Option", url: "/option" },
        { name: "OptionPanel", url: "/optionpanel" },
        { name: "ProgressBar", url: "/progressbar" },
        { name: "Radio", url: "/radio" },
        { name: "Select", url: "/select" },
        { name: "SmallText", url: "/smalltext" },
        { name: "Table", url: "/table" },
        { name: "Text", url: "/text" },
        { name: "TextArea", url: "/textarea" },
        { name: "ThemeProvider", url: "/themeprovider" },
        { name: "Tooltip", url: "/tooltip" },
      ]}
      renderElement={element => {
        return (
          <CustomLink to={element.url} activeClassName="active">
            {element.name}
          </CustomLink>
        )
      }}
    />
  </MenuContainer>
)

export default Navigation
