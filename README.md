# Study Bridge — version 3

正式网站：https://44everyoung.github.io/study-bridge/ 。本版已获 Ivy 批准发布。

## 这次修改

- 导航：Home → Resources → Notes → Weekly Board → Future Careers → Our Story → Contact；移除 AP 页面。
- 更大的字体和电脑宽屏布局，减少首页与资源页文字。
- Notes：先选 Grade / Subject，显示大号年级、学科和 Chapter 标题，下面只放主题和阅读／下载按钮。
- 加入用户提供的全部数学 PDF：46 个章节、5 个整年级合集、1 份课程导览。原始 PDF 未修改。课程为 Math 8–9、Foundations and Pre-calculus 10、Pre-calculus 11–12。
- English：16 章原始笔记、150 页，Grade 8–12 共用同一套；提供分章及整套下载。保留 Science、Business 的原有 BC 专题笔记。
- Weekly Board：9 组用户截图，57 张原图，可点开逐页阅读。没有捏造发布日期或单篇 Instagram 链接。
- Future Careers：53 个课程兴趣选项、15 个探索方向，可选择 University / College / Both。匹配为探索建议，不是入学评估。

## 预览

直接打开 index.html，或在本目录启动静态服务器。当前本地预览为 http://127.0.0.1:4174/ 。

## 每周更新帖子

打开 weekly-editor.html：
1. 编辑已有帖子，或新增标题、可选日期、可选 Instagram 帖子链接。
2. 每一行填写一张图片路径，如 assets/posts/new-post-1.jpg。图片需一并加入 assets/posts 文件夹。
3. 点击 Download posts-data.js，替换网站目录里的同名文件。
4. 先检查本地预览，再上传该文件及新图片到 GitHub。编辑器本身不会自动发布，也不会自动从 Instagram 同步。

空日期会直接显示帖子；未来日期会在访客本地日期到达后显示。编辑器草稿只存在当前页面，关闭前请下载保存。公开编辑器不具备服务器写入权限，其他访客不能通过它修改你的线上网站。

## 内容编辑

- app.js：页面、筛选、阅读器和交互。
- styles.css：样式；v3 调整位于文件末尾。
- english-library.js：英文章节目录；notes/english/ 存放原始 PDF，所有年级共享。
- math-library.js：数学章节目录。notes/math/ 存放全部原始数学 PDF。
- notes-data.json / notes-data.js：旧专题笔记；tools/build_notes.py 只重新生成旧专题，不能覆盖或更新用户导入的数学 PDF。
- career-data.js：职业、专业及学校官网映射。来源记录见 CAREER_SOURCES.md。
- posts-data.js：Weekly Board 帖子顺序、图片、可选日期和链接。
- library.js：Resources 外部链接。

## 更新 GitHub Pages

项目：https://github.com/44everyoung/study-bridge
发布来源：main 分支 / (root)。

上传本目录内容并保留 assets/posts/、notes/math/ 等路径，不要只上传 ZIP。覆盖原有的 index.html、app.js、styles.css、library.js 等改动文件，同时添加新目录、career-data.js、math-library.js、posts-data.js、weekly-editor.html。提交后 GitHub Pages 自动更新。上传 main 会更新公开网站，因此应先确认本地预览。

原有 AP PDF 保留在源文件历史包中，但新版没有 AP 入口、笔记卡片或下载链接。后续如需清理旧文件可另行处理。

## 首页调整 — October 25, 2026

首页恢复原来的笔记卡片视觉与学科导航，保留 Notes / Resources / Practice 入口，并新增单篇 Weekly Board 特色区域。Weekly Board 页面也只展示本周选中的一组帖子；其余八组保留供以后使用。当前展示第一组 “4 things every high school student should know”。在 weekly-editor.html 点击 Feature this week 后下载更新文件即可更换。
