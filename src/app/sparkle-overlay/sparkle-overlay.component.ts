import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityChange: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

@Component({
  selector: 'app-sparkle-overlay',
  template: `<canvas #sparkleCanvas class="sparkle-canvas"></canvas>`,
  styles: [`
    .sparkle-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 1000;
    }
  `]
})
export class SparkleOverlayComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sparkleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private sparkles: Sparkle[] = [];
  private animationId: number | null = null;

  private colors = [
    '#FFD700', // gold
    '#FF69B4', // pink
    '#00FFFF', // cyan
    '#ADFF2F', // green-yellow
    '#FFA500', // orange
    '#BA55D3', // purple
    '#FFFFFF', // white
    '#a52121ff', // red
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Unable to get 2D context');
    this.ctx = ctx;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);

    this.createSparkles(100); // Adjust sparkle count
    this.animate();

    const sparkleCount = this.getSparkleCount();
    this.createSparkles(sparkleCount);

    this.animate();
  }

 private getSparkleCount(): number {
    const area = window.innerWidth * window.innerHeight;
    if (area < 500_000) return 40;   // small phones
    if (area < 1_000_000) return 70; // tablets
    if (area < 2_000_000) return 100; // small laptop
    return 150; // large monitors
  }


  private resizeCanvas = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  private createSparkles(count: number) {
    for (let i = 0; i < count; i++) {
      this.sparkles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2+ 1,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        opacityChange: (Math.random() * 0.03) - 0.015,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }
  }

  private drawSparkle(sp: Sparkle) {
    const { ctx } = this;
    const spikes = 4; // 4-point sparkle (change to 6 for more)
    const outerRadius = sp.size * 2.5;
    const innerRadius = sp.size * 0.8;

    ctx.save();
    ctx.translate(sp.x, sp.y);
    ctx.rotate(sp.rotation);
    ctx.beginPath();

    for (let i = 0; i < spikes * 2; i++) {
      const radius = (i % 2 === 0) ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.globalAlpha = sp.opacity;
    ctx.fillStyle = sp.color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = sp.color;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let sp of this.sparkles) {
      // Move sparkle
      sp.y += sp.speedY;
      sp.x += sp.speedX;
      sp.rotation += sp.rotationSpeed;

      // Twinkle
      sp.opacity += sp.opacityChange;
      if (sp.opacity <= 0.2 || sp.opacity >= 1) sp.opacityChange *= -1;

      // Wrap around edges
      if (sp.y > this.canvas.height) sp.y = 0;
      if (sp.x > this.canvas.width) sp.x = 0;
      if (sp.x < 0) sp.x = this.canvas.width;

      // Draw sparkle shape
      this.drawSparkle(sp);
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeCanvas);
  }
}
