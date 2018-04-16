---
path: "/2017/06/taming-the-wild-west-of-css/"
date: "2017-06-12"
title: "Taming the Wild West of CSS"
---

Of all the coding languages that anyone is ever exposed to HTML and CSS are likely the first. In fact, most people in their 20s and 30s could probably remember a time when they updated their Myspace or Tumblr page to give it some personal flair. I'm fairly certain that was my introduction to "building" the web. While HTML and CSS mark the first and are arguably the easiest to get started coding with, I don't feel wrong saying that they're also the wild west of coding. Get even two developers on a team writing CSS classes and attempting to understand HTML inheritance structure for a component and you'll quickly learn as I did that thing get very messy, very fast. My first projects with a team were littered with long, messy, uncommented files that featured duplicated classes with various different inheritance and names that didn't help describe their function. Obviously, this was a problem and is something we've corrected for at [Field](http://www.fieldmedialab.com). A significant factor in helping with that correction is the use of our custom developed CSS framework—Lucy.

### Why Lucy

For our projects at Field, we use a custom CSS framework called Lucy for the flexibility and scalability it offers. We chose a custom approach because popular frameworks like [Bootstrap](http://getbootstrap.com) and [Zurb's Foundation](http://foundation.zurb.com) have proven to be too bulky and somehow end up pigeonholing our design into a certain bland aesthetic. With a custom framework, we have the power to do what we like.

### File structure

Our framework—Lucy—employs the ITCSS methodology, which stands for Inverted Triangle CSS. This methodology was developed by Harry Roberts and has been made popular for its ability to scale naturally with any project. I won't go in-depth into ITCSS here because you should go to the source itself and enjoy [Harry Roberts' original write up at Creative Bloq](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528).

### Naming

ITCSS can only go so far to make a framework successful though. One of the major challenges that HTML and CSS face is naming and the organization of classes and attributes. After doing our research, it was obvious for us that [BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) (Block-Element-Modifier) was the naming convention to use with Lucy. BEM makes it possible for us to create descriptive classes that also communicate component structure, leaving less for a developer to guess and comment about. It creates highly readable HTML that features consistency—perhaps the most important factor in growth oriented projects. In addition, BEM works well with ITCSS. We tack on the first letter of each scope from ITCSS to classes, allowing us to better search up classes should they need editing or whether or not they make visual changes.

### Guidelines

I'm a stickler for consistency and readability. As such, it's important to me that me and my team speak the same "language" when we write code. Since I'm in charge of the front-end, I was quick to have our framework adopt portions of two code guidelines. First, we follow [@mdo's code guide](http://codeguide.co), especially when it comes to [CSS declaration order](http://codeguide.co/#css-declaration-order). To compliment this—and follow our tradition within this blog to use Harry Roberts' work—we use [CSS Guidelines](https://cssguidelin.es) to structure our commenting practice amongst other things. Portions of the guidelines we've written out also borrow from [Airbnb's CSS guidelines](https://github.com/airbnb/css).

### Preprocessors

Discovering Pug and Stylus were huge revelations to me. Writing pure HTML and CSS is fine and in fact, it's sometimes refreshing now that I use pre-processors so heavily; however, they can never beat in my development environment the speed and scalability of preprocessors. My initial interaction with CSS preprocessing was through Stylus, a whitespace-based JavaScript CSS preprocessor. Working alongside it, I use [Pug](https://pugjs.org), another whitespace language but for HTML and previously called Jade (if that's a more familiar name). For Lucy, we moved away from Stylus and toward [Sassy CSS](http://sass-lang.com) (SCSS) because many of the dependencies we utilize are written in it. SCSS also makes sense for when we onboard more developers as it's arguably the de facto CSS preprocessing language.

Preprocessors enable us to utilize ITCSS by dividing our files up and work in a component per file capacity. When we compile, our element and class inheritance is already worked out and all we have to do is upload our main.css to the public folder. Easy peasy.

### Next steps

Our Lucy framework is by no means complete and I'm not certain it ever will be—that's one of the advantages of building a custom framework—every project we work on expands the framework to make it more powerful across browsers, devices, and websites. Once we build out a complex component, if styling is all that is required should that component be needed for another project or client, we can simply copy it over, style it so it works with the relevant brand, and save precious time and money for ourselves and our clients.

All of this is to say that at Field we're working hard to tame the wild west of HTML and CSS. Small efforts to adhere to guidelines, maintain consistency, and practice methodologies go a long way to building projects that scale at the same rate as a growing startup.
