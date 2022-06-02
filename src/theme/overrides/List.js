// ----------------------------------------------------------------------
export default function List(theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: theme.palette.grey[900],
          lineHeight: '2'
        }
      }
    }
  };
}
