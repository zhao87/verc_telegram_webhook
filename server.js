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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`服务器运行在端口 ${port}`);
});
