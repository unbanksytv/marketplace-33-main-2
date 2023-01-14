import Head from 'next/head';
import Layout from 'components/Layout'
import Footer from 'components/Footer'
import {useEffect, useState} from 'react'

const sdk = require('api')('@nftgo/v2.0#ulug34clc4nnbsw');

const FullWidthImages = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    sdk.auth('2d622acf-8216-4cd5-8e45-23b887e96783');
    sdk.get_metrics_eth_v1_market_metrics_get()
      .then(({ data }) => setData(data))
      .catch(err => console.error(err));
  }, [])
    return (
        <Layout navbar={{}}>
          <Head>
            <title>ALOHA</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/blur-image-on-load@1.1.0/dist/blur-image-on-load.min.css" />
          </Head>
          <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            {data && console.log(data)}
            </div>
          </div>
          <Footer /> 
        </Layout>
    )
}

export default FullWidthImages;

