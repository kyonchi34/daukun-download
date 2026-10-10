# DAUKUN Download

DAUKUNのWindows・Android・iOS向けダウンロード案内。

## GitHub Pages

公開対象: `main` ブランチの `/(root)` フォルダー。
`Settings > Pages > Build and deployment` で `Deploy from a branch` を選び、`main` と `/(root)` を指定します。

- Windows: v1.13.27、64bit、19,989,452 bytes。GitHub Releasesの `windows-v1.13.27` からEXEを配布。
- Android: v1.13.27ベータ、696,286,014 bytes。GitHub Releasesの `android-v1.13.27-beta` からAPKを直接配布。universal / debugビルド。
- iOS: 対応準備中。

AndroidとWindowsの配布バージョンはともに1.13.27です。ファイル名だけでなく、EXEのProductVersion・APKのversionNameも確認しています。

## 配布ファイルのSHA-256

- `DAUKUN_1.13.27_x64-setup.exe`: `9a8f4c1ed35052df3e40b5d87b4a3914497839736b2fae5a41511a87d54971ad`
- `DAUKUN_1.13.27_android-beta.apk`: `ea3f7841c3153f9fd472a6f1233ca0e7dca72d878d149e553a997f5601b8225b`

1.13.27ではFAN ROOMの画像の点滅を改善しています。ログインにはDAUKUN IDと登録済みパスワードを使います。初回登録・再設定コードは管理者から受け取ってください。

配布URL・バージョン・容量・状態・手順は `index.html` でまとめて更新してください。
画像とリンクは相対パスで、GitHub Pagesのリポジトリ配下でも動作します。
サイトには管理者ID、認証キー、アプリの内部設定は含めていません。

アプリ配布ファイルとソースZIPを取り違えないでください。

