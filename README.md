# Morada Hotel NFT Project

Morada NFT is a landing page for purchasing functional NFTs offered by a hotel. "Functional" in this context refers to NFTs that hold real value or utility. Apart from receiving special benefits, free stays, surprises, VIP services, and more, clients will be at the forefront of the most advanced technology available for membership management and ticket issuance. Users become part of the hotel by holding an NFT, which is 100% tradable and valid for lifetime use.

The static website is built on `HTML`, `CSS`, and subtle features using `Javascript`. It is fully responsive, structured, and organized.

As evident from all the information provided in this Readme.md, the state of this released product should be considered as an `MVP` for the main features.

Please note that this project is not available for public deployment; **it is intended solely for learning and demonstration purposes** even though is ready for use.

![Responsive Mockup image](https://github.com/plexoio/morada/blob/main/documentation/assets/img/responsive-mockup.png)

**Preview Link:** [Morada Hotel](https://plexoio.github.io/morada/index.htm)


## Index <a name="index"></a>

1. [Strategy Plane - Reason, Solution and Value](#strategy-plane)
2. [Scope Plane - Feature and Capability](#scope-plane)
3. [Structure Plane - Content, Priority and Organization](#structure-plane)
4. [Skeleton Plane - Layout, Interaction and Relationship](#skeleton-plane)
5. [Surface Plane - Color, Typography, Effect and Images](#surface-plane)
6. [Technologies Used](#technologies)
7. [Actual Features Explained](#features)
8. [Future Features Explained](#f-features)
9. [Bugs & Testing Results](#testing)
10. [Development Process](#development)
11. [Deployment Process](#deployment)
12. [Credits](#credits)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Strategy Plane <a name="strategy-plane"></a> | [#](#index)
This leading hotel embraces innovative technology to differentiate from competitors, appealing to `clients` who value progressive advancements. Hotel membership is seen as a substantial investment for stakeholders and regular clients, comparable to an exclusive, generational club.

To securely preserve membership data, the hotel employs blockchain technology on the Polygon Network, reducing paperwork, costs, and environmental impact while efficiently verifying memberships.

Morada's balanced philosophy combines stoicism and hedonism for a well-rounded life experience. By adopting NFTs on the Polygon Network, the hotel effectively manages memberships, allows interoperability with partner services, and streamlines identity verification for `clients`.

The `Morada Platform` aims to present these variety of innovative ideas and useful tools to its users, clients, and stakeholders.

These insights stem from comprehensive research, as evidenced by the accompanying table and graphic.

### Research

<br>

| Goals               | Relevancy (0-5) | Viability (0-5) | N. Items (0-~) |
|:-------------------:|:---------------:|:---------------:|:-------------:|
| Landing page        | 5               | 5               |               |
| NFT showcase        | 5               | 2               |               |
| Marketplace         | 5               | 1               |               |
| Metamask Login      | 5               | 2               |               |
| Learn section       | 4               | 3               |               |
| Contact Section     | 5               | 5               |               |
| CTA of current offers | 4             | 3               |               |
| N. Items            |                 |                 | 7             |
| Max. Points         |                 |                 | 35            |
| Results             | 33              | 21              |               |
| Percentage          | 94.28% <br> (Strategy)| 60% <br> (Scope)     |               |

<br>

### Research Graphic

![Table Graphic](https://github.com/plexoio/morada/blob/main/documentation/assets/img/strategy.png)

The results show that the points we selected for our 'Relevancy' group are integrated with the most important points for the project itself, with the `Learn` and `CTA Offers` points having a slight difference of `4` to `5` compared to the highest point.

In terms of viability, things started getting serious enough for us to see what we can really accomplish within the given time frame `3 weeks`, with the technologies in use and the resources available. Among the 7 points, only 2 points scored a perfect `5` out of `5`, with `Learn` scoring the highest after the ones already mentioned, at `3`.

Taking into account the other points for `Viability`, we arrive at a percentage that represents our possible contribution to this idea based on factors such as time, technology, and resources. From a different perspective, this tells us that we can complete at least 60% of this project, with the other 40% requiring possibly greater investments in time and human resources.

Based on these percentages, I have written a `Strategy` for `Relevancy` and a `Scope` for `Viability`, as these results can help us understand our overall `Strategy` and the upcoming `Scope` planning, since they are all interrelated.

With this information, we can now move on to the next stage, which is `Scope`.

## Scope Plane <a name="scope-plane"></a> | [#](#index)

Based on the importance of each functionality and feature, as well as the time frame, technology, and resources, we have decided to focus on what's most important for this iteration. This will enable us to get the best out of it and maintain a high trade-off environment, while delivering an MVP that maintains perceived value, a sense of surprise, and long-term engagement.

For this iteration, we decided to include features and functionalities under the following conditions and goals:


|     Condition      |             Iteration              |            Goals             |
|:------------------:|:----------------------------------:|:----------------------------:|
|    Limited use     |   - index.htm<br>- contact.html<br>- learn.html   |    Culture acquisition       |
|   Simple design    |   - Metamask Login<br>- NFT showcase   |        Tech Showcase         |
| Low leading rates<br>& Non-functional | - CTA offer<br>- Marketplace<br>- Metamask Login<br>- NFT showcase | Long-term Investment<br>& Future Implementation |




As we can see, the most achievable ones are the first three points on our list. We'll design the starting points of those tagged as `future implementation` for the sake of clarity, user experience, and to convey our message properly.

Each priority section will take a Sprint of 2 to 3 days of development. Initial design of future implementation should not take more than 1 day.

Users and stakeholders want the hotel to demonstrate that they are at the forefront of the latest technologies. They want to use blockchain but don't know precisely how, and we have presented the idea of NFTs or tokenization of memberships, which they love. They want an introduction and more information about the project.

The Polygon Network solves most of our long-term challenges as well:

- Paperwork
- Tracking
- Payment methods
- Interoperability
- User-friendly applications
- Utilities and services

We have analyzed important factors at each step of our research for Useful, Sellable, Buildable: Objective, Functional, Non-functional, Business rules. As seen from our `User Story` table:

**Note:** In this context, "subject" refers to a user, prospect, or stakeholder.

### User Story

| Scenario                                                               | Solution                                                                                        |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| Subject wants more information about Morada NFT project                | Subject found the landing page of the project                                                   |
| Subject wants to see how the NFTs will be displayed                    | Subject can see from the homepage 3 categories: Basic, Expert and Premium. Inside each category, 3 NFTs |
| Subject wants to learn more about Blockchain and how NFTs will work    | Subject realized there are 2 educational sections on the homepage and a special educational section called Learn at the navbar |
| Subject wants to try the process of buying a NFT                      | Subject discovered that first they need to log in with Metamask and simply click on Claim at the home page or on the future Marketplace |
| Subject has questions and would like to more directly speak with an agent from the hotel | Subject found a friendly contact page for that                                                |


In this way we have aligned our `Scope` based on the results of our research on the `Strategy` plane. The intention of a MVP iteration is evident at this point. This will help us in consecuense build the foundations of our next plane, `Structure`.

## Structure Plane <a name="structure-plane"></a> | [#](#index)

Our initial version of Morada NFT is straightforward for users, but as we add more features, the site's complexity will increase, and it will be considered of medium difficulty due to its connection to blockchain and the underlying processes.

In this iteration, as shown in the following mind map, the site is intuitive, and users can easily navigate to where they need to go and understand what actions to take. The relationships between pages are clear, and one page leads to another. Users can sense the current functionality and enjoy interactivity due to various state changes. We have considered consistency, predictability, learnability, visibility, and feedback to ensure a good user experience.

Please refer to the following mind map for more details on the Interactive Experience Design (IXD) for our Morada Project.

![IXD Mindmap](https://github.com/plexoio/morada/blob/main/documentation/assets/img/IXD.png)

Placing the right keywords, data, and content in the appropriate sections and subsections is crucial to ensure proper navigation and organization. This approach allows us to convey value and serve the final purpose of the underlying feature. We also use lists and nested lists to present information effectively. By referring to the first mind map, which represents the interactive part, we can see how information will be placed and how it will serve its purpose in conjunction with the interactive design.

Please refer to the following mind map for more details on the Information Architecture Design (IAD) for our Morada Project.

![IXD Mindmap](https://github.com/plexoio/morada/blob/main/documentation/assets/img/IAD.png)

The IXD and IAD mind maps have provided a clear direction for the skeleton plane. We now understand what needs to be done and how to achieve our goals. It's time to move on to the next phase: the `Skeleton plane`.

## Skeleton Plane <a name="skeleton-plane"></a> | [#](#index)

In this plane, we can now focus on gathering all the pieces we've developed so far and putting them together to follow the chain of our design process. Our approach has been to use the Strategy, Scope, and Structure planes to create the Skeleton plane. Here, we can finally see how users will interact with our design and the first outcomes of our hard work.

Our goal is to bring the functionalities we've proposed and studied to life. The skeleton allows us to see how the elements, features, and information can interact with each other. For this project, we've chosen to use Adobe XD, which the author is experienced with. This software provides a more comprehensive wireframe for us to work with.

![Gif of the Skeleton Prototype](https://github.com/plexoio/morada/blob/main/documentation/assets/img/gif-skeleton.gif)

With our prototype, we can see our planned navigation, priorities, progression from simple to more complex, and the first learning experience. We can also see the progressive disclosure through each interaction. This is all achieved without having to start coding the actual product.

Our prototype showcases how the content can be presented to users by following habits, standards, and conventions that most users desire. We've paid attention to keywords, invisible information, hierarchies, and content in lists and forms. All of this can be seen in our `desktop-based prototype`.

The layout we've created is simple, intuitive, and repetitive. With the completion of the Skeleton plane, we now have a perspective on the colors and shapes that we will use for our final plane, the `Surface`.

- Prototype on [Adobe XD](https://xd.adobe.com/view/0352a1bc-b277-452d-8631-fd933ce523b2-5601/?fullscreen) (full-screen)

- [Download PDF](https://github.com/plexoio/morada/blob/main/documentation/assets/pdf/pdf-skeleton.pdf)

Our next station, the `Surface plane`.

## Surface Plane <a name="surface-plane"></a> | [#](#index)

We did a lot of research, thinking, brainstorming, and discussions. We even created a desktop-based prototype, as seen above. However, we never fully knew until we started playing in the field, where the experience was different. It was time to start coding and bring our ideas to life. **Approach:**

Before we started coding and investing resources and time, we needed to clarify our approach for the surface plane. We wanted to ensure that our product brought a positive visual language and context to the users. Efficiency was what we were looking for, and the following details were crucial for the building process:

### Color

|         | Color Type       | Color Name             | Hex Code |
| ------- | ---------------- | ---------------------- | -------- |
| ![Color](https://via.placeholder.com/50x50/9b59b6/9b59b6?text=+) | Primary Color    | Shade of purple        | `#9b59b6` |
| ![Color](https://via.placeholder.com/50x50/ffffff/ffffff?text=+) | Secondary Color  | White                  | `#ffffff` |
| ![Color](https://via.placeholder.com/50x50/460462/460462?text=+) | Secondary Color  | Shade of dark purple   | `#460462` |
| ![Color](https://via.placeholder.com/50x50/000000/000000?text=+) | Secondary Color  | Black                  | `#000000` |
| ![Color](https://via.placeholder.com/50x50/9c59b685/9c59b685?text=+) | Secondary Color  | Shade of light purple  | `#9c59b685` |
| ![Color](https://via.placeholder.com/50x50/9c59b61e/9c59b61e?text=+) | Secondary Color  | Shade of lighter purple| `#9c59b61e` |

#### Pallet

The following color palette was used as a reference throughout the project:

- [My Color Space](https://mycolor.space/?hex=%239B59B6&sub=1)


### Layout

- For the NFTs display, we used a grid layout with a maximum of three images displayed inline on big screens, and one image on small devices. 

- For the educational parts on the main page, we followed an alternation from right to left and kept the law of thirds for the section at hand and content display. 

- For the Marketplace and Learn sections, we used the same layout, lists, and sublists as seen from the Skeleton.

### Fonts

- We used `Roboto` for all fonts until specified otherwise. 

- We used `Bitter` for some subtitles.

- We used `Tangerine` for Morada's title and mottos.

### Images

- We kept the law of thirds based on the Viewport Width. 

- We used non-copyrighted resources when using vendor resources, and the images had to match the website's spirit.

### Order

- We prioritized the elements as already described throughout the different planes. 

- The way lists were displayed on the Marketplace and Learn sections was consistent. 

- For the Contact section, we used the left contact form and the right side the about section with social media buttons.

### Sequences

- We kept in mind that for the homepage, 'One row of NFTs, one row of Educational content' was repeated a maximum of three times. 

- For Marketplace and Learn, we displayed the related video first, followed by the details lists with the answers they were looking for, keeping progressive disclosure.

For each section and interaction, economy had to be taken into account, with the most important elements easily recognized. We had already noticed many patterns throughout the product layouts and interactions. It was readable, with colors creating good contrasts always, and different fonts were added when necessary.

We decided to arrange the content like this because users wanted to see the NFTs at first, they also wanted to learn and understand what was coming and how they could take action at the right time. We were sure that we smelled value here.

**We had to be careful of the following concerns:**

- Repetition

- Contrast

- Proximity

- Alignment

We focused on keeping things simple as possible, presenting fewer choices to the users while presenting concrete features and content.

After considering all these last details, we could polish our ideas from the skeleton and could start coding. We noticed how the coding process went smoothly, less complicated and more enjoyable. Therefore, less money was needed, less human work and fewer errors to finalize nobly this product. It was time to start coding.

## Technologies Used <a name="technologies"></a> | [#](#index)

Every project requires standardized processes and a variety of essential tools.

From the beginning to the end, we used the following technologies:

### Coding
- **Visual Studio Code**: For the coding process, along with internal extensions such as auto-save, boilerplates, markdown and HTML preview, W3C validation, and more.
- **Adobe XD**: For creating wireframes.
- **[W3C HTML Validator](https://validator.w3.org/)**: For validating all .html pages.
- **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**: For validating all .css files.
- **HTML5**: For structuring the site.
- **CSS3**: For styling the site.
- **JavaScript**: For adding Metamask login functionality.
- **Google Developer Tools**: For testing and improving CSS and HTML.
- **GitHub**: For repositories and version control.
- **Git Bash**: For version control and project management.
- **Gitpod**: For learning about Git Bash, Visual Studio Code, and GitHub.
- **[Code Institute](https://codeinstitute.net/)**: As a source of knowledge and information to build the entire project.

### Fonts, Graphics and formatting
- **Google Fonts**: For adding personality to the site.
- **[Unstoppable Domains](https://unstoppabledomains.com/?ref=a28abc13737a4e8)**: For the morada.nft Web3 domain (found in the footer).
- **[My Color Space](https://mycolor.space/)**: For the project's color palette.
- **[Flat UI Colors](https://flatuicolors.com/)**: For the primary color of the project.
- **[Am I Responsive?](https://ui.dev/amiresponsive)**: For the initial mockup in various screen sizes.
- **[Lunapic](https://www2.lunapic.com/editor/?action=changecolor)**: For changing specific colors in the logo.

- **Powerpoint**: for the table graphics on the Strategy Plane.

- **Gitmind**: for the Mind map creation.

- **[Ezgif](https://ezgif.com/video-to-gif)**: for converting MP4 to Gif.

- **[Freeconvert](https://www.freeconvert.com/gif-compressor)**: for compressing GIF images.
- **[Tinypng](https://tinypng.com/)**: for compressing .png and .jpg images.

### Artificial Intelligence (AI)
- **[ChatGPT-4](https://chat.openai.com/chat)**: For consulting, copywriting, proofreading, drudgery or assistance with various tedious tasks.
- **[DeepAI](https://deepai.org/)**: For creating the NFTs.

## Actual Features Explained<a name="features"></a> | [#](#index)

The strategy plan gave us perspective on what we could do based on current deadlines and resources. We created a very particular MVP that showcases what a hotel is planning to offer its clients. As it is well-known, it's more expensive to look for new clients than to keep old ones. Morada NFT is designed for both new and old clients, but with a focus on the latter.

The following features are a must for our MVP:

### Index.html

#### Header
At the header, we have located the branding logo on the left side of the screen following the current convention. At the same time, it is clickable and will take you back to the homepage when clicked from a different page, and a refreshing button when located on the index.html. In the center, we find our navbar, easy to find, not overloaded, and practical. It also includes a very important future feature: Metamask login.

It uses a background of the project's primary color and hover properties and values have been applied on each anchor element, including the Metamask login. They can all be considered CTA buttons as well.

![header](https://github.com/plexoio/morada/blob/main/documentation/assets/img/header.png)

#### Branding Title

We can find the branding title under the header of the index.html. It tells the users where they are, who is presenting this project, and at the same time provides personality and more identity to the site.

![branding](https://github.com/plexoio/morada/blob/main/documentation/assets/img/branding-title.png)

#### Hero Section

The hero section comes right after the branding title as expected. Its location surprises users with the hotel hero image. Not being enough, it holds the hotel's motto found on almost every corner of our establishments: 'Always beyond your expectations'. Now that we've got the user's attention, what do we do with it? Right! We need some CTA buttons. They are concrete and useful. One takes you to the marketplace.html, and the other takes you to the learning page or learn.html.

![hero](https://github.com/plexoio/morada/blob/main/documentation/assets/img/hero-section.png)

#### NFTs display

So far, we have our great web application working properly, but something is still missing in the user's mind. The users want to see more. Therefore, we have added 3 rows of NFTs display. One row at the top showcases the Basic membership, the second Expert, and the last one the Premium one.

We took our time to add hovering effects to each NFT. Once it is hovered, information related to the particular type of NFT or membership will be shown. Once again, we got the user engaged, so we had to do something about it. We added a CTA to purchase the NFT right away. We believe in the 3 steps rule. It has as well the primary color of the project on its descriptive header.

![nft](https://github.com/plexoio/morada/blob/main/documentation/assets/img/nft-display.png)

#### Educational row

We are still on the same page, index.html. Under each row of NFTs display, we are placing an educational section, which is part of our cultural acquisition program. Therefore, you will see only 2 educational rows on the homepage. We could add more, but more does not really mean better. It has as well the primary color of the project on its descriptive header.

![educational-row](https://github.com/plexoio/morada/blob/main/documentation/assets/img/educational-main.png)


#### Footer

At the final part of the index.html, we have our Footer. This footer is a bit different from the other pages; it has CTAs to social media. Users can also find them on the contact.html page. It also features the primary color of the project.

![footer](https://github.com/plexoio/morada/blob/main/documentation/assets/img/footer.png)

### Marketplace.html

We are now on our next page following the navbar order. Here, although not complete (for future implementation), we find the Marketplace of Morada Hotel. Users can learn how it will work, and questions are being answered on the detailed lists of progressive disclosure. Let's discuss each point or number seen in the image below:

![marketplace page](https://github.com/plexoio/morada/blob/main/documentation/assets/img/marketplace.png)

#### 1 Header
Same header as seen on the index.html or home page with the same functionalities. We believe in consistency and meaning.

#### 2 Page Title
It tells the users clearly where they are and what they are supposed to do. The title is clickable as well, and it refreshes the current page. It does not take users back to the homepage.

#### 3 Info Section
Here, users can find answers to their questions after watching a video presentation. It holds a detailed list, and once clicked, the answer appears. It also has a hover property for better interaction.

#### 4 Iframe Video
The video is showing and teaching users how to use a digital marketplace, especially those related to NFTs or blockchain.

#### 5 Detailed List
This section shows the main questions, and once clicked, they reveal the information that the user needs. We strongly believe in progressive disclosure.

#### 6 Footer
Here, we find our second type of footer, which will be seen everywhere except on the homepage. It is simple, follows the standards, and tells the users that they have reached the end of the page.

### Learn.html
We have now reached the leaning section, where users enter and leave having learned something.  We believe that the Blockchain technology requires pushing from the commercial side to achieve a massive implementation. We want to educate our users so that they take reasoned choices.

The formating of this page is just the same as the previous one but with different content providing consistency and familiarity to the user's mind:

![learn page](https://github.com/plexoio/morada/blob/main/documentation/assets/img/learn.png)
#### 1 Header
Same header as seen on the index.html or home page with the same functionalities. We believe in consistency and meaning.

#### 2 Page Title
It tells the users clearly where they are and what they are supposed to do. The title is clickable as well, and it refreshes the current page. It does not take users back to the homepage.

#### 3 Info Section
Here, users can find answers to their questions after watching a video presentation. It holds a detailed list, and once clicked, the answer appears. It also has a hover property for better interaction.

#### 4 Iframe Video
The video is showing and teaching users about Blockchain technology, featuring Gary Gensler at MIT teaching about Blockchain and Money. It is one of the best free courses out there.

#### 5 Detailed List
This section shows the main questions, and once clicked, they reveal the information that the user needs. We strongly believe in progressive disclosure.

#### 6 Footer
Here, we find our second type of footer, which will be seen everywhere except on the homepage. It is simple, follows the standards, and tells the users that they have reached the end of the page.

### Contact.html

The final place of this journey is the contact section. Some users may go straight to it once on the site, while others may visit it at the end of their trip through the site. Here, we have a contact form and an about section, plus social media CTA buttons.

![contact page](https://github.com/plexoio/morada/blob/main/documentation/assets/img/contact.png)

#### 1 Header
Same header as seen on the index.html or home page with the same functionalities. We believe in consistency and meaning.

#### 2 Page Title
It tells the users clearly where they are and what they are supposed to do. The title is clickable as well, and it refreshes the current page. It does not take users back to the homepage.

#### 3 Contact Section
A form requesting users' important data to process their inquiries effectively. A data consent checkbox has been considered. They can neatly place their inquiry on the textarea section. Users can reset the form or submit it easily without having issues differentiating between the two.

#### 4 Aside Section
Having a form is not enough; we need to make the users feel safe. Therefore, we have added an About section on the same page, laying at the right side of the contact form. Users can reach us on social media from there as well.

#### 5 Iframe Google Maps
We want to help users as much as we can, so we decided to help them visualize us in the real world, allowing them to locate our headquarters. We are 100% reachable to them. Transparency, security, and care are always present.

#### 6 Footer
Here, we find our second type of footer, which will be seen everywhere except on the homepage. It is simple, follows the standards, and tells the users that they have reached the end of the page.

## Future Features Explained<a name="f-features"></a> | [#](#index)

As mentioned before, this is our MVP. Future features will naturally be added to make it more functional and dynamic. Now, let's take a look at the features that can be added, how and where they can be implemented.

### CTA Offer Section
This can be added anywhere on the site. It is an idea to make a section that appears sometimes inviting users to purchase NFTs or offering discounts. This is key to increasing sales.

### Metamask Login
This one is more tricky. Although the current button is partially working, it is not connecting anywhere. Once the Marketplace is created, it will be connected to it to finally allow users to make purchases on the site. It is more complex than we think; Morada Hotel needs to create its own smart contract to tell the blockchain what to do for them.

Implementation is possible following the current logical order we have settled. The page is done, and the path to glory has been created.

### NFT Showcase
We are currently using starting NFTs, which are static and can be seen inside the index.html page. It is a starting point, but it can be improved using backend development to facilitate the display of the NFTs, and why not keep track of how users interact with them.

There is useful commenting on the index.html, the indentation is elegant, and the code workflow is visible. Implementing a more sophisticated NFT showcase would not be a problem. We need to remember the connection with Metamask and the NFT for the CTA button 'Claim' when hovering over the NFT.

### Marketplace
None of this would make sense without hosting our own marketplace. The foundations are here, as seen from marketplace.html. A lot of imperative programming has to be done, and a neat connection of data at rest, data in motion, and data as presented.

We cannot forget the Metamask login relation to the NFTs. This wallet will allow users to make purchases and identify themselves on the site. Relations to all the CTA buttons have to be kept and considered at all times.

Once this is done, the Morada NFT project is unstoppable.

<hr>

## Credits

- sample.jpg: [@jjjordan](https://unsplash.com/@jjjordan)
- hero.jpg: [@naimbic](https://www.pexels.com/@naimbic)
- marketplace.jpg: [@Rodion Kutsaiev](https://unsplash.com/photos/-tgTipG2t_g)
- Apart from relying on Stack Overflow or Google for most of my programming queries, I specifically turned to **ChatGPT** to seek clarification on certain code implementations and clear up any lingering doubts.
- [codeinstitute.net](https://codeinstitute.net/) for the proper education provided, which knowledge is being applied throughout this project.
- Programminghub where I learned the basics before joining Code Institute.

## Authors 

- [@plexoio](https://www.github.com/plexoio) | Frank Arellano