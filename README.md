style-config
============

How to use
----------

```bash
npm install --save-dev @kapouer/stylelint-config
```

In package.json:

```json
"stylelint": {
 "extends": "@kapouer/stylelint-config"
}
```

Use .stylelintignore to ignore files:

```text
**/*.*
!**/*.css
node_modules/
/packages/*/*
!/packages/*/ui
!/packages/*/src
```
