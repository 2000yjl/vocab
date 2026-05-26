WordForge 终极实用英语词典部署说明

上线包：
上传 practical_vocab_pro_app_PUBLISH_NETLIFY.zip 到 Netlify Deploys 页面。

默认账号：
teacher / 123456
001-300 / 123456

本机改密码：
账号页面可以修改账号和密码，但静态站默认保存到当前浏览器。

真正全网同步改密码：
需要接 Supabase Auth。
1. 注册 Supabase 并创建 Project。
2. 打开 Auth，启用 Email/Password。
3. 关闭 Email Confirmations，方便 001@wordforge.local 这类内部账号登录。
4. 把 supabase-config.example.js 复制为 supabase-config.js，填入 Project URL 和 anon public key。
5. 如果要批量预置 001-300，需要在 Supabase 后台创建用户或使用 service role 脚本。

学习功能：
书架封面、翻页词典、词典详情、衍生词跳转、美音/英音朗读、词根派生、短语、例句、主动回忆、拼写训练、错题优先复习。
