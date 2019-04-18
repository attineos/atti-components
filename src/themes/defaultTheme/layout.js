import breakpoints from './breakpoints'
/**
 * The Container defines breakpoints for hos child components
 *
 * Breakpoints are taken into account from top to bottom (lower priority is last)
 *
 * Format:
 *
 * breakpointName: {
 *   maxWidth: '900px', // Define at which dimension the breakpoint will break
 *   cols: 6,           // For grid layouts: Defines how many cols to have
 *   gap: '20px',       // For Grid layouts: Defines how many gap to have between cols
 * },
 */
export default () => ({
  mobile: {
    cols: 6,
    gap: 's1',
    to: breakpoints.mobileMax,
    containerMaxWidth: '420px',
    padding: 's1',
  },
  tablet: {
    cols: 6,
    gap: 's1_5',
    from: breakpoints.tabletMin,
    to: breakpoints.tabletMax,
    containerMaxWidth: 'none',
    padding: 's1_5',
  },
  desktop: {
    cols: 12,
    gap: 's1_5',
    from: breakpoints.desltopMin,
    containerMaxWidth: '1280px',
    padding: 's1_5',
  },
})
