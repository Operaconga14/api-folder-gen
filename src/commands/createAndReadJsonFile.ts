import * as fsp from "fs/promises";
import os from "os";
import { extensions, messages, packageJsonPath, showErrorMessage, showInformationMessage } from "../utils/config";
import { runPackageJsonCommand } from "./runNodeCommand";

export async function createAndReadJsonFile(extensionType: string) {
    await runPackageJsonCommand();
    try {
        const data = await fsp.readFile(packageJsonPath, "utf-8");
        const packageJson = JSON.parse(data);

        packageJson.description = `${packageJson.name}`;
        packageJson.author = os.userInfo().username;

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
