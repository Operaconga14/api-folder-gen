import { extensions, packageJsonPath, projectDirectory, workspaceFolder } from "./utils/config";
import { createAPIFolderWithAI } from "./commands/createApiFolderWithAi";
import { createNodeAPIFolder } from "./commands/createNodejsApiFolder";
import { createPythonAPIFolder } from "./commands/createPythonApiFolder";

export = {
    extensions,
    packageJsonPath,
    projectDirectory,
    workspaceFolder,
    createAPIFolderWithAI,
    createNodeAPIFolder,
    createPythonAPIFolder
};
