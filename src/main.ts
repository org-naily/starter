/**
 * @Date 2023-07-02 11:53:03
 * @Author Zero的MacBook 1203970284@qq.com
 * @LastEditTime 2023-07-02 12:10:13
 * @FilePath /naily-starter/src/main.ts
 */
import { createExpressApp } from '@naily/platform-express/dist'
import { AppComponent } from './app.component'

const app = createExpressApp(AppComponent)
app.listen(3000, port => {
  console.log(`服务已在 http://localhost:${port} 启动`)
})
