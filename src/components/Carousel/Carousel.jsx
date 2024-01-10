import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Carousel.css'
import { useDispatch } from 'react-redux'
import { setViewAll, userSelectedBook } from '../../redux/action'

const Carousel = (props) => {
    
    const { title, data } = props.value
    const books = data && data.slice(0,5)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleViewAll = () => {
        dispatch(setViewAll(data))
    }

    const bookObject = (book) => {
        dispatch(userSelectedBook(book))
        navigate(`/allBooks/book/product/${book.id}`)
    }

  return (
    <div id='carousel-container'>
        <div className='this-container card-container'>
            <div className='d-flex justify-content-between align-items-center my-2'>
                <h2 className='carousel-tilte'>{title}</h2>
                <NavLink 
                    className='carousel-nav-link this-btn' 
                    to={`allBooks/${title}`}
                    onClick={handleViewAll}
                >
                    View all
                    <i class="fa-solid fa-arrow-right ms-2"></i>
                </NavLink>
            </div>
            <ul className='card-list d-flex gap-4'>
                {
                    books && books.map(element => {

                        return <li 
                                    onClick={() => bookObject(element)}
                                    className='card-item'
                                >
                                    <img 
                                        className='card-item-thumbnail' 
                                        src={element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.thumbnail} 
                                        alt='book-image'/>
                                    <div className='card-details'>
                                        <div className='card-item-title'>{element.volumeInfo.title}</div>
                                        <div className='card-item-price'>
                                            <b>
                                                {element.saleInfo.listPrice && element.saleInfo.listPrice?.amount}
                                            </b>
                                            <span className='card-item-original-price'>
                                                {element.saleInfo.listPrice?.amount === element.saleInfo.retailPrice.amount 
                                                    ? null : element.saleInfo.retailPrice.amount 
                                                }
                                            </span>
                                            {element.saleInfo.listPrice && element.saleInfo.listPrice?.currencyCode}
                                        </div>
                                    </div>
                                </li>
                    })
                }
            </ul>
            {/* <div className='right-arrow'>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div className='left-arrow'>
                <i class="fa-solid fa-arrow-left"></i>
            </div> */}
        </div>
    </div>
  )
}

export default Carousel



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
    //       "textSnippet": "... <b>intitle</b> inurl intext filetype cache link You will always build on the site : directive since you have a clear objective . The <b>intitle</b> : directive restricts the search to books within the title of any web page Google is aware of . This&nbsp;..."
    //   }