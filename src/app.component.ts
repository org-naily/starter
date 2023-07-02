/**
 * @Date 2023-07-02 11:54:21
 * @Author Zero的MacBook 1203970284@qq.com
 * @LastEditTime 2023-07-02 12:10:33
 * @FilePath /naily-starter/src/app.component.ts
 */
import { Component } from '@naily/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Component({
  controllers: [AppController],
  providers: [AppService],
})
export class AppComponent {}
