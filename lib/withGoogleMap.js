import { GoogleApiWrapper } from 'google-maps-react';

export default function withGoogleMap(ComposedComponent) {
  return new GoogleApiWrapper({
    apiKey:`${process.env._GOOGLE_API_KEY}`
  })(ComposedComponent)
}