import First from './assets/first.jpg';
import Second from './assets/second.jpg';

export const PostsList = [
    {
        id: 1,
        title: 'Your First FREE React Blog',
        author: 'Bill',
        date: '11-15-22',
        image:  First,
        type: 'article',
        // IMPORTANT
        // 1 ****
        //  DO NOT ADD TABS TO CONTENT
        // MARKDOWN WILL NOT WORK PROPERLY 
        // 2 ***
        // **** YOU MUST USE `` OR YOU WILL GET AN ERROR 
        content: `
# Your First FREE React Blog

![The San Juan Mountains are beautiful!](${First} "Free Blog image")

This entire page is generated from markdown using <a href="https://www.npmjs.com/package/marked" target="_blank">marked</a>! 

##### Headings
The headings are indicated by the number of '#' you place before the text you want. For example, the heading above this paragraph is an h5, it looks something like '##### Headings'.

##### Images
Images can be tricky. Because this is React, we can not directly link to the image file. For this example, I had to import the image file directly into the PostList.js and then use it in the markdown string for images.
![The San Juan Mountains are beautiful!](${First} "Free Blog image")

##### Code
An interesting thing for markdown is the use of the HTML code tag. This can be done using backticks. 

*But because we are using backticks in this file for the content we can't. The alternative is indentation, using 4 spaces or 1 tab.*
        
    .fancy-css-class {
        color: blue;
        background: grey;
    }

Add some styling to make it stand out.

##### Links
Don't forget about the links! Here's one that goes to the <a href="https://www.markdownguide.org/basic-syntax/#link-best-practices" target="_blank">markdown guide</a> I am using to create this example article!

My favorite way and most simplest way is to create it just like an HTML anchor tag!

##### Lists
Ah yes of course, can't forget about the list tags. If you wanted to make a list article or just make steps in it. Here's an example.
1. First
2. Second
3. Third

And even unordered lists using '*' or '-'.
* First
* Second
* Third

##### Styling Your Markdown
Styling is very easy. You can style is with css selectors for the HTML elements you created. If you wanted to make different types of articles, add a 'type' to the PostList.js post objects. Then use the type as a className or id to your content container and style it accordingly.

    return (
        <StyledPost 
            id={'$ {post.type}'}
            dangerouslySetInnerHTML={{
                __html: marked(post.content),
            }}
        >
        </StyledPost>
    )

*Note: I had to space out the 'id=$ {data.type}' for this example so I wouldn't get an error in the JS file.*

But now we can give it a specific set of styles we want for each article type! Fancy isn't it?!

##### Conclusion
I won't go over all the examples in an example article. You can find them <a href="https://www.markdownguide.org/basic-syntax" target="_blank">here</a>. 
`,
    }, 
    {
        id: 2,
        title: 'Your Second FREE React Blog',
        author: 'Bill',
        date: '11-15-22',
        image: Second,
        type: 'list',
        content: `
# Your First FREE React Blog

![The San Juan Mountains are beautiful!](${First} "Free Blog image")

This entire page is generated from markdown using <a href="https://www.npmjs.com/package/marked" target="_blank">marked</a>! 

##### Headings
The headings are indicated by the number of '#' you place before the text you want. For example, the heading above this paragraph is an h5, it looks something like '##### Headings'.

##### Images
Images can be tricky. Because this is React, we can not directly link to the image file. For this example, I had to import the image file directly into the PostList.js and then use it in the markdown string for images.
![The San Juan Mountains are beautiful!](${First} "Free Blog image")

##### Code
An interesting thing for markdown is the use of the HTML code tag. This can be done using backticks. 

*But because we are using backticks in this file for the content we can't. The alternative is indentation, using 4 spaces or 1 tab.*
        
    .fancy-css-class {
        color: blue;
        background: grey;
    }

Add some styling to make it stand out.

##### Links
Don't forget about the links! Here's one that goes to the <a href="https://www.markdownguide.org/basic-syntax/#link-best-practices" target="_blank">markdown guide</a> I am using to create this example article!

My favorite way and most simplest way is to create it just like an HTML anchor tag!

##### Lists
Ah yes of course, can't forget about the list tags. If you wanted to make a list article or just make steps in it. Here's an example.
1. First
2. Second
3. Third

And even unordered lists using '*' or '-'.
* First
* Second
* Third

##### Styling Your Markdown
Styling is very easy. You can style is with css selectors for the HTML elements you created. If you wanted to make different types of articles, add a 'type' to the PostList.js post objects. Then use the type as a className or id to your content container and style it accordingly.

    return (
        <StyledPost 
            id={'$ {post.type}'}
            dangerouslySetInnerHTML={{
                __html: marked(post.content),
            }}
        >
        </StyledPost>
    )

*Note: I had to space out the 'id=$ {data.type}' for this example so I wouldn't get an error in the JS file.*

But now we can give it a specific set of styles we want for each article type! Fancy isn't it?!

##### Conclusion
I won't go over all the examples in an example article. You can find them <a href="https://www.markdownguide.org/basic-syntax" target="_blank">here</a>. 
`,
    }, 
    {
        id: 3,
        title: 'Your Third FREE React Blog',
        author: 'Jerome',
        date: '11-15-22',
        image:  First,
        type: 'list',
        content: `
# Your First FREE React Blog

![The San Juan Mountains are beautiful!](${First} "Free Blog image")

This entire page is generated from markdown using <a href="https://www.npmjs.com/package/marked" target="_blank">marked</a>! 

##### Headings
The headings are indicated by the number of '#' you place before the text you want. For example, the heading above this paragraph is an h5, it looks something like '##### Headings'.

##### Images
Images can be tricky. Because this is React, we can not directly link to the image file. For this example, I had to import the image file directly into the PostList.js and then use it in the markdown string for images.
![The San Juan Mountains are beautiful!](${First} "Free Blog image")

##### Code
An interesting thing for markdown is the use of the HTML code tag. This can be done using backticks. 

*But because we are using backticks in this file for the content we can't. The alternative is indentation, using 4 spaces or 1 tab.*
        
    .fancy-css-class {
        color: blue;
        background: grey;
    }

Add some styling to make it stand out.

##### Links
Don't forget about the links! Here's one that goes to the <a href="https://www.markdownguide.org/basic-syntax/#link-best-practices" target="_blank">markdown guide</a> I am using to create this example article!

My favorite way and most simplest way is to create it just like an HTML anchor tag!

##### Lists
Ah yes of course, can't forget about the list tags. If you wanted to make a list article or just make steps in it. Here's an example.
1. First
2. Second
3. Third

And even unordered lists using '*' or '-'.
* First
* Second
* Third

##### Styling Your Markdown
Styling is very easy. You can style is with css selectors for the HTML elements you created. If you wanted to make different types of articles, add a 'type' to the PostList.js post objects. Then use the type as a className or id to your content container and style it accordingly.

    return (
        <StyledPost 
            id={'$ {post.type}'}
            dangerouslySetInnerHTML={{
                __html: marked(post.content),
            }}
        >
        </StyledPost>
    )

*Note: I had to space out and use quotes on the 'id={'$ {data.type}'}' for this example so I wouldn't get an error in the JS file.*

But now we can give it a specific set of styles we want for each article type! Fancy isn't it?!

##### Conclusion
I won't go over all the examples in an example article. You can find them <a href="https://www.markdownguide.org/basic-syntax" target="_blank">here</a>. 
`,
    },
]