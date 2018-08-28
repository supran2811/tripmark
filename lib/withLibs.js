
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import withAuth from './withAuth';
import withGoogleMap from './withGoogleMap';

export function withGoogleApiLibs(ComposedComponent,defaultNS , pageStyle ) {
  return withAuth(translate(defaultNS)(withStyles(pageStyle)(withGoogleMap(ComposedComponent)))); 
}


export default function withLibs(ComposedComponent,defaultNS , pageStyle ) {
  return pageStyle ? withAuth(translate(defaultNS)(withStyles(pageStyle)(ComposedComponent))) 
                    : withAuth(translate(defaultNS)(ComposedComponent)) ; 
}
