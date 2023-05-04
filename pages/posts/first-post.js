import React, {Component} from 'react';
import Link from "next/link";

class FirstPost extends Component {
    render() {
        return (
            <div>
                <h1> First post</h1>
                <h2> <Link href="/" className=""> Back to home bro</Link></h2>
            </div>
        );
    }
}

export default FirstPost;