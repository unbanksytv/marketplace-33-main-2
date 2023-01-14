import Head from 'next/head';
import Layout from 'components/Layout';
import Footer from 'components/Footer';

import { useEffect, useState } from 'react';

const renderData = (data: Data) => {
    return (
        <div>
            <p>Market Sentiment: {data.market_sentiment.text}</p>
            <p>Market Cap (USD): {data.market_cap_usd}</p>
            <p>Volume (24h): {data.volume_24h}</p>
            {/* Extract and render other properties as needed */}
        </div>
    )
}

const sdk = require('api')('@nftgo/v2.0#ulug34clc4nnbsw');

interface MarketSentiment {
score: number;
text: string;
}

interface Data {
market_sentiment: MarketSentiment;
market_cap_usd: number;
volume_24h: number;
volume_7d: number;
volume_30d: number;
volume_all: number;
holder_num: number;
whale_num: number;
collection_num: number;
nft_num: number;
trader_num_24h: number;
trader_num_7d: number;
trader_num_30d: number;
trader_num_all: number;
buyer_num_24h: number;
buyer_num_7d: number;
buyer_num_30d: number;
buyer_num_all: number;
seller_num_24h: number;
seller_num_7d: number;
seller_num_30d: number;
seller_num_all: number;
}

const FullWidthImages: React.FunctionComponent = () => {
const [data, setData] = useState<Data | null>(null);

useEffect(() => {
sdk.auth('2d622acf-8216-4cd5-8e45-23b887e96783');
sdk.get_metrics_eth_v1_market_metrics_get()
.then(({ data }: { data: Data }) => setData(data))
.catch((err: Error) => console.error(err));
}, []);

return (
<Layout navbar={{}}>
<Head>
<title>ALOHA</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/blur-image-on-load@1.1.0/dist/blur-image-on-load.min.css" />
</Head>
<div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6">
{data && renderData(data)}
</div>
</div>
<Footer />
</Layout>
);
};

export default FullWidthImages;