// 创建画布
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 绘制夕阳
function drawSunset() {
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height, 0, canvas.width / 2, canvas.height, canvas.height);
    gradient.addColorStop(0, '#FF4500'); // 橙色
    gradient.addColorStop(1, '#FFD700'); // 黄色

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSunset();
}

// 开始动画
animate();
