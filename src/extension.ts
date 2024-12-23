
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { javascript, typescript } from './resources/files/server';


const projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
const packageJsonPath = path.join(`${projectDirectory}`, 'package.json');

const extensions = {
	typescript: '.ts',
	javascript: '.js'
};

const simpleFolderStructure = {
	controller: {
		folder: path.join(`${projectDirectory}`, "controllers"),
	},
	route: {
		folder: path.join(`${projectDirectory}`, "routes")
	},

	// Files needed int the Api
	files: {
		server: path.join(`${projectDirectory}`, `server`)
	}
};

const advanceFolderStructure = {
	controller: {
		folder: path.join(`${projectDirectory}`, "controllers")
	},
	route: {
		folder: path.join(`${projectDirectory}`, "routes")
	},
	config: {
		folder: path.join(`${projectDirectory}`, "config")
	},
	middlewares: {
		folder: path.join(`${projectDirectory}`, "middlewares")
	},
	models: {
		folder: path.join(`${projectDirectory}`, "models")
	},
	utils: {
		folder: path.join(`${projectDirectory}`, "utils")
	},

	// Files needed int the Api
	files: {
		server: path.join(`${projectDirectory}`, `server`)
	}
};

const complexFolderStructure = {
	controller: {
		folder: path.join(`${projectDirectory}`, "controllers")
	},
	route: {
		folder: path.join(`${projectDirectory}`, "routes")
	},
	config: {
		folder: path.join(`${projectDirectory}`, "config")
	},
	middlewares: {
		folder: path.join(`${projectDirectory}`, "middlewares")
	},
	models: {
		folder: path.join(`${projectDirectory}`, "models")
	},
	utils: {
		folder: path.join(`${projectDirectory}`, "utils")
	},
	services: {
		folder: path.join(`${projectDirectory}`, "services")
	},
	tests: {
		folder: path.join(`${projectDirectory}`, "tests")
	},

	// Files needed int the Api
	files: {
		server: path.join(`${projectDirectory}`, `server`)
	}
};

// Function To create ApiFolders
async function createApiFolders(apiType: string) {

	// check if ther is working directory workspace
	if (!projectDirectory) {
		vscode.window.showErrorMessage('No Workspace folder is Open');
		return;
	}

	// create Api and it Folders based on Api complexity selection type
	switch (apiType) {
		case 'Simple':

			// create the Folders
			fs.mkdirSync(`${simpleFolderStructure.route.folder}`, { recursive: true });
			fs.mkdirSync(`${simpleFolderStructure.controller.folder}`, { recursive: true });
			break;

		case 'Advance':

			// create the Folders
			fs.mkdirSync(`${advanceFolderStructure.route.folder}`, { recursive: true });
			fs.mkdirSync(`${advanceFolderStructure.controller.folder}`, { recursive: true });
			fs.mkdirSync(`${advanceFolderStructure.config.folder}`, { recursive: true });
			fs.mkdirSync(`${advanceFolderStructure.middlewares.folder}`, { recursive: true });
			fs.mkdirSync(`${advanceFolderStructure.models.folder}`, { recursive: true });
			fs.mkdirSync(`${advanceFolderStructure.utils.folder}`, { recursive: true });
			break;

		case 'Complex':

			// create the Folders
			fs.mkdirSync(`${complexFolderStructure.route.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.controller.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.config.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.middlewares.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.models.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.utils.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.services.folder}`, { recursive: true });
			fs.mkdirSync(`${complexFolderStructure.tests.folder}`, { recursive: true });
			break;

		default:
			break;
	}
}

// Create Files Based on Extension Type eiter Typescript or Javascript
async function createFiles(apiType: string, extensionType: string) {

	// Check the Api Type First
	switch (apiType) {
		case 'Simple':

			/**check the extension Type
			 * If Typescript or Javascript and
			 * create the file based on Extension type
			 */

			switch (extensionType) {
				case 'Javascript':
					fs.writeFileSync(`${simpleFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: 'a' });
					break;

				case 'Typescript':
					fs.writeFileSync(`${simpleFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: 'a' });
					break;

				default:
					break;
			}

			break;

		case 'Advance':

			/**check the extension Type
			 * If Typescript or Javascript and
			 * create the file based on Extension type
			 */

			switch (extensionType) {
				case 'Javascript':
					fs.writeFileSync(`${advanceFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: 'a' });
					break;

				case 'Typescript':
					fs.writeFileSync(`${advanceFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: 'a' });
					break;

				default:
					break;
			}
			break;

		case 'Complex':

			/**check the extension Type
			* If Typescript or Javascript and
			* create the file based on Extension type
			*/

			switch (extensionType) {
				case 'Javascript':
					fs.writeFileSync(`${complexFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: 'a' });
					break;

				case 'Typescript':
					fs.writeFileSync(`${complexFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: 'a' });
					break;

				default:
					break;
			}
			break;

		default:
			break;
	}

}

// run npm commands after creation of folders and files
async function runNpmCommands(command: string, option: string) {
	// Get the root directory of the workspace
	if (!workspaceFolder) {
		vscode.window.showErrorMessage('No workspace folder is open.');
		return;
	}

	// create file base on option
	if (option == 'Yes') {
		return new Promise<void>((resolve, reject) => {
			exec(`npm ${command}`, { cwd: workspaceFolder }, (error, stdout, stderr) => {
				if (error) {
					vscode.window.showErrorMessage(`Error running npm command: ${error.message}`);
					reject(error);
					return;
				}
				if (stderr) {
					vscode.window.showWarningMessage(`npm warning: ${stderr}`);
				}

				vscode.window.showInformationMessage(`npm command executed successfully:\n${stdout}`);
				resolve();

			});
		});
	} else {
		console.log('You can Create the npm package just by running npm init or npm init -y and to install node package use npm install 0r i');
		vscode.window.showInformationMessage('You can Create the npm package just by running npm init or npm init -y and to install node package use npm install 0r i');
	}

}

// update package Josn File
async function updateJsonFile() {
	fs.readFile(packageJsonPath, 'utf-8', (err, data) => {
		if (err) {
			vscode.window.showErrorMessage(`${err}`);
			return;
		}

		// update package Json file
		const packageJson = JSON.parse(data);

		packageJson.description = `${packageJson.name}`;
		packageJson.scripts = {
			start: 'node server.js',
			dev: 'nodemon server.js'
		};

		fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (err) => {
			if (err) {
				vscode.window.showErrorMessage(`${err}`);
				return;
			}
			vscode.window.showInformationMessage('package.json File updateted successfully');

		});
	});

}

// activate extension
export function activate(context: vscode.ExtensionContext) {

	// alert that the extension is active
	console.log('Congratulations, your extension "api-folder-gen" is now active!');

	// generate the files based on commands
	const generateApi = vscode.commands.registerCommand('api-folder-gen.generateApi', async () => {

		// ask the Type of api complexity
		const apiType = await vscode.window.showQuickPick(
			['Simple', 'Advance', 'Complex'],
			{
				placeHolder: 'Select How Complex your Api should be created',
				canPickMany: false
			}
		);

		// check if no api Type was selected
		if (!apiType) {
			vscode.window.showErrorMessage('An API complexity needs to be selected');
			return;
		}

		// create the Folders
		await createApiFolders(apiType);

		const preferredExtension = await vscode.window.showQuickPick(
			['Javascript', 'Typescript'],
			{
				placeHolder: 'Choose your preferred Extension',
				canPickMany: false
			}
		);

		if (!preferredExtension) {
			vscode.window.showErrorMessage('Preferred Extension needs to be selected');
			return;
		}

		await createFiles(apiType, preferredExtension);

		// create package.json file and ask if they want to install few npm packages
		const packageJsonFile = await vscode.window.showQuickPick(
			['Yes', 'No'],
			{
				placeHolder: 'Do you want to create package.json file automatically or manually?\nNB: If created automatically you can later edit it to your satisfaction',
				canPickMany: false
			}
		);

		if (!packageJsonFile) {
			vscode.window.showInformationMessage('One Option needs to be selected');
			return;
		}

		await runNpmCommands(`init -y`, packageJsonFile);
		await updateJsonFile();

		// install important npm packages
		const npmPackages = await vscode.window.showQuickPick(
			['Yes', 'No'],
			{
				placeHolder: 'Do you want to install the important npm Packages',
				canPickMany: false
			}
		);

		if (!npmPackages) {
			vscode.window.showInformationMessage('One Option needs to be selected');
			return;
		}

		await runNpmCommands(`install express`, npmPackages);
	});

	// Add the Command to Vs code Extension Command
	context.subscriptions.push(generateApi);

}

// deactivate function
export function deactivate() { }


// setTimeout(() => {
// 	updateJsonFile();

// }, 2000);
