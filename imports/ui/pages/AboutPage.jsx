import React from 'react';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="welcomePage">
                <header id="headerWrapper">
                    <div id="headerContent">
                        <a href="/"><img src="images/iode-logo.png" alt="iode software"/></a>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li className="active"><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </header>
                <div id="primaryWrapper">
                    <div id="primaryContent">
                        <img style={{float:'left', padding:'10px', paddingTop: '5px', width:"70px", borderRadius: '50px'}}  src="/images/me.jpg"/>
                        <h1><strong>Paul</strong> Drummond</h1>
                        <p>Hey, my name is Paul and this is Iode.  Iode is all about making coding fun and creative again, and getting that
                        passion back that can be lost so quickly when devs like us enter the cold and dark world of the Greedy Corps! :-)
                       </p>
                       <p>Have a look around and don't be put off by the wierdness - most of the content in the blog is more grounded in reality, I promise :-) </p>

                       <p> The blog will focus on code and the world of tech mainly - things I'm currently into like <a href="meteor.com">Meteor</a> and <a href="https://facebook.github.io/react/">React</a> (and others like <a href="http://clojure.org/index">Clojure</a>, Java, <a href="https://spring.io/">Spring</a>, <a href="">Backbone</a>, <a href="">Angular</a>, etc, etc.), but every now
                           and then I'll throw in a curve-ball and probably have a rant about the state of the industry and what it's like to be a software contractor in the UK in 2016.  While I joke
                           around and get creative sometimes (creativity=wierd for me - that's just the way it is, but I do it because it's fun!), the general idea is to try to share my ideas for how
                           to improve things rather than just rant about how bad everything is.  (But rants are fun too so I can guarentee they will happen too).
                       </p>
                       <p> Thanks for taking the time to check out my little tiny corner of the InterWebs.  If you have any feedback, I love to hear it so
                           please <a href="mailto:paul.drummond@iode.co.uk">get in touch</a> and I'll respond as soon as I can.
                       </p>                       
                    </div>
                </div>

                    <div id="secondaryWrapper">
                        <div id="secondaryContent">
                            <h2>Who is Paul, really?</h2>
                            <p>Paul is one of the original devs.  He runs Iode but he’s not entirely sure what Iode is.  He is well aware of the <strong>prophecy</strong> of the source and the importance defending against the <strong>Greedy Corps</strong>, but for him, Iode is more than that. He feels like it’s a useful place to share his <strong>love of coding</strong> and creating things and writing about <strong>how he codes the things he creates</strong>. He hopes his words will inspire others to break free from the <strong>Greedy Corps</strong>. It's not their fault after all, they have been brainwashed and they aren't even aware of <strong>The Source</strong>, or even that the <strong>Rebellion</strong> exists!</p>
                                <p style={{textAlign:'center', padding:'30px'}}><img src="/images/man-geek.png"/></p>
                        <p>
                            Paul begins to ponder... It's like <strong>code</strong>  but with an <strong>i</strong> instead of a <strong>c</strong>.  What does the <strong>i</strong> stand for?  Does it mean anything?  Maybe it means nothing? Paul stops pondering and gets back to work.
                        </p>

                        <p className="dividerRule"></p>

                        <p>
                            <i>"<strong>Iode</strong> is the blog"</i>, sceams an annonymous voice. The <strong>i</strong> stands for <strong>information</strong>, and Iode is all about sharing
                                how The Source <strong>expects the code</strong> to be written. This is only part of the answer.  The <strong>rules of the code</strong> have been lost in time. Only the <strong>bravest devs</strong> will be able to find them and even then
                                the journey wil be fraught with peril and there are no guarentees.
                        </p>

                        <p className="dividerRule"></p>

                        <p>
                            Paul finally understands his purpose. He begins to mumble.. it's about respecting the source and following in their footsteps.  It's about fending of the <strong>Greedy Coorps</strong> by lighting the way for others.  The Blog
                            shall be our bible.  We just need to write it then all will be well.
                        </p>

                        <p className="dividerRule"></p>

                        <p>
                            And so Paul began to write.  There was so much to share, but would anyone listen?  He had to work fast and make sarifices, but he knew this risks were worth it.
                        </p>
                        <p className="dividerRule"></p>

                        <p> And just like that, it was the end of the beginning. </p>

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
