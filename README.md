# Morada Hotel NFT Project

Morada NFT is a landing page for purchasing functional NFTs offered by a hotel. "Functional" in this context refers to NFTs that hold real value or utility. Apart from receiving special benefits, free stays, surprises, VIP services, and more, clients will be at the forefront of the most advanced technology available for membership management and ticket issuance. Users become part of the hotel by holding an NFT, which is 100% tradable and valid for lifetime use.

The static website is built on `HTML`, `CSS`, and subtle features using `Javascript`. It is fully responsive, structured, and organized.

As evident from all the information provided in this Readme.md, the state of this released product should be considered as an `MVP` for the main features.

Please note that this project is not available for public deployment; **it is intended solely for learning and demonstration purposes** even though is ready for use.

**Preview Link:** [Morada Hotel](https://plexoio.github.io/morada/index.htm)


## Index <a name="index"></a>

1. [Strategy Plane - Reason, Solution and Value](#strategy-plane)
2. [Scope Plane - Feature and Capability](#scope-plane)
3. [Structure Plane - Content, Priority and Organization](#structure-plane)
4. [Skeleton Plane - Layout, Interaction and Relationship](#skeleton-plane)
5. [Surface Plane - Color, Typography, Effect and Images](#surface-plane)
6. [Technologies used](#technologies)
7. [Testing Results](#testing)
8. [Development Process](#development)
9. [Deployment Process](#deployment)
10. [Graphic sources](#graphics)
11. [Credits](#credits)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Responsive Mockup image](https://github.com/plexoio/morada/blob/main/documentation/assets/img/responsive-mockup.png)

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
| Low leading rates<br>& Non-functional | - CTA offer<br>- Marketplace<br>- Metamask Login | Long-term Investment<br>& Future Implementation |




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

- We used #9b59b6 as the main color, along with #ffffff, #460462, #000, #9c59b685, #9c59b61e, and other variations of the main color.

### Layout

- For the NFTs display, we used a grid layout with a maximum of three images displayed inline on big screens, and one image on small devices. 

- For the educational parts on the main page, we followed an alternation from right to left and kept the law of thirds for the section at hand and content display. 

- For the Marketplace and Learn sections, we used the same layout, lists and sublists, as seen from the Skeleton.

### Fonts

- We used Roboto for all fonts until specified otherwise. 

- We used Bitter for some subtitles.

- We used Tangerine for Morada title and mottos.

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