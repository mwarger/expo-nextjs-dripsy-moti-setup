# Expo/NextJS Dripsy/Moti Example

## Featuring

- Expo (https://docs.expo.dev/)
- NextJS (https://nextjs.org/)
- Dripsy (https://github.com/nandorojo/dripsy)
- Moti (https://moti.fyi/)

## Background

The goal of this was to setup a Dripsy, Moti, and maybe a few other things into a single project using NextJS and Expo, because I couldn't find an example of one.

To recreate this...

Start by using the Expo template that includes NextJS (https://docs.expo.dev/guides/using-nextjs/#-setup). Running the `npx` command there gets you a base project.

Next, change the `App.js` file to `App.tsx`. Doing this and starting the Next app will force the creation of a TypeScript config. Dependency installation instructions are printed in the console - follow them.

Follow the Dripsy install instructions for NextJS (https://github.com/nandorojo/dripsy#for-ssr-apps-nextjs-gatsby-etc).

Follow Moti installation instructions (https://moti.fyi/next#step-1)

Then google and fumble around for a bit...

I ended up putting together this config (https://github.com/mwarger/expo-nextjs-dripsy-moti-setup/blob/main/next.config.js) after following the instructions and a couple lucky finds in Github.

I ended up having to update the babel config (https://github.com/mwarger/expo-nextjs-dripsy-moti-setup/blob/main/babel.config.js) - this was found after some help (see [Usage with Next.js nandorojo/moti#36 (comment)](https://github.com/nandorojo/moti/issues/36#issuecomment-913962808) and following comments).

Along the way I also tried updating a couple dependencies, like NextJS (there was no rhyme or reason to this, just trying things).

![googling stuff](https://i.imgflip.com/5ml6c5.jpg 'Google stuff')
