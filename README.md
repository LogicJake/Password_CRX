## 使用方法
下载Password_CRX.crx，拖到浏览器中安装
## 原理
密码规则：md5("网站注册名@网站域名,统一密码")  
统一密码是所有密码都要用到的加密密码，其实就是盐。  
md5也可以更换为其他你喜欢的hash算法，如SHA1。   
可以拖动进度条设置密码长度
## 举例
比如我的统一密码是 123456  
假设我的qq号是33333333，那我的qq密码就是md5("33333333@qq.com,123456")  
总之，记忆一种算法以及每个网站的注册用户名，这样只要用这个算法结合注册用户名来计算密码，就能确保密码既好记又不容易被破解，一个网站泄露，其他网站也不会被撞库。  
密码生成均在本地实现，不会上传到其他地方，保证用户密码安全
## 预览
![image](https://github.com/LogicJake/Password_CRX/raw/master/PIC/演示1.png)
![image](https://github.com/LogicJake/Password_CRX/raw/master/PIC/演示2.png)
![image](https://github.com/LogicJake/Password_CRX/raw/master/PIC/演示3.png)
![image](https://github.com/LogicJake/Password_CRX/raw/master/PIC/演示4.png)
![image](https://github.com/LogicJake/Password_CRX/raw/master/PIC/演示5.png)
## 代码参考
https://www.zhihu.com/question/38369521 @张云龙
