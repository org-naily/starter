/**
 * @Date 2023-07-02 11:53:25
 * @Author Zero的MacBook 1203970284@qq.com
 * @LastEditTime 2023-07-02 11:57:51
 * @FilePath /naily-starter/src/app.service.ts
 */
import { Injectable } from '@naily/core'

@Injectable
export class AppService {
  public getData() {
    return 'Hello naily'
  }
}
