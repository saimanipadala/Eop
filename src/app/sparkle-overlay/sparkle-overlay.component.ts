// snowfall-overlay.component.ts
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

@Component({
  selector: 'app-sparkle-overlay',
  template: `<canvas #snowCanvas class="snow-canvas"></canvas>`,
  styles: [`
    .snow-canvas {
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
  @ViewChild('snowCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private snowflakes: Snowflake[] = [];
  private animationId: number | null = null;

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Unable to get 2D context');
    this.ctx = ctx;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);

    this.createSnowflakes(150); // Adjust count if needed
    this.animate();
  }

  private resizeCanvas = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  private createSnowflakes(count: number) {
    for (let i = 0; i < count; i++) {
      this.snowflakes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 3 + 2, // make sure they're visible
        speedY: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let flake of this.snowflakes) {
      // Update position
      flake.y += flake.speedY;
      flake.x += flake.speedX;

      // Wrap around if out of bounds
      if (flake.y > this.canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * this.canvas.width;
      }

      if (flake.x > this.canvas.width) flake.x = 0;
      if (flake.x < 0) flake.x = this.canvas.width;

      // Draw snowflake
      this.ctx.beginPath();
      this.ctx.globalAlpha = flake.opacity;
      this.ctx.fillStyle = '#fff';
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.resizeCanvas);
  }
}
