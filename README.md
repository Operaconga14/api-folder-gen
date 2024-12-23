# API Project Generator💡

![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational)

💌 💓

he API Project Generator is a Visual Studio Code extension designed to streamline the creation of API projects by automating folder structure setup, file generation, and package management. It provides a user-friendly interface to quickly generate a boilerplate for APIs, offering options for different levels of complexity: Simple, Advanced, and Complex.

## Features

- Folder Structure Customization:
  Automatically creates folders such as controllers, routes, config, middlewares, models, services, and more based on the selected complexity.
  Supports three predefined folder structures:
  Simple: Minimal structure with controllers and routes.
  Advanced: Includes additional folders like config, middlewares, models, and utils.
  Complex: Adds services and tests folders for comprehensive project organization.
  File Generation:

- Automatically generates a server file (server.js or server.ts) in the preferred language: JavaScript or TypeScript.
  Prepopulated boilerplate code for the server file is included.
  Integration with npm:

- Automatically initializes a package.json file with scripts for starting and developing the API.
  Provides an option to install necessary npm packages like express directly from the interface.
  Customizable Extensions:

- Supports both JavaScript and TypeScript, allowing users to select their preferred development environment.
  Interactive Workflow:

- Utilizes VS Code's Quick Pick menus for an intuitive and guided setup process.
  Offers flexibility to choose automation or manual configuration for certain steps, such as npm initialization.
  Ease of Use:

- Automatically updates package.json with relevant fields and scripts.
  Prompts for optional installation of key dependencies to kickstart development

## Requirements

### 1. Environment

VS Code: The extension runs inside VS Code.
Node.js: Required to run npm commands for creating files and dependencies.

### 2. User Input

API Complexity: Choose one:
Simple: Basic folders like controllers and routes.
Advanced: Adds more folders like config, models, and middlewares.
Complex: Includes everything from the Advanced option plus services and tests.
Programming Language: Choose either JavaScript or TypeScript.
NPM Initialization: Decide whether to auto-generate package.json or do it manually.
Install Packages: Choose whether to automatically install dependencies like express.

### 3. Files and Folders Created

Based on the selected API complexity, different folders and files will be created, like:
controllers, routes, server.js/server.ts.
Advanced and Complex setups add more like config, models, middlewares, services, and tests.

### 4. Permissions

Read/Write Access: Required to create files and folders in the project.

### 5. Dependencies

VS Code API: To interact with the VS Code environment.
Node.js Modules: For file handling (fs), path resolution (path), and running npm commands (child_process).

### 6. Error Handling

Missing Folder: If no workspace is open, show an error.
File Creation Errors: Handle and show errors if something goes wrong during file or folder creation.

### 7. Feedback to User

Confirmation: Let the user know when things are done.
Error Messages: Show warnings for any issues that arise.

## Extension Settings

- Node.js Required: Ensure Node.js is installed to run npm commands for package management.

- Nodemon Required: Ensure Nodemon is installed

## Known Issues

- Node.js Required: Ensure Node.js is installed to run npm commands for package management.

- Nodemon Required: Ensure Nodemon is installed

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Version 1.0.0
Release Date: December 17, 2024

### New Features:
#### <li> API Project Generator: </li>

* Allows users to generate an API project structure with different levels of complexity: Simple, Advanced, and Complex.

* Simple: Creates basic controllers and routes folders.

* Advanced: Adds additional folders for config, middlewares, models, and utils.

* Complex: Includes all of the above, plus services and tests folders.

#### <li> Flexible Language Choice:</li>

* Choose between JavaScript and TypeScript for your project files (server.js/server.ts).

### <li> Automatic package.json Generation:</li>

* Option to automatically generate a package.json file and add basic scripts (start and dev).

#### <li> Install Essential Packages:</li>

A* utomatically installs important npm packages like express if selected by the user.

#### <li>VS Code Integration:</li>

* Seamless integration with VS Code for easy creation of folders, files, and project setup.

#### <li>Improvements:</li>

##### <li>Simplified Setup:</li>
* User-friendly prompts to guide users through selecting their preferred API structure, language, and package setup.

##### <li> Error Handling: </li>

* Improved error messages when workspace or folder issues arise.

##### <li> Clear Feedback: </li>

* Detailed messages showing the success of folder and file creation, as well as npm command executions.


Fixed issue #.
### 1.0.0
* Fixed potential issues with folder creation if workspace is not open.

* Improved handling of invalid or missing file paths during project generation.
<!-- ### 1.1.0 -->

<!-- Added features X, Y, and Z. -->

<!-- ---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/) -->

 ## For Support and Contact
 * Email: amirejoseph83@gmail.com
 * USDT BNB (Binance Smart Chain) => 0x52620572bc56AE24a7Ea0403Cf66989091714957


**Enjoy!**
