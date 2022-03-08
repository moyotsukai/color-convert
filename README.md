# 使い方
```
npx create-next-app project-name --example https://github.com/Shinchan-git/template-next-emotion
```

# 設定内容
- Next.js
```
npx create-next-app project-name
```

- TypeScript
```
touch tsconfig.json
```
```
npm install --save-dev typescript @types/react @types/node
```

- Emotion
```
npm install @emotion/react
```
```
npm install --save-dev @emotion/babel-preset-css-prop
```
```
touch .babelrc
```
```
//.babelrc
{
  "presets": [
    "next/babel",
    "@emotion/babel-preset-css-prop"
  ]
}
```
```
//tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react",
    "types": [
      "@emotion/react",
      "@emotion/react/types/css-prop"
    ]
  }
}
```

- global.css

- _document.tsx  
Noto Sans JP (Regular 400)を追加

- その他  
log関数を作成  
Footerを作成し_app.tsxに追加
