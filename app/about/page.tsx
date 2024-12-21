import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-8">
          このページはGitHub Actionsを使用して自動デプロイされています。
          mainブランチにマージされると、自動的にAWSのS3にデプロイされ、
          CloudFrontを通じて配信されます。
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">デプロイの流れ</h2>
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>GitHubのmainブランチにコードがマージ</li>
            <li>GitHub Actionsが自動的に起動</li>
            <li>Next.jsアプリケーションのビルド</li>
            <li>AWS CDKによるインフラのデプロイ</li>
            <li>ビルドされたファイルをS3にアップロード</li>
            <li>CloudFrontを通じてコンテンツを配信</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
