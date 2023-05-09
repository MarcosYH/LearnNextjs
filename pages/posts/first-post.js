import React, {Component} from 'react';
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
class FirstPost extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title> Post page</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <h1> First post</h1>
                <h2> <Link href="/" className=""> Back to home bro</Link></h2>
            </div>
        );
    }
}

export default FirstPost;