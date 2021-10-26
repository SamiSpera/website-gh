import Head from 'next/head'

export default function HeadComponent() {
  return (
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
  )
}
