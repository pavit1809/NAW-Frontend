// ----------------------------------------------------------------------

export default function InputLabel(theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: theme.palette.grey[900]
        }
      }
    },
  };
}
