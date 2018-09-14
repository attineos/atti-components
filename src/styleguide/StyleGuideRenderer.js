import React from 'react'
import PropTypes from 'prop-types'
import Logo from 'rsg-components/Logo'
import Markdown from 'rsg-components/Markdown'
import Styled from 'rsg-components/Styled'
import cx from 'classnames'
import Ribbon from 'rsg-components/Ribbon'
import Version from 'rsg-components/Version'
import ChangeThemeStyleGuide from './ChangeThemeStyleGuide'

import ChangeThemeComponents from './ChangeThemeComponents'

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
  root: {
    minHeight: '100vh',
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
})

class StyleGuideRenderer extends React.Component {
  static defaultProps = {
    version: undefined,
    hasSidebar: undefined,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    /**
     * False if we don't want a SiderBar.
     */
    hasSidebar: PropTypes.bool,
    /*
     * The link in the footer.
     */
    homepageUrl: PropTypes.string.isRequired,
    /**
     * Title of the style guide.
     */
    title: PropTypes.string.isRequired,
    toc: PropTypes.node.isRequired,
    /**
     * The version of the project (if undefined, nothing is displayed).
     */
    version: PropTypes.string,
  }

  state = {
    themeCompo: { primary: '#bdd5ea', secondary: '#577399' },
  }

  modifyThemeCompo = t => {
    this.setState({ themeCompo: t })
  }

  render() {
    const { classes, title, version, homepageUrl, children, toc, hasSidebar } = this.props
    const { themeCompo } = this.state
    return (
      <div
        className={cx(classes.root, hasSidebar && classes.hasSidebar)}
        style={{ backgroundColor: themeCompo['primary'] }}
      >
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
          </footer>
        </main>
        {hasSidebar && (
          <div className={classes.sidebar} style={{ backgroundColor: themeCompo['secondary'] }}>
            <div className={classes.logo}>
              <Logo>{title}</Logo>
              {version && <Version>{version}</Version>}
            </div>
            {toc}
            <ChangeThemeStyleGuide modifyTheme={this.modifyThemeCompo} />
            <ChangeThemeComponents />
          </div>
        )}
        <Ribbon />
      </div>
    )
  }
}

export default Styled(styles)(StyleGuideRenderer)
