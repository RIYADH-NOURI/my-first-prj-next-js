// _app.js
import '/styles/global.css';
import DarkModeProvider from './Context-dark-mode'; // استخدم التصدير الافتراضي هنا

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
