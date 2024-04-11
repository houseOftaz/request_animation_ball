document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('circle');
    const ctx = circle.getContext('2d');

    let test = 95;

    function gameLoop() {

        ctx.beginPath();  // chemin
        ctx.arc(test, 50, 40, 0, 2 * Math.PI);  // def
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";
        ctx.stroke(); // dessine$
        test++

        requestAnimationFrame(gameLoop);
    }
    gameLoop();
});
