import '../../styles/globals.css';
import TodoProvider from '@root/context/TodoContext';

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
