const blogPosts = [
    {
        title: 'What is Javascript?',
        author: 'John Doe',
        publishDate: 'Dec 23, 2022',
        content: 'some post content here'
    },

    {
        title: 'How do Arrays work?',
        author: 'Jane Doe',
        publishDate: 'Dec 24, 2022',
        content: 'some post content here'
    },

    {
        title: 'How long does it take to learn coding?',
        author: 'Christian Doe',
        publishDate: 'Dec 25, 2022',
        content: 'some post content here'
    }

]

for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;
    // adding a break to the end of each post
    const postBreak = '------------------------';

    // Use these variables to do something with each post
    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
    console.log(postBreak);
}