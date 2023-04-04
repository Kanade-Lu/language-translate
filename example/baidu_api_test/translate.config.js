import { Lang, TranslateService } from 'language-translate/types'
import { defineConfig } from 'language-translate/utils'

export default defineConfig({
  // toolsLang: 'en', // The translation tool opens this line of comments in English
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 7890
  // },
  fromLang: Lang.en,
  fromPath: 'locales/*.en.json',
  apiKeyConfig: {
    type: TranslateService.baidu,
    [TranslateService.baidu]: {
      appId: 'your appId',
      appKey: 'your appKey'
    }
  },
  translate: [
    {
      label: '测试百度翻译/Test Baidu Translation',
      targetConfig: [
        {
          targetLang: Lang['zh-CN'],
          outPath: 'locales',
          rewrite: fileName => fileName.replace('.en.json', '.zh.json')
        }
      ]
    }
  ]
})
