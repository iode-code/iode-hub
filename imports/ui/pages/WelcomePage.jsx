import React from 'react';

export default class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuote: this.getRandomQuote()
        };
    }

    render() {
        return (
            <div className="welcomePage">
                <header id="headerWrapper">
                    <div id="headerContent">
                        <a href="/"><img src="images/iode-logo.png" alt="iode software"/></a>
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </header>
                <div id="primaryWrapper">
                    <div id="primaryContent">
                        <div className="quoteContainer" onClick={this.setRandomQuote.bind(this)}>
                            {this.state.currentQuote}
                        </div>
                    </div>
                </div>

                <div id="secondaryWrapper">
                    <div id="secondaryContent">
                        <h2>We The Devs</h2>
                        <p>
                            The Source knew it was going to be almost impossible to defeat the <strong>Greedy Corps</strong>.  They were too powerful and their brainwashing techniques were <strong>tremendously difficult</strong> to overcome.
                        </p>
                        <p>
                            But despite everything, The Source <strong>kept their faith</strong> in the Devs.  They knew The Devs would continue to see through the facade and reveal the true motivations of <strong>Greedy Corps</strong>, no matter what obstacles stood in their way.
                        </p>
                        <p>
                            It's been years. We are stronger now, but this <strong>victory</strong> only marks the <strong>end of the beginning</strong>. We have to build on the <strong>slender lead</strong> we have worked so hard to attain. We need more devs to spread our message and <strong>free the code</strong>.  Only the <strong>bravest</strong> should apply, the rest should probably <strong>stay with the Greedy Corps</strong> for now - it's the only <strong>safe</strong> option.
                        </p>
                        <a href="/about" className="readMore">Curious?</a>
                        <div style={{display:'flex', height:'50px', marginTop:'100px'}}>
                            <input style={{width:'100%', padding:'10px', fontSize:'18px'}} type="email" placeholder="To help ensure a better future for The Devs, join us! Enter your email here."/>
                            <button style={{padding:'10px'}}>Join</button>
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

    setRandomQuote() {
        this.setState({currentQuote: this.getRandomQuote()});
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
