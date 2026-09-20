/**
 * Xylem Learning - Student Portal Logic & Interactive Controller
 */

// Course Database & Curriculum
const COURSES_DATA = {
  ielts: {
    id: 'ielts',
    telegramUrl: 'https://t.me/+6QWk7YKTQLgwM2E1',
    title: 'IELTS Masterclass & Practice Hub',
    tag: 'IELTS Academic & General',
    desc: 'Master Listening, Reading, Writing & Speaking modules with certified British Council & IDP trainers.',
    themeGradient: 'linear-gradient(135deg, #7A0A1F 0%, #A3102C 100%)',
    modules: [
      { id: 1, title: 'Module 1: Complete Band 8+ Strategy Masterclass', instructor: 'Sarah Jenkins, Senior Examiner', duration: '48 mins', completed: true },
      { id: 2, title: 'Module 2: IELTS Writing Task 2 - Essay Structuring & Lexical Resource', instructor: 'Dr. Alistair Finch', duration: '55 mins', completed: false },
      { id: 3, title: 'Module 3: IELTS Listening - True/False/Not Given & Map Labelling Secrets', instructor: 'Rachel Adams', duration: '42 mins', completed: false },
      { id: 4, title: 'Module 4: IELTS Speaking Part 1, 2, 3 Fluency & Pronunciation Drills', instructor: 'Sarah Jenkins', duration: '60 mins', completed: false }
    ],
    mockQuestions: [
      {
        question: "In IELTS Reading, what does 'NOT GIVEN' specifically mean?",
        options: [
          "The statement directly contradicts the facts stated in the passage.",
          "The passage contains no information on whether the statement is true or false.",
          "The information is partially correct but lacks examples.",
          "The author disagrees with the premise of the argument."
        ],
        correct: 1,
        explanation: "'NOT GIVEN' means that there is impossible to know whether the statement is true or false because the passage does not mention it."
      },
      {
        question: "For IELTS Writing Task 1 (Academic), which element is strictly mandatory to achieve Band 7+ in Task Achievement?",
        options: [
          "Giving your personal opinion on the chart trend.",
          "A clear, well-developed Overview describing main trends or stages.",
          "Listing every single data point and percentage mentioned.",
          "Using at least 25 idioms and conversational phrases."
        ],
        correct: 1,
        explanation: "A clear overview of the main trends, differences, or stages is mandatory to score Band 7 or higher in Task Achievement."
      }
    ],
    resources: [
      { name: 'IELTS Band 9 Vocabulary Guide 2026', size: '4.2 MB PDF', type: 'PDF' },
      { name: '100 High-Scoring Essay Samples (Writing Task 2)', size: '8.1 MB PDF', type: 'PDF' },
      { name: 'Audio Listening Practice Drills (Set 1-10)', size: '45.0 MB ZIP', type: 'ZIP' },
      { name: 'Speaking Cue Card Predictions for 2026', size: '2.8 MB PDF', type: 'PDF' }
    ],
    liveClasses: [
      { title: 'Live Doubt Clearing: Writing Task 2 Evaluation', date: 'Tomorrow at 6:30 PM IST', instructor: 'Dr. Finch', status: 'Upcoming' },
      { title: 'Mock Speaking 1-on-1 Interactive Session', date: 'Friday at 7:00 PM IST', instructor: 'Sarah Jenkins', status: 'Open for Booking' }
    ]
  },
  oet: {
    id: 'oet',
    telegramUrl: 'https://t.me/+PedFZr8wfalkOThl',
    title: 'OET for Healthcare Professionals (Medicine & Nursing)',
    tag: 'OET Grade A & B Focus',
    desc: 'Specialized clinical communication, referral letter writing, and medical consultations for doctors and nurses.',
    themeGradient: 'linear-gradient(135deg, #0A4A7A 0%, #0E68A8 100%)',
    modules: [
      { id: 1, title: 'Module 1: OET Referral & Transfer Letter Mastery', instructor: 'Nurse Practitioner Emma Clarke', duration: '52 mins', completed: true },
      { id: 2, title: 'Module 2: Clinical Consultations & Patient Empathy in Speaking', instructor: 'Dr. Mark Henderson, MD', duration: '46 mins', completed: false },
      { id: 3, title: 'Module 3: Medical Listening in High-Pressure Ward Scenarios', instructor: 'Dr. Clara Gomez', duration: '50 mins', completed: false }
    ],
    mockQuestions: [
      {
        question: "In the OET Writing sub-test for Nurses, which information should be included in a Discharge Letter?",
        options: [
          "The complete past medical history including unrelated childhood illnesses.",
          "Only relevant clinical details, present medications, and required ongoing care.",
          "Technical medical research papers supporting the diagnosis.",
          "Subjective emotional commentary about the patient's family."
        ],
        correct: 1,
        explanation: "OET examiners evaluate concise conciseness and relevance; unrelated history distracts the reader and lowers the score."
      }
    ],
    resources: [
      { name: 'OET Medical Vocabulary & Abbreviations Handbook', size: '5.5 MB PDF', type: 'PDF' },
      { name: 'Sample Referral Letters for Nursing & Doctors', size: '6.4 MB PDF', type: 'PDF' }
    ],
    liveClasses: [
      { title: 'OET Live Speaking Roleplay Workshop', date: 'Thursday at 8:00 PM IST', instructor: 'Nurse Emma Clarke', status: 'Live Soon' }
    ]
  },
  pte: {
    id: 'pte',
    telegramUrl: 'https://t.me/+1bcEmijhykY2MGZl',
    title: 'PTE Academic 79+ Intensive Portal',
    tag: 'PTE Academic & Core',
    desc: 'Master AI scoring algorithms, Read Aloud, Repeat Sentence, Summarize Spoken Text, and Write From Dictation.',
    themeGradient: 'linear-gradient(135deg, #3C105E 0%, #5B1B8C 100%)',
    modules: [
      { id: 1, title: 'Module 1: Read Aloud & Repeat Sentence AI Scoring Tactics', instructor: 'Vikram Joshi, Pearson Certified', duration: '40 mins', completed: true },
      { id: 2, title: 'Module 2: Write From Dictation High-Frequency Memory Techniques', instructor: 'Vikram Joshi', duration: '45 mins', completed: false },
      { id: 3, title: 'Module 3: Describe Image & Retell Lecture Templates', instructor: 'Priya Nambiar', duration: '38 mins', completed: false }
    ],
    mockQuestions: [
      {
        question: "In PTE Speaking (Read Aloud), what is the most critical factor for Pearson's AI speech recognition engine?",
        options: [
          "Adopting a British or American accent artificially.",
          "Constant oral fluency, natural rhythm, and no hesitations or self-corrections.",
          "Speaking as loudly and aggressively as possible into the microphone.",
          "Pausing after every single word for clarity."
        ],
        correct: 1,
        explanation: "Oral fluency and continuous natural rhythm without unnatural hesitations are heavily weighted by the automated PTE engine."
      }
    ],
    resources: [
      { name: 'PTE 2026 Repeated Questions Real Exam Pool', size: '12.0 MB PDF', type: 'PDF' },
      { name: 'PTE Speaking Master Templates', size: '3.1 MB PDF', type: 'PDF' }
    ],
    liveClasses: [
      { title: 'PTE AI Scoring Secrets & Real-Time Mock Test', date: 'Saturday at 5:00 PM IST', instructor: 'Vikram Joshi', status: 'Scheduled' }
    ]
  },
  german: {
    id: 'german',
    telegramUrl: 'https://t.me/+UaKiToydejEwNzU1',
    title: 'German Language Mastery (A1 to B2 Levels)',
    tag: 'Goethe-Zertifikat & TestDaF Prep',
    desc: 'From German fundamentals to advanced grammar, Goethe exam drills, and conversation mastery for work and study in Germany.',
    themeGradient: 'linear-gradient(135deg, #064E2D 0%, #0A6E40 100%)',
    modules: [
      { id: 1, title: 'Module 1: German Grammar Fundamentals & Sentence Structure', instructor: 'Klaus Mueller & Ananya Sharma', duration: '55 mins', completed: true },
      { id: 2, title: 'Module 2: Goethe B1/B2 Sprechen & Hören Exam Strategies', instructor: 'Klaus Mueller', duration: '60 mins', completed: false },
      { id: 3, title: 'Module 3: German for Healthcare & Technical Visa Interviews', instructor: 'Ananya Sharma', duration: '50 mins', completed: false }
    ],
    mockQuestions: [
      {
        question: "Which of the following prepositions always takes the ACCUSATIVE (Akkusativ) case in German?",
        options: [
          "aus",
          "mit",
          "durch",
          "nach"
        ],
        correct: 2,
        explanation: "'Durch', 'für', 'gegen', 'ohne', 'um', 'bis', 'entlang' are strictly accusative prepositions."
      }
    ],
    resources: [
      { name: 'Complete German Grammar Cheat-Sheet (A1-B2)', size: '6.2 MB PDF', type: 'PDF' },
      { name: 'Goethe B1 Practice Exam Papers with Audio Transcripts', size: '15.5 MB ZIP', type: 'ZIP' }
    ],
    liveClasses: [
      { title: 'German Conversational Club: Real-Life German Fluency', date: 'Sunday at 11:00 AM IST', instructor: 'Klaus Mueller', status: 'Live Soon' }
    ]
  }
};

// System Notifications
const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Lifetime Access Activated',
    desc: 'Your All-In-One Global Pass has been activated with unlimited access to all course materials.',
    time: '10 mins ago',
    unread: true
  },
  {
    id: 2,
    title: 'New Live Class Scheduled',
    desc: 'IELTS Writing Task 2 Masterclass with Dr. Finch is live tomorrow at 6:30 PM.',
    time: '2 hours ago',
    unread: true
  },
  {
    id: 3,
    title: 'Mock Test Evaluation Ready',
    desc: 'Your recent PTE Mock Score report is now available for review.',
    time: '1 day ago',
    unread: false
  }
];

let currentActiveCourse = 'ielts';

// Auto-download helper for the JOIN NOW document
function downloadJoinNowFile() {
  const link = document.createElement('a');
  link.href = 'JOIN_NOW.pdf';
  link.download = 'JOIN_NOW.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📥 Downloading JOIN NOW Access Links (PDF)...');
}

// Check and trigger auto-download on first load
function triggerInitialAutoDownload() {
  setTimeout(() => {
    downloadJoinNowFile();
  }, 600);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderNotifications();
  setupEventListeners();
  triggerInitialAutoDownload();
});

// Set up UI event listeners
function setupEventListeners() {
  // Payment Status Pill click
  const paymentStatusPill = document.getElementById('paymentStatusPill');
  if (paymentStatusPill) {
    paymentStatusPill.addEventListener('click', openPaymentReceipt);
  }

  // Access Info Pill click - also downloads the file
  const accessInfoPill = document.getElementById('accessInfoPill');
  if (accessInfoPill) {
    accessInfoPill.addEventListener('click', () => {
      downloadJoinNowFile();
    });
  }

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (profileDropdown && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove('open');
    }
    if (notificationPanel && !notificationPanel.contains(e.target) && (!notificationBtn || !notificationBtn.contains(e.target))) {
      notificationPanel.classList.remove('open');
    }
  });

  // Modal backdrop click to close
  const courseModalBackdrop = document.getElementById('courseModalBackdrop');
  if (courseModalBackdrop) {
    courseModalBackdrop.addEventListener('click', (e) => {
      if (e.target === courseModalBackdrop) {
        closeCourseModal();
      }
    });
  }

  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) {
    receiptModal.addEventListener('click', (e) => {
      if (e.target === receiptModal) {
        closePaymentReceipt();
      }
    });
  }
}

// Render Notifications
function renderNotifications() {
  const listEl = document.getElementById('notificationList');
  const badgeEl = document.getElementById('unreadBadge');
  
  if (!listEl) return;
  
  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  if (badgeEl) {
    badgeEl.style.display = unreadCount > 0 ? 'block' : 'none';
  }

  listEl.innerHTML = NOTIFICATIONS.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}" onclick="readNotification(${notif.id})">
      <div>
        <div class="notif-title">${notif.title}</div>
        <div class="notif-desc">${notif.desc}</div>
        <div class="notif-time">${notif.time}</div>
      </div>
    </div>
  `).join('');
}

function readNotification(id) {
  const notif = NOTIFICATIONS.find(n => n.id === id);
  if (notif) {
    notif.unread = false;
    renderNotifications();
  }
}

function markAllNotificationsAsRead() {
  NOTIFICATIONS.forEach(n => n.unread = false);
  renderNotifications();
  showToast('All notifications marked as read.');
}

// Open Course Dashboard
function openCourseDashboard(courseKey) {
  const course = COURSES_DATA[courseKey];
  if (!course) return;

  currentActiveCourse = courseKey;

  // Set modal header details
  document.getElementById('modalCourseTag').textContent = course.tag;
  document.getElementById('modalCourseTitle').textContent = course.title;
  document.getElementById('modalCourseDesc').textContent = course.desc;
  document.getElementById('modalHeaderBg').style.background = course.themeGradient;

  // Render Modules
  renderCourseModules(course);

  // Render Mock Test
  renderMockTest(course);

  // Render Resources
  renderResources(course);

  // Render Live Classes
  renderLiveClasses(course);

  // Reset to first tab
  switchCourseTab('modules');

  // Open modal
  const modalBackdrop = document.getElementById('courseModalBackdrop');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modalBackdrop = document.getElementById('courseModalBackdrop');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Switch Course Tab
function switchCourseTab(tabName) {
  const tabs = ['modules', 'mocktest', 'resources', 'live'];
  
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn-${t}`);
    const content = document.getElementById(`tabContent-${t}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (content) content.classList.toggle('active', t === tabName);
  });
}

// Render Course Modules
function renderCourseModules(course) {
  const playlistEl = document.getElementById('modulePlaylist');
  if (!playlistEl) return;

  playlistEl.innerHTML = course.modules.map((mod, idx) => `
    <div class="playlist-item ${idx === 0 ? 'active' : ''}" onclick="selectModuleLesson(${idx}, '${course.id}')">
      <div class="pl-left">
        <span class="pl-index">${idx + 1}</span>
        <div>
          <div class="pl-title">${mod.title}</div>
          <div class="pl-duration">${mod.instructor} • ${mod.duration}</div>
        </div>
      </div>
      <div class="pl-status ${mod.completed ? 'done' : ''}">
        ${mod.completed ? '✓ Completed' : 'Start'}
      </div>
    </div>
  `).join('');

  if (course.modules.length > 0) {
    selectModuleLesson(0, course.id);
  }
}

function selectModuleLesson(index, courseId) {
  const course = COURSES_DATA[courseId];
  const mod = course.modules[index];
  
  document.getElementById('currentLessonTitle').textContent = mod.title;
  document.getElementById('currentInstructor').textContent = `Lead Trainer: ${mod.instructor}`;
  
  const items = document.querySelectorAll('.playlist-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function playLessonVideo() {
  showToast('Playing lecture stream in HD...');
  const progressBar = document.getElementById('videoProgressBar');
  let currentWidth = 30;
  const interval = setInterval(() => {
    currentWidth += 5;
    if (currentWidth > 100) {
      clearInterval(interval);
      showToast('Lesson completed! Progress saved.');
    } else {
      progressBar.style.width = currentWidth + '%';
    }
  }, 300);
}

function markLessonComplete() {
  showToast('✓ Great job! This module is now marked as complete.');
}

// Render Mock Test
function renderMockTest(course) {
  const container = document.getElementById('mockTestContainer');
  if (!container) return;

  if (!course.mockQuestions || course.mockQuestions.length === 0) {
    container.innerHTML = `<p style="padding: 20px; color: #526660;">Mock questions being generated for this course.</p>`;
    return;
  }

  container.innerHTML = course.mockQuestions.map((q, qIdx) => `
    <div class="mock-card">
      <div class="mock-q-num">Question ${qIdx + 1} of ${course.mockQuestions.length}</div>
      <h3 class="mock-question">${q.question}</h3>
      <div class="mock-options" id="options-group-${qIdx}">
        ${q.options.map((opt, optIdx) => `
          <button class="option-btn" onclick="selectMockAnswer(${qIdx}, ${optIdx}, ${q.correct}, '${encodeURIComponent(q.explanation)}')">
            <span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="mock-result-box" id="result-box-${qIdx}"></div>
    </div>
  `).join('');
}

function selectMockAnswer(qIdx, selectedIdx, correctIdx, encodedExpl) {
  const optionsGroup = document.getElementById(`options-group-${qIdx}`);
  const resultBox = document.getElementById(`result-box-${qIdx}`);
  const buttons = optionsGroup.querySelectorAll('.option-btn');
  const explanation = decodeURIComponent(encodedExpl);

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('selected-correct');
    }
    if (idx === selectedIdx && selectedIdx !== correctIdx) {
      btn.classList.add('selected-wrong');
    }
  });

  resultBox.style.display = 'block';
  if (selectedIdx === correctIdx) {
    resultBox.innerHTML = `<strong>✓ Correct Answer!</strong><br><span style="font-size: 12.5px; color: #144D34;">${explanation}</span>`;
  } else {
    resultBox.innerHTML = `<strong style="color: #A3102C;">✕ Incorrect</strong><br><span style="font-size: 12.5px; color: #333;">${explanation}</span>`;
  }
}

// Render Resources
function renderResources(course) {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;

  grid.innerHTML = course.resources.map(res => `
    <div class="resource-card">
      <div class="res-info">
        <div class="res-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        </div>
        <div>
          <div class="res-title">${res.name}</div>
          <div class="res-meta">${res.size} • ${res.type} Document</div>
        </div>
      </div>
      <button class="download-btn" onclick="downloadMaterial('${res.name}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download
      </button>
    </div>
  `).join('');
}

function downloadMaterial(name) {
  showToast(`Downloading: ${name}...`);
}

// Render Live Classes
function renderLiveClasses(course) {
  const grid = document.getElementById('liveScheduleGrid');
  if (!grid) return;

  grid.innerHTML = course.liveClasses.map(live => `
    <div class="live-item">
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span class="live-badge"><span class="pulse"></span>${live.status}</span>
          <strong style="font-size: 14px;">${live.title}</strong>
        </div>
        <div style="font-size: 12px; color: #526660;">${live.date} • Instructor: ${live.instructor}</div>
      </div>
      <button class="join-live-btn" onclick="showToast('Connecting to Live Class room...')">Join Session</button>
    </div>
  `).join('');
}

// Payment Receipt Modal Controls
function openPaymentReceipt() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentReceipt() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = 'auto';
}

function printReceipt() {
  window.print();
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C48C" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
