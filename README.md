<div align="center">

# landing-page

Personal landing page, powered with [Next.js][nextjs]  
Deployed on [griko.netlify.com](https://griko.netlify.com) and
[griko.now.sh](https://griko.now.sh)

[![Screenshot](preview.png)](https://griko.id)

</div>

## Description

After many iterations and deployments throughout many providers, I decided to
transform my landing page into a progressive web app (it can be opened when
offline) and deployed it on [Netlify](https://www.netlify.com) and
[Zeit Now](https://zeit.co/now).

Oh and also this got featured on [Bulma Expo](https://bulma.io/expo). 😄

## Development

### Requirements

- [Node.js](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/en) (recommended)

### Steps

- Clone this repository
- Install dependencies using Yarn
- Start dev server by running `yarn dev`
- Lint source codes using `yarn lint`
- Build and export using `yarn export` (creates `out` directory)

### Publishing

- Publish the `out` directory contents anywhere
  ([GitHub Pages](https://pages.github.com),
  [Netlify](https://www.netlify.com),
  [Zeit Now](https://zeit.co/now), etc.)

## Libraries and Packages

### Dependencies

- [Bulma](https://bulma.io)
- [EmojiOne](https://www.emojione.com/emoji/v4)
- [Font Awesome](https://fontawesome.com)
- [Next.js][nextjs]
- [`next-offline`](https://github.com/hanford/next-offline)
- [`next-optimized-images`](https://github.com/cyrilwanner/next-optimized-images)
- [`next-page-transitions`](https://github.com/illinois/next-page-transitions)
- [`next-purgecss`](https://github.com/lucleray/next-purgecss)
- [`node-sass`](https://github.com/sass/node-sass)
- [`react-lazyload`](https://github.com/jasonslyvia/react-lazyload)
- [`react-reveal`](https://github.com/rnosov/react-reveal)

### Dev Dependencies

- [`@types/react`](https://www.yarnpkg.com/en/package/@types/react)
- [`@types/react-dom`](https://www.yarnpkg.com/en/package/@types/react-dom)
- [`prop-types`](https://www.yarnpkg.com/en/package/prop-types)

View more details on the [`package.json`](./package.json) file.

## Tools of the Trade

- Countless coffee
- Google Chrome
- Hyper
- Sleepless nights
- Visual Studio Code

## Credits

Big thanks for all the listed packages above, especially
[Jeremy Thomas](https://github.com/jgthms) for creating Bulma and all of the
[Zeit](https://zeit.co/home) team for Next.js! 🎉

[nextjs]: https://github.com/zeit/next.js
