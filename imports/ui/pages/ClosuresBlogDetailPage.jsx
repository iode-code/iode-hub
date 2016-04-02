import React from 'react';

import EmbeddedGist from '../components/EmbeddedGist';

export default class BlogDetailPage extends React.Component {
    render() {
        return (
            <div>
                <div className="blogDetailPage">
                    <header>
                        <a href="/blog"><img style={{width:'100px', padding:'10px', marginTop:'30px', marginLeft:'200px'}} src="/images/iode-logo.png" alt="iode software"/></a>
                    </header>
                    <div className="blogContent">
                        <h1 className="title">I Finally Understand Closures!</h1>
                        <h2 className="subTitle">Paul Drummond - 1st April 2016</h2>

                        <p style={{padding:'50px'}}><i>Re-post - originally posted 15th July 2008 <a href="https://www.reddit.com/comments/6rx18/i_finally_understand_closures">here</a>. Bear in mind, this was a time when I was heavily into Java and OOP was everywhere.  At that time Closures felt mysterious to me and it took me a while to figure out why I would ever need to use one!</i></p>

                        <p>I have been trying to understand closures off-and-on for what seems like forever now. Last night however, while hacking around in the Clojure REPL I finally groked it!
                            To really understand closures you need to come up with a scenario where you would use one (and this is easier to do in languages like Clojure where functions - rather than classes - are used everywhere). </p>

                        <p>The scenario is this: We are writing a simple extension for a text editor (Imagine Emacs with Clojure as its extension language - wow, what a great idea!). We want to add a function that allows users to highlight a range of text and copy it to the clipboard (strangely, our amazing text editor doesn’t do this for us!). When the user presses ALT+b the location of the cursor is remembered and then the user can continue to edit as normal and navigate around the text. When ALT+e is pressed, the text from the start position to the current position is copied from the text buffer and passed into the clipboard.
                            Note all code in this entry is inconsistent pseudo code except where a language preference is explicitly stated - I introduce and change the syntax of the pseudo code as I go to suite the particular example.
                            Our imaginary text editor includes library functions that allow us to associate functions with key presses like this:</p>
                        <code>
                            key_bind('ALT+b' highlight_text_function)
                        </code>

                        <p>Think for a minute…. How would you implement highlight_text_function?</p>
                        <p>The immediate problem is the need to maintain state somewhere. When ALT+b is pressed we need to remember the cursor position, then when ALT+e is pressed we do all the work. So we need more than one function, right? And we need to place the state somewhere.
                            So what are our options? Well, we can use a global variable:</p>

                        <code>
                            int start_position_global;<br/>
                            key_bind('ALT+b' begin_highlight_text_function)<br/>
                            key_bind('ALT+e' end_highlight_text_function)<br/>
                        </code>
                        <p>then begin_highlight_text_function would just set the global variable and end_highlight_text_function would use it and do the rest of the work.
                            Alternatively, using an object-oriented approach we could create a class:</p>
                        <EmbeddedGist gist="pdrummond/ad7f53c9a0081c4824a1f38e95b8ad9d"/>
                        <p>This is very similar to the first example especially for languages such as Python where global variables are not really global - they are scoped at the module level.
                            There is another option of course - use a closure!</p>
                        <p>Before explaining what closures are I want us to back track a little. At the start we had this:</p>
                        <code>key_bind('ALT+b' highlight_text_function)</code>
                        <p>Simple. A key-press is associated with a function. Very quickly we ended up with two independent functions not because it’s logical to have two functions but because we needed to come up with a way of handling state. Logically, there should be a single function, right? Put another way - the functionality of the operation to be performed is a single function. Let’s describe what the function should do:</p>
                        <ul>
                            <li>First we get the current cursor position and name it begin_pos.</li>
                            <li>Then we want to bind the ALT+e key to another function called end_highlight_text_function</li>
                            <li>When ALT+e is pressed we need to:</li>
                            <ul><li>Get the current cursor position and name it end_pos.</li>
                            <li>Extract the text between start_pos and end_pos and name it highlighted_text</li>
                            <li>Send the highlighted text to the clipboard using some built-in function.</li>
                        </ul>
                    </ul>
                    <p>Let’s now write the steps described above in Python:</p>
                    <EmbeddedGist gist="pdrummond/2ba343b68cd3cbe72f658d83f2bb1cfd"/>
                    <p>Can you see what is happening here? We still have two functions but one is defined within the other as a nested function. But there’s more to it than that! Without support for closures in the language this function would not work. Can you see why?
                        To explain what the function does, start_pos is created when we call highlight_text_function. When end_highlight_text_function is called start_pos is used because end_highlight_text_function is a closure. When end_highlight_text_function is created, it uses start_pos from the enclosing scope so Python wraps the function into an object called a closure which contains the state of start_pos.
                        So a closure is a neat way of adding state to a function without caring about “classes or objects” - you can think in terms of functions without getting bogged down in the details.</p>
                    <p>Finally, here is a Clojure version that does the same thing as the Python version but it uses an anonymous function for the closure:</p>
                    <EmbeddedGist gist="pdrummond/957b91dd9e71f684f072003960305a46"/>
                    <p>By the way, Clojure is an excellent language and I recommend you check it out. It is functional, has persistent data structures, Python-style literal collection syntax, support for concurrency, and hosted on the JVM - the list goes on!</p>
                    </div>
                </div>
            </div>
        );
    }
}
