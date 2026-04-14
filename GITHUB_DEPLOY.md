# 🚀 Как закинуть портфолио на GitHub и включить GitHub Pages

## Шаг 1: Инициализировать Git локально

```bash
cd d:\github
git init
git config user.name "Maxim Petrov"
git config user.email "maksimpet557@gmail.com"
```

## Шаг 2: Добавить все файлы и сделать первый коммит

```bash
git add .
git commit -m "Initial commit: Portfolio website with Next.js"
```

## Шаг 3: Создать репозиторий на GitHub

1. Перейти на https://github.com/new
2. **Repository name**: `portfolio` (или как вам нравится)
3. **Description**: "Personal portfolio website with Next.js, TypeScript, and Framer Motion"
4. **Public** checkbox - отметить (чтобы было видно)
5. **НЕ инициализировать с README** (у вас уже есть)
6. Нажать **Create repository**

## Шаг 4: Добавить GitHub как remote и запушить

```bash
git remote add origin https://github.com/maksimpet557-dev/portfolio.git
git branch -M main
git push -u origin main
```

## Шаг 5: Настроить GitHub Pages (ВАЖНО!)

### 5A: Построить проект для экспорта

```bash
npm run build
```

Это создаст папку `/out` со статическим сайтом.

### 5B: Добавить `/out` в .gitignore (НЕ коммитим сгенерированные файлы!)

Проверьте, что в `.gitignore` есть:
```
node_modules/
.next/
out/
.env
```

### 5C: Включить GitHub Pages

1. Перейти на GitHub → ваш репозиторий
2. **Settings** → **Pages** (слева)
3. **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` 
   - **Folder**: `/(root)` 
   - Нажать **Save**
4. На GitHub перейти в **npm** или скачать CLI:

```bash
npm install -g gh-pages --save-dev
```

### 5D: Автоматический деплой на GitHub Pages

Добавить в `package.json` скрипт:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d out",
    ...
  }
}
```

Затем запустить:
```bash
npm run deploy
```

Или можно включить **GitHub Actions** для автодеплоя (рекомендую).

## Шаг 6: Включить GitHub Actions для автодеплоя (ЛУЧШИЙ СПОСОБ)

Создать файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: maximpetrov.dev  # (опционально, если есть домен)
```

## 🎯 Полный чек-лист

- [ ] `git init` - инициализировать репозиторий
- [ ] `git add .` и `git commit` - первый коммит
- [ ] Создать репозиторий на GitHub
- [ ] `git remote add origin` - добавить удалённый репозиторий
- [ ] `git push -u origin main` - запушить код
- [ ] `npm run build` - построить проект
- [ ] Настроить GitHub Pages в Settings
- [ ] Включить GitHub Actions деплой (опционально, но рекомендуется)

## ✅ Результат

Через 1-2 минуты сайт будет доступен по адресу:
```
https://maksimpet557-dev.github.io/portfolio/
```

Или если настроить домен:
```
https://maximpetrov.dev
```

## 🔄 Обновления

После каждого обновления просто:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Actions автоматически пересоберёт и перезагрузит сайт! 🚀

---

**Нужна помощь?** Дайте команды по одной - я помогу с каждым шагом!
