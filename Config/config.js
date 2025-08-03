let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/", 
  ipWhitelist: [], // Allow access from any IP
  useHttps: false,
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    { module: "alert" },

    {
      module: "clock",
      position: "top_left"
    },

    {
      module: "calendar",
      header: "My Calendar",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics" // Replace with your Google Calendar public .ics link
          }
        ]
      }
    },

    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "New York", // Change to your city
        locationID: "",       // Optional OpenWeatherMap location ID
        appid: "YOUR_OPENWEATHER_API_KEY"
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
        showPublishDate: true
      }
    },

    {
      module: "compliments",
      position: "lower_third",
      config: {
        compliments: {
          morning: ["Good morning!", "Ready to start your day?"],
          afternoon: ["Looking good!", "Hope your day is going well!"],
          evening: ["Good evening!", "How was your day?"]
        }
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
        deviceName: "",
        showCoverArt: true
      }
    },

    {
      module: "MMM-GoogleAssistant",
      position: "top_left",
      config: {
        debug: false,
        assistantConfig: {
          latitude: YOUR_LAT,
          longitude: YOUR_LON
        },
        micConfig: {
          recorder: "arecord",
          device: "plughw:1"
        },
        snowboy: {
          audioGain: 2.0
        },
        responseConfig: {
          useHTML5: true,
          playProgram: "mpg321"
        }
      }
    }

    // Add your PIR sensor control script outside of MagicMirror (systemd or cron) to turn HDMI on/off
  ]
};

if (typeof module !== "undefined") { module.exports = config; }

