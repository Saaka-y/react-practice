# React Practice Project

This is a practical practice project for learning React using VS Code and YouTube tutorials.

React学習のための実践的な練習プロジェクトです！VS CodeとYouTubeを使って進めています。

## 📚 Purpose / 目的

- Learn the basics of React (components, props, state, hooks, etc.)
- Practice building components and UI
- Understand modern frontend development workflow

- Reactの基礎（コンポーネント、Props、State、Hooksなど）を学習する
- コンポーネント設計やUIの構築練習
- モダンなフロントエンド開発の流れを体験する

## 🛠️ Tech Stack / 使用技術

- React
- JavaScript
- Next.js
- VS Code
  

## バグについて備忘録

### Node.js

- **問題・症状**  
  `npm run dev` 実行時に毎回バグ（エラー）が発生し、ローカルホストが立ち上がらない。

- **原因**  
  Node.js の最新版（v22以降）は Next.js 15 との互換性に問題がある模様。

- **対応**  
  最新の LTS バージョンを使用していたが、v20 にダウングレード。  
  ※ Homebrew 経由でインストールしていると再起動時に最新バージョンに戻ってしまうことがある。  
  ※ そこで一度アンインストールし、`nvm` 経由で公式コマンドを用いて Node.js v20 をインストールし、デフォルト設定に。  

- **結果**  
  以降はバグが発生していない。  
  ※ 完全に正解かは不明だが、現時点で安定している。

---

### Branch

- **問題・症状**  
  push の度に「ブランチ名 + 2, 3, 4」のような名前のブランチが勝手に作られてしまう。

- **原因（推測）**  
  VS Code の `git Auto fetch` や `git Auto repository detect` などの設定が影響している可能性。

- **対応**  
  これらの自動設定をオフにした。  
  push 時は VS Code の GUI ではなく CLI で、明確にブランチ名を指定して操作している。
