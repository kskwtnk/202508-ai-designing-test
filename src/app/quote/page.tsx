'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, Card, Input, Select } from '@/components'

interface FormData {
  name: string
  email: string
  phone: string
  age: string
  cyborgType: string
  bodyPart: string
  budget: string
  features: string[]
  medicalHistory: string
  expectations: string
}

const cyborgTypeOptions = [
  { value: '', label: '選択してください', disabled: true },
  { value: 'brain', label: '脳拡張チップ' },
  { value: 'eye', label: '視覚強化システム' },
  { value: 'arm', label: '機械義手' },
  { value: 'leg', label: '強化義足' },
  { value: 'full', label: '全身サイボーグ化' }
]

const bodyPartOptions = [
  { value: '', label: '選択してください', disabled: true },
  { value: 'left', label: '左側' },
  { value: 'right', label: '右側' },
  { value: 'both', label: '両側' },
  { value: 'full', label: '全体' }
]

const budgetOptions = [
  { value: '', label: '選択してください', disabled: true },
  { value: '1-5million', label: '100万円 - 500万円' },
  { value: '5-10million', label: '500万円 - 1000万円' },
  { value: '10-50million', label: '1000万円 - 5000万円' },
  { value: '50million+', label: '5000万円以上' }
]

const featureOptions = [
  { id: 'strength', label: '超人的筋力' },
  { id: 'speed', label: '高速移動' },
  { id: 'network', label: 'ネットワーク接続' },
  { id: 'ai', label: 'AI支援' },
  { id: 'stealth', label: 'ステルス機能' },
  { id: 'weapon', label: '武器システム' }
]

export default function QuotePage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    cyborgType: '',
    bodyPart: '',
    budget: '',
    features: [],
    medicalHistory: '',
    expectations: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const handleFeatureChange = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = '名前を入力してください'
    if (!formData.email.trim()) newErrors.email = 'メールアドレスを入力してください'
    if (!formData.phone.trim()) newErrors.phone = '電話番号を入力してください'
    if (!formData.age.trim()) newErrors.age = '年齢を入力してください'
    if (!formData.cyborgType) newErrors.cyborgType = 'サイボーグタイプを選択してください'
    if (!formData.budget) newErrors.budget = '予算を選択してください'

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // フォームデータをlocalStorageに保存（実際のアプリでは適切なAPIに送信）
      localStorage.setItem('quoteFormData', JSON.stringify(formData))
      router.push('/complete')
    }
  }

  const calculateEstimate = (): number => {
    let basePrice = 0
    
    switch (formData.cyborgType) {
      case 'brain':
        basePrice = 5000000
        break
      case 'eye':
        basePrice = 3000000
        break
      case 'arm':
        basePrice = 2000000
        break
      case 'leg':
        basePrice = 2500000
        break
      case 'full':
        basePrice = 50000000
        break
    }

    // 機能による追加料金
    const featurePrice = formData.features.length * 500000

    return basePrice + featurePrice
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            電脳義肢見積もり申請
          </h1>
          <p className="text-gray-600">
            以下の項目を入力して、あなたに最適な見積もりを取得してください
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本情報 */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">基本情報</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="名前 *"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  error={errors.name}
                  placeholder="山田太郎"
                />
                <Input
                  label="年齢 *"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange('age')}
                  error={errors.age}
                  placeholder="25"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Input
                  label="メールアドレス *"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  error={errors.email}
                  placeholder="example@email.com"
                />
                <Input
                  label="電話番号 *"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  error={errors.phone}
                  placeholder="090-0000-0000"
                />
              </div>
            </div>

            {/* サイボーグ仕様 */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">サイボーグ仕様</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="サイボーグタイプ *"
                  options={cyborgTypeOptions}
                  value={formData.cyborgType}
                  onChange={handleInputChange('cyborgType')}
                  error={errors.cyborgType}
                />
                <Select
                  label="対象部位"
                  options={bodyPartOptions}
                  value={formData.bodyPart}
                  onChange={handleInputChange('bodyPart')}
                />
              </div>
              <Select
                label="予算 *"
                options={budgetOptions}
                value={formData.budget}
                onChange={handleInputChange('budget')}
                error={errors.budget}
              />
            </div>

            {/* 希望機能 */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">希望機能</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {featureOptions.map(feature => (
                  <label key={feature.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureChange(feature.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{feature.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 追加情報 */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">追加情報</h2>
              <div className="space-y-4">
                <Input
                  label="既往歴・アレルギー"
                  value={formData.medicalHistory}
                  onChange={handleInputChange('medicalHistory')}
                  placeholder="特になし"
                />
                <Input
                  label="期待する効果"
                  value={formData.expectations}
                  onChange={handleInputChange('expectations')}
                  placeholder="仕事の効率向上、身体能力の向上など"
                />
              </div>
            </div>

            {/* 見積もり表示 */}
            {formData.cyborgType && (
              <Card className="bg-blue-50 border-blue-200">
                <Card.Content>
                  <h3 className="font-semibold text-blue-900 mb-2">概算見積もり</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    ¥{calculateEstimate().toLocaleString()}
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    ※正確な金額は詳細な診断後に決定いたします
                  </p>
                </Card.Content>
              </Card>
            )}

            <div className="flex gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  キャンセル
                </Button>
              </Link>
              <Button type="submit" className="flex-1">
                見積もりを申請する
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}