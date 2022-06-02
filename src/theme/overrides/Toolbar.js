// ----------------------------------------------------------------------

export default function Toolbar(theme) {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[900]
        }
      }
    },
  };
}
