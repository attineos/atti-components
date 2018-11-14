import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Logo from 'rsg-components/Logo'
import Markdown from 'rsg-components/Markdown'
import Ribbon from 'rsg-components/Ribbon'
import Styled from 'rsg-components/Styled'
import Version from 'rsg-components/Version'

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  footer: {
    color: color.light,
    display: 'block',
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  logo: {
    borderBottom: [[1, color.border, 'solid']],
    padding: space[2],
  },
  sidebar: {
    top: 0,
    left: 0,
    bottom: 0,
    color: '#333',
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    width: '250px',
    [mq.small]: {
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
      position: 'static',
      width: 'auto',
    },
  },
  root: {
    minHeight: '100vh',
  },
})

class StyleGuideRenderer extends React.Component {
  static defaultProps = {
    hasSidebar: undefined,
    version: undefined,
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
    /**
     * All the sections of the sidebar.
     */
    toc: PropTypes.node.isRequired,
    /**
     * The version of the project (if undefined, nothing is displayed).
     */
    version: PropTypes.string,
  }

  state = {
    themeCompo: { primary: '#ffffff', secondary: '#bdd5ea' },
  }

  modifyThemeCompo = t => {
    this.setState({ themeCompo: t })
  }

  render() {
    const {
      children,
      classes,
      hasSidebar,
      homepageUrl,
      title,
      toc,
      version,
    } = this.props
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
          </div>
        )}
        <Ribbon />
      </div>
    )
  }
}

export default Styled(styles)(StyleGuideRenderer)
