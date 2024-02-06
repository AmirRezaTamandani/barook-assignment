"use client";
import { createTheme } from "@mui/material/styles";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#00a8ff",
    },
    secondary: {
      main: "#0097e6",
    },
    //TODO: find a way to make this work if needed
    // custom: {
    //   primaryBg: '#353b48',
    //   primaryText: '#f5f6fa',
    //   primaryBtn: '#00a8ff',
    //   primaryAccent: '#0097e6',
    // },
  },
});

export default theme;
