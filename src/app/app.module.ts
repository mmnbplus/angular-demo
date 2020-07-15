import { BrowserModule } from '@angular/platform-browser';  //浏览器解析模块
import { NgModule } from '@angular/core';                   //angular核心模块
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';    //路由
import { AppComponent } from './app.component';             //根组件
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';             

@NgModule({
  declarations: [           //当前项目需要的组件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent
  ],
  imports: [                //引入其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],            //项目所需要的服务
  bootstrap: [AppComponent] //指定主视图
})
export class AppModule { }
