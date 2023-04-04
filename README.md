# Morada NFT - Main Webpage

Morada NFT is a landing page for purchasing functional NFTs offered by a hotel. "Functional" in this context refers to NFTs that hold real value or utility. Apart from receiving special benefits, free stays, surprises, VIP services, and more, clients will be at the forefront of the most advanced technology available for membership management and ticket issuance. Users become part of the hotel by holding an NFT, which is 100% tradable and valid for lifetime use.

The static website is built on `HTML`, `CSS`, and subtle features using `Javascript`. It is fully responsive, structured, and organized.

As evident from all the information provided in this Readme.md, the state of this released product should be considered as an `MVP` for the main features.

Please note that this project is not available for public deployment; **it is intended solely for learning and demonstration purposes** even though is ready for use.

**Preview Link:** [Morada Hotel](https://plexoio.github.io/morada/index.htm)


## Index

1. <a href="#strategy">Strategy - Reason, Solution and Value</a>
2. <a href="#scope">Scope - Feature and Capability</a>
3. <a href="#structure">Structure - Content, Priority and Organization</a>
4. <a href="#skeleton">Skeleton - Layout, Interaction and relationship</a>
5. <a href="#surface">Surface - Color, Typography, Effect and Images</a>
6. <a href="#technologies">Technologies used</a>
7. <a href="#testing">Testing</a>
8. <a href="#development">Development process</a>
9. <a href="#deployment">Deployment</a>
10. <a href="#graphics">Graphic sources</a>
11. <a href="#credits">Credits</a>

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Strategy
A leading hotel has chosen to embrace cutting-edge technology to distinguish itself from competitors. Their clients and stakeholders are typically keen on tracking the franchise's advancements. For many, being a member of this hotel is viewed as a significant investment, akin to joining an exclusive club that is passed down from generation to generation.

The hotel has identified the most efficient technology to securely preserve their membership data indefinitely: blockchain technology on the Polygon Network. This eliminates the need for excess paperwork and unnecessary human intervention. By reducing data processing costs, it offers a greener solution for the environment while efficiently verifying customer memberships.

At Morada, they believe in enjoying life to the fullest. Their philosophy balances stoicism and hedonism, ensuring that they know when to indulge.

As a result, NFTs on the Polygon Network have been chosen as the ideal solution to manage, store, and commercialize memberships. This approach makes them interoperable, allowing clients to access partner services as well. Members can simply hold and connect their digital NFTs to verify their identity whenever necessary.

These findings are the product of thorough research, as demonstrated by the accompanying table and graphic.A leading hotel has chosen to embrace cutting-edge technology to distinguish itself from competitors. Their clients and stakeholders are typically keen on tracking the franchise's advancements. For many, being a member of this hotel is viewed as a significant investment, akin to joining an exclusive club that is passed down from generation to generation.

The hotel has identified the most efficient technology to securely preserve their membership data indefinitely: blockchain technology on the Polygon Network. This eliminates the need for excess paperwork and unnecessary human intervention. By reducing data processing costs, it offers a greener solution for the environment while efficiently verifying customer memberships.

At Morada, they believe in enjoying life to the fullest. Their philosophy balances stoicism and hedonism, ensuring that they know when to indulge.

As a result, NFTs on the Polygon Network have been chosen as the ideal solution to manage, store, and commercialize memberships. This approach makes them interoperable, allowing clients to access partner services as well. Members can simply hold and connect their digital NFTs to verify their identity whenever necessary.

These findings are the product of thorough research, as demonstrated by the accompanying priorities table and graphic of this iteration:
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

![Table Graphic](https://github.com/plexoio/morada/blob/main/assets/img/strategy.png)

<hr>

## What's new?

- General improvements in user experience and interface.

- First Jigsaw W3C testing: all valid, no errors. Badge added to the footer.

- New HTML W3C testing: all valid, no errors.

- Finished contact section and added social media buttons.

- Successfully installed Metamask login using the Web3 JavaScript library.

- Added social media buttons to the `index.html` footer and `contact.html` pages.

- Styled the input elements with a cursor: `pointer`.

Bugs or errors are still expected.


## What's coming?

- Improvements to the user experience of `learn.html`

- Responsiveness

- Accessibility

- Security

- Efficiency (`optimization`)

- Addressing the call-to-action issue (still pending)

I am still building the final code structure. More versions are coming!


## Roadmap

- Create main `index.html`, `learn.html`, `marketplace.html`, `contact.html`, `style.css`, and `nft.css` files

- Organize the web app's structure properly

- Add images or Lottie files and related content for better interpretation

- Add structural files and documents to appropriate folders and subfolders

- Layouts

- Accessibility

- Anchor security: `rel` attribute and values

- W3C testing

- Apply learned content more on DOM selectors, semantics, selectors, CSS implementation, measurements, font, colors, etc.

- Responsiveness

- UE/UI high performance


## Actual Features

- Full-stack boilerplate
- Completely runnable
- Semi-responsive design
- Structured comments in code

## Visual Structure

Intended logical organization of the code

**morada**/

├── index.html

├── marketplace.html

├── learn.html

├── contact.html

├── **assets**/

│ &nbsp;&nbsp;&nbsp;└── css/

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── style.css

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── nft.css

│ &nbsp;&nbsp;&nbsp;└── font/

│    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Bitter/

│    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Lora/

│    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Roboto/

│ &nbsp;&nbsp;&nbsp;└── img/

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── logo.png

│ &nbsp;&nbsp;&nbsp;└── js/

├── **documentation**/

├── **vendor**/

│   └── img/

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── hero.jpg

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── marketplace.jpg

│       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── sample.jpg


## FAQ

#### Is the structure already finished?

Once the entire project has been deployed, the structure section may be considered as complete.

#### Are there issues in it?

Once the entire project has been deployed, we will add a note with all passed tests for security, accessibility, quality, and semantics.

## Credits

- sample.jpg: [@jjjordan](https://unsplash.com/@jjjordan)
- hero.jpg: [@naimbic](https://www.pexels.com/@naimbic)
- marketplace.jpg: [@Rodion Kutsaiev](https://unsplash.com/photos/-tgTipG2t_g)
- Rather than relying on Stack Overflow or Google for all my programming queries, I specifically turned to **ChatGPT** to seek clarification on certain code implementations and clear up any lingering doubts.
- [codeinstitute.net](https://codeinstitute.net/) for the proper education provided, which knowledge is being applied throughout this project.
- Programminghub where I learned the basics before joining Code Institute.

## Authors 

- [@plexoio](https://www.github.com/plexoio) | Frank Arellano
