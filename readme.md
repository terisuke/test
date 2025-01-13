# AIエディターで作る！インタラクティブエフェクト入門

## このプロジェクトについて

このプロジェクトは、AIエディター（ChatGPTやGitHub Copilotなど）を使って、楽しいビジュアルエフェクトやWebアプリケーションを作る練習ができる教材です。プログラミング初心者の方でも楽しく学べるように構成されています！

## 始める前に必要なもの

1. **テキストエディタ**
   - [Cursor](https://www.cursor.com/)（無料）がおすすめです
   - インストール方法は[こちらの記事](https://qiita.com/nogson/items/5b390ab8e4ccd83b92f1)が参考になります

2. **Node.js**
   - JavaScriptを実行するために必要なソフトウェアです
   - [Node.jsの公式サイト](https://nodejs.org/)から「推奨版」をダウンロードしてインストール
   - インストール方法は[こちらの記事](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)が参考になります

## プロジェクトの構成

このプロジェクトは3つの部分に分かれています：

```
├── 1.prompt-generate/    # AIへの指示文
├── 2.template/          # 簡単な動作確認用ファイル
└── 3.my-app/           # 実践的なアプリケーション
```

## 実行の仕方

### 1. 虹色の波紋エフェクトを試してみる

最も簡単な方法として、まず波紋エフェクトを試してみましょう：

1. `2.template/rainbow-ripples.html` をブラウザ（Chrome、Firefoxなど）で開く
2. 画面をクリックしたり、マウスを動かしたりして遊んでみましょう
3. スマートフォンでも動作します！

### 2. AIエディターでの開発を試してみる

AIエディターを使って自分で作ってみましょう：

1. ChatGPTやGitHub CopilotなどのAIエディターを開く
2. `1.prompt-generate/prompt.md` の内容をAIエディターに貼り付ける
3. AIが生成したコードを新しいHTMLファイルとして保存
4. ブラウザで開いて動作確認

### 3. より本格的なアプリケーションを試す

カウンターアプリケーションを動かしてみましょう：

1. コマンドプロンプト（Windowsの場合）またはターミナル（Macの場合）を開く
2. 以下のコマンドを順番に実行：
   ```bash
   # プロジェクトのフォルダに移動
   cd 3.my-app

   # 必要なファイルをインストール
   npm install

   # アプリケーションを起動
   npm run dev
   ```
3. ブラウザで `http://localhost:3000` を開く

## バグ修正に挑戦！

`3.my-app/src/components/BuggyCounter.tsx` には意図的に配置された8つのバグがあります。
このファイルをAIエディターに見せて、バグの修正方法を聞いてみましょう。

バグの例：
- 画面表示がおかしい
- ボタンを押しても正しくカウントアップしない
- エラーメッセージが表示される

## 困ったときは

1. エラーメッセージが出たら：
   - エラーメッセージをコピーしてAIエディターに質問
   - 「このエラーの意味と修正方法を教えてください」と聞いてみましょう

2. コードの動作が分からないとき：
   - コードの特定の部分をコピーしてAIエディターに
   - 「この部分は何をしているのか説明してください」と聞いてみましょう

3. もっと良いコードにしたいとき：
   - 「このコードをより良くする方法はありますか？」と聞いてみましょう

## ライセンス

このプロジェクトは[MITライセンス](https://opensource.org/licenses/MIT)の下で公開されています。
自由に使用、修正、配布することができます。

## 参考リンク

- [Visual Studio Code入門](https://qiita.com/nogson/items/5b390ab8e4ccd83b92f1)
- [Node.js入門](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)
- [HTMLとCSSの基本](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web)
- [JavaScript入門](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction)