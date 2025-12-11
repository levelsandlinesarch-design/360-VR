var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0368957718784344,
        "pitch": 0.05673550662093341,
        "fov": 1.3232559276191118
      },
      "linkHotspots": [
        {
          "yaw": -1.6068246259974543,
          "pitch": 0.07991973738194424,
          "rotation": 0.7853981633974483,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.5789443710833453,
          "pitch": 0.03888989164202172,
          "rotation": 5.497787143782138,
          "target": "0-living"
        },
        {
          "yaw": -2.13943669385079,
          "pitch": 0.08211494577356326,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00462555614891258,
        "pitch": -0.04159417922248032,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.8973366393802387,
          "pitch": 0.02119645713346685,
          "rotation": 5.497787143782138,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
