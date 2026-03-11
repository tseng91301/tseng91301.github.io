# 曾敬凱 (Kai) 的個人網站與作品集

此專案由 [Lovable.ai](https://lovable.dev/) 輔助進行，是一個結合個人簡歷、實用小工具、經典小遊戲，以及專案展示的個人專屬網站。

進入實際網頁: [https://tseng91301.github.io/](https://tseng91301.github.io/)

---

## 目錄 (Table of Contents)
- [專案簡介 (Project Overview)](#專案簡介-project-overview)
- [使用說明書 (User Manual)](#使用說明書-user-manual)
  - [首頁 (HomePage)](#首頁-homepage)
  - [小工具 (ToolsPage)](#小工具-toolspage)
  - [小遊戲 (GamesPage)](#小遊戲-gamespage)
  - [專案 (ProjectsPage)](#專案-projectspage)
  - [聯絡資訊 (ContactPage)](#聯絡資訊-contactpage)
- [技術棧 (Technologies Used)](#技術棧-technologies-used)
- [部署方式 (Deployment Strategy)](#部署方式-deployment-strategy)
- [其他資訊 (Other Information)](#其他資訊-other-information)

---

## 專案簡介 (Project Overview)

這個網站是曾敬凱 (Kai) 的個人作品集與展示空間。身為一位熱愛寫程式及騎公路車的大學生，同時具備軟韌體工程師與全端開發者的技能。此網站不僅展示了個人的學經歷、社團活動與工作經驗，還整合了日常開發的實用小工具與小遊戲，供訪客互動體驗。

---

## 使用說明書 (User Manual)

本網站分為幾個主要頁面，您可以透過頂部導覽列(Navbar)前往各個區塊：

### 首頁 (HomePage)
- **內容**：包含個人的自我介紹、就學經歷、參與過的社團、工作經驗，以及個人的休閒興趣。您可以從這裡快速了解我的背景與專業技能。
- **亮點專案**：近期持續開發的「React Native Android 機器人大腦」，嘗試將手機轉變為機器人的核心控制單元。

### 小工具 (ToolsPage)
提供常用的開發小工具，您可以直接在網頁上操作：
- **SHA-256 雜湊工具**：輸入任意文字，轉換出對應的 SHA-256 雜湊值。
- **Base64 編碼/解碼工具**：快速對文字或現有 Base64 字串進行編碼或解碼。
- **微積分計算工具**：支援基本的數學導數計算（例如輸入 `x^n` 的形式）。

### 小遊戲 (GamesPage)
無聊時可以來玩玩經典小遊戲：
- **貪食蛇 (Snake)**：使用鍵盤方向鍵控制，回味經典玩法。
- **踩地雷 (Minesweeper)**：經典的邏輯推理遊戲，挑戰你的掃雷技術。
- **自定義踩地雷**：另一種踩地雷的變體玩法。

### 專案 (ProjectsPage)
- 展示了我過去開發的專案清單，包含「系上原創空間預約管理系統」、「系學會網站」以及「Robot Core by Cellphone」等。
- 每個專案卡片都附有專案介紹、使用的技術標籤 (Tags)，以及前往實際網頁或 GitHub 原始碼的連結。

### 聯絡資訊 (ContactPage)
- 列出了可以與我聯繫的所有管道，包含 Email、Facebook、Instagram 以及 Discord。
- 若有合作需求或想碰面聊聊，也可以透過提供的表單連結，預約時間見面討論。

---

## 技術棧 (Technologies Used)

本專案使用現代前端開發技術建構，確保快速、流暢且具有高度互動性的使用者體驗：
- **核心框架**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **建置工具**: [Vite](https://vitejs.dev/)
- **UI 及樣式**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/) (包含 Radix UI 等無頭組件)
  - [Framer Motion](https://www.framer.com/motion/) (用於平滑過渡與動畫效果)
- **路由**: React Router DOM (支援 HashRouter)
- **其他周邊**: Lucide React 圖示庫、React Hook Form 等。

---

## 部署方式 (Deployment Strategy)

本網站託管於 **GitHub Pages**。
若要在本地端執行或將修改推送到線上，請遵循以下步驟：

### 本地開發 (Local Development)
1. 複製專案並進入資料夾：
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. 安裝相依套件：
   ```bash
   npm install
   ```
3. 啟動本機開發伺服器：
   ```bash
   npm run dev
   ```

### 部署到 GitHub Pages (Deployment)
專案已設定好透過 `actions-gh-pages` 套件進行部署，只要執行下列指令即可建構(build)並自動推送至專案的 `v3-html` 分支：
```bash
npm run deploy
```
*(注意：執行此指令前請確定您對該 GitHub Repository 具有寫入/推送的權限)*

---

## 其他資訊 (Other Information)

- **作者**: 曾敬凱 (Kai)
- **GitHub 主頁**: [https://github.com/tseng91301/](https://github.com/tseng91301/)
- **Lovable 專案位址**: [Lovable.ai Project](https://lovable.dev/projects/a0acbb13-83bb-49e2-bd5e-75353d879105) (此專案初始部分程式碼與設定是由 Lovable.ai 輔助生成)
