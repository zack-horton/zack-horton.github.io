# personal-website


To use this project template system:

1. For each new project:
   * Create a new HTML file in the [projects](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) folder using the same structure as `data-analysis.html`
   * Add the project data to the [projects](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) array in [script.js](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
2. The project data structure in [script.js](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) supports:
   * Basic project information (title, description, tags)
   * Links to GitHub and LinkedIn
   * PDF presentation embedding
   * Technology stack with icons
   * Collaborator information with LinkedIn profiles
   * Additional custom links
3. The navigation works in two ways:
   * Browser back button works normally
   * Custom back button in the top-left corner returns to the main page
4. For technology icons:
   * Place icon images in [tech-icons](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
   * Use SVG icons for best quality
   * Reference them in the project data using the filename
5. For collaborator images:
   * Place profile images in [collaborators](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
   * Use square images for best results
