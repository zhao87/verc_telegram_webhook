const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('收到 Telegram 消息:', req.body);
    res.send('Webhook 已收到');
});

app.get('/test-api', (req, res) => {
    res.json({ message: 'API 运行正常' });
});

// 修正：只定义一次 `port`
const port = process.env.PORT || 3000;

// 修正：确保只调用一次 `app.listen`
app.listen(port, () => {
    console.log(`服务器运行在端口 ${port}`);
});

console.log("服务器已启动，正在监听 Telegram Webhook 和 API 请求...");
