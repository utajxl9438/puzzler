## CSE3340 - Hello React Starter

This repository is a **starter React project** for **CSE3340 - Semester Feb 23**.  
It is designed to run easily in **GitHub Codespaces** or on your own machine.

The project uses:
- **React 18**
- **Vite** as the build tool
---

### 1. Using GitHub Codespaces 

1. **Clone the repository on GitHub**

2. **Open in Codespaces**
   - On GitHub, click the **Code** button.
   - Choose the **Codespaces** tab.
   - Click **Create codespace on main**.

3. **Install dependencies inside the Codespace**

   ```bash
   make install
   # or
   npm install
   ```

4. **Run the dev server**

   ```bash
   make dev
   # or
   npm run dev
   ```

5. **Preview the app**
   - Codespaces should detect the Vite dev server (usually on port **5173**).
   - Click the forwarded port to open the React app in a browser.


---

### 2. Project structure

Key files and folders:

- `package.json` – project metadata and npm scripts
- `vite.config.js` – Vite configuration
- `index.html` – entry HTML file
- `src/main.jsx` – React entry point
- `src/App.jsx` – root layout with problem dropdown (do not edit unless instructed)
- `src/styles.css` – global styles
- **`src/problems/`** – **one file per problem**. Each file (e.g. `problem-1.jsx`, `problem-2.jsx`) is a React component. The dropdown on the home page is **built from the files in this folder**: add a new file named `problem-N.jsx` and it will appear in the menu automatically. Edit the problem file to implement each assignment; import and use your own components as needed.
- `.gitignore` – ignores `node_modules`, build output, and other transient files
- `Makefile` – common tasks and submission zip helper

**Problems and the dropdown:** The app discovers problems by scanning `src/problems/problem-*.jsx`. Your last selected problem is saved in the browser (localStorage) so the same problem loads automatically next time you open the app.

---

### 3. NPM scripts

From the project root:

- **Start dev server**

  ```bash
  npm run dev
  ```

- **Build for production**

  ```bash
  npm run build
  ```

- **Preview the production build**

  ```bash
  npm run preview
  ```

Linter commands are configured but minimal; your instructor may extend them later.

---

### 4. Makefile commands

The `Makefile` wraps common commands:

- **Install dependencies**

  ```bash
  make install
  ```

- **Run the dev server**

  ```bash
  make dev
  ```

- **Build the app**

  ```bash
  make build
  ```

- **Create submission zip (important)**

  ```bash
  make submit STUDENT="First_Last"
  ```

This creates a zip file named:

```text
First_Last_CSE3340-Semester-Feb-23.zip
```

Notes:
- The `submit` target uses:

  ```make
  SOURCES := $(shell git ls-files)
  ```

  so **only files tracked by git** are included.
- `node_modules` is **not** included (it is ignored by git via `.gitignore`).
- If you forget to pass `STUDENT`, `make submit` will print an error and exit.
- You must run `git init` and commit your files before `make submit` will work.

Example full workflow:

```bash
git init
git add .
git commit -m "Initial commit for CSE3340 Hello React"
make submit STUDENT="Ada_Lovelace"
```

Resulting file: `Ada_Lovelace_CSE3340-Semester-Feb-23.zip`.

---

### 5. Where to start editing

Students should work in **`src/problems/`**:

- **`src/problems/problem-1.jsx`** through **`problem-5.jsx`** – one file per assignment. Implement each problem in its file; import and use your own components as needed.
- **`src/styles.css`** – adjust global or problem styling if needed.

The root page uses a dropdown that lists every `problem-*.jsx` in `src/problems/`. Your last selection is saved in the browser and auto-loads next time. Do not edit `src/App.jsx` or the build config unless instructed.

---

### 6. Troubleshooting

- **Port already in use**
  - Stop any existing dev server and run `make dev` again.

- **`make submit` says “not a git repository”**
  - Run:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

  - Then rerun:

    ```bash
    make submit STUDENT="First_Last"
    ```

- **Missing `zip` command**
  - On some systems you may need to install `zip`:
    - macOS: usually preinstalled.
    - Linux (Debian/Ubuntu):

      ```bash
      sudo apt-get update && sudo apt-get install -y zip
      ```

If you continue to have issues, capture the full error message and share it with your instructor.

