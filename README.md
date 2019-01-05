## Installing Recipes using Salesforce DX

> **IMPORTANT**: Because of a current issue in pre-release, make sure your project path doesn't include any of the following folder names: **lwc**, **aura**, **wave**. For example, DO NOT clone this repository in a folder called **/Projects/lwc**.

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Sign up for a Spring '19 pre-release org and enable Dev Hub
    - Install the pre-release version of the Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

2. If you haven't already done so, authenticate with your Spring '19 hub org and provide it with an alias (spring19hub):

    ```
    sfdx force:auth:web:login -d -a spring19hub
    ```

3. Clone the lwc-recipes repository:

    ```
    git clone https://github.com/ShreyasD/lwc-customaccountwizard
    cd lwc-recipes
    ```

4. Create a scratch org and provide it with an alias (**lwc-recipes** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-customaccountwizard
    ```

5. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

6. Open the scratch org:

    ```
    sfdx force:org:open
    ```


