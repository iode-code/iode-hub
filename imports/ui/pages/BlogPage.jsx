import React from 'react';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="blogPage">
                <header id="headerWrapper">
                    <div id="headerContent">
                        <a href="/"><img src="images/iode-logo.png" alt="iode software"/></a>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li className="active"><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </header>
                <div id="primaryWrapper" style={{padding:'30px 0px 0px 0px'}}>
                    <div id="primaryContent">
                        <h1>This <strong>is</strong> The <strong>Blog</strong></h1>
                    </div>
                </div>

                <div id="secondaryWrapper">
                    <div id="secondaryContent">
                        <div className="postHeader">
                            <h1><a href="/post/coding-is-fun">When did we forget coding is fun, creative and amazing?</a></h1>
                            <h1><small>Paul Drummond - 2nd April 2016</small></h1>
                                <p>
                                    TODO: Get this written!
                                </p>
                            </div>
                            <div className="postHeader">
                                <h1>A Blog about building this blog!</h1>
                                <h1><small>Paul Drummond - COMING SOON</small></h1>
                                <p>
                                    I'm currently working on a tutorial series covering how I built this site/blog in Meteor 1.3 and React.  It will cover
                                    the entire software life-cycle including my take on boring subjects like requirements and estimates and even going
                                    so far as to explain how I deployed it onto Meteor's Galaxy hosting platform.

                                    If you <a href="/">registered</a> on the main page, I will send you an email when the first part is ready.  Otherwise, keep checking here
                                    over the next few days - I'm just finishing up the first part so so it shouldn't be long now :-)
                                </p>
                            </div>

                            <div className="postHeader">
                                <h1><a href="/post/finally-understand-closures">RE-POST: I finally understand Closures</a></h1>
                                <h1><small>Paul Drummond - 2nd April 2016</small></h1>
                                    <p>
                                        <i>THIS IS A REPOST FROM YESTER-YEAR.  15th July 2008 to be exact. The original got some decent <a href="https://www.reddit.com/comments/6rx18/i_finally_understand_closures">comments</a> on Reddit would you believe. </i>
                                    </p>
                                    <p>I have been trying to understand closures off-and-on for what seems like forever now. Last night however, while hacking around in the Clojure REPL I finally groked it!</p>
                                    <p><a href="/post/finally-understand-closures">Read More...</a></p>
                            </div>

                            <div className="postHeader">
                                <h1><a href="/post/bottom-up-development">RE-POST: Bottom-up Development: Embracing Change</a></h1>
                                <h1><small>Paul Drummond - 2nd April 2016</small></h1>
                                    <p>
                                        <i>THIS IS ANOTHER REPOST FROM YESTER-YEAR.  Originally posted on Tuesday 11 December 2007 <a href="http://goldfish-geek.blogspot.com/2007/12/bottom-up-development-embracing-change.html">here</a>.</i>
                                    </p>
                                    <p><a href="/post/bottom-up-development">Read More...</a></p>
                            </div>

                            </div>
                    </div>

                    <div id="utilityWrapper">
                        <div id="utilityContent">
                            <div className="utilityNav">
                                <h4>Explore</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                </ul>
                            </div>

                            <div className="utilityContact">
                                <h4>Get in touch</h4>
                                <p><span>e</span> <a href="mailto:">enquiries@iode.co.uk</a></p>
                                <p><span>t</span> 07725 868 647</p>
                            </div>
                        </div>
                    </div>

                    <footer id="footerWrapper">
                        <div id="footerContent">
                            <p>&copy; Iode Software Ltd, registered in England No. 6299803.<br/>
                            Registered Office Address: 12 Sancroft Drive, Houghton-le-Spring, Tyne &amp; Wear, DH5 8NE</p>
                    </div>
                </footer>
            </div>
        );

    }

    getRandomQuote() {
        var quotes = [
            <div><h1>The cure for boredom <strong>is curiosity</strong>. There is <strong>no cure</strong> for curiosity.</h1><p>Dorothy Parker, (attributed)</p></div>,
                <div><h1>Would I rather be <strong>feared or loved</strong>? Easy, both. I want people to be afraid of how <strong>much they love me</strong>.</h1><p>Michael Scott</p></div>,
                    <div><h1>The programmer, <strong>like the poet</strong>, works only slightly removed from pure thought-stuff. He <strong>builds castles in the air</strong>, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of <strong>realizing grand conceptual structures</strong>.</h1><p>Fred Brooks, The Mythical Man-Month</p></div>,
                        <div><h1>Because <strong>you are</strong> comfortable in your <strong>mediocrity</strong>; because you <strong>choose</strong> not to try.</h1><p>Raymmar Tirado</p></div>
                    ];
                    return quotes[Math.floor(Math.random() * quotes.length)];
                }
            }
