const questionBank = [
  {
    id: 1,
    type: 'single',
    topic: 'Azure App Service',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'You need to deploy a web app to Azure App Service and want deployment slots for staged rollouts. Which App Service plan tier should you choose?',
    options: [
      'Free',
      'Shared',
      'Standard or higher',
      'Basic only'
    ],
    answer: [2],
    explanation: 'Deployment slots are supported in Standard, Premium, and Isolated App Service tiers. Free, Shared, and Basic do not provide the slot feature, so Standard or higher is required.',
    whyWrong: [
      'Free and Shared tiers do not support deployment slots.',
      'Basic is still below the tier where slots are available.'
    ]
  },
  {
    id: 2,
    type: 'single',
    topic: 'Managed Identity',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'An Azure Function must access a Key Vault secret without storing credentials in code. What is the best identity mechanism to use?',
    options: [
      'Shared access signature',
      'Managed identity',
      'Service principal secret embedded in app settings',
      'Storage account access key'
    ],
    answer: [1],
    explanation: 'Managed identity is the preferred credential-free authentication model for Azure resources. It lets the Function authenticate to Key Vault without storing secrets in the application.',
    whyWrong: [
      'A SAS is for storage access, not Key Vault authentication.',
      'Embedding a service principal secret is less secure and unnecessary.',
      'Storage account keys do not help with Key Vault access.'
    ]
  },
  {
    id: 3,
    type: 'single',
    topic: 'Azure Blob Storage',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'You need to minimize cost for data that is rarely accessed but must remain online. Which blob access tier should you choose?',
    options: ['Hot', 'Cool', 'Archive', 'Premium'],
    answer: [1],
    explanation: 'The Cool tier is designed for infrequently accessed data that still needs immediate online availability. Archive is cheaper, but it is offline and requires rehydration before access.',
    whyWrong: [
      'Hot is optimized for frequent access and higher cost.',
      'Archive is offline, so it does not stay immediately available.',
      'Premium is for low-latency workloads, not cost optimization.'
    ]
  },
  {
    id: 4,
    type: 'single',
    topic: 'Azure Functions',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which Azure Functions trigger is best suited for processing a message that arrives in an Azure Storage queue?',
    options: ['HTTP trigger', 'Queue trigger', 'Timer trigger', 'Event Hubs trigger'],
    answer: [1],
    explanation: 'A Queue trigger is designed to react when a message is added to an Azure Storage queue. It is the direct fit for queue-based background processing.',
    whyWrong: [
      'HTTP trigger is for request-response scenarios.',
      'Timer trigger runs on a schedule rather than on queue arrivals.',
      'Event Hubs trigger is for Event Hubs, not Storage queues.'
    ]
  },
  {
    id: 5,
    type: 'multiple',
    topic: 'Azure Service Bus',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which Azure Service Bus features help guarantee ordered processing within a message group? Select all that apply.',
    options: [
      'Sessions',
      'Duplicate detection',
      'Partitioning',
      'Message locking'
    ],
    answer: [0, 3],
    explanation: 'Sessions preserve order for messages that belong to the same session, and message locking ensures a message is processed by only one receiver at a time. Together they support controlled, ordered handling for grouped messages.',
    whyWrong: [
      'Duplicate detection prevents repeated messages, but it does not enforce ordering.',
      'Partitioning improves scale, but it does not guarantee ordering within a logical group.'
    ]
  },
  {
    id: 6,
    type: 'single',
    topic: 'Azure Cosmos DB',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Your application requires strong read consistency for a globally distributed Cosmos DB account. Which consistency level should you choose?',
    options: ['Session', 'Consistent prefix', 'Bounded staleness', 'Strong'],
    answer: [3],
    explanation: 'Strong consistency provides the highest guarantee by ensuring reads always return the most recent committed write. It is the correct choice when the application demands the strictest consistency model.',
    whyWrong: [
      'Session consistency is weaker and only guarantees monotonic reads within a session.',
      'Consistent prefix preserves order but not freshness of the latest write.',
      'Bounded staleness allows a limited lag, so it is not as strict as strong consistency.'
    ]
  },
  {
    id: 7,
    type: 'single',
    topic: 'Azure Key Vault',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'You want to store an application secret and rotate it without redeploying the app. Which Azure service is most appropriate?',
    options: ['Azure Key Vault', 'Azure Table Storage', 'Azure Queue Storage', 'Azure Monitor'],
    answer: [0],
    explanation: 'Azure Key Vault is designed to securely store and manage secrets, keys, and certificates. It also supports rotation workflows, which makes it the right service for secret lifecycle management.',
    whyWrong: [
      'Table Storage is for structured NoSQL data, not secrets.',
      'Queue Storage is for message passing, not secret storage.',
      'Azure Monitor is for telemetry and diagnostics.'
    ]
  },
  {
    id: 8,
    type: 'single',
    topic: 'Azure Event Grid',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which service is best for lightweight event routing from Azure resources to serverless handlers with low latency?',
    options: ['Azure Event Grid', 'Azure Data Factory', 'Azure Synapse', 'Azure Batch'],
    answer: [0],
    explanation: 'Azure Event Grid is built for event distribution and routing, especially to serverless endpoints such as Functions or WebHooks. It is optimized for reactive, low-latency event delivery.',
    whyWrong: [
      'Data Factory orchestrates data pipelines, not event routing.',
      'Synapse is for analytics and warehousing.',
      'Batch is for large-scale parallel compute, not event dispatch.'
    ]
  },
  {
    id: 9,
    type: 'single',
    topic: 'Azure Storage',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which tool is commonly used to upload large numbers of files to Azure Blob Storage from a local machine or VM?',
    options: ['AzCopy', 'docker push', 'kubectl apply', 'SqlPackage'],
    answer: [0],
    explanation: 'AzCopy is the purpose-built command-line utility for efficient bulk transfer of data to and from Azure Storage. It is the standard choice for large file uploads.',
    whyWrong: [
      'docker push uploads container images, not blob files.',
      'kubectl apply manages Kubernetes resources, not storage transfer.',
      'SqlPackage is for SQL database deployment, not blob upload.'
    ]
  },
  {
    id: 10,
    type: 'multiple',
    topic: 'Azure API Management',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which capabilities are commonly configured in Azure API Management? Select all that apply.',
    options: [
      'Rate limiting',
      'Request transformation',
      'Virtual machine scaling',
      'JWT validation'
    ],
    answer: [0, 1, 3],
    explanation: 'API Management supports gateway policies such as rate limiting, request and response transformation, and JWT validation. These are core API governance and security capabilities.',
    whyWrong: [
      'VM scaling is an infrastructure task, not an API Management feature.'
    ]
  },
  {
    id: 11,
    type: 'single',
    topic: 'Azure App Service',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'You need to authenticate users to an App Service web app using Microsoft Entra ID with minimal code changes. What feature should you enable?',
    options: ['Custom domain mapping', 'App Service Authentication', 'Azure Front Door', 'Traffic Manager'],
    answer: [1],
    explanation: 'App Service Authentication, also called Easy Auth, provides built-in identity integration and removes the need to write custom sign-in logic for most scenarios.',
    whyWrong: [
      'Custom domain mapping only changes the URL.',
      'Front Door is a global routing service, not an authentication feature.',
      'Traffic Manager performs DNS-based routing, not sign-in.'
    ]
  },
  {
    id: 12,
    type: 'single',
    topic: 'Azure Storage Queues',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'A message in Azure Queue Storage should be processed later if the first attempt fails. Which queue feature controls when a message becomes visible again?',
    options: ['TTL only', 'Visibility timeout', 'Storage tier', 'Soft delete'],
    answer: [1],
    explanation: 'Visibility timeout determines how long a dequeued message remains hidden from other consumers. If processing fails, the message can become visible again after the timeout expires.',
    whyWrong: [
      'TTL controls expiry, not retry visibility timing.',
      'Storage tier is unrelated to queue retry behavior.',
      'Soft delete is a blob recovery feature, not queue visibility management.'
    ]
  },
  {
    id: 13,
    type: 'multiple',
    topic: 'Azure Monitor',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which components are part of the Azure Monitor ecosystem for application observability? Select all that apply.',
    options: [
      'Application Insights',
      'Log Analytics workspace',
      'Azure DevOps Boards',
      'Metrics explorer'
    ],
    answer: [0, 1, 3],
    explanation: 'Application Insights, Log Analytics, and Metrics explorer are core parts of Azure Monitor for application telemetry, logs, and metric analysis.',
    whyWrong: [
      'Azure DevOps Boards is a work tracking tool, not an observability service.'
    ]
  },
  {
    id: 14,
    type: 'single',
    topic: 'Azure Container Registry',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'You want to store and manage private container images for your application. Which Azure service should you use?',
    options: ['Azure Container Registry', 'Azure Service Bus', 'Azure Files', 'Azure Cache for Redis'],
    answer: [0],
    explanation: 'Azure Container Registry is the managed registry for private Docker and OCI images. It is the right service for image storage and distribution in Azure-based container workflows.',
    whyWrong: [
      'Service Bus is for messaging.',
      'Azure Files is for file shares, not images.',
      'Redis is an in-memory cache, not a registry.'
    ]
  },
  {
    id: 15,
    type: 'single',
    topic: 'Azure Functions',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which Functions hosting plan is most appropriate when you need advanced networking and predictable scale behavior?',
    options: ['Consumption', 'Premium', 'Windows Free', 'Shared'],
    answer: [1],
    explanation: 'The Premium plan provides features such as VNET integration, no cold starts for prewarmed instances, and more predictable scaling. It is the better choice when advanced networking matters.',
    whyWrong: [
      'Consumption is cost-effective but has stricter platform limits.',
      'Free and Shared plans are not suitable for production-grade advanced networking needs.'
    ]
  },
  {
    id: 16,
    type: 'single',
    topic: 'Azure Blob Storage',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which mechanism should you use to grant temporary access to a specific blob without exposing the storage account key?',
    options: ['Shared key authorization', 'Account key rotation', 'Shared access signature', 'Blob metadata'],
    answer: [2],
    explanation: 'A Shared Access Signature (SAS) provides scoped, time-limited access without sharing the account key. It is the standard secure delegation mechanism for blob access.',
    whyWrong: [
      'Shared key authorization exposes a powerful long-lived secret.',
      'Key rotation does not itself grant scoped temporary access.',
      'Blob metadata is for descriptive data, not authorization.'
    ]
  },
  {
    id: 17,
    type: 'multiple',
    topic: 'Azure App Configuration',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which scenarios are a good fit for Azure App Configuration? Select all that apply.',
    options: [
      'Centralized application settings',
      'Feature flags',
      'Long-term relational transactions',
      'Environment-based configuration separation'
    ],
    answer: [0, 1, 3],
    explanation: 'App Configuration is built for centralized settings, feature management, and environment-aware configuration. It is not a transactional data store.',
    whyWrong: [
      'Relational transaction storage belongs in a database, not App Configuration.'
    ]
  },
  {
    id: 18,
    type: 'single',
    topic: 'Azure Event Hubs',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'You need to ingest telemetry from many devices at very high throughput. Which Azure service is the best fit?',
    options: ['Event Hubs', 'Queue Storage', 'Table Storage', 'Azure Files'],
    answer: [0],
    explanation: 'Event Hubs is designed for high-throughput streaming ingestion and partitioned event capture. It is the right service for telemetry pipelines.',
    whyWrong: [
      'Queue Storage is a simpler queue, not a high-volume streaming platform.',
      'Table Storage is a key-value store.',
      'Azure Files is for SMB-style file sharing.'
    ]
  },
  {
    id: 19,
    type: 'single',
    topic: 'Azure Cosmos DB',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which Cosmos DB concept is used to distribute data and request units across logical partitions?',
    options: ['Container', 'Partition key', 'Stored procedure', 'Analytical store'],
    answer: [1],
    explanation: 'The partition key determines how data is distributed and scaled across logical partitions. It is fundamental to Cosmos DB throughput and data organization.',
    whyWrong: [
      'A container is the collection level, not the partitioning choice.',
      'Stored procedures run within a partition but do not define distribution.',
      'Analytical store is for analytical workloads, not partitioning.'
    ]
  },
  {
    id: 20,
    type: 'multiple',
    topic: 'Azure Security',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which practices improve secret handling in an Azure application? Select all that apply.',
    options: [
      'Use Key Vault references',
      'Store secrets in source control',
      'Use managed identity for access',
      'Rotate secrets regularly'
    ],
    answer: [0, 2, 3],
    explanation: 'Key Vault references, managed identity, and regular rotation are secure patterns for secret management. Storing secrets in source control is a security anti-pattern.',
    whyWrong: [
      'Putting secrets in source control creates exposure risk and audit issues.'
    ]
  },
  {
    id: 21,
    type: 'single',
    topic: 'Azure Storage',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'A Blob Storage container should automatically archive a blob 30 days after it was last modified. Which feature should you use?',
    options: ['Lifecycle management policy', 'AzCopy', 'Blob index tags', 'Storage Explorer'],
    answer: [0],
    explanation: 'Lifecycle management policies automate tiering and deletion based on age or access conditions. They are the correct solution for moving blobs to Archive after a set period.',
    whyWrong: [
      'AzCopy is a transfer tool.',
      'Blob index tags help with search and filtering, not automatic tiering.',
      'Storage Explorer is a management tool, not a lifecycle engine.'
    ]
  },
  {
    id: 22,
    type: 'single',
    topic: 'Azure Functions',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'You want a function to run every 5 minutes. Which trigger should you use?',
    options: ['HTTP trigger', 'Cosmos DB trigger', 'Timer trigger', 'Blob trigger'],
    answer: [2],
    explanation: 'A Timer trigger is designed for scheduled execution using CRON-like expressions or fixed intervals. It is the direct fit for periodic tasks.',
    whyWrong: [
      'HTTP trigger requires a request.',
      'Cosmos DB trigger listens to changes in a Cosmos container.',
      'Blob trigger reacts to blob changes, not schedules.'
    ]
  },
  {
    id: 23,
    type: 'single',
    topic: 'Azure Service Bus',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which Service Bus feature should you use when you want to defer processing until a later time and control message order per conversation?',
    options: ['Dead-letter queue', 'Sessions', 'Auto-forwarding', 'Scheduled enqueue time only'],
    answer: [1],
    explanation: 'Sessions group related messages and preserve order within a conversation or workflow. They are the correct option when conversation affinity and ordered handling are important.',
    whyWrong: [
      'Dead-letter queues store failed messages.',
      'Auto-forwarding routes messages between entities but does not manage conversation order.',
      'Scheduled enqueue time delays a single message but does not provide session ordering.'
    ]
  },
  {
    id: 24,
    type: 'multiple',
    topic: 'Azure Container Apps',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which characteristics are true about event-driven container workloads in Azure Container Apps? Select all that apply.',
    options: [
      'Supports KEDA-based scaling',
      'Designed for microservices',
      'Requires manual VM patching',
      'Can scale to zero'
    ],
    answer: [0, 1, 3],
    explanation: 'Azure Container Apps supports KEDA-based autoscaling, is well suited for microservices, and can scale to zero in event-driven scenarios. It abstracts away VM management.',
    whyWrong: [
      'Manual VM patching is not part of the platform model.'
    ]
  },
  {
    id: 25,
    type: 'single',
    topic: 'Azure Blob Storage',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which blob feature lets you store arbitrary key-value metadata on a blob for later filtering or display?',
    options: ['Blob tags', 'Blob metadata', 'Blob snapshots', 'Container leases'],
    answer: [1],
    explanation: 'Blob metadata stores name-value pairs associated with the blob. It is commonly used for descriptive information that travels with the object.',
    whyWrong: [
      'Blob tags are indexed for search, but the question asks about arbitrary metadata storage.',
      'Snapshots capture versions, not descriptive key-value data.',
      'Container leases control locking, not metadata.'
    ]
  },
  {
    id: 26,
    type: 'single',
    topic: 'Azure Security',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'You need to call Azure Storage from an app using a shared token without exposing the account key. Which authorization approach fits best?',
    options: ['Azure AD OAuth token', 'Shared key in request headers', 'Public anonymous access', 'Local emulator only'],
    answer: [0],
    explanation: 'Azure AD OAuth tokens provide secure, identity-based authorization and avoid distributing account keys. This is the preferred model for modern Azure applications.',
    whyWrong: [
      'Shared keys are powerful secrets and should be avoided when a token-based option exists.',
      'Anonymous access is insecure and usually disabled.',
      'The emulator is only for local development.'
    ]
  },
  {
    id: 27,
    type: 'single',
    topic: 'Azure Durable Functions',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which pattern should you use in Durable Functions when one orchestrator runs a set of fan-out activities and then combines their results?',
    options: ['Event sourcing', 'Fan-out/fan-in', 'Circuit breaker', 'CQRS'],
    answer: [1],
    explanation: 'Fan-out/fan-in is the standard Durable Functions pattern for distributing work across multiple activities and then aggregating the results. It matches the orchestrated parallel-processing scenario.',
    whyWrong: [
      'Event sourcing is a data persistence pattern.',
      'Circuit breaker is a resilience pattern, not orchestration flow.',
      'CQRS separates reads and writes but does not describe orchestrator fan-out.'
    ]
  },
  {
    id: 28,
    type: 'multiple',
    topic: 'Azure Table Storage',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'Which statements about Azure Table Storage are correct? Select all that apply.',
    options: [
      'It is a NoSQL key-value store',
      'It uses PartitionKey and RowKey',
      'It supports relational joins',
      'It is schema flexible'
    ],
    answer: [0, 1, 3],
    explanation: 'Azure Table Storage is a schema-flexible NoSQL store that organizes entities by PartitionKey and RowKey. It does not provide relational joins.',
    whyWrong: [
      'Relational joins are not a feature of Table Storage.'
    ]
  },
  {
    id: 29,
    type: 'single',
    topic: 'Azure DevOps / CI-CD',
    year: '2024',
    source: 'AZ-204 practice theme',
    difficulty: 'Easy',
    question: 'What is the best way to automate deployment of an Azure web app after code is committed?',
    options: ['Manual portal upload only', 'CI/CD pipeline', 'Storage account lifecycle policy', 'Azure DNS zone'],
    answer: [1],
    explanation: 'A CI/CD pipeline automates build, test, and deployment steps after code changes. It is the standard approach for repeatable app delivery.',
    whyWrong: [
      'Manual portal upload is not automated.',
      'Lifecycle policies apply to storage objects, not deployments.',
      'DNS zones manage name resolution, not code delivery.'
    ]
  },
  {
    id: 30,
    type: 'single',
    topic: 'Azure App Service',
    year: '2023',
    source: 'AZ-204 practice theme',
    difficulty: 'Medium',
    question: 'Which App Service feature helps you deploy code to a staging environment and then swap it into production with minimal downtime?',
    options: ['Deployment slots', 'Autoscale rules', 'Hybrid connections', 'IP restrictions'],
    answer: [0],
    explanation: 'Deployment slots let you stage and validate a new version before performing a slot swap into production. This minimizes downtime and reduces deployment risk.',
    whyWrong: [
      'Autoscale changes instance count but does not stage releases.',
      'Hybrid connections are for connectivity, not release management.',
      'IP restrictions control access, not deployment flow.'
    ]
  }
];

const STORAGE_KEY = 'aaditya-sir-az204-mock';
const THEME_KEY = 'aaditya-sir-theme';
const QUESTION_SECONDS = 90;
const EXAM_SECONDS = questionBank.length * QUESTION_SECONDS;

const dom = {
  appShell: document.getElementById('appShell'),
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  closeSidebarButton: document.getElementById('closeSidebarButton'),
  sidebar: document.getElementById('sidebar'),
  examTimer: document.getElementById('examTimer'),
  questionTimer: document.getElementById('questionTimer'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  answeredText: document.getElementById('answeredText'),
  questionNumber: document.getElementById('questionNumber'),
  questionText: document.getElementById('questionText'),
  questionType: document.getElementById('questionType'),
  difficultyChip: document.getElementById('difficultyChip'),
  sourceChip: document.getElementById('sourceChip'),
  sourceLabel: document.getElementById('sourceLabel'),
  yearLabel: document.getElementById('yearLabel'),
  topicLabel: document.getElementById('topicLabel'),
  optionsForm: document.getElementById('optionsForm'),
  questionCard: document.getElementById('questionCard'),
  selectionNote: document.getElementById('selectionNote'),
  feedbackPanel: document.getElementById('feedbackPanel'),
  feedbackTitle: document.getElementById('feedbackTitle'),
  feedbackScore: document.getElementById('feedbackScore'),
  correctAnswerText: document.getElementById('correctAnswerText'),
  yourAnswerText: document.getElementById('yourAnswerText'),
  explanationText: document.getElementById('explanationText'),
  whyBox: document.getElementById('whyBox'),
  markReviewButton: document.getElementById('markReviewButton'),
  nextButton: document.getElementById('nextButton'),
  prevButton: document.getElementById('prevButton'),
  submitButton: document.getElementById('submitButton'),
  shuffleButton: document.getElementById('shuffleButton'),
  restartButton: document.getElementById('restartButton'),
  clearSaveButton: document.getElementById('clearSaveButton'),
  paletteGrid: document.getElementById('paletteGrid'),
  resultsPanel: document.getElementById('resultsPanel'),
  performanceTitle: document.getElementById('performanceTitle'),
  performanceMessage: document.getElementById('performanceMessage'),
  finalScore: document.getElementById('finalScore'),
  percentageValue: document.getElementById('percentageValue'),
  accuracyValue: document.getElementById('accuracyValue'),
  correctValue: document.getElementById('correctValue'),
  wrongValue: document.getElementById('wrongValue'),
  timeTakenValue: document.getElementById('timeTakenValue'),
  reviewCountValue: document.getElementById('reviewCountValue'),
  weakTopics: document.getElementById('weakTopics'),
  reviewList: document.getElementById('reviewList'),
  backToTestButton: document.getElementById('backToTestButton')
};

const state = {
  order: questionBank.map((_, index) => index),
  currentIndex: 0,
  selections: {},
  submitted: {},
  reviewed: {},
  visited: {},
  startedAt: null,
  elapsedSeconds: 0,
  questionRemaining: QUESTION_SECONDS,
  questionStartedAt: Date.now(),
  examRemaining: EXAM_SECONDS,
  resultShown: false,
  theme: 'dark',
  soundEnabled: true,
  lastAutoAdvance: false
};

let examTicker = null;
let questionTicker = null;
let audioContext = null;

function init() {
  applyTheme(loadTheme());
  initializeFreshAttempt();
  buildPalette();
  bindEvents();
  hydrateTimers();
  if (state.resultShown) {
    renderResults(evaluateTest());
  } else {
    render();
    startTimers();
  }
}

function initializeFreshAttempt() {
  Object.assign(state, {
    order: questionBank.map((_, index) => index),
    currentIndex: 0,
    selections: {},
    submitted: {},
    reviewed: {},
    visited: {},
    startedAt: Date.now(),
    elapsedSeconds: 0,
    questionRemaining: QUESTION_SECONDS,
    examRemaining: questionBank.length * QUESTION_SECONDS,
    resultShown: false,
    lastAutoAdvance: false
  });
}

function bindEvents() {
  dom.themeToggle.addEventListener('click', toggleTheme);
  dom.sidebarToggle.addEventListener('click', () => dom.sidebar.classList.toggle('open'));
  dom.closeSidebarButton.addEventListener('click', () => dom.sidebar.classList.remove('open'));
  dom.prevButton.addEventListener('click', goPrevious);
  dom.nextButton.addEventListener('click', handleNext);
  dom.submitButton.addEventListener('click', submitTest);
  dom.shuffleButton.addEventListener('click', shuffleQuestions);
  dom.restartButton.addEventListener('click', restartTest);
  dom.clearSaveButton.addEventListener('click', clearSavedProgress);
  dom.markReviewButton.addEventListener('click', toggleReviewFlag);
  dom.backToTestButton.addEventListener('click', () => {
    dom.resultsPanel.classList.add('hidden');
    state.resultShown = false;
    render();
    startTimers();
  });

  document.addEventListener('keydown', handleKeyboard);
  window.addEventListener('beforeunload', saveProgress);
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function applyTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  document.body.classList.toggle('light-mode', state.theme === 'light');
  dom.themeIcon.textContent = state.theme === 'light' ? '◑' : '◐';
  localStorage.setItem(THEME_KEY, state.theme);
}

function toggleTheme() {
  applyTheme(state.theme === 'light' ? 'dark' : 'light');
  playTone(state.theme === 'light' ? 520 : 320, 0.07, 'sine');
}

function buildPalette() {
  dom.paletteGrid.innerHTML = '';
  state.order.forEach((questionIndex, position) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'palette-button';
    button.dataset.position = String(position);
    button.innerHTML = `<span class="mini-dot"></span><span>${position + 1}</span>`;
    button.addEventListener('click', () => jumpTo(position));
    dom.paletteGrid.appendChild(button);
  });
}

function currentQuestion() {
  return questionBank[state.order[state.currentIndex]];
}

function getSelection(questionId) {
  return state.selections[questionId] || [];
}

function setSelection(questionId, selectedIndexes) {
  state.selections[questionId] = Array.from(new Set(selectedIndexes)).sort((a, b) => a - b);
  state.visited[questionId] = true;
  saveProgress();
}

function isAnswered(questionId) {
  return Boolean(state.submitted[questionId]);
}

function questionCountAnswered() {
  return Object.values(state.submitted).filter(Boolean).length;
}

function render() {
  if (state.resultShown) return;
  const question = currentQuestion();
  const questionId = question.id;
  const currentPosition = state.currentIndex + 1;
  const total = state.order.length;
  const submittedState = state.submitted[questionId];
  const selected = getSelection(questionId);

  dom.questionNumber.textContent = `Q${currentPosition}`;
  dom.questionText.textContent = question.question;
  dom.questionType.textContent = question.type === 'multiple' ? 'Multiple Correct' : 'Single Correct';
  dom.difficultyChip.textContent = `Difficulty: ${question.difficulty}`;
  dom.sourceChip.textContent = question.source;
  dom.sourceLabel.textContent = `Source: ${question.source}`;
  dom.yearLabel.textContent = `Year: ${question.year}`;
  dom.topicLabel.textContent = `Topic: ${question.topic}`;
  dom.examTimer.textContent = formatTime(state.examRemaining);
  dom.questionTimer.textContent = formatTime(state.questionRemaining);
  dom.progressText.textContent = `Question ${currentPosition} of ${total}`;
  dom.answeredText.textContent = `${questionCountAnswered()} answered`;
  dom.progressFill.style.width = `${(currentPosition / total) * 100}%`;
  dom.selectionNote.textContent = submittedState ? 'This question is locked. Use Next to continue or go back to review.' : 'Select an option to unlock the next step.';
  dom.selectionNote.style.color = 'var(--muted)';

  dom.markReviewButton.textContent = state.reviewed[questionId] ? 'Marked for review' : 'Mark for review';
  dom.markReviewButton.classList.toggle('selected-answer', Boolean(state.reviewed[questionId]));

  renderOptions(question, selected, submittedState);
  renderFeedback(question, submittedState, selected);
  updatePalette();
  updateButtons(submittedState, selected);
  updateSidebarState();
  animateCard();
}

function animateCard() {
  dom.questionCard.classList.remove('slide-enter');
  void dom.questionCard.offsetWidth;
  dom.questionCard.classList.add('slide-enter');
}

function renderOptions(question, selected, submittedState) {
  dom.optionsForm.innerHTML = '';
  const template = document.getElementById('optionTemplate');
  const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';

  question.options.forEach((optionText, index) => {
    const fragment = template.content.cloneNode(true);
    const label = fragment.querySelector('.option-card');
    const input = fragment.querySelector('input');
    const text = fragment.querySelector('.option-text');
    const marker = fragment.querySelector('.option-marker');

    input.type = inputType;
    input.name = `question-${question.id}`;
    input.checked = selected.includes(index);
    input.disabled = submittedState;
    text.textContent = `${String.fromCharCode(65 + index)}. ${optionText}`;

    if (question.type === 'multiple') {
      marker.setAttribute('aria-hidden', 'true');
    }

    if (submittedState) {
      const correct = question.answer.includes(index);
      const chosen = selected.includes(index);
      label.classList.toggle('correct-answer', correct);
      label.classList.toggle('wrong-answer', chosen && !correct);
    } else {
      label.classList.toggle('selected-answer', selected.includes(index));
    }

    input.addEventListener('change', () => handleSelection(question, index, input.checked));
    label.addEventListener('click', () => {
      if (submittedState) return;
      if (question.type === 'single') {
        handleSelection(question, index, true);
      }
    });

    dom.optionsForm.appendChild(fragment);
  });
}

function handleSelection(question, index, checked) {
  if (state.submitted[question.id]) return;

  let updated = [...getSelection(question.id)];
  if (question.type === 'single') {
    updated = checked ? [index] : [];
  } else if (checked) {
    updated.push(index);
  } else {
    updated = updated.filter((value) => value !== index);
  }

  setSelection(question.id, updated);
  render();
}

function renderFeedback(question, submittedState, selected) {
  if (!submittedState) {
    dom.feedbackPanel.classList.add('hidden');
    return;
  }

  dom.feedbackPanel.classList.remove('hidden');
  const isCorrect = arraysMatch(submittedState.userAnswer, question.answer);
  dom.feedbackTitle.textContent = isCorrect ? 'Correct response' : 'Incorrect response';
  dom.feedbackScore.textContent = isCorrect ? '+1 point' : '0 points';
  dom.correctAnswerText.textContent = formatAnswer(question, question.answer);
  dom.yourAnswerText.textContent = selected.length ? formatAnswer(question, selected) : 'No answer selected';
  dom.explanationText.textContent = question.explanation;

  dom.whyBox.innerHTML = '';
  const wrongs = question.options
    .map((option, index) => ({ option, index }))
    .filter(({ index }) => !question.answer.includes(index));

  wrongs.forEach(({ option, index }, wrongIndex) => {
    const item = document.createElement('div');
    item.className = 'why-item';
    item.innerHTML = `<strong>${String.fromCharCode(65 + index)}. ${option}</strong><span>${question.whyWrong?.[wrongIndex] || 'This option is not the correct choice for this scenario.'}</span>`;
    dom.whyBox.appendChild(item);
  });
}

function updateButtons(submittedState, selected) {
  const question = currentQuestion();
  const isLast = state.currentIndex === state.order.length - 1;
  const hasSelection = selected.length > 0;

  dom.prevButton.disabled = state.currentIndex === 0;
  dom.prevButton.style.opacity = state.currentIndex === 0 ? '0.45' : '1';

  if (!submittedState) {
    dom.nextButton.textContent = 'Check Answer';
    dom.nextButton.disabled = !hasSelection;
    dom.submitButton.disabled = true;
  } else {
    dom.nextButton.textContent = isLast ? 'Finish Test' : 'Next Question';
    dom.nextButton.disabled = false;
    dom.submitButton.disabled = false;
  }

  dom.submitButton.textContent = isLast ? 'Submit Test' : 'Submit Test';
}

function updatePalette() {
  Array.from(dom.paletteGrid.children).forEach((button, position) => {
    const question = questionBank[state.order[position]];
    const questionId = question.id;
    button.className = 'palette-button';
    if (state.submitted[questionId]) button.classList.add('answered');
    if (state.reviewed[questionId]) button.classList.add('review');
    if (position === state.currentIndex) button.classList.add('current');
    button.title = state.submitted[questionId] ? 'Answered' : state.reviewed[questionId] ? 'Marked for review' : 'Unanswered';
  });
}

function updateSidebarState() {
  if (window.innerWidth <= 760) {
    dom.sidebar.classList.remove('open');
  }
}

function goPrevious() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  resetQuestionTimer();
  playTone(260, 0.05, 'triangle');
  render();
  saveProgress();
}

function handleNext() {
  const question = currentQuestion();
  const questionId = question.id;
  const submittedState = state.submitted[questionId];
  const selected = getSelection(questionId);

  if (!submittedState) {
    if (!selected.length) {
      dom.selectionNote.textContent = 'Select at least one option before moving ahead.';
      dom.selectionNote.style.color = 'var(--bad)';
      pulseSelection();
      playTone(180, 0.06, 'sawtooth');
      return;
    }
    submitCurrentQuestion();
    return;
  }

  if (state.currentIndex === state.order.length - 1) {
    submitTest();
    return;
  }

  state.currentIndex += 1;
  resetQuestionTimer();
  playTone(320, 0.05, 'triangle');
  render();
  saveProgress();
}

function pulseSelection() {
  dom.selectionNote.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(0)' }
    ],
    { duration: 280, easing: 'ease-out' }
  );
}

function submitCurrentQuestion() {
  const question = currentQuestion();
  const selected = getSelection(question.id);
  const isCorrect = arraysMatch(selected, question.answer);

  state.submitted[question.id] = {
    userAnswer: [...selected],
    correct: isCorrect,
    answeredAt: Date.now()
  };

  if (isCorrect) {
    playTone(720, 0.09, 'sine');
  } else {
    playTone(160, 0.1, 'square');
  }

  dom.selectionNote.textContent = isCorrect ? 'Correct. Review the explanation, then move ahead.' : 'Incorrect. Review the explanation, then move ahead.';
  render();
  saveProgress();
}

function toggleReviewFlag() {
  const question = currentQuestion();
  state.reviewed[question.id] = !state.reviewed[question.id];
  render();
  saveProgress();
  playTone(state.reviewed[question.id] ? 420 : 240, 0.05, 'triangle');
}

function submitTest() {
  if (!state.startedAt) state.startedAt = Date.now();
  stopTimers();
  const summary = evaluateTest();
  renderResults(summary);
  saveProgress();
}

function evaluateTest() {
  const attempts = questionBank.map((question) => {
    const submitted = state.submitted[question.id];
    const userAnswer = submitted ? submitted.userAnswer : [];
    const correct = submitted ? submitted.correct : false;
    return {
      question,
      userAnswer,
      correct,
      attempted: Boolean(submitted)
    };
  });

  const correctCount = attempts.filter((item) => item.correct).length;
  const wrongCount = attempts.filter((item) => item.attempted && !item.correct).length + attempts.filter((item) => !item.attempted).length;
  const attemptedCount = attempts.filter((item) => item.attempted).length;
  const percentage = Math.round((correctCount / questionBank.length) * 100);
  const accuracy = attemptedCount ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const totalExam = questionBank.length * QUESTION_SECONDS;
  const timeTaken = Math.max(0, totalExam - state.examRemaining);
  const weakTopics = analyzeWeakTopics(attempts);
  const message = buildPerformanceMessage(percentage, correctCount);

  return { correctCount, wrongCount, percentage, accuracy, timeTaken, weakTopics, message, attemptedCount };
}

function renderResults(summary) {
  state.resultShown = true;
  dom.resultsPanel.classList.remove('hidden');
  dom.performanceTitle.textContent = summary.message.title;
  dom.performanceMessage.textContent = summary.message.body;
  dom.finalScore.textContent = String(summary.correctCount);
  dom.percentageValue.textContent = `${summary.percentage}%`;
  dom.accuracyValue.textContent = `${summary.accuracy}%`;
  dom.correctValue.textContent = String(summary.correctCount);
  dom.wrongValue.textContent = String(summary.wrongCount);
  dom.timeTakenValue.textContent = formatTime(summary.timeTaken);
  dom.reviewCountValue.textContent = String(Object.values(state.reviewed).filter(Boolean).length);
  renderWeakTopics(summary.weakTopics);
  renderReviewList();
  dom.resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  playTone(summary.percentage >= 80 ? 880 : summary.percentage >= 60 ? 660 : 220, 0.12, 'sine');
}

function buildPerformanceMessage(percentage, correctCount) {
  if (percentage >= 90) {
    return {
      title: 'Elite-tier performance',
      body: `Outstanding work. ${correctCount} correct answers shows strong AZ-204 readiness with exam-level precision.`
    };
  }
  if (percentage >= 75) {
    return {
      title: 'Strong competitive score',
      body: `Solid performance. You are close to exam-ready, with only a few topics needing cleanup before the final attempt.`
    };
  }
  if (percentage >= 55) {
    return {
      title: 'Promising foundation',
      body: 'You have the core concepts, but the weaker AZ-204 areas still need focused revision and repeated practice.'
    };
  }
  return {
    title: 'Revision required',
    body: 'The attempt shows important gaps in key AZ-204 areas. Revisit fundamentals, then retake the mock test for improvement.'
  };
}

function analyzeWeakTopics(attempts) {
  const bucket = new Map();
  attempts.forEach(({ question, correct }) => {
    const entry = bucket.get(question.topic) || { topic: question.topic, total: 0, wrong: 0 };
    entry.total += 1;
    if (!correct) entry.wrong += 1;
    bucket.set(question.topic, entry);
  });

  return [...bucket.values()]
    .map((entry) => ({
      ...entry,
      accuracy: Math.round(((entry.total - entry.wrong) / entry.total) * 100)
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)
    .slice(0, 5);
}

function renderWeakTopics(topics) {
  dom.weakTopics.innerHTML = '';
  topics.forEach((topic) => {
    const row = document.createElement('div');
    row.className = 'weak-topic';
    row.innerHTML = `<strong>${topic.topic}</strong><span>${topic.accuracy}% accuracy</span>`;
    dom.weakTopics.appendChild(row);
  });
}

function renderReviewList() {
  dom.reviewList.innerHTML = '';
  questionBank.forEach((question) => {
    const record = state.submitted[question.id];
    if (!record) return;

    const container = document.createElement('article');
    container.className = 'review-item';
    const correct = arraysMatch(record.userAnswer, question.answer);
    container.innerHTML = `
      <header>
        <div>
          <strong>Q${question.id}. ${question.question}</strong>
          <div class="question-details"><span>${question.source}</span><span>${question.year}</span><span>${question.topic}</span></div>
        </div>
        <span class="review-tag">${correct ? 'Correct' : 'Wrong'}</span>
      </header>
      <p><strong>Your answer:</strong> ${record.userAnswer.length ? formatAnswer(question, record.userAnswer) : 'No answer selected'}</p>
      <p><strong>Correct answer:</strong> ${formatAnswer(question, question.answer)}</p>
      <p><strong>Explanation:</strong> ${question.explanation}</p>
    `;
    dom.reviewList.appendChild(container);
  });
}

function shuffleQuestions() {
  const currentQuestionId = currentQuestion().id;
  state.order = shuffleArray(state.order);
  state.currentIndex = Math.max(0, state.order.findIndex((questionIndex) => questionBank[questionIndex].id === currentQuestionId));
  rebuildPalette();
  resetQuestionTimer();
  render();
  saveProgress();
  playTone(540, 0.05, 'triangle');
}

function rebuildPalette() {
  buildPalette();
}

function restartTest() {
  if (!confirm('Restart the entire mock test? This will clear answers for the current session.')) return;
  Object.assign(state, {
    order: questionBank.map((_, index) => index),
    currentIndex: 0,
    selections: {},
    submitted: {},
    reviewed: {},
    visited: {},
    startedAt: Date.now(),
    elapsedSeconds: 0,
    questionRemaining: QUESTION_SECONDS,
    examRemaining: EXAM_SECONDS,
    resultShown: false,
    lastAutoAdvance: false
  });
  dom.resultsPanel.classList.add('hidden');
  rebuildPalette();
  resetQuestionTimer();
  render();
  startTimers();
  saveProgress();
  playTone(300, 0.08, 'sine');
}

function clearSavedProgress() {
  localStorage.removeItem(STORAGE_KEY);
  alert('Saved progress cleared.');
}

function jumpTo(position) {
  state.currentIndex = position;
  resetQuestionTimer();
  render();
  saveProgress();
  playTone(420, 0.05, 'triangle');
}

function handleKeyboard(event) {
  if (state.resultShown) {
    if (event.key === 'Escape') {
      dom.resultsPanel.classList.add('hidden');
      state.resultShown = false;
      render();
    }
    return;
  }

  const question = currentQuestion();
  const submittedState = state.submitted[question.id];
  const totalOptions = question.options.length;

  if (event.key >= '1' && event.key <= String(Math.min(9, totalOptions)) && !submittedState) {
    const index = Number(event.key) - 1;
    const option = dom.optionsForm.querySelectorAll('.option-card')[index];
    if (option) {
      const input = option.querySelector('input');
      if (question.type === 'multiple') {
        input.checked = !input.checked;
        handleSelection(question, index, input.checked);
      } else {
        input.checked = true;
        handleSelection(question, index, true);
      }
    }
    return;
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goPrevious();
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    handleNext();
  }

  if (event.key.toLowerCase() === 'm') {
    toggleReviewFlag();
  }

  if (event.key.toLowerCase() === 't') {
    toggleTheme();
  }

  if (event.key.toLowerCase() === 's') {
    submitTest();
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    handleNext();
  }
}

function hydrateTimers() {
  if (!state.startedAt) {
    state.startedAt = Date.now();
  }
}

function startTimers() {
  if (state.resultShown) return;
  stopTimers();
  const totalExamSeconds = questionBank.length * QUESTION_SECONDS;
  examTicker = window.setInterval(() => {
    if (state.resultShown) return;
    state.examRemaining = Math.max(0, state.examRemaining - 1);
    state.elapsedSeconds = totalExamSeconds - state.examRemaining;
    dom.examTimer.textContent = formatTime(state.examRemaining);
    if (state.examRemaining <= 0) {
      submitTest();
    }
    saveProgress();
  }, 1000);

  questionTicker = window.setInterval(() => {
    if (state.resultShown) return;
    state.questionRemaining = Math.max(0, state.questionRemaining - 1);
    dom.questionTimer.textContent = formatTime(state.questionRemaining);
    if (state.questionRemaining <= 0) {
      autoSubmitExpiredQuestion();
    }
  }, 1000);
}

function stopTimers() {
  if (examTicker) clearInterval(examTicker);
  if (questionTicker) clearInterval(questionTicker);
  examTicker = null;
  questionTicker = null;
}

function resetQuestionTimer() {
  state.questionRemaining = QUESTION_SECONDS;
  state.questionStartedAt = Date.now();
  dom.questionTimer.textContent = formatTime(state.questionRemaining);
}

function autoSubmitExpiredQuestion() {
  const question = currentQuestion();
  if (state.submitted[question.id]) return;
  state.selections[question.id] = state.selections[question.id] || [];
  state.submitted[question.id] = {
    userAnswer: [...getSelection(question.id)],
    correct: false,
    timedOut: true,
    answeredAt: Date.now()
  };
  dom.selectionNote.textContent = 'Time expired for this question. Review the explanation, then continue.';
  playTone(180, 0.09, 'square');
  render();
  saveProgress();
}

function formatAnswer(question, answerIndexes) {
  if (!answerIndexes.length) return 'No answer selected';
  return answerIndexes.map((index) => `${String.fromCharCode(65 + index)}. ${question.options[index]}`).join(', ');
}

function arraysMatch(first, second) {
  if (first.length !== second.length) return false;
  const a = [...first].sort((left, right) => left - right);
  const b = [...second].sort((left, right) => left - right);
  return a.every((value, index) => value === b[index]);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function shuffleArray(input) {
  const copy = [...input];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function playTone(frequency, duration, type = 'sine') {
  if (!state.soundEnabled) return;
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.value = 0.02;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.stop(audioContext.currentTime + duration + 0.02);
  } catch (error) {
    state.soundEnabled = false;
  }
}

function saveProgress() {
  const payload = {
    order: state.order,
    currentIndex: state.currentIndex,
    selections: state.selections,
    submitted: state.submitted,
    reviewed: state.reviewed,
    visited: state.visited,
    startedAt: state.startedAt,
    elapsedSeconds: state.elapsedSeconds,
    questionRemaining: state.questionRemaining,
    examRemaining: state.examRemaining,
    theme: state.theme,
    resultShown: state.resultShown
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadSavedProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    state.startedAt = Date.now();
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.order = parsed.order && parsed.order.length === questionBank.length ? parsed.order : state.order;
    state.currentIndex = parsed.currentIndex || 0;
    state.selections = parsed.selections || {};
    state.submitted = parsed.submitted || {};
    state.reviewed = parsed.reviewed || {};
    state.visited = parsed.visited || {};
    state.startedAt = parsed.startedAt || Date.now();
    state.elapsedSeconds = parsed.elapsedSeconds || 0;
    state.questionRemaining = parsed.questionRemaining || QUESTION_SECONDS;
    state.examRemaining = parsed.examRemaining || (questionBank.length * QUESTION_SECONDS);
    state.resultShown = parsed.resultShown || false;
    if (parsed.theme) applyTheme(parsed.theme);
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function clearSelectionNoteColor() {
  dom.selectionNote.style.color = 'var(--muted)';
}

function loadSavedThemeState() {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme) applyTheme(theme);
}

// Load parsed dump JSONs (if any) from the `dumps_parsed` folder and append to questionBank
const DUMP_FILES = [
  'microsoft.2passeasy.az-204.study.guide.2026-jan-04.by.grover.152q.vce.pdf.parsed.json',
  'microsoft.prep4sure.az-204.practice.test.2026-may-06.by.burke.345q.vce.pdf.parsed.json',
  'microsoft.test-inside.az-204.exam.prep.2026-mar-06.by.marsh.328q.vce.pdf.parsed.json',
  'microsoft.testkings.az-204.pdf.2026-apr-28.by.edwiin.307q.vce.pdf.parsed.json'
];

async function loadParsedDumps() {
  const base = 'dumps_parsed/';
  let nextId = Math.max(...questionBank.map(q=>q.id)) + 1;
  for (const file of DUMP_FILES) {
    try {
      const res = await fetch(base + file);
      if (!res.ok) continue;
      const data = await res.json();
      const candidates = data.candidates || [];
      for (const cand of candidates) {
        if (!cand || !cand.options || cand.options.length < 2) continue;
        const letters = (cand.answer_letters || []).map(l => l.toUpperCase());
        const answerIndexes = letters.map(l => Math.max(0, l.charCodeAt(0) - 65)).filter(i => i >= 0 && i < cand.options.length);
        const q = {
          id: nextId++,
          type: answerIndexes.length > 1 ? 'multiple' : 'single',
          topic: cand.topic || 'Imported',
          year: cand.year || '',
          source: data.file || file,
          difficulty: 'Medium',
          question: (cand.question || '').trim() || 'Imported question',
          options: cand.options.slice(0, 8),
          answer: answerIndexes,
          explanation: (cand.raw || '').slice(0, 800) + '\n\n(Imported - please review explanation)',
          whyWrong: cand.options.map(() => 'This option is not the correct choice according to the source.')
        };
        questionBank.push(q);
      }
    } catch (err) {
      console.warn('Failed to load dump', file, err);
    }
  }

  // Rebuild order and UI state to include imported questions
  state.order = questionBank.map((_, index) => index);
  state.examRemaining = questionBank.length * QUESTION_SECONDS;
  buildPalette();
}

async function loadParsedDumpsAndInit() {
  loadSavedThemeState();
  try {
    await loadParsedDumps();
  } catch (e) {
    console.warn('Parsed dumps load error', e);
  }
  init();
  clearSelectionNoteColor();
}

loadParsedDumpsAndInit();