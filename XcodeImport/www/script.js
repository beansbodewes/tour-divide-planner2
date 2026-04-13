const DEFAULT_ROUTE_ID = "tour_divide";
const ROUTES = {
  tour_divide: {
    id: "tour_divide",
    label: "Tour Divide Race",
    plannerTitle: "Tour Divide Race Planner",
    gpxFile: "TourDivide2025_v2.gpx",
    defaultDistance: 2745,
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
    defaultDistance: 2745,
    defaultDays: 35,
    minDistance: 2000,
    maxDistance: 3200,
    storagePrefix: "great-divide-touring-route",
    profileCollection: "great_divide_touring_route_profiles",
    csvName: "great-divide-touring-route-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Banff", lat: 51.1784, lon: -115.5708, resupply: "Start-town setup and food carry prep." },
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
      { mile: 2745, name: "Antelope Wells", lat: 31.3325, lon: -108.5103, resupply: "Finish point and final logistics." }
    ]
  },
  colorado_trail: {
    id: "colorado_trail",
    label: "Colorado Trail",
    plannerTitle: "Colorado Trail Planner",
    gpxFile: "Bikepacking-Route-Colorado-Trail_v2017_08.gpx",
    defaultDistance: 527,
    defaultDays: 15,
    minDistance: 300,
    maxDistance: 700,
    storagePrefix: "colorado-trail",
    profileCollection: "colorado_trail_profiles",
    csvName: "colorado-trail-day-by-day-plan.csv",
    resupplyPoints: [
      { mile: 0, name: "Waterton Canyon", lat: 39.4905, lon: -105.0927, resupply: "Trailhead start point near Denver." },
      { mile: 73, name: "Bailey", lat: 39.4079, lon: -105.4764, resupply: "Small-town stores and food options." },
      { mile: 145, name: "Breckenridge", lat: 39.4817, lon: -106.0384, resupply: "Major grocery + bike service access." },
      { mile: 195, name: "Leadville", lat: 39.2508, lon: -106.2925, resupply: "High-altitude full resupply stop." },
      { mile: 248, name: "Buena Vista", lat: 38.8422, lon: -106.1311, resupply: "Strong grocery and cafe options." },
      { mile: 280, name: "Salida / Poncha", lat: 38.5332, lon: -106.0003, resupply: "Good reset before big climbs." },
      { mile: 398, name: "Lake City", lat: 38.0299, lon: -107.3153, resupply: "Seasonal mountain-town services." },
      { mile: 450, name: "Silverton", lat: 37.8089, lon: -107.6645, resupply: "Compact but useful food options." },
      { mile: 527, name: "Durango", lat: 37.2754, lon: -107.8802, resupply: "Finish town and full services." }
    ]
  },
  azt_300: {
    id: "azt_300",
    label: "AZT 300",
    plannerTitle: "AZT 300 Planner",
    gpxFile: "AZT300_2026_v4.gpx",
    defaultDistance: 300,
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
    defaultDistance: 800,
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
    defaultDistance: 998,
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
    minDistance: 50,
    maxDistance: 5000,
    storagePrefix: "custom-ride",
    profileCollection: "custom_ride_profiles",
    csvName: "custom-ride-day-by-day-plan.csv",
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
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: ""
};
const MAPBOX_STYLE_ID = "mapbox/outdoors-v12";
const MAPBOX_ACCESS_TOKEN = "";
const ROUTE_PROFILE_BASE_WIDTH = 2400;

let resupplyPoints = [];

const form = document.getElementById("plan-form");
const startDateInput = document.getElementById("start-date");
const finishDateInput = document.getElementById("finish-date");
const totalDaysInput = document.getElementById("total-days");
const restDaysInput = document.getElementById("rest-days");
const routeDistanceInput = document.getElementById("route-distance");
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
const customUploadPanel = document.getElementById("custom-upload-panel");
const customGpxFileInput = document.getElementById("custom-gpx-file");
const customGpxStatus = document.getElementById("custom-gpx-status");
const customProjectedDaysInput = document.getElementById("custom-projected-days");
const customProjectedResuppliesInput = document.getElementById("custom-projected-resupplies");
const customApplyUploadBtn = document.getElementById("custom-apply-upload-btn");
const customStopEditor = document.getElementById("custom-stop-editor");
const customStopEditorNote = document.getElementById("custom-stop-editor-note");
const customStopList = document.getElementById("custom-stop-list");
const exportBtn = document.getElementById("export-btn");
const exportExcelBtn = document.getElementById("export-excel-btn");
const exportFormatSelect = document.getElementById("export-format");
const cloudStatus = document.getElementById("cloud-status");
const authEmailInput = document.getElementById("auth-email");
const authPasswordInput = document.getElementById("auth-password");
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");
const syncNowBtn = document.getElementById("sync-now-btn");
const undoBtn = document.getElementById("undo-btn");
const accountToggleBtn = document.getElementById("account-toggle-btn");
const accountDropdown = document.getElementById("account-dropdown");
const homeViewBtn = document.getElementById("home-view-btn");
const homePage = document.getElementById("home-page");
const homeOpenActiveBtn = document.getElementById("home-open-active-btn");
const routeButtons = Array.from(document.querySelectorAll(".route-btn[data-route]"));
const plannerTitle = document.getElementById("planner-title");
const plannerSubhead = document.getElementById("planner-subhead");
const routeSwitcherNote = document.getElementById("route-switcher-note");
const sectionsNav = document.getElementById("sections-nav");
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
const routeProfile = document.getElementById("route-profile");
const routeProfileMeta = document.getElementById("route-profile-meta");
const routeProfileScroll = document.getElementById("route-profile-scroll");
const routeProfileScrollWrap = document.querySelector(".profile-scroll");
const routeProfileZoom = document.getElementById("route-profile-zoom");
const routeProfileZoomLabel = document.getElementById("route-profile-zoom-label");
const dragModeBtn = document.getElementById("drag-mode-btn");
const fitRouteBtn = document.getElementById("fit-route-btn");

const commentForm = document.getElementById("comment-form");
const commentSectionSelect = document.getElementById("comment-section");
const commentNameInput = document.getElementById("comment-name");
const commentTextInput = document.getElementById("comment-text");
const commentImageInput = document.getElementById("comment-image");
const commentFeed = document.getElementById("comment-feed");
const commentTemplate = document.getElementById("comment-template");

let plan = [];
let comments = [];
let map;
let stageOptions = [];
let gpxTrackPoints = [];
let stageLayer;
let resupplyLayer;
let sectionLayer;
let routeSections = [];
let routeLine;
let trackCumulativeMiles = [];
let trackCumulativeGainFt = [];
let dayMarkers = [];
let resupplyMarkers = [];
let dragGuideLayer;
let dragModeEnabled = false;
let selectedSectionName = "";
let activeBaseLayer;
let mapboxFallbackActive = false;
let syncingMapAndPlan = false;
let firebaseAuth = null;
let firestoreDb = null;
let authUser = null;
let cloudSyncTimer = null;
let localAuthMode = false;
let undoStack = [];
let latestSnapshot = "";
let restoringUndo = false;
let customUploadedTrackPoints = [];
let customUploadedFile = null;

function getRouteFromUrl() {
  const routeParam = new URLSearchParams(window.location.search).get("route");
  if (routeParam && ROUTES[routeParam]) return routeParam;
  return DEFAULT_ROUTE_ID;
}

function viewModeFromUrl() {
  const view = new URLSearchParams(window.location.search).get("view");
  return view === "home" ? "home" : "planner";
}

function routeUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=planner`;
  return `${window.location.pathname}?route=${routeId}&view=planner`;
}

function homeUrl(routeId) {
  if (routeId === DEFAULT_ROUTE_ID) return `${window.location.pathname}?view=home`;
  return `${window.location.pathname}?route=${routeId}&view=home`;
}

function setHomeMode(showHome) {
  if (homePage) homePage.hidden = !showHome;
  if (sectionsNav) sectionsNav.hidden = showHome;
  tabPanels.forEach((panel) => {
    panel.hidden = showHome;
  });
  if (homeViewBtn) homeViewBtn.classList.toggle("active", showHome);
  if (!showHome && map) {
    setTimeout(() => {
      map.invalidateSize();
      if (routeLine) map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
    }, 30);
  }
}

function activeRouteId() {
  return getRouteFromUrl();
}

function isCustomRouteActive() {
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
  const isCustom = routeId === "custom_ride";
  if (customUploadPanel) customUploadPanel.hidden = !isCustom;
  if (customStopEditor) customStopEditor.hidden = !isCustom;
  if (isCustom && customProjectedDaysInput && totalDaysInput) {
    customProjectedDaysInput.value = String(Math.max(2, Number(totalDaysInput.value || 20)));
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
      const routeMax = trackCumulativeMiles[trackCumulativeMiles.length - 1] || Number(routeDistanceInput.value || 0);
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
    let lat = Number(point.lat);
    let lon = Number(point.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      const snapped = pointForMile(Number(point.mile || 0));
      lat = Number(snapped.lat);
      lon = Number(snapped.lon);
      resupplyPoints[index] = { ...point, lat, lon };
    }
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

    const marker = L.marker([lat, lon], { icon: makeResupplyIcon(), draggable: true })
      .addTo(resupplyLayer)
      .bindPopup(`<strong>${point.name}</strong><br/>Mile ${point.mile}<br/>${point.resupply}`);
    safeBringToFront(marker);
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
  if (plan.length) renderPlan(plan);
  if (isCustomRouteActive()) renderCustomStopEditor();
  applyDragModeToMarkers();
}

function enforceSiteBranding() {
  if (siteTitle) siteTitle.textContent = "Bikepack Finisher";
}

function applyRouteConfig(routeId) {
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
  resupplyPoints = route.resupplyPoints.map((point) => ({ ...point }));
  const customStops = loadCustomResupplyStops();
  if (route.id === "custom_ride" && customStops.length) {
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
    routeDistanceInput.min = String(route.minDistance);
    routeDistanceInput.max = String(route.maxDistance);
    routeDistanceInput.value = String(route.defaultDistance);
  }

  if (totalDaysInput && Number.isFinite(route.defaultDays)) {
    totalDaysInput.value = String(route.defaultDays);
    if (startDateInput.value) {
      finishDateInput.value = addDays(startDateInput.value, Math.max(1, route.defaultDays) - 1);
    }
  }

  routeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route.id);
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

function parseForm() {
  const startDate = startDateInput.value;
  const finishDate = finishDateInput.value;
  const totalDays = Number(totalDaysInput.value);
  const restDays = Number(restDaysInput.value);
  const routeDistance = Number(routeDistanceInput.value);

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

function cloudReady() {
  return Boolean(authUser);
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

function gpxGainBetweenMiles(startMile, endMile, routeDistance) {
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

function elevationFactor(cumulativeMiles, routeDistance) {
  const progress = routeDistance > 0 ? cumulativeMiles / routeDistance : 0;

  if (progress < 0.15) return 105;
  if (progress < 0.35) return 92;
  if (progress < 0.6) return 110;
  if (progress < 0.82) return 98;
  return 88;
}

function recomputeDerivedFields() {
  const config = parseForm();
  if (!config || !plan.length) return;

  let cumulativeMiles = 0;
  for (const day of plan) {
    if (day.type === "Rest") {
      day.gain = 0;
      continue;
    }

    const rideMiles = Number(day.miles || 0);
    const dayStart = cumulativeMiles;
    const dayEnd = Math.min(config.routeDistance, cumulativeMiles + rideMiles);
    cumulativeMiles = dayEnd;
    day.gain = gpxGainBetweenMiles(dayStart, dayEnd, config.routeDistance);
    day.town = nearestWaypoint(cumulativeMiles);
  }
}

function buildPlan(config) {
  const start = new Date(`${config.startDate}T08:00:00`);
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
    const rideMiles = isRest ? 0 : Number(config.avgRideMiles.toFixed(1));
    cumulativeMiles = Math.min(config.routeDistance, cumulativeMiles + rideMiles);

    nextPlan.push({
      id: day + 1,
      date: localDateString(new Date(start.getTime() + day * 86400000)),
      type: isRest ? "Rest" : "Ride",
      miles: rideMiles,
      gain: isRest ? 0 : Math.round(rideMiles * elevationFactor(cumulativeMiles, config.routeDistance)),
      town: isRest ? "Recovery + laundry + bike check" : nearestWaypoint(cumulativeMiles),
      resupplyOptions1: isRest ? "Cafe + grocery + lodging" : "Market + gas station + cafe",
      resupplyHours1: isRest ? "Varies by town" : "6:00 AM - 9:00 PM",
      resupplyDistance1: isRest ? 0.2 : 0.4,
      resupplyAddress1: "",
      resupplyOptions2: isRest ? "Backup convenience store" : "Backup convenience store",
      resupplyHours2: "7:00 AM - 8:00 PM",
      resupplyDistance2: isRest ? 0.4 : 0.8,
      resupplyAddress2: "",
      resupplyOptions3: "",
      resupplyHours3: "",
      resupplyDistance3: 0,
      shoppingList: isRest ? "Recovery meal, hydration mix, laundry supplies" : "High-calorie food, bottles, battery charge items",
      calorieTarget: isRest ? 4000 : 7000,
      notes: isRest
        ? "Leg flush, stretch, check drivetrain and tires."
        : "Keep effort controlled in first half. Protect sleep window."
    });
  }

  const totalPlanned = nextPlan.reduce((sum, day) => sum + day.miles, 0);
  const difference = Number((config.routeDistance - totalPlanned).toFixed(1));
  if (difference !== 0) {
    const lastRide = [...nextPlan].reverse().find((day) => day.type === "Ride");
    if (lastRide) {
      lastRide.miles = Number((lastRide.miles + difference).toFixed(1));
      lastRide.gain = Math.round(lastRide.miles * elevationFactor(config.routeDistance, config.routeDistance));
      lastRide.town = nearestWaypoint(config.routeDistance);
    }
  }

  return nextPlan;
}

function renderMetrics(config, days) {
  const rideDays = days.filter((d) => d.type === "Ride");
  const totalMiles = rideDays.reduce((sum, d) => sum + Number(d.miles || 0), 0);
  const totalGain = rideDays.reduce((sum, d) => sum + Number(d.gain || 0), 0);

  if (plannerTotalRouteDistance) {
    const routeMiles = Number(config?.routeDistance || routeDistanceInput?.value || 0);
    plannerTotalRouteDistance.textContent = `${routeMiles.toLocaleString()} mi`;
  }

  const items = [
    ["Route", `${config.routeDistance} mi`],
    ["Race Days", `${config.totalDays}`],
    ["Ride Days", `${rideDays.length}`],
    ["Rest Days", `${config.restDays}`],
    ["Avg on Ride Days", `${(totalMiles / Math.max(rideDays.length, 1)).toFixed(1)} mi`],
    ["Total Planned Gain", `${totalGain.toLocaleString()} ft`]
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
    resupplyExtraOptions: extraOptions,
    resupplyBikeShops: bikeShops
  };
}

function applyPlannerConfig(config) {
  if (!config || typeof config !== "object") return;
  startDateInput.value = config.startDate || startDateInput.value;
  finishDateInput.value = config.finishDate || finishDateInput.value;
  totalDaysInput.value = config.totalDays || totalDaysInput.value;
  restDaysInput.value = config.restDays || restDaysInput.value;
  routeDistanceInput.value = config.routeDistance || routeDistanceInput.value;
}

function applyPlanArray(incomingPlan) {
  if (!Array.isArray(incomingPlan)) return;
  plan = incomingPlan.map(normalizeDay);
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
  const townInput = node.querySelector(".town-input");
  const notesInput = node.querySelector(".notes-input");
  const distanceSoFarValue = node.querySelector(".day-distance-so-far-value");

  milesInput.value = normalized.miles;
  gainInput.value = normalized.gain;
  townInput.value = normalized.town;
  notesInput.value = normalized.notes;
  if (distanceSoFarValue) {
    let cumulativeMiles = 0;
    for (let i = 0; i <= index; i++) {
      const dayAtIndex = plan[i];
      if (!dayAtIndex || dayAtIndex.type === "Rest") continue;
      cumulativeMiles += Number(dayAtIndex.miles || 0);
    }
    distanceSoFarValue.textContent = `${cumulativeMiles.toFixed(1)} mi`;
  }

  if (day.type === "Rest") {
    milesInput.disabled = true;
    gainInput.disabled = true;
  }

  const sync = () => {
    plan[index] = {
      ...plan[index],
      miles: Number(milesInput.value || 0),
      gain: Number(gainInput.value || 0),
      town: townInput.value,
      notes: notesInput.value
    };
    persistPlan();

    const config = parseForm();
    if (config) renderMetrics(config, plan);
  };

  const syncMileage = () => {
    plan[index] = {
      ...plan[index],
      miles: Number(milesInput.value || 0)
    };
    recomputeDerivedFields();
    persistPlan();

    const config = parseForm();
    if (config) renderMetrics(config, plan);
    renderPlan(plan);
    if (!syncingMapAndPlan) updateStagesFromInput();
  };

  milesInput.addEventListener("change", syncMileage);

  [
    gainInput,
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
  const routeCap = Number(routeDistanceInput.value || resupplyPoints[resupplyPoints.length - 1]?.mile || 0);
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
        const routeMax = trackCumulativeMiles[trackCumulativeMiles.length - 1] || Number(routeDistanceInput.value || 0);
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
}

async function pushCloudData() {
  if (!cloudReady()) return;
  if (localAuthMode) {
    try {
      const config = parseForm();
      const result = saveLocalProfileWithFallback(authUser.email, {
        config,
        plan,
        comments,
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
    await firestoreDb.collection(PROFILE_COLLECTION).doc(authUser.uid).set(
      {
        config,
        plan,
        comments,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
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
  if (!cloudReady()) return;
  if (localAuthMode) {
    try {
      const raw = localStorage.getItem(localProfileKey(authUser.email));
      if (!raw) {
        setCloudStatus(`Signed in as ${authUser.email}. No account data yet.`);
        return;
      }
      const data = JSON.parse(raw);
      applyPlannerConfig(data.config);
      applyPlanArray(data.plan);
      applyCommentsArray(data.comments);
      setCloudStatus(`Loaded local account data for ${authUser.email}`);
    } catch {
      setCloudStatus("Failed to load local account data.");
    }
    return;
  }
  try {
    const snapshot = await firestoreDb.collection(PROFILE_COLLECTION).doc(authUser.uid).get();
    if (!snapshot.exists) {
      setCloudStatus(`Signed in as ${authUser.email}. No cloud data yet.`);
      return;
    }
    const data = snapshot.data() || {};
    applyPlannerConfig(data.config);
    applyPlanArray(data.plan);
    applyCommentsArray(data.comments);
    resetUndoBaseline();
    setCloudStatus(`Loaded cloud data for ${authUser.email}`);
  } catch {
    setCloudStatus("Cloud load failed. Using local data.");
  }
}

function initCloud() {
  if (!window.firebase || !firebaseConfigured()) {
    localAuthMode = true;
    const sessionEmail = getLocalSessionEmail();
    if (sessionEmail) {
      authUser = { uid: `local-${sessionEmail}`, email: sessionEmail };
      loadCloudData();
    } else {
      authUser = null;
      setCloudStatus("Local account mode active. Sign up or sign in below.");
    }
    return;
  }
  localAuthMode = false;
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  firebaseAuth = firebase.auth();
  firestoreDb = firebase.firestore();
  firebaseAuth.onAuthStateChanged(async (user) => {
    authUser = user || null;
    if (authUser) {
      await loadCloudData();
    } else {
      setCloudStatus("Signed out. Local-only mode active.");
    }
  });
}

function persistPlan() {
  const config = parseForm();
  if (!config) return;
  captureUndoPoint();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      config,
      plan
    })
  );
  scheduleCloudSync();
}

function loadSavedPlan() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    startDateInput.value = localDateString(new Date());
    return;
  }

  try {
    const saved = JSON.parse(raw);
    if (!saved?.config || !Array.isArray(saved?.plan)) throw new Error("Invalid plan");

    applyPlannerConfig({
      ...saved.config,
      finishDate: saved.config.finishDate || addDays(saved.config.startDate, saved.config.totalDays - 1)
    });
    applyPlanArray(saved.plan);
  } catch {
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
        ensureRouteLineVisible();
        if (routeLine) {
          map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
        }
      }, 40);
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
  const regexFallbackPoints = () => {
    const points = [];
    const re = /<(trkpt|rtept)\b[^>]*\blat="([^"]+)"[^>]*\blon="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/gi;
    let match;
    while ((match = re.exec(xmlText))) {
      const lat = Number(match[2]);
      const lon = Number(match[3]);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      const eleMatch = /<ele>([^<]+)<\/ele>/i.exec(match[4] || "");
      const eleRaw = eleMatch ? Number(eleMatch[1]) : Number.NaN;
      points.push({
        lat,
        lon,
        ele: Number.isFinite(eleRaw) ? eleRaw : null
      });
    }
    return points;
  };

  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");
  const parseError = xml.getElementsByTagName("parsererror");
  if (parseError && parseError.length) {
    return regexFallbackPoints();
  }
  const parsePointNode = (node) => {
    const eleNode = node.getElementsByTagName("ele")[0];
    const ele = eleNode ? Number(eleNode.textContent) : Number.NaN;
    return {
      lat: Number(node.getAttribute("lat")),
      lon: Number(node.getAttribute("lon")),
      ele: Number.isFinite(ele) ? ele : null
    };
  };
  const trackNodes = Array.from(xml.getElementsByTagName("trkpt"));
  const routeNodes = Array.from(xml.getElementsByTagName("rtept"));
  const sourceNodes = trackNodes.length ? trackNodes : routeNodes;
  const points = sourceNodes.map(parsePointNode);
  const normalized = points.filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
  if (normalized.length >= 2) return normalized;
  return regexFallbackPoints();
}

async function loadGpxTrackPoints(gpxFile) {
  if (!gpxFile) return [];
  const clean = String(gpxFile || "").replace(/^\.\//, "").trim();
  const encoded = clean
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  const attemptUrls = Array.from(
    new Set([
      clean,
      `./${clean}`,
      `/${clean}`,
      encoded,
      `./${encoded}`,
      `/${encoded}`,
      new URL(clean, window.location.href).toString(),
      new URL(encoded, window.location.href).toString()
    ])
  );

  let lastError = "Unknown GPX load error";
  for (const url of attemptUrls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        lastError = `HTTP ${response.status} for ${url}`;
        continue;
      }
      const xmlText = await response.text();
      const points = parseGpxTrack(xmlText);
      if (points.length >= 2) return points;
      lastError = `Parsed 0 track points from ${url}`;
    } catch (error) {
      lastError = `${error?.message || "Fetch failed"} (${url})`;
    }
  }

  throw new Error(lastError);
}

function buildFallbackTrackFromResupply() {
  const coords = resupplyPoints
    .map((point) => ({
      lat: Number(point.lat),
      lon: Number(point.lon),
      ele: null
    }))
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
  return coords.length >= 2 ? coords : [];
}

function buildTrackCumulativeMiles(trackPoints) {
  if (!trackPoints.length) return [];
  const cumulative = [0];
  for (let i = 1; i < trackPoints.length; i++) {
    cumulative[i] = cumulative[i - 1] + haversineMiles(trackPoints[i - 1], trackPoints[i]);
  }
  return cumulative;
}

function buildTrackCumulativeGainFt(trackPoints) {
  if (!trackPoints.length) return [];
  const cumulativeGain = [0];
  for (let i = 1; i < trackPoints.length; i++) {
    const prevEle = trackPoints[i - 1].ele;
    const nextEle = trackPoints[i].ele;
    if (prevEle === null || nextEle === null) {
      cumulativeGain[i] = cumulativeGain[i - 1];
      continue;
    }
    const deltaFt = (nextEle - prevEle) * 3.28084;
    cumulativeGain[i] = cumulativeGain[i - 1] + (deltaFt > 3 ? deltaFt : 0);
  }
  return cumulativeGain;
}

function nearestTrackPointAndMile(latlng) {
  if (!gpxTrackPoints.length || !trackCumulativeMiles.length) {
    return null;
  }

  let nearestIndex = 0;
  let bestDistance = Infinity;
  for (let i = 0; i < gpxTrackPoints.length; i++) {
    const point = gpxTrackPoints[i];
    const dLat = point.lat - latlng.lat;
    const dLon = point.lon - latlng.lng;
    const score = dLat * dLat + dLon * dLon;
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

  const usable = points.filter((point) => point.ele !== null);
  if (usable.length < 2) {
    return {
      elevationGainFt: 0,
      minEleFt: 0,
      maxEleFt: 0,
      totalDistanceMi: 0,
      profileSamples: []
    };
  }

  const distances = [0];
  const elevations = [usable[0].ele];
  for (let i = 1; i < usable.length; i++) {
    distances.push(distances[i - 1] + haversineMiles(usable[i - 1], usable[i]));
    elevations.push(usable[i].ele);
  }

  const totalDistance = distances[distances.length - 1];
  const sampleCount = Math.min(2000, Math.max(600, usable.length));
  const sampled = [];
  let idx = 1;
  for (let s = 0; s < sampleCount; s++) {
    const target = (totalDistance * s) / (sampleCount - 1);
    while (idx < distances.length && distances[idx] < target) idx += 1;
    const prev = Math.max(0, idx - 1);
    const next = Math.min(distances.length - 1, idx);
    const span = Math.max(1e-9, distances[next] - distances[prev]);
    const ratio = Math.max(0, Math.min(1, (target - distances[prev]) / span));
    sampled.push(elevations[prev] + (elevations[next] - elevations[prev]) * ratio);
  }

  const smoothed = smoothSeries(sampled, 3);
  let gainMeters = 0;
  for (let i = 1; i < smoothed.length; i++) {
    const delta = smoothed[i] - smoothed[i - 1];
    if (delta > 1.0) gainMeters += delta;
  }

  const minEle = Math.min(...smoothed);
  const maxEle = Math.max(...smoothed);

  return {
    elevationGainFt: Math.round(gainMeters * 3.28084),
    minEleFt: Math.round(minEle * 3.28084),
    maxEleFt: Math.round(maxEle * 3.28084),
    totalDistanceMi: Number(totalDistance.toFixed(1)),
    profileSamples: smoothed
  };
}

function renderRouteProfile() {
  if (!routeProfile || !routeProfileMeta) return;
  if (!gpxTrackPoints.length) {
    routeProfileMeta.textContent = "Elevation profile unavailable.";
    return;
  }

  if (!stageOptions.length) {
    const stageCount = Math.max(2, Math.min(120, Number(totalDaysInput.value || 2)));
    stageOptions = buildEvenStages(gpxTrackPoints, stageCount).stages;
  }

  const profile = computeSectionElevation(gpxTrackPoints);
  if (!profile.profileSamples.length) {
    routeProfileMeta.textContent = "Elevation profile unavailable.";
    return;
  }

  const minEle = Math.min(...profile.profileSamples);
  const maxEle = Math.max(...profile.profileSamples);
  const range = Math.max(maxEle - minEle, 1);
  const left = 60;
  const right = 2340;
  const top = 12;
  const bottom = 120;
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

  const points = profile.profileSamples
    .map((ele, index) => {
      const x = left + (index / (profile.profileSamples.length - 1)) * (right - left);
      const y = top + ((maxEle - ele) / range) * (bottom - top);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const resupplyIcons = resupplyPoints
    .map((point) => {
      const chartPoint = pointOnProfileForMile(point.mile);
      return (
        `<text x="${chartPoint.x.toFixed(2)}" y="${(chartPoint.y + 3.6).toFixed(
          2
        )}" text-anchor="middle" font-size="8.8">🍔` +
        `<title>${point.name} resupply - Mile ${point.mile.toFixed(1)} - Elev ${chartPoint.eleFt.toLocaleString()} ft</title>` +
        "</text>"
      );
    })
    .join("");

  const campIcons = stageOptions
    .map((stage) => {
      const endMile = Number(stage.endMile) || 0;
      const chartPoint = pointOnProfileForMile(endMile);
      const baseY = chartPoint.y + 5;
      const tipY = chartPoint.y - 5;
      const leftX = chartPoint.x - 4;
      const rightX = chartPoint.x + 4;
      return (
        `<polygon points="${leftX.toFixed(2)},${baseY} ${rightX.toFixed(2)},${baseY} ${chartPoint.x.toFixed(
          2
        )},${tipY}" fill="#1e5cc8" stroke="#123e86" stroke-width="1">` +
        `<title>Day ${stage.stage} camp - Mile ${endMile.toFixed(1)} - Elev ${chartPoint.eleFt.toLocaleString()} ft</title>` +
        "</polygon>"
      );
    })
    .join("");

  routeProfile.innerHTML = [
    '<rect x="0" y="0" width="2400" height="160" fill="#f6f2e8"></rect>',
    '<line x1="60" y1="12" x2="60" y2="120" stroke="#9f9687" stroke-width="1"></line>',
    '<line x1="60" y1="120" x2="2340" y2="120" stroke="#9f9687" stroke-width="1"></line>',
    `<polyline points="${points}" fill="none" stroke="#c62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`,
    resupplyIcons,
    campIcons
  ].join("");

  routeProfileMeta.textContent = `Min ${profile.minEleFt.toLocaleString()} ft • Max ${profile.maxEleFt.toLocaleString()} ft`;
  const defaultMeta = routeProfileMeta.textContent;

  const hoverLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  hoverLine.setAttribute("x1", "60");
  hoverLine.setAttribute("y1", "12");
  hoverLine.setAttribute("x2", "60");
  hoverLine.setAttribute("y2", "120");
  hoverLine.setAttribute("stroke", "#b03030");
  hoverLine.setAttribute("stroke-width", "1");
  hoverLine.setAttribute("visibility", "hidden");
  routeProfile.appendChild(hoverLine);

  const hoverDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  hoverDot.setAttribute("cx", "60");
  hoverDot.setAttribute("cy", "120");
  hoverDot.setAttribute("r", "2.4");
  hoverDot.setAttribute("fill", "#c62828");
  hoverDot.setAttribute("stroke", "#ffffff");
  hoverDot.setAttribute("stroke-width", "0.8");
  hoverDot.setAttribute("visibility", "hidden");
  routeProfile.appendChild(hoverDot);

  routeProfile.onmousemove = (event) => {
    const ctm = routeProfile.getScreenCTM();
    if (!ctm) return;
    const svgPoint = routeProfile.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;
    const local = svgPoint.matrixTransform(ctm.inverse());
    const clampedX = Math.max(left, Math.min(right, local.x));
    const ratio = (clampedX - left) / (right - left);
    const mile = ratio * profile.totalDistanceMi;
    const chartPoint = pointOnProfileForMile(mile);
    const clampedY = Math.max(top, Math.min(bottom, chartPoint.y));

    hoverLine.setAttribute("x1", clampedX.toFixed(2));
    hoverLine.setAttribute("x2", clampedX.toFixed(2));
    hoverLine.setAttribute("visibility", "visible");
    hoverDot.setAttribute("cx", clampedX.toFixed(2));
    hoverDot.setAttribute("cy", clampedY.toFixed(2));
    hoverDot.setAttribute("visibility", "visible");
    routeProfileMeta.textContent = `Mile ${mile.toFixed(1)} / ${profile.totalDistanceMi.toFixed(1)} • Elevation ${chartPoint.eleFt.toLocaleString()} ft`;
  };

  routeProfile.onmouseleave = () => {
    hoverLine.setAttribute("visibility", "hidden");
    hoverDot.setAttribute("visibility", "hidden");
    routeProfileMeta.textContent = defaultMeta;
  };

  applyRouteProfileZoom(true);
}

function applyRouteProfileZoom(preserveScroll) {
  if (!routeProfile || !routeProfileScrollWrap) return;
  const zoom = Math.max(0.25, Number(routeProfileZoom?.value || 1));
  const previousMax = Math.max(0, routeProfileScrollWrap.scrollWidth - routeProfileScrollWrap.clientWidth);
  const previousRatio = previousMax > 0 ? routeProfileScrollWrap.scrollLeft / previousMax : 0;

  routeProfile.style.width = `${ROUTE_PROFILE_BASE_WIDTH * zoom}px`;
  if (routeProfileZoom) {
    routeProfileZoom.value = String(zoom);
  }

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
    for (let p = 1; p < points.length; p++) {
      cumulativeMiles[p] = cumulativeMiles[p - 1] + haversineMiles(points[p - 1], points[p]);
    }
    const sectionDistanceMi = cumulativeMiles[cumulativeMiles.length - 1] || 0;

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
    const dLat = section.points[i].lat - latlng.lat;
    const dLon = section.points[i].lon - latlng.lng;
    const score = dLat * dLat + dLon * dLon;
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
      '<text x="14" y="49" font-size="3.5" fill="#5f695f">distance (mi)</text>',
      '<text x="1.5" y="8" font-size="3.5" fill="#5f695f">elev</text>'
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
    mapSectionElevation.textContent = `Elevation Gain: ${sectionInfo.elevationGainFt.toLocaleString()} ft`;
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
      const halfDistance = (sectionInfo.totalDistanceMi / 2).toFixed(1);

      mapSectionProfile.innerHTML = [
        '<rect x="0" y="0" width="120" height="52" fill="#f6f2e8"></rect>',
        '<line x1="12" y1="6" x2="12" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
        '<line x1="12" y1="42" x2="112" y2="42" stroke="#9f9687" stroke-width="0.6"></line>',
        `<line x1="12" y1="${midTickY}" x2="112" y2="${midTickY}" stroke="#e2d8c8" stroke-width="0.5"></line>`,
        `<polyline points="${points}" fill="none" stroke="#c62828" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></polyline>`,
        `<text x="14" y="49" font-size="3.5" fill="#5f695f">0</text>`,
        `<text x="59" y="49" font-size="3.5" fill="#5f695f">${halfDistance}</text>`,
        `<text x="104" y="49" font-size="3.5" fill="#5f695f">${sectionInfo.totalDistanceMi.toFixed(1)} mi</text>`,
        `<text x="1.2" y="9" font-size="3.2" fill="#5f695f">${sectionInfo.maxEleFt.toLocaleString()}</text>`,
        `<text x="1.2" y="${(midTickY + 1.5).toFixed(2)}" font-size="3.2" fill="#5f695f">${midEleFt.toLocaleString()}</text>`,
        `<text x="1.2" y="42" font-size="3.2" fill="#5f695f">${sectionInfo.minEleFt.toLocaleString()}</text>`
      ].join("");
      mapSectionProfileMeta.textContent = `Min ${sectionInfo.minEleFt.toLocaleString()} ft • Max ${sectionInfo.maxEleFt.toLocaleString()} ft`;

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
        mapSectionProfileMeta.textContent = `Mile ${targetDist.toFixed(1)} / ${sectionInfo.sectionDistanceMi.toFixed(1)} • Elevation ${nearestEleFt.toLocaleString()} ft`;
      };

      mapSectionProfile.onmouseleave = () => {
        hoverLine.setAttribute("visibility", "hidden");
        hoverDot.setAttribute("visibility", "hidden");
        mapSectionProfileMeta.textContent = `Min ${sectionInfo.minEleFt.toLocaleString()} ft • Max ${sectionInfo.maxEleFt.toLocaleString()} ft`;
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
        color: selectedSectionName === section.name ? "#eb5e28" : "#2f7a62",
        weight: selectedSectionName === section.name ? 6 : 4,
        opacity: selectedSectionName === section.name ? 0.75 : 0.3,
        pane: "section-pane"
      }
    )
      .addTo(sectionLayer);
    safeBringToBack(sectionLine);

    sectionLine
      .bindTooltip(section.name, { sticky: true })
      .on("mousemove", (event) => {
        const nearestIndex = nearestSectionPoint(section, event.latlng);
        const nearestPoint = section.points[nearestIndex];
        const sectionMile = section.cumulativeMiles[nearestIndex] || 0;
        const fromBanff = Number(section.startMile) + sectionMile;
        const elevText =
          nearestPoint.ele === null ? "Elevation: unavailable" : `Elevation: ${Math.round(nearestPoint.ele * 3.28084).toLocaleString()} ft`;
        const content =
          `${section.name}<br/>${elevText}<br/>From Banff: ${fromBanff.toFixed(1)} mi` +
          `<br/>Section: ${sectionMile.toFixed(1)} / ${section.sectionDistanceMi.toFixed(1)} mi`;
        sectionLine.setTooltipContent(content);
      })
      .on("click", () => {
        renderMapSectionComments(section.name);
        drawSectionOverlays();
      });
  });
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

function safeBringToFront(layer) {
  if (!layer || typeof layer.bringToFront !== "function") return;
  try {
    layer.bringToFront();
  } catch {
    // no-op
  }
}

function safeBringToBack(layer) {
  if (!layer || typeof layer.bringToBack !== "function") return;
  try {
    layer.bringToBack();
  } catch {
    // no-op
  }
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
    if (!marker._dragGuide) {
      marker._dragGuide = L.polyline(
        [
          [latlng.lat, latlng.lng],
          [nearest.point.lat, nearest.point.lon]
        ],
        { color: "#c62828", weight: 2, dashArray: "4 4", opacity: 0.85, pane: "guide-pane" }
      ).addTo(map);
    } else {
      marker._dragGuide.setLatLngs([
        [latlng.lat, latlng.lng],
        [nearest.point.lat, nearest.point.lon]
      ]);
    }
  });

  marker.on("dragend", () => {
    const nearest = nearestTrackPointAndMile(marker.getLatLng());
    if (!nearest) return;
    marker.setLatLng([nearest.point.lat, nearest.point.lon]);
    clearMarkerGuide(marker);

    if (type === "day" && stageOptions[index]) {
      stageOptions[index].lat = nearest.point.lat;
      stageOptions[index].lon = nearest.point.lon;
      stageOptions[index].endMile = nearest.mile.toFixed(1);
      const prevEnd = index === 0 ? 0 : Number(stageOptions[index - 1].endMile || 0);
      stageOptions[index].startMile = prevEnd.toFixed(1);
      if (stageOptions[index + 1]) {
        stageOptions[index + 1].startMile = stageOptions[index].endMile;
      }
      marker.bindPopup(`Day ${stageOptions[index].stage}<br/>${stageOptions[index].startMile}-${stageOptions[index].endMile} mi`);
      syncPlanMilesFromStageOptions();
    }

    if (type === "resupply" && resupplyPoints[index]) {
      resupplyPoints[index].lat = nearest.point.lat;
      resupplyPoints[index].lon = nearest.point.lon;
      resupplyPoints[index].mile = Number(nearest.mile.toFixed(1));
      marker.bindPopup(
        `<strong>${resupplyPoints[index].name}</strong><br/>Mile ${resupplyPoints[index].mile}<br/>${resupplyPoints[index].resupply}`
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
  markerList.innerHTML = "";

  if (!stageOptions.length) {
    const stageCount = Math.max(2, Math.min(120, Number(totalDaysInput.value || 2)));
    const total = Number(routeDistanceInput.value || 0);
    const rough = [];
    let start = 0;
    for (let i = 1; i <= stageCount; i++) {
      const end = i === stageCount ? total : (total * i) / stageCount;
      rough.push({
        stage: i,
        startMile: start.toFixed(1),
        endMile: end.toFixed(1)
      });
      start = end;
    }
    stageOptions = rough;
  }

  stageOptions.forEach((day, idx) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Day ${day.stage}</strong><p class="marker-mile">${Number(day.startMile || 0).toFixed(1)}-${Number(day.endMile || 0).toFixed(1)} miles</p>`;
    item.addEventListener("click", () => {
      if (!map) return;
      const marker = dayMarkers[idx];
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.55 });
      marker.openPopup();
    });
    markerList.appendChild(item);
  });

  resupplyPoints.forEach((point, idx) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${point.name}</strong><p class="marker-mile">Mile ${point.mile}: ${point.resupply}</p>`;
    item.addEventListener("click", () => {
      if (!map) return;
      const marker = resupplyMarkers[idx];
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.55 });
      marker.openPopup();
    });
    markerList.appendChild(item);
  });
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

function getTrackCoords(trackPoints) {
  return (trackPoints || [])
    .map((point) => [Number(point.lat), Number(point.lon)])
    .filter((pair) => Number.isFinite(pair[0]) && Number.isFinite(pair[1]));
}

function drawMainRouteLine(trackPoints) {
  if (!map) return null;
  const coords = getTrackCoords(trackPoints);
  if (coords.length < 2) return null;
  routeLine = L.polyline(coords, {
    color: "#c62828",
    weight: 3,
    opacity: 0.95,
    pane: "route-pane"
  }).addTo(map);
  safeBringToFront(routeLine);
  return routeLine;
}

function drawFallbackRouteLine(trackPoints, shouldFitBounds) {
  if (!map) return null;
  const coords = getTrackCoords(trackPoints);
  if (coords.length < 2) return null;
  const fallbackLine = L.polyline(coords, {
    color: "#c62828",
    weight: 3,
    opacity: 0.95,
    pane: "route-pane"
  }).addTo(map);
  if (shouldFitBounds && fallbackLine.getBounds && fallbackLine.getBounds().isValid()) {
    map.fitBounds(fallbackLine.getBounds(), { padding: [30, 30] });
  }
  return fallbackLine;
}

function ensureMapPanes() {
  if (!map) return;
  if (!map.getPane("section-pane")) {
    const pane = map.createPane("section-pane");
    pane.style.zIndex = "420";
  }
  if (!map.getPane("route-pane")) {
    const pane = map.createPane("route-pane");
    pane.style.zIndex = "430";
  }
  if (!map.getPane("guide-pane")) {
    const pane = map.createPane("guide-pane");
    pane.style.zIndex = "440";
  }
}

function ensureRouteLineVisible() {
  if (!map || gpxTrackPoints.length < 2) return;
  if (routeLine && map.hasLayer(routeLine)) return;
  drawMainRouteLine(gpxTrackPoints);
}

function applyTrackToMap(trackPoints, options = {}) {
  if (!map || !trackPoints.length) return;
  const { fitBounds = true, rebuildPlan = false } = options;

  gpxTrackPoints = trackPoints;
  trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);
  trackCumulativeGainFt = buildTrackCumulativeGainFt(gpxTrackPoints);

  if (routeLine && map.hasLayer(routeLine)) map.removeLayer(routeLine);
  if (stageLayer) stageLayer.clearLayers();
  if (resupplyLayer) resupplyLayer.clearLayers();
  if (sectionLayer) sectionLayer.clearLayers();
  if (dragGuideLayer) dragGuideLayer.clearLayers();
  dayMarkers = [];
  resupplyMarkers = [];

  drawMainRouteLine(gpxTrackPoints);

  const gpxTotals = buildEvenStages(gpxTrackPoints, 2);
  if (gpxTotals.totalMiles > 0) {
    routeDistanceInput.value = String(Math.round(gpxTotals.totalMiles));
  }

  renderResupplyMarkers();
  routeSections = buildResupplySections(gpxTrackPoints);
  renderRouteProfile();
  try {
    drawSectionOverlays();
    renderMapSectionComments("");
  } catch (error) {
    if (mapSubhead) {
      mapSubhead.textContent = `Route loaded, but section render failed: ${error?.message || "Unknown error"}`;
    }
  }

  if (fitBounds && routeLine) {
    map.fitBounds(routeLine.getBounds(), {
      padding: [30, 30]
    });
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
    if (mapSubhead) {
      mapSubhead.textContent = `Route loaded, but day marker render failed: ${error?.message || "Unknown error"}`;
    }
  }
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
  mapboxFallbackActive = false;

  if (map) {
    try {
      map.remove();
    } catch {
      // no-op
    }
    map = null;
  }

  map = L.map("route-map", {
    zoomControl: true,
    minZoom: 4,
    maxZoom: 13
  });
  ensureMapPanes();
  L.control.scale({ imperial: true, metric: false, maxWidth: 120 }).addTo(map);

  const mapboxLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`,
    {
      tileSize: 256,
      zoomOffset: 0,
      attribution:
        '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );

  const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    tileSize: 256,
    zoomOffset: 0,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let mapboxFailed = false;
  mapboxLayer.on("tileerror", () => {
    if (mapboxFailed) return;
    mapboxFailed = true;
    mapboxFallbackActive = true;
    if (activeBaseLayer) map.removeLayer(activeBaseLayer);
    activeBaseLayer = osmLayer.addTo(map);
    const current = String(mapSubhead?.textContent || "");
    const hasNonTileError = current.includes("error:") || current.includes("failed:");
    if (mapSubhead && !hasNonTileError) {
      mapSubhead.textContent =
        "Mapbox tiles failed to load here, so this view switched to OpenStreetMap automatically.";
    }
  });

  activeBaseLayer = mapboxLayer.addTo(map);
  stageLayer = L.layerGroup().addTo(map);
  resupplyLayer = L.layerGroup().addTo(map);
  sectionLayer = L.layerGroup().addTo(map);
  dragGuideLayer = L.layerGroup().addTo(map);

  let trackPoints = [];
  let gpxLoadWarning = "";
  try {
    if (isCustomRouteActive() && customUploadedTrackPoints.length >= 2) {
      trackPoints = customUploadedTrackPoints;
    } else if (GPX_FILE) {
      trackPoints = await loadGpxTrackPoints(GPX_FILE);
    }
  } catch (error) {
    gpxLoadWarning = error?.message ? `GPX load warning: ${error.message}` : "GPX load warning.";
  }

  if (trackPoints.length < 2) {
    const fallbackTrack = buildFallbackTrackFromResupply();
    if (fallbackTrack.length >= 2) {
      trackPoints = fallbackTrack;
      if (mapSubhead) {
        mapSubhead.textContent = gpxLoadWarning
          ? `${gpxLoadWarning} Showing fallback route from stop coordinates.`
          : "Using fallback route from stop coordinates.";
      }
    } else {
      markerList.innerHTML =
        `<li><p class="empty-note">Could not load GPX route file. ${isCustomRouteActive() ? "Upload a custom GPX in Plan tab." : `Check that ${GPX_FILE} is in the project root.`}</p></li>`;
      if (mapSubhead) {
        mapSubhead.textContent = gpxLoadWarning || "GPX load error: Not enough track points in GPX.";
      }
      setupCommentSections();
      return;
    }
  }

  try {
    applyTrackToMap(trackPoints, { fitBounds: true, rebuildPlan: !plan.length });
    if (isCustomRouteActive()) renderCustomStopEditor();
    renderMarkerList();
  } catch (error) {
    if (mapSubhead) {
      mapSubhead.textContent = `Map render error: ${error?.message || "Unknown error"}`;
    }
    // Safety fallback: draw the raw GPX polyline so route remains visible even if advanced rendering fails.
    try {
      drawFallbackRouteLine(trackPoints, true);
    } catch {
      // no-op
    }
    renderMarkerList();
  }

  setupCommentSections();
}

function updateStagesFromInput() {
  if (!gpxTrackPoints.length || !stageLayer) return;

  const stageCount = Math.max(2, Math.min(120, Number(totalDaysInput.value || 2)));
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
      ? `Using OpenStreetMap fallback. GPX loaded with ${stageCount} days (from projected days).`
      : `Loaded from your GPX file with ${stageCount} days (from projected days).`;
  }

  stageLayer.clearLayers();
  if (resupplyLayer && !resupplyMarkers.length) {
    renderResupplyMarkers();
  }
  dayMarkers.forEach((marker) => clearMarkerGuide(marker));
  dayMarkers = [];

  stageOptions.forEach((stage, index) => {
    const lat = Number(stage.lat);
    const lon = Number(stage.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
    const marker = L.marker([lat, lon], { icon: makeDayIcon(), draggable: true })
      .addTo(stageLayer)
      .bindPopup(`Day ${stage.stage}<br/>${stage.startMile}-${stage.endMile} mi`);
    safeBringToFront(marker);
    attachDragHandlers(marker, "day", index);
    dayMarkers.push(marker);
  });

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
  routeDistanceInput.value = String(resupplyPoints[resupplyPoints.length - 1]?.mile || 0);
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

if (customApplyUploadBtn) {
  customApplyUploadBtn.addEventListener("click", async () => {
    if (!isCustomRouteActive()) {
      setCloudStatus("Switch to Create Your Own Ride first.");
      return;
    }
    const file = customUploadedFile || customGpxFileInput?.files?.[0];
    if (!file) {
      setCloudStatus("Choose a GPX file first.");
      return;
    }

    try {
      const xmlText = await file.text();
      const points = parseGpxTrack(xmlText);
      if (points.length < 2) {
        setCloudStatus("That GPX file does not have enough track points.");
        return;
      }

      customUploadedTrackPoints = points;
      const cumulative = buildTrackCumulativeMiles(points);
      const totalMiles = cumulative[cumulative.length - 1] || 0;
      const projectedDays = Math.max(2, Math.min(120, Number(customProjectedDaysInput?.value || 20)));
      const projectedStops = Math.max(2, Math.min(60, Number(customProjectedResuppliesInput?.value || 12)));
      totalDaysInput.value = String(projectedDays);
      if (startDateInput.value) finishDateInput.value = addDays(startDateInput.value, projectedDays - 1);
      routeDistanceInput.value = String(Math.round(totalMiles));
      localStorage.removeItem(CUSTOM_STOPS_KEY);
      selectedSectionName = "";
      resupplyPoints = buildEvenResupplyPointsFromTrack(points, projectedStops, cumulative).map((point) => ({
        ...point,
        isCustom: true
      }));
      saveCustomResupplyStops();

      if (map) {
        applyTrackToMap(points, { fitBounds: true, rebuildPlan: true });
      }
      renderCustomStopEditor();
      customGpxStatus.textContent = `Uploaded ${file.name} • ${totalMiles.toFixed(1)} mi`;
      setCloudStatus("Custom GPX uploaded and route built.");
    } catch {
      setCloudStatus("Could not read that GPX file.");
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
    const routeMax = Number(routeDistanceInput.value || resupplyPoints[resupplyPoints.length - 1]?.mile || 0);

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

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const routeId = button.dataset.route;
    if (!routeId || !ROUTES[routeId]) return;
    if (ROUTES[routeId].comingSoon) {
      if (routeSwitcherNote) routeSwitcherNote.textContent = `${ROUTES[routeId].label} is coming next. Tour Divide and Colorado Trail are live now.`;
      return;
    }
    window.location.href = routeUrl(routeId);
  });
});

if (dragModeBtn) {
  dragModeBtn.addEventListener("click", () => {
    dragModeEnabled = !dragModeEnabled;
    applyDragModeToMarkers();
  });
}

if (fitRouteBtn) {
  fitRouteBtn.addEventListener("click", () => {
    if (!map || !routeLine) return;
    map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
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

signUpBtn.addEventListener("click", async () => {
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
    await pushCloudData();
    return;
  }
  if (!firebaseAuth) {
    setCloudStatus("Cloud auth is not configured yet.");
    return;
  }
  try {
    await firebaseAuth.createUserWithEmailAndPassword(email, password);
    setCloudStatus(`Account created for ${email}.`);
    await pushCloudData();
  } catch (error) {
    setCloudStatus(`Sign up failed: ${error.message}`);
  }
});

signInBtn.addEventListener("click", async () => {
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
    await loadCloudData();
    return;
  }
  if (!firebaseAuth) {
    setCloudStatus("Cloud auth is not configured yet.");
    return;
  }
  try {
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    setCloudStatus(`Signed in as ${email}.`);
  } catch (error) {
    setCloudStatus(`Sign in failed: ${error.message}`);
  }
});

signOutBtn.addEventListener("click", async () => {
  if (localAuthMode) {
    authUser = null;
    clearLocalSessionEmail();
    setCloudStatus("Signed out of local account.");
    return;
  }
  if (!firebaseAuth) return;
  await firebaseAuth.signOut();
  setCloudStatus("Signed out. Local-only mode active.");
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

if (homeOpenActiveBtn) {
  homeOpenActiveBtn.addEventListener("click", () => {
    window.location.href = routeUrl(getRouteFromUrl());
  });
}

commentSectionSelect.addEventListener("change", () => {
  renderMapSectionComments(commentSectionSelect.value);
  drawSectionOverlays();
});

if (!applyRouteConfig(getRouteFromUrl())) {
  applyRouteConfig(DEFAULT_ROUTE_ID);
}
setHomeMode(viewModeFromUrl() === "home");
enforceSiteBranding();
setDragButtonState();
setupAccountMenu();
initCloud();
setupTabs();
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
