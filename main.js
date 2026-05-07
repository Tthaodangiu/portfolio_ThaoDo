const projectData = {
  "taxi": {
    "type": "Time Series • Forecasting • Data Analysis",
    "title": "Taxi Demand Forecasting NYC",
    "description": "An end-to-end forecasting project that analyzes NYC taxi demand using trip records, geospatial pickup/dropoff information, and weather data. The project compares traditional time-series models and modern machine-learning regressors to support better vehicle allocation and demand planning.",
    "techStack": [
      "Python",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "SARIMAX",
      "Prophet",
      "Random Forest",
      "XGBoost",
      "Streamlit"
    ],
    "workflow": [
      [
        "Data Integration",
        "Combined taxi trip data, taxi zone information, and weather data using datetime and pickup location features."
      ],
      [
        "EDA",
        "Explored demand patterns by hour, weekday, month, pickup zone, rainfall, snowfall, and temperature."
      ],
      [
        "Feature Engineering",
        "Created time features, weather features, spatial features, lag features, and rolling averages."
      ],
      [
        "Modeling",
        "Compared SARIMAX and Prophet with Random Forest and XGBoost."
      ],
      [
        "Deployment",
        "Built a Streamlit app to visualize forecast results and support interactive prediction."
      ]
    ],
    "visuals": [
      [
        "Taxi Demand by Hour",
        "Shows peak demand periods and daily travel behavior.",
        "assets/taxi-demand-by-hour.png",
        "📈"
      ],
      [
        "Weather Impact",
        "Analyzes how rain, snow, and temperature affect taxi demand.",
        "assets/weather-impact.png",
        "🌧️"
      ],
      [
        "Top Pickup Zones",
        "Identifies high-demand geographic areas in NYC.",
        "assets/top-pickup-zones.png",
        "🗺️"
      ],
      [
        "Actual vs Predicted",
        "Compares model predictions against real demand values.",
        "assets/actual-vs-predicted.png",
        "🎯"
      ]
    ],
    "results": [
      [
        "1.4M+",
        "Taxi trip records used for analysis and modeling."
      ],
      [
        "4 Models",
        "SARIMAX, Prophet, Random Forest, and XGBoost were compared."
      ],
      [
        "Weather + Location",
        "External features were added to make forecasting more realistic."
      ],
      [
        "Streamlit",
        "The model results were deployed into an interactive app."
      ]
    ],
    "points": [
      "Taxi demand changes strongly by hour, weekday/weekend behavior, and monthly seasonality.",
      "Weather factors such as rainfall, snowfall, snow depth, and temperature help explain demand fluctuations.",
      "Spatial analysis reveals concentrated pickup activity in high-demand zones.",
      "The project combines EDA, time-series reasoning, feature engineering, model comparison, and deployment."
    ],
    "github": "https://github.com/Tthaodangiu/taxi-demand-forecasting-nyc",
    "demo": "#",
    "report": "#"
  },
  "recommendation": {
    "type": "CRM Analytics • Customer Segmentation • Recommendation System",
    "title": "Personalized Product Recommendation System",
    "description": "A CRM analytics project that segments retail customers using RFM analysis and recommends products using market basket analysis and association rules. The system personalizes product suggestions based on customer segment and purchase behavior.",
    "techStack": [
      "Python",
      "Pandas",
      "RFM Analysis",
      "K-Means",
      "Apriori",
      "Association Rules",
      "Tableau",
      "Snowflake",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "workflow": [
      [
        "Data Storage",
        "Cleaned sales transaction data and stored analytical results in Snowflake for reuse."
      ],
      [
        "Customer Analytics",
        "Used RFM analysis to segment customers by recency, frequency, and monetary value."
      ],
      [
        "Basket Analysis",
        "Applied association rules to discover products frequently purchased together."
      ],
      [
        "Dashboarding",
        "Built Tableau dashboards for customer overview, RFM behavior, and basket analysis."
      ],
      [
        "Web Recommendation",
        "Created a website that displays customer segment, purchase history, and suggested products."
      ]
    ],
    "visuals": [
      [
        "Customer Overview Dashboard",
        "Summarizes customer and sales behavior.",
        "assets/crm-customer-overview.png",
        "👥"
      ],
      [
        "RFM Dashboard",
        "Shows customer segments and differences in buying behavior.",
        "assets/crm-rfm-dashboard.png",
        "📊"
      ],
      [
        "RFM Dashboard",
        "Shows customer segments and differences in buying behavior.",
        "assets/crm-rfm-dashboard2.png",
        "📊"
      ],
      [
        "Basket Analysis",
        "Highlights product combinations by segment.",
        "assets/crm-basket-analysis.png",
        "🛒"
      ],
      [
        "Recommendation Website",
        "Displays personalized product suggestions after user interaction.",
        "assets/crm-recommendation-ui.png",
        "✨"
      ],
      [
        "Recommendation Website",
        "Displays personalized product suggestions after user interaction.",
        "assets/crm-recommendation-ui2.png",
        "✨"
      ]
    ],
    "results": [
      [
        "63.58K",
        "Customers analyzed from the retail transaction dataset."
      ],
      [
        "86,703",
        "Transactions used to understand buying patterns."
      ],
      [
        "81",
        "Products included in the recommendation system."
      ],
      [
        "4 Segments",
        "Rules were separated by customer groups such as Champion, Loyal, Sleep, and Hibernating."
      ]
    ],
    "points": [
      "This project focuses on CRM analytics, customer behavior, segmentation, and business recommendations.",
      "RFM segmentation helps the business understand valuable, loyal, inactive, and at-risk customers.",
      "Association rules support cross-selling by identifying products likely to be purchased together.",
      "The final website connects analytics outputs to a user-facing product recommendation experience."
    ],
    "github": "https://github.com/Tthaodangiu/personalized-product-recommendation-system",
    "demo": "https://tthaodangiu.github.io/personalized-product-recommendation-system/",
    "report": "#"
  },
  "route": {
    "type": "Logistics • Route Optimization • Last-mile Delivery",
    "title": "Last-mile Route Optimization System",
    "description": "A logistics project that studies last-mile delivery challenges and builds a web-based route optimization demo. Instead of relying on a shipper's intuition, the system uses location data, travel time, and routing logic to suggest a more efficient delivery order.",
    "techStack": [
      "JavaScript",
      "HTML",
      "CSS",
      "OSRM",
      "Routing API",
      "VRP Concepts",
      "Geospatial Data",
      "Dashboard",
      "Machine Learning Concept"
    ],
    "workflow": [
      [
        "Business Research",
        "Studied logistics operations, last-mile delivery pain points, and e-commerce delivery expectations."
      ],
      [
        "Problem Definition",
        "Defined route optimization as a data problem involving depot location, delivery jobs, vehicles, and travel-time matrix."
      ],
      [
        "Routing Logic",
        "Used routing concepts and OSRM-style distance/time calculation to estimate travel between stops."
      ],
      [
        "Optimization Demo",
        "Built a web demo that takes a warehouse and delivery orders, then proposes a better delivery sequence."
      ],
      [
        "Dashboard Insight",
        "Added visual analysis to show route order, suggested path, distance/time matrix, and factors affecting travel time."
      ]
    ],
    "visuals": [
      [
        "Route Optimization Workflow",
        "Shows how input data is transformed into optimized delivery order.",
        "assets/route-workflow.png",
        "🔁"
      ],
      [
        "Distance & Time Matrix",
        "Represents travel cost between depot and customer locations.",
        "assets/route-matrix.png",
        "🧮"
      ],
      [
        "Before vs After Route",
        "Compares original delivery order with optimized route order.",
        "assets/route-before-after.png",
        "🚚"
      ],
      [
        "Dashboard Analysis",
        "Visualizes factors that affect delivery travel time.",
        "assets/route-dashboard.png",
        "📍"
      ]
    ],
    "results": [
      [
        "VRP",
        "The project is framed around the Vehicle Routing Problem."
      ],
      [
        "OSRM",
        "Routing logic uses map-based distance and travel-time calculation concepts."
      ],
      [
        "Web Demo",
        "Users can input warehouse and delivery orders to view route suggestions."
      ],
      [
        "Operational Focus",
        "The goal is reducing distance, time, and manual decision-making."
      ]
    ],
    "points": [
      "This project is an operations and optimization project, not just a prediction project.",
      "The business goal is to reduce delivery distance and improve delivery planning in last-mile logistics.",
      "The system demonstrates how geospatial data and routing logic can support better shipper decisions.",
      "Future improvements could include multi-vehicle routing, real-time traffic, time windows, and larger-scale order assignment."
    ],
    "github": "https://github.com/Tthaodangiu/last-mile-route-optimization-system",
    "demo": "https://tthaodangiu.github.io/last-mile-route-optimization-system/",
    "report": "https://docs.google.com/document/d/1PopE--MRrI-D7EksPPvTdscCtvPK7IV9/edit?usp=sharing&ouid=109608831990100262510&rtpof=true&sd=true"
  },
  "fake-news": {
    "type": "NLP • Text Classification • Model Comparison",
    "title": "Fake News Detection",
    "description": "An NLP project that detects fake news by converting article text into numerical features and training classification models. The project compares TF-IDF and Word2Vec representations with PassiveAggressiveClassifier and Logistic Regression.",
    "techStack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Word2Vec",
      "PassiveAggressiveClassifier",
      "Logistic Regression",
      "Confusion Matrix"
    ],
    "workflow": [
      [
        "Text Dataset",
        "Used a news dataset containing article id, title, author, text, and fake/real label."
      ],
      [
        "Text Preprocessing",
        "Prepared textual data for vectorization and model training."
      ],
      [
        "Feature Representation",
        "Created TF-IDF features and Word2Vec-based vector representations."
      ],
      [
        "Model Training",
        "Trained PassiveAggressiveClassifier and Logistic Regression for binary classification."
      ],
      [
        "Evaluation",
        "Compared model outputs using accuracy score and confusion matrix heatmaps."
      ]
    ],
    "visuals": [
      [
        "Model Flowchart",
        "Shows the overall text classification pipeline.",
        "assets/fake-news-flowchart.png",
        "🧭"
      ],
      [
        "TF-IDF Matrix",
        "Represents important words as numerical features.",
        "assets/fake-news-tfidf.png",
        "🧾"
      ],
      [
        "Word2Vec Matrix",
        "Evaluates correct and incorrect fake/real classifications.",
        "assets/fake-news-confusion-matrix.png",
        "🧩"
      ],
      [
        "Model Comparison",
        "Compares results between vectorization and classifier approaches.",
        "assets/fake-news-model-comparison.png",
        "⚖️"
      ]
    ],
    "results": [
      [
        "20,800",
        "News articles used in the dataset."
      ],
      [
        "2 Labels",
        "Binary classification: fake/unreliable and real/reliable."
      ],
      [
        "2 Vectorizers",
        "TF-IDF and Word2Vec were used to represent text."
      ],
      [
        "2 Classifiers",
        "PassiveAggressiveClassifier and Logistic Regression were compared."
      ]
    ],
    "points": [
      "This project focuses on NLP and text classification rather than business forecasting.",
      "TF-IDF captures important words based on frequency and document importance.",
      "Word2Vec represents words using semantic vector embeddings.",
      "Confusion matrices help evaluate where the model misclassifies fake or real news."
    ],
    "github": "https://github.com/Tthaodangiu/Fake-New-Detection",
    "demo": "#",
    "report": "#"
  },
  "business": {
    "type": "Database • Security • Role-based Business System",
    "title": "Hotel Business Management Website",
    "description": "A database management project for hotel booking, room assignment, invoice creation, service usage, payment, debt tracking, revenue reporting, and audit logging. The web application connects user actions to SQL Server objects such as views, functions, stored procedures, triggers, roles, and security policies.",
    "techStack": [
      "SQL Server",
      "Database Design",
      "ERD",
      "3NF",
      "Views",
      "Functions",
      "Stored Procedures",
      "Triggers",
      "Indexing",
      "RBAC",
      "AuditLog",
      "Backup & Restore",
      "HTML",
      "CSS",
      "Python Flask"
    ],
    "workflow": [
      [
        "Database Design",
        "Designed hotel entities, relationships, ERD, relational schema, and normalized the database to 3NF."
      ],
      [
        "Business Procedures",
        "Built stored procedures for customer creation, booking, room assignment, check-in, check-out, invoice creation, service usage, payment, debt lookup, and revenue reports."
      ],
      [
        "Business Control",
        "Used triggers to prevent double booking, enforce room capacity, block invalid invoices/payments, update room/invoice status, and write audit logs."
      ],
      [
        "Security & Roles",
        "Created separate roles for receptionist, cashier, accountant, and manager with least-privilege access through views and procedures."
      ],
      [
        "Web Application",
        "Implemented screens for dashboard, customer management, booking, room availability, check-in/out, invoice, payment, debt, revenue, loyal customers, and AuditLog."
      ]
    ],
    "visuals": [
      [
        "Hotel ERD",
        "Shows the main entities and relationships in the hotel database.",
        "assets/hotel-erd.png",
        "🧱"
      ],
      [
        "Role-based Login",
        "Users access features based on assigned business roles.",
        "assets/hotel-login.png",
        "🔐"
      ],
      [
        "Booking & Room Assignment",
        "Receptionist workflow for booking and assigning rooms.",
        "assets/hotel-booking.png",
        "🏨"
      ],
      [
        "Invoice",
        "Cashier/accounting workflow for billing, payment, and debt tracking.",
        "assets/hotel-payment.png",
        "💳"
      ],
            [
        "Payment",
        "Cashier/accounting workflow for billing, payment, and debt tracking.",
        "assets/hotel-payment1.png",
        "💳"
      ]

    ],
    "results": [
      [
        "4 Roles",
        "Receptionist, cashier, accountant, and manager are separated by permissions."
      ],
      [
        "16+ Procedures",
        "Stored procedures handle core hotel business workflows."
      ],
      [
        "14+ Triggers",
        "Triggers enforce business rules and automate status updates."
      ],
      [
        "Security",
        "Sensitive data masking, encryption, SQL injection prevention, and AuditLog are included."
      ]
    ],
    "points": [
      "This is a database and business-system project, not a machine-learning project.",
      "The strength of this project is database design, business rules, role-based access, and workflow automation.",
      "Triggers protect data consistency by preventing double booking, overpayment, invalid room assignment, and service usage after checkout.",
      "Security features include role-based permissions, masked views, encrypted sensitive data, SQL injection-safe procedures, and audit logging.",
      "The system demonstrates how a real business workflow can be implemented from database layer to web interface."
    ],
    "github": "#",
    "demo": "#",
    "report": "#"
  }
};

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.18 });

revealElements.forEach((element) => revealObserver.observe(element));

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


const portfolioTabs = document.querySelectorAll(".portfolio-tab");
const portfolioPanels = {
  projects: document.getElementById("projectsPanel"),
  certificates: document.getElementById("certificatesPanel"),
  techstack: document.getElementById("techstackPanel")
};

portfolioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    portfolioTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    Object.values(portfolioPanels).forEach((panel) => panel.classList.remove("active"));
    if (portfolioPanels[target]) portfolioPanels[target].classList.add("active");
  });
});

const modal = document.getElementById("projectModal");
const modalType = document.getElementById("modalType");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPoints = document.getElementById("modalPoints");
const modalTechStack = document.getElementById("modalTechStack");
const modalWorkflow = document.getElementById("modalWorkflow");
const modalVisuals = document.getElementById("modalVisuals");
const modalResults = document.getElementById("modalResults");
const modalGithub = document.getElementById("modalGithub");
const modalDemo = document.getElementById("modalDemo");
const modalReport = document.getElementById("modalReport");

function openProjectModal(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  modalTechStack.innerHTML = (project.techStack || [])
    .map((tech) => `<span>${tech}</span>`)
    .join("");

  modalWorkflow.innerHTML = (project.workflow || [])
    .map(([title, desc], index) => `
      <article class="workflow-step">
        <strong>0${index + 1}. ${title}</strong>
        <p>${desc}</p>
      </article>
    `)
    .join("");

  modalVisuals.innerHTML = (project.visuals || [])
    .map(([title, insight, image, icon]) => `
      <article class="visual-card">
        <img src="${image}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="visual-placeholder" style="display:none;">${icon || "📊"}</div>
        <div class="visual-card-content">
          <h5>${title}</h5>
          <p>${insight}</p>
        </div>
      </article>
    `)
    .join("");

  modalResults.innerHTML = (project.results || [])
    .map(([value, label]) => `
      <article class="result-card">
        <span class="result-value">${value}</span>
        <p>${label}</p>
      </article>
    `)
    .join("");

  modalPoints.innerHTML = (project.points || [])
    .map((point) => `<li>${point}</li>`)
    .join("");

  modalGithub.href = project.github || "#";
  modalDemo.href = project.demo || "#";
  modalReport.href = project.report || "#";

  modalGithub.style.display = !project.github || project.github === "#" ? "none" : "inline-flex";
  modalDemo.style.display = !project.demo || project.demo === "#" ? "none" : "inline-flex";
  modalReport.style.display = !project.report || project.report === "#" ? "none" : "inline-flex";

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card.dataset.project));
});

document.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
});
