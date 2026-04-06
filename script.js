const MAPBOX_ACCESS_TOKEN = "";
  "....";

const MAPBOX_ACCESS_TOKEN = "";

git add script.js
git commit --amend -m "Initial Tour Divide planner"
git push -u origin main --force

cd "/Users/noahbodewes/Documents/New project/Tour divide /XcodeImport/www"
sed -i '' 's|^const MAPBOX_ACCESS_TOKEN =.*$|const MAPBOX_ACCESS_TOKEN = "";|' script.js


git add script.js
git commit --amend -m "Initial Tour Divide planner"
git push -u origin main --force



const STORAGE_KEY = "tour-divide-plan-v1";
const COMMENTS_KEY = "tour-divide-comments-v1";
const LOCAL_ACCOUNTS_KEY = "tour-divide-local-accounts-v1";
const LOCAL_AUTH_SESSION_KEY = "tour-divide-local-session-v1";
const LOCAL_PROFILE_PREFIX = "tour-divide-local-profile-v1:";
const GPX_FILE = "TourDivide2025_v2.gpx";
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: ""
};
const MAPBOX_STYLE_ID = "mapbox/outdoors-v12";
const MAPBOX_ACCESS_TOKEN = "";
const ROUTE_PROFILE_BASE_WIDTH = 2400;

const resupplyPoints = [
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
];

const form = document.getElementById("plan-form");
const startDateInput = document.getElementById("start-date");
const finishDateInput = document.getElementById("finish-date");
const totalDaysInput = document.getElementById("total-days");
const restDaysInput = document.getElementById("rest-days");
const routeDistanceInput = document.getElementById("route-distance");
const dayList = document.getElementById("day-list");
const metricList = document.getElementById("metric-list");
const dayTemplate = document.getElementById("day-template");
const resupplyTemplate = document.getElementById("resupply-template");
const resetBtn = document.getElementById("reset-btn");
const exportBtn = document.getElementById("export-btn");
const cloudStatus = document.getElementById("cloud-status");
const authEmailInput = document.getElementById("auth-email");
const authPasswordInput = document.getElementById("auth-password");
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");
const syncNowBtn = document.getElementById("sync-now-btn");

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
let dayMarkers = [];
let resupplyMarkers = [];
let dragGuideLayer;
let dragModeEnabled = false;
let selectedSectionName = "";
let activeBaseLayer;
let mapboxFallbackActive = false;
let firebaseAuth = null;
let firestoreDb = null;
let authUser = null;
let cloudSyncTimer = null;
let localAuthMode = false;

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
    cumulativeMiles = Math.min(config.routeDistance, cumulativeMiles + rideMiles);
    day.gain = Math.round(rideMiles * elevationFactor(cumulativeMiles, config.routeDistance));
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
      resupplyOptions2: isRest ? "Backup convenience store" : "Backup convenience store",
      resupplyHours2: "7:00 AM - 8:00 PM",
      resupplyDistance2: isRest ? 0.4 : 0.8,
      resupplyOptions3: "Emergency stop / vending",
      resupplyHours3: "Limited or 24h",
      resupplyDistance3: isRest ? 0.6 : 1.2,
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
  return {
    ...day,
    resupplyOptions1: day.resupplyOptions1 || day.resupplyOptions || day.resupply || "",
    resupplyHours1: day.resupplyHours1 || day.resupplyHours || "",
    resupplyDistance1: Number(day.resupplyDistance1 ?? day.resupplyDistance ?? 0),
    resupplyOptions2: day.resupplyOptions2 || "",
    resupplyHours2: day.resupplyHours2 || "",
    resupplyDistance2: Number(day.resupplyDistance2 || 0),
    resupplyOptions3: day.resupplyOptions3 || "",
    resupplyHours3: day.resupplyHours3 || "",
    resupplyDistance3: Number(day.resupplyDistance3 || 0),
    shoppingList: day.shoppingList || "",
    calorieTarget: Number(day.calorieTarget || 0),
    daysUntilNextResupply: Number(day.daysUntilNextResupply || 1),
    resupplyNotes: day.resupplyNotes || ""
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

  milesInput.value = normalized.miles;
  gainInput.value = normalized.gain;
  townInput.value = normalized.town;
  notesInput.value = normalized.notes;

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
  const routeCap = Number(routeDistanceInput.value || 2745);
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

  const resupplyOptions1Input = node.querySelector(".resupply-options-1-input");
  const resupplyHours1Input = node.querySelector(".resupply-hours-1-input");
  const resupplyDistance1Input = node.querySelector(".resupply-distance-1-input");
  const resupplyOptions2Input = node.querySelector(".resupply-options-2-input");
  const resupplyHours2Input = node.querySelector(".resupply-hours-2-input");
  const resupplyDistance2Input = node.querySelector(".resupply-distance-2-input");
  const resupplyOptions3Input = node.querySelector(".resupply-options-3-input");
  const resupplyHours3Input = node.querySelector(".resupply-hours-3-input");
  const resupplyDistance3Input = node.querySelector(".resupply-distance-3-input");
  const shoppingListInput = node.querySelector(".shopping-list-input");
  const daysUntilInput = node.querySelector(".days-until-input");
  const calorieInput = node.querySelector(".calorie-input");
  const resupplyNotesInput = node.querySelector(".resupply-notes-input");

  resupplyOptions1Input.value = normalized.resupplyOptions1;
  resupplyHours1Input.value = normalized.resupplyHours1;
  resupplyDistance1Input.value = normalized.resupplyDistance1;
  resupplyOptions2Input.value = normalized.resupplyOptions2;
  resupplyHours2Input.value = normalized.resupplyHours2;
  resupplyDistance2Input.value = normalized.resupplyDistance2;
  resupplyOptions3Input.value = normalized.resupplyOptions3;
  resupplyHours3Input.value = normalized.resupplyHours3;
  resupplyDistance3Input.value = normalized.resupplyDistance3;
  shoppingListInput.value = normalized.shoppingList;
  calorieInput.value = normalized.calorieTarget;
  daysUntilInput.value = Number(normalized.daysUntilNextResupply || daysUntilNext || 1);
  resupplyNotesInput.value = normalized.resupplyNotes;

  const sync = () => {
    plan[dayIndex] = {
      ...plan[dayIndex],
      resupplyOptions1: resupplyOptions1Input.value,
      resupplyHours1: resupplyHours1Input.value,
      resupplyDistance1: Number(resupplyDistance1Input.value || 0),
      resupplyOptions2: resupplyOptions2Input.value,
      resupplyHours2: resupplyHours2Input.value,
      resupplyDistance2: Number(resupplyDistance2Input.value || 0),
      resupplyOptions3: resupplyOptions3Input.value,
      resupplyHours3: resupplyHours3Input.value,
      resupplyDistance3: Number(resupplyDistance3Input.value || 0),
      shoppingList: shoppingListInput.value,
      calorieTarget: Number(calorieInput.value || 0),
      daysUntilNextResupply: Number(daysUntilInput.value || 1),
      resupplyNotes: resupplyNotesInput.value
    };
    persistPlan();
  };

  [
    resupplyOptions1Input,
    resupplyHours1Input,
    resupplyDistance1Input,
    resupplyOptions2Input,
    resupplyHours2Input,
    resupplyDistance2Input,
    resupplyOptions3Input,
    resupplyHours3Input,
    resupplyDistance3Input,
    shoppingListInput,
    daysUntilInput,
    calorieInput,
    resupplyNotesInput
  ].forEach((input) => {
    input.addEventListener("input", sync);
  });

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
    await firestoreDb.collection("tour_divide_profiles").doc(authUser.uid).set(
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
    const snapshot = await firestoreDb.collection("tour_divide_profiles").doc(authUser.uid).get();
    if (!snapshot.exists) {
      setCloudStatus(`Signed in as ${authUser.email}. No cloud data yet.`);
      return;
    }
    const data = snapshot.data() || {};
    applyPlannerConfig(data.config);
    applyPlanArray(data.plan);
    applyCommentsArray(data.comments);
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

function exportCsv() {
  if (!plan.length) return;

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
    "ResupplyOption2",
    "Hours2",
    "DistanceFromRouteMi2",
    "ResupplyOption3",
    "Hours3",
    "DistanceFromRouteMi3",
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
    d.resupplyOptions1 || "",
    d.resupplyHours1 || "",
    d.resupplyDistance1 || 0,
    d.resupplyOptions2 || "",
    d.resupplyHours2 || "",
    d.resupplyDistance2 || 0,
    d.resupplyOptions3 || "",
    d.resupplyHours3 || "",
    d.resupplyDistance3 || 0,
    d.shoppingList || "",
    d.calorieTarget || 0,
    d.notes
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tour-divide-day-by-day-plan.csv";
  link.click();
  URL.revokeObjectURL(url);
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
  const points = Array.from(xml.getElementsByTagName("trkpt")).map((node) => {
    const eleNode = node.getElementsByTagName("ele")[0];
    const ele = eleNode ? Number(eleNode.textContent) : Number.NaN;
    return {
      lat: Number(node.getAttribute("lat")),
      lon: Number(node.getAttribute("lon")),
      ele: Number.isFinite(ele) ? ele : null
    };
  });

  return points.filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
}

function buildTrackCumulativeMiles(trackPoints) {
  if (!trackPoints.length) return [];
  const cumulative = [0];
  for (let i = 1; i < trackPoints.length; i++) {
    cumulative[i] = cumulative[i - 1] + haversineMiles(trackPoints[i - 1], trackPoints[i]);
  }
  return cumulative;
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
  const iconY = 132;

  const points = profile.profileSamples
    .map((ele, index) => {
      const x = left + (index / (profile.profileSamples.length - 1)) * (right - left);
      const y = top + ((maxEle - ele) / range) * (bottom - top);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const resupplyIcons = resupplyPoints
    .map((point) => {
      const ratio = Math.max(0, Math.min(1, point.mile / Math.max(profile.totalDistanceMi, 1)));
      const x = left + ratio * (right - left);
      return `<circle cx="${x.toFixed(2)}" cy="${iconY}" r="4" fill="#eb5e28" stroke="#a6451d" stroke-width="1" />`;
    })
    .join("");

  const campIcons = stageOptions
    .map((stage) => {
      const endMile = Number(stage.endMile) || 0;
      const ratio = Math.max(0, Math.min(1, endMile / Math.max(profile.totalDistanceMi, 1)));
      const x = left + ratio * (right - left);
      const baseY = iconY + 6;
      const tipY = iconY - 4;
      const leftX = x - 4;
      const rightX = x + 4;
      return `<polygon points="${leftX.toFixed(2)},${baseY} ${rightX.toFixed(
        2
      )},${baseY} ${x.toFixed(2)},${tipY}" fill="#1d7f5b" stroke="#134f3a" stroke-width="1" />`;
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
        weight: selectedSectionName === section.name ? 8 : 6,
        opacity: selectedSectionName === section.name ? 0.85 : 0.45
      }
    )
      .addTo(sectionLayer);

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
    className: "map-icon",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    html:
      '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M7 3c0 6-3 7-3 11a8 8 0 0 0 16 0c0-4-3-5-3-11h-2c0 4 3 6 3 11a6 6 0 0 1-12 0c0-5 3-7 3-11z" fill="#eb5e28" stroke="#a6451d" stroke-width="1"/>' +
      '<circle cx="12" cy="15" r="2.4" fill="#fff4e6"/>' +
      "</svg>"
  });
}

function makeDayIcon() {
  return L.divIcon({
    className: "map-icon",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    html:
      '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M4 18l8-12 8 12H4z" fill="#1d7f5b" stroke="#134f3a" stroke-width="1"/>' +
      '<path d="M10 18v-4h4v4" fill="#fffefb" stroke="#134f3a" stroke-width="1"/>' +
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
        { color: "#c62828", weight: 2, dashArray: "4 4", opacity: 0.85 }
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
      marker.bindPopup(`Day ${stageOptions[index].stage}<br/>${stageOptions[index].startMile}-${stageOptions[index].endMile} mi`);
    }

    if (type === "resupply" && resupplyPoints[index]) {
      resupplyPoints[index].lat = nearest.point.lat;
      resupplyPoints[index].lon = nearest.point.lon;
      resupplyPoints[index].mile = Number(nearest.mile.toFixed(1));
      marker.bindPopup(
        `<strong>${resupplyPoints[index].name}</strong><br/>Mile ${resupplyPoints[index].mile}<br/>${resupplyPoints[index].resupply}`
      );
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

  stageOptions.forEach((day, idx) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Day ${day.stage}</strong><p class="marker-mile">${day.startMile}-${day.endMile} miles</p>`;
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

function applyDragModeToMarkers() {
  dayMarkers.forEach((marker) => setMarkerDragState(marker));
  resupplyMarkers.forEach((marker) => setMarkerDragState(marker));
  setDragButtonState();
}

async function initMap() {
  const mapElement = document.getElementById("route-map");
  if (!mapElement || typeof L === "undefined") return;

  map = L.map("route-map", {
    zoomControl: true,
    minZoom: 4,
    maxZoom: 13
  });
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
    if (mapSubhead) {
      mapSubhead.textContent =
        "Mapbox tiles failed to load here, so this view switched to OpenStreetMap automatically.";
    }
  });

  activeBaseLayer = mapboxLayer.addTo(map);

  try {
    const response = await fetch(GPX_FILE);
    if (!response.ok) throw new Error(`Failed GPX load: ${response.status}`);
    const xmlText = await response.text();
    gpxTrackPoints = parseGpxTrack(xmlText);
    if (gpxTrackPoints.length < 2) throw new Error("Not enough track points in GPX");
    trackCumulativeMiles = buildTrackCumulativeMiles(gpxTrackPoints);

    const coords = gpxTrackPoints.map((point) => [point.lat, point.lon]);
    routeLine = L.polyline(coords, {
      color: "#1d7f5b",
      weight: 3,
      opacity: 0.85
    }).addTo(map);

    stageLayer = L.layerGroup().addTo(map);
    resupplyLayer = L.layerGroup().addTo(map);
    sectionLayer = L.layerGroup().addTo(map);
    dragGuideLayer = L.layerGroup().addTo(map);

    const gpxTotals = buildEvenStages(gpxTrackPoints, 2);
    if (gpxTotals.totalMiles > 0) {
      const stageData = buildEvenStages(gpxTrackPoints, Math.max(2, Number(totalDaysInput.value || 2)));
      const gpxMiles = Math.round(stageData.totalMiles);
      routeDistanceInput.value = gpxMiles;
      if (!plan.length) {
        const config = parseForm();
        if (config) {
          plan = buildPlan(config);
          renderMetrics(config, plan);
          renderPlan(plan);
          persistPlan();
        }
      }
    }

    resupplyMarkers = [];
    resupplyPoints.forEach((point, index) => {
      const marker = L.marker([point.lat, point.lon], { icon: makeResupplyIcon(), draggable: true })
        .addTo(resupplyLayer)
        .bindPopup(`<strong>${point.name}</strong><br/>Mile ${point.mile}<br/>${point.resupply}`);
      attachDragHandlers(marker, "resupply", index);
      resupplyMarkers.push(marker);
    });

    routeSections = buildResupplySections(gpxTrackPoints);
    renderRouteProfile();
    drawSectionOverlays();
    renderMapSectionComments("");

    map.fitBounds(routeLine.getBounds(), {
      padding: [30, 30]
    });

    updateStagesFromInput();
    applyDragModeToMarkers();
  } catch {
    markerList.innerHTML =
      '<li><p class="empty-note">Could not load GPX route file. Check that TourDivide2025_v2.gpx is in the project root.</p></li>';
  }

  setupCommentSections();
}

function updateStagesFromInput() {
  if (!gpxTrackPoints.length || !stageLayer) return;

  const stageCount = Math.max(2, Math.min(120, Number(totalDaysInput.value || 2)));
  const stageData = buildEvenStages(gpxTrackPoints, stageCount);
  stageOptions = stageData.stages;

  if (mapSubhead) {
    mapSubhead.textContent = mapboxFallbackActive
      ? `Using OpenStreetMap fallback. GPX loaded with ${stageCount} days (from projected days).`
      : `Loaded from your GPX file with ${stageCount} days (from projected days).`;
  }

  stageLayer.clearLayers();
  dayMarkers.forEach((marker) => clearMarkerGuide(marker));
  dayMarkers = [];

  stageOptions.forEach((stage, index) => {
    const marker = L.marker([stage.lat, stage.lon], { icon: makeDayIcon(), draggable: true })
      .addTo(stageLayer)
      .bindPopup(`Day ${stage.stage}<br/>${stage.startMile}-${stage.endMile} mi`);
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
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  startDateInput.value = localDateString(new Date());
  finishDateInput.value = addDays(startDateInput.value, 21);
  totalDaysInput.value = 22;
  restDaysInput.value = 1;
  routeDistanceInput.value = 2745;
  plan = [];
  dayList.innerHTML = "";
  metricList.innerHTML = "";
  updateStagesFromInput();
});

exportBtn.addEventListener("click", exportCsv);

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

commentSectionSelect.addEventListener("change", () => {
  renderMapSectionComments(commentSectionSelect.value);
  drawSectionOverlays();
});

setDragButtonState();
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
