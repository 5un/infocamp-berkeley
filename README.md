# InfoCamp Site Contributor's Guide

1. Project Overview
2. Getting Started
3. Components
4. Working with content
5. Styling
6. Responsiveness
7. Roadmap
8. Resources

## 1. Project Overview
The InfoCamp 2018 website is developed with a static site generator, [Gatsby](https://github.com/gatsbyjs). To get an idea about how static site generators work, see [Static Site Generator Primer](https://docs.google.com/presentation/d/1QKEdjC5hYK4RzT3KsK5QdAEJQSiXcoCG9q6iiqxAnY8/edit?usp=sharing). 

### Project Files
* Project Tracking Spreadsheet [https://docs.google.com/spreadsheets/d/1FnAji0GVhploTe03fuM1JNmj8ubPLrkB6rTWMUPYDRc/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1FnAji0GVhploTe03fuM1JNmj8ubPLrkB6rTWMUPYDRc/edit?usp=sharing)
* Mobile Design by Michelle [https://invis.io/ZBF7U1F3F](https://invis.io/ZBF7U1F3F)
* Desktop Design by Michelle [https://invis.io/8BF7U0ZA5](https://invis.io/8BF7U0ZA5).
* Styleguide by Michelle [design/Styleguide.pdf](design/Styleguide.pdf)
* Logos (AI + PNG) [design](design)

## 2. Getting Started
The directory structure of the project is as follows.

```
infocamp-berkeley
│   README.md
│   .circleci     # Configuration files for CircleCI Continuous Integration
│   public        # This is where gatsby will build static HTMLs into  
│
└───src
│   └───components  # Place to store sub components
│   └───content     # Contents will be placed here in json files
│   └───layouts     # The layouts file that applies to each page
│   └───pages       # The React components for each pages in the site
│   
└───static        # The place to put static assets such as images, videos, and pdf files
    │   images    # The place to put static images
```

### Develop

To start develop the site, use the following steps
1. Git clone the repository
2. Install gatsby globally with `npm install gatsby -g`
3. At the root directory of the project, install packages with `npm install`
4. Start developing with `gatsby develop`
5. Goto [http://localhost:8000/](http://localhost:8000/) to see the preview

Please push your revisions into the `dev` branch.

### Deployment

The site is deployed on Firebase Hosting at [https://infocampberkeley.firebaseapp.com/](https://infocampberkeley.firebaseapp.com/). A continuouse integration on CircleCI is in place. 
Just push the code to the `master` branch to deploy. Check the build status on CircleCI at [https://circleci.com/gh/5un/infocamp-berkeley](https://circleci.com/gh/5un/infocamp-berkeley).

#### Deploy Manually

The site can be deployed manually to firebase with
```base
firebase init
# Enable firebase hosting 
# Choose public as the deployment folder
# Don't reroute paths to index.html and don't replace existing index.html
gatsby build
firebase deploy
```

## 3. Pages and Components

The templates for Infocamp Site is basically decomposed into pages and components. Each component in the `src/pages` directory represents a url in the site. For example, `/faqs` would bring the component in `src/pages/faqs.js`. The root url `/` is associated with `src/pages/index.js`. 

In each page, HTML elements are either added to the page directly or imported from other modules. You can also build a new component in the `src/components` directory and import it in to use in the page. See the `src/pages/index.js` which brings in `src/components/sponsor-list.js` as an example.

## 4. Working with content

Content are stored as json files in the `src/content` directory. To render content into your templates, simply load the content file with the import statement, for example, `import sponsorsData from '../content/sponsors.json'`. See `src/pages/index.js` for an example of how it's done.

For consistency, please import the content into a page instead of the subcomponents. Then, pass the data into the props of the subcomponents. See `src/pages/index.js` for an example of how it's done.

## 5. Styling

The styling is based on the CSS library [Bulma](https://bulma.io/). There are React components for the elements in Bulma available from [Bloomer](https://bloomer.js.org/). Project stylesheets are written in SASS. To revise the global style, please see the .scss files in `src/layouts` directory. For local styles, consider using `styled-components`. See how it is some in the `src/components/sponsor.js`.

### Working with Bloomer

Import the subset of Bloomer components you are going to use in each file. For example, `import { Container, Column, Button } from 'bloomer';` exposes the `Container`, `Column`, and `Button` components. See [Bloomer's documentation](https://bloomer.js.org/#/documentation/overview/start) to see all the components that could be used. 

## 6. Responsiveness

The design for the site focuses mobile first. Make sure your components are responsive on different screensizes. See [Bloomer's Grid Documentation](https://bloomer.js.org/#/documentation/grid/columns) for the use of Bloomer's grid system.

## 7. Roadmap

* **Develop schedules components**  
  Load the agendas content from `src/content/agenda.json` and render it accordingly in the index.js page. You may create sub components for this and put them in the `src/components`. Refer to these designs for [Mobile](https://invis.io/ZBF7U1F3F) and [Desktop](https://invis.io/8BF7U0ZA5).

* **Develop FAQs components**  
  Load the agendas content from `src/content/faqs.json` and render it accordingly in the faqs.js page. You may create sub components for this and put them in the `src/components`. Refer to these designs for [Mobile](https://invis.io/ZBF7U1F3F) and [Desktop](https://invis.io/8BF7U0ZA5).

* **Develop speaker components**  
  Load the agendas content from `src/content/speakers.json` and render it accordingly in the index.js page. Note that speakers data are separated into groups at the top level (e.g. there's Keynote Speakers, Panelists, and Workshop leaders). You may display them by separate them into groups. You may create sub components for this and put them in the `src/components`. Refer to these designs for [Mobile](https://invis.io/ZBF7U1F3F) and [Desktop](https://invis.io/8BF7U0ZA5).

* **Integrate google analytics**  
  It would be cool to be able to collect the viewing stats of the site. Gatsby has its own way of integrating with GA. See [https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics) for more instructions.

* **Integrate global style guides from design team**  
  When the style guide is ready, we might need to revise `src/layouts/index.scss` or other files accordingly. There might be other assets to integrate such as logos, banners, and icons.  
  __Update__: Fonts are already updated in the main stylesheet.

* **Social media open graph tags**  
  Open graph tags are the ways used by social media to understand our site and make it more searchable. For this, a descriptive meta tags has to be added to the site. If you choose to do this item, study how the `react-helmet` module work. See `src/layouts/index.js` to see how Helmet is currently used (hint: some meta tags have been there already). See how to add new meta tags and what does Facebook and other social media require. Facebook open graph tag documentation is at [https://developers.facebook.com/docs/sharing/webmasters](https://developers.facebook.com/docs/sharing/webmasters). Also verify if the tags are really there by viewing the HTML source of the rendered site.

* **Meta tag SEO optimization**  
  Some more tags such as `description` and `keyword` have to added to make the site more searchable. Read up some guides for meta tag settings. See how the `react-helmet` module works and add appropriate meta tags to the site. Also verify if the tags are really there by viewing the HTML source of the rendered site. Would be awesome if we can use some keyword research tools.

* **Splash interactive artwork**  
  Some interactive artwork would be cool for the splash section. 
  __Update__: Placeholder animation has been developed with ThreeJS

* **Make 404 page**  
  When a non-existing url is access on this site, gatsby send the user to `src/pages/404.js`. This is trivial but has to be done before the deployment. This is also a place where we can be a bit creative. Also look for the design direction from the design team. 

* **Add ticket registration link**  
  When the registration link is ready on Eventbrite. Add the link to the ticketing links on this site.

## 8. Resources
Some other resources to get you started.
* [https://www.codecademy.com/learn/react-101](https://www.codecademy.com/learn/react-101)
* [https://www.gatsbyjs.org/docs/](https://www.gatsbyjs.org/docs/)

