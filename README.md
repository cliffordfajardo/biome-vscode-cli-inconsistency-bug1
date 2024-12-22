# Bug report

## Prerequistes
Ensure you have the [biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) installed in your vscode.

## Setup
```sh
# install dependencies
npm install
```

## Issue
I setup biome in my typescript project & the `format` behavior is inconsistent between the biome CLI and VSCode extension.

## Why is this an issue?
For first time users of biome, it can be confusing and frustrating when the `format` behavior is inconsistent between the CLI and VSCode extension.
Digging into your vscode settings to enable / disable settings to match your workflow is a time-consuming task & defeats the purpose of using linter.
We should try to minimize the difference in behavior between the CLI and VSCode extension & bring delight to users.


## Reproduce inconsistency between CLI and VSCode
```sh
# 1. run the lint command defined in our package.json's scripts section; 
#    you should see no changes being reported
# ----------------------------------------------------
npm run lint

# 2. Open scripts/file1.ts in your editor & save the file &  you should see the file change. I suspect the format on save is no longer using biome & instead using the default vscode formatter settings for javascript/typescript/typescriptreact etc
# ----------------------------------------------------


# 4.  Run `npm run lint` to see biome undo the format on save behavior.
npm run lint


# 5. Uncomment the lines in .vscode/settings.json below the NOTE section
#    Then open scripts/file1.ts in your editor & save the file & you should not see any changes. With the new settings, biome is now using the default vscode formatter.


# 6.  Run `npm run lint` to see biome run lint on the file & you should see no changes.
```

