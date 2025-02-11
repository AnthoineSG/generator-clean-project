# Dev doc

## Testing project

In this project

1. Edit src folder
2. Add/update templates in `app/templates`
3. Build the project `npm run build`
4. The first time run `npm link` for use project in local

Open random folder and run

```bash
yo clean-project
```

## Utility scripts

### Do a commit with `commitlint`

```bash
git add .

npm run commit # Use commitlint cli

git push
```

### Clean project

```bash
npm run clean
```

### Build before testing or publishing

```bash
npm run build
```

### Check typing

```bash
npm run type_check
```

### Check linter

```bash
npm run lint
// And/Or
npm run format
```
