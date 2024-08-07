# Website

This is the BEST Messina website. It is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to contribute

### Installation

To run the website locally, first you need to have `npm` installed.

<details>
<summary>Guide for Linux/Mac</summary>

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

</details>

<details>
<summary>Guide for Windows</summary>

### Open the PowerShell

1. Click on the Windows icon
2. Write PowerShell
3. Right-click and choose "Run as administrator"
4. A blue window will open

### Install FNM

Copy the following command on the PowerShell and run it pressing Enter

```bash
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
```
When it finishes, close the PowerShell and reopen it as administrator.

### Install NPM

First navigate to the website folder:

1. Write "cd " (yes, with the space)
2. Drag and drop the folder inside the PowerShell window
3. You will now see `cd "C:\Users\..."`
4. Press Enter

Then copy and run the following commands

```bash
# allow running scripts like yarn
Set-ExecutionPolicy Unrestricted

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
Add-Content -Path $profile -Value 'fnm env --use-on-cd | Out-String | Invoke-Expression'

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.16.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.1`
```
</details>

### Install Visual Studio Code

It's strongly recommended to install [Visual Studio Code](https://code.visualstudio.com/) to work on this website. It will make thing much easier for you.

### Clone this repository

1. Open Visual Studio Code
2. Click on `Clone Git Repository...`
3. Select `Clone from GitHub`
4. Use your GitHub credentials, or register if you don't have an account
5. Select the name of this repository and choose a destination folder on your computer where the repository will be cloned

Also, if you are not a collaborator of the repository, ask the owner to add you, otherwise you will not be able to publish your modifications.

### Run the website locally

Open the repository folder with Visual Studio Code. Then click on `Terminal` > `New Terminal`.

**Only the first time:** run the following command (inside the repository folder) to install the project dependencies

```bash
npm install
```

Then you can launch the English version of the website with

```bash
npm start
```

or the Italian version with

```bash
npm start -- --locale it
```

If you want to run the full version with all the languages, you need to run this command (it will take longer)

```bash
npm run build; npm run serve
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
