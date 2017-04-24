import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  // * See the Getting Started docs for more information:
 * http://getbootstrap.com/getting-started/#support-ie10-width
  '@-ms-viewport': {
    'width': [{ 'unit': 'string', 'value': 'device-width' }]
  },
  '@-o-viewport': {
    'width': [{ 'unit': 'string', 'value': 'device-width' }]
  },
  '@viewport': {
    'width': [{ 'unit': 'string', 'value': 'device-width' }]
  }
});
