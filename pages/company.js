import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'

export default function Company() {
  return (
    <div className='container'>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform</title>
        <link rel='icon' href='/website-gh/favicon.ico' />
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
