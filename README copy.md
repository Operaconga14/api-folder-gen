# api-folder-gen README

The API Project Generator is a Visual Studio Code extension designed to streamline the creation of API projects by automating folder structure setup, file generation, and package management. It provides a user-friendly interface to quickly generate a boilerplate for APIs, offering options for different levels of complexity: Simple, Advanced, and Complex.

## Features

* Folder Structure Customization:
Automatically creates folders such as controllers, routes, config, middlewares, models, services, and more based on the selected complexity.
Supports three predefined folder structures:
Simple: Minimal structure with controllers and routes.
Advanced: Includes additional folders like config, middlewares, models, and utils.
Complex: Adds services and tests folders for comprehensive project organization.
File Generation:

* Automatically generates a server file (server.js or server.ts) in the preferred language: JavaScript or TypeScript.
Prepopulated boilerplate code for the server file is included.
Integration with npm:

* Automatically initializes a package.json file with scripts for starting and developing the API.
Provides an option to install necessary npm packages like express directly from the interface.
Customizable Extensions:

* Supports both JavaScript and TypeScript, allowing users to select their preferred development environment.
Interactive Workflow:

Utilizes VS Code's Quick Pick menus for an intuitive and guided setup process.
Offers flexibility to choose automation or manual configuration for certain steps, such as npm initialization.
Ease of Use:

Automatically updates package.json with relevant fields and scripts.
Prompts for optional installation of key dependencies to kickstart development

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

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
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
