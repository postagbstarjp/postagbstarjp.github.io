# 研究ウォッチ：新規6記事の図版権利確認

確認日：2026年10月24日。対象版をarXiv v1に固定。これはサイトの管理記録であり、各図の利用条件をサイト全体へ一律に適用するものではありません。

## 判断基準

- arXivに掲載されている事実、無料閲覧、学術的引用、著者名の表示だけを転載許諾としません。各論文自身の概要ページの「view license」とHTML本文のライセンス表示を照合しました。
- 採用するのは著者ら自身の解析・計算図。図とキャプション、関連節に第三者の別権利表示や転載クレジットがないことを確認しました。出版社版・別論文の図・写真には、この許諾を拡張しません。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)は著作者・原典・ライセンスの表示と変更点の明示を条件に利用します。
- [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)のアンモニア図は同ライセンスを保持します。元SVGを無改変で複製し、図と記事の解説文を区別します。今後この図の翻案を配布する場合もShareAlike条件を守る必要があります。図を含む一覧やサイト全体の文章を一律にCC BY-SAへ変更したという意味ではありません。
- 画像の表示縮小、PNG→可逆WebP変換を明示。図内のパネル、目盛、凡例、注記は削除・描き換えしていません。日本語キャプションは紹介記事側の説明です。
- [arXivの再利用案内](https://info.arxiv.org/help/license/reuse.html)と[非独占配布ライセンス](https://arxiv.org/licenses/nonexclusive-distrib/1.0/license.html)を参照。後者はarXivへの配布許諾であり、本サイトの図版転載根拠にはしません。

## ngc6302-pah-formation

- 対応記事：`ngc6302-pah-formation/index.html`
- 原論文：*JWST observations of the planetary nebula NGC 6302 IV: PAH spectral characteristics, formation and evolution*。Nicholas Clark et al.（2026）。
- **採用：原著 Figure 2**。記事内は図1、一覧にも同じファイルの縮小表示を使用。
- 一次根拠：[arXiv v1概要](https://arxiv.org/abs/2610.30441v1)のview license → [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。本文冒頭のLicense表示も一致。
- 原著図・キャプション：https://arxiv.org/html/2610.30441v1#S4.F2
- 取得元画像：https://arxiv.org/html/2610.30441v1/template_spectra.svg
- 選定理由：著者らが星雲内の四つの領域から取り出した代表スペクトルです。横軸は波長、縦軸は表面輝度。縦の破線は主なPAH放射帯、色付きの破線は各スペクトルの連続光、灰色部分は装置由来の影響がある範囲です。領域間の違いが、PAHの状態を比較する出発点になります。
- 別権利確認：採用図は本論文の著者らによる作図。図・キャプション・関連節に、この図を論文の明示ライセンスから除外するクレジットや条件は確認されませんでした。先行研究や解析ソフトの引用を、そのまま第三者の図の転載とみなしたものではありません。
- 加工：原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。
- 配置：`paper-watch/images/ngc6302-pah-formation/template-spectra.svg`（701 × 367、843,360 bytes）。
- 掲載ファイルSHA256：`6c20de435786ee418f157edb8ee3da7834903703ec55a3e8d1d6fa2b40777d6a`
- ページ上のattribution：出典：Nicholas Clark et al.（2026）。© 著者。原著図・キャプション（arXiv v1） · CC BY 4.0。原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。日本語の解説は本サイトによります。
- 原著キャプションの照合点：NGC 6302自身の4領域の代表スペクトル。Orion Barの比較スペクトルを含む図3〜7は今回使わない。灰色は装置由来の影響、破線はPAH位置と連続光。

## krome-x-astrochemistry

- 対応記事：`krome-x-astrochemistry/index.html`
- 原論文：*KROME-X: a GPU-ready library for chemistry and microphysics in astrophysical simulations*。Alessandro Lupi, Tommaso Grassi & Stefano Bovino（2026）。
- **採用：原著 Figure 3**。記事内は図1、一覧にも同じファイルの縮小表示を使用。
- 一次根拠：[arXiv v1概要](https://arxiv.org/abs/2610.28917v1)のview license → [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。本文冒頭のLicense表示も一致。
- 原著図・キャプション：https://arxiv.org/html/2610.28917v1#S5.F3
- 取得元画像：https://arxiv.org/html/2610.28917v1/performance.svg
- 選定理由：著者らが同じ許容誤差の条件で比較した、ベンチマークごとの1セルあたりの計算時間と高速化率です。試験問題によって改善の幅が異なります。ここでの従来コードとの比較と、本文で述べるGPU対CPUの比較は別の試験です。最大の速度比を任意の計算へ適用することはできません。
- 別権利確認：採用図は本論文の著者らによる作図。図・キャプション・関連節に、この図を論文の明示ライセンスから除外するクレジットや条件は確認されませんでした。先行研究や解析ソフトの引用を、そのまま第三者の図の転載とみなしたものではありません。
- 加工：原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。
- 配置：`paper-watch/images/krome-x-astrochemistry/solver-performance.svg`（405 × 269、68,367 bytes）。
- 掲載ファイルSHA256：`86fee6e41528ecc82accdc1778afca3a7ee75f7169780d1ebe76f95c83fa1f1f`
- ページ上のattribution：出典：Alessandro Lupi, Tommaso Grassi & Stefano Bovino（2026）。© 著者。原著図・キャプション（arXiv v1） · CC BY 4.0。原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。日本語の解説は本サイトによります。
- 原著キャプションの照合点：ベンチマークの1セルあたりsolver時間と高速化率。GPU/CPU比較の図7と混同しない。

## ammonia-multiple-velocity-components

- 対応記事：`ammonia-multiple-velocity-components/index.html`
- 原論文：*Ammonia Fitting of Multiple Velocity Components in High-Mass Star-Forming Regions*。T. Withers et al.（2026）。
- **採用：原著 Figure 2**。記事内は図1、一覧にも同じファイルの縮小表示を使用。
- 一次根拠：[arXiv v1概要](https://arxiv.org/abs/2610.28746v1)のview license → [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。本文冒頭のLicense表示も一致。
- 原著図・キャプション：https://arxiv.org/html/2610.28746v1#S3.F2
- 取得元画像：https://arxiv.org/html/2610.28746v1/Figures-RequiresThirdComp_78_49.svg
- 選定理由：著者らがM17の一つの画素で比較したNH₃スペクトルです。上段は一成分、中段は二成分、下段は三成分のフィットで、成分を分けると推定される線幅も変わります。これは全領域の代表値ではなく具体例です。衛星線群の強度にはモデルとのずれも残り、原著では超微細構造の強度異常として議論されています。
- 別権利確認：採用図は本論文の著者らによる作図。図・キャプション・関連節に、この図を論文の明示ライセンスから除外するクレジットや条件は確認されませんでした。先行研究や解析ソフトの引用を、そのまま第三者の図の転載とみなしたものではありません。
- 加工：原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。
- 配置：`paper-watch/images/ammonia-multiple-velocity-components/velocity-components.svg`（429 × 275、211,743 bytes）。
- 掲載ファイルSHA256：`4f3bbe15c0845a0a85b491363cdfc807aff1ff1908df2177cbef853fd9ff22cb`
- ページ上のattribution：出典：T. Withers et al.（2026）。© 著者。原著図・キャプション（arXiv v1） · CC BY-SA 4.0。原著HTMLのSVGを無改変で複製。表示サイズのみCSSで調整。日本語の解説は本サイトによります。
- 原著キャプションの照合点：M17の同一画素の1/2/3成分フィット。超微細構造の強度異常による残差も注記。既存KEYSTONEデータから当該著者らが比較図を作成。

## phosphaethynyl-molecules

- 対応記事：`phosphaethynyl-molecules/index.html`
- 原論文：*A Potential New Dimension of Astrophysical Aromatic Functionalization: Phosphaethynyl (CP) Derivatives*。Reace H. J. Willis, Vincent J. Esposito, Thomas H. Speak, Ilsa R. Cooke & Ryan C. Fortenberry（2026）。
- **採用：原著 Figure 1**。記事内は図1、一覧にも同じファイルの縮小表示を使用。
- 一次根拠：[arXiv v1概要](https://arxiv.org/abs/2610.30509v1)のview license → [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。本文冒頭のLicense表示も一致。
- 原著図・キャプション：https://arxiv.org/html/2610.30509v1#S2.F1
- 取得元画像：https://arxiv.org/html/2610.30509v1/c-C3HCP_PES_Final-wide.png
- 選定理由：著者らが計算したc-C₃H₂とCPの反応のエネルギー図です。数値は反応物を基準にしたエネルギー（kcal/mol）です。橙色と濃灰色の実線は異なる中間体を経る経路、黒い破線は中間体間の水素移動を表します。色の異なる数値には計算法の違いも含まれます。反応物を上回る障壁がないという予測を示す図で、実際の天体内の反応速度や存在量を測ったものではありません。
- 別権利確認：採用図は本論文の著者らによる作図。図・キャプション・関連節に、この図を論文の明示ライセンスから除外するクレジットや条件は確認されませんでした。先行研究や解析ソフトの引用を、そのまま第三者の図の転載とみなしたものではありません。
- 加工：PNGを1655 × 742から1600 × 717 pxへ縮小し、可逆WebPで保存。図の範囲・内容は保持。
- 配置：`paper-watch/images/phosphaethynyl-molecules/reaction-energy.webp`（1600 × 717、66,186 bytes）。
- 掲載ファイルSHA256：`d722e5b97c7c84189e636f439614d80c154028ec298ac2faa036952318a67af4`
- ページ上のattribution：出典：Reace H. J. Willis, Vincent J. Esposito, Thomas H. Speak, Ilsa R. Cooke & Ryan C. Fortenberry（2026）。© 著者。原著図・キャプション（arXiv v1） · CC BY 4.0。PNGを1655 × 742から1600 × 717 pxへ縮小し、可逆WebPで保存。図の範囲・内容は保持。日本語の解説は本サイトによります。
- 原著キャプションの照合点：c-C3H2 + CPのポテンシャルエネルギー面。中間体I1/I2、黒破線は水素移動。著者らの量子化学計算と分子構造図。

## shock-chromosphere-mass-transfer

- 対応記事：`shock-chromosphere-mass-transfer/index.html`
- 原論文：*Enhanced Mass Transfer from Extended Shock-Supported Stellar Chromospheres*。
- 取得・確認元：[arXiv v1概要](https://arxiv.org/abs/2610.29323v1)・[公開本文](https://arxiv.org/html/2610.29323v1)。
- 一次根拠：概要のview license → [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/license.html)。
- **不採用：全図。利用図番号なし、図の取得・配置なし、attributionなし。**
- 不採用理由：著者コメントではPASP査読後の改訂段階。公開原稿のライセンスは非独占配布で、転載を認める個別の出版社条件・許諾は確認できませんでした。
- 対応：本文と書誌情報を整えて図なしで掲載。一覧にも擬似的な論文図や代替画像は追加しません。

## neural-astrochemistry-tmc1

- 対応記事：`neural-astrochemistry-tmc1/index.html`
- 原論文：*A neural-network model to find correlations in astrochemical space*。
- 取得・確認元：[arXiv v1概要](https://arxiv.org/abs/2610.30842v1)・[公開本文](https://arxiv.org/html/2610.30842v1)。
- 一次根拠：概要のview license → [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/license.html)。
- **不採用：全図。利用図番号なし、図の取得・配置なし、attributionなし。**
- 不採用理由：A&A掲載決定の著者コメントはありますが、本原稿の公開版は非独占配布ライセンス。掲載決定や他のA&A論文のCC表示だけから、この原稿の図を転載可能とは推定しません。個別の出版社版ライセンスは確認できませんでした。
- 対応：本文と書誌情報を整えて図なしで掲載。一覧にも擬似的な論文図や代替画像は追加しません。

## 既存3記事と証拠の追跡

- 既存3図は差し替え・加工せず保持。版・図番号・CC BY 4.0の根拠は[sources.md](./sources.md)の各記事記録を参照。既存のattributionも保持。
- 上記の一次根拠URLと図番号を再確認できるよう、版番号を固定しました。今回取得した概要HTMLと本文HTMLのSHA256は以下のとおりです（確認用HTML自体はリポジトリへ再配布しません）。

| arXiv v1 | 概要HTML SHA256 | 本文HTML SHA256 |
| --- | --- | --- |
| 2610.29323 | `30ab0627b17fd2bf15303b03afed41bb6378b758ced45d4858f18bd7e193e373` | `039aa1bb14850323622871a843f31bf6f8e5a320ef8866a1b116dee8dc658c2f` |
| 2610.30441 | `47c785f7b136a414f198465ebda096dc4204d6486fe1078005639022021a0659` | `cf112b555022442e05056cdf7b47e15354d8e3a534938317c693cd99499506f4` |
| 2610.30842 | `5e282ae84237f4abc3fe48f052651a93d052a174a38366ce4ff33ae7161dcbf2` | `034f8828d20ce8ab85166ad60631752b7b451278232ceca5569e11dc0025ab99` |
| 2610.28917 | `e557c2575e107be0f9cb98e20b09ab0c769146f636c005ad2b49e7641ea5a036` | `662baf0e92d3b2c079e15133bb354e3f9a48c4584817399a25037ce8b3b79a07` |
| 2610.28746 | `741b1598b5b5716525711ff6cd0db43bd5ac9e6363fced6312b01e849638bf44` | `04e00df0ae711319e192ff3c4b32733dd079a77c2776cfc8ca94542dfb006e78` |
| 2610.30509 | `8a92ab5bf6d1704305587d397627c16219285d2bf701d94f40a50610bbfbc7ff` | `e875bb15218a94131d647872b9241a7ab29e9b6041ba00741a92452a8c7ef69e` |

## 2026年10月30日追加分

- [Millar（arXiv:2610.36369v1）](https://arxiv.org/html/2610.36369v1)：本文・表3を参照。SiC₇とSiC₈は予測、SiC₆との2〜4倍の比較は観測値を基準とする。図は転載していない。
- [Schultheisほか（arXiv:2610.37385v1）](https://arxiv.org/html/2610.37385v1)：方法、図3・4と結論を参照。年齢較正による差と古い年代の少数標本に注意。図は転載していない。
- [Takeichiほか（arXiv:2610.37574v1）](https://arxiv.org/html/2610.37574v1)：モデルと結論を参照。球対称を仮定し、光度と色の同時再現を検討した。図は転載していない。
- [Suh（arXiv:2610.33991v1）](https://arxiv.org/html/2610.33991v1)：カタログとモデルの限界を参照。70,877件は銀河系の標本。図は転載していない。
- [Darlingほか（arXiv:2610.31766v1）](https://arxiv.org/html/2610.31766v1)：位置測定と不確かさの定義を参照。図は転載していない。
- [Leonhardes-Barbozaほか（arXiv:2610.31755v1）](https://arxiv.org/html/2610.31755v1)：方法、図4、結果と限界を参照。図4は著者らの計算による光度曲線で、図中・キャプションに第三者素材の表示はない。論文v1の [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) のもとで、原著のSVGを無加工で掲載。原図の範囲・軸・色を維持し、日本語キャプションを追加。著者名、原図へのリンク、ライセンスを記事中に記載。権利者は著者。
- [Rudnitskij（2002）出版社書誌・抄録](https://www.cambridge.org/core/journals/publications-of-the-astronomical-society-of-australia/article/molecular-masers-in-variable-stars/1F2651E27482B76B2B16BA6E2EC0ECF6)：19巻4号499–504頁。出版社PDF本文の観測・仮説・提案する検証を参照。検出限界と観測の空白に注意。図は転載していない。

Millarの掲載状態とオンライン公開日は[出版社書誌](https://academic.oup.com/mnras/advance-article/doi/10.1093/mnras/stag2050/9003260)を参照。上記arXiv 6本の版はいずれもv1、各ページにCC BY 4.0が示されている。使用していない図の個別の第三者権利は判定していない。
