# DAUKUN Download

DAUKUNのWindows・Android・iOS向けダウンロード案内。

## GitHub Pages

公開対象: `main` ブランチの `/(root)` フォルダー。
`Settings > Pages > Build and deployment` で `Deploy from a branch` を選び、`main` と `/(root)` を指定します。

- Windows: v1.13.21、64bit、19,747,040 bytes。GitHub Releasesの `windows-v1.13.21` からEXEを配布。
- Android: v1.13.24ベータ、697,772,042 bytes。GitHub Releasesの `android-v1.13.24-beta` からAPKを直接配布。universal / debugビルド。
- iOS: 対応準備中。

AndroidとWindowsの配布バージョンは異なります。ファイル名だけでなく、EXEのProductVersion・APKのversionNameも確認しています。

## 配布ファイルのSHA-256

- `DAUKUN_1.13.21_x64-setup.exe`: `c324a90d0b37199719d46cd01b9356c3319edfc9a74bb976b53ffe2a6ff4dd62`
- `DAUKUN_1.13.24_android-beta.apk`: `32ae626f2edeeaf6d6b2330d8a8ddeadf5594e596f8a59731b40bda95b6b5778`

配布URL・バージョン・容量・状態・手順は `index.html` でまとめて更新してください。
画像とリンクは相対パスで、GitHub Pagesのリポジトリ配下でも動作します。
サイトには管理者ID、認証キー、アプリの内部設定は含めていません。

アプリ配布ファイルとソースZIPを取り違えないでください。
