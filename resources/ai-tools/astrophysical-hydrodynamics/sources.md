# 公開資料・図版の出典

確認日：2026年11月8日。

## 本文の一次資料

- PLUTO: https://plutocode.ph.unito.it/ 、https://plutocode.ph.unito.it/code-overview.html
  - 格子法、Godunov型の有限体積・有限差分法、HD・MHD・特殊相対論的流体、座標系、冷却・散逸過程を確認。
  - 配布と公開機能の区別：https://plutocode.ph.unito.it/download.html
  - 資料：https://plutocode.ph.unito.it/documentation.html
  - テスト問題：https://plutocode.ph.unito.it/Doxygen/Test_Problems/index.html （ページは4.2の資料であり、最新配布版の全機能を示すものではない。）
  - GPU版：https://plutocode.ph.unito.it/pluto-gpu.html
  - 直接取得がタイムアウトするページは公式ページの検索インデックスも参照。バージョン番号は記事で固定しない。
- Athena++: https://www.athena-astro.app/ 、https://github.com/PrincetonUniversity/athena/wiki
  - 次元、座標、AMR、MPI・OpenMPを確認。
  - https://www.astr.tohoku.ac.jp/~tomida/athena/document.html
  - https://www.astr.tohoku.ac.jp/~tomida/athena/tutorial.html
  - 一般相対論的計算はメトリック固定の条件を本文に明記。
- Phantom: https://phantomsph.github.io/ 、https://phantomsph.readthedocs.io/en/latest/
  - 三次元SPH・磁気流体、Fortranを確認。
  - https://phantomsph.readthedocs.io/en/latest/examples/index.html
  - https://phantomsph.readthedocs.io/en/latest/examples/wind.html
  - 自己重力、連星、降着円盤、ダスト、恒星風の例を確認。機能は設定・物理モデルに依存する。

## 掲載図版

`images/grid-and-sph.svg` は本記事のために独自制作した概念図。外部画像・既存図版のトレースは使用していない。実計算の出力ではない。粒子は流体の数値的な表現であり、個々の原子・分子ではない。

## 掲載を見送った図版

[Tde-simulation.jpg](https://commons.wikimedia.org/wiki/File:Tde-simulation.jpg) は、原典の説明でPhantomによる一般相対論的SPHの潮汐破壊計算例と確認できる。著作者・権利者：Danieljamesprice、作品日：2024年8月2日、原画像版：2024年8月30日01:25 UTC、3840×2160、187,298 bytes。

原典のライセンス表示は [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。画像取得環境で原本のダウンロードに失敗したため、記事への転載・改変・変換は行っていない。
