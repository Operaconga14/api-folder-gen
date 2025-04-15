import * as fs from "fs";
import * as path from "path";
import { extensions, messages, showErrorMessage, showInformationMessage, workspaceFolder, messageToFile } from "../utils/config";

export async function createNodeFiles(extensionType: string) {
    switch (extensionType) {
        case extensions.javascript.name:
            fs.writeFileSync(path.join(`${workspaceFolder}`, `server${extensions.javascript.symbol}`), messageToFile.javascript.comments);
            break;

        case extensions.typescript.name:
            fs.writeFileSync(path.join(`${workspaceFolder}`, `server${extensions.typescript.symbol}`), messageToFile.typescript.comments);
            break;

        default:
            break;
    }

    showInformationMessage(`server ${extensionType} ${messages.success.files_creation_success}`);
}
