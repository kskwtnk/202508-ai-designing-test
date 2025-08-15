'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, Card } from '@/components'

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

const cyborgTypeLabels: Record<string, string> = {
  brain: '脳拡張チップ',
  eye: '視覚強化システム',
  arm: '機械義手',
  leg: '強化義足',
  full: '全身サイボーグ化'
}

const featureLabels: Record<string, string> = {
  strength: '超人的筋力',
  speed: '高速移動',
  network: 'ネットワーク接続',
  ai: 'AI支援',
  stealth: 'ステルス機能',
  weapon: '武器システム'
}

export default function CompletePage() {
  const [formData, setFormData] = useState<FormData | null>(null)

  useEffect(() => {
    const savedData = localStorage.getItem('quoteFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const calculateEstimate = (data: FormData): number => {
    let basePrice = 0
    
    switch (data.cyborgType) {
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

    const featurePrice = data.features.length * 500000
    return basePrice + featurePrice
  }

  const generateQuoteId = (): string => {
    return 'CYB-' + Date.now().toString(36).toUpperCase()
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <Card.Content className="text-center">
            <p className="text-gray-600 mb-4">申請データが見つかりません</p>
            <Link href="/quote">
              <Button>見積もりフォームに戻る</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    )
  }

  const quoteId = generateQuoteId()
  const estimate = calculateEstimate(formData)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            お申し込みありがとうございます！
          </h1>
          <p className="text-gray-600">
            見積もり申請が正常に受理されました
          </p>
        </div>

        <Card className="mb-6">
          <Card.Header>
            <Card.Title>申請内容確認</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">見積もりID</h3>
                <p className="text-lg font-mono bg-gray-100 px-3 py-2 rounded">
                  {quoteId}
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">お客様情報</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">名前:</span>
                    <span className="ml-2 font-medium">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">年齢:</span>
                    <span className="ml-2 font-medium">{formData.age}歳</span>
                  </div>
                  <div>
                    <span className="text-gray-600">メール:</span>
                    <span className="ml-2 font-medium">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">電話:</span>
                    <span className="ml-2 font-medium">{formData.phone}</span>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">サイボーグ仕様</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">タイプ:</span>
                    <span className="ml-2 font-medium">
                      {cyborgTypeLabels[formData.cyborgType]}
                    </span>
                  </div>
                  {formData.bodyPart && (
                    <div>
                      <span className="text-gray-600">対象部位:</span>
                      <span className="ml-2 font-medium">{formData.bodyPart}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-600">予算:</span>
                    <span className="ml-2 font-medium">{formData.budget}</span>
                  </div>
                  {formData.features.length > 0 && (
                    <div>
                      <span className="text-gray-600">希望機能:</span>
                      <div className="ml-2 mt-1">
                        {formData.features.map(feature => (
                          <span key={feature} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                            {featureLabels[feature]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">概算見積もり</h3>
                <p className="text-2xl font-bold text-green-600">
                  ¥{estimate.toLocaleString()}
                </p>
                <p className="text-sm text-green-700 mt-1">
                  ※最終金額は詳細な診断とカウンセリング後に決定いたします
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card className="mb-6">
          <Card.Header>
            <Card.Title>今後の流れ</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">メール確認</h4>
                  <p className="text-sm text-gray-600">
                    24時間以内に詳細な見積もりをメールでお送りします
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">カウンセリング予約</h4>
                  <p className="text-sm text-gray-600">
                    専門スタッフとの無料カウンセリングを予約できます
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">詳細診断</h4>
                  <p className="text-sm text-gray-600">
                    最新の医療機器による詳細な身体診断を実施します
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">施術開始</h4>
                  <p className="text-sm text-gray-600">
                    最終確認後、サイボーグ化施術を開始いたします
                  </p>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg">
              トップページに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}