import React from "react";
import { Button, Card, Select, Header, Footer } from "@/components";

// Image constants from Figma
const imgEffect = "http://localhost:3845/assets/ae612e02a1b49fd29f48f38129eb03278a20c018.png";
const imgIllustration = "http://localhost:3845/assets/2a919d9e34012f36b998908aaadff94b84bb3efe.png";
const imgLogo = "http://localhost:3845/assets/987b0d76eb8d2c49da744fb16144560807078253.png";
const imgLogo1 = "http://localhost:3845/assets/f477f80f4ba0246bad117e9c5bf1f4675bd200e0.png";
const imgLogo2 = "http://localhost:3845/assets/1e27ffec9ac159ef4a5c6fe486dd0bef56f4f9bd.png";
const imgLogo3 = "http://localhost:3845/assets/fd2615b05b422faf7d33f65735a407efae1b619c.png";
const imgLogo4 = "http://localhost:3845/assets/07b148e4cca0b5bcca31a20f99ddea45e2bd457f.png";
const imgLogo5 = "http://localhost:3845/assets/5b6663cdd99eeb377abc3c1999cb0d0affc25bd1.png";
const imgLogo6 = "http://localhost:3845/assets/15d1f5b40729f8e1d05af9fd7cadd932543fd26f.png";
const imgImage = "http://localhost:3845/assets/2a776d2988cc3a6c62946a7c358b3bba583f3ca7.png";
const imgImage1 = "http://localhost:3845/assets/190cec27115a3beaba644f4b43db9dac23ab9b00.png";
const imgLogo7 = "http://localhost:3845/assets/f4804208fb457646c3060913a576e12724ae9e03.png";
const imgImage2 = "http://localhost:3845/assets/255d44a1dfb5d44a1c0bcd983d26c7cda84b751d.png";
const imgLogo8 = "http://localhost:3845/assets/2ff00a131a9e9091792216df5739d798e8dec036.png";
const imgImage3 = "http://localhost:3845/assets/23d636916eaf3c104dcf55879ad332ef35c57c10.png";
const imgImage4 = "http://localhost:3845/assets/d743fef90111ed7e00b2d33c407610c7e619a1c5.png";
const imgImage5 = "http://localhost:3845/assets/baaed22e64999ef9f5d332bb177ba2e364d38a50.png";
const imgAdjustLight = "http://localhost:3845/assets/4ccd903f5c1fbb7eea99ae954d35a5ba4d62532e.svg";
const imgBackground = "http://localhost:3845/assets/f310d9f2232aa8fc7382d61f133016cdf8e4d6cd.svg";

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
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Visual Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute bottom-0 left-0 h-full w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${imgEffect}')` }}
          />
          <div className="absolute left-1/2 top-[202px] h-32 w-32 -translate-x-1/2">
            <img alt="" className="h-full w-full object-contain" src={imgAdjustLight} />
          </div>
          <div className="absolute bottom-0 left-[30px] flex h-[306px] w-[340px] items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <div 
                className="h-[306px] w-[340px] bg-cover bg-no-repeat bg-top-left"
                style={{ backgroundImage: `url('${imgIllustration}')` }}
              />
            </div>
          </div>
        </div>
        
        {/* Floating Points */}
        <div className="absolute left-1/2 top-[194px] h-[147px] w-[158px] -translate-x-1/2">
          {/* Point 1 - 遺伝子記憶領域 */}
          <div className="absolute left-0 top-[67px] flex flex-col items-center gap-2">
            <div className="relative h-20 w-20">
              <img alt="" className="h-full w-full" src={imgBackground} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xs font-bold text-fuchsia-700">遺伝子</p>
                <p className="text-xs font-bold text-fuchsia-700">記憶領域</p>
              </div>
            </div>
          </div>
          
          {/* Point 2 - 量子論的演算能力 */}
          <div className="absolute left-[39px] top-0 flex flex-col items-center gap-2">
            <div className="relative h-20 w-20">
              <img alt="" className="h-full w-full" src={imgBackground} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xs font-bold text-fuchsia-700">量子論的</p>
                <p className="text-xs font-bold text-fuchsia-700">演算能力</p>
              </div>
            </div>
          </div>
          
          {/* Point 3 - 並行世界動力炉 */}
          <div className="absolute left-[78px] top-[67px] flex flex-col items-center gap-2">
            <div className="relative h-20 w-20">
              <img alt="" className="h-full w-full" src={imgBackground} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xs font-bold text-fuchsia-700">並行世界</p>
                <p className="text-xs font-bold text-fuchsia-700">動力炉</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="absolute left-1/2 top-[369px] -translate-x-1/2 text-center">
          <p className="text-xs text-sky-50 [text-shadow:rgba(0,0,0,0.5)_0px_0px_4px]">
            ※のべ2,141意識個体の感想スコア9.2/10点、感じ方には差があります
          </p>
        </div>
        
        {/* Main Heading */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center text-sky-50 shadow-[0px_0px_8px_0px_#06b6d4]">
          <div className="mb-1">
            <span className="text-sm font-bold">起源肉体以上の駆動感</span>
            <span className="text-xs">※</span>
          </div>
          <div className="text-2xl font-bold leading-8">
            <p className="mb-0">あなたの精神感応を</p>
            <p>最も高める電脳義体が分かる</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-slate-100 px-4 py-6">
        <div className="mx-auto max-w-md space-y-5">
          <div className="text-center">
            <p className="text-xl">
              <span className="font-bold text-sky-600">0.02秒</span>
              でガイア管理者と意識接続
            </p>
            <p className="text-xl">
              <span className="font-bold text-sky-600">ブレインユニバース上</span>
              での比較！
            </p>
          </div>
          
          <div className="space-y-3">
            <Select
              label="並行世界区分"
              placeholder="選択してください"
              options={parallelWorldOptions}
            />
            
            <div className="space-y-1">
              <label className="text-sm text-slate-900">遺伝子番号</label>
              <input
                type="text"
                placeholder="例: 1234567890123456789012345678901234567890"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900"
              />
              <p className="text-xs text-slate-600">下256桁を入力ください</p>
            </div>
            
            <Select
              label="メタ・ヒューマン区分"
              placeholder="選択してください"
              options={metaHumanOptions}
              helpText="カルダシェフスケールが1未満の世界では「区分無し」を選択してください"
            />
          </div>
          
          <Button
            primaryLabel="今すぐ資料請求する"
            secondaryLabel="無料"
            color="accent"
          />
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white px-4 py-6">
        <div className="mx-auto max-w-md space-y-5">
          <div className="text-center">
            <p className="text-xl">
              <span className="font-bold text-sky-600">精神同期精度ξランク</span>
              以上の
            </p>
            <p className="text-xl">一流義体メーカーのみを紹介！</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-5">
            {[imgLogo, imgLogo1, imgLogo2, imgLogo3, imgLogo4, imgLogo5, imgLogo6].map((logo, index) => (
              <div
                key={index}
                className="h-12 w-20 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${logo}')` }}
              />
            ))}
          </div>
          
          <Button
            primaryLabel="資料請求の情報入力に進む"
            color="main"
          />
        </div>
      </section>

      {/* Cases Section */}
      <section className="bg-slate-100 px-4 py-6">
        <div className="mx-auto max-w-md space-y-5">
          <div className="text-center">
            <p className="text-xl">Neuroware Guideを使えば</p>
            <p className="text-xl">こんな電脳義体が手に入る！</p>
          </div>
          
          <div className="space-y-4">
            {/* Case 1 */}
            <Card className="relative">
              <div 
                className="h-48 w-full bg-cover bg-center bg-no-repeat rounded-t-lg"
                style={{ backgroundImage: `url('${imgImage}')` }}
              />
              <Card.Content className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  腕力向上はもちろん、外部BPUとしての演算補助も便利！
                </h3>
                <div>
                  <p className="text-xs text-slate-500">ゾルタクスアイゼン様</p>
                  <p className="text-sm text-slate-900">
                    地元の腕相撲大会でどうしても優勝したくて、電脳義体に頼ることにしました。
                    ルール無用部門なのでこれで優勝できると思います。
                  </p>
                </div>
              </Card.Content>
              <div 
                className="absolute left-4 top-4 h-12 w-10 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgLogo1}')` }}
              />
            </Card>
            
            {/* Case 2 */}
            <Card className="relative">
              <div 
                className="h-48 w-full bg-cover bg-center bg-no-repeat rounded-t-lg"
                style={{ backgroundImage: `url('${imgImage1}')` }}
              />
              <Card.Content className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  隣星のスーパーまでの買い物も、あっという間に！
                </h3>
                <div>
                  <p className="text-xs text-slate-500">さき さのばし様</p>
                  <p className="text-sm text-slate-900">
                    隣星のスーパーの方が牛乳が10円安いのですが、2パーセクも離れているので
                    買いに行くのが大変でした。けど、ワープドライブ機能でひとっ飛びです。
                  </p>
                </div>
              </Card.Content>
              <div 
                className="absolute left-4 top-4 h-8 w-16 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgLogo7}')` }}
              />
            </Card>
            
            {/* Case 3 */}
            <Card className="relative">
              <div 
                className="h-48 w-full bg-cover bg-center bg-no-repeat rounded-t-lg"
                style={{ backgroundImage: `url('${imgImage2}')` }}
              />
              <Card.Content className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  人の名前を忘れる心配から解放されました
                </h3>
                <div>
                  <p className="text-xs text-slate-500">目玉の親父様</p>
                  <p className="text-sm text-slate-900">
                    最近はどうも人の名前を忘れがちで、ごまかしごまかしコミュニケーションを
                    取っていました。しかしこれで視界に名前や年齢、会社情報などが全て映るので
                    もう心配しなくて済みます。
                  </p>
                </div>
              </Card.Content>
              <div 
                className="absolute left-4 top-4 h-12 w-11 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgLogo8}')` }}
              />
            </Card>
          </div>
          
          <Button
            primaryLabel="資料請求の情報入力に進む"
            color="main"
          />
        </div>
      </section>

      {/* Points Section */}
      <section className="bg-white px-4 py-6">
        <div className="mx-auto max-w-md space-y-5">
          <h2 className="text-center text-xl text-slate-900">
            Neuroware Guideが選ばれる3つの理由
          </h2>
          
          <div className="space-y-2">
            {/* Point 1 */}
            <div className="flex gap-3 rounded border border-slate-300 bg-white p-0">
              <div 
                className="h-[100px] w-[100px] shrink-0 rounded-bl rounded-tl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgImage3}')` }}
              />
              <div className="flex grow flex-col justify-center space-y-1 py-1 pr-2">
                <p className="text-sm italic text-slate-500">01</p>
                <p className="text-base leading-tight">
                  <span className="font-bold text-sky-600">遺伝子情報ベースレコメンド</span>
                  による電脳義体構築
                </p>
              </div>
            </div>
            
            {/* Point 2 */}
            <div className="flex gap-3 rounded border border-slate-300 bg-white p-0">
              <div 
                className="h-[100px] w-[100px] shrink-0 rounded-bl rounded-tl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgImage4}')` }}
              />
              <div className="flex grow flex-col justify-center space-y-1 py-1 pr-2">
                <p className="text-sm italic text-slate-500">02</p>
                <p className="text-base leading-tight">
                  <span className="font-bold text-sky-600">多元解釈</span>
                  <span className="text-xs font-bold text-sky-600">※1</span>
                  <span className="font-bold text-sky-600">肢体シミュレーション</span>
                  事前検査
                </p>
              </div>
            </div>
            
            {/* Point 3 */}
            <div className="flex gap-3 rounded border border-slate-300 bg-white p-0">
              <div 
                className="h-[100px] w-[100px] shrink-0 rounded-bl rounded-tl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${imgImage5}')` }}
              />
              <div className="flex grow flex-col justify-center space-y-1 py-1 pr-2">
                <p className="text-sm italic text-slate-500">03</p>
                <p className="text-base leading-tight">
                  亜光速試装による
                  <span className="font-bold text-sky-600">実質無限</span>
                  <span className="text-xs font-bold text-sky-600">※2</span>
                  <span className="font-bold text-sky-600">トライアル</span>
                </p>
              </div>
            </div>
            
            <div className="text-center text-xs text-slate-600">
              <p>※1: 次元ビヨンド証の種別により5~8次元までのいずれかを提供します。</p>
              <p>※2: 光速の99.5％達成による相対時間の提供を指します。</p>
            </div>
          </div>
          
          <Button
            primaryLabel="資料請求の情報入力に進む"
            color="main"
          />
        </div>
      </section>

      {/* Final Form Section */}
      <section className="bg-slate-100 px-4 py-6">
        <div className="mx-auto max-w-md space-y-5">
          <div className="text-center">
            <p className="text-xl">
              マルチバース累計
              <span className="font-bold text-sky-600">4澗人</span>
              の利用実績
            </p>
            <p className="text-xl">
              資料請求は
              <span className="font-bold text-sky-600">無料</span>
              ！
            </p>
          </div>
          
          <div className="space-y-3">
            <Select
              label="並行世界区分"
              placeholder="選択してください"
              options={parallelWorldOptions}
            />
            
            <div className="space-y-1">
              <label className="text-sm text-slate-900">遺伝子番号</label>
              <input
                type="text"
                placeholder="例: 1234567890123456789012345678901234567890"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900"
              />
              <p className="text-xs text-slate-600">下256桁を入力ください</p>
            </div>
            
            <Select
              label="メタ・ヒューマン区分"
              placeholder="選択してください"
              options={metaHumanOptions}
              helpText="カルダシェフスケールが1未満の世界では「区分無し」を選択してください"
            />
          </div>
          
          <Button
            primaryLabel="今すぐ資料請求する"
            secondaryLabel="無料"
            color="accent"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}