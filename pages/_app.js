// _app.js
import '/styles/global.css';
import DarkModeProvider from './Context-dark-mode'; 

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
