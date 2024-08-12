# How to contribute

## Install NPM

To run the website locally, first you need to have `npm` installed.

<details>
<summary>Guide for Linux/Mac</summary>

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

</details>

<details>
<summary>Guide for Windows</summary>

1. Click on the Windows icon
2. Write PowerShell
3. Right-click and choose "Run as administrator"
4. A blue window will open

Copy the following command on the PowerShell and run it pressing Enter

```bash
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
```
When it finishes, close the PowerShell and reopen it as administrator.

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

## Install Visual Studio Code

We strongly recommended to install [Visual Studio Code](https://code.visualstudio.com/) to work on this website. It will make the development much easier for you.

## Clone this repository

The following steps will let you download this repository on your computer, in a folder of your choice. This is a preliminary step required if you want to modify the website and see hot it looks like before publishing the changes to the public.

1. Open Visual Studio Code
2. Click on `Clone Git Repository...`
3. Select `Clone from GitHub`
4. Use your GitHub credentials, or register if you don't have an account
5. Select the name of this repository and choose a destination folder on your computer where the repository will be cloned

Also, if you are not a collaborator of the repository, ask the owner to add you, otherwise you will not be able to publish your modifications.

## Run the website locally

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

## Structure of the repository

The home page is in `src/pages/index.js` (where `src/pages/` is the folder path and `index.js` is the file name). It is written in Javascript and it's the most complex one because it contains many graphical elements. The other pages are simpler.

The other pages are inside the folder `src/pages/`. They are written in [MarkDown](https://joplinapp.org/help/apps/markdown/), it's a simple way to define titles, images, lists, and other stuff.

The top "navbar", the bottom "footer", and other components that are visible in every website page are defined inside the file `docusaurus.config.js` (do not confuse it with the `.docusaurus` folder, please ignore that folder).

The default language for the website is English, so the above folders contain the English versions of the pages. The website is available also in Italian, and the italian pages are in the folder `i18n/it/`.

## How to make changes

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

## Examples

### How to add a new page to the navbar

1. Make sure your version of the website is the most recent one (see the paragraph on [how to make changes](#how-to-make-changes)).
2. Create a new Markdown file inside the folder `src/pages`.
3. Write the content of the page in English (title, text, images, and so on).
4. Add the item for the new page in the navbar section inside the file `docusaurus.config.js`.
5. Admire the new page in the local version of the website (see the paragraph on [running the website locally](#run-the-website-locally)).
6. Add the Italian translation for the navbar item in `i18n/it/code.json` and the page in `i18n/it/docusaurus-plugin-content-pages/`.
7. Admire the Italian translation in the local version of the website (you will need to run the specific terminal command for Italian).

## Automatic deployment

The "deployment" is the act of publishing the website to the internet. In the previou steps, you have leaarned how to make changes to your local vesion of the website and see them by "running the website locally". However, these changes will be visible only to you and to the other developers that clone the repository as you did. If you navigate to the real website URL you will not see yout changes yet. This is to let you develop the website without others see your half-done work.

When you are satisfied with your changes, you need to "deploy" the new version of the website, so that the changes are applied to the real URL. This repository performs automatic deployment every time you push a new commit on the `master` branch. The deployment takes about 2-3 minutes, and you can see if it succeded or failed as a green check mark in the [commits list](https://github.com/samupino/bestmessina-website/commits/master/).

Keep in mind that we have a limit of around 2000 free automatic deployments per month. They should be more than enough, but consider that we have no control over this number and it may be reduced in the future.

### How does the automation work

The automation runs on [CircleCI](https://circleci.com/), an external online service that can be connected to a GitHub repository.

Every time a new commit is pushed on `master`, a CircleCI workflow will be triggered. The workflow can execute multiple jobs, and this repository defined a job for deployment. You can see the configuration into the [config.yml](./circleci/config.yml) file. If you want to see the details and history of jobs run for this repository, or if you want to inspect a failure, ask to be added as a member of the CircleCI organization.

During the deployment, the communication with TopHost is performed using the FTP protocol. You can see the code in the `/scripts` folder.
