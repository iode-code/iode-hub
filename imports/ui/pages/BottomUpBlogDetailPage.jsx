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
                        <h1 className="title">REPOST: Bottom up Development</h1>
                        <h2 className="subTitle">Paul Drummond - 1st April 2016</h2>

                            <p><i>Re-post - Originally posted on Tuesday 11 December 2007 <a href="http://goldfish-geek.blogspot.com/2007/12/bottom-up-development-embracing-change.html">here</a>.</i></p>
                            <p>I have just read Raganwald's post, <a href="http://weblog.raganwald.com/2007/12/somethings-fishy.html">Something's Fishy</a>, and it made me start thinking hard. One statement in particular caught my attention:</p>
                            <blockquote>
                            "Now maybe this [bad software] has absolutely nothing to do with programmers."
                            </blockquote>
                            <p>In my experience, the fact that writing software is hard is the ultimate driver for all the bureaucracy thrust upon developers in medium to large software houses.</p>
                            <p>Managers are scarred by past experiences maintaining bug-ridden, badly designed systems so they inevitably try to find ways minimize risk by enforcing rule upon rule. They embrace the fear of "getting it wrong" and introduce layers of process from pre-planning to lengthy design phases, to requirements re-re-re-analysis and so on. Often the rules put in place are ad-hoc, subjective and designed to prevent recurrence of specific personal nightmares from the past which will probably never reoccur again, at least not in exactly the same way.</p>
                            <p>I believe putting blame on bad management and bureaucracy is generally futile because, while not necessarily incorrect in specific circumstances, they are just symptoms of the real problem. The real problem in my opinion is that - even when using popular dynamic languages like Python - writing bad code is way too easy to do and maintaining it can become a nightmare as time goes on and feature creep has its wicked way with an infrastructure never designed to support the features it is being asked to support.</p>
                            <p>That's why I am so excited about discovering the power of Lisp and in particular when <a>Paul Graham</a> talks about <a>bottom-up</a> programming. I believe the main players in the software industry focus far too much on top-down design of extendible and reusable systems. This is the basis for Object Oriented Design and it has never, ever sat well with me. How can anyone come up with a system that is designed for change when we have little to no idea what changes will be demanded in the future? We can guestimate and plan ahead and sometimes we may get it right, but there always comes a time in a system's lifetime when the customer requests a feature that the system wasn't designed for.</p>
                            <p>I am very new to Lisp and more generally, functional programming concepts, but when I read about bottom-up programming in <a>On Lisp</a>, it all makes so much sense! Maybe we shouldn't be designing for change? Maybe we should accept that code will change in ways we cannot predict, embrace that fact, then begin to use tools (like Lisp) that help us to manage and maintain such code elegantly.</p>
                            <p>If tasked with writing a geographical mapping product that tracks ship movements, do we spend months writing an infrastructure to support generic objects and potential features that the customer hasn't asked for, but may well do in the future? Or do we write a geographical mapping product that *only* tracks ship movements? Your typical OO enthusiast will say:</p>
                            <blockquote>

                            <p>"Oh, you can't create a Ship class, you should be more generic than that! Study your Ship class for a while - I could pick several attributes and behavioural aspects of your class that aren't specific to a ship and come up with about five base classes. Wham Bam! An extendible and reusable system!".</p>

                            </blockquote>
                            <p>But I just want to write some software that meets the requirements and more importantly... works. I want to keep it simple to reduce risk and minimise the chance of it not working properly. If I break my Ship class down into multiple base classes I am not going to use (and repeat this approach throughout the system), then I am unnecessarily complicating the code and arguably wasting time and money.</p>
                            <p>Nevertheless, the OO guy has a point. If I limit my code to exactly what is required now, then it will be difficult to extend in the future. But, crucially, if the OO guy had his way and generalised the code using a top-down approach, unless he possessed psychic powers he would undoubtedly end up with a system that was just as difficult to extend as mine (except maybe for certain specific scenarios he had thought of), yet his system would be far more complicated and more difficult to maintain.</p>
                            <p>I believe the bottom-up approach is better because I end up with a simple system that works NOW! But I still have the problem that my code is very difficult to extend (just like the OO guy does). What I need is a tool designed to aid, manage and maintain code written in a bottom-up style. Although I have no experience using Lisp in production environments, from what I have read so far I am pretty sure this is precisely where Lisp shines, for lots of reasons, but primarily because of macros. <a>Macros</a> combined with other powerful features of Lisp provide the programmer with the flexibility to generalise code <i>after the fact</i>. It allows us to write very specific code that doesn't go any further than meet current requirements (you know - the ones that <i>actually</i> exist!). As the system evolves and new requirements are requested by the customer, Lisp allows programmers to elegantly <i>mould</i> their system into a new beast capable of meeting those requirements.</p>
                            <p>Now, if I were a Lisp expert I would dive into an example of its power at this point. But I'm afraid I am just at the beginning of my journey towards <a>Lisp Enlightenment</a>. I have just purchased <a>The Little Schemer</a>, I am almost finished my first attempt at <a>Practical Common Lisp</a> and I have read the first few chapters of <a>On Lisp</a>. So I have a long way to go, and time permitting I will try to record some of my learning experiences here.</p>
                    </div>
                </div>
            </div>
        );
    }
}
