import * as fsp from "fs/promises";
import { extensions, messages, packageJsonPath, showErrorMessage, showInformationMessage } from "../utils/config";
import { runPackageJsonCommand } from "./runNodeCommand";

export async function createAndReadJsonFile(extensionType: string) {
    await createPackageJsonFile();
    try {
        const data = await fsp.readFile(packageJsonPath, "utf-8");
        const packageJson = JSON.parse(data);

        packageJson.description = `${packageJson.name}`;

        switch (extensionType) {
            case extensions.javascript.name:
                packageJson.main = `server${extensions.javascript.symbol}`;
                packageJson.scripts = {
                    start: `node server${extensions.javascript.symbol}`,
                    dev: `nodemon server${extensions.javascript.symbol}`
                };
                break;

            case extensions.typescript.name:
                packageJson.main = `server${extensions.typescript.symbol}`;
                packageJson.scripts = {
                    start: `node server${extensions.typescript.symbol}`,
                    dev: `nodemon server${extensions.typescript.symbol}`
                };
                break;

            default:
                break;
        }

        await fsp.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

        showInformationMessage(messages.success.package_json_success);
    } catch (error) {
        showErrorMessage(error);
    }
}

export async function createPackageJsonFile() {
    await runPackageJsonCommand();
}
