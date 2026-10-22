# Study Bridge — Ivy Ruoyi Zhou

本地完成版，尚未公开发布。面向 BC Grade 8–12，并设独立 AP 分区。

## 打开预览

双击 `index.html` 即可离线查看网站。也可以在此文件夹运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:4173 。Ctrl+C 停止本地服务器。

## 这一版包含什么

- 浅蓝色主题；根据原 logo 的书本元素重新绘制的 SVG 标志。
- Notes：按 Grade 8–12、学科、关键词筛选，13 份 BC 专题笔记。
- AP：单独的 Macroeconomics 入门专题，1 份笔记。
- 14 份笔记均有网页阅读版和两页 PDF（概念、例题、练习、答案）。另有 28 页的合集 PDF，Notes 页底部可以下载。
- Resources：Jacob Clifford、Khan Academy、Purdue OWL、PhET、BC Curriculum、College Board，注明适用程度与付费情况。
- Future Careers：六类探索方向、可尝试的小行动、WorkBC / Job Bank 官方资源。
- Our Story：Ivy 的照片、三段简短介绍，保留社媒 → 图书馆 → 学校 Study Club 的真实顺序。
- Contact：Instagram @studybridgeca；ivyystudyy@gmail.com。
- 保留互动 Math 单元（`#math-unit`）、练习（`#practice`）和学习方法（`#tips`）。

这是第一批专题复习资料，不是所有 BC / AP 课程的完整笔记。年级标签代表建议课程匹配；不同学校教学顺序可能不同。四个学科在 Grade 8–12 每个年级都有至少一份建议适用的笔记；这不代表覆盖该年级所有课程。Business 8–9 为入门能力拓展，并非独立的省级必修课。筛选无匹配项时会显示明确提示。

## 怎么编辑

| 文件 | 用途 |
| --- | --- |
| `notes-data.json` | 笔记原稿、年级、学科、课程名称、例题与答案；优先编辑这里 |
| `notes-data.js` | 网页用的笔记数据；由生成工具同步输出 |
| `library.js` | 外部资源卡片和职业探索内容 |
| `app.js` | 页面结构、个人介绍、联系方式、筛选和互动单元 |
| `content.js` | 互动 Math 测验题目与答案 |
| `styles.css` | 视觉样式；新版浅蓝色样式位于 v2 注释之后 |
| `index.html` | 顶部导航、页脚、网页说明 |
| `assets/logo.svg` | 可编辑矢量标志 |
| `assets/founder.png` | 用户提供的原照片；网页通过 CSS 显示适当比例 |
| `notes/` | 生成好的 PDF，可直接下载或发布 |

每份笔记的 `grades` 是数字数组，例如 `[10]` 或 `[8,9]`；`track` 为 `BC` 或 `AP`。AP 不混入普通年级结果。

### 同步网页与 PDF

网站运行无需安装工具。只有修改 PDF 内容后才需要以下步骤：

```sh
python3 -m pip install -r tools/requirements.txt
python3 tools/build_notes.py
```

工具读取 `notes-data.json`，同时更新网页数据 `notes-data.js` 和所有独立 PDF。默认支持 macOS Arial/Georgia、Windows Arial/Georgia 或 Linux DejaVu 字体。请检查重新生成的文件；工具会要求每份恰好两页。若增加较长内容，需调整布局及页数检查。

页面以 URL fragment 路由，例如 `/#note/cells`；所有本地资源使用相对路径，可以放在 GitHub Pages 子目录。

## 内容与引用

所有笔记的解释、例题和问题为原创，并标注 AI 辅助制作。没有复制 Jacob Clifford 的付费讲义或其他第三方笔记。`source` 链接用于课程背景参考，不表示官方审核或完整课程覆盖。外部资源归原作者所有；链接及访问说明检查于 2026 年 10 月。

用户提供的照片、姓名和联系方式已按要求用于本地网站。站点没有在线报名表、账号、数据库或追踪代码；点击邮箱会打开邮件程序，并不会自动发信。

## Free GitHub Pages deployment — when you approve publishing

These steps publish the site and its source publicly. They have NOT been performed.

1. Unzip the package. Create or sign in to a GitHub account.
2. Create a new **public** repository named `study-bridge`. GitHub Free supports Pages for public repositories. Do not upload private club information or student details.
3. In the repository, choose **Add file → Upload files**. Upload the contents of this folder, not the enclosing folder. `index.html` must be at the repository root alongside `styles.css`, `content.js`, `app.js`, and `bridge.svg`. Include the empty `.nojekyll` file if your file picker shows hidden files (the site also works with GitHub's default static processing).
4. Commit the uploaded files to `main`.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then **Save**.
7. Wait for the Pages deployment to complete. GitHub will show the site URL, normally `https://YOUR-USERNAME.github.io/study-bridge/`. Open the exact URL GitHub provides.
8. Check Home, each subject, quiz feedback/retry, and the mobile menu. Test a direct URL ending in `/#math` and refresh it.

No custom domain is needed: the `github.io` address and eligible Pages hosting are free. Buying a custom domain is optional. Future commits to the selected branch update the published site, so preview edits before committing. To stop publishing, use **Settings → Pages → Unpublish site** if available.

Official instructions (verified October 21, 2026):
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

