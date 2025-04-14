# Changelog

All notable changes to the **api-folder-gen** extension will be documented in this file.

This project adheres to [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

## Integration of AI-powered Features

-   **Automated Testing:**  
    Auto-generate unit and integration tests based on your project structure.

-   **Smart Code Suggestions:**  
    Get intelligent code assistance for routes, middleware, and service logic.

-   **Python API Folder Generator:**  
    Choose the desired API folder generator option for either Node.js or Python.

-   **Support for Other API Libraries and Packages:**  
    Select from a variety of popular libraries and packages to suit your API development needs.

### Supported API Libraries

The following table outlines the supported libraries for each platform:

| Node.js API Libraries | Python API Libraries |
| --------------------- | -------------------- |
| Express.js            | FastAPI              |
| Koa.js                | Flask                |
| Restify               | Falcon               |
| Polka                 | Sanic                |
| Micro                 | Hug                  |
| Fastify               | Bottle               |

---

## [1.0.0] - 2024-12-17

### Added

-   **API Project Generator**:

    -   Generate structured API projects with three levels of complexity: Simple, Advanced, and Complex.
        -   **Simple**: Basic folders (`controllers`, `routes`).
        -   **Advanced**: Adds `config`, `models`, `middlewares`, `utils`.
        -   **Complex**: Adds `services`, `tests`.

-   **Language Support**:

    -   Select between JavaScript (`server.js`) or TypeScript (`server.ts`).

-   **NPM Integration**:

    -   Option to auto-generate `package.json` with start/dev scripts.
    -   Optionally install key packages like `express`.

-   **VS Code UI Integration**:
    -   Uses Quick Pick menus to guide setup.
    -   Displays success and error messages for better UX.

### Improved

-   **Setup Flow**:

    -   Streamlined user prompts.
    -   Intuitive and guided configuration steps.

-   **Error Handling**:

    -   Informative alerts for missing folders or permissions.
    -   Clean fallback messaging for file system issues.

-   **Feedback System**:
    -   Clear notifications for each major action (e.g., folder creation, file generation, package installation).

### Fixed

-   Folder creation failures due to missing workspace.
-   Path errors when generating server files or installing dependencies.
