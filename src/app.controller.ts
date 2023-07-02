/**
 * @Date 2023-07-02 11:54:48
 * @Author Zero的MacBook 1203970284@qq.com
 * @LastEditTime 2023-07-02 11:57:49
 * @FilePath /naily-starter/src/app.controller.ts
 */
import { Autowired, GetMapping, RestController } from '@naily/core'
import { AppService } from './app.service'

@RestController()
export class AppController {
  @Autowired
  private readonly appService: AppService

  @GetMapping()
  public getHello() {
    return this.appService.getData()
  }
}
