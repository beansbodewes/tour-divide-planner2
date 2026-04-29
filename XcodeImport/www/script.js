const DEFAULT_ROUTE_ID = "tour_divide";
const ROUTES = {
  tour_divide: {
    id: "tour_divide",
    label: "Tour Divide Race",
    plannerTitle: "Tour Divide Race Planner",
    gpxFile: "TourDivide2025_v2.gpx",
    defaultDistance: 2679.2,
    defaultDays: 20,
    minDistance: 2000,
    maxDistance: 3200,
    storagePrefix: "tour-divide",
    profileCollection: "tour_divide_profiles",
    csvName: "tour-divide-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Banff", lat: 51.1784, lon: -115.5708, resupply: "Final Canada start-town setup." },
      { mile: 370, name: "Fernie", lat: 49.5042, lon: -115.0631, resupply: "Bike shops, food, motel options." },
      { mile: 545, name: "Whitefish", lat: 48.4111, lon: -114.3376, resupply: "Major resupply and repairs." },
      { mile: 760, name: "Ovando", lat: 47.0219, lon: -113.1893, resupply: "Small stop, check seasonal services." },
      { mile: 940, name: "Helena", lat: 46.5884, lon: -112.0245, resupply: "Full-service city reset point." },
      { mile: 1120, name: "Lima", lat: 44.6357, lon: -112.5918, resupply: "Convenience stop + basic food." },
      { mile: 1320, name: "Island Park", lat: 44.4157, lon: -111.3796, resupply: "Food + lodging options." },
      { mile: 1515, name: "Pinedale", lat: 42.8666, lon: -109.8622, resupply: "Strong resupply before long stretches." },
      { mile: 1705, name: "Steamboat Springs", lat: 40.4849, lon: -106.8317, resupply: "Bike, food, and weather reset." },
      { mile: 1885, name: "Silverthorne", lat: 39.6328, lon: -106.0747, resupply: "Dense services, high-country prep." },
      { mile: 2085, name: "Salida", lat: 38.5347, lon: -105.9989, resupply: "Popular rider rest and resupply." },
      { mile: 2260, name: "Del Norte", lat: 37.6781, lon: -106.3534, resupply: "Good stop before New Mexico push." },
      { mile: 2440, name: "Abiquiu", lat: 36.2033, lon: -106.3198, resupply: "Small services, monitor opening times." },
      { mile: 2590, name: "Silver City", lat: 32.7701, lon: -108.2803, resupply: "Last big prep before finish." },
      { mile: 2745, name: "Antelope Wells", lat: 31.3325, lon: -108.5103, resupply: "Finish line. Carry everything needed." }
    ]
  },
  great_divide_route: {
    id: "great_divide_route",
    label: "Great Divide Touring Route",
    plannerTitle: "Great Divide Touring Route Planner",
    gpxFile: "Bikepacking-Route-GDMBR_V_TD_2017.gpx",
    defaultDistance: 2664.6,
    defaultDays: 35,
    minDistance: 2000,
    maxDistance: 3200,
    storagePrefix: "great-divide-touring-route",
    profileCollection: "great_divide_touring_route_profiles",
    csvName: "great-divide-touring-route-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Banff", lat: 51.1784, lon: -115.5708, resupply: "Start-town setup and food carry prep." },
      { mile: 161, name: "Fernie", lat: 49.5042, lon: -115.0631, resupply: "Bike shops, food, motel options." },
      { mile: 277.5, name: "Eureka", lat: 48.8794, lon: -115.0531, resupply: "Town services and grocery options." },
      { mile: 368.6, name: "Whitefish", lat: 48.4111, lon: -114.3376, resupply: "Major resupply and repairs." },
      { mile: 378.6, name: "Columbia Falls", lat: 48.3725, lon: -114.1815, resupply: "Additional food and lodging options." },
      { mile: 509.7, name: "Seeley Lake", lat: 47.1799, lon: -113.4854, resupply: "Off route: services available in town." },
      { mile: 536, name: "Ovando", lat: 47.0219, lon: -113.1893, resupply: "Small stop, check seasonal services." },
      { mile: 574, name: "Lincoln", lat: 46.9544, lon: -112.6823, resupply: "Small-town grocery and cafe options." },
      { mile: 635, name: "Helena", lat: 46.5884, lon: -112.0245, resupply: "Full-service city reset point." },
      { mile: 674, name: "Basin", lat: 46.2469, lon: -112.2606, resupply: "Small stop between Helena and Butte." },
      { mile: 706, name: "Butte", lat: 46.0038, lon: -112.5347, resupply: "Major services and bike support." },
      { mile: 898, name: "Lima", lat: 44.6357, lon: -112.5918, resupply: "Convenience stop + basic food." },
      { mile: 985, name: "Macks Inn", lat: 44.4455, lon: -111.3333, resupply: "Food and lodging near route junction." },
      { mile: 1070, name: "Yellowstone Stops", lat: 44.6621, lon: -111.1041, resupply: "Park-area seasonal services." },
      { mile: 1212, name: "Pinedale", lat: 42.8666, lon: -109.8622, resupply: "Strong resupply before long stretches." },
      { mile: 1300, name: "Atlantic City", lat: 42.4958, lon: -108.7237, resupply: "Historic stop with limited services." },
      { mile: 1395, name: "Wamsutter", lat: 41.6722, lon: -107.9809, resupply: "Fuel station + convenience food." },
      { mile: 1527, name: "Steamboat Springs", lat: 40.4849, lon: -106.8317, resupply: "Bike, food, and weather reset." },
      { mile: 1602, name: "Kremmling", lat: 40.0583, lon: -106.3884, resupply: "Off route: larger town resupply option." },
      { mile: 1650, name: "Silverthorne", lat: 39.6328, lon: -106.0747, resupply: "Dense services, high-country prep." },
      { mile: 1668, name: "Breckenridge", lat: 39.4817, lon: -106.0384, resupply: "Grocery, lodging, and bike options." },
      { mile: 1717, name: "Hartsel", lat: 39.0217, lon: -105.7950, resupply: "Small stop and convenience options." },
      { mile: 1762, name: "Salida", lat: 38.5347, lon: -105.9989, resupply: "Popular rider rest and resupply." },
      { mile: 1768, name: "Poncha Springs", lat: 38.5125, lon: -106.0756, resupply: "Quick town stop just west of Salida." },
      { mile: 1915, name: "Del Norte", lat: 37.6781, lon: -106.3534, resupply: "Good stop before New Mexico push." },
      { mile: 2103, name: "Abiquiu", lat: 36.2033, lon: -106.3198, resupply: "Small services, monitor opening times." },
      { mile: 2180, name: "Cuba", lat: 36.0222, lon: -106.9589, resupply: "Reliable food and lodging options." },
      { mile: 2300, name: "Grants", lat: 35.1473, lon: -107.8514, resupply: "Large-town resupply and bike support." },
      { mile: 2370, name: "Pie Town", lat: 34.2995, lon: -108.1376, resupply: "Classic stop with limited hours." },
      { mile: 2544, name: "Silver City", lat: 32.7701, lon: -108.2803, resupply: "Last big prep before finish." },
      { mile: 2664.6, name: "Antelope Wells", lat: 31.3325, lon: -108.5103, resupply: "Finish point and final logistics." }
    ]
  },
  colorado_trail: {
    id: "colorado_trail",
    label: "Colorado Trail",
    plannerTitle: "Colorado Trail Planner",
    gpxFile: "Bikepacking-Route-Colorado-Trail_v2017_08.gpx",
    defaultDistance: 527.4,
    defaultDays: 15,
    minDistance: 300,
    maxDistance: 700,
    storagePrefix: "colorado-trail",
    profileCollection: "colorado_trail_profiles",
    csvName: "colorado-trail-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Waterton Canyon", lat: 39.4905, lon: -105.0927, resupply: "Trailhead start point near Denver." },
      { mile: 146, name: "Breckenridge", lat: 39.4817, lon: -106.0384, resupply: "Major grocery + bike service access." },
      { mile: 193, name: "Leadville", lat: 39.2508, lon: -106.2925, resupply: "High-altitude full resupply stop." },
      { mile: 215, name: "Twin Lakes", lat: 39.0828, lon: -106.3811, resupply: "Small stop with lodging and supplies." },
      { mile: 245, name: "Buena Vista", lat: 38.8422, lon: -106.1311, resupply: "Strong grocery and cafe options." },
      { mile: 398, name: "Slumgullion Pass", lat: 37.9902, lon: -107.2303, resupply: "High pass area checkpoint." },
      { mile: 449, name: "Silverton", lat: 37.8089, lon: -107.6645, resupply: "Compact but useful food options." },
      { mile: 530, name: "Durango", lat: 37.2754, lon: -107.8802, resupply: "Finish town and full services." }
    ]
  },
  azt_300: {
    id: "azt_300",
    label: "AZT 300",
    plannerTitle: "AZT 300 Planner",
    gpxFile: "AZT300_2026_v4.gpx",
    defaultDistance: 314.2,
    defaultDays: 10,
    minDistance: 240,
    maxDistance: 360,
    storagePrefix: "azt-300",
    profileCollection: "azt_300_profiles",
    csvName: "azt-300-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "AZT 300 Start", lat: 31.338665, lon: -110.337943, resupply: "Approximate southern start area." },
      { mile: 53, name: "Patagonia", lat: 31.5390, lon: -110.7565, resupply: "Town services and food options." },
      { mile: 150, name: "Tucson Area", lat: 32.2217, lon: -110.9265, resupply: "Major city resupply and bike shops." },
      { mile: 210, name: "Oracle", lat: 32.6109, lon: -110.7709, resupply: "Common AZT rider resupply town." },
      { mile: 285, name: "Superior", lat: 33.2939, lon: -111.0962, resupply: "Final full resupply before finish." },
      { mile: 300, name: "Picketpost TH", lat: 33.271968, lon: -111.176265, resupply: "AZT 300 finish point." }
    ]
  },
  azt_800: {
    id: "azt_800",
    label: "AZT 800",
    plannerTitle: "AZT 800 Planner",
    gpxFile: "AZT800_2026_v1.gpx",
    defaultDistance: 860.4,
    defaultDays: 20,
    minDistance: 650,
    maxDistance: 900,
    storagePrefix: "azt-800",
    profileCollection: "azt_800_profiles",
    csvName: "azt-800-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "AZT 800 Start", lat: 31.338663, lon: -110.337935, resupply: "Approximate southern start area." },
      { mile: 53, name: "Patagonia", lat: 31.5390, lon: -110.7565, resupply: "Early town resupply and food options." },
      { mile: 150, name: "Tucson", lat: 32.2217, lon: -110.9265, resupply: "Major resupply + bike service." },
      { mile: 210, name: "Oracle", lat: 32.6109, lon: -110.7709, resupply: "Classic AZT rider resupply point." },
      { mile: 300, name: "Picketpost TH", lat: 33.271968, lon: -111.176265, resupply: "AZT 300 finish / intermediate reset." },
      { mile: 470, name: "Pine", lat: 34.3845, lon: -111.4557, resupply: "Mountain town food + water reset." },
      { mile: 560, name: "Flagstaff", lat: 35.1983, lon: -111.6513, resupply: "Major city services and supplies." },
      { mile: 720, name: "Grand Canyon South Rim", lat: 36.0544, lon: -112.1401, resupply: "Park services and food options." },
      { mile: 760, name: "Grand Canyon North Rim", lat: 36.2107, lon: -112.0615, resupply: "Seasonal services at North Rim." },
      { mile: 800, name: "AZT 800 Finish", lat: 36.9990, lon: -112.5400, resupply: "Northern Arizona finish zone." }
    ]
  },
  peruvian_divide: {
    id: "peruvian_divide",
    label: "Peruvian Divide Trail",
    plannerTitle: "Peruvian Divide Trail Planner",
    gpxFile: "Peru_Great_Divide_Full_(Huaraz_to_Abancay)_22_07_2022.gpx",
    defaultDistance: 998.3,
    minDistance: 700,
    maxDistance: 1200,
    storagePrefix: "peruvian-divide-trail",
    profileCollection: "peruvian_divide_trail_profiles",
    csvName: "peruvian-divide-trail-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Huaraz", lat: -9.52945, lon: -77.52919, resupply: "Start-town prep and full resupply." },
      { mile: 170, name: "Checkpoint 1", lat: -10.563278, lon: -76.88435, resupply: "Mountain-town resupply checkpoint." },
      { mile: 340, name: "Checkpoint 2", lat: -11.717876, lon: -76.268721, resupply: "Food and basics, confirm local hours." },
      { mile: 510, name: "Checkpoint 3", lat: -12.66604, lon: -75.325526, resupply: "Mid-route resupply and recovery stop." },
      { mile: 680, name: "Checkpoint 4", lat: -13.542763, lon: -74.620822, resupply: "Stock up before long remote stretches." },
      { mile: 850, name: "Checkpoint 5", lat: -13.810942, lon: -73.760982, resupply: "Late-route resupply and hydration reset." },
      { mile: 998, name: "Abancay", lat: -13.638317, lon: -72.888067, resupply: "Finish-town resupply and lodging." }
    ]
  },
  custom_ride: {
    id: "custom_ride",
    label: "Create Your Own Ride",
    plannerTitle: "Create Your Own Ride Planner",
    gpxFile: "",
    defaultDistance: 500,
    defaultDays: 20,
    minDistance: 1,
    maxDistance: 5000,
    storagePrefix: "custom-ride",
    profileCollection: "custom_ride_profiles",
    csvName: "custom-ride-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Start", lat: 0, lon: 0, resupply: "Upload GPX to build route." },
      { mile: 500, name: "Finish", lat: 0, lon: 0, resupply: "Finish point from uploaded route." }
    ]
  },
  my_route: {
    id: "my_route",
    label: "My Route",
    plannerTitle: "My Route Planner",
    gpxFile: "",
    defaultDistance: 500,
    defaultDays: 20,
    minDistance: 1,
    maxDistance: 5000,
    storagePrefix: "my-route",
    profileCollection: "custom_ride_profiles",
    csvName: "my-route-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Start", lat: 0, lon: 0, resupply: "Upload GPX to build route." },
      { mile: 500, name: "Finish", lat: 0, lon: 0, resupply: "Finish point from uploaded route." }
    ]
  }
};

let STORAGE_KEY = "";
let COMMENTS_KEY = "";
let LOCAL_ACCOUNTS_KEY = "";
let LOCAL_AUTH_SESSION_KEY = "";
let LOCAL_PROFILE_PREFIX = "";
let CUSTOM_STOPS_KEY = "";
let GPX_FILE = "";
let PROFILE_COLLECTION = "";
let CSV_FILENAME = "";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCfePd4yItDfIwovYby_vvSEPrtPR8ivI",
  authDomain: "bikepack-planner.firebaseapp.com",
  projectId: "bikepack-planner",
  storageBucket: "bikepack-planner.firebasestorage.app",
  messagingSenderId: "862215840535",
  appId: "1:862215840535:web:2007383a2fef6f15278d52",
  measurementId: "G-5WKND9BS1M"
};
const MAPBOX_STYLE_ID = "mapbox/outdoors-v12";
const MAPBOX_ACCESS_TOKEN = "";
const PLAN_UNITS_KEY = "tour-divide-plan-units-v1";
const ROUTE_PROFILE_BASE_WIDTH = 2400;
const RWGPS_ELEV_OUTLIER_FT = 180;
const RWGPS_ELEV_MEDIAN_WINDOW_POINTS = 5;
const RWGPS_MIN_ASCENT_STEP_M = 0.35;
const RWGPS_TARGET_SAMPLE_COUNT = 60000;
const RWGPS_MIN_SAMPLE_STEP_MI = 0.004;
const RWGPS_MAX_SAMPLE_STEP_MI = 0.02;
const RWGPS_PROFILE_MAX_SAMPLES = 2000;
const AUTO_RWGPS_GAIN_FACTORS = {
  tour_divide: 1.0,
  great_divide_route: 1.0,
  colorado_trail: 1.0,
  azt_300: 1.0,
  azt_800: 1.0,
  peruvian_divide: 1.0,
  custom_ride: 1.0,
  my_route: 1.0
};
const RWGPS_ROUTE_GAIN_TARGETS_FT = {
  tour_divide: 178678,
  great_divide_route: 169020,
  colorado_trail: 94639
};
const ROUTE_MILE_CALIBRATION_CURVES = {
  // RWGPS reference for GDMBR:
  // full route +152,243 ft (route 8853382)
  // early segment (start to ~50 mi shown by highlight 0-266) +3,385 ft
  // We taper smoothly so day gains don't jump at hard mile boundaries.
  great_divide_route: [
    { mile: 0, factor: 2.1012 },
    { mile: 50, factor: 2.1012 },
    { mile: 150, factor: 1.6345 },
    { mile: 2664.6, factor: 1.6345 }
  ]
};

let resupplyPoints = [];
let planUnitSystem = "imperial";

const form = document.getElementById("plan-form");
const startDateInput = document.getElementById("start-date");
const finishDateInput = document.getElementById("finish-date");
const totalDaysInput = document.getElementById("total-days");
const restDaysInput = document.getElementById("rest-days");
const routeDistanceInput = document.getElementById("route-distance");
const routeDistanceLabel = document.getElementById("route-distance-label");
const planUnitsMetricInput = document.getElementById("plan-units-metric");
const plannerTotalRouteDistance = document.getElementById("planner-total-route-distance");
const dayList = document.getElementById("day-list");
const metricList = document.getElementById("metric-list");
const dayTemplate = document.getElementById("day-template");
const resupplyTemplate = document.getElementById("resupply-template");
const resetBtn = document.getElementById("reset-btn");
const extraStopNameInput = document.getElementById("extra-stop-name");
const extraStopMileInput = document.getElementById("extra-stop-mile");
const extraStopNotesInput = document.getElementById("extra-stop-notes");
const addExtraStopBtn = document.getElementById("add-extra-stop-btn");
const planControlsPanel = document.querySelector(".panel.controls");
const metricsPanel = document.querySelector(".panel.metrics");
const customUploadPanel = document.getElementById("custom-upload-panel");
const customGpxFileInput = document.getElementById("custom-gpx-file");
const customGpxStatus = document.getElementById("custom-gpx-status");
const customRouteNameInput = document.getElementById("custom-route-name");
const customProjectedResuppliesInput = document.getElementById("custom-projected-resupplies");
const customApplyUploadBtn = document.getElementById("custom-apply-upload-btn");
const customStopEditor = document.getElementById("custom-stop-editor");
const customStopEditorNote = document.getElementById("custom-stop-editor-note");
const customStopList = document.getElementById("custom-stop-list");
const customDeleteRouteBtn = document.getElementById("custom-delete-route-btn");
const exportBtn = document.getElementById("export-btn");
const exportExcelBtn = document.getElementById("export-excel-btn");
const exportFormatSelect = document.getElementById("export-format");
const cloudStatus = document.getElementById("cloud-status");
const authForm = document.getElementById("auth-form");
const authEmailInput = document.getElementById("auth-email");
const authPasswordInput = document.getElementById("auth-password");
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signInGoogleBtn = document.getElementById("sign-in-google-btn");
const signOutBtn = document.getElementById("sign-out-btn");
const syncNowBtn = document.getElementById("sync-now-btn");
const undoBtn = document.getElementById("undo-btn");
const accountToggleBtn = document.getElementById("account-toggle-btn");
const accountDropdown = document.getElementById("account-dropdown");
const signedInUserLabel = document.getElementById("signed-in-user-label");
const homeViewBtn = document.getElementById("home-view-btn");
const customerServiceViewBtn = document.getElementById("customer-service-view-btn");
const donationsViewBtn = document.getElementById("donations-view-btn");
const homePage = document.getElementById("home-page");
const customerServicePage = document.getElementById("customer-service-page");
const donationsPage = document.getElementById("donations-page");
const homeOpenActiveBtn = document.getElementById("home-open-active-btn");
const homeRouteList = document.getElementById("home-route-list");
const myRouteShortcutBtn = document.getElementById("my-route-shortcut-btn");
const plannerTitle = document.getElementById("planner-title");
const plannerSubhead = document.getElementById("planner-subhead");
const routeSwitcherNote = document.getElementById("route-switcher-note");
const unsignedWarningBanner = document.getElementById("unsigned-warning-banner");
const sectionsNav = document.getElementById("sections-nav");
const exportPanel = document.querySelector(".panel.export");
const daysPanel = document.querySelector(".panel.days");
const routeProfileKicker = document.getElementById("route-profile-kicker");
const siteTitle = document.querySelector(".site-title");

const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

const markerList = document.getElementById("marker-list");
const mapSubhead = document.getElementById("map-subhead");
const mapSectionTitle = document.getElementById("map-section-title");
const mapSectionElevation = document.getElementById("map-section-elevation");
const mapSectionProfile = document.getElementById("map-section-profile");
const mapSectionProfileMeta = document.getElementById("map-section-profile-meta");
const mapSectionComments = document.getElementById("map-section-comments");
const routeProfileAxisY = document.getElementById("route-profile-axis-y");
const routeProfileAxisX = document.getElementById("route-profile-axis-x");
const routeProfile = document.getElementById("route-profile");
const routeProfileMeta = document.getElementById("route-profile-meta");
const routeProfileScroll = document.getElementById("route-profile-scroll");
const routeProfileScrollWrap = document.querySelector(".profile-scroll");
const routeProfileZoom = document.getElementById("route-profile-zoom");
const routeProfileZoomLabel = document.getElementById("route-profile-zoom-label");
const dragModeBtn = document.getElementById("drag-mode-btn");
const fitRouteBtn = document.getElementById("fit-route-btn");
const mapStyleSelect = document.getElementById("map-style-select");
const mapboxTokenBtn = document.getElementById("mapbox-token-btn");

const commentForm = document.getElementById("comment-form");
const commentSectionSelect = document.getElementById("comment-section");
const commentNameInput = document.getElementById("comment-name");
const commentTextInput = document.getElementById("comment-text");
const commentImageInput = document.getElementById("comment-image");
const commentFeed = document.getElementById("comment-feed");
const commentTemplate = document.getElementById("comment-template");
const customerServiceForm = document.getElementById("customer-service-form");
const customerServiceStatus = document.getElementById("customer-service-status");
const csNameInput = document.getElementById("cs-name");
const csEmailInput = document.getElementById("cs-email");
const csTopicInput = document.getElementById("cs-topic");
const csRouteInput = document.getElementById("cs-route");
const csMessageInput = document.getElementById("cs-message");
const donationSuggestionForm = document.getElementById("donation-suggestion-form");
const donationStatus = document.getElementById("donation-status");
const donNameInput = document.getElementById("don-name");
const donEmailInput = document.getElementById("don-email");
const donAmountInput = document.getElementById("don-amount");
const donTypeInput = document.getElementById("don-type");
const donMessageInput = document.getElementById("don-message");
const routeSwitcherNav = document.querySelector(".route-switcher");

let plan = [];
let comments = [];
let appInitialized = false;
let map;
let stageOptions = [];
let gpxTrackPoints = [];
let stageLayer;
let resupplyLayer;
let sectionLayer;
let routeSections = [];
let routeLine;
let routeHoverLine;
let routeLineHalo;
let mapHoverMarker = null;
let mapHoverSnapshotEl = null;
let trackCumulativeMiles = [];
let trackCumulativeGainFt = [];
let trackCumulativeLossFt = [];
const rwgpsElevationEngineCache = new WeakMap();
let applyMapStyleImmediately = null;
let dayMarkers = [];
let resupplyMarkers = [];
let dragGuideLayer;
let dragModeEnabled = false;
let selectedSectionName = "";
let activeBaseLayer;
let mapboxFallbackActive = false;
let activeBaseMapName = "OpenStreetMap";
let syncingMapAndPlan = false;
let firebaseAuth = null;
let firestoreDb = null;
let authUser = null;
let cloudSyncTimer = null;
let cloudLoadInProgress = false;
let lastUserInputAt = 0;
let localAuthMode = false;
let authBusy = false;
let authStateVersion = 0;
let signedOutUiTimer = null;
let undoStack = [];
let latestSnapshot = "";
let restoringUndo = false;
let customUploadedTrackPoints = [];
let customUploadedFile = null;
let customRouteDisplayName = "My Route";
let mapPlanSelection = null;
let mapPlanPanelEl = null;
let mapPlanTitleEl = null;
let mapPlanSubheadEl = null;
let mapPlanContentEl = null;
let routeProfileHoverLineEl = null;
let routeProfileHoverDotEl = null;
let routeProfileDefaultMetaText = "";
let routeProfilePointForMile = null;
let routeProfileBounds = null;
let routeProfileInitializedView = false;
let mapRenderWatchdogTimer = null;
let activeRouteGpxDistanceMiles = null;
const CUSTOM_ROUTE_REGISTRY_KEY = "bikepack-finisher-custom-route-registry-v1";
const CUSTOM_ROUTE_REGISTRY_SESSION_KEY = "bikepack-finisher-custom-route-registry-session-v1";
const CUSTOM_ROUTE_ID_PREFIX = "my_route_";
const CUSTOMER_SERVICE_SUBMISSIONS_KEY = "bikepack-finisher-customer-service-submissions-v1";
const CUSTOMER_SERVICE_EMAIL = "bikepackfinishers@gmail.com";
const DONATION_SUGGESTION_SUBMISSIONS_KEY = "bikepack-finisher-donations-suggestions-v1";
const MAP_STYLE_KEY = "bikepack-map-style-v2";
const MAPBOX_TOKEN_KEY = "bikepack-mapbox-token-v1";
const MY_ROUTE_SHORTCUT_KEY_PREFIX = "bikepack-finisher-my-route-shortcut-v1:";
const MY_ROUTE_META_KEY = "bikepack-finisher-my-route-meta-v1";
const CUSTOM_ROUTE_PAYLOADS_KEY = "bikepack-finisher-custom-route-payloads-v1";
const CUSTOM_ROUTE_PAYLOADS_SESSION_KEY = "bikepack-finisher-custom-route-payloads-session-v1";
const MAP_ROUTE_DRAW_MAX_POINTS = 20000;
const MAP_HOVER_DRAW_MAX_POINTS = 12000;
const homeRouteMetricsCache = new Map();
const runtimeCustomRoutePayloads = new Map();
const CUSTOM_ROUTE_HANDOFF_KEY = "bikepack-custom-route-handoff-v1";
const HOME_ROUTE_DETAILS = {
  tour_divide: {
    location: "Canada to New Mexico, Rocky Mountains",
    ridingType: "Ultra-endurance mixed surface racing"
  },
  great_divide_route: {
    location: "Banff to Antelope Wells",
    ridingType: "Bike touring + long-distance bikepacking"
  },
  colorado_trail: {
    location: "Colorado, USA",
    ridingType: "High-altitude singletrack + rough jeep roads"
  },
  azt_300: {
    location: "Southern Arizona, USA",
    ridingType: "Desert singletrack + hike-a-bike race route"
  },
  azt_800: {
    location: "Mexico border to Utah border (Arizona)",
    ridingType: "Long-haul desert + mountain bikepacking route"
  },
  peruvian_divide: {
    location: "Andes, Peru",
    ridingType: "High-altitude mixed terrain expedition route"
  },
  custom_ride: {
    location: "Your uploaded route",
    ridingType: "Custom"
  }
};

const LEGACY_ROUTE_DISTANCES = {
  tour_divide: 2745,
  great_divide_route: 2745,
  colorado_trail: 527,
  azt_300: 300,
  azt_800: 800,
  peruvian_divide: 998
};

function getRouteFromUrl() {
  const routeParam = new URLSearchParams(window.location.search).get("route");
  if (routeParam && ROUTES[routeParam]) return routeParam;
  if (routeParam === "my_route") {
    const customRoutes = loadCustomRouteRegistry();
    const latest = customRoutes[customRoutes.length - 1];
    if (latest?.id && latest.id.startsWith(CUSTOM_ROUTE_ID_PREFIX)) return latest.id;
  }
  if (routeParam && String(routeParam).startsWith(CUSTOM_ROUTE_ID_PREFIX)) return routeParam;
  return DEFAULT_ROUTE_ID;
}

function viewModeFromUrl() {
  const view = new URLSearchParams(window.location.search).get("view");
  if (view === "home") return "home";
  if (view === "customer-service") return "customer_service";
  if (view === "donations") return "donations";
  return "planner";
}

function routeUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=planner`;
  return `${window.location.pathname}?route=${routeId}&view=planner`;
}

function homeUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=home`;
  return `${window.location.pathname}?route=${routeId}&view=home`;
}

function customerServiceUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=customer-service`;
  return `${window.location.pathname}?route=${routeId}&view=customer-service`;
}

function donationsUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=donations`;
  return `${window.location.pathname}?route=${routeId}&view=donations`;
}

function getRouteButtons() {
  return Array.from(document.querySelectorAll(".route-btn[data-route]"));
}

function isNamedCustomRoute(routeId) {
  const id = String(routeId || "");
  return id === "my_route" || id.startsWith(CUSTOM_ROUTE_ID_PREFIX);
}

function sanitizeRouteIdSegment(raw) {
  return String(raw || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24) || "route";
}

function generateCustomRouteId(name) {
  return `${CUSTOM_ROUTE_ID_PREFIX}${sanitizeRouteIdSegment(name)}-${Date.now().toString(36).slice(-6)}`;
}

function buildNamedCustomRouteDefinition(routeId, name = "My Route") {
  const label = sanitizeCustomRouteName(name);
  return {
    ...ROUTES.my_route,
    id: routeId,
    label,
    plannerTitle: `${label} Planner`,
    storagePrefix: `my-route-${routeId}`,
    profileCollection: "custom_ride_profiles",
    csvName: `${sanitizeRouteIdSegment(label)}-day-by-day-plan.csv`,
    resupplyPoints: ROUTES.my_route.resupplyPoints.map((point) => ({ ...point }))
  };
}

function ensureCustomRouteDefinition(routeId, name = "My Route") {
  if (!isNamedCustomRoute(routeId)) return null;
  if (!ROUTES[routeId]) {
    ROUTES[routeId] = buildNamedCustomRouteDefinition(routeId, name);
  } else if (name) {
    ROUTES[routeId].label = sanitizeCustomRouteName(name);
    ROUTES[routeId].plannerTitle = `${ROUTES[routeId].label} Planner`;
  }
  return ROUTES[routeId];
}

function normalizeCustomRouteRegistryEntries(entries) {
  if (!Array.isArray(entries)) return [];
  const uniqueById = new Map();
  entries
    .map((entry) => ({
      id: String(entry?.id || ""),
      name: sanitizeCustomRouteName(entry?.name || "My Route")
    }))
    .filter((entry) => String(entry.id || "").startsWith(CUSTOM_ROUTE_ID_PREFIX))
    .forEach((entry) => {
      if (!entry.id) return;
      uniqueById.set(entry.id, entry);
    });
  return Array.from(uniqueById.values());
}

function loadCustomRouteRegistry() {
  const parseList = (raw) => {
    if (!raw) return [];
    try {
      return normalizeCustomRouteRegistryEntries(JSON.parse(raw));
    } catch {
      return [];
    }
  };
  try {
    const localList = parseList(localStorage.getItem(CUSTOM_ROUTE_REGISTRY_KEY));
    const sessionList = parseList(sessionStorage.getItem(CUSTOM_ROUTE_REGISTRY_SESSION_KEY));
    return normalizeCustomRouteRegistryEntries([...localList, ...sessionList]);
  } catch {
    try {
      return parseList(sessionStorage.getItem(CUSTOM_ROUTE_REGISTRY_SESSION_KEY));
    } catch {
      return [];
    }
  }
}

function saveCustomRouteRegistry(registry) {
  const normalized = normalizeCustomRouteRegistryEntries(registry);
  const serialized = JSON.stringify(normalized);
  let wroteLocal = false;
  let wroteSession = false;
  try {
    localStorage.setItem(CUSTOM_ROUTE_REGISTRY_KEY, serialized);
    wroteLocal = true;
  } catch {
    // Ignore local storage failures.
  }
  try {
    sessionStorage.setItem(CUSTOM_ROUTE_REGISTRY_SESSION_KEY, serialized);
    wroteSession = true;
  } catch {
    // Ignore session storage failures.
  }
  return wroteLocal || wroteSession;
}

function loadCustomRoutePayloadStore() {
  const parseStore = (raw) => {
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };
  try {
    const localStore = parseStore(localStorage.getItem(CUSTOM_ROUTE_PAYLOADS_KEY));
    const sessionStore = parseStore(sessionStorage.getItem(CUSTOM_ROUTE_PAYLOADS_SESSION_KEY));
    return { ...localStore, ...sessionStore };
  } catch {
    try {
      return parseStore(sessionStorage.getItem(CUSTOM_ROUTE_PAYLOADS_SESSION_KEY));
    } catch {
      return {};
    }
  }
}

function saveCustomRoutePayloadStore(store) {
  const serialized = JSON.stringify(store && typeof store === "object" ? store : {});
  let wroteLocal = false;
  let wroteSession = false;
  try {
    localStorage.setItem(CUSTOM_ROUTE_PAYLOADS_KEY, serialized);
    wroteLocal = true;
  } catch {
    // Ignore storage write failures.
  }
  try {
    sessionStorage.setItem(CUSTOM_ROUTE_PAYLOADS_SESSION_KEY, serialized);
    wroteSession = true;
  } catch {
    // Ignore session storage failures.
  }
  return wroteLocal || wroteSession;
}

function compactCustomRoutePayloadStore() {
  const store = loadCustomRoutePayloadStore();
  const compacted = {};
  let changed = false;
  Object.keys(store).forEach((routeId) => {
    if (!isNamedCustomRoute(routeId)) {
      changed = true;
      return;
    }
    const payload = store[routeId];
    if (!payload || typeof payload !== "object" || !hasValidCustomRideDataPayload(payload)) {
      changed = true;
      return;
    }
    compacted[routeId] = {
      routeName: sanitizeCustomRouteName(payload.routeName || "My Route"),
      customRideData: payload.customRideData,
      updatedAt: payload.updatedAt || new Date().toISOString()
    };
    if ("config" in payload || "plan" in payload || "comments" in payload) changed = true;
  });
  if (changed) saveCustomRoutePayloadStore(compacted);
}

function getCustomRoutePayload(routeId) {
  if (!isNamedCustomRoute(routeId)) return null;
  const runtimePayload = runtimeCustomRoutePayloads.get(routeId);
  if (runtimePayload && hasValidCustomRideDataPayload(runtimePayload)) return runtimePayload;
  const store = loadCustomRoutePayloadStore();
  const payload = store[routeId];
  if (!payload || typeof payload !== "object") return null;
  if (!hasValidCustomRideDataPayload(payload)) return null;
  runtimeCustomRoutePayloads.set(routeId, payload);
  return payload;
}

function upsertCustomRoutePayload(routeId, payload) {
  if (!isNamedCustomRoute(routeId) || !payload || typeof payload !== "object") return;
  if (!hasValidCustomRideDataPayload(payload)) return;
  const normalizedPayload = {
    routeName: sanitizeCustomRouteName(payload.routeName || "My Route"),
    customRideData: payload.customRideData,
    updatedAt: payload.updatedAt || new Date().toISOString()
  };
  runtimeCustomRoutePayloads.set(routeId, normalizedPayload);
  const store = loadCustomRoutePayloadStore();
  store[routeId] = normalizedPayload;
  return saveCustomRoutePayloadStore(store);
}

function removeCustomRoutePayload(routeId) {
  if (!isNamedCustomRoute(routeId)) return;
  runtimeCustomRoutePayloads.delete(routeId);
  const store = loadCustomRoutePayloadStore();
  if (!store[routeId]) return;
  delete store[routeId];
  saveCustomRoutePayloadStore(store);
}

function saveCustomRouteHandoff(routeId, payload) {
  try {
    sessionStorage.setItem(
      CUSTOM_ROUTE_HANDOFF_KEY,
      JSON.stringify({
        routeId,
        payload,
        createdAt: Date.now()
      })
    );
  } catch {
    // Ignore session storage failures.
  }
}

function consumeCustomRouteHandoff(routeId) {
  try {
    const raw = sessionStorage.getItem(CUSTOM_ROUTE_HANDOFF_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.routeId !== routeId) return null;
    sessionStorage.removeItem(CUSTOM_ROUTE_HANDOFF_KEY);
    return parsed.payload || null;
  } catch {
    return null;
  }
}

async function saveCustomRouteRegistryToCloud() {
  if (!cloudReady() || localAuthMode || !firestoreDb || !authUser?.uid) return;
  const registry = loadCustomRouteRegistry();
  try {
    await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(authUser.uid).set(
      {
        customRouteRegistry: registry,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
  } catch {
    // Ignore cloud registry write failures.
  }
}

async function loadCustomRouteRegistryFromCloud() {
  if (!cloudReady() || localAuthMode || !firestoreDb || !authUser?.uid) return;
  try {
    const snapshot = await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(authUser.uid).get();
    if (!snapshot.exists) return;
    const data = snapshot.data() || {};
    const customRoutesMap = data?.customRoutes && typeof data.customRoutes === "object" ? data.customRoutes : {};
    const hasPersistedPayload = (routeId) => hasValidCustomRideDataPayload(customRoutesMap?.[routeId]);
    const cloudRoutes = Array.isArray(data.customRouteRegistry)
      ? data.customRouteRegistry
          .map((entry) => ({
            id: String(entry?.id || ""),
            name: sanitizeCustomRouteName(entry?.name || "My Route")
          }))
          .filter((entry) => isNamedCustomRoute(entry.id) && hasPersistedPayload(entry.id))
      : [];
    Object.keys(customRoutesMap).forEach((routeId) => {
      if (!isNamedCustomRoute(routeId)) return;
      const routeData = customRoutesMap[routeId] || {};
      if (!hasValidCustomRideDataPayload(routeData)) return;
      upsertCustomRoutePayload(routeId, {
        routeName: sanitizeCustomRouteName(routeData?.routeName || "My Route"),
        customRideData: routeData.customRideData,
        updatedAt: routeData.updatedAt || new Date().toISOString()
      });
      cloudRoutes.push({
        id: routeId,
        name: sanitizeCustomRouteName(routeData?.routeName || "My Route")
      });
    });
    if (!cloudRoutes.length) return;
    const mergedById = new Map();
    loadCustomRouteRegistry().forEach((entry) => mergedById.set(entry.id, entry));
    cloudRoutes.forEach((entry) => mergedById.set(entry.id, entry));
    const merged = Array.from(mergedById.values());
    saveCustomRouteRegistry(merged);
    hydrateCustomRoutesFromRegistry();
    renderCustomRouteButtons();
  } catch {
    // Ignore cloud registry load failures.
  }
}

function getCustomRouteStorageKeys(routeId) {
  const route = ROUTES[routeId];
  if (!route) return null;
  return {
    planKey: `${route.storagePrefix}-plan-v1`,
    commentsKey: `${route.storagePrefix}-comments-v1`
  };
}

function loadLocalCustomRouteSnapshot(routeId) {
  const storePayload = getCustomRoutePayload(routeId);
  const keys = getCustomRouteStorageKeys(routeId);
  let parsedPlan = null;
  let commentsList = [];
  if (keys) {
    try {
      const rawPlan = localStorage.getItem(keys.planKey);
      parsedPlan = rawPlan ? JSON.parse(rawPlan) : null;
    } catch {
      parsedPlan = null;
    }
    try {
      const rawComments = localStorage.getItem(keys.commentsKey);
      commentsList = rawComments ? JSON.parse(rawComments) : [];
    } catch {
      commentsList = [];
    }
  }
  if (storePayload) {
    return {
      routeName: sanitizeCustomRouteName(storePayload?.routeName || ROUTES[routeId]?.label || "My Route"),
      config: parsedPlan?.config || storePayload?.config || buildFallbackConfigForMyRoute(),
      plan: Array.isArray(parsedPlan?.plan)
        ? parsedPlan.plan
        : Array.isArray(storePayload?.plan)
          ? storePayload.plan
          : [],
      comments: Array.isArray(commentsList)
        ? commentsList
        : Array.isArray(storePayload?.comments)
          ? storePayload.comments
          : [],
      customRideData: storePayload?.customRideData || null,
      updatedAt: String(storePayload?.updatedAt || new Date().toISOString())
    };
  }
  if (!keys) return null;
  try {
    const rawPlan = localStorage.getItem(keys.planKey);
    if (!rawPlan) return null;
    const parsedPlan = JSON.parse(rawPlan);
    if (!hasValidCustomRideDataPayload(parsedPlan)) return null;
    const rawComments = localStorage.getItem(keys.commentsKey);
    const commentsList = rawComments ? JSON.parse(rawComments) : [];
    return {
      routeName: sanitizeCustomRouteName(parsedPlan?.customRideData?.routeName || ROUTES[routeId]?.label || "My Route"),
      config: parsedPlan?.config || buildFallbackConfigForMyRoute(),
      plan: Array.isArray(parsedPlan?.plan) ? parsedPlan.plan : [],
      comments: Array.isArray(commentsList) ? commentsList : [],
      customRideData: parsedPlan?.customRideData || null,
      updatedAt: new Date().toISOString()
    };
  } catch {
    return null;
  }
}

async function syncAllLocalCustomRoutesToCloud() {
  if (!cloudReady() || localAuthMode || !firestoreDb || !authUser?.uid) return;
  const registry = loadCustomRouteRegistry();
  if (!registry.length) return;

  const customRoutesPayload = {};
  registry.forEach((entry) => {
    ensureCustomRouteDefinition(entry.id, entry.name);
    const snapshot = loadLocalCustomRouteSnapshot(entry.id);
    if (!snapshot || !hasValidCustomRideDataPayload(snapshot)) return;
    customRoutesPayload[entry.id] = {
      routeName: sanitizeCustomRouteName(snapshot.routeName || entry.name || "My Route"),
      config: snapshot.config || buildFallbackConfigForMyRoute(),
      plan: Array.isArray(snapshot.plan) ? snapshot.plan : [],
      comments: Array.isArray(snapshot.comments) ? snapshot.comments : [],
      customRideData: snapshot.customRideData,
      updatedAt: new Date().toISOString()
    };
  });

  if (!Object.keys(customRoutesPayload).length) return;
  await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(authUser.uid).set(
    {
      customRouteRegistry: registry,
      customRoutes: customRoutesPayload,
      updatedAt: new Date().toISOString()
    },
    { merge: true }
  );
}

function upsertCustomRouteRegistryEntry(routeId, name) {
  if (!isNamedCustomRoute(routeId)) return;
  const safeName = sanitizeCustomRouteName(name);
  const registry = loadCustomRouteRegistry().filter((entry) => entry.id !== routeId);
  registry.push({ id: routeId, name: safeName });
  saveCustomRouteRegistry(registry);
  ensureCustomRouteDefinition(routeId, safeName);
  saveCustomRouteRegistryToCloud();
}

function removeCustomRouteRegistryEntry(routeId) {
  const registry = loadCustomRouteRegistry().filter((entry) => entry.id !== routeId);
  saveCustomRouteRegistry(registry);
  saveCustomRouteRegistryToCloud();
}

function hydrateCustomRoutesFromRegistry() {
  loadCustomRouteRegistry().forEach((entry) => {
    ensureCustomRouteDefinition(entry.id, entry.name);
  });
}

function migrateLegacyMyRouteStorage() {
  const existing = loadCustomRouteRegistry();
  if (existing.length) return;
  const legacyStorageKey = `${ROUTES.my_route.storagePrefix}-plan-v1`;
  const legacyCommentsKey = `${ROUTES.my_route.storagePrefix}-comments-v1`;
  const legacyStopsKey = `${ROUTES.my_route.storagePrefix}-custom-resupply-stops-v1`;
  let parsed = null;
  try {
    const raw = localStorage.getItem(legacyStorageKey);
    if (!raw) return;
    parsed = JSON.parse(raw);
  } catch {
    return;
  }
  if (!hasValidCustomRideDataPayload(parsed)) return;

  const routeName = sanitizeCustomRouteName(parsed?.customRideData?.routeName || "My Route");
  const migratedRouteId = generateCustomRouteId(routeName);
  const routeDef = ensureCustomRouteDefinition(migratedRouteId, routeName);
  if (!routeDef) return;

  try {
    localStorage.setItem(`${routeDef.storagePrefix}-plan-v1`, JSON.stringify(parsed));
    const legacyComments = localStorage.getItem(legacyCommentsKey);
    if (legacyComments) {
      localStorage.setItem(`${routeDef.storagePrefix}-comments-v1`, legacyComments);
    }
    const legacyStops = localStorage.getItem(legacyStopsKey);
    if (legacyStops) {
      localStorage.setItem(`${routeDef.storagePrefix}-custom-resupply-stops-v1`, legacyStops);
    }
  } catch {
    return;
  }

  upsertCustomRouteRegistryEntry(migratedRouteId, routeName);
}

function renderCustomRouteButtons() {
  if (!routeSwitcherNav) return;
  routeSwitcherNav.querySelectorAll(".route-btn-user-route").forEach((node) => node.remove());
  const preferredInsertNode = customerServiceViewBtn || donationsViewBtn || null;
  const insertBeforeNode =
    preferredInsertNode && routeSwitcherNav.contains(preferredInsertNode) ? preferredInsertNode : null;
  loadCustomRouteRegistry().forEach((entry) => {
    ensureCustomRouteDefinition(entry.id, entry.name);
    const button = document.createElement("button");
    button.className = "route-btn route-btn-my route-btn-user-route";
    button.type = "button";
    button.dataset.route = entry.id;
    button.textContent = entry.name;
    if (insertBeforeNode) {
      routeSwitcherNav.insertBefore(button, insertBeforeNode);
    } else {
      routeSwitcherNav.appendChild(button);
    }
  });
}

function getSavedMapboxToken() {
  try {
    return String(localStorage.getItem(MAPBOX_TOKEN_KEY) || "").trim();
  } catch {
    return "";
  }
}

function getMapboxToken() {
  const saved = getSavedMapboxToken();
  if (saved.startsWith("pk.")) return saved;
  if (typeof MAPBOX_ACCESS_TOKEN === "string" && MAPBOX_ACCESS_TOKEN.startsWith("pk.")) {
    return MAPBOX_ACCESS_TOKEN;
  }
  return "";
}

function hasUsableMapboxToken() {
  return getMapboxToken().startsWith("pk.");
}

function saveMapStylePreference(styleId) {
  try {
    localStorage.setItem(MAP_STYLE_KEY, styleId || "esriTopo");
  } catch {
    // Ignore localStorage write failures.
  }
}

function getMapStylePreference() {
  try {
    return String(localStorage.getItem(MAP_STYLE_KEY) || "esriTopo");
  } catch {
    return "esriTopo";
  }
}

function updateMapboxTokenButtonLabel() {
  if (!mapboxTokenBtn) return;
  mapboxTokenBtn.textContent = hasUsableMapboxToken() ? "Update Mapbox Token" : "Set Mapbox Token";
}

function setViewMode(mode) {
  const showHome = mode === "home";
  const showCustomerService = mode === "customer_service";
  const showDonations = mode === "donations";
  const standaloneMode = showHome || showCustomerService || showDonations;
  const isCreateRouteView = !standaloneMode && getRouteFromUrl() === "custom_ride";
  document.body.classList.toggle("home-only-mode", standaloneMode);
  document.body.classList.toggle("custom-builder-only-mode", isCreateRouteView);
  if (homePage) homePage.hidden = !showHome;
  if (customerServicePage) customerServicePage.hidden = !showCustomerService;
  if (donationsPage) donationsPage.hidden = !showDonations;
  if (customUploadPanel) customUploadPanel.hidden = !isCreateRouteView;
  if (sectionsNav) sectionsNav.hidden = standaloneMode || isCreateRouteView;
  if (plannerTitle) plannerTitle.hidden = standaloneMode || isCreateRouteView;
  if (plannerSubhead) plannerSubhead.hidden = standaloneMode || isCreateRouteView;
  if (sectionsNav) sectionsNav.style.display = sectionsNav.hidden ? "none" : "";
  if (plannerTitle) plannerTitle.style.display = plannerTitle.hidden ? "none" : "";
  if (plannerSubhead) plannerSubhead.style.display = plannerSubhead.hidden ? "none" : "";
  tabPanels.forEach((panel) => {
    const hidePanel = standaloneMode || isCreateRouteView;
    panel.style.display = hidePanel ? "none" : "";
  });
  getRouteButtons().forEach((button) => {
    button.classList.toggle("active", !standaloneMode && button.dataset.route === getRouteFromUrl());
  });
  if (routeSwitcherNote) {
    if (showHome) {
      routeSwitcherNote.textContent = "Home is active. Choose any route to open that planner.";
    } else if (showCustomerService) {
      routeSwitcherNote.textContent = "Customer Service is active. Submit a form and we will review it.";
    } else if (showDonations) {
      routeSwitcherNote.textContent = "Donations + Suggestions is active. Thanks for supporting Bikepack Finisher.";
    } else {
      routeSwitcherNote.textContent = `${(ROUTES[getRouteFromUrl()] || ROUTES[DEFAULT_ROUTE_ID]).label} is active now. Switch routes anytime.`;
    }
  }
  if (isCreateRouteView) {
    tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === "planner");
    });
  }
  tabPanels.forEach((panel) => {
    panel.hidden = standaloneMode || (isCreateRouteView && panel.dataset.tabPanel !== "planner");
  });
  if (homeViewBtn) homeViewBtn.classList.toggle("active", showHome);
  if (customerServiceViewBtn) customerServiceViewBtn.classList.toggle("active", showCustomerService);
  if (donationsViewBtn) donationsViewBtn.classList.toggle("active", showDonations);
  if (!standaloneMode && map) {
    setTimeout(() => {
      map.invalidateSize();
      if (routeLine) {
        try {
          const bounds = routeLine.getBounds();
          if (bounds && bounds.isValid && bounds.isValid()) {
            map.fitBounds(bounds, { padding: [30, 30] });
          }
        } catch {
          // Ignore fit errors during home/planner view transitions.
        }
      }
    }, 30);
  }
}

function gpxCandidates(fileName) {
  if (!fileName) return [];
  const encoded = encodeURI(fileName);
  const basePath = (() => {
    const path = window.location.pathname || "/";
    if (path.endsWith("/")) return path;
    const idx = path.lastIndexOf("/");
    return idx >= 0 ? path.slice(0, idx + 1) : "/";
  })();
  return Array.from(
    new Set([
      fileName,
      `./${fileName}`,
      `/${fileName}`,
      encoded,
      `./${encoded}`,
      `/${encoded}`,
      `${basePath}${fileName}`,
      `${basePath}${encoded}`,
      `XcodeImport/www/${fileName}`,
      `XcodeImport/www/${encoded}`,
      `/XcodeImport/www/${fileName}`,
      `/XcodeImport/www/${encoded}`
    ])
  );
}

function getRequestedStageCount() {
  const raw = Number(totalDaysInput?.value);
  if (Number.isFinite(raw) && raw >= 1) {
    return Math.max(1, Math.min(120, Math.round(raw)));
  }
  const activeRoute = ROUTES[getRouteFromUrl()] || ROUTES[DEFAULT_ROUTE_ID];
  const fallback = Number(activeRoute?.defaultDays || 20);
  return Math.max(1, Math.min(120, fallback));
}

function ensureRouteResupplyDefaults() {
  if (Array.isArray(resupplyPoints) && resupplyPoints.length) return;
  const activeRoute = ROUTES[getRouteFromUrl()] || ROUTES[DEFAULT_ROUTE_ID];
  const fallbackStops = Array.isArray(activeRoute?.resupplyPoints) ? activeRoute.resupplyPoints : [];
  if (!fallbackStops.length) return;
  resupplyPoints = fallbackStops.map((point) => ({ ...point }));
}

function hardRebuildMapUi() {
  if (!map || !gpxTrackPoints.length || !stageLayer || !resupplyLayer) return;
  ensureRouteResupplyDefaults();

  if (!trackCumulativeMiles.length) {
    trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
  }
  if (!trackCumulativeGainFt.length) {
    trackCumulativeGainFt = buildTrackCumulativeGainFt(gpxTrackPoints);
  }
  if (!trackCumulativeLossFt.length) {
    trackCumulativeLossFt = buildTrackCumulativeLossFt(gpxTrackPoints);
  }

  const stageCount = getRequestedStageCount();
  stageOptions = buildEvenStages(gpxTrackPoints, stageCount).stages;

  const displayPoints = getRouteDrawPoints(gpxTrackPoints);
  const hoverPoints = getHoverDrawPoints(gpxTrackPoints);
  const coords = displayPoints.map((point) => [point.lat, point.lon]);
  const hoverCoords = hoverPoints.map((point) => [point.lat, point.lon]);
  if (routeLine && map.hasLayer(routeLine)) map.removeLayer(routeLine);
  if (routeHoverLine && map.hasLayer(routeHoverLine)) map.removeLayer(routeHoverLine);
  if (routeLineHalo && map.hasLayer(routeLineHalo)) map.removeLayer(routeLineHalo);
  routeLineHalo = L.polyline(coords, {
    pane: "routePane",
    color: "#fffefb",
    weight: 8,
    opacity: 0.98,
    interactive: false,
    smoothFactor: 0,
    noClip: true
  }).addTo(map);
  routeLine = L.polyline(coords, {
    pane: "routePane",
    color: "#c62828",
    weight: 4,
    opacity: 1,
    interactive: false,
    smoothFactor: 0,
    noClip: true
  }).addTo(map);
  routeHoverLine = L.polyline(hoverCoords, {
    pane: "routeHoverPane",
    color: "#000000",
    weight: 36,
    opacity: 0,
    interactive: true,
    smoothFactor: 0.05,
    noClip: true
  }).addTo(map);
  routeHoverLine.on("mousemove", (event) => {
    const nearest = nearestTrackPointAndMile(event.latlng);
    if (!nearest) return;
    showMapHoverMarker(nearest.point);
    syncRouteProfileHoverByMile(nearest.mile, true, "Route");
    const elevText = nearest.point.ele === null ? "unavailable" : formatMapElevationFromMeters(nearest.point.ele);
    const total = trackCumulativeMiles[trackCumulativeMiles.length - 1] || 0;
    showMapHoverSnapshot(
      `<strong>Route Position</strong>` +
        `<div>Elevation: ${elevText}</div>` +
        `<div>From Banff: ${formatRouteDistanceWithUnits(nearest.mile)}</div>` +
        `<div>Route Total: ${formatRouteDistanceWithUnits(total)}</div>`,
      nearest.point
    );
  });
  routeHoverLine.on("mouseout", () => {
    hideMapHoverMarker();
    hideMapHoverSnapshot();
    clearRouteProfileHover();
  });
  routeLineHalo.bringToFront();
  routeLine.bringToFront();
  try {
    const bounds = routeLine.getBounds();
    if (bounds && bounds.isValid && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  } catch {
    const first = gpxTrackPoints[0];
    if (first && Number.isFinite(first.lat) && Number.isFinite(first.lon)) {
      map.setView([first.lat, first.lon], 6);
    }
  }

  stageLayer.clearLayers();
  dayMarkers.forEach((marker) => clearMarkerGuide(marker));
  dayMarkers = [];
  stageOptions.forEach((stage, index) => {
    const marker = L.marker([stage.lat, stage.lon], { icon: makeDayIcon(), draggable: true })
      .addTo(stageLayer)
      .bindPopup(`Day ${stage.stage}<br/>${formatStageRangeWithUnits(stage.startMile, stage.endMile)}`);
    marker.on("click", () => {
      if (!plan.length) return;
      setMapPlanSelection({ dayIndex: index });
    });
    attachDragHandlers(marker, "day", index);
    dayMarkers.push(marker);
  });

  renderResupplyMarkers();
  routeSections = buildResupplySections(gpxTrackPoints);
  drawSectionOverlays();
  renderRouteProfile();
  renderMarkerList();
  applyDragModeToMarkers();
}

async function loadGpxTrackPoints(fileName) {
  const candidates = gpxCandidates(fileName);
  let lastError = "Unknown GPX load failure";
  for (const path of candidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        lastError = `${path} -> HTTP ${response.status}`;
        continue;
      }
      const xmlText = await response.text();
      const parsed = parseGpxTrack(xmlText);
      if (parsed.length >= 2) return parsed;
      lastError = `${path} -> parsed ${parsed.length} route points (need at least 2)`;
    } catch (error) {
      lastError = `${path} -> ${error instanceof Error ? error.message : "fetch error"}`;
    }
  }
  throw new Error(lastError);
}

function formatHomeMiles(miles) {
  if (!Number.isFinite(miles) || miles <= 0) return "n/a";
  return `${Number(miles).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  })} mi`;
}

function isMetricPlannerUnits() {
  return planUnitSystem === "metric";
}

function milesToDisplayDistance(miles) {
  const numeric = Number(miles || 0);
  if (!Number.isFinite(numeric)) return 0;
  return isMetricPlannerUnits() ? numeric * 1.609344 : numeric;
}

function displayDistanceToMiles(value) {
  const numeric = Number(value || 0);
  if (!Number.isFinite(numeric)) return 0;
  return isMetricPlannerUnits() ? numeric / 1.609344 : numeric;
}

function feetToDisplayElevation(feet) {
  const numeric = Number(feet || 0);
  if (!Number.isFinite(numeric)) return 0;
  return isMetricPlannerUnits() ? numeric * 0.3048 : numeric;
}

function displayElevationToFeet(value) {
  const numeric = Number(value || 0);
  if (!Number.isFinite(numeric)) return 0;
  return isMetricPlannerUnits() ? numeric / 0.3048 : numeric;
}

function unitDistanceSuffix() {
  return isMetricPlannerUnits() ? "km" : "mi";
}

function unitElevationSuffix() {
  return isMetricPlannerUnits() ? "m" : "ft";
}

function formatDistanceNumber(value) {
  if (!Number.isFinite(value) || value <= 0) return "0";
  const rounded = Math.round(Number(value) * 10) / 10;
  if (Number.isInteger(rounded)) return String(Math.trunc(rounded));
  return rounded.toFixed(1);
}

function formatElevationNumber(value) {
  if (!Number.isFinite(value) || value <= 0) return "0";
  return String(Math.round(value));
}

function formatDistanceWithUnitFromMiles(miles) {
  if (!Number.isFinite(miles)) return "n/a";
  if (miles <= 0) return `0 ${unitDistanceSuffix()}`;
  const display = milesToDisplayDistance(miles);
  return `${formatDistanceNumber(display)} ${unitDistanceSuffix()}`;
}

function formatElevationWithUnitFromFeet(feet) {
  if (!Number.isFinite(feet) || feet <= 0) return `0 ${unitElevationSuffix()}`;
  const display = feetToDisplayElevation(feet);
  return `${Math.round(display).toLocaleString()} ${unitElevationSuffix()}`;
}

function formatDistanceValueFromMiles(miles) {
  return formatDistanceNumber(milesToDisplayDistance(Number(miles || 0)));
}

function formatElevationValueFromFeet(feet) {
  return Math.round(feetToDisplayElevation(Number(feet || 0))).toLocaleString();
}

function formatStageRangeWithUnits(startMile, endMile) {
  const start = formatDistanceValueFromMiles(Number(startMile || 0));
  const end = formatDistanceValueFromMiles(Number(endMile || 0));
  return `${start}-${end} ${unitDistanceSuffix()}`;
}

function formatRouteDistanceWithUnits(miles) {
  return `${formatDistanceValueFromMiles(miles)} ${unitDistanceSuffix()}`;
}

function formatMapElevationFromMeters(elevationMeters) {
  if (!Number.isFinite(elevationMeters)) return "unavailable";
  const elevationFeet = elevationMeters * 3.28084;
  return `${formatElevationValueFromFeet(elevationFeet)} ${unitElevationSuffix()}`;
}

function setRouteDistanceInputMiles(miles) {
  if (!routeDistanceInput) return;
  routeDistanceInput.value = formatDistanceNumber(milesToDisplayDistance(Number(miles || 0)));
}

function getRouteDistanceInputMiles() {
  if (!routeDistanceInput) return 0;
  return displayDistanceToMiles(Number(routeDistanceInput.value || 0));
}

function refreshDistanceBoundsForUnits() {
  if (!routeDistanceInput) return;
  const route = ROUTES[getRouteFromUrl()] || ROUTES[DEFAULT_ROUTE_ID];
  routeDistanceInput.min = formatDistanceNumber(milesToDisplayDistance(Number(route.minDistance || 0)));
  routeDistanceInput.max = formatDistanceNumber(milesToDisplayDistance(Number(route.maxDistance || 0)));
}

function formatMilesLikePlannerInput(miles) {
  return formatDistanceWithUnitFromMiles(miles);
}

function formatHomeGain(gainFt) {
  if (!Number.isFinite(gainFt) || gainFt <= 0) return "n/a";
  return `~${Math.round(gainFt).toLocaleString()} ft gain`;
}

function fallbackHomeMetrics(route) {
  return {
    distanceMiles: Number(route?.defaultDistance || 0),
    gainFt: null
  };
}

async function loadHomeMetrics(routeId) {
  if (homeRouteMetricsCache.has(routeId)) {
    return homeRouteMetricsCache.get(routeId);
  }

  const route = ROUTES[routeId];
  if (!route || !route.gpxFile) {
    const fallback = fallbackHomeMetrics(route);
    homeRouteMetricsCache.set(routeId, fallback);
    return fallback;
  }

  const pending = (async () => {
    try {
      const points = await loadGpxTrackPoints(route.gpxFile);
      const cumulativeMiles = buildTrackCumulativeMiles(points);
      const cumulativeGainFt = buildTrackCumulativeGainFt(points);
      return {
        distanceMiles: cumulativeMiles[cumulativeMiles.length - 1] || Number(route.defaultDistance || 0),
        gainFt: cumulativeGainFt[cumulativeGainFt.length - 1] || null
      };
    } catch {
      return fallbackHomeMetrics(route);
    }
  })();

  homeRouteMetricsCache.set(routeId, pending);
  const resolved = await pending;
  homeRouteMetricsCache.set(routeId, resolved);
  return resolved;
}

function buildHomeRouteRow(routeId) {
  const route = ROUTES[routeId];
  if (!route) return null;
  const detail = HOME_ROUTE_DETAILS[routeId] || HOME_ROUTE_DETAILS.custom_ride;
  const row = document.createElement("article");
  row.className = "home-route-row";
  row.innerHTML = `
    <button class="home-route-link" type="button">${route.label}</button>
    <div class="home-route-summary">
      <div class="home-route-stat"><span class="home-route-stat-label">Length</span><span class="home-route-stat-value home-distance-value">${formatHomeMiles(route.defaultDistance)}</span></div>
      <div class="home-route-stat"><span class="home-route-stat-label">Elevation</span><span class="home-route-stat-value home-gain-value">Loading...</span></div>
      <div class="home-route-stat"><span class="home-route-stat-label">Location</span><span class="home-route-stat-value">${detail.location}</span></div>
      <div class="home-route-stat"><span class="home-route-stat-label">Riding Type</span><span class="home-route-stat-value">${detail.ridingType}</span></div>
    </div>
  `;

  const link = row.querySelector(".home-route-link");
  if (link) {
    link.addEventListener("click", () => {
      window.location.href = routeUrl(routeId);
    });
  }

  const distanceEl = row.querySelector(".home-distance-value");
  const gainEl = row.querySelector(".home-gain-value");

  if (routeId === "custom_ride" || routeId === "my_route") {
    if (distanceEl) distanceEl.textContent = "Your GPX";
    if (gainEl) gainEl.textContent = "From uploaded route";
    return row;
  }

  loadHomeMetrics(routeId)
    .then((metrics) => {
      if (distanceEl) distanceEl.textContent = formatHomeMiles(metrics.distanceMiles);
      if (gainEl) gainEl.textContent = formatHomeGain(metrics.gainFt);
    })
    .catch(() => {
      if (distanceEl) distanceEl.textContent = formatHomeMiles(route.defaultDistance);
      if (gainEl) gainEl.textContent = "n/a";
    });

  return row;
}

function renderHomeRouteCollection() {
  if (!homeRouteList) return;
  homeRouteList.innerHTML = "";
  const order = [
    "tour_divide",
    "great_divide_route",
    "colorado_trail",
    "azt_300",
    "azt_800",
    "peruvian_divide",
    "custom_ride"
  ];
  order.forEach((routeId) => {
    const row = buildHomeRouteRow(routeId);
    if (row) homeRouteList.appendChild(row);
  });
}

function setupCustomerServiceForm() {
  if (!customerServiceForm) return;
  customerServiceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = String(csNameInput?.value || "").trim();
    const email = String(csEmailInput?.value || "").trim();
    const topic = String(csTopicInput?.value || "").trim();
    const route = String(csRouteInput?.value || "").trim();
    const message = String(csMessageInput?.value || "").trim();

    if (!name || !email || !topic || !message) {
      if (customerServiceStatus) customerServiceStatus.textContent = "Please fill in all required fields.";
      return;
    }

    const submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name,
      email,
      topic,
      route,
      message
    };

    let savedCount = 1;
    try {
      const raw = localStorage.getItem(CUSTOMER_SERVICE_SUBMISSIONS_KEY);
      const existing = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(existing) ? existing : [];
      list.push(submission);
      localStorage.setItem(CUSTOMER_SERVICE_SUBMISSIONS_KEY, JSON.stringify(list));
      savedCount = list.length;
    } catch {
      if (customerServiceStatus) {
        customerServiceStatus.textContent = "Could not save your submission in this browser. Please try again.";
      }
      return;
    }

    customerServiceForm.reset();
    if (customerServiceStatus) {
      customerServiceStatus.textContent = `Thanks, ${name}. Submission saved (#${savedCount}) on ${niceDate(new Date())}.`;
    }

    const topicLabel = topic === "bug"
      ? "Bug Report"
      : topic === "feature"
        ? "Feature Request"
        : topic === "account"
          ? "Account / Sign In"
          : "Other";
    const routeLabel = route ? (ROUTES[route]?.label || route) : "Not route-specific";
    const subject = encodeURIComponent(`[Bikepack Finisher] ${topicLabel} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topicLabel}\nRoute: ${routeLabel}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${CUSTOMER_SERVICE_EMAIL}?subject=${subject}&body=${body}`;
  });
}

function setupDonationSuggestionForm() {
  if (!donationSuggestionForm) return;
  donationSuggestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = String(donNameInput?.value || "").trim();
    const email = String(donEmailInput?.value || "").trim();
    const amount = Number(donAmountInput?.value || 0);
    const type = String(donTypeInput?.value || "").trim();
    const message = String(donMessageInput?.value || "").trim();

    if (!name || !email || !type || !message) {
      if (donationStatus) donationStatus.textContent = "Please fill in all required fields.";
      return;
    }

    const submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name,
      email,
      amount: Number.isFinite(amount) && amount > 0 ? amount : 0,
      type,
      message
    };

    let savedCount = 1;
    try {
      const raw = localStorage.getItem(DONATION_SUGGESTION_SUBMISSIONS_KEY);
      const existing = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(existing) ? existing : [];
      list.push(submission);
      localStorage.setItem(DONATION_SUGGESTION_SUBMISSIONS_KEY, JSON.stringify(list));
      savedCount = list.length;
    } catch {
      if (donationStatus) {
        donationStatus.textContent = "Could not save your submission in this browser. Please try again.";
      }
      return;
    }

    donationSuggestionForm.reset();
    if (donationStatus) {
      donationStatus.textContent = `Thanks, ${name}. Submission saved (#${savedCount}) on ${niceDate(new Date())}.`;
    }

    const typeLabel = type === "donation"
      ? "Donation"
      : type === "suggestion"
        ? "Suggestion"
        : "Donation + Suggestion";
    const amountLabel = submission.amount > 0 ? `$${submission.amount}` : "No amount entered";
    const subject = encodeURIComponent(`[Bikepack Finisher] ${typeLabel} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${typeLabel}\nAmount: ${amountLabel}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${CUSTOMER_SERVICE_EMAIL}?subject=${subject}&body=${body}`;
  });
}

function activeRouteId() {
  return getRouteFromUrl();
}

function isCustomRouteActive() {
  return isNamedCustomRoute(activeRouteId());
}

function isRouteBuilderActive() {
  return activeRouteId() === "custom_ride";
}

function pointAtMile(trackPoints, cumulative, mile) {
  return pointAtDistance(trackPoints, cumulative, mile);
}

function buildEvenResupplyPointsFromTrack(trackPoints, count, cumulativeMiles) {
  if (!trackPoints.length || !cumulativeMiles.length) return [];
  const safeCount = Math.max(2, Math.min(60, Number(count || 2)));
  const totalMiles = cumulativeMiles[cumulativeMiles.length - 1] || 0;
  const points = [];
  for (let i = 0; i < safeCount; i++) {
    const mile = safeCount === 1 ? 0 : (totalMiles * i) / (safeCount - 1);
    const point = pointAtMile(trackPoints, cumulativeMiles, mile);
    const name = i === 0 ? "Start" : i === safeCount - 1 ? "Finish" : `Resupply ${i}`;
    points.push({
      mile: Number(mile.toFixed(1)),
      name,
      lat: point.lat,
      lon: point.lon,
      resupply: i === 0 ? "Route start." : i === safeCount - 1 ? "Route finish." : "Custom route resupply point."
    });
  }
  return points;
}

function refreshCustomRouteVisibility(routeId) {
  const isBuilder = routeId === "custom_ride";
  const isMyRoute = isNamedCustomRoute(routeId);
  if (customUploadPanel) customUploadPanel.hidden = !isBuilder;
  if (customUploadPanel) customUploadPanel.classList.remove("custom-upload-panel--embedded");
  if (form) form.hidden = isBuilder;
  if (metricsPanel) metricsPanel.hidden = isBuilder;
  if (exportPanel) exportPanel.hidden = isBuilder;
  if (daysPanel) daysPanel.hidden = isBuilder;
  if (planControlsPanel) planControlsPanel.classList.remove("plan-controls--builder-only");
  if (customStopEditor) customStopEditor.hidden = !isMyRoute;
  if ((isBuilder || isMyRoute) && customRouteNameInput) {
    customRouteNameInput.value = customRouteDisplayName;
  }
}

function renderCustomStopEditor() {
  if (!customStopList || !customStopEditorNote || !isCustomRouteActive()) return;
  customStopList.innerHTML = "";
  if (!resupplyPoints.length) {
    customStopEditorNote.textContent = "Upload a custom GPX route to edit stops.";
    return;
  }
  customStopEditorNote.textContent = "Edit stop names and mile markers. Map + comments update automatically.";
  resupplyPoints.forEach((point, index) => {
    const row = document.createElement("article");
    row.className = "custom-stop-row";
    row.innerHTML = `
      <label>
        Stop name
        <input type="text" class="custom-stop-name-input" />
      </label>
      <label>
        Mile
        <input type="number" class="custom-stop-mile-input" min="0" step="0.1" />
      </label>
      <label>
        Notes
        <input type="text" class="custom-stop-note-input" />
      </label>
    `;
    const nameInput = row.querySelector(".custom-stop-name-input");
    const mileInput = row.querySelector(".custom-stop-mile-input");
    const noteInput = row.querySelector(".custom-stop-note-input");
    nameInput.value = point.name;
    mileInput.value = String(Number(point.mile || 0));
    noteInput.value = point.resupply || "";

    const sync = () => {
      const routeMax = trackCumulativeMiles[trackCumulativeMiles.length - 1] || getRouteDistanceInputMiles();
      const mile = Math.max(0, Math.min(routeMax, Number(mileInput.value || 0)));
      const snapped = pointAtMile(gpxTrackPoints, trackCumulativeMiles, mile);
      resupplyPoints[index] = {
        ...resupplyPoints[index],
        name: nameInput.value.trim() || `Stop ${index + 1}`,
        mile: Number(mile.toFixed(1)),
        lat: snapped.lat,
        lon: snapped.lon,
        resupply: noteInput.value.trim()
      };
      refreshResupplyUIAfterChange();
      renderCustomStopEditor();
    };

    [nameInput, mileInput, noteInput].forEach((input) => {
      input.addEventListener("input", sync);
    });
    customStopList.appendChild(row);
  });
}

function loadCustomResupplyStops() {
  if (!CUSTOM_STOPS_KEY) return [];
  const raw = localStorage.getItem(CUSTOM_STOPS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({
        mile: Number(item?.mile || 0),
        name: String(item?.name || "").trim(),
        lat: Number(item?.lat || 0),
        lon: Number(item?.lon || 0),
        resupply: String(item?.resupply || "").trim(),
        isCustom: true
      }))
      .filter((item) => item.name && Number.isFinite(item.mile));
  } catch {
    return [];
  }
}

function saveCustomResupplyStops() {
  if (!CUSTOM_STOPS_KEY) return;
  const customStops = resupplyPoints
    .filter((point) => point.isCustom)
    .map((point) => ({
      mile: Number(point.mile || 0),
      name: String(point.name || "").trim(),
      lat: Number(point.lat || 0),
      lon: Number(point.lon || 0),
      resupply: String(point.resupply || "")
    }));
  localStorage.setItem(CUSTOM_STOPS_KEY, JSON.stringify(customStops));
}

function sortResupplyPointsByMile() {
  resupplyPoints.sort((a, b) => Number(a.mile || 0) - Number(b.mile || 0));
}

function pointForMile(mile) {
  if (!gpxTrackPoints.length || !trackCumulativeMiles.length) {
    const fallback = resupplyPoints[0] || { lat: 0, lon: 0 };
    return { lat: fallback.lat, lon: fallback.lon };
  }
  return pointAtDistance(gpxTrackPoints, trackCumulativeMiles, mile);
}

function renderResupplyMarkers() {
  if (!resupplyLayer) return;
  resupplyLayer.clearLayers();
  resupplyMarkers = [];
  resupplyPoints.forEach((point, index) => {
    const marker = L.marker([point.lat, point.lon], { icon: makeResupplyIcon(), draggable: true })
      .addTo(resupplyLayer)
      .bindPopup(`<strong>${point.name}</strong><br/>Distance ${formatRouteDistanceWithUnits(point.mile)}<br/>${point.resupply}`);
    marker.on("click", () => {
      if (!plan.length) return;
      const assignments = resupplyDayAssignments(plan);
      const dayIndex = findDayIndexForStop(assignments, index);
      if (dayIndex >= 0) setMapPlanSelection({ dayIndex, stopIndex: index });
    });
    attachDragHandlers(marker, "resupply", index);
    resupplyMarkers.push(marker);
  });
}

function refreshResupplyUIAfterChange() {
  sortResupplyPointsByMile();
  saveCustomResupplyStops();
  renderResupplyMarkers();
  routeSections = buildResupplySections(gpxTrackPoints);
  setupCommentSections();
  renderRouteProfile();
  renderMarkerList();
  drawSectionOverlays();
  renderMapSectionComments(selectedSectionName);
  if (plan.length) {
    renderPlan(plan);
    persistPlan();
    const config = parseForm();
    if (config) renderMetrics(config, plan);
  }
  if (isCustomRouteActive()) renderCustomStopEditor();
  applyDragModeToMarkers();
}

function enforceSiteBranding() {
  if (siteTitle) siteTitle.textContent = "Bikepack Finisher";
}

function applyRouteConfig(routeId) {
  if (isNamedCustomRoute(routeId) && !ROUTES[routeId]) {
    const registryEntry = loadCustomRouteRegistry().find((entry) => entry.id === routeId);
    ensureCustomRouteDefinition(routeId, registryEntry?.name || "My Route");
  }
  const route = ROUTES[routeId] || ROUTES[DEFAULT_ROUTE_ID];
  if (route.comingSoon) return false;

  STORAGE_KEY = `${route.storagePrefix}-plan-v1`;
  COMMENTS_KEY = `${route.storagePrefix}-comments-v1`;
  LOCAL_ACCOUNTS_KEY = `${route.storagePrefix}-local-accounts-v1`;
  LOCAL_AUTH_SESSION_KEY = `${route.storagePrefix}-local-session-v1`;
  LOCAL_PROFILE_PREFIX = `${route.storagePrefix}-local-profile-v1:`;
  CUSTOM_STOPS_KEY = `${route.storagePrefix}-custom-resupply-stops-v1`;
  GPX_FILE = route.gpxFile;
  PROFILE_COLLECTION = route.profileCollection;
  CSV_FILENAME = route.csvName;
  activeRouteGpxDistanceMiles = null;
  resupplyPoints = route.resupplyPoints.map((point) => ({ ...point }));
  const customStops = loadCustomResupplyStops();
  if (isNamedCustomRoute(route.id) && customStops.length) {
    resupplyPoints = customStops;
    sortResupplyPointsByMile();
  } else if (customStops.length) {
    resupplyPoints = [...resupplyPoints, ...customStops];
    sortResupplyPointsByMile();
  }

  document.title = `Bikepack Finisher | ${route.label}`;
  enforceSiteBranding();
  if (plannerTitle) plannerTitle.textContent = route.plannerTitle;
  if (routeSwitcherNote) routeSwitcherNote.textContent = `${route.label} is active now. Switch routes anytime.`;
  if (sectionsNav) sectionsNav.setAttribute("aria-label", `${route.label} sections`);
  if (routeProfileKicker) routeProfileKicker.textContent = `${route.label} Elevation Profile`;
  if (plannerSubhead) {
    plannerSubhead.textContent = "Plan each race day, inspect the full route map with resupply points, and discuss route sections with other riders.";
  }

  if (routeDistanceInput) {
    refreshDistanceBoundsForUnits();
    setRouteDistanceInputMiles(route.defaultDistance);
  }

  if (totalDaysInput && Number.isFinite(route.defaultDays)) {
    totalDaysInput.value = String(route.defaultDays);
    if (startDateInput.value) {
      finishDateInput.value = addDays(startDateInput.value, Math.max(1, route.defaultDays) - 1);
    }
  }

  getRouteButtons().forEach((button) => {
    button.classList.toggle("active", viewModeFromUrl() === "planner" && button.dataset.route === route.id);
    const buttonRoute = ROUTES[button.dataset.route];
    button.disabled = Boolean(buttonRoute && buttonRoute.comingSoon);
  });
  refreshCustomRouteVisibility(route.id);
  return true;
}

function localDateString(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
}

function niceDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function mapsSearchUrl(query) {
  const q = encodeURIComponent(String(query || "").trim());
  return `https://maps.apple.com/?q=${q}`;
}

function setMapsLink(anchor, query) {
  if (!anchor) return;
  const clean = String(query || "").trim();
  if (!clean) {
    anchor.hidden = true;
    anchor.href = "#";
    return;
  }
  anchor.href = mapsSearchUrl(clean);
  anchor.hidden = false;
}

function getAutoRwgpsCalibrationFactor() {
  const routeId = getRouteFromUrl();
  const targetGainFt = Number(RWGPS_ROUTE_GAIN_TARGETS_FT[routeId]);
  const rawGainFt = Number(trackCumulativeGainFt?.[trackCumulativeGainFt.length - 1] || 0);
  if (Number.isFinite(targetGainFt) && targetGainFt > 0 && Number.isFinite(rawGainFt) && rawGainFt > 1000) {
    const dynamicFactor = targetGainFt / rawGainFt;
    if (Number.isFinite(dynamicFactor) && dynamicFactor > 0) {
      // Guardrails prevent extreme values on malformed tracks.
      return Math.max(0.6, Math.min(2.2, dynamicFactor));
    }
  }
  const factor = Number(AUTO_RWGPS_GAIN_FACTORS[routeId] ?? 1);
  if (!Number.isFinite(factor) || factor <= 0) return 1;
  return factor;
}

function applyElevationCalibrationFt(valueFt) {
  const numeric = Number(valueFt || 0);
  if (!Number.isFinite(numeric) || numeric <= 0) return 0;
  const factor = getAutoRwgpsCalibrationFactor();
  return Math.max(0, Math.round(numeric * factor));
}

function normalizeCalibrationCurve(routeDistance, curve) {
  const maxMile = Number.isFinite(routeDistance) && routeDistance > 0 ? routeDistance : Infinity;
  const normalized = (Array.isArray(curve) ? curve : [])
    .map((point) => ({
      mile: Number(point?.mile),
      factor: Number(point?.factor)
    }))
    .filter((point) => Number.isFinite(point.mile) && point.mile >= 0 && Number.isFinite(point.factor) && point.factor > 0)
    .map((point) => ({
      mile: Math.min(point.mile, maxMile),
      factor: point.factor
    }))
    .sort((a, b) => a.mile - b.mile);
  return normalized;
}

function calibrationFactorAtMile(routeDistance, curve, mile, fallbackFactor) {
  const points = normalizeCalibrationCurve(routeDistance, curve);
  if (!points.length) return fallbackFactor;

  const targetMile = Math.max(0, Number(mile || 0));
  if (targetMile <= points[0].mile) return points[0].factor;
  if (targetMile >= points[points.length - 1].mile) return points[points.length - 1].factor;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const next = points[i];
    if (targetMile > next.mile) continue;
    const span = Math.max(1e-9, next.mile - prev.mile);
    const ratio = Math.max(0, Math.min(1, (targetMile - prev.mile) / span));
    return prev.factor + (next.factor - prev.factor) * ratio;
  }
  return points[points.length - 1].factor;
}

function applyElevationCalibrationForRangeFt(startMile, endMile, routeDistance, rawFn) {
  const start = Number(startMile || 0);
  const end = Number(endMile || 0);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;

  const routeId = getRouteFromUrl();
  const fallbackFactor = getAutoRwgpsCalibrationFactor();
  const curve = ROUTE_MILE_CALIBRATION_CURVES[routeId];
  const points = normalizeCalibrationCurve(routeDistance, curve);
  if (!points.length) {
    return applyElevationCalibrationFt(rawFn(start, end, routeDistance));
  }

  // Integrate range in small chunks so calibration changes smoothly with miles.
  const boundaries = [start, end];
  points.forEach((point) => {
    if (point.mile > start && point.mile < end) boundaries.push(point.mile);
  });
  boundaries.sort((a, b) => a - b);

  let calibrated = 0;
  for (let i = 1; i < boundaries.length; i++) {
    const a = boundaries[i - 1];
    const b = boundaries[i];
    if (b <= a) continue;

    // Subdivide long sections to keep interpolation stable on large day ranges.
    const maxChunkMiles = 25;
    const chunks = Math.max(1, Math.ceil((b - a) / maxChunkMiles));
    for (let c = 0; c < chunks; c++) {
      const chunkStart = a + ((b - a) * c) / chunks;
      const chunkEnd = a + ((b - a) * (c + 1)) / chunks;
      if (chunkEnd <= chunkStart) continue;
      const mid = (chunkStart + chunkEnd) / 2;
      const factor = calibrationFactorAtMile(routeDistance, points, mid, fallbackFactor);
      const raw = Number(rawFn(chunkStart, chunkEnd, routeDistance) || 0);
      calibrated += Math.max(0, raw) * factor;
    }
  }

  return Math.max(0, Math.round(calibrated));
}

function parseForm() {
  const startDate = startDateInput.value;
  const finishDate = finishDateInput.value;
  const totalDays = Number(totalDaysInput.value);
  const restDays = Number(restDaysInput.value);
  const routeDistance = displayDistanceToMiles(Number(routeDistanceInput.value));

  if (!startDate || totalDays < 1 || restDays < 0 || routeDistance < 1) {
    return null;
  }

  const rideDays = Math.max(totalDays - restDays, 1);
  return {
    startDate,
    finishDate,
    totalDays,
    restDays,
    routeDistance,
    rideDays,
    avgRideMiles: routeDistance / rideDays
  };
}

function dateDiffInDaysInclusive(startDate, endDate) {
  const start = new Date(`${startDate}T12:00:00`);
  const end = new Date(`${endDate}T12:00:00`);
  const ms = end.getTime() - start.getTime();
  return Math.floor(ms / 86400000) + 1;
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

function setCloudStatus(text) {
  if (cloudStatus) cloudStatus.textContent = text;
}

function markUserEditingNow() {
  lastUserInputAt = Date.now();
}

function isUserActivelyEditingPlanner() {
  const active = document.activeElement;
  if (
    active &&
    (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.tagName === "SELECT" || active.isContentEditable)
  ) {
    return true;
  }
  return Date.now() - lastUserInputAt < 6000;
}

function cloudReady() {
  return Boolean(authUser);
}

function setUnsignedWarningVisible(visible) {
  if (!unsignedWarningBanner) return;
  unsignedWarningBanner.hidden = !visible;
}

function updateSignedInIndicators() {
  const email = normalizeEmail(authUser?.email || "");
  const isSignedIn = Boolean(email);

  if (signedInUserLabel) {
    if (isSignedIn) {
      signedInUserLabel.hidden = false;
      signedInUserLabel.textContent = `Signed in: ${email}`;
    } else {
      signedInUserLabel.hidden = true;
      signedInUserLabel.textContent = "Not signed in";
    }
  }

  if (!unsignedWarningBanner) return;
  unsignedWarningBanner.hidden = false;
  if (isSignedIn) {
    unsignedWarningBanner.classList.remove("is-signed-out");
    unsignedWarningBanner.classList.add("is-signed-in");
    unsignedWarningBanner.textContent = `Signed in: ${email}.`;
  } else {
    unsignedWarningBanner.classList.remove("is-signed-in");
    unsignedWarningBanner.classList.add("is-signed-out");
    unsignedWarningBanner.textContent = "Signed out. Sign in to save and sync your route data.";
  }
}

function maybeWarnUnsignedChanges() {
  if (!appInitialized) return;
  updateSignedInIndicators();
}

function stateSnapshot() {
  const config = parseForm();
  return JSON.stringify({
    route: getRouteFromUrl(),
    config: config || null,
    plan,
    comments
  });
}

function updateUndoButton() {
  if (!undoBtn) return;
  undoBtn.disabled = undoStack.length === 0;
}

function captureUndoPoint() {
  if (restoringUndo) return;
  const current = stateSnapshot();
  if (!latestSnapshot) {
    latestSnapshot = current;
    updateUndoButton();
    return;
  }
  if (current === latestSnapshot) return;
  undoStack.push(latestSnapshot);
  if (undoStack.length > 80) undoStack.shift();
  latestSnapshot = current;
  updateUndoButton();
}

function resetUndoBaseline() {
  latestSnapshot = stateSnapshot();
  updateUndoButton();
}

function applyUndoSnapshot(snapshotString) {
  let parsed;
  try {
    parsed = JSON.parse(snapshotString);
  } catch {
    return;
  }

  const config = parsed && typeof parsed === "object" ? parsed.config : null;
  const parsedPlan = Array.isArray(parsed?.plan) ? parsed.plan.map(normalizeDay) : [];
  const parsedComments = Array.isArray(parsed?.comments) ? parsed.comments : [];

  restoringUndo = true;
  try {
    if (config) applyPlannerConfig(config);
    plan = parsedPlan;
    comments = parsedComments;

    renderPlan(plan);
    const liveConfig = parseForm();
    if (liveConfig) renderMetrics(liveConfig, plan);
    renderComments();
    updateStagesFromInput();
    persistPlan();
    persistComments();
  } finally {
    restoringUndo = false;
    latestSnapshot = stateSnapshot();
    updateUndoButton();
  }
}

function undoLastChange() {
  if (!undoStack.length) return;
  const snapshot = undoStack.pop();
  applyUndoSnapshot(snapshot);
}

function firebaseConfigured() {
  return (
    FIREBASE_CONFIG.apiKey &&
    FIREBASE_CONFIG.authDomain &&
    FIREBASE_CONFIG.projectId &&
    FIREBASE_CONFIG.appId
  );
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function localProfileKey(email) {
  return `${LOCAL_PROFILE_PREFIX}${normalizeEmail(email)}`;
}

function cloudProfileDocIdForRoute(routeId, uid) {
  const safeUid = String(uid || "");
  if (!safeUid) return "";
  return safeUid;
}

function loadLocalAccounts() {
  const raw = localStorage.getItem(LOCAL_ACCOUNTS_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLocalAccounts(accounts) {
  localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(accounts));
}

function getLocalSessionEmail() {
  return normalizeEmail(localStorage.getItem(LOCAL_AUTH_SESSION_KEY) || "");
}

function setLocalSessionEmail(email) {
  localStorage.setItem(LOCAL_AUTH_SESSION_KEY, normalizeEmail(email));
}

function clearLocalSessionEmail() {
  localStorage.removeItem(LOCAL_AUTH_SESSION_KEY);
}

function customRideLocalProfileKey(email) {
  return `${ROUTES.my_route.storagePrefix}-local-profile-v1:${normalizeEmail(email)}`;
}

function legacyCustomRideLocalProfileKey(email) {
  return `${ROUTES.custom_ride.storagePrefix}-local-profile-v1:${normalizeEmail(email)}`;
}

function hasValidCustomRideDataPayload(data) {
  const points = Array.isArray(data?.customRideData?.trackPoints) ? data.customRideData.trackPoints : [];
  return points.length >= 2;
}

function hasValidCustomRideDataObject(customRideData) {
  const points = Array.isArray(customRideData?.trackPoints) ? customRideData.trackPoints : [];
  return points.length >= 2;
}

function withTrackPointLimit(customRideData, maxPoints) {
  if (!hasValidCustomRideDataObject(customRideData)) return null;
  const normalizedTrack = customRideData.trackPoints.map(normalizeStoredTrackPoint).filter(Boolean);
  if (normalizedTrack.length < 2) return null;
  const limitedTrack = thinTrackPointsForStorage(normalizedTrack, Math.max(100, Number(maxPoints || 100)));
  if (limitedTrack.length < 2) return null;
  return {
    ...customRideData,
    trackPoints: limitedTrack
  };
}

async function resolveCustomRideDataForSync(routeId, currentCustomRideData) {
  if (hasValidCustomRideDataObject(currentCustomRideData)) return currentCustomRideData;

  const localSnapshot = loadLocalCustomRouteSnapshot(routeId);
  if (hasValidCustomRideDataPayload(localSnapshot)) {
    return localSnapshot.customRideData;
  }

  if (!localAuthMode && firestoreDb && authUser?.uid) {
    try {
      const docId = cloudProfileDocIdForRoute(routeId, authUser.uid);
      if (!docId) return null;
      const snapshot = await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(docId).get();
      if (!snapshot.exists) return null;
      const cloudData = snapshot.data() || {};
      const customRoutesMap =
        cloudData?.customRoutes && typeof cloudData.customRoutes === "object" ? cloudData.customRoutes : {};
      const routePayload = customRoutesMap?.[routeId];
      if (hasValidCustomRideDataPayload(routePayload)) {
        return routePayload.customRideData;
      }
      if (hasValidCustomRideDataPayload(cloudData)) {
        return cloudData.customRideData;
      }
    } catch {
      // Ignore cloud lookup failures here; caller will handle null result.
    }
  }

  return null;
}

function sanitizeCustomRouteName(rawName) {
  const cleaned = String(rawName || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "My Route";
  return cleaned.slice(0, 48);
}

function loadMyRouteMeta() {
  try {
    const raw = localStorage.getItem(MY_ROUTE_META_KEY);
    if (!raw) return { hasRoute: false, name: "My Route" };
    const parsed = JSON.parse(raw);
    return {
      hasRoute: Boolean(parsed?.hasRoute),
      name: sanitizeCustomRouteName(parsed?.name || "My Route")
    };
  } catch {
    return { hasRoute: false, name: "My Route" };
  }
}

function saveMyRouteMeta(meta = {}) {
  const payload = {
    hasRoute: Boolean(meta.hasRoute),
    name: sanitizeCustomRouteName(meta.name || "My Route")
  };
  try {
    localStorage.setItem(MY_ROUTE_META_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage write failures.
  }
}

function clearMyRouteMeta() {
  try {
    localStorage.removeItem(MY_ROUTE_META_KEY);
  } catch {
    // Ignore storage failures.
  }
}

function setMyRouteShortcutLabel(name) {
  if (!myRouteShortcutBtn) return;
  const safeName = sanitizeCustomRouteName(name);
  myRouteShortcutBtn.textContent = safeName;
  myRouteShortcutBtn.title = safeName;
}

function hasCustomRideDataInLocalProfile(email) {
  if (!email) return false;
  try {
    const raw = localStorage.getItem(customRideLocalProfileKey(email));
    if (!raw) return false;
    const data = JSON.parse(raw);
    return Boolean(data?.config || (Array.isArray(data?.plan) && data.plan.length) || (Array.isArray(data?.comments) && data.comments.length));
  } catch {
    return false;
  }
}

function myRouteShortcutStorageKey() {
  const email = normalizeEmail(authUser?.email || "");
  if (!email) return "";
  return `${MY_ROUTE_SHORTCUT_KEY_PREFIX}${email}`;
}

function setMyRouteShortcutFlag(enabled) {
  const key = myRouteShortcutStorageKey();
  if (!key) return;
  try {
    if (enabled) localStorage.setItem(key, "1");
    else localStorage.removeItem(key);
  } catch {
    // Ignore storage failures.
  }
}

function hasMyRouteShortcutFlag() {
  const key = myRouteShortcutStorageKey();
  if (!key) return false;
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function setMyRouteShortcutVisible(visible) {
  if (myRouteShortcutBtn) myRouteShortcutBtn.hidden = true;
  renderCustomRouteButtons();
}

function updateAccountToggleLabel() {
  if (!accountToggleBtn) return;
  accountToggleBtn.textContent = authUser ? "Account" : "Sign In";
  updateSignedInIndicators();
}

async function refreshMyRouteShortcutVisibility() {
  if (!myRouteShortcutBtn) return;
  await loadCustomRouteRegistryFromCloud();
  const myRouteMeta = loadMyRouteMeta();
  if (myRouteMeta?.name) {
    customRouteDisplayName = myRouteMeta.name;
    setMyRouteShortcutLabel(myRouteMeta.name);
  }
  if (!authUser) {
    setMyRouteShortcutVisible(Boolean(myRouteMeta.hasRoute || loadCustomRouteRegistry().length));
    return;
  }

  const email = normalizeEmail(authUser.email || "");
  if (!email) {
    setMyRouteShortcutVisible(loadCustomRouteRegistry().length > 0);
    return;
  }

  let shouldShow = Boolean(myRouteMeta.hasRoute) || hasMyRouteShortcutFlag() || loadCustomRouteRegistry().length > 0;
  try {
    const raw = localStorage.getItem(customRideLocalProfileKey(email)) || localStorage.getItem(legacyCustomRideLocalProfileKey(email));
    if (raw) {
      const parsed = JSON.parse(raw);
      const hasPayload = hasValidCustomRideDataPayload(parsed);
      const savedName = sanitizeCustomRouteName(parsed?.customRideData?.routeName || "");
      if (hasPayload && savedName) {
        customRouteDisplayName = savedName;
        setMyRouteShortcutLabel(savedName);
        saveMyRouteMeta({ hasRoute: true, name: savedName });
        shouldShow = true;
      }
    }
  } catch {
    // Ignore malformed local profile data.
  }

  if (!shouldShow && !localAuthMode && firestoreDb && authUser.uid) {
    try {
      const snapshot = await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(authUser.uid).get();
      if (snapshot.exists) {
        const data = snapshot.data() || {};
        const customRoutesMap = data?.customRoutes && typeof data.customRoutes === "object" ? data.customRoutes : {};
        Object.keys(customRoutesMap).forEach((routeId) => {
          if (!isNamedCustomRoute(routeId)) return;
          const routeData = customRoutesMap[routeId] || {};
          upsertCustomRouteRegistryEntry(routeId, sanitizeCustomRouteName(routeData?.routeName || "My Route"));
        });
        if (Object.keys(customRoutesMap).length > 0) {
          shouldShow = true;
        }
      }
    } catch {
      // Ignore cloud check failures and keep local visibility state.
    }
  }

  if (shouldShow) setMyRouteShortcutFlag(true);
  setMyRouteShortcutVisible(shouldShow);
}

function saveLocalProfileWithFallback(email, payload) {
  const key = localProfileKey(email);
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    return { ok: true, degraded: false };
  } catch {
    try {
      // Fallback: drop heavy inline images from comments if storage quota is hit.
      const slimComments = Array.isArray(payload.comments)
        ? payload.comments.map((comment) => ({
            ...comment,
            image: ""
          }))
        : [];
      const slimPayload = {
        ...payload,
        comments: slimComments
      };
      localStorage.setItem(key, JSON.stringify(slimPayload));
      return { ok: true, degraded: true };
    } catch {
      return { ok: false, degraded: false };
    }
  }
}

const CUSTOM_ROUTE_MAX_STORED_TRACK_POINTS = 2500;

function normalizeStoredTrackPoint(point) {
  const lat = Number(point?.lat);
  const lon = Number(point?.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  const eleRaw = Number(point?.ele);
  return {
    lat: Number(lat.toFixed(6)),
    lon: Number(lon.toFixed(6)),
    ele: Number.isFinite(eleRaw) ? Number(eleRaw.toFixed(1)) : null
  };
}

function normalizeStoredResupplyPoint(point) {
  const mile = Number(point?.mile);
  const lat = Number(point?.lat);
  const lon = Number(point?.lon);
  if (!Number.isFinite(mile) || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return {
    mile: Number(mile.toFixed(1)),
    name: String(point?.name || "").trim() || "Stop",
    lat: Number(lat.toFixed(6)),
    lon: Number(lon.toFixed(6)),
    resupply: String(point?.resupply || "").trim(),
    isCustom: Boolean(point?.isCustom)
  };
}

function thinTrackPointsForStorage(points, maxPoints = CUSTOM_ROUTE_MAX_STORED_TRACK_POINTS) {
  if (!Array.isArray(points)) return [];
  if (points.length <= maxPoints) return points;
  const stride = Math.ceil(points.length / maxPoints);
  const thinned = [];
  for (let i = 0; i < points.length; i += stride) {
    thinned.push(points[i]);
  }
  if (points.length && thinned[thinned.length - 1] !== points[points.length - 1]) {
    thinned.push(points[points.length - 1]);
  }
  return thinned;
}

function buildCustomRideDataPayload() {
  if (!isCustomRouteActive()) return null;
  const validTrack = Array.isArray(customUploadedTrackPoints)
    ? customUploadedTrackPoints.map(normalizeStoredTrackPoint).filter(Boolean)
    : [];
  if (validTrack.length < 2) return null;
  const storedTrack = thinTrackPointsForStorage(validTrack);
  const storedResupply = Array.isArray(resupplyPoints)
    ? resupplyPoints.map(normalizeStoredResupplyPoint).filter(Boolean)
    : [];
  return {
    trackPoints: storedTrack,
    resupplyPoints: storedResupply,
    uploadedFileName: String(customUploadedFile?.name || ""),
    routeName: sanitizeCustomRouteName(customRouteDisplayName),
    sourcePointCount: validTrack.length
  };
}

function buildCustomRideDataFromCurrentState(uploadedFileName = "") {
  const validTrack = Array.isArray(customUploadedTrackPoints)
    ? customUploadedTrackPoints.map(normalizeStoredTrackPoint).filter(Boolean)
    : [];
  if (validTrack.length < 2) return null;
  const storedTrack = thinTrackPointsForStorage(validTrack);
  const storedResupply = Array.isArray(resupplyPoints)
    ? resupplyPoints.map(normalizeStoredResupplyPoint).filter(Boolean)
    : [];
  return {
    trackPoints: storedTrack,
    resupplyPoints: storedResupply,
    uploadedFileName: String(uploadedFileName || customUploadedFile?.name || ""),
    routeName: sanitizeCustomRouteName(customRouteDisplayName),
    sourcePointCount: validTrack.length
  };
}

function buildFallbackConfigForMyRoute() {
  const routeDistanceFromTrack =
    trackCumulativeMiles[trackCumulativeMiles.length - 1] ||
    buildTrackCumulativeMiles(customUploadedTrackPoints).slice(-1)[0] ||
    getRouteDistanceInputMiles() ||
    Number(ROUTES.my_route.defaultDistance || 500);
  const totalDays = Math.max(1, Number(totalDaysInput?.value || ROUTES.my_route.defaultDays || 20));
  const restDays = Math.max(0, Number(restDaysInput?.value || 1));
  const startDate = String(startDateInput?.value || localDateString(new Date()));
  const finishDate = String(finishDateInput?.value || addDays(startDate, totalDays - 1));
  const rideDays = Math.max(totalDays - restDays, 1);
  return {
    startDate,
    finishDate,
    totalDays,
    restDays,
    routeDistance: routeDistanceFromTrack,
    rideDays,
    avgRideMiles: routeDistanceFromTrack / rideDays
  };
}

async function persistMyRouteSnapshot(options = {}) {
  const syncCloud = Boolean(options.syncCloud);
  const uploadedFileName = String(options.uploadedFileName || "");
  const targetRouteId = isNamedCustomRoute(options.routeId)
    ? options.routeId
    : isNamedCustomRoute(activeRouteId())
      ? activeRouteId()
      : "my_route";
  ensureCustomRouteDefinition(targetRouteId, options.routeName || customRouteDisplayName);
  const overridePayload = options.customRideDataOverride;
  const myPayload =
    (hasValidCustomRideDataPayload({ customRideData: overridePayload }) ? overridePayload : null) ||
    buildCustomRideDataFromCurrentState(uploadedFileName);
  if (!myPayload) return false;

  const myRoute = ROUTES[targetRouteId] || ROUTES.my_route;
  const myStorageKey = `${myRoute.storagePrefix}-plan-v1`;
  const myCommentsKey = `${myRoute.storagePrefix}-comments-v1`;
  const myStopsKey = `${myRoute.storagePrefix}-custom-resupply-stops-v1`;
  const config =
    (options.configOverride && typeof options.configOverride === "object" ? options.configOverride : null) ||
    parseForm() ||
    buildFallbackConfigForMyRoute();
  const planToStore = Array.isArray(options.planOverride)
    ? options.planOverride
    : Array.isArray(plan) && plan.length
      ? plan
      : buildPlan(config);
  const commentsToStore = Array.isArray(options.commentsOverride) ? options.commentsOverride : Array.isArray(comments) ? comments : [];
  let localWriteOk = true;
  try {
    localStorage.setItem(
      myStorageKey,
      JSON.stringify({
        config,
        plan: planToStore,
        // Keep this key light; GPX payload lives in dedicated custom payload store.
        customRideData: null
      })
    );
    localStorage.setItem(myCommentsKey, JSON.stringify(commentsToStore));
  } catch {
    localWriteOk = false;
  }

  const sourceStops = Array.isArray(options.resupplyPointsOverride) ? options.resupplyPointsOverride : resupplyPoints;
  const customStops = sourceStops
    .filter((point) => point.isCustom)
    .map((point) => ({
      mile: Number(point.mile || 0),
      name: String(point.name || "").trim(),
      lat: Number(point.lat || 0),
      lon: Number(point.lon || 0),
      resupply: String(point.resupply || "")
    }));
  try {
    localStorage.setItem(myStopsKey, JSON.stringify(customStops));
  } catch {
    localWriteOk = false;
  }
  const routeName = sanitizeCustomRouteName(myPayload.routeName || customRouteDisplayName || options.routeName || "My Route");
  const limits = [2500, 1600, 1000, 700, 450, 300, 180];
  let payloadStoreOk = false;
  let cloudWriteOk = false;
  let savedPayload = null;

  for (const limit of limits) {
    const candidateCustomRideData = withTrackPointLimit(myPayload, limit);
    if (!hasValidCustomRideDataObject(candidateCustomRideData)) continue;
    const candidatePayload = {
      routeName,
      config,
      plan: Array.isArray(planToStore) ? planToStore : [],
      comments: Array.isArray(commentsToStore) ? commentsToStore : [],
      customRideData: candidateCustomRideData,
      updatedAt: new Date().toISOString()
    };

    payloadStoreOk = Boolean(upsertCustomRoutePayload(targetRouteId, candidatePayload));
    cloudWriteOk = false;

    if (syncCloud && cloudReady()) {
      try {
        if (localAuthMode) {
          if (authUser?.email) {
            localStorage.setItem(
              `${myRoute.storagePrefix}-local-profile-v1:${normalizeEmail(authUser.email)}`,
              JSON.stringify({
                config,
                plan: planToStore,
                comments: commentsToStore,
                customRideData: candidateCustomRideData,
                updatedAt: new Date().toISOString()
              })
            );
            cloudWriteOk = true;
          }
        } else if (firestoreDb && authUser?.uid) {
          const docId = cloudProfileDocIdForRoute(targetRouteId, authUser.uid);
          if (docId) {
            await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(docId).set(
              {
                customRouteRegistry: loadCustomRouteRegistry(),
                customRoutes: {
                  [targetRouteId]: {
                    routeName,
                    config,
                    plan: planToStore,
                    comments: commentsToStore,
                    customRideData: candidateCustomRideData,
                    updatedAt: new Date().toISOString()
                  }
                },
                updatedAt: new Date().toISOString()
              },
              { merge: true }
            );
            cloudWriteOk = true;
          }
        }
      } catch {
        cloudWriteOk = false;
      }
    }

    if (payloadStoreOk || cloudWriteOk) {
      savedPayload = candidatePayload;
      break;
    }
  }

  const savedSomewhere = Boolean(payloadStoreOk || cloudWriteOk) && Boolean(savedPayload);
  if (!savedSomewhere) return false;

  setMyRouteShortcutLabel(routeName);
  saveMyRouteMeta({ hasRoute: true, name: routeName });
  upsertCustomRouteRegistryEntry(targetRouteId, routeName);
  renderCustomRouteButtons();
  setMyRouteShortcutFlag(true);
  setMyRouteShortcutVisible(true);
  return Boolean(localWriteOk || payloadStoreOk || cloudWriteOk);
}

function applyCustomRideDataPayload(customRideData) {
  if (!customRideData || typeof customRideData !== "object") return false;
  const storedTrack = Array.isArray(customRideData.trackPoints)
    ? customRideData.trackPoints.map(normalizeStoredTrackPoint).filter(Boolean)
    : [];
  if (storedTrack.length < 2) return false;

  customUploadedTrackPoints = storedTrack;
  customUploadedFile = null;
  customRouteDisplayName = sanitizeCustomRouteName(customRideData.routeName || "");
  setMyRouteShortcutLabel(customRouteDisplayName);
  saveMyRouteMeta({ hasRoute: true, name: customRouteDisplayName });
  if (customRouteNameInput) customRouteNameInput.value = customRouteDisplayName;

  const storedResupply = Array.isArray(customRideData.resupplyPoints)
    ? customRideData.resupplyPoints.map(normalizeStoredResupplyPoint).filter(Boolean)
    : [];
  if (storedResupply.length >= 2) {
    resupplyPoints = storedResupply;
    sortResupplyPointsByMile();
    saveCustomResupplyStops();
  }

  const label = String(customRideData.uploadedFileName || "").trim();
  if (customGpxStatus) {
    customGpxStatus.textContent = label
      ? `Loaded saved custom route (${label})`
      : `Loaded saved custom route • ${storedTrack.length.toLocaleString()} points`;
  }
  return true;
}

async function deleteCustomRouteData() {
  if (!isCustomRouteActive()) return;
  const routeId = activeRouteId();
  const routeDef = ROUTES[routeId] || ROUTES.my_route;
  const routeStorageKey = `${routeDef.storagePrefix}-plan-v1`;
  const routeCommentsKey = `${routeDef.storagePrefix}-comments-v1`;
  const routeStopsKey = `${routeDef.storagePrefix}-custom-resupply-stops-v1`;
  const confirmed = window.confirm(
    "Delete this custom route? This removes your uploaded GPX, custom stops, and saved custom-route data."
  );
  if (!confirmed) return;

  customUploadedTrackPoints = [];
  customUploadedFile = null;
  customRouteDisplayName = "My Route";
  setMyRouteShortcutLabel(customRouteDisplayName);
  setMyRouteShortcutFlag(false);
  setMyRouteShortcutVisible(false);
  clearMyRouteMeta();
  if (customRouteNameInput) customRouteNameInput.value = "";
  if (customGpxFileInput) customGpxFileInput.value = "";
  if (customGpxStatus) customGpxStatus.textContent = "No GPX uploaded yet.";
  localStorage.removeItem(routeStopsKey);
  localStorage.removeItem(routeStorageKey);
  localStorage.removeItem(routeCommentsKey);
  removeCustomRoutePayload(routeId);
  removeCustomRouteRegistryEntry(routeId);
  renderCustomRouteButtons();
  if (ROUTES[routeId] && routeId !== "my_route") {
    delete ROUTES[routeId];
  }

  const customRoute = ROUTES.my_route;
  setRouteDistanceInputMiles(Number(customRoute.defaultDistance || 0));
  if (totalDaysInput) totalDaysInput.value = String(Number(customRoute.defaultDays || 20));
  if (startDateInput?.value && finishDateInput) {
    finishDateInput.value = addDays(startDateInput.value, Math.max(1, Number(totalDaysInput.value || 20)) - 1);
  }

  resupplyPoints = [];
  selectedSectionName = "";
  comments = [];
  plan = [];
  dayList.innerHTML = "";
  metricList.innerHTML = "";
  if (markerList) {
    markerList.innerHTML =
      '<li><p class="empty-note">Could not load GPX route file. Upload a custom GPX in Plan tab.</p></li>';
  }
  if (mapSubhead) {
    mapSubhead.textContent = "Upload a custom GPX and create a new route to render the map.";
  }
  if (stageLayer) stageLayer.clearLayers();
  if (resupplyLayer) resupplyLayer.clearLayers();
  if (sectionLayer) sectionLayer.clearLayers();
  if (dragGuideLayer) dragGuideLayer.clearLayers();
  if (routeLine && map) map.removeLayer(routeLine);
  if (routeLineHalo && map) map.removeLayer(routeLineHalo);
  if (routeHoverLine && map) map.removeLayer(routeHoverLine);
  routeLine = null;
  routeLineHalo = null;
  routeHoverLine = null;
  gpxTrackPoints = [];
  trackCumulativeMiles = [];
  trackCumulativeGainFt = [];
  trackCumulativeLossFt = [];
  activeRouteGpxDistanceMiles = null;
  routeSections = [];
  routeProfileInitializedView = false;
  setupRouteProfileScroll();
  renderRouteProfile();
  renderCustomStopEditor();
  renderComments();
  persistComments();
  persistPlan();

  if (cloudReady()) {
    try {
      if (localAuthMode) {
        const routeLocalKey = `${routeDef.storagePrefix}-local-profile-v1:${normalizeEmail(authUser.email)}`;
        localStorage.removeItem(routeLocalKey);
      } else if (firestoreDb && window.firebase?.firestore?.FieldValue && authUser?.uid) {
        const cloudDocId = cloudProfileDocIdForRoute(routeId, authUser.uid);
        if (isNamedCustomRoute(routeId)) {
          await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(cloudDocId).set(
            {
              customRouteRegistry: loadCustomRouteRegistry(),
              customRoutes: {
                [routeId]: window.firebase.firestore.FieldValue.delete()
              },
              updatedAt: new Date().toISOString()
            },
            { merge: true }
          );
        } else {
          await firestoreDb.collection(routeDef.profileCollection).doc(cloudDocId).set(
            {
              config: window.firebase.firestore.FieldValue.delete(),
              plan: window.firebase.firestore.FieldValue.delete(),
              comments: window.firebase.firestore.FieldValue.delete(),
              customRideData: window.firebase.firestore.FieldValue.delete(),
              updatedAt: new Date().toISOString()
            },
            { merge: true }
          );
        }
      }
    } catch {
      // Keep local delete state even if cloud cleanup fails.
    }
  }

  setCloudStatus("Custom route deleted.");
  window.location.href = routeUrl("custom_ride");
}

function nearestWaypoint(mile) {
  for (const wp of resupplyPoints) {
    if (mile <= wp.mile) return wp.name;
  }
  return resupplyPoints[resupplyPoints.length - 1].name;
}

function interpolateSeriesAtMile(mile, miles, values) {
  if (!miles.length || !values.length || miles.length !== values.length) return 0;
  if (mile <= miles[0]) return values[0];
  const lastIndex = miles.length - 1;
  if (mile >= miles[lastIndex]) return values[lastIndex];

  let idx = 1;
  while (idx < miles.length && miles[idx] < mile) idx += 1;
  const prev = Math.max(0, idx - 1);
  const next = Math.min(lastIndex, idx);
  const span = Math.max(1e-9, miles[next] - miles[prev]);
  const ratio = Math.max(0, Math.min(1, (mile - miles[prev]) / span));
  return values[prev] + (values[next] - values[prev]) * ratio;
}

function getEffectiveRouteDistanceMiles(routeDistance) {
  const gpxTotal = trackCumulativeMiles[trackCumulativeMiles.length - 1];
  if (Number.isFinite(gpxTotal) && gpxTotal > 0) return gpxTotal;
  const configured = Number(routeDistance);
  if (Number.isFinite(configured) && configured > 0) return configured;
  return 0;
}

function gpxGainBetweenMilesRaw(startMile, endMile, routeDistance) {
  if ((!trackCumulativeMiles.length || !trackCumulativeGainFt.length) && gpxTrackPoints.length) {
    trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
    trackCumulativeGainFt = buildTrackCumulativeGainFt(gpxTrackPoints);
  }
  if (!trackCumulativeMiles.length || !trackCumulativeGainFt.length) {
    const span = Math.max(0, endMile - startMile);
    return Math.round(span * elevationFactor(endMile, routeDistance));
  }

  const totalTrackMiles = trackCumulativeMiles[trackCumulativeMiles.length - 1] || routeDistance || 0;
  const clampedStart = Math.max(0, Math.min(totalTrackMiles, startMile));
  const clampedEnd = Math.max(0, Math.min(totalTrackMiles, endMile));
  if (clampedEnd <= clampedStart) return 0;

  const gainStart = interpolateSeriesAtMile(clampedStart, trackCumulativeMiles, trackCumulativeGainFt);
  const gainEnd = interpolateSeriesAtMile(clampedEnd, trackCumulativeMiles, trackCumulativeGainFt);
  return Math.max(0, Math.round(gainEnd - gainStart));
}

function gpxGainBetweenMiles(startMile, endMile, routeDistance) {
  return applyElevationCalibrationForRangeFt(startMile, endMile, routeDistance, gpxGainBetweenMilesRaw);
}

function gpxLossBetweenMilesRaw(startMile, endMile, routeDistance) {
  if ((!trackCumulativeMiles.length || !trackCumulativeLossFt.length) && gpxTrackPoints.length) {
    trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
    trackCumulativeLossFt = buildTrackCumulativeLossFt(gpxTrackPoints);
  }
  if (!trackCumulativeMiles.length || !trackCumulativeLossFt.length) {
    const span = Math.max(0, endMile - startMile);
    return Math.round(span * elevationFactor(endMile, routeDistance) * 0.9);
  }

  const totalTrackMiles = trackCumulativeMiles[trackCumulativeMiles.length - 1] || routeDistance || 0;
  const clampedStart = Math.max(0, Math.min(totalTrackMiles, startMile));
  const clampedEnd = Math.max(0, Math.min(totalTrackMiles, endMile));
  if (clampedEnd <= clampedStart) return 0;

  const lossStart = interpolateSeriesAtMile(clampedStart, trackCumulativeMiles, trackCumulativeLossFt);
  const lossEnd = interpolateSeriesAtMile(clampedEnd, trackCumulativeMiles, trackCumulativeLossFt);
  return Math.max(0, Math.round(lossEnd - lossStart));
}

function gpxLossBetweenMiles(startMile, endMile, routeDistance) {
  return applyElevationCalibrationForRangeFt(startMile, endMile, routeDistance, gpxLossBetweenMilesRaw);
}

function elevationFactor(cumulativeMiles, routeDistance) {
  const progress = routeDistance > 0 ? cumulativeMiles / routeDistance : 0;

  if (progress < 0.15) return 105;
  if (progress < 0.35) return 92;
  if (progress < 0.6) return 110;
  if (progress < 0.82) return 98;
  return 88;
}

function recomputeDerivedFieldsForDays(days, config) {
  if (!config || !Array.isArray(days) || !days.length) return;
  const effectiveRouteDistance = getEffectiveRouteDistanceMiles(config.routeDistance);
  let cumulativeMiles = 0;
  for (const day of days) {
    if (day.type === "Rest") {
      day.gain = 0;
      day.loss = 0;
      continue;
    }

    const rideMiles = Number(day.miles || 0);
    const dayStart = cumulativeMiles;
    const dayEnd = Math.min(effectiveRouteDistance, cumulativeMiles + rideMiles);
    cumulativeMiles = dayEnd;
    day.gain = gpxGainBetweenMiles(dayStart, dayEnd, effectiveRouteDistance);
    day.loss = gpxLossBetweenMiles(dayStart, dayEnd, effectiveRouteDistance);
  }
}

function recomputeDerivedFields() {
  const config = parseForm();
  if (!config || !plan.length) return;
  recomputeDerivedFieldsForDays(plan, config);
}

function buildPlan(config) {
  const start = new Date(`${config.startDate}T08:00:00`);
  const effectiveRouteDistance = getEffectiveRouteDistanceMiles(config.routeDistance);
  const averageRideMiles = effectiveRouteDistance / Math.max(config.rideDays || (config.totalDays - config.restDays), 1);
  const restIndexes = new Set();

  if (config.restDays > 0) {
    const gap = config.totalDays / (config.restDays + 1);
    for (let i = 1; i <= config.restDays; i++) {
      restIndexes.add(Math.max(1, Math.min(config.totalDays - 2, Math.round(gap * i) - 1)));
    }
  }

  const nextPlan = [];
  let cumulativeMiles = 0;

  for (let day = 0; day < config.totalDays; day++) {
    const isRest = restIndexes.has(day);
    const rideMiles = isRest ? 0 : Number(averageRideMiles.toFixed(1));
    const dayStart = cumulativeMiles;
    const dayEnd = Math.min(effectiveRouteDistance, cumulativeMiles + rideMiles);
    cumulativeMiles = dayEnd;

    nextPlan.push({
      id: day + 1,
      date: localDateString(new Date(start.getTime() + day * 86400000)),
      type: isRest ? "Rest" : "Ride",
      miles: rideMiles,
      gain: isRest ? 0 : gpxGainBetweenMiles(dayStart, dayEnd, effectiveRouteDistance),
      loss: isRest ? 0 : gpxLossBetweenMiles(dayStart, dayEnd, effectiveRouteDistance),
      town: "",
      resupplyOptions1: "",
      resupplyHours1: "",
      resupplyDistance1: 0,
      resupplyAddress1: "",
      resupplyOptions2: "",
      resupplyHours2: "",
      resupplyDistance2: 0,
      resupplyAddress2: "",
      resupplyOptions3: "",
      resupplyHours3: "",
      resupplyDistance3: 0,
      shoppingList: "",
      calorieTarget: 0,
      notes: ""
    });
  }

  const totalPlanned = nextPlan.reduce((sum, day) => sum + day.miles, 0);
  const difference = Number((effectiveRouteDistance - totalPlanned).toFixed(1));
  if (difference !== 0) {
    const lastRide = [...nextPlan].reverse().find((day) => day.type === "Ride");
    if (lastRide) {
      lastRide.miles = Number((lastRide.miles + difference).toFixed(1));
    }
  }
  recomputeDerivedFieldsForDays(nextPlan, config);

  return nextPlan;
}

function renderMetrics(config, days) {
  const rideDays = days.filter((d) => d.type === "Ride");
  const totalMiles = rideDays.reduce((sum, d) => sum + Number(d.miles || 0), 0);
  const totalGain = rideDays.reduce((sum, d) => sum + Number(d.gain || 0), 0);
  const totalLoss = rideDays.reduce((sum, d) => sum + Number(d.loss || 0), 0);
  const routeId = getRouteFromUrl();
  const routeDef = ROUTES[routeId] || ROUTES[DEFAULT_ROUTE_ID];
  const waitingForGpxElevation =
    routeDef &&
    routeDef.gpxFile &&
    (!Array.isArray(trackCumulativeGainFt) || trackCumulativeGainFt.length < 2) &&
    (!Array.isArray(trackCumulativeLossFt) || trackCumulativeLossFt.length < 2);

  if (plannerTotalRouteDistance) {
    const routeMiles = Number(
      activeRouteGpxDistanceMiles || config?.routeDistance || displayDistanceToMiles(Number(routeDistanceInput?.value || 0)) || 0
    );
    plannerTotalRouteDistance.textContent = formatMilesLikePlannerInput(routeMiles);
  }

  const snapshotRouteMiles = displayDistanceToMiles(Number(routeDistanceInput?.value || activeRouteGpxDistanceMiles || config.routeDistance));
  const avgRideMiles = totalMiles / Math.max(rideDays.length, 1);
  const items = [
    ["Route", formatMilesLikePlannerInput(snapshotRouteMiles)],
    ["Race Days", `${config.totalDays}`],
    ["Ride Days", `${rideDays.length}`],
    ["Rest Days", `${config.restDays}`],
    ["Avg on Ride Days", formatDistanceWithUnitFromMiles(avgRideMiles)],
    ["Total Planned Gain", waitingForGpxElevation ? "Calculating..." : formatElevationWithUnitFromFeet(totalGain)],
    ["Total Planned Loss", waitingForGpxElevation ? "Calculating..." : formatElevationWithUnitFromFeet(totalLoss)]
  ];

  metricList.innerHTML = "";
  for (const [label, value] of items) {
    const card = document.createElement("div");
    card.className = "metric";
    card.innerHTML = `<p>${label}</p><p><strong>${value}</strong></p>`;
    metricList.appendChild(card);
  }
}

function normalizeDay(day) {
  const extraOptions = Array.isArray(day.resupplyExtraOptions)
    ? day.resupplyExtraOptions
        .map((item) => ({
          option: String(item?.option || "").trim(),
          hours: String(item?.hours || "").trim(),
          distance: Number(item?.distance || 0),
          address: String(item?.address || "").trim()
        }))
        .filter((item) => item.option || item.hours || item.distance > 0 || item.address)
    : [];

  const bikeShops = Array.isArray(day.resupplyBikeShops)
    ? day.resupplyBikeShops
        .map((item) => ({
          name: String(item?.name || "").trim(),
          hours: String(item?.hours || "").trim(),
          distance: Number(item?.distance || 0),
          address: String(item?.address || "").trim()
        }))
        .filter((item) => item.name || item.hours || item.distance > 0 || item.address)
    : [];

  // Migrate older format where bike-shop data lived inside extra options.
  if (Array.isArray(day.resupplyExtraOptions)) {
    day.resupplyExtraOptions.forEach((item) => {
      if (!item) return;
      if (item.addBikeShop || item.bikeShopName) {
        bikeShops.push({
          name: String(item.bikeShopName || "").trim(),
          hours: String(item.hours || "").trim(),
          distance: Number(item.distance || 0),
          address: String(item.address || "").trim()
        });
      }
    });
  }

  const legacyOption3 = {
    option: String(day.resupplyOptions3 || "").trim(),
    hours: String(day.resupplyHours3 || "").trim(),
    distance: Number(day.resupplyDistance3 || 0),
    addBikeShop: false,
    bikeShopName: ""
  };
  if (legacyOption3.option || legacyOption3.hours || legacyOption3.distance > 0) {
    extraOptions.push(legacyOption3);
  }

  return {
    ...day,
    resupplyOptions1: day.resupplyOptions1 || day.resupplyOptions || day.resupply || "",
    resupplyHours1: day.resupplyHours1 || day.resupplyHours || "",
    resupplyDistance1: Number(day.resupplyDistance1 ?? day.resupplyDistance ?? 0),
    resupplyAddress1: day.resupplyAddress1 || "",
    resupplyOptions2: day.resupplyOptions2 || "",
    resupplyHours2: day.resupplyHours2 || "",
    resupplyDistance2: Number(day.resupplyDistance2 || 0),
    resupplyAddress2: day.resupplyAddress2 || "",
    resupplyOptions3: "",
    resupplyHours3: "",
    resupplyDistance3: 0,
    shoppingList: day.shoppingList || "",
    calorieTarget: Number(day.calorieTarget || 0),
    daysUntilNextResupply: Number(day.daysUntilNextResupply || 1),
    resupplyNotes: day.resupplyNotes || "",
    loss: Number(day.loss || 0),
    resupplyExtraOptions: extraOptions,
    resupplyBikeShops: bikeShops
  };
}

function applyPlannerConfig(config) {
  if (!config || typeof config !== "object") return;
  const routeId = getRouteFromUrl();
  const route = ROUTES[routeId] || ROUTES[DEFAULT_ROUTE_ID];
  const incomingDistance = Number(config.routeDistance);
  let migratedDistance = incomingDistance;
  const legacyDistance = Number(LEGACY_ROUTE_DISTANCES[routeId]);
  if (Number.isFinite(incomingDistance) && Number.isFinite(legacyDistance) && nearlyEqual(incomingDistance, legacyDistance)) {
    migratedDistance = Number(route.defaultDistance || incomingDistance);
  }
  startDateInput.value = config.startDate || startDateInput.value;
  finishDateInput.value = config.finishDate || finishDateInput.value;
  totalDaysInput.value = config.totalDays || totalDaysInput.value;
  restDaysInput.value = config.restDays || restDaysInput.value;
  const displayDistance = milesToDisplayDistance(Number(migratedDistance || routeDistanceInput.value || 0));
  routeDistanceInput.value = formatDistanceNumber(displayDistance);
}

function applyPlannerUnits(nextUnit, { preserveDistance = true } = {}) {
  const normalizedUnit = nextUnit === "metric" ? "metric" : "imperial";
  const currentMiles = getRouteDistanceInputMiles();
  planUnitSystem = normalizedUnit;
  if (planUnitsMetricInput) planUnitsMetricInput.checked = isMetricPlannerUnits();
  if (routeDistanceLabel) routeDistanceLabel.textContent = `Total route distance (${unitDistanceSuffix()})`;
  if (routeProfileAxisY) routeProfileAxisY.textContent = `Elevation (${unitElevationSuffix()})`;
  if (routeProfileAxisX) routeProfileAxisX.textContent = `Distance (${unitDistanceSuffix()})`;
  refreshDistanceBoundsForUnits();
  if (preserveDistance) setRouteDistanceInputMiles(currentMiles);
  if (plan.length) renderPlan(plan);
  const config = parseForm();
  if (config && plan.length) renderMetrics(config, plan);
  if (gpxTrackPoints.length) {
    updateStagesFromInput();
  }
}

function setupPlannerUnits() {
  let stored = "imperial";
  try {
    stored = localStorage.getItem(PLAN_UNITS_KEY) || "imperial";
  } catch {
    stored = "imperial";
  }
  applyPlannerUnits(stored === "metric" ? "metric" : "imperial", { preserveDistance: true });
  if (planUnitsMetricInput) {
    planUnitsMetricInput.addEventListener("change", () => {
      const nextUnit = planUnitsMetricInput.checked ? "metric" : "imperial";
      applyPlannerUnits(nextUnit, { preserveDistance: true });
      try {
        localStorage.setItem(PLAN_UNITS_KEY, nextUnit);
      } catch {
        // Ignore localStorage write failures.
      }
      persistPlan();
    });
  }
}

function enforceRouteDistanceBaseline() {
  const routeId = getRouteFromUrl();
  const route = ROUTES[routeId] || ROUTES[DEFAULT_ROUTE_ID];
  const currentDistance = displayDistanceToMiles(Number(routeDistanceInput?.value));
  const legacyDistance = Number(LEGACY_ROUTE_DISTANCES[routeId]);
  const correctedDistance = Number(activeRouteGpxDistanceMiles || route.defaultDistance || 0);
  if (!Number.isFinite(currentDistance) || !Number.isFinite(correctedDistance) || correctedDistance <= 0) return false;
  if (Number.isFinite(legacyDistance) && nearlyEqual(currentDistance, legacyDistance)) {
    routeDistanceInput.value = formatDistanceNumber(milesToDisplayDistance(correctedDistance));
    return true;
  }
  return false;
}

function applyPlanArray(incomingPlan) {
  if (!Array.isArray(incomingPlan)) return;
  plan = incomingPlan.map(normalizeDay);
  recomputeDerivedFields();
  renderPlan(plan);
  const config = parseForm();
  if (config) renderMetrics(config, plan);
  if (!syncingMapAndPlan) updateStagesFromInput();
}

function applyCommentsArray(incomingComments) {
  if (!Array.isArray(incomingComments)) return;
  comments = incomingComments;
  renderComments();
}

function createDayCard(day, index) {
  const node = dayTemplate.content.firstElementChild.cloneNode(true);
  const normalized = normalizeDay(day);
  const title = node.querySelector(".day-title");
  const date = node.querySelector(".day-date");
  const tag = node.querySelector(".tag");

  title.textContent = `Day ${day.id}`;
  date.textContent = niceDate(new Date(`${day.date}T12:00:00`));
  tag.textContent = day.type;
  tag.classList.add(day.type.toLowerCase());

  const milesInput = node.querySelector(".miles-input");
  const gainInput = node.querySelector(".gain-input");
  const lossInput = node.querySelector(".loss-input");
  const distanceLabel = node.querySelector(".day-distance-label");
  const gainLabel = node.querySelector(".day-gain-label");
  const lossLabel = node.querySelector(".day-loss-label");
  const townInput = node.querySelector(".town-input");
  const notesInput = node.querySelector(".notes-input");
  const distanceSoFarValue = node.querySelector(".day-distance-so-far-value");

  if (distanceLabel) distanceLabel.textContent = isMetricPlannerUnits() ? "Distance (km)" : "Miles";
  if (gainLabel) gainLabel.textContent = `Gain (${unitElevationSuffix()})`;
  if (lossLabel) lossLabel.textContent = `Loss (${unitElevationSuffix()})`;

  milesInput.value = formatDistanceNumber(milesToDisplayDistance(normalized.miles));
  gainInput.value = formatElevationNumber(feetToDisplayElevation(normalized.gain));
  lossInput.value = formatElevationNumber(feetToDisplayElevation(normalized.loss));
  townInput.value = normalized.town;
  notesInput.value = normalized.notes;
  milesInput.step = isMetricPlannerUnits() ? "0.1" : "0.1";
  gainInput.step = isMetricPlannerUnits() ? "10" : "100";
  lossInput.step = isMetricPlannerUnits() ? "10" : "100";
  if (distanceSoFarValue) {
    let cumulativeMiles = 0;
    for (let i = 0; i <= index; i++) {
      const dayAtIndex = plan[i];
      if (!dayAtIndex || dayAtIndex.type === "Rest") continue;
      cumulativeMiles += Number(dayAtIndex.miles || 0);
    }
    distanceSoFarValue.textContent = `${formatDistanceNumber(milesToDisplayDistance(cumulativeMiles))} ${unitDistanceSuffix()}`;
  }

  if (day.type === "Rest") {
    milesInput.disabled = true;
    gainInput.disabled = true;
    lossInput.disabled = true;
  }

  const sync = () => {
    plan[index] = {
      ...plan[index],
      miles: displayDistanceToMiles(Number(milesInput.value || 0)),
      gain: displayElevationToFeet(Number(gainInput.value || 0)),
      loss: displayElevationToFeet(Number(lossInput.value || 0)),
      town: townInput.value,
      notes: notesInput.value
    };
    persistPlan();

    const config = parseForm();
    if (config) renderMetrics(config, plan);
  };

  const syncMileage = () => {
    const priorScrollY = window.scrollY;
    const priorDayListScroll = dayList ? dayList.scrollTop : 0;
    plan[index] = {
      ...plan[index],
      miles: displayDistanceToMiles(Number(milesInput.value || 0))
    };
    recomputeDerivedFields();
    persistPlan();

    const config = parseForm();
    if (config) renderMetrics(config, plan);
    renderPlan(plan);
    requestAnimationFrame(() => {
      if (dayList) dayList.scrollTop = priorDayListScroll;
      window.scrollTo(0, priorScrollY);
    });
  };

  milesInput.addEventListener("change", syncMileage);

  [
    gainInput,
    lossInput,
    townInput,
    notesInput
  ].forEach((input) => {
    input.addEventListener("input", sync);
  });

  return node;
}

function resupplyDayAssignments(days) {
  const dayMile = [];
  let cumulative = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i].type !== "Rest") cumulative += Number(days[i].miles || 0);
    dayMile[i] = cumulative;
  }

  const assignments = new Map();
  const routeCap = getRouteDistanceInputMiles() || Number(resupplyPoints[resupplyPoints.length - 1]?.mile || 0);
  for (let i = 1; i < resupplyPoints.length - 1; i++) {
    const point = resupplyPoints[i];
    if (point.mile > routeCap) continue;
    const dayIndex = dayMile.findIndex((mile) => mile >= point.mile);
    if (dayIndex < 0) continue;
    const existing = assignments.get(dayIndex) || [];
    existing.push({ point, stopIndex: i });
    assignments.set(dayIndex, existing);
  }
  return assignments;
}

function createResupplyCard(day, dayIndex, stopInfo, daysUntilNext) {
  if (!resupplyTemplate || !resupplyTemplate.content || !resupplyTemplate.content.firstElementChild) {
    return document.createTextNode("");
  }
  const node = resupplyTemplate.content.firstElementChild.cloneNode(true);
  const normalized = normalizeDay(day);
  node.querySelector(".resupply-title").textContent = `${stopInfo.point.name} Resupply`;
  node.querySelector(".resupply-subtitle").textContent = `Near mile ${stopInfo.point.mile.toFixed(1)} on Day ${day.id}`;
  const resupplyMileEdit = node.querySelector(".resupply-mile-edit");
  const resupplyMileInput = node.querySelector(".resupply-mile-input");

  if (resupplyMileEdit && resupplyMileInput) {
    const isCustom = isCustomRouteActive();
    resupplyMileEdit.hidden = !isCustom;
    resupplyMileInput.value = String(Number(stopInfo.point.mile || 0));
    if (isCustom) {
      resupplyMileInput.addEventListener("change", () => {
        if (stopInfo.stopIndex === undefined || !resupplyPoints[stopInfo.stopIndex]) return;
        const routeMax = trackCumulativeMiles[trackCumulativeMiles.length - 1] || getRouteDistanceInputMiles();
        const requestedMile = Number(resupplyMileInput.value || stopInfo.point.mile || 0);
        const safeMile = Math.max(0, Math.min(routeMax, requestedMile));
        const snapped = pointAtMile(gpxTrackPoints, trackCumulativeMiles, safeMile);
        resupplyPoints[stopInfo.stopIndex] = {
          ...resupplyPoints[stopInfo.stopIndex],
          mile: Number(safeMile.toFixed(1)),
          lat: snapped.lat,
          lon: snapped.lon
        };
        refreshResupplyUIAfterChange();
      });
    }
  }

  const resupplyOptions1Input = node.querySelector(".resupply-options-1-input");
  const resupplyHours1Input = node.querySelector(".resupply-hours-1-input");
  const resupplyDistance1Input = node.querySelector(".resupply-distance-1-input");
  const resupplyAddress1Input = node.querySelector(".resupply-address-1-input");
  const resupplyMapLink1 = node.querySelector(".resupply-map-link-1");
  const resupplyOptions2Input = node.querySelector(".resupply-options-2-input");
  const resupplyHours2Input = node.querySelector(".resupply-hours-2-input");
  const resupplyDistance2Input = node.querySelector(".resupply-distance-2-input");
  const resupplyAddress2Input = node.querySelector(".resupply-address-2-input");
  const resupplyMapLink2 = node.querySelector(".resupply-map-link-2");
  const shoppingListInput = node.querySelector(".shopping-list-input");
  const daysUntilInput = node.querySelector(".days-until-input");
  const calorieInput = node.querySelector(".calorie-input");
  const resupplyNotesInput = node.querySelector(".resupply-notes-input");
  const extraOptionsWrap = node.querySelector(".extra-resupply-options");
  const extraBikeShopsWrap = node.querySelector(".extra-bike-shops");
  const addExtraOptionBtn = node.querySelector(".add-resupply-option-btn");
  const addBikeShopBtn = node.querySelector(".add-bike-shop-btn");
  const deleteResupplyStopBtn = node.querySelector(".delete-resupply-stop-btn");

  resupplyOptions1Input.value = normalized.resupplyOptions1;
  resupplyHours1Input.value = normalized.resupplyHours1;
  resupplyDistance1Input.value = normalized.resupplyDistance1;
  resupplyAddress1Input.value = normalized.resupplyAddress1;
  setMapsLink(resupplyMapLink1, normalized.resupplyAddress1);
  resupplyOptions2Input.value = normalized.resupplyOptions2;
  resupplyHours2Input.value = normalized.resupplyHours2;
  resupplyDistance2Input.value = normalized.resupplyDistance2;
  resupplyAddress2Input.value = normalized.resupplyAddress2;
  setMapsLink(resupplyMapLink2, normalized.resupplyAddress2);
  shoppingListInput.value = normalized.shoppingList;
  calorieInput.value = normalized.calorieTarget;
  daysUntilInput.value = Number(normalized.daysUntilNextResupply || daysUntilNext || 1);
  resupplyNotesInput.value = normalized.resupplyNotes;

  const extraRows = [];
  const readExtraOptions = () =>
    extraRows
      .map((row) => ({
        option: row.optionInput.value.trim(),
        hours: row.hoursInput.value.trim(),
        distance: Number(row.distanceInput.value || 0),
        address: row.addressInput.value.trim()
      }))
      .filter((item) => item.option || item.hours || item.distance > 0 || item.address);

  const makeExtraOptionRow = (preset = {}) => {
    if (!extraOptionsWrap) return null;
    const row = document.createElement("div");
    row.className = "resupply-row extra-resupply-row";
    row.innerHTML = `
      <label>
        Additional resupply option
        <input type="text" class="extra-resupply-option-input" placeholder="Another store or cafe..." />
      </label>
      <label>
        Hours of operation
        <input type="text" class="extra-resupply-hours-input" placeholder="Open hours" />
      </label>
      <label class="distance-box">
        Distance from route (mi)
        <input type="number" class="extra-resupply-distance-input" min="0" step="0.1" placeholder="0.5" />
      </label>
      <label>
        Address / map search
        <input type="text" class="extra-resupply-address-input" placeholder="Street address or place name" />
        <a class="inline-map-link extra-resupply-map-link" href="#" target="_blank" rel="noopener noreferrer" hidden>Open in Maps</a>
      </label>
      <button type="button" class="btn remove-resupply-option-btn">Remove</button>
    `;

    const optionInput = row.querySelector(".extra-resupply-option-input");
    const hoursInput = row.querySelector(".extra-resupply-hours-input");
    const distanceInput = row.querySelector(".extra-resupply-distance-input");
    const addressInput = row.querySelector(".extra-resupply-address-input");
    const mapLink = row.querySelector(".extra-resupply-map-link");
    const removeBtn = row.querySelector(".remove-resupply-option-btn");

    optionInput.value = String(preset.option || "");
    hoursInput.value = String(preset.hours || "");
    distanceInput.value = Number(preset.distance || 0) ? String(Number(preset.distance || 0)) : "";
    addressInput.value = String(preset.address || "");
    setMapsLink(mapLink, addressInput.value);

    const entry = { row, optionInput, hoursInput, distanceInput, addressInput };
    extraRows.push(entry);

    [optionInput, hoursInput, distanceInput, addressInput].forEach((input) => {
      input.addEventListener("input", () => {
        setMapsLink(mapLink, addressInput.value);
        sync();
      });
    });

    removeBtn.addEventListener("click", () => {
      const idx = extraRows.indexOf(entry);
      if (idx >= 0) extraRows.splice(idx, 1);
      row.remove();
      sync();
    });

    extraOptionsWrap.appendChild(row);
    return row;
  };

  const bikeRows = [];
  const readBikeShops = () =>
    bikeRows
      .map((row) => ({
        name: row.nameInput.value.trim(),
        hours: row.hoursInput.value.trim(),
        distance: Number(row.distanceInput.value || 0),
        address: row.addressInput.value.trim()
      }))
      .filter((item) => item.name || item.hours || item.distance > 0 || item.address);

  const makeBikeShopRow = (preset = {}) => {
    if (!extraBikeShopsWrap) return null;
    const row = document.createElement("div");
    row.className = "resupply-row extra-bike-row";
    row.innerHTML = `
      <label>
        Bike shop
        <input type="text" class="extra-bike-shop-name-input" placeholder="Bike shop name..." />
      </label>
      <label>
        Hours of operation
        <input type="text" class="extra-bike-shop-hours-input" placeholder="Open hours" />
      </label>
      <label class="distance-box">
        Distance from route (mi)
        <input type="number" class="extra-bike-shop-distance-input" min="0" step="0.1" placeholder="0.5" />
      </label>
      <label>
        Address / map search
        <input type="text" class="extra-bike-shop-address-input" placeholder="Street address or place name" />
        <a class="inline-map-link extra-bike-map-link" href="#" target="_blank" rel="noopener noreferrer" hidden>Open in Maps</a>
      </label>
      <button type="button" class="btn remove-bike-shop-btn">Remove</button>
    `;

    const nameInput = row.querySelector(".extra-bike-shop-name-input");
    const hoursInput = row.querySelector(".extra-bike-shop-hours-input");
    const distanceInput = row.querySelector(".extra-bike-shop-distance-input");
    const addressInput = row.querySelector(".extra-bike-shop-address-input");
    const mapLink = row.querySelector(".extra-bike-map-link");
    const removeBtn = row.querySelector(".remove-bike-shop-btn");

    nameInput.value = String(preset.name || "");
    hoursInput.value = String(preset.hours || "");
    distanceInput.value = Number(preset.distance || 0) ? String(Number(preset.distance || 0)) : "";
    addressInput.value = String(preset.address || "");
    setMapsLink(mapLink, addressInput.value);

    const entry = { row, nameInput, hoursInput, distanceInput, addressInput };
    bikeRows.push(entry);

    [nameInput, hoursInput, distanceInput, addressInput].forEach((input) => {
      input.addEventListener("input", () => {
        setMapsLink(mapLink, addressInput.value);
        sync();
      });
    });

    removeBtn.addEventListener("click", () => {
      const idx = bikeRows.indexOf(entry);
      if (idx >= 0) bikeRows.splice(idx, 1);
      row.remove();
      sync();
    });

    extraBikeShopsWrap.appendChild(row);
    return row;
  };

  (normalized.resupplyExtraOptions || []).forEach((item) => makeExtraOptionRow(item));
  (normalized.resupplyBikeShops || []).forEach((item) => makeBikeShopRow(item));

  const sync = () => {
    plan[dayIndex] = {
      ...plan[dayIndex],
      resupplyOptions1: resupplyOptions1Input.value,
      resupplyHours1: resupplyHours1Input.value,
      resupplyDistance1: Number(resupplyDistance1Input.value || 0),
      resupplyAddress1: resupplyAddress1Input.value.trim(),
      resupplyOptions2: resupplyOptions2Input.value,
      resupplyHours2: resupplyHours2Input.value,
      resupplyDistance2: Number(resupplyDistance2Input.value || 0),
      resupplyAddress2: resupplyAddress2Input.value.trim(),
      resupplyOptions3: "",
      resupplyHours3: "",
      resupplyDistance3: 0,
      shoppingList: shoppingListInput.value,
      calorieTarget: Number(calorieInput.value || 0),
      daysUntilNextResupply: Number(daysUntilInput.value || 1),
      resupplyNotes: resupplyNotesInput.value,
      resupplyExtraOptions: readExtraOptions(),
      resupplyBikeShops: readBikeShops()
    };
    persistPlan();
  };

  [
    resupplyOptions1Input,
    resupplyHours1Input,
    resupplyDistance1Input,
    resupplyAddress1Input,
    resupplyOptions2Input,
    resupplyHours2Input,
    resupplyDistance2Input,
    resupplyAddress2Input,
    shoppingListInput,
    daysUntilInput,
    calorieInput,
    resupplyNotesInput
  ].forEach((input) => {
    input.addEventListener("input", () => {
      setMapsLink(resupplyMapLink1, resupplyAddress1Input.value);
      setMapsLink(resupplyMapLink2, resupplyAddress2Input.value);
      sync();
    });
  });

  if (addExtraOptionBtn) {
    addExtraOptionBtn.addEventListener("click", () => {
      makeExtraOptionRow();
      sync();
    });
  }

  if (addBikeShopBtn) {
    addBikeShopBtn.addEventListener("click", () => {
      makeBikeShopRow();
      sync();
    });
  }

  if (deleteResupplyStopBtn) {
    const stopIndex = Number(stopInfo.stopIndex);
    const canDelete = Number.isInteger(stopIndex) && stopIndex > 0 && stopIndex < resupplyPoints.length - 1;
    deleteResupplyStopBtn.hidden = !canDelete;
    deleteResupplyStopBtn.addEventListener("click", () => {
      if (!Number.isInteger(stopIndex) || stopIndex <= 0 || stopIndex >= resupplyPoints.length - 1) {
        setCloudStatus("Only intermediate resupply stops can be deleted.");
        return;
      }
      if (resupplyPoints.length <= 2) {
        setCloudStatus("Cannot delete start/finish route anchors.");
        return;
      }
      const stopName = String(resupplyPoints[stopIndex]?.name || "this stop");
      const confirmed = window.confirm(`Delete resupply stop \"${stopName}\"?`);
      if (!confirmed) return;
      resupplyPoints.splice(stopIndex, 1);
      setMapPlanSelection({ dayIndex });
      setCloudStatus(`Deleted resupply stop: ${stopName}.`);
      refreshResupplyUIAfterChange();
    });
  }

  return node;
}

function renderPlan(days) {
  dayList.innerHTML = "";
  const assignments = resupplyDayAssignments(days);
  const sortedAssignmentDays = Array.from(assignments.keys()).sort((a, b) => a - b);
  const nextAssignmentByDay = new Map();
  sortedAssignmentDays.forEach((dayIdx, i) => {
    nextAssignmentByDay.set(dayIdx, sortedAssignmentDays[i + 1] ?? null);
  });

  days.forEach((day, index) => {
    dayList.appendChild(createDayCard(day, index));
    const stops = assignments.get(index) || [];
    stops.forEach((stop) => {
      const nextDayIdx = nextAssignmentByDay.get(index);
      const autoDaysUntil = nextDayIdx === null ? 1 : Math.max(1, nextDayIdx - index);
      dayList.appendChild(createResupplyCard(day, index, stop, autoDaysUntil));
    });
  });

  renderMapPlanSelection();
}

function ensureMapPlanPanel() {
  if (mapPlanPanelEl && mapPlanTitleEl && mapPlanSubheadEl && mapPlanContentEl) return true;
  if (!markerList) return false;
  const markerPanel = markerList.closest(".panel");
  if (!markerPanel || !markerPanel.parentElement) return false;

  let panel = document.getElementById("map-plan-panel");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "map-plan-panel";
    panel.className = "panel map-plan-inline-panel";
    panel.hidden = true;

    const header = document.createElement("div");
    header.className = "days-header";

    const title = document.createElement("h2");
    title.id = "map-plan-title";
    title.textContent = "Selected Stage Plan";

    const subhead = document.createElement("p");
    subhead.id = "map-plan-subhead";
    subhead.textContent = "Click a day or resupply icon on the map to edit that stage here.";

    const content = document.createElement("div");
    content.id = "map-plan-content";
    content.className = "day-list";

    header.appendChild(title);
    header.appendChild(subhead);
    panel.appendChild(header);
    panel.appendChild(content);
    markerPanel.parentElement.insertBefore(panel, markerPanel.nextSibling);
  }

  if (panel.parentElement === markerPanel.parentElement) {
    markerPanel.parentElement.insertBefore(panel, markerPanel.nextSibling);
  }

  mapPlanPanelEl = panel;
  mapPlanTitleEl = panel.querySelector("#map-plan-title");
  mapPlanSubheadEl = panel.querySelector("#map-plan-subhead");
  mapPlanContentEl = panel.querySelector("#map-plan-content");
  return Boolean(mapPlanPanelEl && mapPlanTitleEl && mapPlanSubheadEl && mapPlanContentEl);
}

function findDayIndexForStop(assignments, stopIndex) {
  for (const [dayIndex, stops] of assignments.entries()) {
    if (stops.some((stop) => stop.stopIndex === stopIndex)) return dayIndex;
  }
  return -1;
}

function setMapPlanSelection(selection) {
  if (!selection || !Number.isInteger(selection.dayIndex) || selection.dayIndex < 0) {
    mapPlanSelection = null;
    renderMapPlanSelection();
    return;
  }
  mapPlanSelection = {
    dayIndex: selection.dayIndex,
    stopIndex: Number.isInteger(selection.stopIndex) ? selection.stopIndex : null
  };
  renderMapPlanSelection();
}

function renderMapPlanSelection() {
  if (!ensureMapPlanPanel()) return;
  if (!plan.length || !mapPlanSelection || !plan[mapPlanSelection.dayIndex]) {
    mapPlanPanelEl.hidden = true;
    mapPlanContentEl.innerHTML = "";
    return;
  }

  const dayIndex = mapPlanSelection.dayIndex;
  const day = plan[dayIndex];
  mapPlanPanelEl.hidden = false;
  mapPlanContentEl.innerHTML = "";
  mapPlanContentEl.appendChild(createDayCard(day, dayIndex));

  const assignments = resupplyDayAssignments(plan);
  const sortedAssignmentDays = Array.from(assignments.keys()).sort((a, b) => a - b);
  const nextAssignmentByDay = new Map();
  sortedAssignmentDays.forEach((idx, i) => {
    nextAssignmentByDay.set(idx, sortedAssignmentDays[i + 1] ?? null);
  });

  let stops = assignments.get(dayIndex) || [];
  if (Number.isInteger(mapPlanSelection.stopIndex)) {
    stops = stops.filter((stop) => stop.stopIndex === mapPlanSelection.stopIndex);
  }

  stops.forEach((stop) => {
    const nextDayIdx = nextAssignmentByDay.get(dayIndex);
    const autoDaysUntil = nextDayIdx === null ? 1 : Math.max(1, nextDayIdx - dayIndex);
    mapPlanContentEl.appendChild(createResupplyCard(day, dayIndex, stop, autoDaysUntil));
  });

  if (Number.isInteger(mapPlanSelection.stopIndex) && stops.length) {
    const stopName = stops[0].point?.name || "Selected stop";
    mapPlanTitleEl.textContent = `${stopName} + Day ${day.id} Plan`;
    mapPlanSubheadEl.textContent = "Editing the selected resupply stop and its linked day plan from the map.";
  } else {
    mapPlanTitleEl.textContent = `Day ${day.id} Plan`;
    mapPlanSubheadEl.textContent = "Editing this stage from the map. Changes stay synced with the Plan tab.";
  }
}

async function pushCloudData() {
  if (!cloudReady()) return;
  const routeId = getRouteFromUrl();
  let customRideData = buildCustomRideDataPayload();
  if (isCustomRouteActive() && !hasValidCustomRideDataObject(customRideData)) {
    customRideData = await resolveCustomRideDataForSync(routeId, customRideData);
    if (!hasValidCustomRideDataObject(customRideData)) {
      setCloudStatus("Custom route sync paused: GPX payload is missing. Re-open the route and save again.");
      return;
    }
  }
  if (localAuthMode) {
    try {
      const config = parseForm();
      const result = saveLocalProfileWithFallback(authUser.email, {
        config,
        plan,
        comments,
        customRideData,
        updatedAt: new Date().toISOString()
      });
      if (result.ok && result.degraded) {
        setCloudStatus(`Saved locally for ${authUser.email} (images trimmed to fit storage).`);
      } else if (result.ok) {
        setCloudStatus(`Saved to local account: ${authUser.email}`);
      } else {
        setCloudStatus("Local account save failed (browser storage full).");
      }
    } catch {
      setCloudStatus("Local account save failed.");
    }
    return;
  }
  try {
    const config = parseForm();
    const docId = cloudProfileDocIdForRoute(routeId, authUser.uid);
    if (!docId) return;
    if (isCustomRouteActive()) {
      const customConfig = config || buildFallbackConfigForMyRoute();
      const customPlan = Array.isArray(plan) && plan.length ? plan : buildPlan(customConfig);
      await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(docId).set(
        {
          customRouteRegistry: loadCustomRouteRegistry(),
          customRoutes: {
            [routeId]: {
              routeName: sanitizeCustomRouteName(customRouteDisplayName || "My Route"),
              config: customConfig,
              plan: customPlan,
              comments: Array.isArray(comments) ? comments : [],
              customRideData,
              updatedAt: new Date().toISOString()
            }
          },
          updatedAt: new Date().toISOString()
        },
        { merge: true }
      );
    } else {
      await firestoreDb.collection(PROFILE_COLLECTION).doc(docId).set(
        {
          config,
          plan,
          comments,
          customRideData,
          updatedAt: new Date().toISOString()
        },
        { merge: true }
      );
    }
    setCloudStatus(`Synced to cloud for ${authUser.email}`);
  } catch {
    setCloudStatus("Cloud sync failed. Local data is still safe.");
  }
}

function scheduleCloudSync() {
  if (!cloudReady()) return;
  if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => {
    pushCloudData();
  }, 700);
}

async function loadCloudData() {
  if (cloudLoadInProgress) return;
  cloudLoadInProgress = true;
  try {
  if (!cloudReady()) return;
  const routeId = getRouteFromUrl();
  if (isRouteBuilderActive()) {
    setCloudStatus("Create Your Own Ride is ready. Upload GPX and click Create Route.");
    return;
  }
  if (localAuthMode) {
    try {
      let raw = localStorage.getItem(localProfileKey(authUser.email));
      if (!raw && isCustomRouteActive()) {
        raw = localStorage.getItem(legacyCustomRideLocalProfileKey(authUser.email));
      }
      if (!raw) {
        setCloudStatus(`Signed in as ${authUser.email}. No account data yet.`);
        return;
      }
      const data = JSON.parse(raw);
      if (isCustomRouteActive()) {
        if (!hasValidCustomRideDataPayload(data)) {
          setCloudStatus(`Signed in as ${authUser.email}. No saved route GPX yet.`);
          return;
        }
        applyCustomRideDataPayload(data.customRideData);
      }
      if (isUserActivelyEditingPlanner()) {
        setCloudStatus(`Cloud data ready for ${authUser.email}. Finish typing, then click Sync Now.`);
        return;
      }
      applyPlannerConfig(data.config);
      enforceRouteDistanceBaseline();
      applyPlanArray(data.plan);
      applyCommentsArray(data.comments);
      if (isCustomRouteActive() && map && customUploadedTrackPoints.length >= 2) {
        applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
      }
      setCloudStatus(`Loaded local account data for ${authUser.email}`);
    } catch {
      setCloudStatus("Failed to load local account data.");
    }
    return;
  }
  try {
    let data = null;
    let usedLegacyCustomRouteData = false;
    const docId = cloudProfileDocIdForRoute(routeId, authUser.uid);
    if (!docId) return;
    if (isCustomRouteActive()) {
      const customSnapshot = await firestoreDb.collection(ROUTES.custom_ride.profileCollection).doc(docId).get();
      const customDoc = customSnapshot.exists ? customSnapshot.data() || {} : {};
      const customRoutesMap = customDoc?.customRoutes && typeof customDoc.customRoutes === "object" ? customDoc.customRoutes : {};
      data = customRoutesMap[routeId] || null;
      if (!hasValidCustomRideDataPayload(data) && hasValidCustomRideDataPayload(customDoc)) {
        data = customDoc;
        usedLegacyCustomRouteData = true;
      }
    } else {
      const snapshot = await firestoreDb.collection(PROFILE_COLLECTION).doc(docId).get();
      if (snapshot.exists) data = snapshot.data() || {};
    }
    if (!data) {
      if (isCustomRouteActive()) {
        const localCustomSnapshot = loadLocalCustomRouteSnapshot(routeId);
        if (localCustomSnapshot && hasValidCustomRideDataPayload(localCustomSnapshot)) {
          applyCustomRideDataPayload(localCustomSnapshot.customRideData);
          if (isUserActivelyEditingPlanner()) {
            setCloudStatus(`Local backup route ready for ${authUser.email}. Finish typing, then click Sync Now.`);
            return;
          }
          applyPlannerConfig(localCustomSnapshot.config);
          enforceRouteDistanceBaseline();
          applyPlanArray(localCustomSnapshot.plan);
          applyCommentsArray(localCustomSnapshot.comments);
          if (map && customUploadedTrackPoints.length >= 2) {
            applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
          }
          setCloudStatus(`Loaded local backup route for ${authUser.email}.`);
          return;
        }
      }
      setCloudStatus(`Signed in as ${authUser.email}. No cloud data yet.`);
      return;
    }
    if (isCustomRouteActive()) {
      if (!hasValidCustomRideDataPayload(data)) {
        setCloudStatus(`Signed in as ${authUser.email}. No saved route GPX yet.`);
        return;
      }
      applyCustomRideDataPayload(data.customRideData);
    }
    if (isUserActivelyEditingPlanner()) {
      setCloudStatus(`Cloud data ready for ${authUser.email}. Finish typing, then click Sync Now.`);
      return;
    }
    applyPlannerConfig(data.config);
    enforceRouteDistanceBaseline();
    applyPlanArray(data.plan);
    applyCommentsArray(data.comments);
    if (isCustomRouteActive() && map && customUploadedTrackPoints.length >= 2) {
      applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
    }
    if (isCustomRouteActive() && usedLegacyCustomRouteData) {
      await persistMyRouteSnapshot({
        syncCloud: true,
        uploadedFileName: String(data?.customRideData?.uploadedFileName || ""),
        routeId
      });
    }
    resetUndoBaseline();
    setCloudStatus(`Loaded cloud data for ${authUser.email}`);
  } catch (error) {
    const message = String(error?.message || "Unknown cloud load error");
    const transientUiRace = /parentNode|is not an object|Cannot read properties of undefined/i.test(message);
    if (transientUiRace) {
      // UI can transiently reflow while auth finishes. Avoid aggressive retry loops that can overwrite input.
      setCloudStatus("Signed in. Cloud data will finish loading when the page is stable.");
      return;
    }
    console.error("Cloud load error:", error);
    setCloudStatus("Cloud load failed. Using local data.");
  }
  } finally {
    cloudLoadInProgress = false;
  }
}

function initCloud() {
  if (!window.firebase || !firebaseConfigured()) {
    localAuthMode = true;
    const sessionEmail = getLocalSessionEmail();
    if (sessionEmail) {
      authUser = { uid: `local-${sessionEmail}`, email: sessionEmail };
      loadCloudData();
      refreshMyRouteShortcutVisibility();
      updateAccountToggleLabel();
      setUnsignedWarningVisible(false);
    } else {
      authUser = null;
      setCloudStatus("Local account mode active. Sign up or sign in below.");
      setMyRouteShortcutVisible(false);
      updateAccountToggleLabel();
      setUnsignedWarningVisible(false);
    }
    return;
  }
  localAuthMode = false;
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  firebaseAuth = firebase.auth();
  firestoreDb = firebase.firestore();
  ensureFirebaseLocalPersistence();
  firebaseAuth
    .getRedirectResult()
    .then((result) => {
      if (result?.user) {
        setCloudStatus(`Signed in with Google as ${result.user.email || "your account"}. Loading your saved data...`);
      }
    })
    .catch((error) => {
      const message = String(error?.message || "Unknown redirect error");
      setCloudStatus(`Google sign-in failed: ${message}`);
    });
  firebaseAuth.onAuthStateChanged(async (user) => {
    const version = ++authStateVersion;
    if (signedOutUiTimer) {
      clearTimeout(signedOutUiTimer);
      signedOutUiTimer = null;
    }

    const previousEmail = normalizeEmail(authUser?.email || "");
    authUser = user || null;
    if (authUser) {
      try {
        await syncAllLocalCustomRoutesToCloud();
      } catch {
        // Keep going even if pre-sync fails.
      }
      if (version !== authStateVersion) return;
      await loadCloudData();
      if (version !== authStateVersion) return;
      await refreshMyRouteShortcutVisibility();
      if (version !== authStateVersion) return;
      updateAccountToggleLabel();
      setAuthBusyState(false);
      return;
    }

    // Debounce transient signed-out blips that happen during provider/session refresh.
    signedOutUiTimer = setTimeout(() => {
      if (version !== authStateVersion || authUser) return;
      purgeSignedInDataFromDevice(previousEmail);
      resetUiAfterSignOut();
      setCloudStatus("Signed out. Cloud mode ready. Sign in to sync and load saved routes.");
      setMyRouteShortcutVisible(false);
      updateAccountToggleLabel();
      setAuthBusyState(false);
    }, 900);
  });
}

function persistPlan() {
  const config = parseForm();
  if (!config) return;
  captureUndoPoint();
  const customRideData = buildCustomRideDataPayload();
  const compactRouteStorage = isNamedCustomRoute(activeRouteId());
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      config,
      plan,
      customRideData: compactRouteStorage ? null : customRideData
    })
  );
  if (isNamedCustomRoute(activeRouteId()) && hasValidCustomRideDataPayload({ customRideData })) {
    upsertCustomRoutePayload(activeRouteId(), {
      routeName: sanitizeCustomRouteName(customRouteDisplayName || ROUTES[activeRouteId()]?.label || "My Route"),
      config,
      plan: Array.isArray(plan) ? plan : [],
      comments: Array.isArray(comments) ? comments : [],
      customRideData,
      updatedAt: new Date().toISOString()
    });
  }
  maybeWarnUnsignedChanges();
  scheduleCloudSync();
}

function loadSavedPlan() {
  if (isRouteBuilderActive()) {
    if (!startDateInput.value) {
      startDateInput.value = localDateString(new Date());
    }
    return;
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    if (isNamedCustomRoute(activeRouteId())) {
      const localCustomSnapshot = loadLocalCustomRouteSnapshot(activeRouteId());
      if (localCustomSnapshot && hasValidCustomRideDataPayload(localCustomSnapshot)) {
        applyCustomRideDataPayload(localCustomSnapshot.customRideData);
        applyPlannerConfig(localCustomSnapshot.config);
        enforceRouteDistanceBaseline();
        applyPlanArray(localCustomSnapshot.plan);
        applyCommentsArray(localCustomSnapshot.comments);
        if (map && customUploadedTrackPoints.length >= 2) {
          applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
        }
        return;
      }
    }
    startDateInput.value = localDateString(new Date());
    return;
  }

  try {
    const saved = JSON.parse(raw);
    if (!saved?.config || !Array.isArray(saved?.plan)) throw new Error("Invalid plan");

    if (isCustomRouteActive()) {
      const appliedFromStoredPlan = applyCustomRideDataPayload(saved.customRideData);
      if (!appliedFromStoredPlan) {
        const localCustomSnapshot = loadLocalCustomRouteSnapshot(activeRouteId());
        if (localCustomSnapshot && hasValidCustomRideDataPayload(localCustomSnapshot)) {
          applyCustomRideDataPayload(localCustomSnapshot.customRideData);
          applyPlannerConfig(localCustomSnapshot.config);
          enforceRouteDistanceBaseline();
          applyPlanArray(localCustomSnapshot.plan);
          applyCommentsArray(localCustomSnapshot.comments);
          if (map && customUploadedTrackPoints.length >= 2) {
            applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
          }
          return;
        }
      }
    }
    applyPlannerConfig({
      ...saved.config,
      finishDate: saved.config.finishDate || addDays(saved.config.startDate, saved.config.totalDays - 1)
    });
    enforceRouteDistanceBaseline();
    applyPlanArray(saved.plan);
    if (isCustomRouteActive() && map && customUploadedTrackPoints.length >= 2) {
      applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
    }
  } catch {
    if (isNamedCustomRoute(activeRouteId())) {
      const localCustomSnapshot = loadLocalCustomRouteSnapshot(activeRouteId());
      if (localCustomSnapshot && hasValidCustomRideDataPayload(localCustomSnapshot)) {
        applyCustomRideDataPayload(localCustomSnapshot.customRideData);
        applyPlannerConfig(localCustomSnapshot.config);
        enforceRouteDistanceBaseline();
        applyPlanArray(localCustomSnapshot.plan);
        applyCommentsArray(localCustomSnapshot.comments);
        if (map && customUploadedTrackPoints.length >= 2) {
          applyTrackToMap(customUploadedTrackPoints, { fitBounds: true, rebuildPlan: false });
        }
        return;
      }
    }
    localStorage.removeItem(STORAGE_KEY);
    startDateInput.value = localDateString(new Date());
  }
}

function csvEscape(cell) {
  return `"${String(cell ?? "").replace(/"/g, '""')}"`;
}

function buildCsv(headers, rows) {
  return [headers, ...rows]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");
}

function downloadCsv(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadExcel(headers, rows, filename) {
  if (typeof XLSX === "undefined") {
    return false;
  }
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Plan");
  XLSX.writeFile(workbook, filename, { bookType: "xlsx" });
  return true;
}

function csvNameWithSuffix(suffix) {
  const base = CSV_FILENAME || "bikepack-plan.csv";
  return base.endsWith(".csv") ? `${base.slice(0, -4)}-${suffix}.csv` : `${base}-${suffix}.csv`;
}

function excelNameWithSuffix(suffix) {
  const baseCsv = CSV_FILENAME || "bikepack-plan.csv";
  const base = baseCsv.endsWith(".csv") ? baseCsv.slice(0, -4) : baseCsv;
  return suffix ? `${base}-${suffix}.xlsx` : `${base}.xlsx`;
}

function defaultPlanForCurrentConfig() {
  const config = parseForm();
  if (!config) return [];
  return buildPlan(config).map(normalizeDay);
}

function nearlyEqual(a, b, epsilon = 1e-6) {
  return Math.abs(Number(a) - Number(b)) <= epsilon;
}

function optionalCsvValue(day, dayIndex, field, baselinePlan, numeric = false) {
  const value = day?.[field];
  const baseline = baselinePlan?.[dayIndex]?.[field];

  if (numeric) {
    const valueNum = Number(value ?? 0);
    const baselineNum = Number(baseline ?? 0);
    if (nearlyEqual(valueNum, baselineNum)) return "";
    return valueNum;
  }

  const valueStr = String(value ?? "");
  const baselineStr = String(baseline ?? "");
  return valueStr === baselineStr ? "" : valueStr;
}

function extraOptionsText(day) {
  const items = Array.isArray(day?.resupplyExtraOptions) ? day.resupplyExtraOptions : [];
  return items
    .map((item) => {
      const option = String(item?.option || "").trim();
      const hours = String(item?.hours || "").trim();
      const distance = Number(item?.distance || 0);
      const address = String(item?.address || "").trim();
      if (!option && !hours && distance <= 0 && !address) return "";
      return `${option || "Option"}${hours ? ` [${hours}]` : ""}${distance > 0 ? ` (${distance.toFixed(1)} mi)` : ""}${address ? ` @ ${address}` : ""}`;
    })
    .filter(Boolean)
    .join(" | ");
}

function optionalExtraOptionsText(day, dayIndex, baselinePlan) {
  const value = extraOptionsText(day);
  const baseline = extraOptionsText(baselinePlan?.[dayIndex]);
  return value === baseline ? "" : value;
}

function bikeShopsText(day) {
  const items = Array.isArray(day?.resupplyBikeShops) ? day.resupplyBikeShops : [];
  return items
    .map((item) => {
      const name = String(item?.name || "").trim();
      const hours = String(item?.hours || "").trim();
      const distance = Number(item?.distance || 0);
      const address = String(item?.address || "").trim();
      if (!name && !hours && distance <= 0 && !address) return "";
      return `${name || "Bike Shop"}${hours ? ` [${hours}]` : ""}${distance > 0 ? ` (${distance.toFixed(1)} mi)` : ""}${address ? ` @ ${address}` : ""}`;
    })
    .filter(Boolean)
    .join(" | ");
}

function optionalBikeShopsText(day, dayIndex, baselinePlan) {
  const value = bikeShopsText(day);
  const baseline = bikeShopsText(baselinePlan?.[dayIndex]);
  return value === baseline ? "" : value;
}

function daySummaries(days) {
  const summaries = [];
  let cumulativeMiles = 0;
  for (const day of days) {
    const startMile = cumulativeMiles;
    if (day.type !== "Rest") cumulativeMiles += Number(day.miles || 0);
    summaries.push({
      ...day,
      startMile,
      endMile: cumulativeMiles,
      cumulativeMiles
    });
  }
  return summaries;
}

function firstDayIndexAtOrAfterMile(summaries, mile) {
  const idx = summaries.findIndex((d) => d.cumulativeMiles >= mile);
  return idx >= 0 ? idx : Math.max(0, summaries.length - 1);
}

function exportStandardCsv(baselinePlan) {
  const headers = [
    "Day",
    "Date",
    "Type",
    "Miles",
    "GainFt",
    "LossFt",
    "TargetTown",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "Notes"
  ];
  const rows = plan.map((d) => [
    d.id,
    d.date,
    d.type,
    d.miles,
    d.gain,
    d.loss || 0,
    d.town,
    optionalCsvValue(d, d.id - 1, "resupplyOptions1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyHours1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyDistance1", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "resupplyAddress1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyOptions2", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyHours2", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyDistance2", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "resupplyAddress2", baselinePlan),
    optionalExtraOptionsText(d, d.id - 1, baselinePlan),
    optionalBikeShopsText(d, d.id - 1, baselinePlan),
    optionalCsvValue(d, d.id - 1, "shoppingList", baselinePlan),
    optionalCsvValue(d, d.id - 1, "calorieTarget", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "notes", baselinePlan)
  ]);
  downloadCsv(buildCsv(headers, rows), CSV_FILENAME || "bikepack-plan.csv");
}

function standardExportRows(baselinePlan) {
  const headers = [
    "Day",
    "Date",
    "Type",
    "Miles",
    "GainFt",
    "LossFt",
    "TargetTown",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "Notes"
  ];
  const rows = plan.map((d) => [
    d.id,
    d.date,
    d.type,
    d.miles,
    d.gain,
    d.loss || 0,
    d.town,
    optionalCsvValue(d, d.id - 1, "resupplyOptions1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyHours1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyDistance1", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "resupplyAddress1", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyOptions2", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyHours2", baselinePlan),
    optionalCsvValue(d, d.id - 1, "resupplyDistance2", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "resupplyAddress2", baselinePlan),
    optionalExtraOptionsText(d, d.id - 1, baselinePlan),
    optionalBikeShopsText(d, d.id - 1, baselinePlan),
    optionalCsvValue(d, d.id - 1, "shoppingList", baselinePlan),
    optionalCsvValue(d, d.id - 1, "calorieTarget", baselinePlan, true),
    optionalCsvValue(d, d.id - 1, "notes", baselinePlan)
  ]);
  return { headers, rows, suffix: "" };
}

function exportDetailedDaysCsv(baselinePlan) {
  const summaries = daySummaries(plan);
  const assignments = resupplyDayAssignments(plan);
  const headers = [
    "Day",
    "Date",
    "Type",
    "StartMile",
    "EndMile",
    "DailyDistanceMi",
    "CumulativeDistanceMi",
    "ElevationGainFt",
    "ElevationLossFt",
    "LocationOfStop",
    "ResuppliesReachedToday",
    "DaysUntilNextResupply",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "ExtraResupplyNotes",
    "NotesOnDay"
  ];

  const rows = summaries.map((d, idx) => {
    const dayStops = (assignments.get(idx) || []).map((s) => `${s.point.name} (${s.point.mile.toFixed(1)} mi)`).join(" | ");
    return [
      d.id,
      d.date,
      d.type,
      Number(d.startMile.toFixed(2)),
      Number(d.endMile.toFixed(2)),
      Number((d.endMile - d.startMile).toFixed(2)),
      Number(d.cumulativeMiles.toFixed(2)),
      d.gain,
      d.loss || 0,
      d.town || "",
      dayStops,
      optionalCsvValue(d, d.id - 1, "daysUntilNextResupply", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyOptions1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyHours1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyDistance1", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyAddress1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyOptions2", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyHours2", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyDistance2", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyAddress2", baselinePlan),
      optionalExtraOptionsText(d, d.id - 1, baselinePlan),
      optionalBikeShopsText(d, d.id - 1, baselinePlan),
      optionalCsvValue(d, d.id - 1, "shoppingList", baselinePlan),
      optionalCsvValue(d, d.id - 1, "calorieTarget", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyNotes", baselinePlan),
      optionalCsvValue(d, d.id - 1, "notes", baselinePlan)
    ];
  });

  downloadCsv(buildCsv(headers, rows), csvNameWithSuffix("detailed-days"));
}

function detailedDaysExportRows(baselinePlan) {
  const summaries = daySummaries(plan);
  const assignments = resupplyDayAssignments(plan);
  const headers = [
    "Day",
    "Date",
    "Type",
    "StartMile",
    "EndMile",
    "DailyDistanceMi",
    "CumulativeDistanceMi",
    "ElevationGainFt",
    "ElevationLossFt",
    "LocationOfStop",
    "ResuppliesReachedToday",
    "DaysUntilNextResupply",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "ExtraResupplyNotes",
    "NotesOnDay"
  ];
  const rows = summaries.map((d, idx) => {
    const dayStops = (assignments.get(idx) || []).map((s) => `${s.point.name} (${s.point.mile.toFixed(1)} mi)`).join(" | ");
    return [
      d.id,
      d.date,
      d.type,
      Number(d.startMile.toFixed(2)),
      Number(d.endMile.toFixed(2)),
      Number((d.endMile - d.startMile).toFixed(2)),
      Number(d.cumulativeMiles.toFixed(2)),
      d.gain,
      d.loss || 0,
      d.town || "",
      dayStops,
      optionalCsvValue(d, d.id - 1, "daysUntilNextResupply", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyOptions1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyHours1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyDistance1", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyAddress1", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyOptions2", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyHours2", baselinePlan),
      optionalCsvValue(d, d.id - 1, "resupplyDistance2", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyAddress2", baselinePlan),
      optionalExtraOptionsText(d, d.id - 1, baselinePlan),
      optionalBikeShopsText(d, d.id - 1, baselinePlan),
      optionalCsvValue(d, d.id - 1, "shoppingList", baselinePlan),
      optionalCsvValue(d, d.id - 1, "calorieTarget", baselinePlan, true),
      optionalCsvValue(d, d.id - 1, "resupplyNotes", baselinePlan),
      optionalCsvValue(d, d.id - 1, "notes", baselinePlan)
    ];
  });
  return { headers, rows, suffix: "detailed-days" };
}

function exportResupplyOnlyCsv(baselinePlan) {
  const summaries = daySummaries(plan);
  const headers = [
    "ResupplyStop",
    "MileMarker",
    "DayReached",
    "DateReached",
    "DistanceSincePreviousStopMi",
    "DaysFromPreviousStop",
    "DaysUntilNextResupply",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "ExtraResupplyNotes",
    "RouteNote"
  ];

  const rows = [];
  for (let i = 0; i < resupplyPoints.length; i++) {
    const point = resupplyPoints[i];
    const dayIndex = firstDayIndexAtOrAfterMile(summaries, point.mile);
    const day = summaries[dayIndex] || {};
    const previousPoint = resupplyPoints[i - 1];
    const previousDayIndex = previousPoint ? firstDayIndexAtOrAfterMile(summaries, previousPoint.mile) : dayIndex;
    rows.push([
      point.name,
      Number(point.mile.toFixed(2)),
      day.id || "",
      day.date || "",
      previousPoint ? Number((point.mile - previousPoint.mile).toFixed(2)) : 0,
      Math.max(0, dayIndex - previousDayIndex),
      optionalCsvValue(day, (day.id || 1) - 1, "daysUntilNextResupply", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyOptions1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyHours1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyDistance1", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyAddress1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyOptions2", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyHours2", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyDistance2", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyAddress2", baselinePlan),
      optionalExtraOptionsText(day, (day.id || 1) - 1, baselinePlan),
      optionalBikeShopsText(day, (day.id || 1) - 1, baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "shoppingList", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "calorieTarget", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyNotes", baselinePlan) || point.resupply || "",
      optionalCsvValue(day, (day.id || 1) - 1, "notes", baselinePlan)
    ]);
  }

  downloadCsv(buildCsv(headers, rows), csvNameWithSuffix("resupply-only"));
}

function resupplyOnlyExportRows(baselinePlan) {
  const summaries = daySummaries(plan);
  const headers = [
    "ResupplyStop",
    "MileMarker",
    "DayReached",
    "DateReached",
    "DistanceSincePreviousStopMi",
    "DaysFromPreviousStop",
    "DaysUntilNextResupply",
    "ResupplyOption1",
    "Hours1",
    "DistanceFromRouteMi1",
    "Address1",
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "Address2",
    "AdditionalResupplyOptions",
    "AdditionalBikeShops",
    "ShoppingList",
    "CalorieTargetKcal",
    "ExtraResupplyNotes",
    "RouteNote"
  ];

  const rows = [];
  for (let i = 0; i < resupplyPoints.length; i++) {
    const point = resupplyPoints[i];
    const dayIndex = firstDayIndexAtOrAfterMile(summaries, point.mile);
    const day = summaries[dayIndex] || {};
    const previousPoint = resupplyPoints[i - 1];
    const previousDayIndex = previousPoint ? firstDayIndexAtOrAfterMile(summaries, previousPoint.mile) : dayIndex;
    rows.push([
      point.name,
      Number(point.mile.toFixed(2)),
      day.id || "",
      day.date || "",
      previousPoint ? Number((point.mile - previousPoint.mile).toFixed(2)) : 0,
      Math.max(0, dayIndex - previousDayIndex),
      optionalCsvValue(day, (day.id || 1) - 1, "daysUntilNextResupply", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyOptions1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyHours1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyDistance1", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyAddress1", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyOptions2", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyHours2", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyDistance2", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyAddress2", baselinePlan),
      optionalExtraOptionsText(day, (day.id || 1) - 1, baselinePlan),
      optionalBikeShopsText(day, (day.id || 1) - 1, baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "shoppingList", baselinePlan),
      optionalCsvValue(day, (day.id || 1) - 1, "calorieTarget", baselinePlan, true),
      optionalCsvValue(day, (day.id || 1) - 1, "resupplyNotes", baselinePlan) || point.resupply || "",
      optionalCsvValue(day, (day.id || 1) - 1, "notes", baselinePlan)
    ]);
  }

  return { headers, rows, suffix: "resupply-only" };
}

function exportDayMatrixCsv(baselinePlan) {
  const dayHeaders = plan.map((d) => `Day ${d.id}`);
  const headers = ["Field", ...dayHeaders];
  const summaries = daySummaries(plan);
  const rowPairs = [
    ["Date", (d) => d.date],
    ["Type", (d) => d.type],
    ["Start Mile", (_, i) => Number(summaries[i].startMile.toFixed(2))],
    ["End Mile", (_, i) => Number(summaries[i].endMile.toFixed(2))],
    ["Daily Distance (mi)", (d, i) => Number((summaries[i].endMile - summaries[i].startMile).toFixed(2))],
    ["Elevation Gain (ft)", (d) => d.gain || 0],
    ["Elevation Loss (ft)", (d) => d.loss || 0],
    ["Location of Stop", (d) => d.town || ""],
    ["Resupply Option 1", (d, i) => optionalCsvValue(d, i, "resupplyOptions1", baselinePlan)],
    ["Hours 1", (d, i) => optionalCsvValue(d, i, "resupplyHours1", baselinePlan)],
    ["Distance From Route 1 (mi)", (d, i) => optionalCsvValue(d, i, "resupplyDistance1", baselinePlan, true)],
    ["Address 1", (d, i) => optionalCsvValue(d, i, "resupplyAddress1", baselinePlan)],
    ["Resupply Option 2", (d, i) => optionalCsvValue(d, i, "resupplyOptions2", baselinePlan)],
    ["Hours 2", (d, i) => optionalCsvValue(d, i, "resupplyHours2", baselinePlan)],
    ["Distance From Route 2 (mi)", (d, i) => optionalCsvValue(d, i, "resupplyDistance2", baselinePlan, true)],
    ["Address 2", (d, i) => optionalCsvValue(d, i, "resupplyAddress2", baselinePlan)],
    ["Additional Resupply Options", (d, i) => optionalExtraOptionsText(d, i, baselinePlan)],
    ["Additional Bike Shops", (d, i) => optionalBikeShopsText(d, i, baselinePlan)],
    ["Shopping List", (d, i) => optionalCsvValue(d, i, "shoppingList", baselinePlan)],
    ["Calorie Counter (kcal)", (d, i) => optionalCsvValue(d, i, "calorieTarget", baselinePlan, true)],
    ["Days Until Next Resupply", (d, i) => optionalCsvValue(d, i, "daysUntilNextResupply", baselinePlan, true)],
    ["Extra Resupply Notes", (d, i) => optionalCsvValue(d, i, "resupplyNotes", baselinePlan)],
    ["Notes on Day", (d, i) => optionalCsvValue(d, i, "notes", baselinePlan)]
  ];

  const rows = rowPairs.map(([label, getter]) => [
    label,
    ...plan.map((d, i) => getter(d, i))
  ]);

  downloadCsv(buildCsv(headers, rows), csvNameWithSuffix("day-matrix"));
}

function dayMatrixExportRows(baselinePlan) {
  const dayHeaders = plan.map((d) => `Day ${d.id}`);
  const headers = ["Field", ...dayHeaders];
  const summaries = daySummaries(plan);
  const rowPairs = [
    ["Date", (d) => d.date],
    ["Type", (d) => d.type],
    ["Start Mile", (_, i) => Number(summaries[i].startMile.toFixed(2))],
    ["End Mile", (_, i) => Number(summaries[i].endMile.toFixed(2))],
    ["Daily Distance (mi)", (d, i) => Number((summaries[i].endMile - summaries[i].startMile).toFixed(2))],
    ["Elevation Gain (ft)", (d) => d.gain || 0],
    ["Elevation Loss (ft)", (d) => d.loss || 0],
    ["Location of Stop", (d) => d.town || ""],
    ["Resupply Option 1", (d, i) => optionalCsvValue(d, i, "resupplyOptions1", baselinePlan)],
    ["Hours 1", (d, i) => optionalCsvValue(d, i, "resupplyHours1", baselinePlan)],
    ["Distance From Route 1 (mi)", (d, i) => optionalCsvValue(d, i, "resupplyDistance1", baselinePlan, true)],
    ["Address 1", (d, i) => optionalCsvValue(d, i, "resupplyAddress1", baselinePlan)],
    ["Resupply Option 2", (d, i) => optionalCsvValue(d, i, "resupplyOptions2", baselinePlan)],
    ["Hours 2", (d, i) => optionalCsvValue(d, i, "resupplyHours2", baselinePlan)],
    ["Distance From Route 2 (mi)", (d, i) => optionalCsvValue(d, i, "resupplyDistance2", baselinePlan, true)],
    ["Address 2", (d, i) => optionalCsvValue(d, i, "resupplyAddress2", baselinePlan)],
    ["Additional Resupply Options", (d, i) => optionalExtraOptionsText(d, i, baselinePlan)],
    ["Additional Bike Shops", (d, i) => optionalBikeShopsText(d, i, baselinePlan)],
    ["Shopping List", (d, i) => optionalCsvValue(d, i, "shoppingList", baselinePlan)],
    ["Calorie Counter (kcal)", (d, i) => optionalCsvValue(d, i, "calorieTarget", baselinePlan, true)],
    ["Days Until Next Resupply", (d, i) => optionalCsvValue(d, i, "daysUntilNextResupply", baselinePlan, true)],
    ["Extra Resupply Notes", (d, i) => optionalCsvValue(d, i, "resupplyNotes", baselinePlan)],
    ["Notes on Day", (d, i) => optionalCsvValue(d, i, "notes", baselinePlan)]
  ];
  const rows = rowPairs.map(([label, getter]) => [label, ...plan.map((d, i) => getter(d, i))]);
  return { headers, rows, suffix: "day-matrix" };
}

function exportDataForSelectedFormat(baselinePlan) {
  const format = exportFormatSelect?.value || "standard";
  if (format === "detailed_days") return detailedDaysExportRows(baselinePlan);
  if (format === "resupply_only") return resupplyOnlyExportRows(baselinePlan);
  if (format === "day_matrix") return dayMatrixExportRows(baselinePlan);
  return standardExportRows(baselinePlan);
}

function exportCsv() {
  if (!plan.length) return;
  const baselinePlan = defaultPlanForCurrentConfig();
  const { headers, rows, suffix } = exportDataForSelectedFormat(baselinePlan);
  downloadCsv(buildCsv(headers, rows), suffix ? csvNameWithSuffix(suffix) : (CSV_FILENAME || "bikepack-plan.csv"));
}

function exportExcel() {
  if (!plan.length) return;
  const baselinePlan = defaultPlanForCurrentConfig();
  const { headers, rows, suffix } = exportDataForSelectedFormat(baselinePlan);
  const exported = downloadExcel(headers, rows, excelNameWithSuffix(suffix));
  if (!exported) {
    downloadCsv(buildCsv(headers, rows), suffix ? csvNameWithSuffix(suffix) : (CSV_FILENAME || "bikepack-plan.csv"));
    alert("Excel library could not load, so CSV was exported instead.");
  }
}

function setupTabs() {
  const activateTab = (tabName) => {
    tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === tabName);
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.tabPanel === tabName);
    });

    if (tabName === "map" && map) {
      setTimeout(() => {
        map.invalidateSize();
        ensureMapArtifacts();
        hardRebuildMapUi();
        if (routeLine) {
          try {
            const bounds = routeLine.getBounds();
            if (bounds && bounds.isValid && bounds.isValid()) {
              map.fitBounds(bounds, { padding: [30, 30] });
            }
          } catch {
            // Ignore fit errors when map container sizing is in transition.
          }
        }
      }, 40);
      setTimeout(() => {
        try {
          if (routeLine) {
            const bounds = routeLine.getBounds();
            if (bounds && bounds.isValid && bounds.isValid()) {
              map.fitBounds(bounds, { padding: [30, 30] });
            }
          }
        } catch {
          // noop
        }
      }, 350);
    }
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

function setupAccountMenu() {
  if (!accountToggleBtn || !accountDropdown) return;

  accountToggleBtn.addEventListener("click", () => {
    const open = !accountDropdown.hidden;
    accountDropdown.hidden = open;
    accountToggleBtn.setAttribute("aria-expanded", String(!open));
  });

  document.addEventListener("click", (event) => {
    if (accountDropdown.hidden) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (accountDropdown.contains(target) || accountToggleBtn.contains(target)) return;
    accountDropdown.hidden = true;
    accountToggleBtn.setAttribute("aria-expanded", "false");
  });
}

function haversineMiles(a, b) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
  return 3958.7613 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

function interpolatePoint(a, b, target, startDistance, segmentDistance) {
  if (segmentDistance <= 0) return { lat: a.lat, lon: a.lon };
  const ratio = Math.max(0, Math.min(1, (target - startDistance) / segmentDistance));
  return {
    lat: a.lat + (b.lat - a.lat) * ratio,
    lon: a.lon + (b.lon - a.lon) * ratio
  };
}

function parseGpxTrack(xmlText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");
  if (xml.querySelector("parsererror")) {
    throw new Error("Invalid GPX XML.");
  }

  const localNameOf = (node) => String(node?.localName || node?.nodeName || "").toLowerCase();
  const childrenByLocalName = (node, name) =>
    Array.from(node?.children || []).filter((child) => localNameOf(child) === name);

  const toTrackPoint = (node) => {
    if (!node) return null;
    const lat = Number(node.getAttribute("lat"));
    const lon = Number(node.getAttribute("lon"));
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

    const eleNode = childrenByLocalName(node, "ele")[0] || null;
    const ele = eleNode ? Number(eleNode.textContent) : Number.NaN;
    return {
      lat,
      lon,
      ele: Number.isFinite(ele) ? ele : null
    };
  };

  const collectTrackNodes = () => {
    const result = [];
    const tracks = Array.from(xml.getElementsByTagName("*")).filter((node) => localNameOf(node) === "trk");
    tracks.forEach((trk) => {
      const segments = childrenByLocalName(trk, "trkseg");
      if (!segments.length) {
        childrenByLocalName(trk, "trkpt").forEach((point) => result.push(point));
        return;
      }
      segments.forEach((seg) => {
        childrenByLocalName(seg, "trkpt").forEach((point) => result.push(point));
      });
    });
    return result;
  };

  const collectRouteNodes = () => {
    const result = [];
    const routes = Array.from(xml.getElementsByTagName("*")).filter((node) => localNameOf(node) === "rte");
    routes.forEach((rte) => {
      childrenByLocalName(rte, "rtept").forEach((point) => result.push(point));
    });
    return result;
  };

  const collectByLocalName = (name) =>
    Array.from(xml.getElementsByTagName("*")).filter((node) => localNameOf(node) === name);

  // Prefer ordered track points; fallback to route points; final fallback to waypoints.
  const trkNodes = collectTrackNodes();
  const rteNodes = collectRouteNodes();
  const wptNodes = collectByLocalName("wpt");
  const chosenNodes = trkNodes.length ? trkNodes : rteNodes.length ? rteNodes : wptNodes;

  const points = chosenNodes.map(toTrackPoint).filter(Boolean);

  // Remove immediate duplicates that can appear in some exported GPX files.
  const deduped = [];
  for (let i = 0; i < points.length; i++) {
    const prev = deduped[deduped.length - 1];
    const cur = points[i];
    if (prev && prev.lat === cur.lat && prev.lon === cur.lon) continue;
    deduped.push(cur);
  }

  return deduped;
}

function sampleTrackForDisplay(points, maxPoints = 3200) {
  if (!Array.isArray(points) || points.length <= maxPoints) return points;
  const result = [];
  const step = (points.length - 1) / (maxPoints - 1);
  for (let i = 0; i < maxPoints; i++) {
    const index = Math.round(i * step);
    result.push(points[Math.max(0, Math.min(points.length - 1, index))]);
  }
  if (result[0] !== points[0]) result[0] = points[0];
  if (result[result.length - 1] !== points[points.length - 1]) {
    result[result.length - 1] = points[points.length - 1];
  }
  return result;
}

function getRouteDrawPoints(points) {
  return sampleTrackForDisplay(points, MAP_ROUTE_DRAW_MAX_POINTS);
}

function getHoverDrawPoints(points) {
  return sampleTrackForDisplay(points, MAP_HOVER_DRAW_MAX_POINTS);
}

function buildTrackCumulativeMiles(trackPoints) {
  if (!trackPoints.length) return [];
  const cumulative = [0];
  for (let i = 1; i < trackPoints.length; i++) {
    cumulative[i] = cumulative[i - 1] + haversineMiles(trackPoints[i - 1], trackPoints[i]);
  }
  return cumulative;
}

function fillAndSmoothElevationSeriesMeters(trackPoints) {
  if (!Array.isArray(trackPoints) || !trackPoints.length) return [];

  const series = new Array(trackPoints.length);
  for (let i = 0; i < trackPoints.length; i++) {
    const ele = trackPoints[i]?.ele;
    series[i] = Number.isFinite(ele) ? Number(ele) : null;
  }

  // Fill null gaps via linear interpolation between nearest valid neighbors.
  let lastValidIndex = -1;
  for (let i = 0; i < series.length; i++) {
    if (series[i] !== null) {
      if (lastValidIndex >= 0 && i - lastValidIndex > 1) {
        const start = series[lastValidIndex];
        const end = series[i];
        const span = i - lastValidIndex;
        for (let j = lastValidIndex + 1; j < i; j++) {
          const ratio = (j - lastValidIndex) / span;
          series[j] = start + (end - start) * ratio;
        }
      }
      lastValidIndex = i;
    }
  }
  if (lastValidIndex >= 0) {
    for (let i = 0; i < lastValidIndex; i++) {
      if (series[i] === null) series[i] = series[lastValidIndex];
    }
    for (let i = lastValidIndex + 1; i < series.length; i++) {
      if (series[i] === null) series[i] = series[lastValidIndex];
    }
  }

  const fallback = series.find((v) => v !== null) ?? 0;
  for (let i = 0; i < series.length; i++) {
    if (series[i] === null) series[i] = fallback;
  }

  // Remove sharp spikes, then median smooth.
  const cleaned = [...series];
  for (let i = 1; i < cleaned.length - 1; i++) {
    const neighborMean = (cleaned[i - 1] + cleaned[i + 1]) / 2;
    const diffFt = Math.abs((cleaned[i] - neighborMean) * 3.28084);
    if (diffFt > RWGPS_ELEV_OUTLIER_FT) cleaned[i] = neighborMean;
  }

  const halfWindow = Math.max(1, Math.floor(RWGPS_ELEV_MEDIAN_WINDOW_POINTS / 2));
  const smoothed = new Array(cleaned.length);
  for (let i = 0; i < cleaned.length; i++) {
    const window = [];
    for (let k = -halfWindow; k <= halfWindow; k++) {
      const idx = Math.max(0, Math.min(cleaned.length - 1, i + k));
      window.push(cleaned[idx]);
    }
    window.sort((a, b) => a - b);
    smoothed[i] = window[Math.floor(window.length / 2)];
  }
  return smoothed;
}

function interpolateSeriesAtMileUnsafeSorted(mile, miles, values, cursorState) {
  const lastIndex = miles.length - 1;
  if (lastIndex < 1) return Number(values[0] || 0);
  if (mile <= miles[0]) return Number(values[0] || 0);
  if (mile >= miles[lastIndex]) return Number(values[lastIndex] || 0);

  let idx = Math.max(1, Math.min(lastIndex, Number(cursorState?.idx || 1)));
  while (idx < lastIndex && miles[idx] < mile) idx += 1;
  while (idx > 1 && miles[idx - 1] > mile) idx -= 1;
  if (cursorState) cursorState.idx = idx;

  const prev = idx - 1;
  const next = idx;
  const span = Math.max(1e-9, miles[next] - miles[prev]);
  const ratio = Math.max(0, Math.min(1, (mile - miles[prev]) / span));
  return Number(values[prev] || 0) + (Number(values[next] || 0) - Number(values[prev] || 0)) * ratio;
}

function sampleNumericSeries(values, maxPoints = RWGPS_PROFILE_MAX_SAMPLES) {
  if (!Array.isArray(values) || values.length <= maxPoints) return [...values];
  const result = [];
  const step = (values.length - 1) / (maxPoints - 1);
  for (let i = 0; i < maxPoints; i++) {
    const index = Math.round(i * step);
    result.push(values[Math.max(0, Math.min(values.length - 1, index))]);
  }
  return result;
}

function buildRwgpsElevationEngine(trackPoints) {
  if (!Array.isArray(trackPoints) || trackPoints.length < 2) {
    return {
      totalMiles: 0,
      hasElevation: false,
      cumulativeMilesByPoint: [],
      cumulativeGainFtByPoint: [],
      cumulativeLossFtByPoint: [],
      profileSamplesMeters: [],
      minEleMeters: 0,
      maxEleMeters: 0
    };
  }

  const cached = rwgpsElevationEngineCache.get(trackPoints);
  if (cached) return cached;

  const cumulativeMilesByPoint = buildTrackCumulativeMiles(trackPoints);
  const totalMiles = cumulativeMilesByPoint[cumulativeMilesByPoint.length - 1] || 0;
  const elevationMetersByPoint = fillAndSmoothElevationSeriesMeters(trackPoints);
  const hasElevation = elevationMetersByPoint.some((v) => Number.isFinite(v));

  if (!hasElevation || totalMiles <= 0) {
    const empty = {
      totalMiles,
      hasElevation: false,
      cumulativeMilesByPoint,
      cumulativeGainFtByPoint: new Array(trackPoints.length).fill(0),
      cumulativeLossFtByPoint: new Array(trackPoints.length).fill(0),
      profileSamplesMeters: [],
      minEleMeters: 0,
      maxEleMeters: 0
    };
    rwgpsElevationEngineCache.set(trackPoints, empty);
    return empty;
  }

  const sampleStep = Math.max(
    RWGPS_MIN_SAMPLE_STEP_MI,
    Math.min(RWGPS_MAX_SAMPLE_STEP_MI, totalMiles / RWGPS_TARGET_SAMPLE_COUNT)
  );
  const sampleCount = Math.max(2, Math.ceil(totalMiles / sampleStep) + 1);

  const sampleMiles = new Array(sampleCount);
  const sampleElevationMeters = new Array(sampleCount);
  const elevationCursor = { idx: 1 };
  for (let i = 0; i < sampleCount; i++) {
    const mile = Math.min(totalMiles, i * sampleStep);
    sampleMiles[i] = mile;
    sampleElevationMeters[i] = interpolateSeriesAtMileUnsafeSorted(
      mile,
      cumulativeMilesByPoint,
      elevationMetersByPoint,
      elevationCursor
    );
  }

  // Distance-based smoothing gives route-agnostic behavior closer to RWGPS.
  const smoothedSampleElevationMeters = smoothSeries(sampleElevationMeters, 3);

  const sampleCumulativeGainFt = new Array(sampleCount).fill(0);
  const sampleCumulativeLossFt = new Array(sampleCount).fill(0);
  for (let i = 1; i < sampleCount; i++) {
    const deltaMeters = smoothedSampleElevationMeters[i] - smoothedSampleElevationMeters[i - 1];
    if (deltaMeters > RWGPS_MIN_ASCENT_STEP_M) {
      sampleCumulativeGainFt[i] = sampleCumulativeGainFt[i - 1] + deltaMeters * 3.28084;
      sampleCumulativeLossFt[i] = sampleCumulativeLossFt[i - 1];
    } else if (deltaMeters < -RWGPS_MIN_ASCENT_STEP_M) {
      sampleCumulativeGainFt[i] = sampleCumulativeGainFt[i - 1];
      sampleCumulativeLossFt[i] = sampleCumulativeLossFt[i - 1] + Math.abs(deltaMeters) * 3.28084;
    } else {
      sampleCumulativeGainFt[i] = sampleCumulativeGainFt[i - 1];
      sampleCumulativeLossFt[i] = sampleCumulativeLossFt[i - 1];
    }
  }

  const cumulativeGainFtByPoint = new Array(trackPoints.length).fill(0);
  const cumulativeLossFtByPoint = new Array(trackPoints.length).fill(0);
  const sampleCursor = { idx: 1 };
  for (let i = 0; i < cumulativeMilesByPoint.length; i++) {
    const mile = cumulativeMilesByPoint[i];
    cumulativeGainFtByPoint[i] = interpolateSeriesAtMileUnsafeSorted(
      mile,
      sampleMiles,
      sampleCumulativeGainFt,
      sampleCursor
    );
    cumulativeLossFtByPoint[i] = interpolateSeriesAtMileUnsafeSorted(
      mile,
      sampleMiles,
      sampleCumulativeLossFt,
      sampleCursor
    );
  }

  const minEleMeters = Math.min(...smoothedSampleElevationMeters);
  const maxEleMeters = Math.max(...smoothedSampleElevationMeters);
  const profileSamplesMeters = sampleNumericSeries(smoothedSampleElevationMeters, RWGPS_PROFILE_MAX_SAMPLES);

  const engine = {
    totalMiles,
    hasElevation: true,
    cumulativeMilesByPoint,
    cumulativeGainFtByPoint,
    cumulativeLossFtByPoint,
    profileSamplesMeters,
    minEleMeters,
    maxEleMeters
  };
  rwgpsElevationEngineCache.set(trackPoints, engine);
  return engine;
}

function buildTrackCumulativeGainFt(trackPoints) {
  return buildRwgpsElevationEngine(trackPoints).cumulativeGainFtByPoint;
}

function buildTrackCumulativeLossFt(trackPoints) {
  return buildRwgpsElevationEngine(trackPoints).cumulativeLossFtByPoint;
}

function nearestTrackPointAndMile(latlng) {
  if (!gpxTrackPoints.length || !trackCumulativeMiles.length) {
    return null;
  }

  let nearestIndex = 0;
  let bestDistance = Infinity;
  for (let i = 0; i < gpxTrackPoints.length; i++) {
    const point = gpxTrackPoints[i];
    const score = haversineMiles(point, { lat: latlng.lat, lon: latlng.lng });
    if (score < bestDistance) {
      bestDistance = score;
      nearestIndex = i;
    }
  }

  const nearestPoint = gpxTrackPoints[nearestIndex];
  const snappedMile = trackCumulativeMiles[nearestIndex] || 0;
  const straightDistanceMiles = haversineMiles(
    { lat: latlng.lat, lon: latlng.lng },
    { lat: nearestPoint.lat, lon: nearestPoint.lon }
  );
  return {
    index: nearestIndex,
    point: nearestPoint,
    mile: snappedMile,
    straightDistanceMiles
  };
}

function buildEvenStages(trackPoints, stageCount) {
  if (trackPoints.length < 2) return { stages: [], totalMiles: 0 };

  const cumulative = [0];
  for (let i = 1; i < trackPoints.length; i++) {
    cumulative[i] = cumulative[i - 1] + haversineMiles(trackPoints[i - 1], trackPoints[i]);
  }

  const totalMiles = cumulative[cumulative.length - 1];
  const stages = [];

  for (let stage = 1; stage <= stageCount; stage++) {
    const target = (totalMiles * stage) / stageCount;
    let idx = 1;
    while (idx < cumulative.length && cumulative[idx] < target) idx += 1;

    const prevIdx = Math.max(0, idx - 1);
    const nextIdx = Math.min(cumulative.length - 1, idx);
    const point = interpolatePoint(
      trackPoints[prevIdx],
      trackPoints[nextIdx],
      target,
      cumulative[prevIdx],
      cumulative[nextIdx] - cumulative[prevIdx]
    );

    const startMile = ((totalMiles * (stage - 1)) / stageCount).toFixed(1);
    const endMile = target.toFixed(1);

    stages.push({
      stage,
      startMile,
      endMile,
      lat: point.lat,
      lon: point.lon
    });
  }

  return { stages, totalMiles };
}

function pointAtDistance(trackPoints, cumulative, target) {
  if (!trackPoints.length || !cumulative.length) return { lat: 0, lon: 0 };
  if (target <= 0) return { lat: trackPoints[0].lat, lon: trackPoints[0].lon };
  const total = cumulative[cumulative.length - 1];
  if (target >= total) {
    const last = trackPoints[trackPoints.length - 1];
    return { lat: last.lat, lon: last.lon };
  }

  let idx = 1;
  while (idx < cumulative.length && cumulative[idx] < target) idx += 1;
  const prev = Math.max(0, idx - 1);
  const next = Math.min(cumulative.length - 1, idx);
  const span = Math.max(1e-9, cumulative[next] - cumulative[prev]);
  const ratio = Math.max(0, Math.min(1, (target - cumulative[prev]) / span));
  return {
    lat: trackPoints[prev].lat + (trackPoints[next].lat - trackPoints[prev].lat) * ratio,
    lon: trackPoints[prev].lon + (trackPoints[next].lon - trackPoints[prev].lon) * ratio
  };
}

function buildStagesFromPlan(trackPoints, days) {
  if (!trackPoints.length || !trackCumulativeMiles.length || !days.length) return null;
  const totalMiles = trackCumulativeMiles[trackCumulativeMiles.length - 1] || 0;
  if (totalMiles <= 0) return null;

  const stages = [];
  let cumulative = 0;
  for (let i = 0; i < days.length; i++) {
    const miles = Math.max(0, Number(days[i].miles || 0));
    cumulative = Math.max(0, Math.min(totalMiles, cumulative + miles));
    const point = pointAtDistance(trackPoints, trackCumulativeMiles, cumulative);
    stages.push({
      stage: i + 1,
      startMile: (cumulative - miles).toFixed(1),
      endMile: cumulative.toFixed(1),
      lat: point.lat,
      lon: point.lon
    });
  }
  return { stages, totalMiles };
}

function smoothSeries(values, windowSize) {
  if (values.length < 3) return [...values];
  const half = Math.max(1, Math.floor(windowSize / 2));
  return values.map((_, i) => {
    let sum = 0;
    let count = 0;
    for (let j = Math.max(0, i - half); j <= Math.min(values.length - 1, i + half); j++) {
      sum += values[j];
      count += 1;
    }
    return sum / count;
  });
}

function computeSectionElevation(points) {
  if (!points.length) {
    return {
      elevationGainFt: 0,
      minEleFt: 0,
      maxEleFt: 0,
      totalDistanceMi: 0,
      profileSamples: []
    };
  }

  const engine = buildRwgpsElevationEngine(points);
  if (!engine.hasElevation || !engine.cumulativeGainFtByPoint.length) {
    return {
      elevationGainFt: 0,
      minEleFt: 0,
      maxEleFt: 0,
      totalDistanceMi: 0,
      profileSamples: []
    };
  }

  const totalDistance = engine.totalMiles;
  const gainFt = engine.cumulativeGainFtByPoint[engine.cumulativeGainFtByPoint.length - 1] || 0;
  const minEle = engine.minEleMeters;
  const maxEle = engine.maxEleMeters;

  return {
    elevationGainFt: Math.round(gainFt),
    minEleFt: Math.round(minEle * 3.28084),
    maxEleFt: Math.round(maxEle * 3.28084),
    totalDistanceMi: Number(totalDistance.toFixed(1)),
    profileSamples: engine.profileSamplesMeters
  };
}

function renderRouteProfile() {
  const profileSvgEl = routeProfile || document.getElementById("route-profile");
  const profileMetaEl = routeProfileMeta || document.getElementById("route-profile-meta");
  if (!profileSvgEl || !profileMetaEl) return;
  profileMetaEl.textContent = "Rendering elevation profile...";
  if (!gpxTrackPoints.length) {
    profileMetaEl.textContent = "Elevation profile unavailable.";
    routeProfileHoverLineEl = null;
    routeProfileHoverDotEl = null;
    routeProfilePointForMile = null;
    routeProfileBounds = null;
    return;
  }

  if (!stageOptions.length) {
    const stageCount = getRequestedStageCount();
    stageOptions = buildEvenStages(gpxTrackPoints, stageCount).stages;
  }

  const profile = computeSectionElevation(gpxTrackPoints);
  if (!profile.profileSamples.length) {
    profileMetaEl.textContent = "Elevation profile unavailable.";
    return;
  }

  const minEle = Math.min(...profile.profileSamples);
  const maxEle = Math.max(...profile.profileSamples);
  const range = Math.max(maxEle - minEle, 1);
  const left = 60;
  const right = 2340;
  const top = 12;
  const bottom = 120;
  routeProfileBounds = { left, right, top, bottom };
  const sampleMaxIndex = Math.max(profile.profileSamples.length - 1, 1);

  const pointOnProfileForMile = (mile) => {
    const ratio = Math.max(0, Math.min(1, mile / Math.max(profile.totalDistanceMi, 1)));
    const sampleIndexFloat = ratio * sampleMaxIndex;
    const lowerIndex = Math.floor(sampleIndexFloat);
    const upperIndex = Math.min(sampleMaxIndex, lowerIndex + 1);
    const blend = sampleIndexFloat - lowerIndex;
    const lowerEle = profile.profileSamples[lowerIndex];
    const upperEle = profile.profileSamples[upperIndex];
    const ele = lowerEle + (upperEle - lowerEle) * blend;
    const x = left + ratio * (right - left);
    const y = top + ((maxEle - ele) / range) * (bottom - top);
    return { x, y, eleFt: Math.round(ele * 3.28084) };
  };
  routeProfilePointForMile = pointOnProfileForMile;

  const points = profile.profileSamples
    .map((ele, index) => {
      const x = left + (index / (profile.profileSamples.length - 1)) * (right - left);
      const y = top + ((maxEle - ele) / range) * (bottom - top);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const areaPoints = `${left.toFixed(2)},${bottom.toFixed(2)} ${points} ${right.toFixed(2)},${bottom.toFixed(2)}`;

  const resupplyIcons = resupplyPoints
    .map((point) => {
      const stopMile = Number(point?.mile);
      if (!Number.isFinite(stopMile)) return "";
      const chartPoint = pointOnProfileForMile(stopMile);
      const stopName = String(point?.name || "Resupply");
      return (
        `<g class="route-profile-icon route-profile-icon-resupply" data-x="${chartPoint.x.toFixed(2)}" data-y="${chartPoint.y.toFixed(
          2
        )}">` +
        '<text x="0" y="3.6" text-anchor="middle" font-size="8.8">🍔</text>' +
        `<title>${stopName} resupply - Distance ${formatRouteDistanceWithUnits(stopMile)} - Elev ${formatElevationWithUnitFromFeet(
          chartPoint.eleFt
        )}</title>` +
        "</g>"
      );
    })
    .join("");

  const campIcons = stageOptions
    .map((stage) => {
      const endMile = Number(stage?.endMile);
      if (!Number.isFinite(endMile)) return "";
      const chartPoint = pointOnProfileForMile(endMile);
      return (
        `<g class="route-profile-icon route-profile-icon-camp" data-x="${chartPoint.x.toFixed(2)}" data-y="${chartPoint.y.toFixed(2)}">` +
        '<polygon points="-4,5 4,5 0,-5" fill="#1e5cc8" stroke="#123e86" stroke-width="1"></polygon>' +
        `<title>Day ${stage.stage} camp - Distance ${formatRouteDistanceWithUnits(endMile)} - Elev ${formatElevationWithUnitFromFeet(
          chartPoint.eleFt
        )}</title>` +
        "</g>"
      );
    })
    .join("");

  profileSvgEl.innerHTML = [
    '<rect x="0" y="0" width="2400" height="160" fill="#f6f2e8"></rect>',
    '<line x1="60" y1="12" x2="60" y2="120" stroke="#9f9687" stroke-width="1"></line>',
    '<line x1="60" y1="120" x2="2340" y2="120" stroke="#9f9687" stroke-width="1"></line>',
    `<polygon points="${areaPoints}" fill="#d14a4a" opacity="0.22"></polygon>`,
    `<polyline points="${points}" fill="none" stroke="#c62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`,
    resupplyIcons,
    campIcons
  ].join("");

  profileMetaEl.textContent = `Min ${formatElevationWithUnitFromFeet(profile.minEleFt)} • Max ${formatElevationWithUnitFromFeet(
    profile.maxEleFt
  )}`;
  routeProfileDefaultMetaText = profileMetaEl.textContent;

  const hoverLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  hoverLine.setAttribute("x1", "60");
  hoverLine.setAttribute("y1", "12");
  hoverLine.setAttribute("x2", "60");
  hoverLine.setAttribute("y2", "120");
  hoverLine.setAttribute("stroke", "#b03030");
  hoverLine.setAttribute("stroke-width", "1");
  hoverLine.setAttribute("visibility", "hidden");
  profileSvgEl.appendChild(hoverLine);
  routeProfileHoverLineEl = hoverLine;

  const hoverDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  hoverDot.setAttribute("cx", "60");
  hoverDot.setAttribute("cy", "120");
  hoverDot.setAttribute("r", "2.4");
  hoverDot.setAttribute("fill", "#c62828");
  hoverDot.setAttribute("stroke", "#ffffff");
  hoverDot.setAttribute("stroke-width", "0.8");
  hoverDot.setAttribute("visibility", "hidden");
  profileSvgEl.appendChild(hoverDot);
  routeProfileHoverDotEl = hoverDot;

  profileSvgEl.onmousemove = (event) => {
    const ctm = profileSvgEl.getScreenCTM();
    if (!ctm) return;
    const svgPoint = profileSvgEl.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;
    const local = svgPoint.matrixTransform(ctm.inverse());
    const clampedX = Math.max(left, Math.min(right, local.x));
    const ratio = (clampedX - left) / (right - left);
    const mile = ratio * profile.totalDistanceMi;
    syncRouteProfileHoverByMile(mile, true);
  };

  profileSvgEl.onmouseleave = () => {
    clearRouteProfileHover();
  };

  refreshRouteProfileIconAspect();

  if (!applyInitialRouteProfileViewIfNeeded()) {
    applyRouteProfileZoom(true);
  }
}

function syncRouteProfileHoverByMile(mile, updateMeta = false, metaPrefix = "") {
  if (
    !routeProfileHoverLineEl ||
    !routeProfileHoverDotEl ||
    !routeProfilePointForMile ||
    !routeProfileBounds ||
    !trackCumulativeMiles.length
  ) {
    return;
  }

  const total = trackCumulativeMiles[trackCumulativeMiles.length - 1] || 0;
  const clampedMile = Math.max(0, Math.min(total, Number(mile) || 0));
  const chartPoint = routeProfilePointForMile(clampedMile);
  const clampedX = Math.max(routeProfileBounds.left, Math.min(routeProfileBounds.right, chartPoint.x));
  const clampedY = Math.max(routeProfileBounds.top, Math.min(routeProfileBounds.bottom, chartPoint.y));

  routeProfileHoverLineEl.setAttribute("x1", clampedX.toFixed(2));
  routeProfileHoverLineEl.setAttribute("x2", clampedX.toFixed(2));
  routeProfileHoverLineEl.setAttribute("visibility", "visible");
  routeProfileHoverDotEl.setAttribute("cx", clampedX.toFixed(2));
  routeProfileHoverDotEl.setAttribute("cy", clampedY.toFixed(2));
  routeProfileHoverDotEl.setAttribute("visibility", "visible");

  if (updateMeta && routeProfileMeta) {
    const prefix = metaPrefix ? `${metaPrefix} • ` : "";
    routeProfileMeta.textContent = `${prefix}Distance ${formatRouteDistanceWithUnits(clampedMile)} / ${formatRouteDistanceWithUnits(
      total
    )} • Elevation ${formatElevationWithUnitFromFeet(chartPoint.eleFt)}`;
  }
}

function clearRouteProfileHover() {
  if (routeProfileHoverLineEl) routeProfileHoverLineEl.setAttribute("visibility", "hidden");
  if (routeProfileHoverDotEl) routeProfileHoverDotEl.setAttribute("visibility", "hidden");
  if (routeProfileMeta) routeProfileMeta.textContent = routeProfileDefaultMetaText || routeProfileMeta.textContent;
}

function renderRouteProfileFallbackSimple() {
  const profileSvgEl = routeProfile || document.getElementById("route-profile");
  const profileMetaEl = routeProfileMeta || document.getElementById("route-profile-meta");
  if (!profileSvgEl || !profileMetaEl || !gpxTrackPoints.length) return;
  try {
    const withEle = gpxTrackPoints.filter((p) => Number.isFinite(p?.ele));
    if (withEle.length < 2) {
      profileMetaEl.textContent = "Elevation profile unavailable (no elevation data in GPX).";
      return;
    }

    const left = 60;
    const right = 2340;
    const top = 12;
    const bottom = 120;

    const cumulative = buildTrackCumulativeMiles(withEle);
    const totalMiles = cumulative[cumulative.length - 1] || 0;
    if (totalMiles <= 0) {
      profileMetaEl.textContent = "Elevation profile unavailable (distance calc failed).";
      return;
    }

    const eleValues = withEle.map((p) => Number(p.ele));
    const minEle = Math.min(...eleValues);
    const maxEle = Math.max(...eleValues);
    const range = Math.max(1, maxEle - minEle);

    const points = withEle
      .map((p, i) => {
        const x = left + (cumulative[i] / totalMiles) * (right - left);
        const y = top + ((maxEle - p.ele) / range) * (bottom - top);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");
    const areaPoints = `${left.toFixed(2)},${bottom.toFixed(2)} ${points} ${right.toFixed(2)},${bottom.toFixed(2)}`;

    profileSvgEl.innerHTML = [
      '<rect x="0" y="0" width="2400" height="160" fill="#f6f2e8"></rect>',
      '<line x1="60" y1="12" x2="60" y2="120" stroke="#9f9687" stroke-width="1"></line>',
      '<line x1="60" y1="120" x2="2340" y2="120" stroke="#9f9687" stroke-width="1"></line>',
      `<polygon points="${areaPoints}" fill="#d14a4a" opacity="0.22"></polygon>`,
      `<polyline points="${points}" fill="none" stroke="#c62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`
    ].join("");

    profileMetaEl.textContent =
      `Min ${formatElevationWithUnitFromFeet(Math.round(minEle * 3.28084))} • Max ${formatElevationWithUnitFromFeet(
        Math.round(maxEle * 3.28084)
      )}`;
    routeProfileDefaultMetaText = profileMetaEl.textContent;
    routeProfileHoverLineEl = null;
    routeProfileHoverDotEl = null;
  } catch (error) {
    console.error("renderRouteProfileFallbackSimple failed:", error);
    profileMetaEl.textContent = "Elevation profile unavailable (fallback render error).";
  }
}

function startMapRenderWatchdog() {
  if (mapRenderWatchdogTimer) {
    clearInterval(mapRenderWatchdogTimer);
    mapRenderWatchdogTimer = null;
  }

  let attempts = 0;
  mapRenderWatchdogTimer = setInterval(() => {
    attempts += 1;
    const hasTrack = gpxTrackPoints.length >= 2;
    const loadingProfile = Boolean(routeProfileMeta) && /loading|rendering/i.test(String(routeProfileMeta.textContent || ""));
    const markerEmpty = Boolean(markerList) && markerList.children.length === 0;
    const stagesMissing = !stageOptions.length;

    if (hasTrack && (loadingProfile || markerEmpty || stagesMissing)) {
      ensureMapArtifacts();
    }

    const profileReady = !loadingProfile;
    const markersReady = !markerEmpty && stageOptions.length > 0;
    if ((profileReady && markersReady) || attempts > 24) {
      clearInterval(mapRenderWatchdogTimer);
      mapRenderWatchdogTimer = null;
    }
  }, 500);
}

function ensureMapArtifacts() {
  if (!map || !gpxTrackPoints.length) return;
  ensureRouteResupplyDefaults();

  try {
    if (!trackCumulativeMiles.length) {
      trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
    }
    if (!trackCumulativeGainFt.length) {
      trackCumulativeGainFt = buildTrackCumulativeGainFt(gpxTrackPoints);
    }
    if (!trackCumulativeLossFt.length) {
      trackCumulativeLossFt = buildTrackCumulativeLossFt(gpxTrackPoints);
    }
  } catch (error) {
    console.error("ensureMapArtifacts cumulative build failed:", error);
  }

  try {
    const needsStages = !stageOptions.length || !dayMarkers.length;
    if (needsStages && stageLayer) {
      const stageCount = getRequestedStageCount();
      stageOptions = buildEvenStages(gpxTrackPoints, stageCount).stages;
      stageLayer.clearLayers();
      dayMarkers.forEach((marker) => clearMarkerGuide(marker));
      dayMarkers = [];
      stageOptions.forEach((stage, index) => {
        const marker = L.marker([stage.lat, stage.lon], { icon: makeDayIcon(), draggable: true })
          .addTo(stageLayer)
          .bindPopup(`Day ${stage.stage}<br/>${formatStageRangeWithUnits(stage.startMile, stage.endMile)}`);
        marker.on("click", () => {
          if (!plan.length) return;
          setMapPlanSelection({ dayIndex: index });
        });
        attachDragHandlers(marker, "day", index);
        dayMarkers.push(marker);
      });
      applyDragModeToMarkers();
    }
  } catch (error) {
    console.error("ensureMapArtifacts stage rebuild failed:", error);
  }

  try {
    if (resupplyLayer && (!resupplyMarkers.length || resupplyLayer.getLayers().length === 0)) {
      renderResupplyMarkers();
      applyDragModeToMarkers();
    }
  } catch (error) {
    console.error("ensureMapArtifacts resupply rebuild failed:", error);
  }

  try {
    if (!routeSections.length) {
      routeSections = buildResupplySections(gpxTrackPoints);
    }
    drawSectionOverlays();
  } catch (error) {
    console.error("ensureMapArtifacts section rebuild failed:", error);
  }

  try {
    const profileNeedsRender =
      !routeProfile ||
      !routeProfile.children ||
      routeProfile.children.length === 0 ||
      (routeProfileMeta && /loading|rendering/i.test(String(routeProfileMeta.textContent || "")));
    if (profileNeedsRender) {
      renderRouteProfile();
    }
  } catch (error) {
    console.error("ensureMapArtifacts full profile render failed:", error);
  }

  try {
    const profileLooksEmpty =
      !routeProfile ||
      !routeProfile.children ||
      routeProfile.children.length === 0 ||
      (routeProfileMeta && /loading|rendering/i.test(String(routeProfileMeta.textContent || "")));
    if (profileLooksEmpty) {
      renderRouteProfileFallbackSimple();
    }
  } catch (error) {
    console.error("ensureMapArtifacts fallback profile render failed:", error);
  }

  try {
    if (markerList && markerList.children.length === 0) {
      renderMarkerList();
    }
    if (markerList && markerList.children.length === 0) {
      hardRebuildMapUi();
    }
    if (markerList && markerList.children.length === 0) {
      markerList.innerHTML = '<li><p class="empty-note">Still rebuilding markers. Click Plan, then Map once.</p></li>';
    }
  } catch (error) {
    console.error("ensureMapArtifacts marker list render failed:", error);
  }

  try {
    const summary =
      `GPX ${gpxTrackPoints.length} pts • Days ${stageOptions.length} (${dayMarkers.length} icons) • ` +
      `Resupplies ${resupplyPoints.length} (${resupplyMarkers.length} icons) • List ${markerList ? markerList.children.length : 0}`;
    if (mapSubhead) {
      const baseText = mapboxFallbackActive
        ? "Mapbox tiles failed to load here, so this view switched to OpenStreetMap automatically."
        : "Loaded from your GPX file with evenly spaced days.";
      mapSubhead.textContent = `${baseText} ${summary}`;
    }
  } catch (error) {
    console.error("ensureMapArtifacts summary render failed:", error);
  }
}

function showMapHoverMarker(point) {
  if (!map || !point) return;
  const latlng = [point.lat, point.lon];
  if (!mapHoverMarker) {
    mapHoverMarker = L.circleMarker(latlng, {
      pane: "hoverMarkerPane",
      radius: 5,
      color: "#1f2933",
      weight: 2,
      fillColor: "#ffffff",
      fillOpacity: 0.95,
      opacity: 1,
      interactive: false
    }).addTo(map);
  } else {
    mapHoverMarker.setLatLng(latlng);
    if (!map.hasLayer(mapHoverMarker)) mapHoverMarker.addTo(map);
  }
  mapHoverMarker.bringToFront();
}

function hideMapHoverMarker() {
  if (!map || !mapHoverMarker) return;
  if (map.hasLayer(mapHoverMarker)) map.removeLayer(mapHoverMarker);
}

function ensureMapHoverSnapshotEl() {
  if (mapHoverSnapshotEl) return mapHoverSnapshotEl;
  const mapEl = document.getElementById("route-map");
  if (!mapEl) return null;
  const box = document.createElement("div");
  box.className = "map-hover-snapshot";
  box.style.display = "none";
  mapEl.appendChild(box);
  mapHoverSnapshotEl = box;
  return mapHoverSnapshotEl;
}

function showMapHoverSnapshot(content, latlng) {
  const box = ensureMapHoverSnapshotEl();
  const mapEl = document.getElementById("route-map");
  if (!box || !mapEl || !map || !latlng) return;
  box.innerHTML = content;
  box.style.display = "block";

  const p = map.latLngToContainerPoint([latlng.lat, latlng.lon]);
  const x = Math.max(8, Math.min(mapEl.clientWidth - 248, p.x + 12));
  const y = Math.max(8, Math.min(mapEl.clientHeight - 120, p.y + 12));
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

function hideMapHoverSnapshot() {
  if (!mapHoverSnapshotEl) return;
  mapHoverSnapshotEl.style.display = "none";
}

function refreshRouteProfileIconAspect() {
  if (!routeProfile) return;
  const icons = routeProfile.querySelectorAll(".route-profile-icon");
  if (!icons.length) return;
  const viewBox = routeProfile.viewBox?.baseVal;
  const baseWidth = Number(viewBox?.width || ROUTE_PROFILE_BASE_WIDTH);
  const baseHeight = Number(viewBox?.height || 160);
  const scaleX = baseWidth > 0 ? routeProfile.clientWidth / baseWidth : 1;
  const scaleY = baseHeight > 0 ? routeProfile.clientHeight / baseHeight : 1;
  const compensateX = scaleX > 0 ? scaleY / scaleX : 1;

  icons.forEach((icon) => {
    const x = Number(icon.getAttribute("data-x") || 0);
    const y = Number(icon.getAttribute("data-y") || 0);
    icon.setAttribute(
      "transform",
      `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${compensateX.toFixed(6)} 1)`
    );
  });
}

function getRouteProfileFitZoom() {
  const wrapWidth = Number(routeProfileScrollWrap?.clientWidth || 0);
  const fitZoomRaw = wrapWidth > 0 ? wrapWidth / ROUTE_PROFILE_BASE_WIDTH : 1;
  return Math.max(0.25, Math.min(6, fitZoomRaw));
}

function applyRouteProfileZoom(preserveScroll) {
  if (!routeProfile || !routeProfileScrollWrap) return;
  const fitZoom = getRouteProfileFitZoom();
  let zoom = Number(routeProfileZoom?.value || fitZoom);
  if (!Number.isFinite(zoom)) zoom = fitZoom;
  zoom = Math.max(fitZoom, Math.min(6, zoom));
  const previousMax = Math.max(0, routeProfileScrollWrap.scrollWidth - routeProfileScrollWrap.clientWidth);
  const previousRatio = previousMax > 0 ? routeProfileScrollWrap.scrollLeft / previousMax : 0;

  routeProfile.style.width = `${ROUTE_PROFILE_BASE_WIDTH * zoom}px`;
  if (routeProfileZoom) {
    routeProfileZoom.min = fitZoom.toFixed(2);
    routeProfileZoom.value = zoom.toFixed(2);
  }
  refreshRouteProfileIconAspect();

  const nextMax = Math.max(0, routeProfileScrollWrap.scrollWidth - routeProfileScrollWrap.clientWidth);
  const nextScroll = preserveScroll ? previousRatio * nextMax : Math.min(routeProfileScrollWrap.scrollLeft, nextMax);
  routeProfileScrollWrap.scrollLeft = nextScroll;

  if (routeProfileScroll) {
    routeProfileScroll.max = String(nextMax);
    routeProfileScroll.value = String(routeProfileScrollWrap.scrollLeft);
    routeProfileScroll.disabled = nextMax <= 0;
  }
  if (routeProfileZoomLabel) {
    routeProfileZoomLabel.textContent = `Zoom ${zoom.toFixed(1)}x`;
  }
}

function applyInitialRouteProfileViewIfNeeded() {
  if (routeProfileInitializedView) return false;
  const fitZoom = getRouteProfileFitZoom();
  if (routeProfileZoom) {
    routeProfileZoom.value = fitZoom.toFixed(2);
  }
  applyRouteProfileZoom(false);
  routeProfileInitializedView = true;
  return true;
}

function setupRouteProfileScroll() {
  if (!routeProfileScroll || !routeProfileScrollWrap) return;
  routeProfileScroll.addEventListener("input", () => {
    routeProfileScrollWrap.scrollLeft = Number(routeProfileScroll.value || 0);
  });
  routeProfileScrollWrap.addEventListener("scroll", () => {
    routeProfileScroll.value = String(routeProfileScrollWrap.scrollLeft);
  });
  if (routeProfileZoom) {
    routeProfileZoom.addEventListener("input", () => {
      applyRouteProfileZoom(true);
    });
  }
}

function nearestTrackIndexFrom(trackPoints, targetPoint, startIndex) {
  let bestIndex = startIndex;
  let bestScore = Infinity;

  for (let i = startIndex; i < trackPoints.length; i++) {
    const dLat = trackPoints[i].lat - targetPoint.lat;
    const dLon = trackPoints[i].lon - targetPoint.lon;
    const score = dLat * dLat + dLon * dLon;
    if (score < bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }

  return bestIndex;
}

function buildResupplySections(trackPoints) {
  if (!trackPoints.length || resupplyPoints.length < 2) return [];
  const hasGlobalCumulative = trackPoints === gpxTrackPoints && trackCumulativeMiles.length === trackPoints.length;

  const sections = [];
  let cursor = 0;

  for (let i = 0; i < resupplyPoints.length - 1; i++) {
    const start = resupplyPoints[i];
    const end = resupplyPoints[i + 1];
    const startIndex = nearestTrackIndexFrom(trackPoints, start, cursor);
    const endIndex = nearestTrackIndexFrom(trackPoints, end, startIndex);
    const startMile = start.mile.toFixed(0);
    const endMile = end.mile.toFixed(0);
    const points = trackPoints.slice(startIndex, endIndex + 1);

    if (points.length < 2) continue;

    const elevation = computeSectionElevation(points);
    const cumulativeMiles = [0];
    const absoluteMiles = [hasGlobalCumulative ? trackCumulativeMiles[startIndex] || 0 : 0];
    for (let p = 1; p < points.length; p++) {
      cumulativeMiles[p] = cumulativeMiles[p - 1] + haversineMiles(points[p - 1], points[p]);
      if (hasGlobalCumulative) {
        absoluteMiles[p] = trackCumulativeMiles[startIndex + p] || 0;
      } else {
        absoluteMiles[p] = absoluteMiles[p - 1] + haversineMiles(points[p - 1], points[p]);
      }
    }
    const sectionDistanceMi = cumulativeMiles[cumulativeMiles.length - 1] || 0;
    const startTrackMile = absoluteMiles[0] || 0;
    const endTrackMile = absoluteMiles[absoluteMiles.length - 1] || startTrackMile;

    sections.push({
      name: `${start.name} to ${end.name}`,
      startMile,
      endMile,
      elevationGainFt: elevation.elevationGainFt,
      minEleFt: elevation.minEleFt,
      maxEleFt: elevation.maxEleFt,
      totalDistanceMi: elevation.totalDistanceMi,
      sectionDistanceMi,
      cumulativeMiles,
      absoluteMiles,
      startTrackMile,
      endTrackMile,
      profileSamples: elevation.profileSamples,
      points
    });
    cursor = endIndex;
  }

  return sections;
}

function nearestSectionPoint(section, latlng) {
  let bestIndex = 0;
  let bestScore = Infinity;
  for (let i = 0; i < section.points.length; i++) {
    const score = haversineMiles(section.points[i], { lat: latlng.lat, lon: latlng.lng });
    if (score < bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }
  return bestIndex;
}

function nearestIndexByDistance(cumulativeMiles, target) {
  if (!cumulativeMiles.length) return 0;
  let lo = 0;
  let hi = cumulativeMiles.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (cumulativeMiles[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  if (lo === 0) return 0;
  const prev = lo - 1;
  return Math.abs(cumulativeMiles[lo] - target) < Math.abs(cumulativeMiles[prev] - target) ? lo : prev;
}

function nearestValidElevation(points, index) {
  if (!points.length) return null;
  if (points[index] && points[index].ele !== null) return points[index].ele;
  for (let offset = 1; offset < points.length; offset++) {
    const left = index - offset;
    const right = index + offset;
    if (left >= 0 && points[left].ele !== null) return points[left].ele;
    if (right < points.length && points[right].ele !== null) return points[right].ele;
  }
  return null;
}

function renderMapSectionComments(sectionName) {
  selectedSectionName = sectionName || "";

  if (!mapSectionTitle || !mapSectionComments || !mapSectionElevation || !mapSectionProfile || !mapSectionProfileMeta) {
    return;
  }

  if (selectedSectionName && commentSectionSelect) {
    const hasOption = Array.from(commentSectionSelect.options).some((option) => option.value === selectedSectionName);
    if (hasOption) commentSectionSelect.value = selectedSectionName;
  }

  mapSectionTitle.textContent = selectedSectionName || "Click a route section";
  mapSectionElevation.textContent = "Elevation: n/a";
  mapSectionProfile.innerHTML =
    [
      '<rect x="0" y="0" width="120" height="52" fill="#f6f2e8"></rect>',
      '<line x1="12" y1="6" x2="12" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
      '<line x1="12" y1="42" x2="112" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
      `<text x="14" y="49" font-size="3.5" fill="#5f695f">distance (${unitDistanceSuffix()})</text>`,
      `<text x="1.5" y="8" font-size="3.5" fill="#5f695f">elev (${unitElevationSuffix()})</text>`
    ].join("");
  mapSectionProfileMeta.textContent = "Select a section to see elevation profile.";
  mapSectionComments.innerHTML = "";
  mapSectionProfile.onmousemove = null;
  mapSectionProfile.onmouseleave = null;

  if (!selectedSectionName) {
    mapSectionComments.innerHTML =
      '<p class="empty-note">Tap a section between major resupplies to view comments.</p>';
    return;
  }

  const sectionInfo = routeSections.find((section) => section.name === selectedSectionName);
  if (sectionInfo) {
    mapSectionElevation.textContent = `Elevation Gain: ${formatElevationWithUnitFromFeet(sectionInfo.elevationGainFt)}`;
    if (sectionInfo.profileSamples.length > 1) {
      const minEle = Math.min(...sectionInfo.profileSamples);
      const maxEle = Math.max(...sectionInfo.profileSamples);
      const range = Math.max(maxEle - minEle, 1);
      const left = 12;
      const right = 112;
      const top = 6;
      const bottom = 42;
      const points = sectionInfo.profileSamples
        .map((ele, index) => {
          const x = left + (index / (sectionInfo.profileSamples.length - 1)) * (right - left);
          const y = top + ((maxEle - ele) / range) * (bottom - top);
          return `${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ");

      const midEleFt = Math.round(((sectionInfo.minEleFt + sectionInfo.maxEleFt) / 2) / 100) * 100;
      const midTickY = top + (bottom - top) / 2;
      const halfDistance = formatDistanceValueFromMiles(sectionInfo.totalDistanceMi / 2);
      const totalDistance = formatDistanceValueFromMiles(sectionInfo.totalDistanceMi);
      const maxEleText = formatElevationValueFromFeet(sectionInfo.maxEleFt);
      const midEleText = formatElevationValueFromFeet(midEleFt);
      const minEleText = formatElevationValueFromFeet(sectionInfo.minEleFt);

      mapSectionProfile.innerHTML = [
        '<rect x="0" y="0" width="120" height="52" fill="#f6f2e8"></rect>',
        '<line x1="12" y1="6" x2="12" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
        '<line x1="12" y1="42" x2="112" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
        `<line x1="12" y1="${midTickY}" x2="112" y2="${midTickY}" stroke="#e2d8c8" stroke-width="0.5"></line>`,
        `<polyline points="${points}" fill="none" stroke="#c62828" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></polyline>`,
        `<text x="14" y="49" font-size="3.5" fill="#5f695f">0</text>`,
        `<text x="59" y="49" font-size="3.5" fill="#5f695f">${halfDistance}</text>`,
        `<text x="104" y="49" font-size="3.5" fill="#5f695f">${totalDistance}</text>`,
        `<text x="1.2" y="9" font-size="3.2" fill="#5f695f">${maxEleText}</text>`,
        `<text x="1.2" y="${(midTickY + 1.5).toFixed(2)}" font-size="3.2" fill="#5f695f">${midEleText}</text>`,
        `<text x="1.2" y="42" font-size="3.2" fill="#5f695f">${minEleText}</text>`
      ].join("");
      mapSectionProfileMeta.textContent = `Min ${formatElevationWithUnitFromFeet(sectionInfo.minEleFt)} • Max ${formatElevationWithUnitFromFeet(
        sectionInfo.maxEleFt
      )}`;

      const hoverLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      hoverLine.setAttribute("x1", "12");
      hoverLine.setAttribute("y1", "6");
      hoverLine.setAttribute("x2", "12");
      hoverLine.setAttribute("y2", "42");
      hoverLine.setAttribute("stroke", "#b03030");
      hoverLine.setAttribute("stroke-width", "0.7");
      hoverLine.setAttribute("visibility", "hidden");
      mapSectionProfile.appendChild(hoverLine);

      const hoverDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      hoverDot.setAttribute("cx", "12");
      hoverDot.setAttribute("cy", "42");
      hoverDot.setAttribute("r", "1.5");
      hoverDot.setAttribute("fill", "#c62828");
      hoverDot.setAttribute("stroke", "#ffffff");
      hoverDot.setAttribute("stroke-width", "0.45");
      hoverDot.setAttribute("visibility", "hidden");
      mapSectionProfile.appendChild(hoverDot);

      mapSectionProfile.onmousemove = (event) => {
        const rect = mapSectionProfile.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const svgX = ((event.clientX - rect.left) / rect.width) * 120;
        const clampedX = Math.max(left, Math.min(right, svgX));
        const ratio = (clampedX - left) / (right - left);
        const targetDist = ratio * sectionInfo.sectionDistanceMi;
        const nearestIndex = nearestIndexByDistance(sectionInfo.cumulativeMiles, targetDist);
        const nearestEleM = nearestValidElevation(sectionInfo.points, nearestIndex);
        if (nearestEleM === null) return;

        const nearestEleFt = Math.round(nearestEleM * 3.28084);
        const y = top + ((maxEle - nearestEleM) / range) * (bottom - top);
        const clampedY = Math.max(top, Math.min(bottom, y));
        hoverLine.setAttribute("x1", clampedX.toFixed(2));
        hoverLine.setAttribute("x2", clampedX.toFixed(2));
        hoverLine.setAttribute("visibility", "visible");
        hoverDot.setAttribute("cx", clampedX.toFixed(2));
        hoverDot.setAttribute("cy", clampedY.toFixed(2));
        hoverDot.setAttribute("visibility", "visible");
        mapSectionProfileMeta.textContent = `Distance ${formatRouteDistanceWithUnits(targetDist)} / ${formatRouteDistanceWithUnits(
          sectionInfo.sectionDistanceMi
        )} • Elevation ${formatElevationWithUnitFromFeet(nearestEleFt)}`;
      };

      mapSectionProfile.onmouseleave = () => {
        hoverLine.setAttribute("visibility", "hidden");
        hoverDot.setAttribute("visibility", "hidden");
        mapSectionProfileMeta.textContent = `Min ${formatElevationWithUnitFromFeet(sectionInfo.minEleFt)} • Max ${formatElevationWithUnitFromFeet(
          sectionInfo.maxEleFt
        )}`;
      };
    } else {
      mapSectionProfileMeta.textContent = "Elevation profile unavailable for this section.";
    }
  }

  const sectionComments = comments
    .filter((comment) => comment.section === selectedSectionName)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!sectionComments.length) {
    mapSectionComments.innerHTML = '<p class="empty-note">No comments yet for this section.</p>';
    return;
  }

  sectionComments.slice(0, 8).forEach((comment) => {
    const item = document.createElement("article");
    item.className = "map-comment-item";
    const meta = document.createElement("p");
    meta.className = "map-comment-meta";
    meta.textContent = `${comment.name} • ${niceDate(new Date(comment.createdAt))}`;
    const body = document.createElement("p");
    body.className = "map-comment-text";
    body.textContent = comment.text;
    item.appendChild(meta);
    item.appendChild(body);

    if (comment.image) {
      const image = document.createElement("img");
      image.className = "map-comment-image";
      image.alt = "Section comment image";
      image.src = comment.image;
      item.appendChild(image);
    }

    mapSectionComments.appendChild(item);
  });
}

function drawSectionOverlays() {
  if (!sectionLayer) return;

  sectionLayer.clearLayers();
  routeSections.forEach((section) => {
    const sectionLine = L.polyline(
      section.points.map((point) => [point.lat, point.lon]),
      {
        pane: "sectionPane",
        color: selectedSectionName === section.name ? "#eb5e28" : "#2f7a62",
        weight: selectedSectionName === section.name ? 7 : 4,
        opacity: selectedSectionName === section.name ? 0.8 : 0.28
      }
    )
      .addTo(sectionLayer);

    sectionLine
      .bindTooltip(section.name, { sticky: true })
      .on("mousemove", (event) => {
        const nearestIndex = nearestSectionPoint(section, event.latlng);
        const nearestPoint = section.points[nearestIndex];
        const fromBanff = section.absoluteMiles?.[nearestIndex] ?? section.startTrackMile ?? 0;
        const sectionMile = fromBanff - (section.startTrackMile ?? 0);
        showMapHoverMarker(nearestPoint);
        syncRouteProfileHoverByMile(fromBanff, true, section.name);
        const elevText = `Elevation: ${formatMapElevationFromMeters(nearestPoint.ele)}`;
        const content =
          `${section.name}<br/>${elevText}<br/>From Banff: ${formatRouteDistanceWithUnits(fromBanff)}` +
          `<br/>Section: ${formatRouteDistanceWithUnits(sectionMile)} / ${formatRouteDistanceWithUnits(section.sectionDistanceMi)}`;
        sectionLine.setTooltipContent(content);
        showMapHoverSnapshot(
          `<strong>${section.name}</strong>` +
            `<div>${elevText}</div>` +
            `<div>From Banff: ${formatRouteDistanceWithUnits(fromBanff)}</div>` +
            `<div>Section: ${formatRouteDistanceWithUnits(sectionMile)} / ${formatRouteDistanceWithUnits(
              section.sectionDistanceMi
            )}</div>`,
          nearestPoint
        );
      })
      .on("mouseout", () => {
        hideMapHoverMarker();
        hideMapHoverSnapshot();
        clearRouteProfileHover();
      })
      .on("click", () => {
        renderMapSectionComments(section.name);
        drawSectionOverlays();
      });
  });

  if (routeLineHalo) routeLineHalo.bringToFront();
  if (routeLine) routeLine.bringToFront();
}

function setupCommentSections() {
  commentSectionSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose a route section";
  placeholder.selected = true;
  placeholder.disabled = true;
  commentSectionSelect.appendChild(placeholder);

  for (let i = 0; i < resupplyPoints.length - 1; i++) {
    const start = resupplyPoints[i];
    const end = resupplyPoints[i + 1];
    const option = document.createElement("option");
    option.value = `${start.name} to ${end.name}`;
    option.textContent = option.value;
    commentSectionSelect.appendChild(option);
  }

  const hasSelected = Array.from(commentSectionSelect.options).some(
    (option) => option.value === selectedSectionName
  );
  if (!hasSelected) selectedSectionName = "";
}

function makeResupplyIcon() {
  return L.divIcon({
    className: "map-icon map-icon-food",
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    html: '<span aria-label="Resupply">🍔</span>'
  });
}

function makeDayIcon() {
  return L.divIcon({
    className: "map-icon",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    html:
      '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M4 18l8-12 8 12H4z" fill="#1e5cc8" stroke="#123e86" stroke-width="1"/>' +
      '<path d="M10 18v-4h4v4" fill="#fffefb" stroke="#123e86" stroke-width="1"/>' +
      "</svg>"
  });
}

function setDragButtonState() {
  if (!dragModeBtn) return;
  dragModeBtn.textContent = dragModeEnabled ? "Drag Mode: On" : "Drag Mode: Off";
  dragModeBtn.classList.toggle("btn-primary", dragModeEnabled);
}

function setMarkerDragState(marker) {
  if (!marker || !marker.dragging) return;
  if (dragModeEnabled) marker.dragging.enable();
  else marker.dragging.disable();
}

const OFF_ROUTE_DRAG_THRESHOLD_MILES = 0.5;

function upsertMarkerGuide(marker, fromLatLng, toPoint) {
  if (!marker || !map || !fromLatLng || !toPoint) return;
  const guideLatLngs = [
    [fromLatLng.lat, fromLatLng.lng],
    [toPoint.lat, toPoint.lon]
  ];
  if (!marker._dragGuide) {
    marker._dragGuide = L.polyline(guideLatLngs, {
      color: "#c62828",
      weight: 2,
      dashArray: "4 4",
      opacity: 0.85
    }).addTo(map);
    return;
  }
  marker._dragGuide.setLatLngs(guideLatLngs);
}

function clearMarkerGuide(marker) {
  if (marker && marker._dragGuide && map && map.hasLayer(marker._dragGuide)) {
    map.removeLayer(marker._dragGuide);
  }
  if (marker) marker._dragGuide = null;
}

function attachDragHandlers(marker, type, index) {
  if (!marker) return;
  marker.on("drag", () => {
    const nearest = nearestTrackPointAndMile(marker.getLatLng());
    if (!nearest || !map) return;
    const latlng = marker.getLatLng();
    upsertMarkerGuide(marker, latlng, nearest.point);
  });

  marker.on("dragend", () => {
    const nearest = nearestTrackPointAndMile(marker.getLatLng());
    if (!nearest) return;
    const droppedLatLng = marker.getLatLng();
    const isOffRoute = nearest.straightDistanceMiles > OFF_ROUTE_DRAG_THRESHOLD_MILES;

    if (isOffRoute) {
      upsertMarkerGuide(marker, droppedLatLng, nearest.point);
    } else {
      marker.setLatLng([nearest.point.lat, nearest.point.lon]);
      clearMarkerGuide(marker);
    }

    if (type === "day" && stageOptions[index]) {
      stageOptions[index].lat = isOffRoute ? droppedLatLng.lat : nearest.point.lat;
      stageOptions[index].lon = isOffRoute ? droppedLatLng.lng : nearest.point.lon;
      stageOptions[index].endMile = nearest.mile.toFixed(1);
      const prevEnd = index === 0 ? 0 : Number(stageOptions[index - 1].endMile || 0);
      stageOptions[index].startMile = prevEnd.toFixed(1);
      if (stageOptions[index + 1]) {
        stageOptions[index + 1].startMile = stageOptions[index].endMile;
      }
      marker.bindPopup(
        `Day ${stageOptions[index].stage}<br/>${formatStageRangeWithUnits(stageOptions[index].startMile, stageOptions[index].endMile)}`
      );
      syncPlanMilesFromStageOptions();
    }

    if (type === "resupply" && resupplyPoints[index]) {
      resupplyPoints[index].lat = isOffRoute ? droppedLatLng.lat : nearest.point.lat;
      resupplyPoints[index].lon = isOffRoute ? droppedLatLng.lng : nearest.point.lon;
      resupplyPoints[index].mile = Number(nearest.mile.toFixed(1));
      marker.bindPopup(
        `<strong>${resupplyPoints[index].name}</strong><br/>Distance ${formatRouteDistanceWithUnits(
          resupplyPoints[index].mile
        )}<br/>${resupplyPoints[index].resupply}`
      );
      saveCustomResupplyStops();
      routeSections = buildResupplySections(gpxTrackPoints);
      setupCommentSections();
      drawSectionOverlays();
      renderMapSectionComments(selectedSectionName);
    }

    renderRouteProfile();
    renderMarkerList();
  });
}

function renderMarkerList() {
  if (!markerList) return;
  ensureRouteResupplyDefaults();
  if (!stageOptions.length && gpxTrackPoints.length) {
    const stageCount = getRequestedStageCount();
    stageOptions = buildEvenStages(gpxTrackPoints, stageCount).stages;
  }
  markerList.innerHTML = "";

  stageOptions.forEach((day, idx) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Day ${day.stage}</strong><p class="marker-mile">${formatStageRangeWithUnits(day.startMile, day.endMile)}</p>`;
    item.addEventListener("click", () => {
      if (!map) return;
      const marker = dayMarkers[idx];
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.55 });
      marker.openPopup();
      setMapPlanSelection({ dayIndex: idx });
    });
    markerList.appendChild(item);
  });

  resupplyPoints.forEach((point, idx) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${point.name}</strong><p class="marker-mile">Distance ${formatRouteDistanceWithUnits(
      point.mile
    )}: ${point.resupply}</p>`;
    item.addEventListener("click", () => {
      if (!map) return;
      const marker = resupplyMarkers[idx];
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.55 });
      marker.openPopup();
      if (plan.length) {
        const assignments = resupplyDayAssignments(plan);
        const dayIndex = findDayIndexForStop(assignments, idx);
        if (dayIndex >= 0) setMapPlanSelection({ dayIndex, stopIndex: idx });
      }
    });
    markerList.appendChild(item);
  });

  if (markerList.children.length === 0) {
    const item = document.createElement("li");
    item.innerHTML = '<p class="empty-note">No day/resupply markers built yet. Rebuilding now.</p>';
    markerList.appendChild(item);
  }
}

function syncPlanMilesFromStageOptions() {
  if (!plan.length || !stageOptions.length || plan.length !== stageOptions.length) return;
  syncingMapAndPlan = true;
  for (let i = 0; i < stageOptions.length; i++) {
    const start = Number(stageOptions[i].startMile || 0);
    const end = Number(stageOptions[i].endMile || 0);
    plan[i] = {
      ...plan[i],
      miles: Number(Math.max(0, end - start).toFixed(1))
    };
  }
  recomputeDerivedFields();
  const config = parseForm();
  if (config) renderMetrics(config, plan);
  renderPlan(plan);
  persistPlan();
  syncingMapAndPlan = false;
}

function applyDragModeToMarkers() {
  dayMarkers.forEach((marker) => setMarkerDragState(marker));
  resupplyMarkers.forEach((marker) => setMarkerDragState(marker));
  setDragButtonState();
}

function applyTrackToMap(trackPoints, options = {}) {
  if (!map || !trackPoints.length) return;
  const { fitBounds = true, rebuildPlan = false } = options;
  setMapPlanSelection(null);

  gpxTrackPoints = trackPoints;
  trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
  trackCumulativeGainFt = buildTrackCumulativeGainFt(gpxTrackPoints);
  trackCumulativeLossFt = buildTrackCumulativeLossFt(gpxTrackPoints);
  activeRouteGpxDistanceMiles = Number((trackCumulativeMiles[trackCumulativeMiles.length - 1] || 0).toFixed(1));

  // Keep profile source stable: render once from GPX pipeline and only fallback on failure.

  if (routeLine && map.hasLayer(routeLine)) map.removeLayer(routeLine);
  if (routeHoverLine && map.hasLayer(routeHoverLine)) map.removeLayer(routeHoverLine);
  if (routeLineHalo && map.hasLayer(routeLineHalo)) map.removeLayer(routeLineHalo);
  hideMapHoverMarker();
  if (stageLayer) stageLayer.clearLayers();
  if (resupplyLayer) resupplyLayer.clearLayers();
  if (sectionLayer) sectionLayer.clearLayers();
  if (dragGuideLayer) dragGuideLayer.clearLayers();
  dayMarkers = [];
  resupplyMarkers = [];

  const displayPoints = getRouteDrawPoints(gpxTrackPoints);
  const hoverPoints = getHoverDrawPoints(gpxTrackPoints);
  const coords = displayPoints.map((point) => [point.lat, point.lon]);
  const hoverCoords = hoverPoints.map((point) => [point.lat, point.lon]);
  routeLineHalo = L.polyline(coords, {
    pane: "routePane",
    color: "#fffefb",
    weight: 8,
    opacity: 0.98,
    interactive: false,
    smoothFactor: 0,
    noClip: true
  }).addTo(map);
  routeLine = L.polyline(coords, {
    pane: "routePane",
    color: "#c62828",
    weight: 4,
    opacity: 1,
    interactive: false,
    smoothFactor: 0,
    noClip: true
  }).addTo(map);

  routeHoverLine = L.polyline(hoverCoords, {
    pane: "routeHoverPane",
    color: "#000000",
    weight: 36,
    opacity: 0,
    interactive: true,
    smoothFactor: 0.05,
    noClip: true
  }).addTo(map);

  routeHoverLine.on("mousemove", (event) => {
    const nearest = nearestTrackPointAndMile(event.latlng);
    if (!nearest) return;
    showMapHoverMarker(nearest.point);
    syncRouteProfileHoverByMile(nearest.mile, true, "Route");
    const elevText = nearest.point.ele === null ? "unavailable" : formatMapElevationFromMeters(nearest.point.ele);
    const total = trackCumulativeMiles[trackCumulativeMiles.length - 1] || 0;
    showMapHoverSnapshot(
      `<strong>Route Position</strong>` +
        `<div>Elevation: ${elevText}</div>` +
        `<div>From Banff: ${formatRouteDistanceWithUnits(nearest.mile)}</div>` +
        `<div>Route Total: ${formatRouteDistanceWithUnits(total)}</div>`,
      nearest.point
    );
  });
  routeHoverLine.on("mouseout", () => {
    hideMapHoverMarker();
    hideMapHoverSnapshot();
    clearRouteProfileHover();
  });

  routeLineHalo.bringToFront();
  routeLine.bringToFront();

  if (activeRouteGpxDistanceMiles > 0) {
    setRouteDistanceInputMiles(activeRouteGpxDistanceMiles);
  }

  try {
    renderResupplyMarkers();
  } catch (error) {
    console.error("renderResupplyMarkers failed:", error);
  }
  try {
    routeSections = buildResupplySections(gpxTrackPoints);
  } catch (error) {
    console.error("buildResupplySections failed:", error);
    routeSections = [];
  }
  try {
    renderRouteProfile();
  } catch (error) {
    console.error("renderRouteProfile failed:", error);
    if (routeProfileMeta) routeProfileMeta.textContent = "Elevation profile unavailable (render error).";
    renderRouteProfileFallbackSimple();
  }
  try {
    drawSectionOverlays();
  } catch (error) {
    console.error("drawSectionOverlays failed:", error);
  }
  try {
    renderMapSectionComments("");
  } catch (error) {
    console.error("renderMapSectionComments failed:", error);
  }

  if (fitBounds) {
    try {
      const bounds = routeLine.getBounds();
      if (bounds && bounds.isValid && bounds.isValid()) {
        map.fitBounds(bounds, { padding: [30, 30] });
      }
    } catch (error) {
      const first = coords[0];
      if (first && Number.isFinite(first[0]) && Number.isFinite(first[1])) {
        map.setView(first, 6);
      }
    }
  }

  if (rebuildPlan) {
    const config = parseForm();
    if (config) {
      plan = buildPlan(config);
      renderMetrics(config, plan);
      renderPlan(plan);
      persistPlan();
    }
  }

  try {
    updateStagesFromInput();
  } catch (error) {
    console.error("updateStagesFromInput failed:", error);
  }

  // Run a post-draw integrity pass, but do not overwrite a valid profile render.
  setTimeout(() => {
    ensureMapArtifacts();
  }, 180);
  startMapRenderWatchdog();
  if (plan.length) {
    recomputeDerivedFields();
    const config = parseForm();
    if (config) renderMetrics(config, plan);
    renderPlan(plan);
    persistPlan();
  }
  applyDragModeToMarkers();
}

async function initMap() {
  const mapElement = document.getElementById("route-map");
  if (!mapElement || typeof L === "undefined") return;
  ensureMapPlanPanel();
  if (isCustomRouteActive() && customUploadedTrackPoints.length < 2) {
    const customSnapshot = loadLocalCustomRouteSnapshot(activeRouteId());
    if (customSnapshot && hasValidCustomRideDataPayload(customSnapshot)) {
      applyCustomRideDataPayload(customSnapshot.customRideData);
      if (!plan.length && customSnapshot.config) {
        applyPlannerConfig(customSnapshot.config);
        enforceRouteDistanceBaseline();
        applyPlanArray(customSnapshot.plan);
        applyCommentsArray(customSnapshot.comments);
      }
    }
  }

  map = L.map("route-map", {
    zoomControl: true,
    minZoom: 4,
    maxZoom: 13
  });
  map.createPane("sectionPane");
  map.getPane("sectionPane").style.zIndex = "430";
  map.createPane("routePane");
  map.getPane("routePane").style.zIndex = "450";
  map.createPane("routeHoverPane");
  map.getPane("routeHoverPane").style.zIndex = "460";
  map.createPane("hoverMarkerPane");
  map.getPane("hoverMarkerPane").style.zIndex = "700";
  L.control.scale({ imperial: true, metric: false, maxWidth: 120 }).addTo(map);

  const mapboxToken = getMapboxToken();
  const hasMapbox = mapboxToken.startsWith("pk.");
  const providers = [];
  if (hasMapbox) {
    providers.push({
      id: "mapbox",
      name: "Mapbox Outdoors",
      layerFactory: () =>
        L.tileLayer(
          `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`,
          {
            tileSize: 256,
            zoomOffset: 0,
            attribution:
              '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }
        )
    });
  }
  providers.push({
    id: "esriTopo",
    name: "Topo",
    layerFactory: () =>
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        {
          tileSize: 256,
          zoomOffset: 0,
          attribution: "Tiles &copy; Esri"
        }
      )
  });
  providers.push({
    id: "esriImagery",
    name: "Satellite",
    layerFactory: () =>
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          tileSize: 256,
          zoomOffset: 0,
          attribution: "Tiles &copy; Esri"
        }
      )
  });
  providers.push({
    id: "osm",
    name: "OpenStreetMap",
    layerFactory: () =>
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        tileSize: 256,
        zoomOffset: 0,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
  });
  providers.push({
    id: "carto",
    name: "Carto Light",
    layerFactory: () =>
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        tileSize: 256,
        zoomOffset: 0,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
      })
  });

  const providerIndexById = new Map(providers.map((provider, index) => [provider.id, index]));
  const fallbackOrder = providers.map((provider) => provider.id);
  let providerIndex = 0;
  const switchProvider = (nextIndex, reason = "") => {
    if (nextIndex < 0 || nextIndex >= providers.length) return;
    if (activeBaseLayer) {
      try {
        map.removeLayer(activeBaseLayer);
      } catch {
        // Ignore remove errors when swapping base maps quickly.
      }
    }
    providerIndex = nextIndex;
    const current = providers[providerIndex];
    activeBaseLayer = current.layerFactory().addTo(map);
    activeBaseMapName = current.name;
    mapboxFallbackActive = current.id !== "mapbox";
    if (mapStyleSelect && mapStyleSelect.value !== current.id) {
      mapStyleSelect.value = current.id;
    }
    if (mapSubhead && reason) {
      mapSubhead.textContent = `${reason} Using ${current.name} tiles.`;
    }
    wireProviderHealth(current.id, activeBaseLayer);
  };
  applyMapStyleImmediately = (providerId, reason = "") => {
    const nextIndex = providerIndexById.get(providerId);
    if (typeof nextIndex !== "number") return false;
    switchProvider(nextIndex, reason);
    return true;
  };

  let tileHealthTimer = null;
  const wireProviderHealth = (providerId, layer) => {
    let tileLoaded = false;
    let tileErrors = 0;
    layer.on("tileload", () => {
      tileLoaded = true;
      if (tileHealthTimer) {
        clearTimeout(tileHealthTimer);
        tileHealthTimer = null;
      }
    });
    layer.on("tileerror", () => {
      tileErrors += 1;
      if (tileLoaded) return;
      if (tileErrors < 3) return;
      const currentOrderIndex = fallbackOrder.indexOf(providerId);
      if (currentOrderIndex >= 0 && currentOrderIndex < fallbackOrder.length - 1) {
        const nextId = fallbackOrder[currentOrderIndex + 1];
        const nextIndex = providerIndexById.get(nextId);
        if (typeof nextIndex === "number") {
          switchProvider(nextIndex, "Tile loading failed.");
        }
      }
    });
    tileHealthTimer = setTimeout(() => {
      if (!tileLoaded) {
        const currentOrderIndex = fallbackOrder.indexOf(providerId);
        if (currentOrderIndex >= 0 && currentOrderIndex < fallbackOrder.length - 1) {
          const nextId = fallbackOrder[currentOrderIndex + 1];
          const nextIndex = providerIndexById.get(nextId);
          if (typeof nextIndex === "number") {
            switchProvider(nextIndex, "Tiles timed out.");
          }
        }
      }
    }, 2500);
  };

  if (mapStyleSelect) {
    const mapboxOption = mapStyleSelect.querySelector('option[value="mapbox"]');
    if (mapboxOption) {
      mapboxOption.disabled = !hasMapbox;
      mapboxOption.textContent = hasMapbox ? "Mapbox Outdoors" : "Mapbox Outdoors (token needed)";
    }
    const preferredStyle = getMapStylePreference();
    if (preferredStyle && providerIndexById.has(preferredStyle)) {
      mapStyleSelect.value = preferredStyle;
    } else {
      mapStyleSelect.value = "esriTopo";
    }
  }

  const preferredStyle = getMapStylePreference();
  let initialProviderId = "esriTopo";
  if (preferredStyle && providerIndexById.has(preferredStyle)) {
    initialProviderId = preferredStyle;
  }
  const initialProviderIndex = providerIndexById.get(initialProviderId) ?? 0;
  if (!hasMapbox && mapSubhead) {
    mapSubhead.textContent = "Mapbox token not set, using Topo map style.";
  }
  switchProvider(initialProviderIndex);
  updateMapboxTokenButtonLabel();
  stageLayer = L.layerGroup().addTo(map);
  resupplyLayer = L.layerGroup().addTo(map);
  sectionLayer = L.layerGroup().addTo(map);
  dragGuideLayer = L.layerGroup().addTo(map);

  let trackPoints = [];
  try {
    if (isCustomRouteActive() && customUploadedTrackPoints.length >= 2) {
      trackPoints = customUploadedTrackPoints;
    } else if (GPX_FILE) {
      trackPoints = await loadGpxTrackPoints(GPX_FILE);
    }
    if (trackPoints.length < 2) throw new Error("Not enough track points in GPX");
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown GPX load error";
    if (mapSubhead) {
      mapSubhead.textContent = `GPX load failed: ${detail}`;
    }
    markerList.innerHTML =
      `<li><p class="empty-note">Could not load GPX route file. ${isCustomRouteActive() ? "Upload a custom GPX in Plan tab." : `Check that ${GPX_FILE} is in the project root.`}<br/><small>${detail}</small></p></li>`;
    setupCommentSections();
    return;
  }

  try {
    applyTrackToMap(trackPoints, { fitBounds: true, rebuildPlan: !plan.length });
    hardRebuildMapUi();
    if (isCustomRouteActive()) renderCustomStopEditor();
    setTimeout(() => ensureMapArtifacts(), 200);
    setTimeout(() => ensureMapArtifacts(), 900);
    setTimeout(() => ensureMapArtifacts(), 1800);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown map render error";
    console.error("Map render error after GPX load:", error);
    if (mapSubhead) {
      mapSubhead.textContent = `Route loaded, but map render hit an error: ${detail}`;
    }
  }

  setupCommentSections();
}

function updateStagesFromInput() {
  if (!gpxTrackPoints.length || !stageLayer) return;

  const stageCount = getRequestedStageCount();
  let stageData = null;
  if (plan.length === stageCount) {
    stageData = buildStagesFromPlan(gpxTrackPoints, plan);
  }
  if (!stageData || !stageData.stages.length) {
    stageData = buildEvenStages(gpxTrackPoints, stageCount);
  }
  stageOptions = stageData.stages;

  if (mapSubhead) {
    mapSubhead.textContent = mapboxFallbackActive
      ? `Using ${activeBaseMapName} base map. GPX loaded with ${stageCount} days (from projected days).`
      : `Loaded from your GPX file with ${stageCount} days (from projected days).`;
  }

  stageLayer.clearLayers();
  dayMarkers.forEach((marker) => clearMarkerGuide(marker));
  dayMarkers = [];

  stageOptions.forEach((stage, index) => {
    const marker = L.marker([stage.lat, stage.lon], { icon: makeDayIcon(), draggable: true })
      .addTo(stageLayer)
      .bindPopup(`Day ${stage.stage}<br/>${formatStageRangeWithUnits(stage.startMile, stage.endMile)}`);
    marker.on("click", () => {
      if (!plan.length) return;
      setMapPlanSelection({ dayIndex: index });
    });
    attachDragHandlers(marker, "day", index);
    dayMarkers.push(marker);
  });

  renderResupplyMarkers();
  renderRouteProfile();
  renderMarkerList();
  setupCommentSections();
  renderMapSectionComments(selectedSectionName);
  drawSectionOverlays();
  applyDragModeToMarkers();
}

function loadComments() {
  const raw = localStorage.getItem(COMMENTS_KEY);
  if (!raw) {
    comments = [];
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    comments = Array.isArray(parsed) ? parsed : [];
  } catch {
    comments = [];
  }
}

function persistComments() {
  captureUndoPoint();
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  if (isNamedCustomRoute(activeRouteId())) {
    const customRideData = buildCustomRideDataPayload();
    const config = parseForm() || buildFallbackConfigForMyRoute();
    if (hasValidCustomRideDataPayload({ customRideData })) {
      upsertCustomRoutePayload(activeRouteId(), {
        routeName: sanitizeCustomRouteName(customRouteDisplayName || ROUTES[activeRouteId()]?.label || "My Route"),
        config,
        plan: Array.isArray(plan) ? plan : [],
        comments: Array.isArray(comments) ? comments : [],
        customRideData,
        updatedAt: new Date().toISOString()
      });
    }
  }
  maybeWarnUnsignedChanges();
  scheduleCloudSync();
}

function renderComments() {
  commentFeed.innerHTML = "";

  if (!comments.length) {
    commentFeed.innerHTML = '<p class="empty-note">No comments yet. Be the first to post a section update.</p>';
    renderMapSectionComments(selectedSectionName);
    return;
  }

  const sorted = [...comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  sorted.forEach((comment) => {
    const node = commentTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".comment-section").textContent = comment.section;
    node.querySelector(".comment-meta").textContent = `${comment.name} • ${niceDate(new Date(comment.createdAt))}`;
    node.querySelector(".comment-body").textContent = comment.text;

    const image = node.querySelector(".comment-image");
    if (comment.image) {
      image.src = comment.image;
      image.style.display = "block";
    } else {
      image.remove();
    }

    commentFeed.appendChild(node);
  });

  renderMapSectionComments(selectedSectionName);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setupCommentForm() {
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const section = commentSectionSelect.value;
    const name = commentNameInput.value.trim();
    const text = commentTextInput.value.trim();
    const imageFile = commentImageInput.files && commentImageInput.files[0] ? commentImageInput.files[0] : null;

    if (!section || !name || !text) return;

    let image = "";
    if (imageFile) {
      image = await fileToDataUrl(imageFile);
    }

    comments.push({
      section,
      name,
      text,
      image,
      createdAt: new Date().toISOString()
    });

    persistComments();
    renderComments();
    commentTextInput.value = "";
    commentImageInput.value = "";
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const config = parseForm();
  if (!config) return;

  plan = buildPlan(config);
  recomputeDerivedFields();
  renderMetrics(config, plan);
  renderPlan(plan);
  persistPlan();
  if (!syncingMapAndPlan) updateStagesFromInput();
});

resetBtn.addEventListener("click", () => {
  const activeRoute = ROUTES[getRouteFromUrl()] || ROUTES[DEFAULT_ROUTE_ID];
  const defaultDays = Math.max(1, Number(activeRoute.defaultDays || 22));
  localStorage.removeItem(STORAGE_KEY);
  startDateInput.value = localDateString(new Date());
  finishDateInput.value = addDays(startDateInput.value, defaultDays - 1);
  totalDaysInput.value = defaultDays;
  restDaysInput.value = 1;
  setRouteDistanceInputMiles(Number(activeRouteGpxDistanceMiles || activeRoute.defaultDistance || 0));
  plan = [];
  dayList.innerHTML = "";
  metricList.innerHTML = "";
  updateStagesFromInput();
});

exportBtn.addEventListener("click", exportCsv);
if (exportExcelBtn) {
  exportExcelBtn.addEventListener("click", exportExcel);
}

if (customGpxFileInput && customGpxStatus) {
  customGpxFileInput.addEventListener("change", () => {
    const file = customGpxFileInput.files?.[0] || null;
    customUploadedFile = file;
    customGpxStatus.textContent = file ? `Selected: ${file.name}` : "No GPX uploaded yet.";
  });
}

function setCustomBuilderStatus(message, isError = false) {
  const text = String(message || "").trim();
  if (customGpxStatus && text) {
    customGpxStatus.textContent = text;
    customGpxStatus.classList.toggle("status-error", Boolean(isError));
  }
  if (text) setCloudStatus(text);
}

if (customApplyUploadBtn) {
  customApplyUploadBtn.addEventListener("click", async () => {
    if (customApplyUploadBtn.disabled) return;
    customApplyUploadBtn.disabled = true;
    const originalCreateRouteLabel = customApplyUploadBtn.textContent;
    customApplyUploadBtn.textContent = "Creating route...";
    setCustomBuilderStatus("Creating route... Please wait.");
    let createdRouteId = "";
    let createdRouteName = "";
    if (!isRouteBuilderActive()) {
      setCustomBuilderStatus("Switch to Create Your Own Ride first.", true);
      customApplyUploadBtn.disabled = false;
      customApplyUploadBtn.textContent = originalCreateRouteLabel || "Create Route";
      return;
    }
    const file = customUploadedFile || customGpxFileInput?.files?.[0];
    if (!file) {
      setCustomBuilderStatus("Choose a GPX file first.", true);
      customApplyUploadBtn.disabled = false;
      customApplyUploadBtn.textContent = originalCreateRouteLabel || "Create Route";
      return;
    }
    let existingCustomRoutes = loadCustomRouteRegistry();

    try {
      const xmlText = await file.text();
      const points = parseGpxTrack(xmlText);
      if (points.length < 2) {
        setCustomBuilderStatus("That GPX file does not have enough track points.", true);
        customApplyUploadBtn.disabled = false;
        customApplyUploadBtn.textContent = originalCreateRouteLabel || "Create Route";
        return;
      }

      if (existingCustomRoutes.length >= 5) {
        const oldest = existingCustomRoutes[0];
        if (oldest?.id) {
          removeCustomRouteById(oldest.id);
          existingCustomRoutes = loadCustomRouteRegistry();
          setCustomBuilderStatus(
            `Reached 5 custom routes. Replaced oldest route (${oldest.name}) with your new one.`
          );
        }
      }

      customUploadedTrackPoints = points;
      customRouteDisplayName = sanitizeCustomRouteName(customRouteNameInput?.value || file.name.replace(/\.gpx$/i, ""));
      const newRouteId = generateCustomRouteId(customRouteDisplayName);
      createdRouteId = newRouteId;
      createdRouteName = customRouteDisplayName;
      ensureCustomRouteDefinition(newRouteId, customRouteDisplayName);
      if (customRouteNameInput) customRouteNameInput.value = customRouteDisplayName;
      const cumulative = buildTrackCumulativeMiles(points);
      const totalMiles = cumulative[cumulative.length - 1] || 0;
      const projectedStops = Math.max(2, Math.min(60, Number(customProjectedResuppliesInput?.value || 12)));
      const projectedDays = Math.max(1, Math.min(120, Number(Math.round(totalMiles / 70) || 20)));
      const startValue = startDateInput?.value || localDateString(new Date());
      const configForRoute = {
        startDate: startValue,
        finishDate: addDays(startValue, projectedDays - 1),
        totalDays: projectedDays,
        restDays: 1,
        routeDistance: totalMiles,
        rideDays: Math.max(projectedDays - 1, 1),
        avgRideMiles: totalMiles / Math.max(projectedDays - 1, 1)
      };
      const initialPlan = buildPlan(configForRoute);
      const initialStops = buildEvenResupplyPointsFromTrack(points, projectedStops, cumulative).map((point) => ({
        ...point,
        isCustom: true
      }));
      customGpxStatus.textContent = `Uploaded ${file.name} • ${totalMiles.toFixed(1)} mi`;
      const explicitPayload = {
        trackPoints: thinTrackPointsForStorage(points.map(normalizeStoredTrackPoint).filter(Boolean)),
        resupplyPoints: Array.isArray(initialStops) ? initialStops.map(normalizeStoredResupplyPoint).filter(Boolean) : [],
        uploadedFileName: String(file.name || ""),
        routeName: sanitizeCustomRouteName(customRouteDisplayName),
        sourcePointCount: points.length
      };
      upsertCustomRouteRegistryEntry(newRouteId, customRouteDisplayName);
      try {
        renderCustomRouteButtons();
      } catch (renderError) {
        console.error("Route button render failed:", renderError);
      }
      setMyRouteShortcutFlag(true);
      saveMyRouteMeta({ hasRoute: true, name: customRouteDisplayName });
      try {
        setMyRouteShortcutVisible(true);
      } catch (shortcutError) {
        console.error("Shortcut visibility update failed:", shortcutError);
      }
      upsertCustomRoutePayload(newRouteId, {
        routeName: sanitizeCustomRouteName(customRouteDisplayName),
        customRideData: explicitPayload,
        updatedAt: new Date().toISOString()
      });
      saveCustomRouteHandoff(newRouteId, {
        routeName: sanitizeCustomRouteName(customRouteDisplayName),
        customRideData: explicitPayload,
        config: configForRoute,
        plan: initialPlan,
        comments: Array.isArray(comments) ? comments : []
      });
      const persisted = await persistMyRouteSnapshot({
        syncCloud: false,
        uploadedFileName: file.name,
        routeId: newRouteId,
        routeName: customRouteDisplayName,
        customRideDataOverride: explicitPayload,
        configOverride: configForRoute,
        planOverride: initialPlan,
        resupplyPointsOverride: initialStops
      });
      if (!persisted) {
        setCustomBuilderStatus(
          `Created route: ${customRouteDisplayName}. Local save is limited in this browser, but the tab will still open.`
        );
      } else {
        setCustomBuilderStatus(`Created route: ${customRouteDisplayName}`);
      }
      const createdBtn = routeSwitcherNav?.querySelector(`.route-btn-user-route[data-route="${newRouteId}"]`);
      if (!createdBtn) {
        throw new Error("Route tab creation failed");
      }
      window.location.assign(routeUrl(newRouteId));
    } catch (error) {
      const message = String(error?.message || "");
      console.error("Create route failed:", error);
      if (createdRouteId) {
        try {
          const btn = routeSwitcherNav?.querySelector(`.route-btn-user-route[data-route="${createdRouteId}"]`);
          if (btn) {
            setCustomBuilderStatus(`Created route: ${createdRouteName || "My Route"}. Opening route tab...`);
            window.location.assign(routeUrl(createdRouteId));
            return;
          }
        } catch {
          // Fall through to normal error status.
        }
      }
      if (/Route tab creation failed/i.test(message)) {
        setCustomBuilderStatus(
          "Route was created, but the tab failed to render immediately. Refresh once and try again.",
          true
        );
      } else {
        setCustomBuilderStatus(`Could not create route from GPX (${message || "unknown error"}).`, true);
      }
    } finally {
      customApplyUploadBtn.disabled = false;
      customApplyUploadBtn.textContent = originalCreateRouteLabel || "Create Route";
    }
  });
}

if (customUploadPanel) {
  const dropzone = customUploadPanel.querySelector(".upload-dropzone");
  if (dropzone && customGpxFileInput && customGpxStatus) {
    dropzone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropzone.classList.add("dragover");
    });
    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });
    dropzone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropzone.classList.remove("dragover");
      const files = event.dataTransfer?.files;
      if (!files?.length) return;
      const file = files[0];
      customUploadedFile = file;
      customGpxStatus.textContent = file ? `Selected: ${file.name}` : "No GPX uploaded yet.";
    });
  }
}

if (addExtraStopBtn) {
  addExtraStopBtn.addEventListener("click", () => {
    const name = String(extraStopNameInput?.value || "").trim();
    const notes = String(extraStopNotesInput?.value || "").trim();
    const requestedMile = Number(extraStopMileInput?.value || 0);
    const routeMax = getRouteDistanceInputMiles() || Number(resupplyPoints[resupplyPoints.length - 1]?.mile || 0);

    if (!name) {
      setCloudStatus("Enter a stop name before adding.");
      return;
    }
    if (!Number.isFinite(requestedMile)) {
      setCloudStatus("Enter a valid mile marker before adding.");
      return;
    }
    const safeMile = Math.max(0.1, Math.min(Math.max(0.1, routeMax - 0.1), requestedMile));
    const point = pointForMile(safeMile);

    resupplyPoints.push({
      mile: Number(safeMile.toFixed(1)),
      name,
      lat: point.lat,
      lon: point.lon,
      resupply: notes || "Added custom stop.",
      isCustom: true
    });

    refreshResupplyUIAfterChange();
    if (extraStopNameInput) extraStopNameInput.value = "";
    if (extraStopMileInput) extraStopMileInput.value = "";
    if (extraStopNotesInput) extraStopNotesInput.value = "";
    setCloudStatus(`Added custom stop: ${name}.`);
  });
}

if (customDeleteRouteBtn) {
  customDeleteRouteBtn.addEventListener("click", async () => {
    await deleteCustomRouteData();
  });
}

if (routeSwitcherNav) {
  routeSwitcherNav.addEventListener("click", (event) => {
    const button = event.target.closest(".route-btn[data-route]");
    if (!button) return;
    const routeId = String(button.dataset.route || "");
    if (!routeId) return;
    if (!ROUTES[routeId] && isNamedCustomRoute(routeId)) {
      const registryEntry = loadCustomRouteRegistry().find((entry) => entry.id === routeId);
      ensureCustomRouteDefinition(routeId, registryEntry?.name || "My Route");
    }
    if (!ROUTES[routeId]) return;
    if (ROUTES[routeId].comingSoon) {
      if (routeSwitcherNote) routeSwitcherNote.textContent = `${ROUTES[routeId].label} is coming next. Tour Divide and Colorado Trail are live now.`;
      return;
    }
    window.location.href = routeUrl(routeId);
  });
}

if (dragModeBtn) {
  dragModeBtn.addEventListener("click", () => {
    dragModeEnabled = !dragModeEnabled;
    applyDragModeToMarkers();
  });
}

if (fitRouteBtn) {
  fitRouteBtn.addEventListener("click", () => {
    if (!map || !routeLine) return;
    try {
      const bounds = routeLine.getBounds();
      if (bounds && bounds.isValid && bounds.isValid()) {
        map.fitBounds(bounds, { padding: [30, 30] });
      }
    } catch {
      // No-op if bounds fitting fails unexpectedly.
    }
  });
}

if (mapStyleSelect) {
  mapStyleSelect.addEventListener("change", () => {
    const nextStyle = String(mapStyleSelect.value || "esriTopo");
    saveMapStylePreference(nextStyle);
    if (!map || !activeBaseLayer) return;
    if (typeof applyMapStyleImmediately === "function" && applyMapStyleImmediately(nextStyle, "Map style changed.")) {
      setTimeout(() => {
        try {
          map.invalidateSize();
        } catch {
          // No-op
        }
      }, 0);
      return;
    }
  });
}

if (mapboxTokenBtn) {
  mapboxTokenBtn.addEventListener("click", () => {
    const currentToken = getSavedMapboxToken();
    const entered = window.prompt(
      "Paste your Mapbox public token (starts with pk.). Leave blank to remove it.",
      currentToken
    );
    if (entered === null) return;
    const token = String(entered).trim();
    if (!token) {
      try {
        localStorage.removeItem(MAPBOX_TOKEN_KEY);
      } catch {
        // Ignore localStorage write failures.
      }
      updateMapboxTokenButtonLabel();
      setCloudStatus("Mapbox token removed. Reloading with fallback map.");
      window.location.reload();
      return;
    }
    if (!token.startsWith("pk.")) {
      setCloudStatus("Mapbox token should start with pk.");
      return;
    }
    try {
      localStorage.setItem(MAPBOX_TOKEN_KEY, token);
    } catch {
      setCloudStatus("Could not save token in this browser. Check storage settings.");
      return;
    }
    updateMapboxTokenButtonLabel();
    setCloudStatus("Mapbox token saved. Reloading map.");
    window.location.reload();
  });
}

startDateInput.addEventListener("change", () => {
  if (finishDateInput.value) {
    const days = dateDiffInDaysInclusive(startDateInput.value, finishDateInput.value);
    if (days > 0) {
      totalDaysInput.value = days;
      updateStagesFromInput();
      persistPlan();
    }
  } else if (Number(totalDaysInput.value) > 0) {
    finishDateInput.value = addDays(startDateInput.value, Number(totalDaysInput.value) - 1);
  }
});

finishDateInput.addEventListener("change", () => {
  if (!startDateInput.value || !finishDateInput.value) return;
  const days = dateDiffInDaysInclusive(startDateInput.value, finishDateInput.value);
  if (days > 0) {
    totalDaysInput.value = days;
    updateStagesFromInput();
    persistPlan();
  }
});

totalDaysInput.addEventListener("change", () => {
  if (!startDateInput.value) return;
  const totalDays = Math.max(1, Number(totalDaysInput.value || 1));
  totalDaysInput.value = totalDays;
  finishDateInput.value = addDays(startDateInput.value, totalDays - 1);
  updateStagesFromInput();
  persistPlan();
});

function authCredentials() {
  return {
    email: (authEmailInput.value || "").trim(),
    password: authPasswordInput.value || ""
  };
}

function setAuthBusyState(busy) {
  authBusy = Boolean(busy);
  [signUpBtn, signInBtn, signInGoogleBtn, signOutBtn, syncNowBtn].forEach((button) => {
    if (button) button.disabled = authBusy;
  });
}

function purgeSignedInDataFromDevice(emailRaw = "") {
  const email = normalizeEmail(emailRaw || "");
  const routeDefs = Object.values(ROUTES || {}).filter((route) => route && route.storagePrefix);
  const prefixes = Array.from(new Set(routeDefs.map((route) => route.storagePrefix)));

  prefixes.forEach((prefix) => {
    try {
      localStorage.removeItem(`${prefix}-plan-v1`);
      localStorage.removeItem(`${prefix}-comments-v1`);
      localStorage.removeItem(`${prefix}-custom-resupply-stops-v1`);
      sessionStorage.removeItem(`${prefix}-plan-v1`);
      sessionStorage.removeItem(`${prefix}-comments-v1`);
      sessionStorage.removeItem(`${prefix}-custom-resupply-stops-v1`);
      if (email) {
        localStorage.removeItem(`${prefix}-local-profile-v1:${email}`);
        sessionStorage.removeItem(`${prefix}-local-profile-v1:${email}`);
      }
    } catch {
      // Ignore storage cleanup failures.
    }
  });

  try {
    localStorage.removeItem(CUSTOM_ROUTE_REGISTRY_KEY);
    sessionStorage.removeItem(CUSTOM_ROUTE_REGISTRY_SESSION_KEY);
    localStorage.removeItem(CUSTOM_ROUTE_PAYLOADS_KEY);
    sessionStorage.removeItem(CUSTOM_ROUTE_PAYLOADS_SESSION_KEY);
    localStorage.removeItem(MY_ROUTE_META_KEY);
    sessionStorage.removeItem(CUSTOM_ROUTE_HANDOFF_KEY);
    if (email) {
      localStorage.removeItem(legacyCustomRideLocalProfileKey(email));
      localStorage.removeItem(customRideLocalProfileKey(email));
      localStorage.removeItem(`${MY_ROUTE_SHORTCUT_KEY_PREFIX}${email}`);
    }
  } catch {
    // Ignore storage cleanup failures.
  }
}

function resetUiAfterSignOut() {
  runtimeCustomRoutePayloads.clear();
  customUploadedTrackPoints = [];
  customUploadedFile = null;
  customRouteDisplayName = "My Route";
  clearMyRouteMeta();
  loadCustomRouteRegistry().forEach((entry) => {
    if (isNamedCustomRoute(entry?.id) && ROUTES[entry.id]) {
      delete ROUTES[entry.id];
    }
  });
  saveCustomRouteRegistry([]);
  renderCustomRouteButtons();
  setMyRouteShortcutVisible(false);

  if (isNamedCustomRoute(activeRouteId())) {
    window.location.href = routeUrl("custom_ride");
    return;
  }

  plan = [];
  comments = [];
  dayList.innerHTML = "";
  metricList.innerHTML = "";
  loadSavedPlan();
}

async function ensureFirebaseLocalPersistence() {
  if (localAuthMode || !firebaseAuth || !window.firebase?.auth?.Auth?.Persistence?.LOCAL) return;
  try {
    await firebaseAuth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
  } catch {
    // Keep default persistence if browser disallows setting it.
  }
}

function isSafariBrowser() {
  try {
    const ua = String(navigator.userAgent || "");
    return /Safari/i.test(ua) && !/Chrome|Chromium|Edg|CriOS|FxiOS|OPR/i.test(ua);
  } catch {
    return false;
  }
}

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!authBusy && signInBtn) signInBtn.click();
  });
}

signUpBtn.addEventListener("click", async () => {
  if (authBusy) return;
  const { email, password } = authCredentials();
  if (!email || password.length < 6) {
    setCloudStatus("Enter email and password (6+ chars).");
    return;
  }
  if (localAuthMode) {
    const key = normalizeEmail(email);
    const accounts = loadLocalAccounts();
    if (accounts[key]) {
      setCloudStatus("Account already exists. Sign in instead.");
      return;
    }
    accounts[key] = { password };
    saveLocalAccounts(accounts);
    authUser = { uid: `local-${key}`, email: key };
    setLocalSessionEmail(key);
    setCloudStatus(`Local account created for ${key}.`);
    updateAccountToggleLabel();
    setUnsignedWarningVisible(false);
    await refreshMyRouteShortcutVisibility();
    await pushCloudData();
    return;
  }
  if (!firebaseAuth) {
    setCloudStatus("Cloud auth is not configured yet.");
    return;
  }
  try {
    setAuthBusyState(true);
    await ensureFirebaseLocalPersistence();
    await firebaseAuth.createUserWithEmailAndPassword(email, password);
    setCloudStatus(`Account created for ${email}. Finishing sign-in...`);
  } catch (error) {
    setCloudStatus(`Sign up failed: ${error.message}`);
  } finally {
    setAuthBusyState(false);
  }
});

signInBtn.addEventListener("click", async () => {
  if (authBusy) return;
  const { email, password } = authCredentials();
  if (!email || !password) {
    setCloudStatus("Enter email and password to sign in.");
    return;
  }
  if (localAuthMode) {
    const key = normalizeEmail(email);
    const accounts = loadLocalAccounts();
    if (!accounts[key] || accounts[key].password !== password) {
      setCloudStatus("Invalid local account email or password.");
      return;
    }
    authUser = { uid: `local-${key}`, email: key };
    setLocalSessionEmail(key);
    updateAccountToggleLabel();
    await loadCloudData();
    setUnsignedWarningVisible(false);
    await refreshMyRouteShortcutVisibility();
    return;
  }
  if (!firebaseAuth) {
    setCloudStatus("Cloud auth is not configured yet.");
    return;
  }
  try {
    setAuthBusyState(true);
    await ensureFirebaseLocalPersistence();
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    setCloudStatus(`Signed in as ${email}. Loading your saved data...`);
  } catch (error) {
    setCloudStatus(`Sign in failed: ${error.message}`);
  } finally {
    setAuthBusyState(false);
  }
});

if (signInGoogleBtn) {
  signInGoogleBtn.addEventListener("click", async () => {
    if (authBusy) return;
    if (localAuthMode) {
      setCloudStatus("Google sign-in requires Firebase cloud auth mode.");
      return;
    }
    if (!firebaseAuth) {
      setCloudStatus("Cloud auth is not configured yet.");
      return;
    }
    try {
      setAuthBusyState(true);
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      if (isSafariBrowser()) {
        setCloudStatus("Opening Google sign-in...");
        await firebaseAuth.signInWithRedirect(provider);
        return;
      }
      await firebaseAuth.signInWithPopup(provider);
      setCloudStatus("Signed in with Google. Loading your saved data...");
    } catch (error) {
      const message = String(error?.message || "");
      const popupBlocked = /popup|blocked|closed/i.test(message);
      if (popupBlocked) {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          await firebaseAuth.signInWithRedirect(provider);
          return;
        } catch (redirectError) {
          setCloudStatus(`Google sign-in failed: ${redirectError.message}`);
          return;
        }
      }
      setCloudStatus(`Google sign-in failed: ${message || "Unknown error"}`);
    } finally {
      setAuthBusyState(false);
    }
  });
}

signOutBtn.addEventListener("click", async () => {
  if (authBusy) return;
  setAuthBusyState(true);
  if (localAuthMode) {
    const previousEmail = normalizeEmail(authUser?.email || "");
    authUser = null;
    clearLocalSessionEmail();
    purgeSignedInDataFromDevice(previousEmail);
    resetUiAfterSignOut();
    setCloudStatus("Signed out of local account.");
    updateAccountToggleLabel();
    setMyRouteShortcutVisible(false);
    updateSignedInIndicators();
    setAuthBusyState(false);
    return;
  }
  if (!firebaseAuth) {
    setAuthBusyState(false);
    return;
  }
  try {
    const previousEmail = normalizeEmail(authUser?.email || "");
    purgeSignedInDataFromDevice(previousEmail);
    resetUiAfterSignOut();
    await firebaseAuth.signOut();
  } finally {
    // onAuthStateChanged will set final UI state; keep controls responsive even if callback is delayed.
    setTimeout(() => {
      if (!authUser) setAuthBusyState(false);
    }, 1000);
  }
});

syncNowBtn.addEventListener("click", async () => {
  if (!cloudReady()) {
    setCloudStatus("Sign in first to sync to cloud.");
    return;
  }
  await pushCloudData();
});

if (undoBtn) {
  undoBtn.addEventListener("click", () => {
    undoLastChange();
  });
}

if (homeViewBtn) {
  homeViewBtn.addEventListener("click", () => {
    window.location.href = homeUrl(getRouteFromUrl());
  });
}

if (customerServiceViewBtn) {
  customerServiceViewBtn.addEventListener("click", () => {
    window.location.href = customerServiceUrl(getRouteFromUrl());
  });
}

if (donationsViewBtn) {
  donationsViewBtn.addEventListener("click", () => {
    window.location.href = donationsUrl(getRouteFromUrl());
  });
}

if (homeOpenActiveBtn) {
  homeOpenActiveBtn.addEventListener("click", () => {
    window.location.href = routeUrl(getRouteFromUrl());
  });
}

commentSectionSelect.addEventListener("change", () => {
  renderMapSectionComments(commentSectionSelect.value);
  drawSectionOverlays();
});

document.addEventListener(
  "input",
  () => {
    markUserEditingNow();
  },
  true
);
document.addEventListener(
  "change",
  () => {
    markUserEditingNow();
  },
  true
);

migrateLegacyMyRouteStorage();
compactCustomRoutePayloadStore();
hydrateCustomRoutesFromRegistry();
renderCustomRouteButtons();
if (!applyRouteConfig(getRouteFromUrl())) {
  applyRouteConfig(DEFAULT_ROUTE_ID);
}
if (isNamedCustomRoute(getRouteFromUrl())) {
  const handoff = consumeCustomRouteHandoff(getRouteFromUrl());
  if (handoff && hasValidCustomRideDataPayload(handoff)) {
    applyCustomRideDataPayload(handoff.customRideData);
    upsertCustomRoutePayload(getRouteFromUrl(), {
      routeName: sanitizeCustomRouteName(handoff.routeName || "My Route"),
      customRideData: handoff.customRideData,
      updatedAt: new Date().toISOString()
    });
    if (handoff.config) applyPlannerConfig(handoff.config);
    enforceRouteDistanceBaseline();
    if (Array.isArray(handoff.plan) && handoff.plan.length) applyPlanArray(handoff.plan);
    if (Array.isArray(handoff.comments)) applyCommentsArray(handoff.comments);
  }
}
updateAccountToggleLabel();
setupPlannerUnits();
renderHomeRouteCollection();
setViewMode(viewModeFromUrl());
enforceSiteBranding();
setDragButtonState();
setupAccountMenu();
initCloud();
refreshMyRouteShortcutVisibility();
setupTabs();
setupCustomerServiceForm();
setupDonationSuggestionForm();
setupRouteProfileScroll();
setupCommentSections();
setupCommentForm();
loadComments();
renderComments();
loadSavedPlan();
initMap();

if (!plan.length) {
  const config = parseForm();
  if (config) {
    plan = buildPlan(config);
    renderMetrics(config, plan);
    renderPlan(plan);
    persistPlan();
  }
}

if (startDateInput.value && totalDaysInput.value && !finishDateInput.value) {
  finishDateInput.value = addDays(startDateInput.value, Number(totalDaysInput.value) - 1);
}

resetUndoBaseline();
appInitialized = true;
