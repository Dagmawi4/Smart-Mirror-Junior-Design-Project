# Smart Mirror Project (Junior Design)

## Overview
The **Smart Mirror Project** was developed as part of **EE 337 – Principles of Engineering Design II (Spring 2024)** at **Minnesota State University, Mankato**.  
The goal was to design and build a **functional smart mirror** that enhances daily routines by delivering essential information in a sleek, interactive format.

This Smart Mirror integrates **hardware and software** to provide:
- Real-time **weather, calendar, and news updates**
- **Spotify integration** for music streaming
- **Google Assistant voice control** for hands-free interaction
- **Energy-efficient operation** using a motion sensor
- A clean, modern design that blends into home environments

---

## Purpose & Motivation
Modern homes increasingly incorporate **smart devices**, but many solutions are **cluttered or require separate screens**.  
Our mirror offers a **discreet, always-available interface**, allowing users to **stay informed, entertained, and connected** without extra devices.

---

## System Design

### Hardware
- **Raspberry Pi 4 Model B** – central controller
- **Two-Way Mirror** paired with an LCD display
- **PIR Motion Sensor** – wakes display when a user is nearby
- **Mini Microphone & Speaker** – for voice commands and audio output
- Custom-built frame designed for stability and a minimal aesthetic

### Software
- **MagicMirror² Framework** – base platform for modular functionality
- **Integrated Modules:**
  - Weather (OpenWeather API)
  - Calendar (iCal/Google Calendar sync)
  - News via RSS feeds
  - Google Assistant (MMM-GoogleAssistant)
  - Spotify (MMM-NowPlayingOnSpotify)
- **Custom Configuration** for:
  - Automatic screen wake/sleep via PIR sensor
  - Personalized data feeds
  - Energy-saving routines

---

## Features
- **Hands-Free Operation:** Voice commands via Google Assistant  
- **Real-Time Updates:** Calendar, weather, and news in one interface  
- **Entertainment Ready:** Spotify integration for music streaming  
- **Smart Energy Use:** Screen activates only when motion is detected  
- **Modular Expansion:** Easily add or remove features using MagicMirror² modules  

---

## Challenges & Solutions
- **Integration Complexity:** Coordinated multiple APIs and modules through custom MagicMirror² configuration.  
- **Hardware Housing:** Designed a **stable yet aesthetic frame** to accommodate the mirror, display, and components.  
- **Energy Management:** Incorporated a **PIR sensor** to conserve power by automatically controlling the display.

---

## Future Improvements
- **Gesture Controls** for completely touchless navigation  
- **Enhanced Voice Recognition** with multi-accent support  
- **Health and Smart Home Integrations** (e.g., step tracking, IoT control)  
- **Customizable Frames and Layouts** for broader home integration

---

## Repository Contents
- `/Images` – Photos of the prototype, hardware, and system diagrams  
- `/Documentation` – Final project report (PDF), schematics, and planning materials  
- `/Code` – MagicMirror² configuration and any custom module scripts (to be added)  
- `/Hardware_Design` – Block diagrams, wiring layouts, and sensor integration details

---

## Contributors
- **Dagmawi Abera** – Project Manager, Coordination, Hardware & Software Support  
- **Hamede Abdulgafur** – Software Development Lead, Module Integration, User Testing  
- **Noah Awol** – Hardware Integration Specialist, System Testing

## License
- This project is licensed under the MIT License for academic and portfolio purposes.
