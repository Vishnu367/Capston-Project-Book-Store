import './App.css';
import './theme.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import { Route, Router, Routes } from 'react-router-dom';
import AllBooks from './pages/AllBooks/AllBooks.jsx';
import Product from './pages/Product/Product.jsx';
import CheckOut from './pages/CheckOut/CheckOut.jsx'
import FavoritesPage from './pages/FavoritesPage/Favorites.jsx'
import DevelopmentPage from './pages/DevelopmentPage/DevelopmentPage.jsx'
import AppLayout from './components/AppLayout/AppLayout.jsx';
import NavBar1 from './components/NavBar/NavBar_1/NavBar1.jsx';
import Footer from './components/Footer/Footer.jsx';
import AppRoutes from './components/AppRoutes/AppRoutes.jsx';

function App(props) {

  const dispatch = useDispatch()
  const bookStore = useSelector(data => data.bookStore)
  const  viewAll  = bookStore.viewAll && bookStore.viewAll

  return (
    <div className='app-component'>
        {/* <Routes>
          <Route path='/bookStore'>
            <AppLayout>
              <Route path='home' element={<HomePage/>}></Route>
              <Route path='home/all-books/:id' element={<AllBooks value={viewAll}/>}></Route>
              <Route path='home/books/product/:id' element={<Product/>}></Route>
              <Route path='home/userId/:id/checkout' element={<CheckOut/>}></Route>
              <Route path='home/userId/:id/favorites' element={<FavoritesPage/>}></Route>
              <Route path='home/development-message' element={<DevelopmentPage/>}></Route>
            </AppLayout>
          </Route> */}
        {/* </Routes> */}
        {/* <HomePage/> */}
          <AppRoutes/>
    </div>
  );
}

export default App;


// {
//   "kind": "books#volume",
//   "id": "k6Hy7ULKowMC",
//   "etag": "AqmMC1ZdwTc",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/k6Hy7ULKowMC",
//   "volumeInfo": {
//       "title": "Professional Pen Testing for Web Applications",
//       "authors": [
//           "Andres Andreu"
//       ],
//       "publisher": "John Wiley & Sons",
//       "publishedDate": "2006-07",
//       "description": "Market_Desc: · Programmers and Developers either looking to get into the application security space or looking for guidance to enhance the security of their work· Network Security Professional s looking to learn about, and get into, web application penetration testing Special Features: · Exclusive coverage: coverage includes basics of security and web applications for programmers and developers unfamiliar with security and then drills down to validation, testing and best practices, to ensure secure software development· Website: unique value-add (not found in any other book) showing the reader how to build his/her own pen testing lab, including installation of honey pots (a trap set to detect or deflect attempts at unauthorized use of information systems)-will be replicated on web site· Delivers on Programmer to Programmer promise· Author platform: author is an expert in all forms of penetration testing, in both government and corporate settings, with a reach into each audience About The Book: The first two chapters of the book reviews the basics of web applications and their protocols, especially authentication aspects, as a launching pad for understanding the inherent security vulnerabilities, covered later in the book. Immediately after this coverage, the author gets right down to basics of information security, covering vulnerability analysis, attack simulation, and results analysis, focusing the reader on the outcomes aspects needed for successful pen testing. The author schools the reader on how to present findings to internal and external critical stakeholders, and then moves on to remediation or hardening of the code and applications, rather than the servers.",
//       "industryIdentifiers": [
//           {
//               "type": "ISBN_10",
//               "identifier": "8126509023"
//           },
//           {
//               "type": "ISBN_13",
//               "identifier": "9788126509027"
//           }
//       ],
//       "readingModes": {
//           "text": false,
//           "image": true
//       },
//       "pageCount": 544,
//       "printType": "BOOK",
//       "categories": [
//           "Computer networks"
//       ],
//       "averageRating": 4,
//       "ratingsCount": 1,
//       "maturityRating": "NOT_MATURE",
//       "allowAnonLogging": false,
//       "contentVersion": "0.8.5.0.preview.1",
//       "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//       },
//       "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=k6Hy7ULKowMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=k6Hy7ULKowMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//       },
//       "language": "en",
//       "previewLink": "http://books.google.co.in/books?id=k6Hy7ULKowMC&pg=PA120&dq=intitle:&hl=&cd=1&source=gbs_api",
//       "infoLink": "http://books.google.co.in/books?id=k6Hy7ULKowMC&dq=intitle:&hl=&source=gbs_api",
//       "canonicalVolumeLink": "https://books.google.com/books/about/Professional_Pen_Testing_for_Web_Applica.html?hl=&id=k6Hy7ULKowMC"
//   },
//   "saleInfo": {
//       "country": "IN",
//       "saleability": "NOT_FOR_SALE",
//       "isEbook": false
//   },
//   "accessInfo": {
//       "country": "IN",
//       "viewability": "PARTIAL",
//       "embeddable": true,
//       "publicDomain": false,
//       "textToSpeechPermission": "ALLOWED",
//       "epub": {
//           "isAvailable": false
//       },
//       "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.co.in/books/download/Professional_Pen_Testing_for_Web_Applica-sample-pdf.acsm?id=k6Hy7ULKowMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//       },
//       "webReaderLink": "http://play.google.com/books/reader?id=k6Hy7ULKowMC&hl=&source=gbs_api",
//       "accessViewStatus": "SAMPLE",
//       "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//       "textSnippet": "... <b>intitle</b> inurl intext filetype cache link You will always build on the site : directive since you have a clear objective . The <b>intitle</b> : directive restricts the search to data within the title of any web page Google is aware of . This&nbsp;..."
//   }
// }