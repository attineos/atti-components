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
    gap: '20px',
    to: '419px',
    containerMaxWidth: '419px',
    padding: 's5',
  },
  tablet: {
    cols: 6,
    gap: '20px',
    from: '420px',
    to: '767px',
    containerMaxWidth: '767px',
    padding: 's5',
  },
  desktop: {
    cols: 12,
    gap: '20px',
    from: '768px',
    to: '1023px',
    containerMaxWidth: '1023px',
    padding: 's5',
  },
  xlDesktop: {
    cols: 12,
    gap: '20px',
    from: '1024px',
    containerMaxWidth: '1280px',
    padding: 's5',
  },
})
