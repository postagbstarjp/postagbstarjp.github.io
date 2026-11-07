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

## 2026年10月30日追加記事：図版の確認・掲載記録

各arXiv v1のHTMLには CC BY 4.0 が明示されています。採用図は当該原著中の図とキャプションを個別に確認し、第三者画像の転載や別ライセンスの表示は見当たりません。図中の既発表観測データ・比較研究は各原著のキャプションに出典があります。作者が作成した図をarXiv HTMLの表示画像から取得し、画像自体は変換・クロップせず保存。図番号、著者、原図、ライセンスと日本語解説を記事に表示しています。一覧は同じ画像の縮小表示です。

- T. J. Millar（2026）、[arXiv:2610.36369v1 Figure 1](https://arxiv.org/html/2610.36369v1#S3.F1)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。取得ファイル `irc10216-silicon-carbon-chains/images/abundance.svg`。
- Mathias Schultheis, Maria-Rosa L. Cioni, Samuele Anoardo（2026）、[arXiv:2610.37385v1 Figure 4](https://arxiv.org/html/2610.37385v1#S2.F4)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。取得ファイル `lmc-agb-star-formation-history/images/history.svg`。 他研究の比較結果を含むため原著キャプションの出典を参照。
- Yuma Takeichi, Daichi Tsuna, Daichi Hiramatsu, Morgan MacLeod, Masato Sato（2026）、[arXiv:2610.37574v1 Figure 7](https://arxiv.org/html/2610.37574v1#S4.F7)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。取得ファイル `dust-electron-capture-supernovae/images/light-colour.svg`。 他研究の比較結果を含むため原著キャプションの出典を参照。
- Kyung-Won Suh（2026）、[arXiv:2610.33991v1 Figure 8右](https://arxiv.org/html/2610.33991v1#S4.F8)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。取得ファイル `oxygen-rich-agb-star-catalog/images/colour-magnitude.png`。 右パネルのみ選択。
- Jeremy Darling, Jennie Paine, Matthew Hosek Jr., Shoko Sakai, Stefan Gillessen, Tatsuya Akiba-Lewis, Andrea Ghez, Frank Eisenhauer, Reinhard Genzel（2026）、[arXiv:2610.31766v1 Figure 1](https://arxiv.org/html/2610.31766v1#S1.F1)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。取得ファイル `galactic-center-sio-reference-frame/images/maser-motion.png`。
- Rudnitskij（2002）：出版社版の図の第三者転載許可を確認できないため原著図は不採用。[原著本文](https://doi.org/10.1071/AS02018)を参考に、本サイトで独立に作成した概念図 `variable-star-molecular-masers/images/maser-concept.svg` を掲載。距離・時間の数値は設定せず、推測された因果関係として表示。原著図の複製・改変ではない。
- Naunet Leonhardes-Barboza, Andrea Antoni, Morgan MacLeod, Angela Twum, Enrico Ramirez-Ruiz（2026）：[arXiv:2610.31755v1 Figure 4](https://arxiv.org/html/2610.31755v1#S4.F4)、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。以前から掲載している無加工SVGを維持。


## 2026年11月7日追加：6記事の図版判定

概要のview licenseとarXiv v1 HTMLのLicense表示を照合。採用図はキャプション・関連節・実画像を確認し、写真や転載図、当該図を除外する別権利表示は見当たりませんでした。観測サーベイやソフトウェアの出典は原著を参照し、データの出典と第三者画像の転載を区別しています。画像はバイト単位で無改変、CSSによる表示縮小のみ。原著PDFは配置しません。CC BYは帰属・原典・ライセンス・変更点を表示し、CC BY-SA図は同ライセンスを保持します。今後翻案を配布する場合もShareAlike条件が必要です。記事本文やサイト全体を一律に同ライセンスとするものではありません。

### long-period-carbon-mira

- 原著：Ming To Suen, Kishalay De, Sam Rose, Rajorshi Bhattacharya, Viraj Karambelkar, Michael C. B. Ashley, Cuc Dinh, Nicholas Earley, Danielle Frostig, Matthew Hankins, Charles D. Kilpatrick, Mansi M. Kasliwal, Anna M. Moore, Roberto Soria, Aswin Suresh, Tony Travouillon（2026）、*Infrared spectroscopy of the longest-period Galactic Mira variables from Palomar Gattini-IR: Identification of a candidate thermally pulsing Super-Asymptotic Giant Branch star*。
- 使用版：[arXiv:2610.38685v1](https://arxiv.org/abs/2610.38685v1) ／ [HTML本文](https://arxiv.org/html/2610.38685v1)。
- 判定：原著図は不採用。概要のview licenseとHTML本文はarXivの非独占配布ライセンス。第三者による図の再配布を許す根拠は未確認。
- 候補：Figure 1（光度曲線）、Figure 3（スペクトル）。転載許可が未確認のため画像を取得・配置せず、原著本文にリンク。

### necklace-nebula-kinematics

- 原著：E. Santamaría, J. A. Toalá, L. Sabin, M. A. Guerrero, G. Ramos-Larios（2026）、*A morpho-kinematic view of the Necklace nebula*。
- 使用版：[arXiv:2610.38858v1](https://arxiv.org/abs/2610.38858v1) ／ [HTML本文](https://arxiv.org/html/2610.38858v1)。
- 判定：今回は図なし。arXiv非独占配布ライセンスを転載根拠にしない。
- 出版社受理原稿ページ：https://academic.oup.com/mnras/advance-article/doi/10.1093/mnras/stag2030/8997910 。ブラウザで2026年10月24日公開、© The Author(s) 2026、CC BY 4.0表示を直接確認。したがって論文全体を「転載不可」とは判定しない。
- 再検討した候補：出版社受理原稿 Figure 2（観測とSHAPEモデルの[N II] PV図）。出版社ページのPDFリンクへの取得はセキュリティ検証・配信先への遷移後に失敗し、当該版の実画像と個別の別権利表示を最終照合できなかった。arXivの似た図へ出版社の許諾を無条件に適用せず、画像の取得・公開配置は行わない。
- 対応：記事本文を完成させ、出版社原著とarXiv本文へリンク。確認済みの出版社ライセンスと、未完了の図別照合を区別する。

### long-secondary-period-phase-offsets

- 原著：D. M. Skowron, I. Soszyński, P. Iwanek, P. A. Kołaczek-Szymański（2026）、*Phase Offsets Between the Minimum Light and Radial Velocity in Long Secondary Period Stars*。
- 使用版：[arXiv:2611.07018v1](https://arxiv.org/abs/2611.07018v1) ／ [HTML本文](https://arxiv.org/html/2611.07018v1)。
- 採用：原著 Figure 5。概要のview licenseとHTML冒頭はいずれも[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
- 図・キャプション：https://arxiv.org/html/2611.07018v1#S3.F5
- 図の読み方・選定理由：良質標本の規格化したVバンド光度（各パネル上段）と視線速度（下段）。左からLSP星100個、ミラ型40個、半規則型180個で、狭い画面では上から同じ順に並びます。横軸は光度最小を基準にした位相、赤線は平均です。規格化した図なので、集団間の絶対振幅は比較できません。
- 第三者素材：図・キャプション・関連節に別権利表示なし。各著者による観測解析・計算結果の作図。写真・転載図は含まれない。
- 加工：画像自体は無改変。表示縮小と画面幅による3パネルの配置替えのみ。原著図番号、全著者、©、出典、ライセンス、加工内容を図注に表示。
- 取得元：https://arxiv.org/html/2611.07018v1/usrednione_V_rv_LSP_100.png
  - 配置：`paper-watch/long-secondary-period-phase-offsets/images/lsp.png`（856 × 965 px、278774 bytes）。SHA256：`d2ef981863ccf4651039df0c7ca4c3a5b3acb99e8aa5dc36802d345ad78f2464`。
- 取得元：https://arxiv.org/html/2611.07018v1/usrednione_V_rv_MIRAS_40.png
  - 配置：`paper-watch/long-secondary-period-phase-offsets/images/miras.png`（856 × 965 px、151936 bytes）。SHA256：`38827b3e3c6a58d9535eaa563867c9c7a5fd0102b65901cb4f8410ff23a8f2a7`。
- 取得元：https://arxiv.org/html/2611.07018v1/usrednione_V_rv_SRV_180.png
  - 配置：`paper-watch/long-secondary-period-phase-offsets/images/srv.png`（856 × 965 px、226645 bytes）。SHA256：`b7d08ab2d5a65159d5c59f7437027638e7b502176f0ef48ea5917f06cc7bef36`。

### galah-low-accretion-symbiotic-stars

- 原著：U. Munari, P. Valisa, N. Masetti, M. Fiorucci, M. Perko, B. Jamnik, G. Traven, A. Frigo, J. Bland-Hawthorn, S. Buder, A. R. Casey, G. M. De Silva, P. B. Das, K. C. Freeman, M. R. Hayden, J. Kos, G. F. Lewis, J. Lin, S. L. Martell, K. J. Schlesinger, S. Sharma, J. D. Simpson, D. Stello, D. B. Zucker, T. Zwitter（2026）、*The Galah survey and symbiotic stars. II. Discovery, validation, and intensive follow-up of 44 new systems accreting at the lowest detectable levels*。
- 使用版：[arXiv:2611.05200v1](https://arxiv.org/abs/2611.05200v1) ／ [HTML本文](https://arxiv.org/html/2611.05200v1)。
- 採用：原著 Figure 1。概要のview licenseとHTML冒頭はいずれも[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
- 図・キャプション：https://arxiv.org/html/2611.05200v1#S3.F1
- 図の読み方・選定理由：GaSS 2-38の視線速度（上段）とASAS-SN測光（下段）。左は時刻順、右は分光軌道の周期470日で折り重ねた表示です。上段右の緑線は軌道モデル。Gaiaの平均速度と観測期間、Galahと追跡分光の測定も区別されています。44系のうち一つの例であり、全標本の代表軌道ではありません。
- 第三者素材：図・キャプション・関連節に別権利表示なし。各著者による観測解析・計算結果の作図。写真・転載図は含まれない。
- 加工：画像自体は無改変。表示縮小のみ。原著図番号、全著者、©、出典、ライセンス、加工内容を図注に表示。
- 取得元：https://arxiv.org/html/2611.05200v1/aa60724-26_fig01.png
  - 配置：`paper-watch/galah-low-accretion-symbiotic-stars/images/orbit-light-curve.png`（2025 × 1013 px、259813 bytes）。SHA256：`9798e44f450e1ee7b03fb89a45eb8695e435448895c9ac09418dcbca0de0d5ce`。

### substellar-common-envelope-survivors

- 原著：Nicolas F. Miranda, Alex Mauch-Soriano, Joaquin A. Barraza-Jorquera, Matthias R. Schreiber, Maria Paula Ronco, Felipe Lagos-Vilches（2026）、*Population synthesis of substellar companions surviving common-envelope evolution*。
- 使用版：[arXiv:2611.06549v1](https://arxiv.org/abs/2611.06549v1) ／ [HTML本文](https://arxiv.org/html/2611.06549v1)。
- 採用：原著 Figure 6。概要のview licenseとHTML冒頭はいずれも[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。
- 図・キャプション：https://arxiv.org/html/2611.06549v1#S3.F6
- 図の読み方・選定理由：共通外層進化後に残る伴星の計算上の質量と軌道周期。橙の三角は重力＋熱・効率1、青の丸と緑の四角は内部エネルギー全体を含めた効率0.3と1を表します。上の軌道長半径は代表質量による近似換算、赤破線は伴星がロッシュローブを満たす境界です。観測された天体の分布ではありません。
- 第三者素材：図・キャプション・関連節に別権利表示なし。各著者による観測解析・計算結果の作図。写真・転載図は含まれない。
- 加工：画像自体は無改変。表示縮小のみ。原著図番号、全著者、©、出典、ライセンス、加工内容を図注に表示。
- 取得元：https://arxiv.org/html/2611.06549v1/fig3_postCE_period_mass_survivors_hours.png
  - 配置：`paper-watch/substellar-common-envelope-survivors/images/survivor-period-mass.png`（2012 × 1860 px、147826 bytes）。SHA256：`8b366c3963fc5b6557fae2a3b1f81971183f132e182dcdc35989c79418fd1f4b`。

### verifiable-astrophysics-agent-pipeline

- 原著：Fang Zhou（2026）、*A semi-autonomous multi-agent pipeline for high-energy astrophysics research with enforced provenance and verifiable self-extension*。
- 使用版：[arXiv:2611.05251v1](https://arxiv.org/abs/2611.05251v1) ／ [HTML本文](https://arxiv.org/html/2611.05251v1)。
- 採用：原著 Figure 3。概要のview licenseとHTML冒頭はいずれも[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
- 図・キャプション：https://arxiv.org/html/2611.05251v1#S4.F3
- 図の読み方・選定理由：6観測を5キロ秒ごとの区間に分けた、規格化ストークスパラメータq＝Q/Iとu＝U/Iの分布。点は時間区間、誤差棒は測定の不確かさ、色は観測開始からの経過時間です。各パネル上部は観測IDで、原点からの隔たりと時間変動は異なる情報です。03006001の偏光度は有意検出されていません。
- 第三者素材：図・キャプション・関連節に別権利表示なし。各著者による観測解析・計算結果の作図。写真・転載図は含まれない。
- 加工：画像自体は無改変。表示縮小のみ。原著図番号、全著者、©、出典、ライセンス、加工内容を図注に表示。
- 取得元：https://arxiv.org/html/2611.05251v1/figures/p2_stokes_plane_3x2.png
  - 配置：`paper-watch/verifiable-astrophysics-agent-pipeline/images/stokes-plane.png`（2242 × 1318 px、338270 bytes）。SHA256：`2cfee078ce527223bc30298575f2a842e091525cabeca6dfa6ff34aea6f2716a`。
