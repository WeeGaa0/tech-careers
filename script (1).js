// ===== DATA (with real course links) =====
const jobs = [
  {
    id: 1, icon: "🖥️", title: "مطوّر واجهات أمامية",
    category: "dev", categoryLabel: "تطوير",
    shortDesc: "بيبني كل حاجة المستخدم بيشوفها على المواقع والتطبيقات — الأزرار والصور والألوان وكل حاجة.",
    fullDesc: "المطوّر الأمامي (Front-End Developer) مسؤول عن تحويل التصميم لكود شغّال — بيستخدم HTML لهيكل الصفحة، CSS للشكل والألوان، وJavaScript علشان تتفاعل الصفحة مع المستخدم. دوره محوري في كل موقع أو تطبيق ويب.",
    skills: ["HTML5","CSS3","JavaScript","React","Git","Responsive Design","UI/UX Basics"],
    courses: [
      { name: "The Odin Project — مجاني وشامل", url: "https://www.theodinproject.com" },
      { name: "freeCodeCamp — مجاني ومعه شهادة", url: "https://www.freecodecamp.org" },
      { name: "Front End Web Development — Udemy", url: "https://www.udemy.com/course/the-web-developer-bootcamp/" },
      { name: "Traversy Media — YouTube مجاني", url: "https://www.youtube.com/@TraversyMedia" },
      { name: "Frontend Masters — متقدم", url: "https://frontendmasters.com" }
    ],
    companies: ["Google","Meta","Vodafone","Booking.com","Careem","Noon","Instabug"],
    salaryMin: "$40k", salaryMax: "$120k", salaryPercent: 65
  },
  {
    id: 2, icon: "⚙️", title: "مطوّر واجهات خلفية",
    category: "dev", categoryLabel: "تطوير",
    shortDesc: "بيبني السيرفر وقاعدة البيانات — هو اللي بيخلي البيانات تتحفظ وتتجيب صح.",
    fullDesc: "Back-End Developer بيشتغل على السيرفر وقاعدة البيانات واللوجيك اللي خلف الكواليس. بيستخدم لغات زي Node.js أو Python أو Java علشان يعمل APIs وقواعد بيانات. من غيره الموقع مش هيحفظ أي بيانات.",
    skills: ["Node.js / Python / Java","SQL & NoSQL","REST APIs","Authentication","Docker","Git","Linux Basics"],
    courses: [
      { name: "CS50 من Harvard — مجاني", url: "https://cs50.harvard.edu/x" },
      { name: "The Complete Node.js Developer — Udemy", url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
      { name: "Python Django Bootcamp — Udemy", url: "https://www.udemy.com/course/django-bootcamp/" },
      { name: "Elzero Web School — Backend بالعربي", url: "https://www.youtube.com/@ElzeroWebSchool" },
      { name: "Backend Development — Coursera", url: "https://www.coursera.org/specializations/meta-back-end-developer" }
    ],
    companies: ["Amazon","Microsoft","Uber","Talabat","OLX","PayMob","Fawry"],
    salaryMin: "$50k", salaryMax: "$140k", salaryPercent: 75
  },
  {
    id: 3, icon: "🤖", title: "مهندس ذكاء اصطناعي",
    category: "data", categoryLabel: "بيانات",
    shortDesc: "بيبني موديلات ذكاء اصطناعي تقدر تتعلم وتاخد قرارات — زي ChatGPT والسيارات ذاتية القيادة.",
    fullDesc: "AI/ML Engineer بيصمم ويدرّب موديلات تتعلم من البيانات. بيستخدم Python ومكتبات زي TensorFlow وPyTorch. الطلب على الوظيفة دي انفجر في السنين الأخيرة وهي من أعلى الوظائف راتباً.",
    skills: ["Python","TensorFlow / PyTorch","Machine Learning","Deep Learning","Mathematics","Data Processing","MLOps"],
    courses: [
      { name: "Machine Learning Specialization — Andrew Ng", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { name: "Deep Learning Specialization — Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
      { name: "Fast.ai — Practical Deep Learning مجاني", url: "https://www.fast.ai" },
      { name: "Kaggle Learn — مجاني ومعملي", url: "https://www.kaggle.com/learn" },
      { name: "AI Engineering Bootcamp — Udacity", url: "https://www.udacity.com/school/artificial-intelligence" }
    ],
    companies: ["OpenAI","Google DeepMind","Meta AI","IBM","Microsoft Azure","Nvidia","Valeo Egypt"],
    salaryMin: "$80k", salaryMax: "$200k", salaryPercent: 90
  },
  {
    id: 4, icon: "🛡️", title: "خبير أمن المعلومات",
    category: "security", categoryLabel: "أمن",
    shortDesc: "بيحمي الأنظمة والبيانات من الهاكرز والاختراقات — هو اللي بيخلي بياناتك في أمان.",
    fullDesc: "Cybersecurity Specialist بيحلل الثغرات ويضع استراتيجيات لحماية الأنظمة. بيشتغل على Penetration Testing وموقع الدفاع والاستجابة للحوادث. الطلب على الوظيفة بيزيد مع زيادة الهجمات الإلكترونية.",
    skills: ["Network Security","Penetration Testing","Ethical Hacking","SIEM Tools","Cryptography","Linux","Python Scripting"],
    courses: [
      { name: "CompTIA Security+ — شهادة معترف بها", url: "https://www.comptia.org/certifications/security" },
      { name: "Certified Ethical Hacker (CEH) — EC-Council", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
      { name: "TryHackMe — تدريب عملي مجاني", url: "https://tryhackme.com" },
      { name: "Hack The Box — متقدم", url: "https://www.hackthebox.com" },
      { name: "Google Cybersecurity Certificate — Coursera", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" }
    ],
    companies: ["Cisco","IBM Security","CrowdStrike","وزارة الاتصالات","EG-CERT","Orange","Vodafone"],
    salaryMin: "$60k", salaryMax: "$160k", salaryPercent: 80
  },
  {
    id: 5, icon: "📊", title: "محلل بيانات",
    category: "data", categoryLabel: "بيانات",
    shortDesc: "بيحوّل الأرقام والبيانات لرؤى واضحة بتساعد الشركات تاخد قرارات صح.",
    fullDesc: "Data Analyst بيجمع ويحلل البيانات ويعمل تقارير ورسوم بيانية تساعد الإدارة على الفهم واتخاذ القرار. بيستخدم Excel وSQL وPython وأدوات زي Tableau وPower BI.",
    skills: ["SQL","Excel Advanced","Python (Pandas)","Power BI / Tableau","Statistics","Data Cleaning","Storytelling with Data"],
    courses: [
      { name: "Google Data Analytics — Coursera", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { name: "Data Analysis with Python — freeCodeCamp", url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
      { name: "SQL Bootcamp — Udemy", url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
      { name: "Power BI Full Course — YouTube", url: "https://www.youtube.com/results?search_query=power+bi+full+course" },
      { name: "IBM Data Analyst Certificate — Coursera", url: "https://www.coursera.org/professional-certificates/ibm-data-analyst" }
    ],
    companies: ["McKinsey","PwC","Vodafone Analytics","Jumia","OLX","البنك المركزي المصري","Procter & Gamble"],
    salaryMin: "$35k", salaryMax: "$100k", salaryPercent: 55
  },
  {
    id: 6, icon: "☁️", title: "مهندس سحابي (Cloud)",
    category: "dev", categoryLabel: "تطوير",
    shortDesc: "بيبني ويدير البنية التحتية للتطبيقات على الكلاود — AWS, Azure, Google Cloud.",
    fullDesc: "Cloud Engineer مسؤول عن نشر وإدارة التطبيقات على منصات السحابة. بيشتغل على الأتمتة والـ DevOps وإدارة السيرفرات والتكاليف. من أعلى الوظائف طلباً في السوق حالياً.",
    skills: ["AWS / Azure / GCP","Docker & Kubernetes","Terraform","Linux","CI/CD Pipelines","Networking","Security Basics"],
    courses: [
      { name: "AWS Cloud Practitioner — شهادة للمبتدئين", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "AWS Solutions Architect Associate", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "Google Cloud Digital Leader", url: "https://cloud.google.com/certification/cloud-digital-leader" },
      { name: "Kubernetes Full Course — TechWorld YouTube", url: "https://www.youtube.com/@TechWorldwithNana" },
      { name: "DevOps Bootcamp — Udemy", url: "https://www.udemy.com/course/devops-docker-complete-guide/" }
    ],
    companies: ["AWS (Amazon)","Microsoft Azure","Google Cloud","SAP","Rackspace","Accenture","Telecom Egypt"],
    salaryMin: "$70k", salaryMax: "$180k", salaryPercent: 85
  },
  {
    id: 7, icon: "🎨", title: "مصمم UI/UX",
    category: "design", categoryLabel: "تصميم",
    shortDesc: "بيصمم تجربة المستخدم وشكل التطبيقات علشان تكون سهلة وجذابة وممتعة.",
    fullDesc: "UI/UX Designer بيفكر في كيف المستخدم هيتفاعل مع المنتج — بيعمل Wireframes وPrototypes ويختبر التصميمات مع المستخدمين الحقيقيين. بيستخدم Figma وAdobe XD.",
    skills: ["Figma","Adobe XD","User Research","Wireframing","Prototyping","Design Systems","HTML/CSS Basics"],
    courses: [
      { name: "Google UX Design Certificate — Coursera", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { name: "Figma for Beginners — YouTube", url: "https://www.youtube.com/results?search_query=figma+for+beginners+arabic" },
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org" },
      { name: "UI Design Bootcamp — Udemy", url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/" },
      { name: "UX بالعربي — YouTube", url: "https://www.youtube.com/results?search_query=ux+design+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ],
    companies: ["Apple","Airbnb","Spotify","Delivery Hero","Yassir","Fawry","EG Bank"],
    salaryMin: "$40k", salaryMax: "$110k", salaryPercent: 60
  },
  {
    id: 8, icon: "📱", title: "مطوّر تطبيقات موبايل",
    category: "dev", categoryLabel: "تطوير",
    shortDesc: "بيبني تطبيقات الآيفون والأندرويد — زي تطبيق Uber وTikTok وInstagram.",
    fullDesc: "Mobile Developer بيطوّر تطبيقات للهواتف سواء iOS أو Android أو Cross-Platform. بيستخدم Flutter وReact Native لعمل تطبيق واحد يشتغل على النظامين، أو Swift وKotlin للتطوير الأصلي.",
    skills: ["Flutter / React Native","Dart / JavaScript","Swift (iOS)","Kotlin (Android)","APIs Integration","State Management","App Store Publishing"],
    courses: [
      { name: "Flutter Complete Course — Udemy", url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/" },
      { name: "React Native — The Practical Guide", url: "https://www.udemy.com/course/react-native-the-practical-guide/" },
      { name: "iOS Development with Swift — Apple", url: "https://developer.apple.com/tutorials/swiftui" },
      { name: "Android Development — Google Codelabs مجاني", url: "https://developer.android.com/courses" },
      { name: "Flutter بالعربي — بالعربي دوت كوم", url: "https://www.youtube.com/results?search_query=flutter+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A" }
    ],
    companies: ["Swvl","Halan","Khazna","Yalelo","Vodafone","Etisalat","Orange"],
    salaryMin: "$45k", salaryMax: "$130k", salaryPercent: 70
  }
];

// ===== STATE =====
let activeFilter = 'all';
let searchQuery = '';

// ===== RENDER JOBS =====
function renderJobs() {
  const grid = document.getElementById('jobsGrid');
  const filtered = jobs.filter(job => {
    const matchFilter = activeFilter === 'all' || job.category === activeFilter;
    const matchSearch = job.title.includes(searchQuery) ||
                        job.shortDesc.includes(searchQuery) ||
                        job.categoryLabel.includes(searchQuery);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px 0">
      <div style="font-size:3rem;margin-bottom:16px">🔍</div>
      <p>مفيش وظائف متطابقة مع بحثك — جرب كلمة تانية</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(job => `
    <div class="job-card" onclick="openModal(${job.id})">
      <span class="card-icon">${job.icon}</span>
      <span class="card-category">${job.categoryLabel}</span>
      <h3>${job.title}</h3>
      <p>${job.shortDesc}</p>
      <div class="card-footer">
        <span class="salary-tag">💰 ${job.salaryMin} – ${job.salaryMax}</span>
        <button class="details-btn">التفاصيل ←</button>
      </div>
    </div>
  `).join('');
}

// ===== FILTER =====
function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderJobs();
}

// ===== SEARCH =====
function filterJobs() {
  searchQuery = document.getElementById('searchInput').value.trim();
  renderJobs();
}
function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  renderJobs();
}

// ===== MODAL =====
function openModal(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  document.getElementById('mIcon').textContent = job.icon;
  document.getElementById('mTitle').textContent = job.title;
  document.getElementById('mCategory').textContent = job.categoryLabel;
  document.getElementById('mDesc').textContent = job.fullDesc;

  document.getElementById('mSkills').innerHTML = job.skills
    .map(s => `<span class="skill-tag">${s}</span>`).join('');

  // courses as clickable links
  document.getElementById('mCourses').innerHTML = job.courses
    .map(c => `<li><a href="${c.url}" target="_blank" rel="noopener">${c.name} ↗</a></li>`).join('');

  document.getElementById('mCompanies').innerHTML = job.companies
    .map(c => `<span class="company-tag">${c}</span>`).join('');

  document.getElementById('mSalaryMin').textContent = job.salaryMin;
  document.getElementById('mSalaryMax').textContent = job.salaryMax;

  const bar = document.getElementById('mSalaryBar');
  bar.style.width = '0%';
  setTimeout(() => { bar.style.width = job.salaryPercent + '%'; }, 100);

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeChat();
  }
});

// ===== SCROLL =====
function scrollToJobs() {
  document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

// ===== CONTACT FORM =====
function submitForm() {
  const name  = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg   = document.getElementById('cMsg').value.trim();
  const msgEl = document.getElementById('formMsg');

  if (!name || !email || !msg) {
    msgEl.textContent = '❌ من فضلك املأ كل الحقول';
    msgEl.style.color = '#ff6584';
    msgEl.style.display = 'block';
    return;
  }
  msgEl.textContent = '✅ تم إرسال رسالتك بنجاح! هنرد عليك قريباً.';
  msgEl.style.color = '#43D9A2';
  msgEl.style.display = 'block';
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMsg').value = '';
  setTimeout(() => { msgEl.style.display = 'none'; }, 4000);
}

// ===== CHATBOT =====
let chatOpen = false;
let chatHistory = [];

const SYSTEM_PROMPT = `أنت مساعد ذكي متخصص في وظائف التكنولوجيا والمسارات المهنية التقنية.
اسمك "تك بوت" وأنت موجود على موقع TechCareers العربي.

الوظائف الموجودة في الموقع:
${jobs.map(j => `- ${j.title}: ${j.shortDesc} (راتب: ${j.salaryMin}–${j.salaryMax})`).join('\n')}

مهامك:
- تساعد المستخدمين يختاروا المسار التقني المناسب ليهم
- تشرح متطلبات كل وظيفة والمهارات المطلوبة
- تنصح بالكورسات والموارد التعليمية
- تجاوب على أسئلة سوق العمل التقني
- تتكلم دائماً بالعامية المصرية بطريقة ودية وواضحة
- إجاباتك مختصرة ومفيدة (مش أطول من 3 جمل عادةً)
- لو السؤال مش عن التكنولوجيا أو الوظائف، بتقول بأدب إنك متخصص في الوظائف التقنية بس`;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  const btn = document.getElementById('chatBtn');
  if (chatOpen) {
    win.classList.add('active');
    btn.innerHTML = '✕';
    document.getElementById('chatInput').focus();
    if (chatHistory.length === 0) {
      addBotMessage('أهلاً! 👋 أنا تك بوت، مساعدك في اختيار مسارك التقني. إيه اللي عاوز تعرفه عن وظائف التكنولوجيا؟');
    }
  } else {
    win.classList.remove('active');
    btn.innerHTML = '💬';
  }
}

function closeChat() {
  if (chatOpen) toggleChat();
}

function addBotMessage(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `<span class="chat-avatar">🤖</span><div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTypingIndicator() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot typing-msg';
  div.innerHTML = `<span class="chat-avatar">🤖</span><div class="chat-bubble typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.disabled = true;
  document.getElementById('chatSendBtn').disabled = true;

  addUserMessage(text);
  chatHistory.push({ role: 'user', content: text });

  const typingEl = addTypingIndicator();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'معلش، فيه مشكلة صغيرة. حاول تاني!';

    typingEl.remove();
    addBotMessage(reply);
    chatHistory.push({ role: 'assistant', content: reply });

  } catch (err) {
    typingEl.remove();
    addBotMessage('معلش، مش قادر أوصل للسيرفر دلوقتي. جرب تاني بعد شوية! 🙏');
  }

  input.disabled = false;
  document.getElementById('chatSendBtn').disabled = false;
  input.focus();
}

function chatKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChat();
  }
}

// ===== INIT =====
renderJobs();
