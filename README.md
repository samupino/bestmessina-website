# Website

This is the repository for the BEST Messina website. It is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

A repository is a folder containing files. This folder is hosted on GitHub (it's like a Google Drive, but mainly used for code). You can do the following things with a repository:

- Open and read the files it contains.
- Modify the files.
- Clone the repository, that means to download a copy of the entire folder on your computer. This will let you make modifications in your computer and then upload (we commonly say "push") them here on GitHub so that everybody can see them.

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

The following steps will let you download this repository on your computer, in a folder of your choice. This is a preliminary step required if you want to modify the website and see hot it looks like before publishing the changes to the public.

1. Open Visual Studio Code
2. Click on `Clone Git Repository...`
3. Select `Clone from GitHub`
4. Use your GitHub credentials, or register if you don't have an account
5. Select the name of this repository and choose a destination folder on your computer where the repository will be cloned

Also, if you are not a collaborator of the repository, ask the owner to add you, otherwise you will not be able to publish your modifications.

### Run the website locally

If you want to work on the website, you may want to run on your computer a copy of the original website that is on the internet. This will allow you to see the changes that you make to your copy of the website, without affecting the original website hosted on the internet. This is useful because you may make mistakes and you don't want them to be visible to everybody. Also, developing in this way is much faster.

To see a preview of the website directly running on your computer, open the repository folder with Visual Studio Code. Then, on the top, click on `Terminal` > `New Terminal`.

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

The above `start` commands will start a process on the terminal that will open up a browser window. The process will keep running in the terminal and if you make changes to the website code while the process is running, the changes will be immediately shown also on the browser window.
If you want to stop or restart the process, you can kill it by pressing `Ctrl+C` (twice on Windows) in the Terminal window.

If you want to run the full version with all the languages, you need to run this command (it will take longer)

```bash
npm run build; npm run serve
```

### Make changes and push them

Before making any changes in the repository, make sure to pull the latest version of the website. You can do it in Visual Studio Code in this way:
1. click on the "Source Control" icon on the left (it is like a small graph with two branches)
2. click on the 3 dots `...` and then `Pull`

After this, you can make your changes. Remember to save your files with `Ctrl+S`. 

To push the changes to GitHub go again to the "Source Control" icon and
1. Next to "Changes" click the `+` icon, the changed files have been moved to the "Staged Changes" section and the "Changed" section must be empty.
2. Choose a message that briefly explains what you changed.
3. Click "Commit". Congrats, you created your first commit! Now this change will have your name.
4. Make as many commits as you want.
5. When you are satisfied, push the commits to GitHub with `Sync Changes`. In this way, also the others will be able to see them!

Be careful, because if other people were working on the same files as you, you may experience conflicts! Conflicts need to be resolved manually and it's better to avoid them.
