# 🔰 EXAMPLE: Multi Block

>This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

<br>

![WHAT ICON](https://on.ahmda.ws/oy8W/c)

### What/How?

This example includes a WordPress Gutenberg plugin called `multi-block` which creates a Gutenberg block also called `multi-block`.

👉 This example is created by running the following steps, that you can follow to build it on your own.

- [Install `create-guten-block` →](https://github.com/ahmadawais/create-guten-block#getting-started)
- Run `create-guten-block multi-block` command.
- Go to `./src/` and copy paste the `./src/block` directory as `./src/block2/` where our second block's code will live.
- Open `./src/blocks.js` and import our new block from `./src/block2/block.js` file.
- Go to `./block2/` directory and rename our block from `multi-block` to `multi-block-2` in both `.js` and `.scss` files.
- Now you have two blocks run by a single plugin.
- As you might have noticed all blocks should be imported in the `./src/blocks.js` files as that's the file which gets imported into our webpack config.
- Finally, we ran `npm run eject` to eject the config in this plugin.

_That's about it._

>🌟 Star for updates [create-guten-block →](https://github.com/ahmadawais/create-guten-block) or to appreciate.


<br>

![ELSE ICON](https://on.ahmda.ws/oykk/c)

### Everything Else

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---

###### — Feel free to tweet and say 👋 at me [@MrAhmadAwais](https://twitter.com/mrahmadawais/)

[![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block)  [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ahmadawais/create-guten-block) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)
