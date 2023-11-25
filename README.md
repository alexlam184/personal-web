[![MIT License](https://img.shields.io/github/license/alexlam184/personal-website)](https://github.com/alexlam184/personal-website/blob/master/LICENSE)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This is a `Next.js project` with TailwindCSS

My persoanl website is designed for showing personal background and sharing my personal thought in blog

## Features

- About
- Blog

## Installation

Install personal-website with `yarn`

```bash
  yarn install
  cd personal-website
```

### Linting

ESLint

```bash
  yarn lint
```

### Formatting

```bash
  yarn format
```

## Running in development mode

Start the server

```bash
  yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Tech Stack

**Client:** React, Next, TailwindCSS

**Server:**

**Project:** ESlint,Husky,Prettier (formatting)

## Acknowledgements

- [next-i18next](https://github.com/isaachinman/next-i18next)
- [react-i18next](https://react.i18next.com/)
- [Code formatting](https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437)
- [husky](https://typicode.github.io/husky/#/)
- [react icon](https://react-icons.github.io/react-icons/)

<details>
<summary>Roadmap</summary>

- Additional browser support

- Markdown guide - Blog

- Readme guide - Blog

- Github guide - Blog

- Linux guide - Blog
</details>

<details>
<summary>Layer</summary>

| Components | z-index |
| ---------- | ------- |
| header     | 40      |

</details>

<details>
<summary>TailwindCSS Style</summary>

Screen
| Components | min-width |
| ---------- | --------- |
| sm | 640px |
| md | 768px |
| lg | 1024px |

## REMARK

only use `lg:` is ok,the rest will be marked as small screen

```ts
// min screen width will be 10/12 of full screen (phone) , big screen wiil be width 100% (desktop)
<div className='absolute top-0 left-0 w-10/12 lg:w-full h-screen bg-white text-black z-40  lg:relative lg:w-full lg:h-full'>
  ...
</div>
```

</details>

# License & Copyright

[MIT](https://github.com/alexlam184/personal-website/blob/master/LICENSE)

_2023-11-25_
