import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<> 
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  </style> 
  <Component {...pageProps} />
  </>)
}

export default MyApp
