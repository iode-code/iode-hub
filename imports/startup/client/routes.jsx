import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import WelcomePage from '../../ui/pages/WelcomePage.jsx';
import AboutPage from '../../ui/pages/AboutPage.jsx';
import BlogPage from '../../ui/pages/BlogPage.jsx';
import BlogDetailPage from '../../ui/pages/BlogDetailPage.jsx';
import ClosuresBlogDetailPage from '../../ui/pages/ClosuresBlogDetailPage.jsx';
import BottomUpBlogDetailPage from '../../ui/pages/BottomUpBlogDetailPage.jsx';

FlowRouter.route('/', {
    name: 'welcomePage',
    action() {
        mount(WelcomePage, {
            main: () => <WelcomePage/>
        });
    },
});

FlowRouter.route('/about', {
    name: 'aboutPage',
    action() {
        mount(AboutPage, {
            main: () => <AboutPage/>
        });
    },
});

FlowRouter.route('/blog', {
    name: 'blogPage',
    action() {
        mount(BlogPage, {
            main: () => <BlogPage/>
        });
    }
});

//Just an example post - this will be dynamic eventually!
FlowRouter.route('/post/coding-is-fun', {
    name: 'blogDetailPage',
    action() {
        mount(BlogDetailPage, {
            main: () => <BlogDetailPage/>
        });
    }
});


//Just an example post - this will be dynamic eventually!
FlowRouter.route('/post/finally-understand-closures', {
    name: 'closuresBlogDetailPage',
    action() {
        mount(ClosuresBlogDetailPage, {
            main: () => <ClosuresBlogDetailPage/>
        });
    }
});


//Just an example post - this will be dynamic eventually!
FlowRouter.route('/post/bottom-up-development', {
    name: 'bottomUpBlogDetailPage',
    action() {
        mount(BottomUpBlogDetailPage, {
            main: () => <BottomUpBlogDetailPage/>
        });
    }
});
