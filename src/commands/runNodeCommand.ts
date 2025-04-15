import { exec } from "child_process";
import { messages, showErrorMessage, showInformationMessage } from "../utils/config";
import { workspaceFolder } from "../utils/config";

export async function runPackageJsonCommand() {
    if (!workspaceFolder) {
        showErrorMessage(messages.error.workspacefolder_error);
        return;
    }

    return new Promise<void>((resolve, reject) => {
        exec(`npm init -y`, { cwd: workspaceFolder }, (error, stdout, stderr) => {
            if (error) {
                showErrorMessage(`${messages.error.npm_error} ${error.message}`);
                return reject();
            }

            if (stderr) {
                showErrorMessage(`${messages.error.npm_stderror_error} ${stderr}`);
                return reject();
            }

            showInformationMessage(`${messages.success.stdout_success} ${stdout}`);
            resolve();
        });
    });
}
