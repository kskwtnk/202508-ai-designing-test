import { LinkButton, Select, StickyCTA, TextField } from "@/components";
import Image from "next/image";
import { useRef } from "react";
import { getAssetPath } from "@/utils/asset-path";

// Select options data
const parallelWorldOptions = [
  { value: "alpha", label: "アルファ世界線" },
  { value: "beta", label: "ベータ世界線" },
  { value: "gamma", label: "ガンマ世界線" },
];

const metaHumanOptions = [
  { value: "none", label: "区分無し" },
  { value: "enhanced", label: "強化人間" },
  { value: "cybernetic", label: "サイボーグ" },
  { value: "android", label: "アンドロイド" },
];

export default function Top() {
  const firstFormRef = useRef<HTMLElement>(null);
  const finalFormRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col">
      <h1 className="sr-only">Neuroware Guide</h1>

      {/* Main Visual Section */}
      <Image
        src={getAssetPath("/main-visual.webp")}
        alt="起源肉体以上の駆動感。あなたの精神感応を最も高める電脳義体が分かる。"
        className="h-auto w-full"
        width={800}
        height={800}
      />

      {/* Form Section */}
      <section id="first-form" ref={firstFormRef} className="flex flex-col gap-5 bg-slate-100 px-4 pt-5 pb-6">
        <h2 className="text-center text-xl wrap-anywhere break-keep">
          <p>
            <span className="font-bold text-sky-600">0.02秒</span>
            でガイア管理者と意識接続
            <wbr />
            <span className="font-bold text-sky-600">ブレインユニバース上</span>
            での比較！
          </p>
        </h2>
        <div className="flex flex-col gap-y-3">
          <Select
            label="並行世界区分"
            placeholder="選択してください"
            options={parallelWorldOptions}
          />
          <TextField
            label="遺伝子番号"
            placeholder="例: 1234567890123456789012345678901234567890"
            helpText="下256桁を入力ください"
          />
          <Select
            label="メタ・ヒューマン区分"
            placeholder="選択してください"
            options={metaHumanOptions}
            helpText="カルダシェフスケールが1未満の世界では「区分無し」を選択してください"
          />
        </div>
        <LinkButton
          primaryLabel="今すぐ資料請求する"
          secondaryLabel="無料"
          color="accent"
          href="/quote"
        />
      </section>

      {/* Companies Section */}
      <section className="flex flex-col gap-5 bg-white px-4 pt-5 pb-6">
        <h2 className="text-center text-xl wrap-anywhere break-keep">
          <p>
            <span className="font-bold text-sky-600">精神同期精度ξランク</span>
            以上の
            <wbr />
            一流義体メーカーのみを紹介！
          </p>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Image
            src={getAssetPath("/logo-1.webp")}
            alt="Logo 1"
            width={101}
            height={45}
          />
          <Image
            src={getAssetPath("/logo-2.webp")}
            alt="Logo 2"
            width={62}
            height={72}
          />
          <Image
            src={getAssetPath("/logo-3.webp")}
            alt="Logo 3"
            width={119}
            height={47}
          />
          <Image
            src={getAssetPath("/logo-4.webp")}
            alt="Logo 4"
            width={42}
            height={46}
          />
          <Image
            src={getAssetPath("/logo-5.webp")}
            alt="Logo 5"
            width={74}
            height={35}
          />
          <Image
            src={getAssetPath("/logo-6.webp")}
            alt="Logo 6"
            width={91}
            height={50}
          />
          <Image
            src={getAssetPath("/logo-7.webp")}
            alt="Logo 7"
            width={40}
            height={44}
          />
        </div>
        <LinkButton
          primaryLabel="資料請求の情報入力に進む"
          color="main"
          href="#final-form"
        />
      </section>

      {/* Cases Section */}
      <section className="flex flex-col gap-y-5 bg-slate-100 px-4 pt-5 pb-6">
        <h2 className="text-center text-xl wrap-anywhere break-keep">
          <p className="">
            Neuroware Guideを使えば
            <wbr />
            こんな電脳義体が手に入る！
          </p>
        </h2>
        <div className="flex flex-col gap-y-4">
          {/* Case 1 */}
          <div className="relative flex flex-col gap-y-4 rounded-md bg-white px-3 py-4">
            <Image
              src={getAssetPath("/user-1.webp")}
              alt=""
              width={192}
              height={192}
              className="h-auto w-48 self-center"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">
                腕力向上はもちろん、外部BPUとしての演算補助も便利！
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                ゾルタクスアイゼン様
              </p>
              <p className="mt-1 text-sm text-slate-900">
                地元の腕相撲大会でどうしても優勝したくて、電脳義体に頼ることにしました。
                ルール無用部門なのでこれで優勝できると思います。
              </p>
            </div>
            <Image
              src={getAssetPath("/logo-2.webp")}
              alt=""
              width={62}
              height={72}
              className="absolute top-4 left-4 h-12 w-auto"
            />
          </div>
          {/* Case 2 */}
          <div className="relative flex flex-col gap-y-4 rounded-md bg-white px-3 py-4">
            <Image
              src={getAssetPath("/user-2.webp")}
              alt=""
              width={192}
              height={192}
              className="h-auto w-48 self-center"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">
                隣星のスーパーまでの買い物も、あっという間に！
              </h3>
              <p className="mt-2 text-xs text-slate-500">さき さのばし様</p>
              <p className="mt-1 text-sm text-slate-900">
                隣星のスーパーの方が牛乳が10円安いのですが、2パーセクも離れているので買いに行くのが大変でした。けど、ワープドライブ機能でひとっ飛びです。
              </p>
            </div>
            <Image
              src={getAssetPath("/logo-6.webp")}
              alt=""
              width={91}
              height={50}
              className="absolute top-4 left-4 h-10 w-auto"
            />
          </div>
          {/* Case 3 */}
          <div className="relative flex flex-col gap-y-4 rounded-md bg-white px-3 py-4">
            <Image
              src={getAssetPath("/user-3.webp")}
              alt=""
              width={192}
              height={192}
              className="h-auto w-48 self-center"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">
                人の名前を忘れる心配から解放されました
              </h3>
              <p className="mt-2 text-xs text-slate-500">目玉の親父様</p>
              <p className="mt-1 text-sm text-slate-900">
                最近はどうも人の名前を忘れがちで、ごまかしごまかしコミュニケーションを取っていました。しかしこれで視界に名前や年齢、会社情報などが全て映るのでもう心配しなくて済みます。
              </p>
            </div>
            <Image
              src={getAssetPath("/logo-7.webp")}
              alt=""
              width={40}
              height={44}
              className="absolute top-4 left-4 h-10 w-auto"
            />
          </div>
        </div>
        <LinkButton
          primaryLabel="資料請求の情報入力に進む"
          color="main"
          href="#final-form"
        />
      </section>

      {/* Points Section */}
      <section className="flex flex-col gap-5 bg-white px-4 pt-5 pb-6">
        <h2 className="text-center text-xl wrap-anywhere break-keep">
          Neuroware Guideが選ばれる
          <wbr />
          3つの理由
        </h2>
        <div className="flex flex-col gap-y-2">
          {/* Point 1 */}
          <div className="flex items-center gap-3 rounded border border-slate-300 bg-white">
            <Image
              src={getAssetPath("/point-1.webp")}
              alt=""
              width={100}
              height={100}
              className="size-24 shrink-0 rounded-tl-[3px] rounded-bl-[3px]"
            />
            <div className="flex grow flex-col justify-center gap-y-1 pb-1">
              <p className="text-sm text-slate-500 italic">01</p>
              <p className="text-base leading-tight">
                <span className="font-bold text-sky-600">
                  遺伝子情報ベースレコメンド
                </span>
                による電脳義体構築
              </p>
            </div>
          </div>
          {/* Point 2 */}
          <div className="flex items-center gap-3 rounded border border-slate-300 bg-white">
            <Image
              src={getAssetPath("/point-2.webp")}
              alt=""
              width={100}
              height={100}
              className="size-24 shrink-0 rounded-tl-[3px] rounded-bl-[3px]"
            />
            <div className="flex grow flex-col justify-center gap-y-1 pb-1">
              <p className="text-sm text-slate-500 italic">02</p>
              <p className="text-base leading-tight">
                <span className="font-bold text-sky-600">多元解釈</span>
                <span className="text-xs font-bold text-sky-600">※1</span>
                <span className="font-bold text-sky-600">
                  肢体シミュレーション
                </span>
                事前検査
              </p>
            </div>
          </div>
          {/* Point 3 */}
          <div className="flex items-center gap-3 rounded border border-slate-300 bg-white">
            <Image
              src={getAssetPath("/point-3.webp")}
              alt=""
              width={100}
              height={100}
              className="size-24 shrink-0 rounded-tl-[3px] rounded-bl-[3px]"
            />
            <div className="flex grow flex-col justify-center gap-y-1 pb-1">
              <p className="text-sm text-slate-500 italic">03</p>
              <p className="text-base leading-tight">
                亜光速試装による
                <span className="font-bold text-sky-600">実質無限</span>
                <span className="text-xs font-bold text-sky-600">※2</span>
                <span className="font-bold text-sky-600">トライアル</span>
              </p>
            </div>
          </div>

          <div className="text-center text-[0.625rem] text-slate-600">
            <p>
              ※1: 次元ビヨンド証の種別により5~8次元までのいずれかを提供します。
            </p>
            <p>※2: 光速の99.5%達成による相対時間の提供を指します。</p>
          </div>
        </div>
        <LinkButton
          primaryLabel="資料請求の情報入力に進む"
          color="main"
          href="#final-form"
        />
      </section>

      {/* Final Form Section */}
      <section
        id="final-form"
        ref={finalFormRef}
        className="flex flex-col gap-5 bg-slate-100 px-4 pt-5 pb-6"
      >
        <h2 className="text-center text-xl wrap-anywhere break-keep">
          <p>
            マルチバース累計
            <span className="font-bold text-sky-600">4澗人</span>
            の利用実績
            <wbr />
            資料請求は
            <span className="font-bold text-sky-600">無料</span>！
          </p>
        </h2>
        <div className="flex flex-col gap-y-3">
          <Select
            label="並行世界区分"
            placeholder="選択してください"
            options={parallelWorldOptions}
          />
          <TextField
            label="遺伝子番号"
            placeholder="例: 1234567890123456789012345678901234567890"
            helpText="下256桁を入力ください"
          />
          <Select
            label="メタ・ヒューマン区分"
            placeholder="選択してください"
            options={metaHumanOptions}
            helpText="カルダシェフスケールが1未満の世界では「区分無し」を選択してください"
          />
        </div>
        <LinkButton
          primaryLabel="今すぐ資料請求する"
          secondaryLabel="無料"
          color="accent"
          href="/quote"
        />
      </section>

      {/* Sticky CTA */}
      <StickyCTA firstFormRef={firstFormRef} finalFormRef={finalFormRef} />
    </div>
  );
}
