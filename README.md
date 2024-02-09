---
runme:
  id: 01HP84D14ZGHW52EK4S53R40KX
  version: v2.2
---

# Webdriverio v8 Exercise Web Automation Framework by Walter Rojas

Automated functional UI test for Ether based on [WebdriverIO](https://webdriver.io/) browser automation test framework

## Table of Contents

- [Ether Automation Framework](#Webdriverio-v8-Exercise-web-automation-framework-by-Walter-Rojas)
- [Table of Contents](#table-of-contents)
- [Technologies Used](#technologies-used)
- [Setup Instructions for MacOS](#setup-instructions-for-macos)
- [Usage](#usage)

## Technologies Used

     JavaScript
     Node.js
     NPM
     WebdriverIO
     Babel
     Spec Reporting
     Allure Reporting

## Setup Instructions for MacOS

- Prerequisites

* Download and install Google Chrome (only in case, you don't have it)

* Install `Node.js version 16.13.1` using the following tutorials as reference

* [Installing Node.js using Node Version Manager on MacOS and Ubuntu](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Node Version Manager the easiest way to switch Node.js envirotments on your machine](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)

- If you want to verify you have `Node.js` installed and its version number, just execute the following command in `Terminal` or through `Visual Studio Code` terminal:

```sh {"id":"01HP84D14ZGHW52EK4R9RGCZ13"}
node --version
```

- Clone the project from Gitlab repository

* Execute the following commands

```sh {"id":"01HP84D14ZGHW52EK4RC8BN6B7"}
git clone https://github.com/walterrojas/webdriverio-v8-exercise-web-automation-framework-walter-rojas.git
cd webdriverio-v8-exercise-web-automation-framework-walter-rojas.git
```

- Install project dependencies

```sh {"id":"01HP84D14ZGHW52EK4REWVMHQV"}
npm install
```

## Usage

- Run all automated tests in QA environment

```text {"id":"01HP84D14ZGHW52EK4RJECFDBC"}
npm test
```

- Open Allure Report web page generated from lastest QA Allure XML results file

```sh {"id":"01HP84D14ZGHW52EK4RXX01SXG"}
npm run show-report
```
