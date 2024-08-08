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

Then copy the following commands to the PowerShell and run them pressing Enter

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

### Make changes and push them

Before making any change, make sure to pull the latest version of the website. You can do it in Visual Studio Code in this way:
1. click on the "Source Control" icon on the left (itàs like a small graph with two branches)
2. click on the 3 dots `...` and then `Pull`

After this, you can make your changes. Remember to save your files with `Ctrl+S`.

To push the changes to GitHub go again to the "Source Control" icon and
1. Next to "Changes" click the `+` icon, it the changed files have been moved to the "Staged Changes" section and the "Changed" section must be empty.
2. Choose a message that briefly explains what you changed.
3. Click "Commit". Congrats, you created your first commit! Now this change will have your name.
4. Make as many commits as you want.
5. When you are satisfied, push the commits to GitHub with `Sync Changes`. In this way, also the others will be able to see them!

Be careful, because if other people were workin on the same files as you, you may experience conflicts! Conflicts need to be resolved manually and it's better to avoid them.

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
