
import { translate } from "react-i18next";
import { withStyles } from "@material-ui/core";

import withGoogleMap from "./withGoogleMap";

export function withGoogleApiLibs(ComposedComponent, defaultNS, pageStyle) {
  return translate(defaultNS)(withStyles(pageStyle, { withTheme: true })(withGoogleMap(ComposedComponent)));
}

export default function withLibs(ComposedComponent, defaultNS, pageStyle) {
  return pageStyle ? translate(defaultNS)(withStyles(pageStyle, { withTheme: true })(ComposedComponent))
    : translate(defaultNS)(ComposedComponent);
}
