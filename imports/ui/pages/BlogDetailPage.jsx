import React from 'react';

export default class BlogDetailPage extends React.Component {
    render() {
        return (
            <div>
                <div className="blogDetailPage">
                <header>
                    <a href="/blog"><img style={{width:'100px', padding:'10px', marginTop:'30px', marginLeft:'200px'}} src="/images/iode-logo.png" alt="iode software"/></a>
                </header>



                    <div className="blogContent">
                        <h1 className="title">When did we forget coding is fun, creative an amazing?</h1>
                        <h2 className="subTitle">Paul Drummond - 1st April 2016</h2>

                        <p>
                            I have over 15 years of experience now and I have worked in some really shockingly bad places.  There have been
                            a few occasions over the years where I seriously considered giving it all up - where I felt like this career just didn't turn out the way I expected.  When I was in college programming was
                            mysterious and amazing.  I would stare at the screen in awe and amazement and tell myself I needed to learn how to do this amazing stuff.  Fast forward to
                            my first job and it all went rapidly down hill.  I could never have prepared myself for the sheer horror of the software industry.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
