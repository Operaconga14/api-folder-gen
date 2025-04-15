import { exec } from "child_process";
import { messages, showErrorMessage, showInformationMessage, workspaceFolder } from "../utils/config";

export async function runNodeFrameworkCommand(framework: string) {
    return new Promise<void>((resolve, reject) => {
        exec(`npm install ${framework}`, { cwd: workspaceFolder }, (error, stdout, stderr) => {
            if (error) {
                showErrorMessage(`${messages.error.npm_error} ${error.message}`);
            }

            reject(error);

            if (stderr) {
                showErrorMessage(`${messages.error.npm_stderror_error} ${stderr}`);
            }

            showInformationMessage(`${messages.success.stdout_success} ${stdout}`);
            resolve();
        });
    });
}
