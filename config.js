const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VVW5OiOhD+L3nV2uEiF62aqgOKclEGL4h6ah8iBIhyiQmCuOV/P8W4szsP52zN4Sl0Ot1ff/118gMUJWbIQS0Y/QCE4hpWqFtWLUFgBPRrHCMK+iCCFQQjwOn1ejecFpzlcYHtQPPwUvbu5MzkkNzlmGypWd/Py23PtF7Bow/I9Zjh8A8BpWRrc4zEe2ak45aUg2a1PHE+u63ti2zfhNWEaEXP5bRk+QoeXUSIKS4Sg6QoRxRmDmo9iOnX4I8N1IwZd75Ip8VSTCeXiL+5Id44x6Mdeci8F5fNndq+vvW/Bj/3qSL58NjWDeNPqJ5t9iFz801c60Y9VQ8zR1DEpZygRnvCZzgpUGRFqKhw1X6Z94srqmJzHc+E3vZsHsSUaD6Sr/EaDni6r5Gj3yKFbtCtUL8GHLWnnjXxAqPZyX5OPOS1ZWKOz3M6ZfYiXbF1emjnvJf44WfgHv3Qyvn/8K6Zi9hG0+mMP4i5lmBDWrRJHil6SNr5trEOm1sjDpaGni+/Bv/YO+5tVmQyCuZScAuUIBiYymymqn4iCgbJZD8a8OFaXH2CD6sr/RNKUZKPiuEcpG3MqpeJdsMHZUgmu4tKNwcdMzuZNXqA9HnvpPuCOna5AEZ3vze9OoKk7d1ga9z2chsV7j1pt9gZ8DtPb17fKzqj1orAiH/0AUUJZhWFFS6LdxvfBzCq1yikqHpnF5iXnbuqF+es1vZv0j0yVqqBS97dtQS5K8sU8awYWpJ8OISvoA8ILUPEGIpMzKqStgvEGEwQA6O/v/dBgW7Vs29dNpnvgxhTVvnFlWQljD6a+rEJw7C8FtW6LcJxt0AUjLjfZlRVuEhYR+O1gDRMcY3GKawYGMUwY+hXgYii6Kft1+nuVIQqiDPWTaN9l0lyXooveHBP9nsda5qjaV1FH9k+uvakJbrzGbHMAKuSk70tkO8O2PDsqIil4+WRa4y4VEU4JZZg/VsQMAJ3wbWnpwVrabQYsIWgTScup5aTHk2t3m51aeOs1mGanHYmbG6pcx7y+v6kvtkC828ZLnrVVpU2xUl526bx5jqt2VaadC3ugwjVOESfk1VRwjthWxgCuWxnL9O2p6vLyPCtqSO+OXPbIzdzk8q2F2+abZFauXNyGoMLgrk51riVijLRDss42JCBZtdU1narRls+9ZS/CxlHYAQEcaDyIqeKwnAgjQTlL/at6RoCCflWoAr0Qfb0UzheFhSBU1ROlJXOs9v4GI7s56WE33XTxe5+Y4zeZ7yAXcYv5HrS0ImJe/Q/Bfl5bfzH6Om7cHiAa50v67c12ZzMbILm3mFcm9RanmfDhW7KniukcO1i8Hh87wOSwSouaQ5GABYRLXEE+oCW106dVhGXf3oFdMsaa8m4Kz2DrNJ+K36Dc8QqmBMw4hVF4gVRkpWnl0dLYkKWdhdFnvGnNeiDvNUIWVew+hggoHWfpe3A4x8+qYh7WwcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
