<p align="center">
  <img
    src="https://capsule-render.vercel.app/api?type=waving&color=0:071426,25:064e78,55:0284c7,78:f59e0b,100:fbbf24&height=250&section=header&text=SOLAR%20MOBILE%20CHARGER&fontSize=39&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=HARNESS%20THE%20POWER%20OF%20THE%20SUN&descSize=17&descAlignY=60"
    width="100%"
    alt="Solar Mobile Charger animated banner"
  />
</p>

<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=19&duration=3000&pause=900&color=FBBF24&center=true&vCenter=true&width=800&lines=Explore+Renewable+Energy+%E2%98%80%EF%B8%8F;Simulate+Solar+Power+Generation+%E2%9A%A1;Understand+Photovoltaic+Energy+Conversion;Visualize+Electrical+Output+Interactively"
    alt="Animated project introduction"
  />
</p>

<p align="center">
  <a href="https://solar-mobile-charger.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-OPEN_PROJECT-16A34A?style=for-the-badge" alt="Live demo"/>
  </a>
  <a href="https://github.com/yagantieswarkurukunda6300-cell/solar-mobile-charger">
    <img src="https://img.shields.io/badge/GITHUB-SOURCE_CODE-111827?style=for-the-badge&logo=github" alt="GitHub repository"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/CSS-Responsive-1572B6?style=for-the-badge&logo=css3" alt="CSS"/>
  <img src="https://img.shields.io/badge/Energy-Renewable-22C55E?style=for-the-badge" alt="Renewable energy"/>
</p>

<p align="center">
  <strong>☀️ SUNLIGHT → ⚡ SOLAR ENERGY → 🔌 POWER CONVERSION → 📱 MOBILE CHARGING</strong>
</p>

---

## 📑 TABLE OF CONTENTS

- [🌞 About the Project](#-about-the-project)
- [🎯 Problem Statement](#-problem-statement)
- [💡 Project Objectives](#-project-objectives)
- [✨ Features](#-features)
- [🖥️ Application Overview](#️-application-overview)
- [🔄 Working Principle](#-working-principle)
- [🏗️ System Architecture](#️-system-architecture)
- [⚡ Electrical Calculations](#-electrical-calculations)
- [🎮 How to Use the Simulator](#-how-to-use-the-simulator)
- [🛠️ Technology Stack](#️-technology-stack)
- [📂 Project Structure](#-project-structure)
- [💻 Installation and Setup](#-installation-and-setup)
- [🧪 Testing and Validation](#-testing-and-validation)
- [🚀 Deployment](#-deployment)
- [🔍 Troubleshooting](#-troubleshooting)
- [⚠️ Engineering Limitations](#️-engineering-limitations)
- [🌱 Future Enhancements](#-future-enhancements)
- [📚 Learning Outcomes](#-learning-outcomes)
- [👨‍💻 Developer](#-developer)

---

## 🌞 ABOUT THE PROJECT

**Solar Mobile Charger — Interactive Solar Charging Station Simulator**

Solar Mobile Charger is a web-based educational engineering project that demonstrates the concept of using solar energy for mobile charging.

The application presents a visual solar charging station containing a photovoltaic panel, sunlight rays, connecting cables, a charge-controller concept, and a mobile device.

Users can adjust the simulated sunlight intensity and observe how the application's estimated voltage, current, power, battery indicator, and charging status change.

The interface is built using React, JavaScript, CSS, and SVG illustrations. React state updates the displayed values and visual scene as the user interacts with the controls.

<p align="center">
  <a href="https://solar-mobile-charger.vercel.app/">
    <img src="https://img.shields.io/badge/☀️_EXPLORE_THE_SIMULATOR-CLICK_TO_LAUNCH-F59E0B?style=for-the-badge&logo=vercel&logoColor=white" alt="Explore the live simulator"/>
  </a>
</p>

### 🌍 Why Solar Energy?

Solar energy converts sunlight into electrical energy using photovoltaic technology. It is an important renewable-energy source for applications such as small electronic devices, outdoor equipment, lighting systems, and battery charging.

This project helps learners explore the basic idea of solar-powered charging through an interactive software model.

**Project scope:** The current application is a simulation. It does not connect to a physical solar panel or charge a real mobile phone.

---

## 🎯 PROBLEM STATEMENT

Understanding renewable-energy systems can be difficult when learners only see static diagrams or theoretical equations.

A learner may understand the definitions of voltage, current, and power but still find it difficult to visualize how changing the available sunlight affects a solar charging system.

This project addresses that educational challenge by providing:

- An interactive visual representation of a solar charging station.
- Adjustable sunlight input to explore different operating conditions.
- Dynamic electrical estimates displayed in the interface.
- A visual explanation of the energy path from sunlight to a mobile device.

The objective is to make the basic concept of solar charging easier to understand without requiring physical laboratory equipment.

---

## 💡 PROJECT OBJECTIVES

| No. | Objective | Explanation |
|---|---|---|
| 01 | Demonstrate solar-energy conversion | Illustrate the concept of sunlight reaching a photovoltaic panel. |
| 02 | Simulate changing sunlight | Allow the user to adjust sunlight intensity from 0% to 100%. |
| 03 | Display electrical estimates | Show calculated voltage, current, and power. |
| 04 | Represent charging conditions | Change the simulated charging status according to the model's threshold. |
| 05 | Improve visual understanding | Present the panel, cables, controller, and mobile device in an illustrated scene. |
| 06 | Support engineering learning | Connect a visual simulation with basic electrical relationships. |

---

## ✨ FEATURES

<p align="center">
  <img src="https://img.shields.io/badge/☀️-Adjustable_Sunlight-F59E0B?style=for-the-badge" alt="Adjustable sunlight"/>
  <img src="https://img.shields.io/badge/⚡-Power_Estimates-0EA5E9?style=for-the-badge" alt="Power estimates"/>
  <img src="https://img.shields.io/badge/🔋-Battery_Indicator-16A34A?style=for-the-badge" alt="Battery indicator"/>
</p>

### 1. ☀️ Interactive Sunlight Control

The sunlight slider allows users to select a value between 0% and 100%.

When the slider value changes, React updates the simulation and recalculates the electrical estimates.

The interface also provides three preset buttons:

- **Low sun:** 20%
- **Medium:** 55%
- **Peak sun:** 100%

Each preset switches the station on and selects the corresponding sunlight level.

### 2. 🔌 Station ON/OFF Control

The station toggle enables or disables the simulated solar station.

When the station is switched off:

- Effective sunlight for the calculations becomes zero.
- The estimated voltage, current, and power become zero.
- The interface indicates that energy output is unavailable.
- The sunlight slider becomes disabled.

The selected sunlight value remains stored, so switching the station back on restores that setting.

### 3. ⚡ Electrical Output Dashboard

The application displays four calculated or illustrative indicators.

| Indicator | Unit | Purpose |
|---|---|---|
| Voltage | V | Displays the estimated DC voltage. |
| Current | A | Displays the estimated output current. |
| Power | W | Displays voltage multiplied by current. |
| Battery | % | Displays an illustrative battery-level indicator. |

These figures are generated by software formulas. They are not measured values from electrical hardware.

### 4. 🌄 Illustrated Solar Charging Scene

The SVG scene presents:

- The outdoor environment and sun.
- Animated sunlight rays.
- The photovoltaic panel and its support structure.
- Connecting cables.
- The controller representation.
- A mobile device with a battery indicator.
- Labels showing the illustrated system components.

The sunlight setting influences elements of the scene so the display responds to the simulation state.

### 5. 🔄 Energy Conversion Flow

The interface shows four conceptual stages:

**Sunlight → PV Panel → Controller → Mobile**

The stages provide a visual explanation of the intended energy
