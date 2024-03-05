import {StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://www.youtube.com'}}
      minimumFontSize={12}
      forceDarkOn={true}
      useWebView2={true}
      enableApplePay={true}
      allowsFullscreenVideo={true}
      allowFileAccess={true}
      pullToRefreshEnabled={true}
      allowsProtectedMedia={true}
      geolocationEnabled={true}
      textInteractionEnabled={true}
      autoManageStatusBarEnabled={true}
      mediaCapturePermissionGrantType={'grantIfSameHostElsePrompt'}
      style={styles.mainContainer}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
