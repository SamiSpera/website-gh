import HeadComponent from '../components/HeadComponent'
import Head from 'next/head'

import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'
import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'

export default function Company() {
  const items = [
    {
      itemId: 'img1',
      mediaUrl: '/website-gh/images/company/IMG_8790.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img2',
      mediaUrl: '/website-gh/images/company/IMG_8791.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img3',
      mediaUrl: '/website-gh/images/company/IMG_8794.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img4',
      mediaUrl: '/website-gh/images/company/IMG_8813.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img5',
      mediaUrl: '/website-gh/images/company/IMG_8825.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img6',
      mediaUrl: '/website-gh/images/company/IMG_8836.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 250,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img7',
      mediaUrl: '/website-gh/images/company/IMG_8838.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 270,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img8',
      mediaUrl: '/website-gh/images/company/IMG_8849.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 270,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img9',
      mediaUrl: '/website-gh/images/company/IMG_8865.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 270,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    },
    {
      itemId: 'img10',
      mediaUrl: '/website-gh/images/company/IMG_8895.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 270,
        title: '',
        description: '',
        focalPoint: [0, 0]
      }
    }
  ]

  const options = {
    galleryLayout: 0
  }

  const isBrowser = () => typeof window !== 'undefined'

  const container = {
    width: isBrowser() && window.innerWidth,
    height: isBrowser() && window.innerHeight
  }

  const eventsListener = (eventName, eventData) => console.log({ eventName, eventData })

  const scrollingElement = isBrowser() && window

  return (
    <div className='container'>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform</title>
        <link rel='icon' href='website-gh/favicon.ico' />
        <link
          rel='preload'
          href='/website-gh/fonts/VarelaRound-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <HeaderNav />

      <div className='inner-div'>
        <h2>About Our Company</h2>
        <p>
          DocSpera's team comes from the healthcare, technology and security industries, and brings
          with it decades of executive level experience from innovative companies like Siemens,
          Yahoo!, Phillips, Heartflow, Microsoft, Cisco, Esri, GE, Intuit, and Eli Lilly to name a
          few.
        </p>
        {/* {isBrowser() && (
          <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
        )} */}

        {/* Dinner Images */}
        <div style={{ display: 'flex' }}>
          {/* Vertical Dinner Images (on the Left) */}
          <div style={{ width: '32%' }}>
            <img
              className='img'
              src='/website-gh/images/company/IMG_8790.jpeg'
              style={{ width: '100%', marginRight: 5 }}
            />
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <img
                className='img'
                src='/website-gh/images/company/IMG_8791.jpeg'
                style={{ width: '108%' }}
              />
            </div>
          </div>
          {/* Standing Dinner Image (to the Right) */}
          <div style={{ width: '68%', height: '100%', marginLeft: 10 }}>
            <img
              className='img'
              src='/website-gh/images/company/IMG_8794.jpeg'
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Brainstorming Session */}
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <img
              className='img'
              src='/website-gh/images/company/IMG_8836.jpeg'
              style={{ width: '100%' }}
            />
            <img
              className='img'
              src='/website-gh/images/company/IMG_8825.jpeg'
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ width: '50%', marginLeft: 10 }}>
            <img
              className='img'
              src='/website-gh/images/company/IMG_8838.jpeg'
              style={{ width: '100%' }}
            />
            <img
              className='img'
              src='/website-gh/images/company/IMG_8849.jpeg'
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Elizabeth, Luca & Jon */}
        <img
          className='img'
          src='/website-gh/images/company/IMG_8865.jpeg'
          style={{ width: '100%' }}
        />

        {/* Company Jackets Image */}
        <img
          className='img'
          src='/website-gh/images/company/IMG_8940.jpeg'
          style={{ width: '100%' }}
        />
      </div>

      <FooterBar />
      <style jsx>{`
        .container {
          width: 100%;
        }

        h2 {
          text-align: center;
        }

        p {
          max-width: 700px;
          margin: 0 auto;
          // text-align: center;
          padding-top: 30px;
          padding-bottom: 50px;
        }

        .img {
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
