import { messages, nodeAPIFramework, showClickableInformationMessage, showErrorMessage } from "../utils/config";

export async function showFrameworkDocumentation(framework: string) {
    const frameworkData = Object.values(nodeAPIFramework).find((item) => item.title === framework);

    if (frameworkData) {
        showClickableInformationMessage(frameworkData.title, frameworkData.documentationsite);
    } else {
        showErrorMessage(messages.error.framework_not_found_error);
    }
}
