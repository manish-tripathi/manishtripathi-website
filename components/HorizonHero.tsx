/**
 * HorizonHero.tsx  —  Neural Mesh edition
 *
 * Design language: "Design × Technology × AI"
 * Inspired by Linear, Vercel, Framer — dark, precise, intelligent.
 *
 * Three.js scene: animated particle neural-network mesh on deep black.
 * No landscapes. No space games. Pure signal.
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ─── types ─────────────────────────────────────────────── */
interface HorizonHeroProps {
  onSeeWork?: () => void;
}

/* ─── constants ──────────────────────────────────────────── */
const NODE_COUNT      = 120;
const CONNECTION_DIST = 90;   // max distance to draw a line between nodes
const DRIFT_SPEED     = 0.18; // how fast nodes drift
const MOUSE_STRENGTH  = 0.025; // how much mouse repels nearby nodes

/* ─── component ──────────────────────────────────────────── */
const HorizonHero: React.FC<HorizonHeroProps> = ({ onSeeWork }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Neural mesh ─────────────────────────────────────── */
  useEffect(() => {
    if (prefersReduced || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* ── nodes ─── */
    type Node = { pos: THREE.Vector3; vel: THREE.Vector3; orig: THREE.Vector3 };
    const nodes: Node[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 280,
        (Math.random() - 0.5) * 160,
      );
      nodes.push({
        pos:  pos.clone(),
        vel:  new THREE.Vector3(
          (Math.random() - 0.5) * DRIFT_SPEED,
          (Math.random() - 0.5) * DRIFT_SPEED,
          (Math.random() - 0.5) * DRIFT_SPEED * 0.3,
        ),
        orig: pos.clone(),
      });
    }

    /* dot geometry */
    const dotGeo  = new THREE.BufferGeometry();
    const dotPos  = new Float32Array(NODE_COUNT * 3);
    const dotMat  = new THREE.PointsMaterial({
      size: 2.2,
      color: 0x6d9cf8,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    /* line geometry — pre-allocate max possible pairs */
    const MAX_LINES = NODE_COUNT * NODE_COUNT;
    const lineGeo   = new THREE.BufferGeometry();
    const linePos   = new Float32Array(MAX_LINES * 6); // 2 verts × 3 floats
    const lineCol   = new Float32Array(MAX_LINES * 6); // color per vert
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color',    new THREE.BufferAttribute(lineCol, 3).setUsage(THREE.DynamicDrawUsage));
    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.35 })
    );
    scene.add(lineMat);

    /* accent glow orb — subtle violet bloom behind text */
    const glowGeo = new THREE.SphereGeometry(60, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x3730a3,
      transparent: true,
      opacity: 0.07,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(-80, 20, -60);
    scene.add(glow);

    /* secondary orb — right side teal */
    const glow2 = new THREE.Mesh(
      new THREE.SphereGeometry(45, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.05 })
    );
    glow2.position.set(130, -30, -80);
    scene.add(glow2);

    /* ── mouse repulsion ─── */
    const mouse = new THREE.Vector2(9999, 9999);
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 400;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 280;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── animate ─── */
    let animId: number;
    const c1 = new THREE.Color(0x6d9cf8); // blue
    const c2 = new THREE.Color(0xa78bfa); // violet

    function tick() {
      animId = requestAnimationFrame(tick);
      const t = Date.now() * 0.001;

      /* update node positions */
      nodes.forEach((n, i) => {
        // gentle drift with sin variation
        n.pos.x += n.vel.x + Math.sin(t * 0.3 + i) * 0.008;
        n.pos.y += n.vel.y + Math.cos(t * 0.25 + i) * 0.008;
        n.pos.z += n.vel.z;

        // soft spring back to origin
        n.pos.x += (n.orig.x - n.pos.x) * 0.001;
        n.pos.y += (n.orig.y - n.pos.y) * 0.001;
        n.pos.z += (n.orig.z - n.pos.z) * 0.001;

        // mouse repulsion (2D — z ignored)
        const dx = n.pos.x - mouse.x;
        const dy = n.pos.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const force = (80 - dist) / 80 * MOUSE_STRENGTH * 6;
          n.pos.x += (dx / dist) * force * 12;
          n.pos.y += (dy / dist) * force * 12;
        }

        dotPos[i * 3]     = n.pos.x;
        dotPos[i * 3 + 1] = n.pos.y;
        dotPos[i * 3 + 2] = n.pos.z;
      });
      (dotGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      /* rebuild lines */
      let lineIdx = 0;
      for (let a = 0; a < NODE_COUNT; a++) {
        for (let b = a + 1; b < NODE_COUNT; b++) {
          const dx   = nodes[a].pos.x - nodes[b].pos.x;
          const dy   = nodes[a].pos.y - nodes[b].pos.y;
          const dz   = nodes[a].pos.z - nodes[b].pos.z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (dist < CONNECTION_DIST) {
            const alpha = 1 - dist / CONNECTION_DIST;
            // interpolate c1→c2 by x position
            const mix = (nodes[a].pos.x + 200) / 400;
            const col = c1.clone().lerp(c2, mix);

            linePos[lineIdx * 6]     = nodes[a].pos.x;
            linePos[lineIdx * 6 + 1] = nodes[a].pos.y;
            linePos[lineIdx * 6 + 2] = nodes[a].pos.z;
            linePos[lineIdx * 6 + 3] = nodes[b].pos.x;
            linePos[lineIdx * 6 + 4] = nodes[b].pos.y;
            linePos[lineIdx * 6 + 5] = nodes[b].pos.z;

            lineCol[lineIdx * 6]     = col.r * alpha;
            lineCol[lineIdx * 6 + 1] = col.g * alpha;
            lineCol[lineIdx * 6 + 2] = col.b * alpha;
            lineCol[lineIdx * 6 + 3] = col.r * alpha;
            lineCol[lineIdx * 6 + 4] = col.g * alpha;
            lineCol[lineIdx * 6 + 5] = col.b * alpha;
            lineIdx++;
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx * 2);
      (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeo.attributes.color    as THREE.BufferAttribute).needsUpdate = true;

      /* subtle camera breathe */
      camera.position.x = Math.sin(t * 0.08) * 6;
      camera.position.y = Math.cos(t * 0.06) * 4;

      renderer.render(scene, camera);
    }

    tick();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      dotGeo.dispose(); dotMat.dispose();
      lineGeo.dispose();
      glowGeo.dispose(); glowMat.dispose();
      renderer.dispose();
    };
  }, [prefersReduced]);


  /* ─── render ─────────────────────────────────────────── */
  return (
    <section
      className="snap"
      id="s1"
      data-screen-label="01 Home"
      style={{ position: 'relative', overflow: 'hidden', background: '#050510' }}
    >
      {/* Neural mesh canvas */}
      {!prefersReduced && (
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />
      )}

      {/* Dark scrim — left half ensures text is always legible over the mesh */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        background: 'linear-gradient(100deg, rgba(5,5,16,0.97) 0%, rgba(5,5,16,0.95) 45%, rgba(5,5,16,0.65) 62%, rgba(5,5,16,0.0) 80%)',
      }} />
      {/* Radial glow behind text — left center */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
        background: 'radial-gradient(ellipse 55% 60% at 28% 48%, rgba(79,70,229,0.18) 0%, transparent 70%)',
      }} />
      {/* Right side teal glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
        background: 'radial-gradient(ellipse 40% 40% at 78% 62%, rgba(14,165,233,0.10) 0%, transparent 70%)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 20,
        height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(64px, 7vh, 80px) clamp(28px, 5vw, 64px) 40px',
        maxWidth: '58%',
      }}>

        {/* Eyebrow */}
        <div className="hero-fade-1" style={{
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
            background: '#6366f1',
            boxShadow: '0 0 8px 2px rgba(99,102,241,0.7)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(165,180,252,0.65)', fontFamily: 'var(--ff-b)',
          }}>
            Product Manager
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-fade-2"
          style={{
            fontFamily: 'var(--ff-d)',
            fontSize: 'clamp(2.6rem, 5vw, 5.2rem)',
            lineHeight: 1.06,
            color: '#f0f0ff',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          {['I turn', 'messy data'].map((w, i) => (
            <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.25em' }}>{w}</span>
          ))}
          <br />
          {['into products'].map((w, i) => (
            <em key={i} className="word" style={{
              display: 'inline-block', marginRight: '0.25em',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>{w}</em>
          ))}
          <br />
          {['people', 'actually use.'].map((w, i) => (
            <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.25em' }}>{w}</span>
          ))}
        </h1>

        {/* Sub */}
        <p className="hero-fade-3" style={{
          fontFamily: 'var(--ff-b)',
          fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
          color: 'rgba(200,205,255,0.55)',
          lineHeight: 1.7,
          marginBottom: 28,
          maxWidth: '100%',
        }}>
          <span style={{ color: 'rgba(200,205,255,0.85)', fontWeight: 500 }}>14-year career</span> spanning
          enterprise research, growth analytics, and product —&nbsp;
          <span style={{ color: '#818cf8', fontWeight: 500 }}>400% platform growth</span> at Aurora, 11 years at S&P Global.
        </p>

        {/* Glassmorphism stat cards */}
        <div className="hero-fade-4" style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { n: '14+',  l: 'Years',           sub: 'Product & Analytics'   },
            { n: '400%', l: 'Coverage Scaled',  sub: 'in 12 months'          },
            { n: '50%',  l: 'Faster Delivery',  sub: 'at Aurora Energy'      },
          ].map(s => (
            <div key={s.n} className="stat-card" style={{
              padding: '14px 20px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(129,140,248,0.18)',
              backdropFilter: 'blur(12px)',
              minWidth: 110,
            }}>
              <div style={{
                fontFamily: 'var(--ff-d)',
                fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                color: '#c7d2fe',
                lineHeight: 1,
                marginBottom: 4,
              }}>{s.n}</div>
              <div style={{ fontSize: 12, color: 'rgba(199,210,254,0.75)', fontWeight: 500, fontFamily: 'var(--ff-b)' }}>{s.l}</div>
              <div style={{ fontSize: 10, color: 'rgba(199,210,254,0.35)', fontFamily: 'var(--ff-b)', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-fade-5" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={onSeeWork}
            style={{
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              border: 'none',
              padding: '11px 26px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'var(--ff-b)',
              letterSpacing: '0.03em',
              transition: 'opacity 0.2s, transform 0.2s',
              boxShadow: '0 0 24px rgba(99,102,241,0.35)',
            }}
            onMouseOver={e => { (e.target as HTMLElement).style.opacity = '0.85'; (e.target as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseOut={e  => { (e.target as HTMLElement).style.opacity = '1';    (e.target as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            See My Work →
          </button>
          <a href="https://calendly.com/maneeshtripathi/30min" target="_blank" rel="noreferrer">
            <button style={{
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(200,205,255,0.85)',
              border: '1px solid rgba(129,140,248,0.25)',
              padding: '11px 26px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'var(--ff-b)',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseOver={e => { (e.target as HTMLElement).style.borderColor = 'rgba(129,140,248,0.6)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseOut={e  => { (e.target as HTMLElement).style.borderColor = 'rgba(129,140,248,0.25)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
            >
              Schedule a Call
            </button>
          </a>
          <a href="https://linkedin.com/in/maneeshtripathi/" target="_blank" rel="noreferrer">
            <button style={{
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(200,205,255,0.85)',
              border: '1px solid rgba(129,140,248,0.25)',
              padding: '11px 26px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'var(--ff-b)',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseOver={e => { (e.target as HTMLElement).style.borderColor = 'rgba(129,140,248,0.6)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseOut={e  => { (e.target as HTMLElement).style.borderColor = 'rgba(129,140,248,0.25)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
            >
              LinkedIn
            </button>
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="hero-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <div className="hbar-i"><div className="hbar-dot" /><span>Gurugram, India</span> · Open to global roles</div>
        <div className="hbar-i"><div className="hbar-dot" />Currently: <span>Aurora Energy Research</span></div>
        <div className="hbar-i"><div className="hbar-dot" />ISB Hyderabad · IMT Nagpur</div>
        <div className="hbar-i"><div className="hbar-dot" /><span>maneeshtripathi@gmail.com</span></div>
      </div>

      <div className="sec-num">01 — Home</div>
    </section>
  );
};

export default HorizonHero;
