import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title:string = "我是新闻标题";//推荐使用这种方式
  //msg = '我是新闻标题msg'   //也可在绑定数据，但是不推荐
  public userInfo:object = {
    username:"张三",
    age:19
  }
  public mmLength:number;

  public content:string = "<h2>我是html标签</h2>"

  public mmArray:string[] = ["喵喵1号","喵喵2号","喵喵3号"];
  public mmNBArray:Array<string> = ["喵喵牛逼1号","喵喵牛逼2号","喵喵牛逼3号"];
  public mmList:any[] = [
    {
      username:"喵喵1号",
      age:19,
      isshow:"hh"
    },{
      username:"喵喵2号",
      age:20,
      isshow: null
    }
  ];

  public imgUrl:string = "https://i0.hdslb.com/bfs/face/ed9598d7d8e0c433e790b81bf3df788e7c593d0c.jpg";

  public orderstate:number = 1;

  public flag:boolean = false;

  public mmStyle:string = "orange";

  public today:any= new Date();

  public woshimiaomiaoChangeData:any = "";

  public keywords:string = null;

  constructor() { 
    this.mmLength = 11;
    console.log("我是改变后的值",this.mmLength);
    console.log(this.today);
  }

  ngOnInit() {
    
  }

  run(){
    alert("执行方法");
  }

  setData(){
    this.woshimiaomiaoChangeData = "我是喵喵"+new Date();
  }

  keyDown(e){
    console.log("hhahhh");
    console.log(e);
    
    let dom:any = event.target;
    dom.style.color="red";
  }

  changeKeywords(){
    this.keywords = "aaaadddew";
  }

}
