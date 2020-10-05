# Ultimate Webpack Configuration for React (no create-react-app)

This repository contains all the files and steps needed to configure a fully customized react project (and even other Non-React ones) from scratch (plus a bonus of SASS loader, to include it and speed up your development process), avoiding unneded packages and files installed through the 'create-react-app' command. It provides:

1. A .txt setup file that contains:

   - The recommended source folder structure to follow.
   - A step-by-step guide of the commands to include the required packages/plugins/loaders, along with explanations of what each one is used for.

2. Custom names for the folders and files that are created/named to comply with the default behavior of webpack. **(their names are pretty obvious, so it'll be easy to tell they can be changed depending on application requirements)**
3. Three webpack configuration files:

   - One common configuration file that includes the plugins and loaders required for either development or production process, as well as the configuration of the plugin required to combine this same file with either of the other two (dev or prod).
   - One development configuration file, for development purposes that makes use of the Webpack Dev Server **(With configurable port number)**.
   - One production configuration file, which, for personal preferences, outputs a single .css file into the production folder instead of just loading the CSS into the DOM. **(To avoid this, just go into that file and delete the rule for the .scss files, it'll automatically fall back to the 'webpack-common-config.js' file configuration --which makes use of the style loader--)**

**Feel free to fork it, use it, and rename files and folders if you need to, for your custom react/no-react project.**
