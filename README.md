# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

**Linting: Tailwind `@plugin`**

- **Why:** Tailwind CSS v4 supports the `@plugin` at-rule inside CSS, but some editors and linters (VS Code built-in CSS linting, Stylelint) may flag it as an "unknown at-rule".
- **What I added:** A project Stylelint config at `./.stylelintrc.cjs` that sets `customSyntax: 'postcss'` and configures `at-rule-no-unknown` to ignore `plugin` and common Tailwind directives.
- **Quick fix (editor only):** If you prefer an editor-only change, add the following to `.vscode/settings.json`:

```json
{
 "css.lint.unknownAtRules": "ignore",
 "less.lint.unknownAtRules": "ignore",
 "scss.lint.unknownAtRules": "ignore"
}
```

- **Install (if you use Stylelint):**

```powershell
npm install -D stylelint stylelint-config-recommended postcss
```

If you'd like this note reworded or moved to a different doc, tell me where and I'll update it.
