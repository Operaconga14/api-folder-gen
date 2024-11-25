
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';


async function createApiFolder(apiType: string) {
	const projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
	vscode.window.showInformationMessage(apiType.toLowerCase());

	if (!projectDirectory) {
		vscode.window.showErrorMessage('No Workspace folder is Open');
		return;
	}

	switch (apiType) {
		case 'Simple Api':
			// Create Neccessary Folders
			const simplecontrollersPath = path.join(projectDirectory, "controllers");
			const simpleroutesPath = path.join(projectDirectory, "routes");
			fs.mkdirSync(simplecontrollersPath, { recursive: true });
			fs.mkdirSync(simpleroutesPath, { recursive: true });

			// Run npm Command Lines
			await runNpmCommands('init -y', projectDirectory);
			await runNpmCommands('i express', projectDirectory);
			break;
		case 'Advanced Api':
			// Create Neccessary Folders
			const advancecontrollersPath = path.join(projectDirectory, "controllers");
			const advanceroutesPath = path.join(projectDirectory, "routes");
			const advanceconfigPath = path.join(projectDirectory, "config");
			const advancemiddlewaresPath = path.join(projectDirectory, "middlewares");
			const advancemodelsPath = path.join(projectDirectory, "models");
			const advanceutilsPath = path.join(projectDirectory, "utils");
			fs.mkdirSync(advancecontrollersPath, { recursive: true });
			fs.mkdirSync(advanceroutesPath, { recursive: true });
			fs.mkdirSync(advanceconfigPath, { recursive: true });
			fs.mkdirSync(advancemiddlewaresPath, { recursive: true });
			fs.mkdirSync(advancemodelsPath, { recursive: true });
			fs.mkdirSync(advanceutilsPath, { recursive: true });

			// Run npm Command Lines
			await runNpmCommands('init -y', projectDirectory);
			await runNpmCommands('i express', projectDirectory);
			break;
		case 'Complex Api':
			// Run npm Command Lines
			const complexcontrollersPath = path.join(projectDirectory, "controllers");
			const complexroutesPath = path.join(projectDirectory, "routes");
			const complexconfigPath = path.join(projectDirectory, "config");
			const complexmiddlewaresPath = path.join(projectDirectory, "middlewares");
			const complexmodelsPath = path.join(projectDirectory, "models");
			const complexutilsPath = path.join(projectDirectory, "utils");
			const complexservicesPath = path.join(projectDirectory, "services");
			const complextestsPath = path.join(projectDirectory, "tests");
			fs.mkdirSync(complexcontrollersPath, { recursive: true });
			fs.mkdirSync(complexroutesPath, { recursive: true });
			fs.mkdirSync(complexconfigPath, { recursive: true });
			fs.mkdirSync(complexmiddlewaresPath, { recursive: true });
			fs.mkdirSync(complexmodelsPath, { recursive: true });
			fs.mkdirSync(complexutilsPath, { recursive: true });
			fs.mkdirSync(complexservicesPath, { recursive: true });
			fs.mkdirSync(complextestsPath, { recursive: true });

			// Run npm Command Lines
			await runNpmCommands('init -y', projectDirectory);
			await runNpmCommands('install express', projectDirectory);
			break;

		default:
			break;
	}
}

async function runNpmCommands(command: string, workingDirectory: string): Promise<void> {

	return new Promise((resolve, reject) => {
		// Get the root directory of the workspace
		const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
		if (!workspaceFolder) {
			vscode.window.showErrorMessage('No workspace folder is open.');
			return;
		}

		const projectPath = workspaceFolder.uri.fsPath;

		exec(`npm ${command}`, { cwd: projectPath }, (error, stdout, stderr) => {
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
}


export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "api-folder-gen" is now active!');


	const generateFolder = vscode.commands.registerCommand('api-folder-gen.generateFolder', async () => {

		const apiType = await vscode.window.showQuickPick(
			['Simple Api', 'Advanced Api', 'Complex Api'],
			{
				placeHolder: 'Select the type of Api folder structure you want to create',
				canPickMany: false
			}
		);

		if (!apiType) {
			vscode.window.showErrorMessage('An API Type needs to be selected');
			return;
		}

		await createApiFolder(apiType);
	});

	context.subscriptions.push(generateFolder);
}

// This method is called when your extension is deactivated
export function deactivate() { }
