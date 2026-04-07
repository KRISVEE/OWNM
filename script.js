// --- FULL ROUTINE DATA ---
const placeholderGIF = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop";

const workoutPlan = [
    { day: 0, title: "Active Rest", exercises: [] }, 
    { day: 1, title: "Push + Abs", exercises: [ 
        { id: "bench_press", name: "Bench Press", sets: 4, reps: "4-6", gif: placeholderGIF, category: "main" },
        { id: "inc_db_press", name: "Incline Dumbbell Press", sets: 3, reps: "8-12", gif: placeholderGIF, category: "main" },
        { id: "ohp", name: "Overhead Shoulder Press", sets: 3, reps: "6-10", gif: placeholderGIF, category: "main" },
        { id: "lat_raises_1", name: "Lateral Raises", sets: 3, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "tri_pushdown", name: "Triceps Pushdown", sets: 3, reps: "10-12", gif: placeholderGIF, category: "main" },
        { id: "oh_tri_ext", name: "Overhead Triceps Extension", sets: 2, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "hang_leg_raise", name: "Hanging Leg Raises", sets: 3, reps: "10-15", gif: placeholderGIF, category: "abs" },
        { id: "cable_crunch", name: "Cable Crunch", sets: 3, reps: "12-15", gif: placeholderGIF, category: "abs" },
        { id: "plank", name: "Plank", sets: 3, reps: "45-60 sec", gif: placeholderGIF, category: "abs" }
    ]},
    { day: 2, title: "Pull + Abs", exercises: [ 
        { id: "deadlift", name: "Deadlift", sets: 4, reps: "3-5", gif: placeholderGIF, category: "main" },
        { id: "lat_pulldown", name: "Lat Pulldown", sets: 3, reps: "8-12", gif: placeholderGIF, category: "main" },
        { id: "seated_row", name: "Seated Row", sets: 3, reps: "8-12", gif: placeholderGIF, category: "main" },
        { id: "face_pull", name: "Face Pull", sets: 3, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "bb_curl", name: "Barbell Curl", sets: 3, reps: "8-10", gif: placeholderGIF, category: "main" },
        { id: "hammer_curl", name: "Hammer Curl", sets: 2, reps: "10-12", gif: placeholderGIF, category: "main" },
        { id: "dec_situps", name: "Decline Sit-ups", sets: 3, reps: "12-15", gif: placeholderGIF, category: "abs" },
        { id: "rus_twists", name: "Russian Twists", sets: 3, reps: "20 Reps", gif: placeholderGIF, category: "abs" },
        { id: "flutter_kicks", name: "Flutter Kicks", sets: 3, reps: "30 sec", gif: placeholderGIF, category: "abs" }
    ]},
    { day: 3, title: "Legs + Abs", exercises: [ 
        { id: "squats", name: "Squats", sets: 4, reps: "4-6", gif: placeholderGIF, category: "main" },
        { id: "rdl", name: "Romanian Deadlift", sets: 3, reps: "8-10", gif: placeholderGIF, category: "main" },
        { id: "leg_press", name: "Leg Press", sets: 3, reps: "10-12", gif: placeholderGIF, category: "main" },
        { id: "walk_lunges", name: "Walking Lunges", sets: 2, reps: "12 / Leg", gif: placeholderGIF, category: "main" },
        { id: "calf_raises", name: "Calf Raises", sets: 4, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "ab_wheel", name: "Ab Wheel Rollout", sets: 3, reps: "8-12", gif: placeholderGIF, category: "abs" },
        { id: "mtn_climber", name: "Mountain Climbers", sets: 3, reps: "30 sec", gif: placeholderGIF, category: "abs" },
        { id: "ly_leg_raise", name: "Lying Leg Raises", sets: 3, reps: "12-15", gif: placeholderGIF, category: "abs" }
    ]},
    { day: 4, title: "Push", exercises: [ 
        { id: "inc_bb_press", name: "Incline Barbell Press", sets: 4, reps: "6-10", gif: placeholderGIF, category: "main" },
        { id: "cable_fly", name: "Cable Chest Fly", sets: 3, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "arnold_press", name: "Arnold Press", sets: 3, reps: "8-12", gif: placeholderGIF, category: "main" },
        { id: "lat_raises_2", name: "Lateral Raises", sets: 3, reps: "15", gif: placeholderGIF, category: "main" },
        { id: "dips", name: "Dips", sets: 3, reps: "Max", gif: placeholderGIF, category: "main" },
        { id: "rope_pushdown", name: "Rope Pushdown", sets: 2, reps: "12-15", gif: placeholderGIF, category: "main" }
    ]},
    { day: 5, title: "Pull", exercises: [ 
        { id: "pullups", name: "Pull-ups", sets: 4, reps: "Max", gif: placeholderGIF, category: "main" },
        { id: "tbar_row", name: "T-Bar Row", sets: 3, reps: "8-10", gif: placeholderGIF, category: "main" },
        { id: "sa_db_row", name: "Single Arm DB Row", sets: 3, reps: "10", gif: placeholderGIF, category: "main" },
        { id: "rear_delt", name: "Rear Delt Fly", sets: 3, reps: "12-15", gif: placeholderGIF, category: "main" },
        { id: "preacher_curl", name: "Preacher Curl", sets: 3, reps: "10-12", gif: placeholderGIF, category: "main" },
        { id: "rev_curl", name: "Reverse Curl", sets: 2, reps: "12", gif: placeholderGIF, category: "main" }
    ]},
    { day: 6, title: "Legs + Athletic", exercises: [ 
        { id: "front_squat", name: "Front Squat", sets: 4, reps: "5-8", gif: placeholderGIF, category: "main" },
        { id: "leg_curl", name: "Leg Curl", sets: 3, reps: "10-12", gif: placeholderGIF, category: "main" },
        { id: "hip_thrust", name: "Hip Thrust", sets: 3, reps: "8-12", gif: placeholderGIF, category: "main" },
        { id: "box_jumps", name: "Box Jumps", sets: 3, reps: "Sets", gif: placeholderGIF, category: "main" },
        { id: "farmer_walk", name: "Farmer Walk", sets: 3, reps: "Rounds", gif: placeholderGIF, category: "main" }
    ]}
];

// --- ROBUST STATE MANAGEMENT ---
const today = new Date();
const currentDayIndex = today.getDay(); 
const workout = workoutPlan[currentDayIndex];
const dateKey = `aura_data_${today.toISOString().split('T')[0]}`;

// Bulletproof appState loading to prevent crashes
let appState;
try {
    appState = JSON.parse(localStorage.getItem(dateKey));
    if (!appState || typeof appState !== 'object' || !appState.exercises) {
        appState = { exercises: {} };
    }
} catch(e) {
    appState = { exercises: {} };
}

// --- STREAK MANAGEMENT ---
const streakKey = 'aura_streak_data';
let streakData;
try {
    streakData = JSON.parse(localStorage.getItem(streakKey)) || { count: 0, lastCompletedDate: null };
} catch(e) {
    streakData = { count: 0, lastCompletedDate: null };
}

function getDaysDiff(dateStr1, dateStr2) {
    const d1 = new Date(dateStr1); d1.setHours(0,0,0,0);
    const d2 = new Date(dateStr2); d2.setHours(0,0,0,0);
    return Math.round((d2 - d1) / 86400000);
}

function initStreak() {
    if (!streakData.lastCompletedDate) {
        updateStreakUI();
        return;
    }

    const todayStr = today.toISOString().split('T')[0];
    const diffDays = getDaysDiff(streakData.lastCompletedDate, todayStr);
    const currentDayOfWeek = today.getDay(); 

    let isStreakValid = false;
    if (diffDays === 0) isStreakValid = true; 
    else if (diffDays === 1) isStreakValid = true; 
    else if (diffDays === 2 && currentDayOfWeek === 1) isStreakValid = true; // Skipped Sunday

    if (!isStreakValid) {
        streakData.count = 0; 
        streakData.lastCompletedDate = null;
        localStorage.setItem(streakKey, JSON.stringify(streakData));
    }

    updateStreakUI();
}

function updateStreakUI() {
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = streakData.count;
}

function checkWorkoutCompletion() {
    if (workout.exercises.length === 0) return; 
    
    let total = 0;
    let completed = 0;
    
    workout.exercises.forEach((ex, index) => {
        for (let s = 0; s < ex.sets; s++) {
            total++;
            if (appState.exercises[index] && appState.exercises[index].sets[s]?.done) completed++;
        }
    });

    const todayStr = today.toISOString().split('T')[0];

    if (total > 0 && completed === total) {
        if (streakData.lastCompletedDate !== todayStr) {
            streakData.count++;
            streakData.lastCompletedDate = todayStr;
            localStorage.setItem(streakKey, JSON.stringify(streakData));
            updateStreakUI();
            showStreakToast();
        }
    } else {
        if (streakData.lastCompletedDate === todayStr) {
            streakData.count = Math.max(0, streakData.count - 1);
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            streakData.lastCompletedDate = yesterday.toISOString().split('T')[0];
            localStorage.setItem(streakKey, JSON.stringify(streakData));
            updateStreakUI();
        }
    }
}

function showStreakToast() {
    const toast = document.createElement('div');
    toast.className = 'streak-toast';
    toast.innerHTML = '🔥 +1 Day Streak!';
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400); 
    }, 3000);
}


let activeExIndex = null;
let activeSetIndex = 0;

// --- DASHBOARD RENDERING ---
function initDashboard() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('current-day').textContent = days[currentDayIndex];
    document.getElementById('workout-title').textContent = workout.title;
    
    initStreak();
    renderExerciseList();
}

function renderExerciseList() {
    const list = document.getElementById('exercise-list');
    if (!list) return; // Prevent crashes if HTML is missing
    list.innerHTML = '';
    
    let totalSetsGlobal = 0;
    let completedSetsGlobal = 0;

    workout.exercises.forEach((ex, index) => {
        if (!appState.exercises[index]) appState.exercises[index] = { sets: {} };

        let exCompletedSets = 0;
        for (let s = 0; s < ex.sets; s++) {
            totalSetsGlobal++;
            if (appState.exercises[index].sets[s]?.done) {
                exCompletedSets++;
                completedSetsGlobal++;
            }
        }

        if (ex.category === 'main') {
            const isComplete = exCompletedSets === ex.sets;
            const card = document.createElement('div');
            card.className = `ex-card ${isComplete ? 'completed' : ''}`;
            card.onclick = () => enterFlowMode(index);
            
            card.innerHTML = `
                <div class="ex-card-info">
                    <h3>${ex.name}</h3>
                    <span class="ex-card-meta">${exCompletedSets}/${ex.sets} Sets • ${ex.reps} Reps</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${isComplete ? 'var(--success)' : 'var(--text-secondary)'}" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            `;
            list.appendChild(card);
        }
    });

    if(totalSetsGlobal > 0) {
        const pct = Math.round((completedSetsGlobal / totalSetsGlobal) * 100);
        document.getElementById('progress-bar').style.width = `${pct}%`;
        document.getElementById('progress-text').textContent = `${pct}%`;
    }
}

// --- FOCUSED FLOW MODE ---
function enterFlowMode(exIndex) {
    activeExIndex = exIndex;
    activeSetIndex = 0; 
    
    const exData = appState.exercises[activeExIndex];
    for (let s = 0; s < workout.exercises[activeExIndex].sets; s++) {
        if (!exData.sets[s]?.done) {
            activeSetIndex = s;
            break;
        }
    }

    renderFlowSetData();
    
    document.getElementById('dashboard-view').classList.remove('active-view');
    window.scrollTo(0, 0);
    document.getElementById('flow-view').classList.add('active-view');
}

function exitFlowMode() {
    saveWeightInput();
    renderExerciseList();
    
    document.getElementById('flow-view').classList.remove('active-view');
    window.scrollTo(0, 0);
    document.getElementById('dashboard-view').classList.add('active-view');
}

function renderFlowSetData() {
    const ex = workout.exercises[activeExIndex];
    const exData = appState.exercises[activeExIndex];
    const setData = exData.sets[activeSetIndex] || { done: false, weight: '' };

    let completedCount = 0;
    for (let s = 0; s < ex.sets; s++) if (exData.sets[s]?.done) completedCount++;

    document.getElementById('flow-ex-name').textContent = ex.name;
    document.getElementById('flow-ex-progress').textContent = `${completedCount}/${ex.sets} Sets`;
    document.getElementById('flow-gif').src = ex.gif;
    
    document.getElementById('flow-set-title').textContent = `Set ${activeSetIndex + 1}`;
    document.getElementById('flow-set-reps').textContent = `${ex.reps} Reps`;
    document.getElementById('flow-weight-input').value = setData.weight;

    document.getElementById('btn-prev').disabled = (activeExIndex === 0 && activeSetIndex === 0);
    document.getElementById('btn-next').disabled = (activeExIndex === workout.exercises.length - 1 && activeSetIndex === ex.sets - 1);

    updateMainButtonState(setData.done, completedCount === ex.sets);
}

function updateMainButtonState(isSetDone, isExDone) {
    const btn = document.getElementById('btn-done');
    const text = document.getElementById('done-text');
    const icon = document.getElementById('done-icon');

    if (isExDone && isSetDone) {
        btn.classList.add('completed-state');
        text.textContent = "Exercise Complete";
        icon.classList.remove('hidden');
    } else if (isSetDone) {
        btn.classList.add('completed-state');
        text.textContent = "Set Done";
        icon.classList.remove('hidden');
    } else {
        btn.classList.remove('completed-state');
        text.textContent = "Mark as Done";
        icon.classList.add('hidden');
    }
}

function saveWeightInput() {
    const weight = document.getElementById('flow-weight-input').value;
    if (!appState.exercises[activeExIndex]) {
        appState.exercises[activeExIndex] = { sets: {} };
    }
    if (!appState.exercises[activeExIndex].sets[activeSetIndex]) {
        appState.exercises[activeExIndex].sets[activeSetIndex] = { done: false, weight: '' };
    }
    appState.exercises[activeExIndex].sets[activeSetIndex].weight = weight;
    localStorage.setItem(dateKey, JSON.stringify(appState));
}

window.markSetDone = function() {
    saveWeightInput();
    
    const exData = appState.exercises[activeExIndex];
    const isCurrentlyDone = exData.sets[activeSetIndex]?.done || false;
    
    exData.sets[activeSetIndex].done = !isCurrentlyDone;
    localStorage.setItem(dateKey, JSON.stringify(appState));

    renderFlowSetData();
    checkWorkoutCompletion(); 

    if (!isCurrentlyDone) {
        if (activeSetIndex < workout.exercises[activeExIndex].sets - 1) {
            setTimeout(() => nextSet(), 500);
        } else if (activeExIndex < workout.exercises.length - 1) {
            setTimeout(() => nextSet(), 1200); 
        } else {
            setTimeout(() => exitFlowMode(), 1200); 
        }
    }
}

function animateSetChange(direction) {
    const container = document.getElementById('flow-anim-container');
    const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    
    saveWeightInput();
    container.classList.add(outClass);
    
    setTimeout(() => {
        renderFlowSetData();
        container.style.transition = 'none';
        container.classList.remove('slide-out-left', 'slide-out-right');
        container.classList.add(direction === 'next' ? 'slide-out-right' : 'slide-out-left');
        
        void container.offsetWidth; 
        
        container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        container.classList.remove('slide-out-left', 'slide-out-right');
    }, 200);
}

window.nextSet = function() {
    if (activeSetIndex < workout.exercises[activeExIndex].sets - 1) {
        activeSetIndex++;
        animateSetChange('next');
    } else if (activeExIndex < workout.exercises.length - 1) {
        activeExIndex++;
        activeSetIndex = 0;
        animateSetChange('next');
    }
}

window.prevSet = function() {
    if (activeSetIndex > 0) {
        activeSetIndex--;
        animateSetChange('prev');
    } else if (activeExIndex > 0) {
        activeExIndex--;
        activeSetIndex = workout.exercises[activeExIndex].sets - 1;
        animateSetChange('prev');
    }
}

document.getElementById('flow-weight-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') this.blur();
});

// --- SUBTLE THREE.JS BACKGROUND ---
function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geo = new THREE.BufferGeometry();
    const count = 150;
    const pos = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 15;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({ size: 0.015, color: 0x3b82f6, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
    const mesh = new THREE.Points(geo, mat);
    scene.add(mesh);
    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.0002;
        mesh.rotation.x += 0.0001;
        renderer.render(scene, camera);
    }
    animate();
}

initThreeJS();
initDashboard();