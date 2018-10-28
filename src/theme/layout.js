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
    cols: 4,
    maxWidth: '320px',
    gap: '20px',
    to: '400px',
  },
  tablet: {
    cols: 4,
    maxWidth: '550px',
    gap: '20px',
    from: '401px',
    to: '600px',
  },
  desktop: {
    cols: 6,
    maxWidth: '900px',
    gap: '20px',
    from: '601px',
    to: '1000px',
  },
  xlDesktop: {
    cols: 6,
    maxWidth: '1100px',
    gap: '20px',
    from: '1001px',
  },
})
