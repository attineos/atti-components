import theme from '../theme'

/**
 * This static class includes a theme which will be used by the components in the style guide.
 */
class DynamicTheme {
  static dynamicTheme = theme

  static listSubscriber = []

  /**
   * This modification modify one of the colors of the theme.
   * Then, the list of the subscribers will be used. It contains functions which update the concerned components.
   * @param attribute - key of the color to modify.
   * @param value - new value to use.
   */
  static setColors = (attribute, value) => {
    DynamicTheme.dynamicTheme.colors[attribute] = value
    DynamicTheme.listSubscriber.forEach(elt => {
      elt(DynamicTheme.getTheme())
    })
  }

  static getTheme = () => DynamicTheme.dynamicTheme

  static addSubscriber = newSubscriber => {
    DynamicTheme.listSubscriber.push(newSubscriber)
  }

  static removeSubscriber = subscriber => {
    DynamicTheme.listSubscriber = DynamicTheme.listSubscriber.filter(elt => elt !== subscriber)
  }
}

export default DynamicTheme
