import Link from "next/link";
import { Button, Card, Select, TextField } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">電脳義肢一括見積もり</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            最先端のサイバネティック技術で、あなたの能力を拡張。
            複数の電脳義肢メーカーから最適な見積もりを一括取得できます。
          </p>
          <Link href="/quote">
            <Button primaryLabel="無料見積もりを開始" />
          </Link>
        </div>
        <Select
          label="メーカー"
          placeholder="メーカーを選択"
          options={[
            { value: "メーカーA", label: "メーカーA" },
            { value: "メーカーB", label: "メーカーB" },
            { value: "メーカーC", label: "メーカーC" },
          ]}
        />
        <TextField label="お名前" placeholder="お名前を入力" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          なぜ電脳義肢が選ばれるのか
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Button primaryLabel="見積もりを開始" secondaryLabel="無料" />
          <Card>
            <Card.Header>
              <Card.Title>🚀 高性能処理能力</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                量子プロセッサーを搭載した電脳義肢は、人間の脳処理速度を100倍向上させ、
                複雑な計算やデータ解析を瞬時に実行できます。
              </p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>🔒 完全セキュリティ</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                軍事レベルの暗号化技術と多層防御システムにより、
                あなたの思考とデータを外部からの不正アクセスから完全に保護します。
              </p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>🌐 ネットワーク接続</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                高速6G通信により、いつでもどこでもクラウドネットワークに接続。
                世界中の情報にリアルタイムでアクセス可能です。
              </p>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            製品ラインナップ
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <Card.Content>
                <div className="mb-4 text-4xl">🧠</div>
                <h3 className="mb-2 font-semibold">脳拡張チップ</h3>
                <p className="text-sm text-gray-600">
                  記憶容量無制限・処理速度向上
                </p>
              </Card.Content>
            </Card>

            <Card className="text-center">
              <Card.Content>
                <div className="mb-4 text-4xl">👁️</div>
                <h3 className="mb-2 font-semibold">視覚強化システム</h3>
                <p className="text-sm text-gray-600">
                  暗視・望遠・AR表示機能搭載
                </p>
              </Card.Content>
            </Card>

            <Card className="text-center">
              <Card.Content>
                <div className="mb-4 text-4xl">🦾</div>
                <h3 className="mb-2 font-semibold">機械義手</h3>
                <p className="text-sm text-gray-600">
                  超人的握力・精密作業対応
                </p>
              </Card.Content>
            </Card>

            <Card className="text-center">
              <Card.Content>
                <div className="mb-4 text-4xl">🦿</div>
                <h3 className="mb-2 font-semibold">強化義足</h3>
                <p className="text-sm text-gray-600">
                  時速100km走行・ジャンプ力10倍
                </p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">今すぐ無料見積もりを取得</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg">
            あなたに最適な電脳義肢を見つけて、新しい可能性を開きましょう。
            見積もりは完全無料、わずか5分で完了します。
          </p>
          <Link href="/quote">
            <Button primaryLabel="見積もりを開始する" />
          </Link>
        </div>
      </section>
    </div>
  );
}
