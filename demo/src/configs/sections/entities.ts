import { convertEntities } from "../../../../src/fake_data/entity";
import { DemoConfig } from "../types";

export const demoEntitiesSections: DemoConfig["entities"] = (localize) =>
  convertEntities({
    "cover.living_room_garden_shutter": {
      entity_id: "cover.living_room_garden_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room garden shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_graveyard_shutter": {
      entity_id: "cover.living_room_graveyard_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room graveyard shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_left_shutter": {
      entity_id: "cover.living_room_left_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room left shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_right_shutter": {
      entity_id: "cover.living_room_right_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room right shutter",
        supported_features: 15,
      },
    },
    "light.floor_lamp": {
      entity_id: "light.floor_lamp",
      state: "on",
      attributes: {
        min_color_temp_kelvin: 2000,
        max_color_temp_kelvin: 6535,
        min_mireds: 153,
        max_mireds: 500,
        supported_color_modes: ["color_temp", "xy"],
        color_mode: "color_temp",
        brightness: 178,
        color_temp_kelvin: 2583,
        color_temp: 387,
        hs_color: [28.664, 69.597],
        rgb_color: [255, 162, 77],
        xy_color: [0.538, 0.389],
        icon: "mdi:floor-lamp",
        friendly_name: "Floor lamp",
        supported_features: 44,
      },
    },
    "light.living_room_spotlights": {
      entity_id: "light.living_room_spotlights",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 126,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Living room spotlights",
        supported_features: 32,
      },
    },
    "light.bar_lamp": {
      entity_id: "light.bar_lamp",
      state: "on",
      attributes: {
        min_color_temp_kelvin: 2202,
        max_color_temp_kelvin: 4504,
        min_mireds: 222,
        max_mireds: 454,
        effect_list: ["None", "candle"],
        supported_color_modes: ["color_temp"],
        effect: null,
        color_mode: null,
        brightness: null,
        color_temp_kelvin: null,
        color_temp: null,
        hs_color: null,
        rgb_color: null,
        xy_color: null,
        mode: "normal",
        dynamics: "none",
        icon: "mdi:lightbulb-variant",
        friendly_name: "Bar lamp",
        supported_features: 44,
      },
    },
    "sensor.living_room_temperature": {
      entity_id: "sensor.living_room_temperature",
      state: "22.8",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "Living room Temperature",
      },
    },
    "sensor.living_room_humidity": {
      entity_id: "sensor.living_room_humidity",
      state: "57",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name: "Living room Humidity",
      },
    },
    "sensor.outdoor_temperature": {
      entity_id: "sensor.outdoor_temperature",
      state: "10.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "Outdoor temperature",
      },
    },
    "sensor.outdoor_humidity": {
      entity_id: "sensor.outdoor_humidity",
      state: "70.4",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name: "Outdoor humidity",
      },
    },
    "device_tracker.car": {
      entity_id: "sensor.outdoor_humidity",
      state: "not_home",
      attributes: {
        friendly_name: "Car",
        icon: "mdi:car",
      },
    },
    "media_player.living_room_nest_mini": {
      entity_id: "media_player.living_room_nest_mini",
      state: "playing",
      attributes: {
        device_class: "speaker",
        volume_level: 0.18,
        is_volume_muted: false,
        media_content_type: "music",
        media_duration: 300,
        media_position: 0,
        media_position_updated_at: new Date(
          // 23 seconds in
          new Date().getTime() - 23000
        ).toISOString(),
        media_title: "I Wasn't Born To Follow",
        media_artist: "The Byrds",
        media_album_name: "The Notorious Byrd Brothers",
        source_list: ["It's A Party", "Radio HSL", "Retro 70s and 80s"],
        shuffle: false,
        night_sound: false,
        speech_enhance: false,
        friendly_name: localize(
          "ui.panel.page-demo.config.sections.entities.media_player.living_room_nest_mini"
        ),
        entity_picture: "/assets/sections/images/media_player_family_room.jpg",
        supported_features: 64063,
      },
    },
    "cover.kitchen_shutter": {
      entity_id: "cover.kitchen_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Kitchen shutter ",
        supported_features: 15,
      },
    },
    "light.kitchen_spotlights": {
      entity_id: "light.kitchen_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Kitchen spotlights ",
        supported_features: 32,
      },
    },
    "binary_sensor.kitchen_motion": {
      entity_id: "light.kitchen_motion",
      state: "on",
      attributes: {
        device_class: "motion",
        friendly_name: "Kitchen motion",
      },
    },
    "light.worktop_spotlights": {
      entity_id: "light.worktop_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Worktop spotlights ",
        supported_features: 32,
      },
    },
    "binary_sensor.fridge_door": {
      entity_id: "binary_sensor.fridge_door",
      state: "off",
      attributes: {
        device_class: "door",
        icon: "mdi:fridge",
        friendly_name: "Fridge door",
      },
    },
    "media_player.kitchen_nest_audio": {
      entity_id: "media_player.kitchen_nest_audio",
      state: "on",
      attributes: {
        device_class: "speaker",
        volume_level: 0.18,
        is_volume_muted: false,
        media_content_type: "music",
        media_duration: 300,
        media_position: 0,
        media_position_updated_at: new Date(
          // 23 seconds in
          new Date().getTime() - 23000
        ).toISOString(),
        media_title: "I Wasn't Born To Follow",
        media_artist: "The Byrds",
        media_album_name: "The Notorious Byrd Brothers",
        source_list: ["It's A Party", "Radio HSL", "Retro 70s and 80s"],
        shuffle: false,
        night_sound: false,
        speech_enhance: false,
        friendly_name: localize(
          "ui.panel.page-demo.config.sections.entities.media_player.kitchen_nest_audio"
        ),
        entity_picture: "/assets/sections/images/media_player_family_room.jpg",
        supported_features: 64063,
      },
    },
    "binary_sensor.tesla_wall_connector_vehicle_connected": {
      entity_id: "binary_sensor.tesla_wall_connector_vehicle_connected",
      state: "off",
      attributes: {
        device_class: "plug",
        friendly_name: "Wall Connector Vehicle connected",
      },
    },
    "sensor.tesla_wall_connector_session_energy": {
      entity_id: "sensor.tesla_wall_connector_session_energy",
      state: "16.3",
      attributes: {
        state_class: "total_increasing",
        unit_of_measurement: "kWh",
        device_class: "energy",
        friendly_name: "Tesla Wall Connector Session energy",
      },
    },
    "sensor.electric_meter_power": {
      entity_id: "sensor.electric_meter_power",
      state: "797.86",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:meter-electric",
        friendly_name: "Electric meter Power",
      },
    },
    "sensor.eletric_meter_voltage": {
      entity_id: "sensor.eletric_meter_voltage",
      state: "232.19",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "V",
        device_class: "voltage",
        friendly_name: "Electric meter voltage",
      },
    },
    "sensor.electricity_maps_grid_fossil_fuel_percentage": {
      entity_id: "sensor.electricity_maps_grid_fossil_fuel_percentage",
      state: "9.84",
      attributes: {
        state_class: "measurement",
        country_code: "FR",
        unit_of_measurement: "%",
        attribution: "Data provided by Electricity Maps",
        icon: "mdi:barrel",
        friendly_name: "Electricity Maps Grid fossil fuel percentage",
      },
    },
    "sensor.electricity_maps_co2_intensity": {
      entity_id: "sensor.electricity_maps_co2_intensity",
      state: "62.0",
      attributes: {
        state_class: "measurement",
        country_code: "FR",
        unit_of_measurement: "gCO2eq/kWh",
        attribution: "Data provided by Electricity Maps",
        friendly_name: "Electricity Maps CO2 intensity",
        icon: "mdi:molecule-co2",
      },
    },
    "sun.sun": {
      entity_id: "sun.sun",
      state: "above_horizon",
      attributes: {
        next_dawn: "2024-03-05T05:50:21.964405+00:00",
        next_dusk: "2024-03-04T18:08:54.311334+00:00",
        next_midnight: "2024-03-05T00:00:00+00:00",
        next_noon: "2024-03-05T12:00:05+00:00",
        next_rising: "2024-03-05T06:23:42.739159+00:00",
        next_setting: "2024-03-04T17:35:26.271171+00:00",
        elevation: 30.38,
        azimuth: 204.42,
        rising: false,
        friendly_name: "Sun",
      },
    },
    "sensor.rain": {
      entity_id: "sensor.moon_phase",
      state: "7.2",
      attributes: {
        state_class: "total_increasing",
        unit_of_measurement: "mm",
        device_class: "precipitation",
        friendly_name: "Rain",
      },
    },
    "climate.ground_floor": {
      entity_id: "climate.ground_floor",
      state: "heat",
      attributes: {
        hvac_modes: ["auto", "heat", "off"],
        min_temp: 7,
        max_temp: 35,
        preset_modes: [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home",
        ],
        current_temperature: 20.8,
        temperature: 21,
        preset_mode: "comfort",
        icon: "mdi:home-floor-0",
        friendly_name: "Ground floor Thermostat",
        supported_features: 401,
      },
    },
    "climate.first_floor": {
      entity_id: "climate.first_floor",
      state: "heat",
      attributes: {
        hvac_modes: ["auto", "heat", "off"],
        min_temp: 7,
        max_temp: 35,
        preset_modes: [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home",
        ],
        current_temperature: 21.7,
        temperature: 21,
        preset_mode: "comfort",
        icon: "mdi:home-floor-1",
        friendly_name: "First floor Thermostat",
        supported_features: 401,
      },
    },
    "cover.study_shutter": {
      entity_id: "cover.study_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Study shutter",
        supported_features: 15,
      },
    },
    "light.study_spotlights": {
      entity_id: "light.study_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Study spotlights",
        supported_features: 32,
      },
    },
    "media_player.study_nest_hub": {
      entity_id: "media_player.study_nest_hub",
      state: "off",
      attributes: {
        device_class: "speaker",
        volume_level: 0.18,
        is_volume_muted: false,
        media_content_type: "music",
        media_duration: 300,
        media_position: 0,
        media_position_updated_at: new Date(
          // 23 seconds in
          new Date().getTime() - 23000
        ).toISOString(),
        media_title: "I Wasn't Born To Follow",
        media_artist: "The Byrds",
        media_album_name: "The Notorious Byrd Brothers",
        source_list: ["It's A Party", "Radio HSL", "Retro 70s and 80s"],
        shuffle: false,
        night_sound: false,
        speech_enhance: false,
        friendly_name: localize(
          "ui.panel.page-demo.config.sections.entities.media_player.study_nest_hub"
        ),
        entity_picture: "/assets/sections/images/media_player_family_room.jpg",
        supported_features: 64063,
      },
    },
    "switch.in_meeting": {
      entity_id: "switch.in_meeting",
      state: "on",
      attributes: {
        icon: "mdi:laptop-account",
        friendly_name: "In a meeting",
      },
    },
    "sensor.standing_desk_height": {
      entity_id: "sensor.standing_desk_height",
      state: "72",
      attributes: {
        unit_of_measurement: "cm",
        icon: "mdi:tape-measure",
        friendly_name: "Standing desk Height",
      },
    },
    "light.outdoor_light": {
      entity_id: "light.outdoor_light",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: 255,
        icon: "mdi:outdoor-lamp",
        friendly_name: "Outdoor light",
        supported_features: 32,
      },
    },
    "light.flood_light": {
      entity_id: "light.flood_light",
      state: "off",
      attributes: {
        effect_list: ["None", "candle"],
        supported_color_modes: ["brightness"],
        effect: null,
        color_mode: null,
        brightness: null,
        mode: "normal",
        dynamics: "none",
        icon: "mdi:light-flood-down",
        friendly_name: "Flood light",
        supported_features: 44,
      },
    },
    "sensor.outdoor_motion_sensor_temperature": {
      entity_id: "sensor.outdoor_motion_sensor_temperature",
      state: "10.2",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "Outdoor motion sensor Temperature",
      },
    },
    "binary_sensor.outdoor_motion_sensor_motion": {
      entity_id: "binary_sensor.outdoor_motion_sensor_motion",
      state: "off",
      attributes: {
        device_class: "motion",
        friendly_name: "Outdoor motion sensor Motion",
      },
    },
    "sensor.outdoor_motion_sensor_illuminance": {
      entity_id: "sensor.outdoor_motion_sensor_illuminance",
      state: "555",
      attributes: {
        state_class: "measurement",
        light_level: 27444,
        unit_of_measurement: "lx",
        device_class: "illuminance",
        friendly_name: "Outdoor motion sensor Illuminance",
      },
    },
    "automation.home_assistant_auto_update": {
      entity_id: "automation.home_assistant_auto_update",
      state: "off",
      attributes: {
        id: "1700669321947",
        last_triggered: "2024-02-29T18:02:05.343139+00:00",
        mode: "queued",
        current: 0,
        max: 50,
        icon: "mdi:auto-mode",
        friendly_name: "Home Assistant Auto-update",
      },
    },
    "update.home_assistant_operating_system_update": {
      entity_id: "update.home_assistant_operating_system_update",
      state: "off",
      attributes: {
        auto_update: false,
        installed_version: "12.1",
        in_progress: false,
        latest_version: "12.1",
        release_summary: null,
        release_url:
          "https://github.com/home-assistant/operating-system/commits/dev",
        skipped_version: null,
        title: "Home Assistant Operating System",
        entity_picture:
          "https://brands.home-assistant.io/homeassistant/icon.png",
        friendly_name: "Home Assistant Operating System Update",
        supported_features: 3,
      },
    },
    "update.home_assistant_supervisor_update": {
      entity_id: "update.home_assistant_supervisor_update",
      state: "off",
      attributes: {
        auto_update: true,
        installed_version: "2024.02.2",
        in_progress: false,
        latest_version: "2024.02.2",
        release_summary: null,
        release_url:
          "https://github.com/home-assistant/supervisor/commits/main",
        skipped_version: null,
        title: "Home Assistant Supervisor",
        entity_picture: "/static/icons/maskable_icon-192x192.png",
        friendly_name: "Home Assistant Supervisor Update",
        supported_features: 1,
      },
    },
    "update.home_assistant_core_update": {
      entity_id: "update.home_assistant_supervisor_update",
      state: "off",
      attributes: {
        auto_update: false,
        installed_version: "2024.4.0",
        in_progress: false,
        latest_version: "2024.4.0",
        release_summary: null,
        release_url: "https://github.com/home-assistant/core/commits/dev",
        skipped_version: null,
        title: "Home Assistant Core",
        entity_picture:
          "https://brands.home-assistant.io/homeassistant/icon.png",
        friendly_name: "Home Assistant Core Update",
        supported_features: 11,
      },
    },
  });
