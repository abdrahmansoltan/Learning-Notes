# INDEX

- [INDEX](#index)
  - [Development Experience](#development-experience)
  - [Vue CLI](#vue-cli)
    - [Adding packages (vue vs npm)](#adding-packages-vue-vs-npm)

---

## Development Experience

we use development-server for:

- saved changes should be auto-detected and page should reload/update automatically
- IDE should provide better auto-completion, snippets and hints
- we should be able to split code into multiple files and export/import via `ES-modules`

---

## Vue CLI

- it enable us to use files with `.vue` extension which has 3 sections (`HTML` + `script` + `style`)
  - This is called **"single file components"**
- it works using a **"Build Workflow"**
  - which takes our code and do a `Build Step` to change code to use standard Javascript code that works on the browser

### Adding packages (vue vs npm)

for installing packages we can use `npm install <pkg>` or we can make use of the power of `vue-cli` by using `vue add <pkg>`

- benefits:
  - this will not only download and fetch the dependency(package), but also will create some basic set of files and some boilerplate code to get started
  - it's designed to add a technology to a vue project