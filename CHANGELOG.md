# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Please beware that all version pre 1.0.0 can have major and breaking changes in undocumented features.

## [0.1.0] - Unreleased

### Added

- New theme `Attineos` was added by [@Whargal](https://github.com/Whargal) & [@akaala](https://github.com/akaala)
- Export the `resetCSS` helper by [@akaala](https://github.com/akaala)
- Added support for custom renderers into Breadcrumb [@Atrakeur](https://github.com/atrakeur)
- Added support for custom renderers into Menu [@Atrakeur](https://github.com/atrakeur)
- Added AdvancedSelect based on react-select [@Atrakeur](https://github.com/atrakeur)D

### Changed

- **Breaking Change**: Theme name and import was changed from `theme` to `defaultTheme` [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Menu component now expect item to be passed as an `elements` prop instead of a `values` prop [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Default menu item renderer now expect an `url` prop instead of `href` [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Default menu item renderer now expect a `name` prop instead of `text` [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Changed numerous values from default theme for a better overall look [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Changed CheckBox `spaces` theme format [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Changed Input `spaces` theme format [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Changed FileInput theme format to be the same as Button [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Renamed Radio's theme `margins` to `spaces` [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Removed `sort` option from Select [@Atrakeur](https://www.atrakeur.com)
- **Breaking Change**: Renamed `Select` to `BasicSelect` [@Atrakeur](https://www.atrakeur.com)

## [0.0.3] - 2019-02-05

### Added

- New component `Header4` by [@Whargal](https://github.com/Whargal)

### Changed

- **Breaking Change**: Update spaces values by [@Whargal](https://github.com/Whargal)
- Update multiple dependencies and devDependencies by [@akaala](https://github.com/akaala)
- Allow extending of Breadcrumb and use as a selector by [@akaala](https://github.com/akaala)
- `Link` component now accepts additional props by [@akaala](https://github.com/akaala)

## [0.0.2] - 2018-12-07

### Added
- **Breaking Change**: Remove LayoutGridCell & LayoutContainer by [@akaala](https://github.com/akaala)
   - LayoutGridCell is replaced by Cell
   - LayoutContainer with type RAW is replaced by Container
   - LayoutContainer with type GRID is replaced by Grid
   - default number of columns in the grid has changed -> 12 cols in xldesktop & desktop / 6 cols in tablet & mobile
   - values of theme.layout has changed accordingly
   - Container & Grid now includes a default padding right & left
- New component `Avatar` by @a.tinel & [@akaala](https://github.com/akaala)
- New helpers availables from `atti-components/helpers` (See docs for more information) by [@akaala](https://github.com/akaala) :
   - displays
   - heights
   - margins
   - paddings
   - sizes
   - widths

### Changed

- **Breaking Change**: Rename the following components by [@akaala](https://github.com/akaala)
  - Checkbox -> CheckBox
  - Progressbar -> ProgressBar
- **Breaking Change**: ProgressBar component should use value prop to display the progress bar value instead of step prop [@munvier](https://gitlab.com/munvier)
- Allow [extending](https://www.styled-components.com/docs/basics#extending-styles) and [referring](https://www.styled-components.com/docs/advanced#referring-to-other-components) of the following components by [@akaala](https://github.com/akaala)
  - Alert
  - Badge
  - Button
  - CheckBox
  - Input
  - Image
  - LayoutContainer
  - LayoutGridCell
  - Link
  - Loader
  - Option
  - OptionPanel
  - ProgressBar
  - Radio
  - Select
  - TextArea
- Fix: the `InputFile` component now correctly opens a dialog by [@munvier](https://gitlab.com/munvier)

### Removed
- **Breaking Change**: The following components don't support `label` property anymore. You should combine them with a Label component. By [@akaala](https://github.com/akaala)
  - CheckBox
  - Input
  - Radio
  - Select
  - TextArea


## [0.0.1] - 2018-11-21

### Added

- First version of multiple components:
  - Alert
  - Badge
  - BigText
  - Breadcrumb
  - Button
  - Checkbox
  - Header1
  - Header2
  - Header3
  - Image
  - Input
  - InputFile
  - Label
  - LayoutContainer
  - LayoutGridCell
  - Link
  - Loader
  - Menu
  - Option
  - OptionPanel
  - ProgressBar
  - Radio
  - Select
  - SmallText
  - Text
  - TextArea
  - ThemeProvider
