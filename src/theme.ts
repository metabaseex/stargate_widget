const { darken, lighten } = require("@material-ui/core/styles");
const {
  default: createBreakpoints
} = require("@material-ui/core/styles/createBreakpoints");
const { alpha } = require("@material-ui/core/styles/colorManipulator");
const {
  default: createTypography
} = require("@material-ui/core/styles/createTypography");
const {
  default: createPalette
} = require("@material-ui/core/styles/createPalette");

// utils
const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

function pxToRem(size) {
  return `${(size / htmlFontSize) * coef}rem`;
}

function pointsToRem(size) {
  return `${size / 1000}rem`;
}

function adaptColor(type, color, coefficient) {
  return (typeof type === "string" && type === "light") ||
    (typeof type === "boolean" && type)
    ? darken(color, coefficient)
    : lighten(color, coefficient);
}

// theme definition

const FontFamily = {
  ROBOTO: "'Roboto', sans-serif",
  ROC_GROTESK: "'roc-grotesk', sans-serif"
};

const FontWeight = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900
};

const palette = createPalette({
  type: "dark",
  primary: {
    light: "#BFBFBF",
    main: "#6E42CA",
    dark: "#6E42CA",
    contrastText: "#fff"
  },
  info: {
    main: "#50A0BE",
    light: "#16162D"
  },
  success: {
    main: "#2ECC71"
  },
  error: {
    main: "#F03F77"
  },
  warning: {
    main: "#BEA850"
  },
  borders: {
    disabled: "#494747",
    default: "#9A9A9A"
  },
  text: {
    primary: "#E5E4FA",
    secondary: "#E5E4FA",
    disabled: "#9A9A9A"
  },
  divider: "#16162D",
  background: {
    // backgorund change
    paper: "#16162D",
    default: "#000000"
  },
  action: {
    disabled: "#666666",
    disabledBackground: "#1A1A1A"
  }
});

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
});

const typography = createTypography(palette, {
  h1: {
    lineHeight: pxToRem(46),
    letterSpacing: "-3%",
    fontSize: pxToRem(46),
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.ROC_GROTESK
  },
  h2: {
    lineHeight: pxToRem(36),
    fontSize: pxToRem(36),
    letterSpacing: "-2%",
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.ROC_GROTESK
  },
  h3: {
    lineHeight: pxToRem(25),
    fontSize: pxToRem(24),
    letterSpacing: "-2%",
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.ROC_GROTESK
  },
  h4: {
    lineHeight: pxToRem(24),
    fontSize: pxToRem(20),
    letterSpacing: "0%",
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.ROC_GROTESK
  },
  h5: {
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.18)
  },
  h6: {
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.15)
  },
  subtitle1: {
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.14)
  },
  subtitle2: {
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.1)
  },
  body1: {
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.5)
  },
  body2: {
    lineHeight: pxToRem(20),
    letterSpacing: pxToRem(0.25)
  },
  button: {
    lineHeight: pxToRem(16),
    letterSpacing: pxToRem(1.25)
  },
  caption: {
    lineHeight: pxToRem(16),
    letterSpacing: pxToRem(0.24)
  },
  overline: {
    fontSize: pxToRem(10),
    lineHeight: pxToRem(16),
    letterSpacing: pxToRem(1.5)
  }
});

const theme = {
  palette,
  typography,
  breakpoints,
  props: {
    MuiTextField: {
      InputLabelProps: {
        shrink: true
      }
    },
    MuiAlert: {
      icon: false
    }
  },
  shape: {
    borderRadius: 16
  },
  overrides: {
    MuiSlider: {
      root: {
        color: "#50BEAF"
      },
      rail: {
        color: "#D9D9D9"
      },
      mark: {
        color: "#D9D9D9"
      }
    },
    MuiTypography: {
      button: {
        textTransform: "none"
      }
    },
    MuiTable: {
      root: {
        backgroundColor: palette.background.paper
      }
    },
    MuiSwitch: {
      root: {
        "&.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#323232"
        }
      },
      switchBase: {
        background: "none",
        "&:hover, .checked:hover": {
          background: "none"
        }
      },
      colorSecondary: {
        "&.Mui-checked + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#FFFFFF"
        },
        "&.MuiSwitch-colorSecondary.Mui-checked": {
          "&:hover": {
            background: "none"
          }
        }
      },
      thumb: {
        backgroundColor: "#999999"
      }
    },
    MuiTableCell: {
      root: {
        height: pxToRem(76),
        padding: `${pxToRem(16)} ${pxToRem(32)}`,
        fontWeight: 400,
        fontSize: pxToRem(16),
        lineHeight: pxToRem(18.75),
        "&.MuiTableCell-head": {
          color: `${palette.text.secondary} !important`,
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: pxToRem(18.75),
          height: pxToRem(69)
        }
      }
    },
    MuiTableRow: {
      root: {
        borderBottom: `${pxToRem(1.016)} solid ${palette.divider}`,
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: palette.divider
        }
      },
      head: {
        "&:hover": {
          backgroundColor: palette.background.paper
        }
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent !important"
        }
      }
    },
    MuiButton: {
      root: {
        borderRadius: 16,
        fontFamily: FontFamily.ROC_GROTESK,
        fontWeight: FontWeight.MEDIUM,
        letterSpacing: "0.04em",
        textTransform: "none"
      },
      sizeSmall: {
        borderRadius: 70,
        fontSize: pxToRem(14),
        letterSpacing: 0
      },
      sizeLarge: {
        borderRadius: 16,
        fontSize: pxToRem(16),
        letterSpacing: 0,
        fontWeight: 500
      },
      contained: {
        padding: `13px 16px 11px 16px`,
        fontSize: pxToRem(14),
        boxShadow: "none",
        "&$disabled, &$disabled:hover": {
          color: "#fff",
          backgroundColor: "#24243A !important"
        },
        "&:hover": {
          boxShadow: "none"
        }
      },
      containedPrimary: {
        "& [class^=MuiButton-label]": {
          position: "relative",
          width: "initial",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1.5px",
            width: "100%",
            backgroundColor: palette.text.primary,
            transform: "scaleX(0)",
            transition: "transform 150ms ease-out",
            transformOrigin: "left"
          }
        },
        "&:hover": {
          backgroundColor: lighten(palette.primary.main, 0.1),
          boxShadow: "none",
          "& [class^=MuiButton-label]::after": {
            transform: "scaleX(1)"
          }
        }
      },
      containedSizeSmall: {
        padding: `6px 12px 4px 12px`
      },
      containedSizeLarge: {
        padding: `20px 24px`,
        fontSize: "17px",
        fontWeight: 600,
        letterSpacing: "0.44px"
      },
      outlined: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        padding: `11px 15px 9px 15px`,
        fontSize: pxToRem(14),
        letterSpacing: pointsToRem(89),
        boxShadow: "none",
        "&$disabled, &$disabled:hover": {
          color: "#666666",
          borderColor: "#404040!important"
        },
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "#1A1A1A!important"
        }
      },
      outlinedPrimary: {
        border: `1px solid ${palette.primary.main}`,
        "&:hover": {
          border: `1px solid ${palette.primary.main}`,
          "& [class^=MuiButton-label]::after": {
            transform: "scaleX(1)"
          }
        },
        "&$disabled": {
          border: `1px solid ${palette.action.disabled}`
        },
        "&$outlinedSizeSmall": {
          border: `1px solid ${palette.primary.main}`,
          color: "#FBFAFF"
        },
        "& [class^=MuiButton-label]": {
          position: "relative",
          width: "initial",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1.5px",
            width: "100%",
            backgroundColor: palette.text.primary,
            transform: "scaleX(0)",
            transition: "transform 150ms ease-out",
            transformOrigin: "left"
          }
        }
      },
      outlinedSizeSmall: {
        padding: `5px 11px 3px 11px`
      },
      outlinedSizeLarge: {
        padding: `18px 23px`
      }
    },
    MuiInputBase: {
      formControl: {
        backgroundColor: "#24243A",
        borderColor: palette.divider,
        "label + &": {
          marginTop: 24
        },
        "label.MuiFormLabel-filled + &:not($focused):not($error)": {
          backgroundColor: "#24243A"
        }
      },
      root: {
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
          display: "none"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 16,
        height: 66,
        color: "#CCCCCC",
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&$focused:not($error) $notchedOutline": {
          borderWidth: 1,
          borderColor: palette.primary.main
        },
        "&$error $notchedOutline": {
          borderWidth: 1,
          borderColor: palette.error.main
        },
        "&$disabled": {
          backgroundColor: darken("#24243A", 0.2),
          color: "#666666",
          "& $notchedOutline": {
            borderWidth: 0
          }
        },
        "&$focused": {
          backgroundColor: "#000000"
        },
        "&:hover $notchedOutline": {
          transition: "border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          borderColor: adaptColor("dark", "#16162D", 0.025)
        },
        "label.MuiFormLabel-filled + &:not($focused):not($error) $notchedOutline": {
          borderColor: adaptColor("dark", "#16162D", 0.025)
        }
      },
      focused: {},
      disabled: {},
      error: {},
      input: {
        fontSize: pxToRem(30),
        lineHeight: "35px",
        letterSpacing: "0.01em",
        fontWeight: 600,
        padding: `${(56 - 24) / 2}px 16px`
      },
      notchedOutline: {
        transition: "border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        borderColor: "#16162D",
        borderTopColor: "#16162D",
        borderBottomColor: "#16162D",
        borderLeftColor: "#16162D",
        borderRightColor: "#16162D",
        top: 0,
        "& > legend": {
          display: "none"
        }
      }
    },
    MuiInputAdornment: {
      root: {
        color: "#757575"
      }
    },
    MuiInputLabel: {
      outlined: {
        "&$shrink": {
          transform: "translateY(3px) scale(0.9)",
          fontSize: pxToRem(14)
        },
        "&$disabled": {
          color: palette.action.disabled
        }
      },
      shrink: {},
      disabled: {}
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiFormLabel: {
      root: {
        color: palette.text.secondary,
        fontWeight: 600
      }
    },
    MuiChip: {
      root: {
        backgroundColor: palette.action.disabledBackground,
        color: palette.action.disabled,
        cursor: "pointer",
        width: 85,
        height: 28
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
        color: "rgba(255,255,255,0.87)",
        backgroundColor: "#1e1e30",
        maxWidth: 140
      },
      arrow: {
        color: palette.primary.light
      }
    },
    MuiAccordionSummary: {
      root: {
        margin: 0,
        [breakpoints.up("md")]: {
          padding: "0 24px"
        },
        "&$expanded": {
          minHeight: 56
        }
      },
      content: {
        margin: "12px 0",

        "&$expanded": {
          margin: "12px 0"
        },
        [breakpoints.up("md")]: {
          margin: "16px 0",

          "&$expanded": {
            margin: "16px 0"
          }
        }
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: alpha("#000", 0.8)
      }
    },
    MuiDialog: {
      paper: {
        boxShadow: "none"
      },
      container: {
        paddingBottom: 16
      }
    },
    MuiDialogContent: {
      root: {
        paddingBottom: 16
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "#757575",
        "&$selected": {
          color: palette.text.primary
        }
      },
      label: {
        "& > span": {
          textTransform: "none"
        }
      }
    },
    MuiSelect: {
      root: {
        "&$disabled + input + $icon": {
          opacity: 0.5
        }
      },
      icon: {
        color: palette.action.disabled,
        right: 16
      },
      iconOutlined: {
        right: 16
      }
    },
    MuiLinearProgress: {
      root: {
        height: 2,
        width: "100%"
      },
      barColorPrimary: {
        backgroundColor: palette.success.main
      }
    },
    MuiAlert: {
      root: {
        borderRadius: 8,
        padding: "8px 16px"
      },
      message: {
        color: palette.text.primary,
        ...typography.caption
      },
      standardInfo: {
        backgroundColor: alpha(palette.info.main, 0.6)
      },
      standardSuccess: {
        backgroundColor: alpha(palette.success.main, 0.6)
      },
      standardWarning: {
        backgroundColor: alpha(palette.warning.main, 0.6)
      },
      standardError: {
        backgroundColor: alpha(palette.error.main, 0.6)
      }
    },
    MuiAvatar: {
      root: {
        height: pxToRem(24),
        width: pxToRem(24)
      }
    }
  }
};

module.exports = { theme, FontFamily };
