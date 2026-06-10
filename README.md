# 黒跪カレン Official Links — サイト管理マニュアル

このサイトは **HTML・CSS・最小限のJavaScript** だけで作られた、軽くて速いリンクまとめページです。
GitHub にファイルをアップロードするだけで公開できます。

公開URL：**https://kurokikaren000.github.io/**

---

## ファイル構成

```
kurokikaren000.github.io/
├─ index.html        ← ページ本体（文章・リンクはここを編集）
├─ style.css         ← 見た目（色・デザイン）
├─ script.js         ← 最小限の動き（年表示・上へ戻る）
├─ README.md         ← このマニュアル
└─ assets/
   ├─ profile.webp   ← プロフィール画像（800×800px前後）
   ├─ ogp.webp       ← SNSシェア画像（1200×630px）
   └─ favicon.png    ← タブ・ブックマークのアイコン（512×512px）
```

※ いま入っている画像は仮のデザインです。後から差し替えてください。

---

## 1. GitHubでリポジトリを作成する方法

1. https://github.com/ にログイン（アカウントが無ければ新規作成）。
2. 右上の「＋」→ **New repository** をクリック。
3. **Repository name** に次を **正確に** 入力します。
4. 「Public」を選び、**Create repository** を押す。

## 2. リポジトリ名について（重要）

リポジトリ名は必ず次のとおりにしてください。

```
kurokikaren000.github.io
```

`ユーザー名.github.io` という形にすると、`https://ユーザー名.github.io/` がそのまま公開URLになります（ユーザーサイト）。
名前が1文字でも違うと、このURLでは公開されません。

## 3. ファイルをアップロードする方法

1. 作成したリポジトリのページで **Add file → Upload files** をクリック。
2. `index.html` `style.css` `script.js` `README.md` と **assetsフォルダの中身** をまとめてドラッグ＆ドロップ。
   - `assets` フォルダごとドラッグすればフォルダ構成は保たれます。
3. 下の **Commit changes**（緑のボタン）を押すと保存されます。

> フォルダ構成（`assets/profile.webp` など）が崩れないように注意してください。

## 4. GitHub Pagesを有効にする方法

1. リポジトリの **Settings**（歯車）を開く。
2. 左メニューの **Pages** をクリック。
3. **Build and deployment → Source** を **Deploy from a branch** にする。
4. **Branch** を `main`、フォルダを `/ (root)` にして **Save**。
5. 1〜2分待つと、上部に公開URLが表示されます。

## 5. 公開URL

```
https://kurokikaren000.github.io/
```

反映まで数分かかることがあります。表示されない時は「項目18」を確認してください。

---

## 6. プロフィール画像を変更する方法

1. 新しい画像を **正方形（800×800px前後）** で用意し、ファイル名を `profile.webp` にする。
2. `assets` フォルダ内の `profile.webp` を、同じ名前で上書きアップロードする。
   - GitHub上：`assets` を開く → **Add file → Upload files** → 同名でアップロード → Commit。
3. 反映されない時はブラウザのキャッシュを削除（項目19）。

> WebPの作り方：スマホやPCの写真は、無料の変換サイトやアプリで `.webp` に変換できます。
> JPG/PNGでも表示はできますが、その場合は `index.html` の `assets/profile.webp` を実際のファイル名（例 `assets/profile.jpg`）に書き換えてください。

## 7. OGP画像を変更する方法

OGP画像は、XやLINEでURLを送った時に表示されるサムネイルです。

1. **1200×630px** の画像を `ogp.webp` という名前で用意。
2. `assets/ogp.webp` を上書きアップロード。
3. 画像URLは `index.html` の `<head>` 内、`og:image` と `twitter:image` に
   `https://kurokikaren000.github.io/assets/ogp.webp` と書かれています（絶対URLが必要なのでこのままでOK）。

> シェア画像が古いまま表示される時は、各SNSのキャッシュが原因です。時間をおくか、各社のデバッグツールで再取得すると更新されます。

## 8. faviconを変更する方法

faviconはブラウザのタブやブックマークに出る小さなアイコンです。

1. **512×512px** の画像を `favicon.png` という名前で用意。
2. `assets/favicon.png` を上書きアップロード。

---

## 9. SNSリンクを変更する方法

`index.html` を開き、**「▼ SNS」** のコメントがある部分を探します。
各カードの `href="..."` のURLを書き換えてください。

```html
<a class="card" href="ここにURL" target="_blank" rel="noopener noreferrer">
  <span class="card-head">
    <span class="card-title">表示名（例：X メインアカウント）</span>
    <span class="card-sub">補足説明</span>
  </span>
  ...
</a>
```

プロフィール直下のアイコンリンクは **「▼ プロフィール」** 内の `quicklinks` にあります。

## 10. ファンクラブリンクを変更する方法

`index.html` の **「▼ FAN CLUB」** の部分で、各カードの `href` を書き換えます。
紹介文を変えたい時は、同じセクション内の `<div class="lead">` の文章を編集してください。

## 11. 通販リンクを変更する方法

`index.html` の **「▼ SHOP & DIGITAL」** の各カードの `href` と、`card-title` / `card-sub` / `card-desc` の文章を編集します。
お店を増やしたい時は、カード1つ分（`<a class="card"> ... </a>`）をコピーして貼り付け、中身を変えればOKです。

## 12. Amazonほしい物リストのリンクを変更する方法

`index.html` の **「▼ SUPPORT」** にある `support-card` の `href="..."` を書き換えます。

```html
<a class="support-card" href="ここにほしい物リストのURL" target="_blank" rel="noopener noreferrer">
```

## 13. メールアドレスを変更する方法

メールアドレスは **BOOKING** と **PRIVATE SHOOT** の2セクションに出てきます。
`index.html` で `kurokikaren000@gmail.com` を検索（Ctrl+F / ⌘+F）し、すべて新しいアドレスに置き換えてください。

- ボタンのリンク：`mailto:アドレス?subject=件名`
- 本文に表示している文字：`<a href="mailto:アドレス">アドレス</a>`

件名（`subject=` のうしろ）も自由に変えられます。

## 14. プロフィール文章を変更する方法

`index.html` の **「▼ プロフィール」** の中を編集します。

- 表示名：`<h1 class="name">黒跪カレン<span class="name-en">Kuroki Karen</span></h1>`
- 肩書き：`<p class="role">...</p>`
- キャッチコピー：`<p class="catch">...</p>`
- 自己紹介：`<div class="bio">` 内の各 `<p>...</p>`（段落を増減できます）

## 15. 活動実績を追加・削除する方法

`index.html` の **「▼ PROFILE & WORKS」** にあるリストを編集します。

```html
<ul class="works">
  <li>コスプレイヤー</li>
  <li>新しい実績をここに追加</li>   <!-- ← 行を増やすだけ -->
</ul>
```

削除したい時はその `<li>...</li>` の行を消すだけです。

---

## 16. 独自ドメインを設定する場合（概要）

1. ドメイン会社（お名前.com、Cloudflareなど）でドメインを取得。
2. DNSで GitHub Pages 用のレコードを設定（Aレコード4件、またはCNAME）。
3. リポジトリの **Settings → Pages → Custom domain** にドメインを入力して Save。
4. **Enforce HTTPS** にチェック。

> 独自ドメインにすると、`<head>` の `canonical` と OGP画像のURLも新しいドメインに書き換える必要があります。

## 17. CSSが反映されない場合の確認方法

- `index.html` と `style.css` が **同じ階層（ルート）** にあるか確認。
- `index.html` の `<link rel="stylesheet" href="style.css" />` の綴りが正しいか確認。
- ファイル名の大文字小文字（`Style.css` ではなく `style.css`）に注意。GitHubは区別します。
- それでもダメなら「項目19」のキャッシュ削除を試す。

## 18. GitHub Pagesが表示されない場合の確認方法

- リポジトリ名が `kurokikaren000.github.io` になっているか。
- **Settings → Pages** で Source が `main / root` になっているか。
- 公開直後は反映に数分かかります。少し待って再読み込み。
- `index.html` がルート（`assets` の外）に置かれているか。
- ファイル名は必ず小文字 `index.html`。

## 19. キャッシュを削除して再読み込みする方法

ブラウザが古い表示を覚えている場合があります。

- パソコン：`Ctrl + Shift + R`（Windows） / `⌘ + Shift + R`（Mac）でスーパーリロード。
- スマホ：ブラウザの設定からキャッシュ（閲覧データ）を削除して開き直す。
- シークレット／プライベートウィンドウで開くと、キャッシュなしで確認できます。

---

## 推奨画像サイズ（まとめ）

| ファイル | 用途 | 推奨サイズ |
|---|---|---|
| `assets/profile.webp` | プロフィール画像 | 800×800px 前後（正方形） |
| `assets/ogp.webp` | SNSシェア画像 | 1200×630px |
| `assets/favicon.png` | タブ・ブックマークのアイコン | 512×512px |

画像は軽い方が表示が速くなります。WebP形式・数百KB以内を目安にしてください。

---

## メモ

- このサイトは外部フレームワーク（React等）や重いライブラリを使っていません。
- SNS投稿・YouTube・背景動画・GIFは、表示を速く保つため埋め込んでいません。
- 出演スケジュールはXで告知するため、サイトには掲載していません。
