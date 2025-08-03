let config = {
  address: "0.0.0.0",           // Allow remote access
  port: 8080,
  basePath: "/",               
  ipWhitelist: [],             // Allow any IP
  useHttps: false,
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    { module: "alert" },       // Default alert system

    {
      module: "clock",
      position: "top_left",
      config: {
        displayType: "digital",
        timeFormat: 24,
        showSeconds: false
      }
    },

    {
      module: "calendar",
      header: "My Google Calendar",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "YOUR_GOOGLE_CALENDAR_ICAL_LINK"
          }
        ]
      }
    },

    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Mankato",
        locationID: "", // Optional: use city ID if needed
        appid: "YOUR_OPENWEATHER_API_KEY",
        units: "imperial"
      }
    },

    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "New York Times",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        updateInterval: 300000,
        reloadInterval: 600000
      }
    },

    {
      module: "compliments",
      position: "lower_third",
      config: {
        compliments: {
          morning: [
            "Good morning!",
            "Time to start your day strong."
          ],
          afternoon: [
            "Keep pushing.",
            "You’re doing great!"
          ],
          evening: [
            "Good evening.",
            "You made it through the day."
          ]
        },
        updateInterval: 10000,
        fadeSpeed: 4
      }
    },

    {
      module: "MMM-NowPlayingOnSpotify",
      position: "top_center",
      config: {
        clientID: "YOUR_SPOTIFY_CLIENT_ID",
        clientSecret: "YOUR_SPOTIFY_CLIENT_SECRET",
        accessToken: "YOUR_ACCESS_TOKEN",
        refreshToken: "YOUR_REFRESH_TOKEN",
        deviceName: "", // Leave empty to use currently active device
        showCoverArt: true,
        showDevice: true
      }
    },

    {
      module: "MMM-GoogleAssistant",
      position: "bottom_right",
      config: {
        debug: false,
        assistantConfig: {
          latitude: 44.975,
          longitude: -93.234,
          projectId: "YOUR_GOOGLE_PROJECT_ID",
          modelId: "YOUR_ASSISTANT_MODEL_ID",
          deviceInstanceId: "smartmirror123"
        },
        micConfig: {
          recorder: "arecord",
          device: "plughw:1" // Adjust if needed
        },
        snowboy: {
          audioGain: 2.0,
          sensitivity: "0.5",
          applyFrontend: true
        },
        responseConfig: {
          useHTML5: true,
          playProgram: "mpg321"
        },
        recipes: ["Reboot-Restart-Shutdown.js"],
        profiles: {
          default: {
            profileFile: "default.json"
          }
        }
      }
    }

    // Optional: You can add a script outside of MagicMirror to toggle HDMI on/off using PIR
    // Use a systemd service or shell script to monitor GPIO and control display state
  ]
};

if (typeof module !== "undefined") { module.exports = config; }


