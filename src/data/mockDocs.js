export const englishDoc = {
  path: 'docs/en/getting-started.md',
  title: 'Getting Started',
  content: `# Getting Started

Welcome to our API documentation. This guide will help you integrate our services quickly and easily.

## Installation

Install the package using npm:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## Authentication

To use the API, you need an API key. Get yours from the dashboard.

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## Making Your First Request

Here's a simple example to get you started:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## Next Steps

- Read the [API Reference](./api-reference.md)
- Check out [Code Examples](./examples.md)
- Join our [Community](https://community.example.com)
`
};

export const translations = {
  es: {
    path: 'docs/es/getting-started.md',
    title: 'Comenzando',
    quality: 97,
    content: `# Comenzando

Bienvenido a nuestra documentación de API. Esta guía le ayudará a integrar nuestros servicios de forma rápida y sencilla.

## Instalación

Instale el paquete usando npm:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## Autenticación

Para usar la API, necesita una clave API. Obtenga la suya desde el panel de control.

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## Haciendo su Primera Solicitud

Aquí hay un ejemplo simple para comenzar:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## Próximos Pasos

- Lea la [Referencia de API](./api-reference.md)
- Consulte los [Ejemplos de Código](./examples.md)
- Únase a nuestra [Comunidad](https://community.example.com)
`
  },
  fr: {
    path: 'docs/fr/getting-started.md',
    title: 'Commencer',
    quality: 96,
    content: `# Commencer

Bienvenue dans notre documentation API. Ce guide vous aidera à intégrer nos services rapidement et facilement.

## Installation

Installez le package en utilisant npm:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## Authentification

Pour utiliser l'API, vous avez besoin d'une clé API. Obtenez la vôtre depuis le tableau de bord.

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## Faire votre Première Requête

Voici un exemple simple pour commencer:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## Prochaines Étapes

- Lisez la [Référence API](./api-reference.md)
- Consultez les [Exemples de Code](./examples.md)
- Rejoignez notre [Communauté](https://community.example.com)
`
  },
  de: {
    path: 'docs/de/getting-started.md',
    title: 'Erste Schritte',
    quality: 98,
    content: `# Erste Schritte

Willkommen zu unserer API-Dokumentation. Diese Anleitung hilft Ihnen, unsere Dienste schnell und einfach zu integrieren.

## Installation

Installieren Sie das Paket mit npm:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## Authentifizierung

Um die API zu verwenden, benötigen Sie einen API-Schlüssel. Holen Sie sich Ihren vom Dashboard.

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## Ihre erste Anfrage

Hier ist ein einfaches Beispiel zum Starten:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## Nächste Schritte

- Lesen Sie die [API-Referenz](./api-reference.md)
- Schauen Sie sich [Code-Beispiele](./examples.md) an
- Treten Sie unserer [Community](https://community.example.com) bei
`
  },
  ja: {
    path: 'docs/ja/getting-started.md',
    title: '始めましょう',
    quality: 95,
    content: `# 始めましょう

APIドキュメントへようこそ。このガイドは、サービスを迅速かつ簡単に統合するのに役立ちます。

## インストール

npmを使用してパッケージをインストールします:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## 認証

APIを使用するには、APIキーが必要です。ダッシュボードから取得してください。

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## 最初のリクエスト

開始するための簡単な例を示します:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## 次のステップ

- [APIリファレンス](./api-reference.md)を読む
- [コード例](./examples.md)を確認する
- [コミュニティ](https://community.example.com)に参加する
`
  },
  hi: {
    path: 'docs/hi/getting-started.md',
    title: 'शुरू करना',
    quality: 94,
    content: `# शुरू करना

हमारे API दस्तावेज़ीकरण में आपका स्वागत है। यह गाइड आपको हमारी सेवाओं को जल्दी और आसानी से एकीकृत करने में मदद करेगी।

## इंस्टॉलेशन

npm का उपयोग करके पैकेज इंस्टॉल करें:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## प्रमाणीकरण

API का उपयोग करने के लिए, आपको एक API कुंजी की आवश्यकता है। डैशबोर्ड से अपना प्राप्त करें।

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## अपना पहला अनुरोध करना

शुरू करने के लिए यहाँ एक सरल उदाहरण है:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## अगले कदम

- [API संदर्भ](./api-reference.md) पढ़ें
- [कोड उदाहरण](./examples.md) देखें
- हमारे [समुदाय](https://community.example.com) में शामिल हों
`
  },
  zh: {
    path: 'docs/zh/getting-started.md',
    title: '入门指南',
    quality: 96,
    content: `# 入门指南

欢迎使用我们的API文档。本指南将帮助您快速轻松地集成我们的服务。

## 安装

使用npm安装软件包:

\`\`\`bash
npm install @yourapi/sdk
\`\`\`

## 认证

要使用API，您需要API密钥。从仪表板获取您的密钥。

\`\`\`javascript
import { Client } from '@yourapi/sdk';

const client = new Client({
  apiKey: 'your-api-key-here'
});
\`\`\`

## 发出您的第一个请求

这是一个简单的入门示例:

\`\`\`javascript
const response = await client.users.list();
console.log(response.data);
\`\`\`

## 下一步

- 阅读[API参考](./api-reference.md)
- 查看[代码示例](./examples.md)
- 加入我们的[社区](https://community.example.com)
`
  }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' }
];
