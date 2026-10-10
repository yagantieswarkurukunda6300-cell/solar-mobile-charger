
import { useState } from "react";
import "./App.css";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function SolarScene({ sunlight, charging, power, battery, voltage, current }) {
  const cellLines = Array.from({ length: 7 }, (_, i) => i);
  const rowLines = Array.from({ length: 5 }, (_, i) => i);

  return (
    <svg
      className="solar-scene-svg"
      viewBox="0 0 1000 650"
      role="img"
      aria-label="Interactive solar charging station showing sunlight, photovoltaic panel, connecting wires, charge controller and mobile phone"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87b9dc" />
          <stop offset="60%" stopColor="#d6d8bd" />
          <stop offset="100%" stopColor="#728e64" />
        </linearGradient>

        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#748b5c" />
          <stop offset="100%" stopColor="#293f32" />
        </linearGradient>

        <radialGradient id="sunCore">
          <stop offset="0%" stopColor="#fff9cc" />
          <stop offset="45%" stopColor="#ffe68a" />
          <stop offset="100%" stopColor="#ffb23f" />
        </radialGradient>

        <radialGradient id="sunHalo">
          <stop offset="0%" stopColor="#ffe9a0" stopOpacity=".62" />
          <stop offset="100%" stopColor="#ffe9a0" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#225d86" />
          <stop offset="45%" stopColor="#113958" />
          <stop offset="100%" stopColor="#06192d" />
        </linearGradient>

        <linearGradient id="panelFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2eaf0" />
          <stop offset="100%" stopColor="#667c8c" />
        </linearGradient>

        <linearGradient id="controller" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#394c5d" />
          <stop offset="100%" stopColor="#101c27" />
        </linearGradient>

        <linearGradient id="phone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#344655" />
          <stop offset="100%" stopColor="#101821" />
        </linearGradient>

        <linearGradient id="batteryFill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1eaf75" />
          <stop offset="100%" stopColor="#7affbd" />
        </linearGradient>

        <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="15" />
        </filter>

        <filter id="smallGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <filter id="objectShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#071019" floodOpacity=".42" />
        </filter>

        <clipPath id="panelClip">
          <polygon points="110,285 422,223 493,401 177,476" />
        </clipPath>
      </defs>

      {/* Background and outdoor environment */}
      <rect width="1000" height="650" fill="url(#sky)" />

      <circle
        cx="800"
        cy="105"
        r={140 + sunlight * 0.5}
        fill="url(#sunHalo)"
        opacity={0.25 + sunlight / 130}
      />

      <path
        d="M0 315 Q120 265 245 309 T490 298 T750 300 T1000 265 L1000 650 L0 650Z"
        fill="#8ba181"
        opacity=".55"
      />

      <path
        d="M0 390 Q140 350 300 391 T600 370 T1000 389 L1000 650 L0 650Z"
        fill="url(#ground)"
      />

      {Array.from({ length: 24 }, (_, i) => (
        <path
          key={i}
          d={`M${(i * 53) % 1000} ${430 + ((i * 31) % 170)} l-4 -12 l8 7 l4 -13`}
          stroke="#b1c18a"
          strokeWidth="2"
          opacity=".25"
          fill="none"
        />
      ))}

      {/* Sun and animated rays */}
      <g className={sunlight > 0 ? "sun-active" : "sun-dim"} opacity={0.3 + sunlight / 145}>
        <circle cx="790" cy="112" r="88" fill="#ffce6c" opacity=".3" filter="url(#softGlow)" />
        <circle cx="790" cy="112" r="53" fill="url(#sunCore)" />

        {Array.from({ length: 16 }, (_, i) => (
          <line
            key={i}
            x1={790 + Math.cos((i * 22.5 * Math.PI) / 180) * 66}
            y1={112 + Math.sin((i * 22.5 * Math.PI) / 180) * 66}
            x2={790 + Math.cos((i * 22.5 * Math.PI) / 180) * 87}
            y2={112 + Math.sin((i * 22.5 * Math.PI) / 180) * 87}
            stroke="#fff0b0"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".85"
          />
        ))}
      </g>

      {/* Light rays directed towards the panel */}
      <g
        className={sunlight > 0 ? "sun-rays" : ""}
        opacity={sunlight / 100}
        stroke="#fff0ad"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M742 190 Q650 235 485 310" strokeDasharray="12 13" />
        <path d="M782 202 Q715 264 451 350" strokeDasharray="9 15" />
        <path d="M822 197 Q760 260 475 389" strokeDasharray="7 15" />
      </g>

      {/* Ground shadow beneath the panel */}
      <ellipse cx="300" cy="478" rx="220" ry="31" fill="#07150e" opacity=".35" />

      {/* Solar panel support legs */}
      <g filter="url(#objectShadow)">
        <path d="M177 432 L166 520 L186 520 L211 437Z" fill="#9aabb4" stroke="#e3edf4" strokeWidth="2" />
        <path d="M447 383 L475 482 L493 477 L467 378Z" fill="#7e939f" stroke="#d5e0e7" strokeWidth="2" />
        <path d="M161 520 L208 520" stroke="#d1dbe1" strokeWidth="7" strokeLinecap="round" />
        <path d="M469 482 L506 475" stroke="#d1dbe1" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Photovoltaic module */}
      <g filter="url(#objectShadow)">
        <polygon
          points="110,285 422,223 493,401 177,476"
          fill="url(#panelFrame)"
          stroke="#e8eff4"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <polygon
          points="119,291 419,231 484,397 181,467"
          fill="url(#glass)"
        />

        <g clipPath="url(#panelClip)">
          {cellLines.map((i) => (
            <line
              key={`col-${i}`}
              x1={150 + i * 40}
              y1={284 - i * 8}
              x2={212 + i * 40}
              y2={469 - i * 8}
              stroke="#8dc7ed"
              strokeWidth="2"
              opacity=".65"
            />
          ))}

          {rowLines.map((i) => (
            <line
              key={`row-${i}`}
              x1="103"
              y1={315 + i * 30}
              x2="489"
              y2={239 + i * 30}
              stroke="#8dc7ed"
              strokeWidth="2"
              opacity=".65"
            />
          ))}

          <path
            d="M125 300 L285 268 L354 442 L194 462Z"
            fill="#fff"
            opacity=".035"
          />
        </g>

        <polygon
          points="110,285 422,223 493,401 177,476"
          fill="none"
          stroke="#e5edf2"
          strokeWidth="4"
        />
      </g>

      {/* Panel junction box */}
      <g>
        <rect x="367" y="429" width="46" height="23" rx="5" fill="#192b37" stroke="#b3c3cc" strokeWidth="2" />
        <circle cx="379" cy="440" r="4" fill="#ff675c" />
        <circle cx="393" cy="440" r="4" fill="#55d9a1" />
        <circle cx="406" cy="440" r="3" fill="#d7e6f0" />
      </g>

      {/* Panel label */}
      <g transform="translate(128 272) rotate(-11)">
        <rect width="112" height="20" rx="4" fill="#0a1a2b" opacity=".9" />
        <text x="8" y="14" fontSize="10" fontWeight="800" fill="#e9f5ff" letterSpacing="1.2">
          PV MODULE
        </text>
      </g>

      {/* Energy cables: panel to controller */}
      <path
        d="M389 449 C405 490 450 489 481 481 S524 478 550 486"
        fill="none"
        stroke="#15191f"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M389 449 C405 490 450 489 481 481 S524 478 550 486"
        fill="none"
        stroke="#f35c53"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M405 453 C422 501 467 500 489 492 S529 488 550 497"
        fill="none"
        stroke="#111a25"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M405 453 C422 501 467 500 489 492 S529 488 550 497"
        fill="none"
        stroke="#3a98ff"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        className={charging ? "energy-flow" : ""}
        d="M389 449 C405 490 450 489 481 481 S524 478 550 486"
        fill="none"
        stroke="#ffb66b"
        strokeWidth="3"
        strokeDasharray="5 17"
        strokeLinecap="round"
      />

      {/* Controller shadow */}
      <ellipse cx="606" cy="540" rx="96" ry="18" fill="#06120d" opacity=".42" />

      {/* Charge controller enclosure */}
      <g filter="url(#objectShadow)">
        <path d="M536 416 Q536 407 546 407 L658 407 Q668 407 668 417 L668 519 Q668 528 658 528 L546 528 Q536 528 536 519Z" fill="url(#controller)" stroke="#879aa9" strokeWidth="2" />

        <path d="M546 419 H658" stroke="#536b7d" strokeWidth="2" />

        <text x="552" y="438" fontSize="9" fill="#c3d0dc" fontWeight="800" letterSpacing="1.2">
          SOLAR
        </text>
        <text x="552" y="450" fontSize="9" fill="#c3d0dc" fontWeight="800" letterSpacing="1.2">
          CONTROLLER
        </text>

        <rect x="551" y="462" width="101" height="30" rx="5" fill="#07131c" stroke="#2d4b5b" />

        <text x="561" y="475" fontSize="7" fill="#8da4b6" letterSpacing=".8">
          OUTPUT
        </text>

        <text x="561" y="486" fontSize="10" fill="#70f4b7" fontWeight="800">
          {voltage.toFixed(1)}V
        </text>

        <circle cx="642" cy="473" r="4" fill={charging ? "#5cf3aa" : "#f3b15b"} />
        <circle cx="642" cy="473" r="8" fill={charging ? "#5cf3aa" : "#f3b15b"} opacity=".13" />

        <rect x="551" y="500" width="17" height="12" rx="2" fill="#101923" stroke="#74899a" />
        <rect x="575" y="500" width="17" height="12" rx="2" fill="#101923" stroke="#74899a" />

        <circle cx="620" cy="506" r="5" fill="#101923" stroke="#8294a4" strokeWidth="2" />
        <circle cx="642" cy="506" r="5" fill="#101923" stroke="#8294a4" strokeWidth="2" />
      </g>

      {/* Controller to mobile cable */}
      <path
        d="M668 473 C711 472 696 532 740 532 S787 503 800 471"
        fill="none"
        stroke="#121922"
        strokeWidth="13"
        strokeLinecap="round"
      />

      <path
        d="M668 473 C711 472 696 532 740 532 S787 503 800 471"
        fill="none"
        stroke="#54d9a1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        className={charging ? "energy-flow energy-flow-green" : ""}
        d="M668 473 C711 472 696 532 740 532 S787 503 800 471"
        fill="none"
        stroke="#b3ffdc"
        strokeWidth="3"
        strokeDasharray="5 17"
        strokeLinecap="round"
      />

      {/* Mobile phone shadow and body */}
      <ellipse cx="839" cy="551" rx="77" ry="19" fill="#06120d" opacity=".4" />

      <g transform="rotate(-7 840 447)" filter="url(#objectShadow)">
        <rect x="783" y="348" width="113" height="188" rx="17" fill="url(#phone)" stroke="#9babb8" strokeWidth="2.5" />
        <rect x="790" y="357" width="99" height="171" rx="11" fill="#07151e" stroke="#263b4a" />

        <rect x="822" y="362" width="42" height="7" rx="4" fill="#263a47" />

        <text x="802" y="386" fontSize="8" fill="#9ab0c2" fontWeight="700">
          SOLAR POWER
        </text>

        <text x="802" y="408" fontSize="12" fill="#f0f7fb" fontWeight="800">
          Charging
        </text>

        <rect x="802" y="420" width="75" height="11" rx="4" fill="#243745" />

        <rect
          x="802"
          y="420"
          width={75 * battery / 100}
          height="11"
          rx="4"
          fill="url(#batteryFill)"
        />

        <text x="802" y="450" fontSize="20" fill="#79f3b7" fontWeight="800">
          {battery}%
        </text>

        <text x="802" y="466" fontSize="8" fill="#8da3b3">
          BATTERY LEVEL
        </text>

        <circle cx="839" cy="491" r="15" fill="#102a28" stroke="#2b6e5a" strokeWidth="1.5" />

        <path
          d="M839 481 L832 493 H839 L836 502 L846 489 H839Z"
          fill="#79f3b7"
          className={charging ? "bolt-pulse" : ""}
        />

        <rect x="826" y="533" width="26" height="4" rx="2" fill="#80919e" />
      </g>

      {/* Phone connection point */}
      <circle cx="800" cy="471" r="6" fill="#52d99f" stroke="#d2ffeb" strokeWidth="2" />
      <circle cx="800" cy="471" r="12" fill="#52d99f" opacity=".16" />

      {/* Equipment labels */}
      <g className="scene-label">
        <rect x="77" y="505" width="156" height="39" rx="8" fill="#091722" fillOpacity=".86" stroke="#d8e5ed" strokeOpacity=".3" />
        <circle cx="92" cy="519" r="4" fill="#ffbe62" />
        <text x="104" y="522" fontSize="10" fill="#f2f7fb" fontWeight="800">PHOTOVOLTAIC PANEL</text>
        <text x="92" y="535" fontSize="8" fill="#9fb2c2">SUNLIGHT CONVERSION</text>
      </g>

      <g className="scene-label">
        <rect x="519" y="552" width="171" height="39" rx="8" fill="#091722" fillOpacity=".86" stroke="#d8e5ed" strokeOpacity=".3" />
        <circle cx="535" cy="566" r="4" fill="#6cf0bd" />
        <text x="547" y="569" fontSize="10" fill="#f2f7fb" fontWeight="800">CHARGE CONTROLLER</text>
        <text x="535" y="582" fontSize="8" fill="#9fb2c2">REGULATED DC OUTPUT</text>
      </g>

      <g className="scene-label">
        <rect x="765" y="578" width="165" height="39" rx="8" fill="#091722" fillOpacity=".86" stroke="#d8e5ed" strokeOpacity=".3" />
        <circle cx="781" cy="592" r="4" fill="#6cf0bd" />
        <text x="793" y="595" fontSize="10" fill="#f2f7fb" fontWeight="800">MOBILE DEVICE</text>
        <text x="781" y="608" fontSize="8" fill="#9fb2c2">
          {charging ? "CHARGING CONDITION OK" : "INSUFFICIENT SUNLIGHT"}
        </text>
      </g>

      {/* Live status tag */}
      <g transform="translate(27 27)">
        <rect width="174" height="37" rx="9" fill="#091722" fillOpacity=".8" stroke="#ffffff" strokeOpacity=".22" />
        <circle cx="17" cy="18" r="4" fill={charging ? "#6cf0bd" : "#ffbd64"} />
        <text x="30" y="22" fontSize="10" fontWeight="800" letterSpacing="1" fill="#f4f7fc">
          {charging ? "ENERGY FLOW ACTIVE" : "ENERGY FLOW LOW"}
        </text>
      </g>

      {/* Small sunlight level label */}
      <g transform="translate(802 219)">
        <rect x="-51" y="-2" width="104" height="32" rx="8" fill="#091722" fillOpacity=".76" stroke="#ffffff" strokeOpacity=".18" />
        <text x="1" y="10" textAnchor="middle" fontSize="7" fill="#a7b8c7" letterSpacing=".7">
          SUNLIGHT LEVEL
        </text>
        <text x="1" y="23" textAnchor="middle" fontSize="11" fill="#ffd17a" fontWeight="800">
          {sunlight}%
        </text>
      </g>

      {/* Scene footer data */}
      <g transform="translate(25 612)">
        <text x="0" y="0" fontSize="9" fill="#e7f1f8" fontWeight="700" letterSpacing="1">
          SOLAR CHARGING LAB
        </text>
        <text x="0" y="15" fontSize="8" fill="#d0e0e9">
          {voltage.toFixed(1)} V · {current.toFixed(2)} A · {power.toFixed(1)} W
        </text>
      </g>
    </svg>
  );
}

function Metric({ icon, title, value, unit, color, detail }) {
  return (
    <article className="metric">
      <div className="metric-top">
        <span className="metric-icon" style={{ color }}>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="metric-value">
        <strong style={{ color }}>{value}</strong>
        <span>{unit}</span>
      </div>
      <p>{detail}</p>
    </article>
  );
}

export default function App() {
  const [sunlight, setSunlight] = useState(80);
  const [stationOn, setStationOn] = useState(true);

  const effectiveSunlight = stationOn ? sunlight : 0;
  const voltage = (18 * effectiveSunlight) / 100;
  const current = (1.2 * effectiveSunlight) / 100;
  const power = voltage * current;
  const charging = stationOn && effectiveSunlight >= 15;
  const battery = clamp(Math.round(20 + effectiveSunlight * 0.7), 0, 100);

  const condition =
    effectiveSunlight === 0
      ? "No output"
      : effectiveSunlight < 30
        ? "Low sunlight"
        : effectiveSunlight < 70
          ? "Good sunlight"
          : "Peak sunlight";

  const setPreset = (value) => {
    setSunlight(value);
    setStationOn(true);
  };

  const reset = () => {
    setSunlight(80);
    setStationOn(true);
  };

  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-symbol">☀</span>
          <span className="brand-copy">
            <strong>SOLAR<span>STATION</span></strong>
            <small>RENEWABLE ENERGY LAB</small>
          </span>
        </a>

        <button
          type="button"
          className={`station-toggle ${stationOn ? "is-on" : "is-off"}`}
          onClick={() => setStationOn((value) => !value)}
          aria-pressed={stationOn}
        >
          <span className="toggle-dot" />
          {stationOn ? "STATION ON" : "STATION OFF"}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="eyebrow"><span /> INTERACTIVE ENGINEERING SIMULATION</div>
        <h1>Solar Charging <em>Station.</em></h1>
        <p>
          Experience the energy path from sunlight to a mobile device. Control
          the solar conditions, watch the simulated energy flow, and monitor
          electrical output in one interactive workspace.
        </p>
        <div className="hero-tags">
          <span>☀ Photovoltaic energy</span>
          <span>ϟ DC power conversion</span>
          <span>⌁ Mobile charging</span>
        </div>
      </section>

      <section className="dashboard">
        <div className="main-column">
          <section className="scene-card">
            <div className="card-heading">
              <div>
                <span className="section-index">01 / LIVE ENVIRONMENT</span>
                <h2>Solar energy flow</h2>
              </div>
              <span className={`environment-status ${charging ? "good" : "warning"}`}>
                <i />
                {charging ? "ENERGY FLOW" : "LOW / NO OUTPUT"}
              </span>
            </div>

            <div className={`scene-frame ${stationOn ? "" : "station-disabled"}`}>
              <SolarScene
                sunlight={effectiveSunlight}
                charging={charging}
                power={power}
                battery={battery}
                voltage={voltage}
                current={current}
              />
              {!stationOn && (
                <div className="station-off-overlay">
                  <span>Ⅱ</span>
                  <strong>Station switched off</strong>
                  <small>Turn the station on to resume the simulation.</small>
                </div>
              )}
            </div>

            <div className="scene-legend">
              <span><i className="legend-sun" /> Sunlight rays</span>
              <span><i className="legend-red" /> Positive cable</span>
              <span><i className="legend-blue" /> Return cable</span>
              <span><i className="legend-green" /> Simulated output</span>
            </div>
          </section>

          <section className="process-card">
            <div className="card-heading">
              <div>
                <span className="section-index">02 / ENERGY CONVERSION</span>
                <h2>Follow the power path</h2>
              </div>
              <span className="mini-tag">4 STAGES</span>
            </div>

            <div className="process-flow">
              <div className={`process-stage ${effectiveSunlight > 0 ? "stage-active" : ""}`}>
                <span className="stage-symbol">☀</span>
                <strong>Sunlight</strong>
                <small>Energy source</small>
              </div>
              <span className="stage-arrow">→</span>
              <div className={`process-stage ${effectiveSunlight > 0 ? "stage-active" : ""}`}>
                <span className="stage-symbol">▦</span>
                <strong>PV panel</strong>
                <small>DC generation</small>
              </div>
              <span className="stage-arrow">→</span>
              <div className={`process-stage ${charging ? "stage-active" : ""}`}>
                <span className="stage-symbol">ϟ</span>
                <strong>Controller</strong>
                <small>Output regulation</small>
              </div>
              <span className="stage-arrow">→</span>
              <div className={`process-stage ${charging ? "stage-active" : ""}`}>
                <span className="stage-symbol">▯</span>
                <strong>Mobile</strong>
                <small>Charging load</small>
              </div>
            </div>
          </section>
        </div>

        <aside className="controls-card">
          <div className="card-heading">
            <div>
              <span className="section-index">03 / CONTROL CENTER</span>
              <h2>Simulation controls</h2>
            </div>
            <span className="control-sun">☀</span>
          </div>

          <p className="card-description">
            Adjust the sunlight input and observe how the estimated DC output
            responds.
          </p>

          <div className="sunlight-control">
            <div className="sunlight-top">
              <div>
                <span className="field-label">SUNLIGHT INTENSITY</span>
                <div className="sunlight-value">{sunlight}<span>%</span></div>
              </div>
              <div className="sunlight-condition">
                <span className="condition-icon">{effectiveSunlight === 0 ? "☁" : "☀"}</span>
                <strong>{condition}</strong>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sunlight}
              disabled={!stationOn}
              aria-label="Sunlight intensity"
              onChange={(event) => setSunlight(Number(event.target.value))}
              className="sun-slider"
              style={{ "--progress": `${sunlight}%` }}
            />

            <div className="range-labels">
              <span>0% · Dark</span>
              <span>50% · Medium</span>
              <span>100% · Peak</span>
            </div>

            <div className="preset-buttons">
              <button type="button" onClick={() => setPreset(20)} className={sunlight === 20 && stationOn ? "selected" : ""}>Low sun</button>
              <button type="button" onClick={() => setPreset(55)} className={sunlight === 55 && stationOn ? "selected" : ""}>Medium</button>
              <button type="button" onClick={() => setPreset(100)} className={sunlight === 100 && stationOn ? "selected" : ""}>Peak sun</button>
            </div>
          </div>

          <div className="readings-title">
            <div>
              <span className="section-index">LIVE ESTIMATES</span>
              <h3>Electrical output</h3>
            </div>
            <span className="simulated-label"><i /> SIMULATED</span>
          </div>

          <div className="metrics-grid">
            <Metric icon="ϟ" title="VOLTAGE" value={voltage.toFixed(1)} unit="V" color="#80bdff" detail="DC voltage estimate" />
            <Metric icon="↗" title="CURRENT" value={current.toFixed(2)} unit="A" color="#6ce8bd" detail="Output current estimate" />
            <Metric icon="ϟ" title="POWER" value={power.toFixed(1)} unit="W" color="#ffc16a" detail="Voltage × current" />
            <Metric icon="▰" title="BATTERY" value={battery} unit="%" color="#c7a3ff" detail="Illustrative indicator" />
          </div>

          <div className={`charge-status ${charging ? "charge-good" : "charge-low"}`}>
            <div className="charge-symbol">{charging ? "ϟ" : "!"}</div>
            <div>
              <strong>{charging ? "Charging conditions detected" : "Insufficient output"}</strong>
              <p>
                {charging
                  ? "The estimated output is above the simulation threshold."
                  : "Increase sunlight or turn on the station to resume simulated output."}
              </p>
            </div>
            <span className="status-indicator" />
          </div>

          <button type="button" className="reset-button" onClick={reset}>
            <span>↻</span> Reset simulation
          </button>

          <div className="engineering-note">
            <span>ⓘ</span>
            <p>
              <strong>Engineering note:</strong> Voltage, current, power and
              battery percentage are illustrative software calculations. They
              are not physical measurements, and the animation does not
              charge a real phone.
            </p>
          </div>
        </aside>
      </section>

      <section className="specification-panel">
        <div>
          <span className="section-index">04 / PROJECT OVERVIEW</span>
          <h2>Built around a photovoltaic charging concept.</h2>
          <p>
            This interactive model demonstrates the main components of a
            solar-powered mobile charging station and how changing available
            sunlight affects an estimated electrical output.
          </p>
        </div>
        <div className="spec-list">
          <div><span>01</span><strong>Energy source</strong><small>Solar irradiance input</small></div>
          <div><span>02</span><strong>Conversion</strong><small>Photovoltaic DC generation</small></div>
          <div><span>03</span><strong>Power path</strong><small>Panel → controller → mobile</small></div>
          <div><span>04</span><strong>Monitoring</strong><small>Voltage, current and power</small></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span>☀</span> SOLARSTATION <i /> ENGINEERING SIMULATOR</div>
        <p>Renewable energy · Photovoltaic technology · Educational model</p>
      </footer>
    </main>
  );
}
