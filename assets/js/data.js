/* =============================================================
   data.js  |  지능형 기업 의사결정시스템 연구그룹
   이 파일만 고치면 사이트 전체 내용이 바뀝니다.
   출처: 연구계획서, 2025년 1차년도 연차보고서, 과제 게재논문과 발표 자료
   ============================================================= */

window.RG_DATA = {

  /* ---------- 1. 과제 기본 정보 ---------- */
  project: {
    program: "2025년도 글로벌인문사회융합연구지원사업 (연구그룹 지원형, 국내형)",
    grantNo: "NRF-2025S1A5C3A01010737",
    titleKo: "멀티모달 데이터, 딥러닝, 생성형 AI, 양자기계학습을 활용한 지능형 기업 의사결정시스템",
    titleKoLead: ["멀티모달 데이터, 딥러닝, 생성형 AI,", "양자기계학습을 활용한"],
    titleKoTail: "지능형 기업 의사결정시스템",
    titleEn: "Intelligent Corporate-Level Decision-Making System Using Multimodal Data, Deep Learning, Generative AI and Quantum Machine Learning",
    oneLine: "회계와 재무 연구에 인공지능과 양자기계학습을 결합해, 기업의 멀티모달 데이터를 실제 의사결정으로 바꾸는 융합연구그룹입니다.",
    pi: "최승욱",
    piAffil: "경희대학교 경영대학 회계학과",
    host: "경희대학교",
    period: "2025. 6. 1. ~ 2028. 5. 31.",
    periodStart: "2025-06-01",
    periodEnd: "2028-05-31",
    duration: "3년 (4개 연차)",
    budgetTotal: "450,000 천원",
    budgetByYear: [
      { label: "1차년도", amount: "112,500 천원" },
      { label: "2차년도", amount: "150,000 천원" },
      { label: "3차년도", amount: "150,000 천원" },
      { label: "4차년도", amount: "37,500 천원" }
    ],
    fieldMix: "경영학, 회계학, 컴퓨터공학",
    teamSize: "연구책임자 1명, 공동연구원 5명, 연구조원 10명",
    keywordsKo: ["멀티모달 데이터", "딥러닝과 생성형 AI", "양자기계학습", "회계와 조세 의사결정", "의사결정지원시스템"],
    keywordsEn: ["Multimodal Data", "Deep Learning", "Generative AI", "Quantum Machine Learning", "Decision Support System"],
    contact: {
      office: "02447 서울특별시 동대문구 경희대로 26, 경희대학교 경영대학",
      tel: "02-000-0000",
      email: "example@khu.ac.kr"
    }
  },

  /* ---------- 2. 연구 개요 ---------- */
  overview: {
    lead: "대부분의 기업은 회계와 재무 데이터를 충분히 쌓아 두고 있습니다. 다만 소비자 피드백이나 영상, 센서 기록, 시장 지표까지 함께 놓고 의사결정에 활용하는 사례는 아직 많지 않습니다.",
    body: [
      // "본 연구그룹은 흩어져 있는 기업 멀티모달 데이터를 모아 전처리하고 통합한 뒤, 멀티모달 딥러닝과 생성형 AI로 학습시키고, 양자기계학습(QML)으로 고차원 최적화 문제를 다루는 지능형 의사결정지원시스템(DSS)을 개발합니다.",
      // "적용 영역은 회계감사 위험 식별, 조세회피와 조세 리스크 예측, 금융 포트폴리오 최적화, 투자 위험 분석, ESG 평가와 브랜드 관리입니다. 최종 산출물은 협력 기업 환경에서 개념검증(PoC)까지 마친 DSS 프로토타입입니다."
    ],
    focusArea: "멀티모달 딥러닝, 생성형 AI, 양자기계학습을 회계, 재무, 조세 의사결정에 적용하는 융합연구",
    focusTarget: "국내외 상장기업의 재무제표와 공시 텍스트, 국가 단위 거시지표, 소비자 멀티모달 데이터",
    focusMethod: "멀티모달 딥러닝, 확산모형 기반 데이터 증강, LLM과 VLM 분석, 양자기계학습, 설명가능 AI, 혼합연구방법",
    diff: [
      {
        axis: "멀티모달 데이터",
        prior: "개별 모달리티 중심 분석, 자율주행과 의료진단, 로보틱스에 국한된 활용",
        ours: "이질적 모달리티 통합 분석을 기업 의사결정 문제에 직접 적용"
      },
      {
        axis: "양자기계학습",
        prior: "전통적 AI 기법은 고차원 최적화 문제에서 한계",
        ours: "QML로 포트폴리오 최적화와 투자 위험 분석 성능을 개선하고 성공 사례를 제시"
      }
    ],
    infra: [
      { k: "데이터", v: "Crunchbase 글로벌 기업 데이터, Reddit, Instagram, X, Weibo 소비자 데이터, KOSPI와 KOSDAQ 상장기업 재무 및 공시 패널, 국가별 거시경제 지표" },
      { k: "구축 데이터셋", v: "KoTaP, 2011년부터 2024년까지 1,754개 기업 12,653개 기업-연도 조세회피 패널" },
      { k: "분석 환경", v: "데이터 웨어하우스 통합 공유, IBM Qiskit 기반 양자기계학습 실험 환경, GPU 학습 환경" },
      { k: "학술 교류", v: "매월 전체 연구회의, 격주 연구팀별 워킹그룹, 한국회계정보학회 추계학술대회 주관 세션 운영" },
      { k: "산학 협력", v: "SK하이닉스, (주)올핀, (주)바이오북과 데이터 확보 및 개념검증(PoC) 협의" }
    ]
  },

  /* ---------- 3. 연구팀 (2차년도 기준) ---------- */
  teams: [
    {
      id: "t2",
      name: "연구팀 2 인문사회",
      tag: "Accounting & Tax",
      track: "hs",
      desc: "회계, 조세, 재무 의사결정 문제를 정하고 거시지표와 기업 단위 자료로 예측모형을 만듭니다.",
      topics: ["국가 거시지표(조세부담률, CPI, GDP) 예측", "재무제표와 공시 텍스트 결합 조세회피 예측", "로봇세 도입효과 분석", "재무제표 부정 예측", "회계와 세무 분야 AI 도입 현황"],
      members: ["최승욱", "나형종", "안성희"]
    },
    {
      id: "t1",
      name: "연구팀 1 이공",
      tag: "AI & Quantum",
      track: "sci",
      desc: "양자 알고리즘과 확산모형, LLM 복합 추론을 다루며 멀티모달 생성형 AI 기술을 개발합니다.",
      topics: ["양자 알고리즘 기반 Diffusion 구조 최적화", "Diffusion과 LLM 복합 추론 기술", "시계열-텍스트 정렬 및 인과 추론 모듈", "금융데이터 특화 멀티모달 생성형 AI", "잠재 표현 학습과 거시경제 시뮬레이션"],
      members: ["황인준", "김형준"]
    },
    {
      id: "t3",
      name: "연구팀 3 융합연구",
      tag: "Convergence",
      track: "mix",
      desc: "두 팀의 연구가 만나는 지점을 맡습니다. 특수 목적 VLM, 인과성을 반영한 잠재공간 설계, 모델 경량화를 담당합니다.",
      topics: ["특수 목적 VLM 대규모 데이터셋 구축", "Causality가 부여된 Latent-vector 공간 설계", "양자화 기반 대규모 언어모델 경량화", "회계 항등식을 준수하는 재무데이터 생성(PINN 응용)"],
      members: ["권오병", "김형준"]
    }
  ],

  /* ---------- 4. 연차별 로드맵 ---------- */
  roadmap: [
    {
      year: "1차년도",
      short: "1차",
      period: "2025. 6. 1. ~ 2026. 2. 28.",
      start: "2025-06-01",
      end: "2026-02-28",
      goal: "기업 멀티모달 데이터 정의 및 멀티모달 딥러닝 적용 분야 인식",
      tasks: {
        t2: "회계와 재무 데이터 분석 방법론 개발",
        t1: "양자컴퓨팅을 활용한 데이터 최적화",
        t3: "AI 기반 멀티모달 데이터 분석의 기업 적용 인사이트 도출"
      },
      milestones: ["국내 학술대회 발표 15건", "국제 학술대회 발표 7건", "연구팀 주관 학술대회 개최 1건", "우수논문상 2건과 공모전 수상 1건"]
    },
    {
      year: "2차년도",
      short: "2차",
      period: "2026. 3. 1. ~ 2027. 2. 28.",
      start: "2026-03-01",
      end: "2027-02-28",
      goal: "양자 알고리즘, Diffusion, LLM 복합 추론과 재무 및 회계 의사결정 모형 개발",
      tasks: {
        t2: "거시지표 예측모형과 조세회피 예측모형 구축",
        t1: "양자 알고리즘 기반 Diffusion 최적화 및 멀티모달 생성형 AI",
        t3: "특수 목적 VLM 데이터셋 구축과 모델 경량화"
      },
      milestones: ["상반기와 하반기 각 SCI급 논문 2편 게재", "WACV 2026 발표", "국제학술지 심사 진행 중인 논문 다수"]
    },
    {
      year: "3차년도",
      short: "3차",
      period: "2027. 3. 1. ~ 2028. 2. 29.",
      start: "2027-03-01",
      end: "2028-02-29",
      goal: "멀티모달 기반 지능형 회계, 재무, 마케팅 의사결정지원시스템 개발",
      tasks: {
        t2: "국제회계기준 적용과 해석을 위한 멀티모달 솔루션 탐색",
        t1: "양자컴퓨팅 기반 최적화 솔루션 개발",
        t3: "국내 기업 대상 개념검증"
      },
      milestones: ["실시간 회계 및 재무 데이터 처리 프로토타입", "앙상블 표현 기반 최적화 솔루션 설계", "시스템 통합 및 실험 검증"]
    },
    {
      year: "4차년도",
      short: "4차",
      period: "2028. 3. 1. ~ 2028. 5. 31.",
      start: "2028-03-01",
      end: "2028-05-31",
      goal: "의사결정지원시스템 효과성 실증 및 산업 적용",
      tasks: {
        t2: "기업과 회계업계의 재무 시스템에 실증 적용",
        t1: "산업 현장에서의 양자컴퓨팅 활용 실증",
        t3: "글로벌 기업 대상 개념검증"
      },
      milestones: ["기업 시스템 통합 테스트", "AI 분석 시스템 산업 적용 실험", "최종 검증 및 결과 보고"]
    }
  ],

  /* ---------- 5. 2차년도 수행 일정 ---------- */
  schedule: [
    { period: "26.03 ~ 26.04", team: "t1", work: "양자 알고리즘을 활용한 Diffusion 모델의 구조적 최적화" },
    { period: "26.05 ~ 26.07", team: "t1", work: "Diffusion 모델과 LLM의 복합 추론 기술" },
    { period: "26.08 ~ 26.09", team: "t1", work: "시계열-텍스트 정렬 및 인과 추론 모듈 개발" },
    { period: "26.10 ~ 26.11", team: "t1", work: "금융데이터 특화 멀티모달 생성형 AI 기술 개발" },
    { period: "26.12 ~ 27.02", team: "t1", work: "잠재 표현 학습 및 거시경제 시뮬레이션" },
    { period: "26.01 ~ 26.06", team: "t2", work: "국가별 거시경제, 정치, 환경 지표를 사용한 조세부담률, CPI, GDP 예측모델 개발" },
    { period: "26.03 ~ 26.08", team: "t2", work: "AI 확대에 따른 로봇세 도입 필요성과 도입효과 실증" },
    { period: "26.07 ~ 26.12", team: "t2", work: "재무제표 계량정보와 공시보고서 텍스트를 함께 사용한 조세회피 예측모델 연구" },
    { period: "26.09 ~ 26.10", team: "t2", work: "딥러닝을 이용한 재무제표 부정 예측 모형 연구" },
    { period: "26.11 ~ 27.02", team: "t2", work: "회계와 세무 분야 AI 도입 현황 연구" },
    { period: "26.03 ~ 26.08", team: "t3", work: "특수 목적 VLM을 위한 데이터 수집" },
    { period: "26.03 ~ 27.02", team: "t3", work: "수집 데이터 기본 분석 및 독자적 VLM 모델 설계" },
    { period: "26.03 ~ 27.02", team: "t3", work: "Causality가 부여된 Latent-vector 공간 설계" },
    { period: "26.09 ~ 27.02", team: "t3", work: "양자화를 통한 모델 경량화" }
  ],

  /* ---------- 6. 연구그룹 성과 ----------
     숫자는 아래 publications, conferences, awards 배열에서 자동으로 셉니다.
     count 에 쓸 수 있는 값: publications, presentations, awards,
     conferences:국제, conferences:국내, publications:KCI, publications:국제색인
     n 값을 직접 적어 두면 세지 않고 그 값을 씁니다.
  ------------------------------------------ */
  achievements: [
    { label: "게재논문", count: "publications", unit: "편", goal: "4년 목표 32편" },
    { label: "국제 학술대회 발표", count: "conferences:국제", unit: "건", goal: "4년 목표 6건" },
    { label: "국내 학술대회 발표", count: "conferences:국내", unit: "건", goal: "4년 목표 6건" },
    { label: "우수논문상과 수상", count: "awards", unit: "건", goal: "학회 3곳" }
  ],

  /* ---------- 7. 성과 목표 ---------- */
  outcomes: [
    { label: "국제학술지 (SSCI/SCI)", total: 11, unit: "편", byYear: [1, 3, 4, 3] },
    { label: "국내학술지 (KCI)", total: 21, unit: "편", byYear: [1, 4, 8, 8] },
    { label: "국제 학술대회 발표", total: 6, unit: "건", byYear: [1, 2, 2, 1] },
    { label: "국내 학술대회 발표", total: 6, unit: "건", byYear: [1, 2, 2, 1] },
    { label: "연구팀 주관 공개발표와 토론회", total: 4, unit: "건", byYear: [0, 1, 2, 1] },
    { label: "산학과제 신청", total: 5, unit: "건", byYear: [0, 1, 2, 2] },
    { label: "기고 및 홍보", total: 4, unit: "건", byYear: [1, 1, 1, 1] },
    { label: "국제공동연구 비율", total: 29, unit: "%", byYear: [25, 25, 33, 33] }
  ],

  /* ---------- 8. 연구진 ---------- */
  members: [
    {
      name: "최승욱",
      nameEn: "Seung Uk Choi",
      role: "연구책임자",
      title: "교수",
      photo: "assets/img/choi-seunguk.jpg",
      affil: "경희대학교",
      dept: "경영대학 회계학과",
      fields: ["회계 투명성", "audit effort", "ESG", "회계기준", "회계제도"],
      side: "인문사회",
      teams: ["t2"],
      duty: ["연구설계 및 연구진행 총괄", "연구자 간 네트워크 관리와 연구성과 취합", "경영 및 회계 통계 분석", "논문 작성"],
      note: "회계 투명성과 감사 노력, 회계기준의 효과를 실증적으로 연구합니다. The Accounting Review, Contemporary Accounting Research 등 회계 분야 주요 저널에 연구를 게재했습니다."
    },
    {
      name: "권오병",
      nameEn: "Ohbyung Kwon",
      role: "공동연구원",
      title: "교수",
      photo: "assets/img/kwon-ohbyung.jpg",
      affil: "경희대학교",
      dept: "경영대학 경영학과",
      fields: ["AI 응용과 경영", "양자기계학습", "우주비즈니스"],
      side: "인문사회",
      teams: ["t3"],
      duty: ["경영 통계 분석", "비정형 빅데이터 수집 및 텍스트 마이닝", "딥러닝 분석", "논문 작성"],
      note: "인공지능의 경영 적용과 양자기계학습, 우주비즈니스를 연구합니다. 본 과제에서는 설명가능한 주가변동 예측과 양자 생성모형을 맡고 있습니다."
    },
    {
      name: "황인준",
      nameEn: "Eenjun Hwang",
      role: "공동연구원",
      title: "교수",
      photo: "assets/img/hwang-eenjun.jpg",
      affil: "고려대학교",
      dept: "전기전자공학과",
      fields: ["멀티미디어 처리", "빅데이터 응용", "데이터 검색", "인공지능"],
      side: "이공",
      teams: ["t1"],
      duty: ["딥러닝 기반 데이터 분석 및 시스템 구현", "비정형 빅데이터 수집 및 텍스트 마이닝", "논문 작성"],
      note: "멀티미디어 처리와 빅데이터 응용, 데이터 검색을 연구합니다. IEEE Journal of Biomedical and Health Informatics, Journal of Building Engineering 등에 인공지능 관련 논문을 게재했습니다."
    },
    {
      name: "안성희",
      nameEn: "Sung Hee Ahn",
      role: "공동연구원",
      title: "교수",
      photo: "assets/img/ahn-sunghee.jpg",
      affil: "가톨릭대학교",
      dept: "경영대학 회계학과",
      fields: ["지배구조", "회계감사", "기업가치평가", "M&A"],
      side: "인문사회",
      teams: ["t2"],
      duty: ["경영 및 회계 통계 분석", "기업의 정성적 정보 수집", "기업 재무데이터 수집", "논문 작성"],
      note: "지배구조와 회계감사, 기업가치평가를 연구합니다. 한국공인회계사(KICPA)로 삼일회계법인 경영컨설팅, NH저축은행과 대우건설 사외이사를 지냈습니다."
    },
    {
      name: "나형종",
      nameEn: "Hyung Jong Na",
      role: "공동연구원",
      title: "교수",
      photo: "assets/img/na-hyungjong.jpg",
      affil: "세명대학교",
      dept: "회계세무금융학과",
      fields: ["머신러닝과 딥러닝", "멀티모달 데이터", "조세회피", "조세혜택", "기업가치"],
      side: "인문사회",
      teams: ["t2"],
      duty: ["경영 및 회계 통계 분석", "비정형 빅데이터 수집 및 텍스트 마이닝", "논문 작성"],
      note: "텍스트마이닝과 딥러닝을 회계와 조세 주제에 적용하는 융합연구를 합니다. 신협 자문위원으로 인공지능 도입 방안을 자문하고 있습니다."
    },
    {
      name: "김형준",
      nameEn: "Hyung Jun Kim",
      role: "공동연구원",
      title: "조교수",
      photo: "assets/img/kim-hyungjun.jpg",
      affil: "창원대학교",
      dept: "컴퓨터공학과",
      fields: ["컴퓨터 비전", "인공지능", "멀티모달 AI", "대규모 언어모델(LLM)"],
      side: "이공",
      teams: ["t1", "t3"],
      duty: ["양자기계학습(QML) 및 AI 모델 개발", "컴퓨터 비전 데이터 수집", "생성형 AI를 통한 분석", "논문 작성"],
      note: "컴퓨터 비전과 멀티모달 AI, 대규모 언어모델을 연구합니다. 본 과제에서는 WACV 2026 논문과 Financial Diffusion 연구를 맡고 있습니다."
    }
  ],

  /* ---------- 8-1. 연구조원 (연구과제 참여자 명단 기준) ---------- */
  assistants: [
    { name: "고풍",         affil: "경희대학교 대학원", dept: "빅데이터응용학과", course: "박사과정",   track: "mix" },
    { name: "LIANG JIAHAO", affil: "경희대학교 대학원", dept: "빅데이터응용학과", course: "박사과정",   track: "mix" },
    { name: "강유진",       affil: "경희대학교 대학원", dept: "빅데이터응용학과", course: "박사과정",   track: "mix" },
    { name: "오해미",       affil: "경희대학교 대학원", dept: "빅데이터응용학과", course: "석사과정",   track: "mix" },
    { name: "황준하",       affil: "고려대학교",       dept: "",                course: "석박사과정", track: "sci" },
    { name: "손원빈",       affil: "창원대학교",       dept: "",                course: "석사과정",   track: "sci" },
    { name: "송원호",       affil: "창원대학교",       dept: "",                course: "석사과정",   track: "sci" },
    { name: "최규문",       affil: "창원대학교",       dept: "",                course: "석사과정",   track: "sci" },
    { name: "서준일",       affil: "창원대학교",       dept: "",                course: "석사과정",   track: "sci" },
    { name: "한승용",       affil: "창원대학교",       dept: "",                course: "석사과정",   track: "sci" }
  ],

  /* ---------- 9. 본 과제 게재논문 ----------
     authors 가 비어 있으면 화면에서 저자 줄을 생략합니다.
     members 는 연구자 필터용입니다. 저자 확인 후 연구진 이름을 넣어 주십시오.
     국제저널 IF와 JCR Quartile은 2026년 6월 발표된 2025 Journal Impact Factor 기준,
     KCI 학술지는 한국연구재단 KCI 지표 기준입니다.
  ------------------------------------------ */
  publications: [
    {
      id: "j01",
      title: "IFRS 9 기대신용손실 모형의 적용 효과: 은행의 비정상 대손충당금 및 가치관련성을 중심으로",
      authors: "",
      venue: "세무와회계저널, 26(6), 43-86",
      year: 2025,
      type: "KCI",
      members: [],
      badge: "우수논문상",
      metrics: "2025년 한국세무학회 우수논문상",
      abstract: "본 연구는 IFRS 9(K-IFRS 제1109호)의 기대신용손실(expected credit loss, ECL) 모형 도입이 국내 은행의 대손충당금과 가치관련성에 미친 영향을 분석하였다. 국내 은행업 자료를 이용하여 대손충당금의 시계열 추세를 확인하고, 회귀분석(OLS)과 머신러닝(Random Forest, XGBoost)을 통해 비정상 대손충당금을 추정하였다. 분석 결과, ECL 모형 적용 이후 대손충당금과 비정상 대손충당금이 전반적으로 증가하였으며, 일부 은행은 기존 발생손실 모형 대비 최대 2,671억원의 추가 기대신용손실 조정을 공시하였다. 또한 ECL 모형 적용은 감사보고서의 핵심감사사항에도 포함되어 외부감사인이 이를 중요한 감사위험으로 인식하고 있음을 확인하였다. 가치관련성 분석에서는 ECL 모형 적용 이전에 나타났던 비정상 대손충당금과 주가 간의 양의 관련성이 적용 이후 약화되는 경향이 나타났다. 이러한 결과는 은행의 대손충당금 적정성 판단과 금융당국 및 회계기준 제정자의 ECL 모형 평가 및 규제 정합성 검토에 시사점을 제공한다."
    },
    {
      id: "j02",
      title: "Emotional Intelligence of Artificial Intelligence: Generation Z's Digital Connectedness and Virtual-to-Real Behavioral Spillover",
      authors: "",
      venue: "Journal of Consumer Marketing, 게재예정",
      year: 2026,
      type: "ESCI",
      members: [],
      metrics: "2025 IF 4.8, JCR Q2 (Business)",
      abstract: "본 연구는 실제 메타버스 이용자인 Z세대를 대상으로 AI 기반 비플레이어 캐릭터(NPC)와의 준사회적 관계가 디지털 럭셔리 NFT 브랜드 선호와 행동의도에 미치는 영향을 분석하였다. 미국의 Z세대 메타버스 이용자 400명 중 348명의 유효표본을 활용하여 부분최소제곱 구조방정식 모형(PLS-SEM)을 적용하였다. 분석 결과, AI 기반 NPC의 정서적 지능과 인지적 지능을 통해 형성된 준사회적 관계는 메타버스 내 사회적 연결감을 높이고, 이는 다시 럭셔리 NFT 브랜드 선호와 가상세계에서 현실세계로 이어지는 행동 전이에 영향을 미치는 것으로 나타났다. 특히 긍정적인 가상 사회적 연결감은 메타버스 내 구매의도뿐만 아니라 현실세계의 구매의도에도 영향을 미쳤다. 본 연구는 AI 기반 NPC의 정서적 지능과 인지적 지능을 구분하여 소비자 참여 메커니즘을 분석했다는 점에서 의의가 있으며, 디지털 NFT와 실물 럭셔리 제품에 차별화된 마케팅 전략이 필요함을 제시한다."
    },
    {
      id: "j03",
      title: "Intelligent Information Processing for Corporate Performance Prediction: A Hybrid Natural Language Processing (NLP) and Deep Learning Approach",
      authors: "",
      venue: "Electronics",
      year: 2026,
      type: "SCIE",
      members: [],
      metrics: "2025 IF 2.9, JCR Q2 (Engineering, Electrical & Electronic)",
      abstract: "본 연구는 기업의 경영성과 예측력을 높이기 위해 정형 재무지표와 비정형 전략 공시 텍스트를 결합한 하이브리드 머신러닝 프레임워크를 제안하였다. 한국 상장기업의 사업보고서에서 전략 관련 텍스트를 추출하여 균형성과표(BSC)의 재무, 고객, 내부프로세스, 학습 및 성장 영역으로 분류한 후 KNN, SVM, LightGBM, CNN, LSTM, Autoencoder, Transformer 등 다양한 머신러닝, 딥러닝 모형을 비교하였다. 분석 결과, 전략 텍스트를 추가할 경우 정확도, 정밀도, 재현율, AUC, F1-score가 전반적으로 향상되었으며, 단일 모형에서는 Transformer가 문맥적 의미 특성 추출에 가장 우수한 성능을 보였다. Autoencoder, LSTM, Transformer를 결합한 soft-voting 앙상블은 정확도와 AUC에서 가장 우수한 종합 성능을 나타냈으며, BSC 영역 중에서는 고객지향 전략 공시의 예측력이 가장 높았다. 또한 재현 가능한 사이버보안 어휘사전을 활용하여 정보보안 관련 서술의 공시강도와 비중을 정량화하고 BSC 전략 벡터와 함께 평가하였다. 이는 재무정보와 서술정보를 NLP와 AI 기법으로 통합하는 접근이 기업성과 예측의 해석력과 안정성을 높일 수 있음을 보여준다."
    },
    {
      id: "j04",
      title: "Rank-Aware Conditional Synthesis: Feasible Quantum Generative Modeling on Matrix Product State Manifolds",
      authors: "Lee, D., Lee, W. G., Hong, H., & Kwon, O.",
      venue: "Symmetry, 18(4), 605",
      year: 2026,
      type: "SCIE",
      members: ["권오병"],
      metrics: "2025 IF 2.2, JCR Q2 (Multidisciplinary Sciences)",
      abstract: "본 연구는 조건부 양자 확산 과정에서 Matrix Product State(MPS)의 저랭크 구조가 불안정해지는 rank explosion 문제를 규명하고 이를 완화하기 위한 Rank-Aware Conditional Synthesis(RACS) 방법을 제안하였다. 조건부 가이던스가 전역 상관관계를 증가시켜 유효 Schmidt rank를 4에서 16으로 약 4배 증가시키고, 약 1.8×10³개의 CNOT 게이트가 필요한 회로 깊이를 유발하여 NISQ 장치의 현실적 한계를 초과할 수 있음을 보였다. RACS는 단계별 다양체 투영과 time-shift error correction을 통해 잠재 궤적을 사전에 정한 MPS 다양체 내에 유지하도록 설계되었다. 실제 의미 데이터에 대한 실험 결과, 기존 사후 절단 방식에 비해 재구성 오차(MSE)를 30.8% 감소시키고 잠재 궤적의 매끄러움을 36.8% 향상시켰다. 또한 하드웨어 효율적 조건에서 fidelity가 4.8% 향상되고 depolarizing noise에 대한 강건성도 개선되었다. 이는 조건부 표현력과 얽힘 제약 간의 충돌을 완화하여 고충실도 양자 생성모형을 구현할 수 있는 하드웨어 친화적 접근을 제시한다."
    },
    {
      id: "j05",
      title: "An Improved Deep Learning-Based MSA-Net Model for Small Liver Tumor Segmentation",
      authors: "Hina, B., Maqsood, M., Sattar, A., Rehman, Z. U., Bukhari, M., Rho, S., & Kim, H.",
      venue: "Science Progress, 109(3), 1-15",
      year: 2026,
      type: "SCIE",
      members: ["김형준"],
      metrics: "2025 IF 2.6, JCR Q2 (Multidisciplinary Sciences)",
      abstract: "본 연구는 복잡한 의료영상에서 작은 간 종양을 자동으로 정밀 분할하여 영상의학 전문의의 진단을 지원하기 위한 MSA-Net(Multi-Scale Attention Network)을 제안하였다. 기존 U-Net 계열 모형이 큰 종양과 작은 종양을 구분하는 데 한계를 보이는 점을 개선하기 위해 인코더와 디코더에 다중 스케일 합성곱 계층을 적용하고, 중요 영역에 집중하면서 여러 수용영역의 문맥정보를 수집할 수 있도록 attention mechanism을 결합하였다. 제안된 모형은 공개 3DIRCADb와 LiTS 데이터셋을 이용하여 학습하고 검증하였다. 작은 종양 기준으로 3DIRCADb에서는 Dice score 92.00%, Jaccard index 86.00%를 기록하였고, LiTS에서는 각각 72.57%와 65.35%를 기록하였다. 특히 종양 크기를 구분하여 성능을 평가함으로써 작은 종양 분할에서의 개선효과를 구체적으로 확인하였으며, 실제 임상환경에서의 컴퓨터 보조진단 활용 가능성을 제시하였다."
    },
    {
      id: "j06",
      title: "Content-Based File Classification and Organization System Using LLMs",
      authors: "Son, W., & Kim, H.",
      venue: "Electronics, 15(7), 1524",
      year: 2026,
      type: "SCIE",
      members: ["김형준"],
      metrics: "2025 IF 2.9, JCR Q2 (Engineering, Electrical & Electronic)",
      abstract: "본 연구는 파일명, 확장자, 생성일과 같은 구조화된 메타데이터에 의존하는 기존 파일관리 방식의 한계를 보완하기 위해 대규모 언어모델(LLM)을 활용한 Content-based File Classification and Organization System(CFCOS)을 개발하였다. CFCOS는 파일의 실제 내용을 분석하여 의미적 요약을 생성하고, 파일 구성과 내용에 기반한 기준에 따라 의미 있는 범주로 자동 분류한다. 이를 통해 규칙 기반 메타데이터만으로는 충분히 반영하기 어려운 사용자의 의도와 파일의 의미를 조직체계에 반영할 수 있도록 하였다. 다양한 평가를 통해 기존 파일관리 시스템의 주요 한계를 CFCOS가 어떻게 보완하는지를 분석하고, LLM 기반 콘텐츠 인식형 파일관리의 특성을 제시하였다. 연구결과는 이러한 접근이 파일시스템을 넘어 프롬프트 엔지니어링을 활용한 기존 서비스의 의미기반 개인화 전환에도 확장될 수 있음을 시사한다."
    },
    {
      id: "j07",
      title: "KoTaP: A Panel Dataset for Corporate Tax Avoidance, Performance, and Governance in Korea",
      authors: "",
      venue: "Scientific Data, 2026년 2월",
      year: 2026,
      type: "SCIE",
      members: [],
      metrics: "2025 IF 7.2, JCR Q1 (Multidisciplinary Sciences)",
      abstract: "본 연구는 2011년부터 2024년까지 KOSPI와 KOSDAQ에 상장된 비금융기업을 대상으로 구축한 장기 패널데이터인 Korean Tax Avoidance Panel(KoTaP)을 소개한다. 금융기업, 12월 결산이 아닌 기업, 자본잠식기업 및 세전이익이 음수인 기업 등을 제외한 최종 데이터는 1,754개 기업의 12,653개 기업-연도 관측치로 구성된다. KoTaP은 기업의 조세회피를 예측변수로 활용하여 수익성, 안정성, 성장성 및 지배구조 등 다양한 기업 특성과 연계할 수 있도록 설계되었다. 조세회피는 현금유효세율, GAAP 유효세율, 회계-세무이익 차이 등 상호보완적인 지표로 측정되며, 해석가능성을 높이기 위한 조정도 적용하였다. 데이터는 표준화된 기업-연도 패널구조를 갖추고 국제 선행연구와의 비교가능성을 확보하는 동시에, 한국기업의 집중소유구조, 높은 외국인지분율, 높은 유동성 등 제도적 특성도 반영한다. KoTaP은 계량경제학 분석뿐만 아니라 설명가능한 머신러닝을 포함한 다양한 예측 및 분석 연구에 활용될 수 있다."
    },
    {
      id: "j08",
      title: "LFTD: Transformer-Enhanced Diffusion Model for Realistic Financial Time-Series Data Generation",
      authors: "",
      venue: "AI, 2026년 2월",
      year: 2026,
      type: "ESCI",
      members: [],
      metrics: "2025 IF 6.5, JCR Q1 (Computer Science, Interdisciplinary Applications)",
      abstract: "본 연구는 기업 재무제표 패널의 짧은 시계열과 결측 문제를 보완하기 위해 현실적인 기업 수준 재무시계열을 생성하는 Latent Financial Time-Series Diffusion(LFTD) 모형을 제안하였다. LFTD는 FT-Transformer를 통해 동일 연도 내 재무변수 간 상호작용을 학습하고, Time Series Transformer(TST)를 통해 장기 시계열 변화를 포착하는 이중 인코더 구조를 사용한다. 이후 잠재공간에서 Transformer 기반 denoising diffusion model을 학습하고, 확산 단계와 연도, 기업 정체성, 기업연령 정보를 FiLM 방식으로 조건화하여 기업 및 시점 특성에 부합하는 데이터를 생성한다. TST 기반 Cross-Decoder는 생성된 잠재표현을 연속형 및 이진형 재무변수로 복원한다. 2011년부터 2023년까지 한국 상장기업 데이터를 활용한 실증분석에서 LFTD 생성 데이터를 이용한 학습자료 확장은 market-to-book과 Tobin's Q의 동일연도 및 차기연도 예측성능을 일관되게 개선하였으며, 기존 생성형 데이터 증강 방법과 절제모형보다 우수한 성능을 나타냈다. 이는 도메인 조건부 잠재 확산모형이 기업 재무시계열 데이터 증강에 실질적으로 활용될 수 있음을 보여준다."
    },
    {
      id: "j09",
      title: "Multidimensional Contemporaneous Prediction of Harmonized Consumer Price Index Levels Across Countries Using Reproducible Machine Learning and Deep Learning Models",
      authors: "",
      venue: "Scientific Reports, 게재예정",
      year: 2026,
      type: "SCIE",
      members: [],
      metrics: "2025 IF 4.9, JCR Q1 (Multidisciplinary Sciences)",
      abstract: "본 연구는 국가 간 소비자물가지수(CPI)를 예측하기 위한 다차원적 머신러닝, 딥러닝 프레임워크를 구축하고, 재현성 문제에 대응하여 주요 신경망 비교분석을 완전히 재추정하고 문서화한 벤치마크로 재구성하였다. 1995년부터 2020년까지 39개국 545개 관측치의 공통변수 패널을 활용하여 2014년까지 337개 관측치를 학습자료, 2015년부터 2017년까지 102개를 검증자료, 2018년부터 2020년까지 106개를 홀드아웃 자료로 시계열 순서에 따라 분할하였다. CNN, RNN, LSTM 모형에는 각 국가-연도별 최대 4개 연도의 최근 설명변수 벡터가 입력되며 CPI 자체는 입력에서 제외하였고, 모든 표준화는 학습자료에만 적합하였다. 다섯 개의 고정 random seed 분석에서 CNN은 평균 RMSE 0.1943으로 모든 실행에서 RMSE 기준 1위를 기록했으며, LSTM은 평균 MAE 0.1128과 MAPE 0.0803으로 가장 낮은 값을 나타냈다. 또한 CNN은 2018년부터 2020년까지 세 개 expanding-window fold에서도 모두 가장 낮은 RMSE를 보였다. 학습, 검증, 테스트 분할과 정규화 파라미터, 고정 seed, 관측치 수준 예측값, 학습곡선 등을 단일 replication package로 제공함으로써, 본 연구는 모형 우월성 주장보다 재현 가능한 성능과 모형순위의 안정성을 중심으로 결론을 제한하였다."
    },
    {
      id: "j10",
      title: "Integrating IS success and open innovation in enterprise LLM adoption: a dual-path model of net benefits and usage growth",
      authors: "Kim, T., Kwon, O., Bae, S., & Lee, K. Y.",
      venue: "Behaviour & Information Technology, 1-30",
      year: 2026,
      type: "SSCI",
      members: ["권오병"],
      metrics: "2025 IF 4.2, JCR Q1",
      abstract: ""
    },
    {
      id: "j11",
      title: "그레이 스완 이벤트 하에서의 옵션 가격 예측을 위한 양자 기계학습 응용",
      authors: "권상지, 권성준, 김성민, Zichen Luo, 최상호, 최륜희, 권오병",
      venue: "지능정보연구, 32(2), 95-123",
      year: 2026,
      type: "KCI",
      members: ["권오병"],
      metrics: "DOI 10.13088/jiis.2026.32.2.095",
      abstract: ""
    },
    {
      id: "j12",
      title: "신호 저항 메커니즘을 반영한 DropConnect 기반 우주 물체 인식 방법",
      authors: "고풍, 양가호, 권오병",
      venue: "지능정보연구, 32(1), 205-223",
      year: 2026,
      type: "KCI",
      members: ["권오병"],
      abstract: ""
    },
    {
      id: "j13",
      title: "AI 민주화 프로세스 설계에 있어서의 도전과 전략에 대한 체계적 문헌고찰",
      authors: "권오병, Wu Yutian, 오현주",
      venue: "지능정보연구, 32(2), 341-361",
      year: 2026,
      type: "KCI",
      members: ["권오병"],
      abstract: ""
    }
  ],

  /* ---------- 9-1. 대표 논문 (홈 화면 카드) ----------
     id 는 publications 의 id 를 가리킵니다. thumb 는 논문 본문 그림을 잘라 쓴 것입니다.
     me 는 저자 문자열에서 우리 연구진에 해당하는 이름으로, 화면에서 강조 표시됩니다.
  ------------------------------------------ */
  featured: [
    {
      id: "j04",
      me: "Kwon, O.",
      doi: "https://doi.org/10.3390/sym18040605",
      thumb: "assets/img/papers/fig-racs.jpg",
      alt: "조건부 확산 과정에서 유효 Schmidt 랭크가 4에서 16으로 뛰는 것을 보여주는 그래프",
      note: "조건부 양자 확산에서 유효 랭크가 네 배로 뛰는 rank explosion 현상을 밝히고, 매 단계 다양체로 되돌리는 방식으로 재구성 오차를 30.8% 줄였습니다."
    },
    {
      id: "j06",
      me: "Kim, H.",
      doi: "https://doi.org/10.3390/electronics15071524",
      thumb: "assets/img/papers/fig-cfcos.jpg",
      alt: "파일 요약과 태그 생성, 분류로 이어지는 CFCOS 시스템 구조도",
      note: "파일 내용을 대규모 언어모델로 요약해 태그를 만들고 그 태그대로 폴더를 정리합니다. 근거를 함께 쓰게 하는 프롬프트로 분류 정확도 96.3%를 얻었습니다."
    },
    {
      id: "j05",
      me: "Kim, H.",
      doi: "https://doi.org/10.1177/00368504261473340",
      thumb: "assets/img/papers/fig-msanet.jpg",
      alt: "간과 종양 위치를 표시한 CT 영상과 모델의 어텐션 히트맵",
      note: "다중 스케일 합성곱과 어텐션 스킵 연결을 U-Net에 넣어 작은 간 종양을 잡아냅니다. 3DIRCADb 소형 종양 기준 Dice 92.00%입니다."
    }
  ],

  /* ---------- 10. 본 과제 주요 발표 ---------- */
  presentations: [
    {
      id: "t01",
      title: "Understanding the Visual Projection Space of Multimodal LLMs",
      venue: "2026 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
      when: "2026년 3월",
      doi: "10.1109/WACV61042.2026.00585",
      badge: "Top-tier Conference",
      abstract: "본 연구는 멀티모달 대규모 언어모델(MLLM) 내부에서 단일 시각 토큰이 수행하는 역할을 분석한다. 최근의 MLLM은 일반적으로 투영된 시각 특징을 텍스트 시퀀스 앞에 결합하는 단순한 구조를 사용하지만, 해당 벡터가 단순한 문맥 정보만 제공하는지 또는 실제 생성 과정을 능동적으로 유도하는지는 충분히 규명되지 않았다. 이에 본 연구는 잠재표현과 토큰 간 정렬, 내재차원, 섭동 민감도를 분석하는 기하학적 탐색 프레임워크를 제안하고, 4개 데이터셋과 LLaVA, BLIP-2, Kosmos-2 등 3개 대표 MLLM을 비교하였다. 분석 결과, BLIP-2는 강한 정렬과 매우 낮은 민감도를 보이는 저차원 압축 특성을, LLaVA는 높은 반응성을 갖는 유연한 고차원 매핑 특성을, Kosmos-2는 두 특성의 중간적 형태를 나타냈다. 또한 이러한 기하학적 특성은 SQA의 정답률과 VQAv2의 환각 정도 등 실제 성능과 밀접하게 관련되었으며, 지나치게 낮거나 높은 민감도가 불안정한 시각적 근거 연결과 연관되는 것으로 나타났다. 본 연구는 시각-언어 결합을 진단하는 새로운 관점으로 기하학적 분석의 유용성을 제시하고, 시각 투영구조 설계와 정렬 학습 및 사용자 제어형 멀티모달 생성모형 개발에 시사점을 제공한다."
    },
    {
      id: "t02",
      title: "딥러닝 기반 기업 조세회피 수준 연구",
      venue: "2025년 한국조세재정연구원 네트워크",
      when: "2025년",
      abstract: "본 연구는 한국 상장기업의 정형 재무데이터와 비정형 MD&A 텍스트데이터를 결합하여 딥러닝 기반 기업 조세회피 수준 예측모형을 개발하는 데 목적이 있다. 2011년부터 2024년까지 KOSPI와 KOSDAQ 상장 비금융기업 16,154개 기업-연도 자료를 활용하였으며, 조세회피 측정지표로 CETR, GETR, TSTA 및 TSDA를 적용하였다. 또한 RNN, LSTM, CNN, GRU, Transformer 등 다양한 딥러닝 모형과 LSTM-Transformer 하이브리드 모형의 예측성능을 비교하였다. 분석 결과, 재무데이터와 MD&A 텍스트를 함께 활용할 때 재무데이터만을 사용한 경우보다 전반적인 예측성능이 향상되었으며, Transformer와 LSTM-Transformer 하이브리드 모형이 상대적으로 우수한 성능을 보였다. 특히 TSDA를 대상으로 한 하이브리드 모형에서 MAE 0.1005, RMSE 0.1514, R² 0.7285로 가장 높은 예측성능이 확인되었다. 이러한 결과는 재무정보와 경영진의 언어적 정보를 결합한 AI 기반 분석이 기업의 조세회피 수준을 보다 정교하게 예측할 수 있음을 보여주며, 향후 과세당국의 조세위험 조기 탐지와 예방적 세무행정에 활용될 수 있음을 시사한다."
    },
    {
      id: "t03",
      title: "Financial Diffusion: Transformer-Enhanced Diffusion Model for Realistic Financial Time-Series Data Generation",
      venue: "2025년 한국회계정보학회 추계학술대회",
      when: "2025년",
      abstract: "기업 수준의 재무데이터는 본질적으로 다변량 구조와 시간적 의존성을 지니지만, 실제 활용 가능한 재무 패널자료는 짧은 관측기간, 결측치, 제한된 표본 수 등의 문제로 인해 고도화된 예측모형을 학습하는 데 제약이 존재한다. 본 연구는 재무변수 간의 상호관계, 시간적 변화, 기업별 특성을 보존하면서 현실적인 합성 재무시계열 데이터를 생성하기 위한 Transformer 기반 확산모형인 Financial Diffusion을 제안한다. 제안된 모형은 FT-Transformer를 활용하여 각 시점 내 재무변수 간 복잡한 상호작용을 학습하고, Time Series Transformer를 통해 시점 간 장기적 의존관계를 포착한다. 이렇게 추출된 정보는 압축된 잠재공간에 통합되며, 이후 Transformer 기반 잡음제거 확산모형이 시간 및 기업 특성 정보를 조건으로 하여 합성 재무시계열을 생성한다. 한국 상장기업의 패널데이터를 활용한 분석 결과, Financial Diffusion은 원자료의 주요 다변량 구조와 시간적 특성을 효과적으로 유지하면서 현실적인 합성 재무데이터를 생성하는 것으로 나타났다. 또한 생성된 합성데이터를 기존 학습자료에 추가할 경우 시장가치 대비 장부가치비율과 Tobin's Q를 포함한 기업가치 예측성능이 동시점 및 미래시점 예측 모두에서 일관되게 향상되었다."
    },
    {
      id: "t04",
      title: "머신러닝과 딥러닝을 활용한 기업 조세 리스크 예측 하이브리드 모델 연구",
      venue: "2026년 한국조세재정연구원 네트워크",
      when: "2026년",
      abstract: "본 연구는 상장 비금융업 기업의 조세 리스크를 사전에 예측하기 위한 머신러닝, 딥러닝 기반 하이브리드 모형을 개발하는 데 목적이 있다. 조세 리스크는 세무조사, 조세불복, 정정공시 등의 사건성 리스크와 법인세 현금납부액의 변동성 리스크로 구분하였으며, 현재 분석에서는 법인세 납부액의 3년 및 5년 이동 변동성(TAX_SD3, TAX_SD5)을 중심으로 예측모형을 검증하였다. KOSPI와 KOSDAQ 상장 비금융업 기업의 재무자료와 과거 현금세 정보를 활용하여 직접예측, 간접예측 및 하이브리드 모형의 성능을 비교하였으며, 시계열 정보누수를 방지하기 위해 시점별 학습, 검증, 테스트 자료를 분리하였다. 분석 결과, 과거의 실제 세금납부 정보를 활용하는 Rolling-update 방식에서는 단순 기준모형 대비 MAE가 약 29% 감소하고 높은 예측력을 보였다. 반면 완전 미래형 예측에서는 예측기간이 길어질수록 성능이 감소하였으며, 특히 극단적인 세금 변동성과 환급 발생 기업에 대한 예측이 상대적으로 어려운 것으로 나타났다. 이러한 결과는 과거 현금세 정보와 머신러닝을 결합할 경우 기업의 조세 리스크를 효과적으로 예측할 수 있음을 보여주며, 향후 사건성 조세 리스크를 추가하여 통합 예측체계로 확장할 수 있음을 시사한다."
    }
  ],

  /* ---------- 11. 1차년도 학술대회 발표 ---------- */
  conferences: [
    { scope: "국제", event: "International XR-Metaverse Conference 2025", title: "The Role of Space VR Experience in Window Design for Space Tourism", authors: "강유진, 배수진, 양가호, 김명자, 권오병", date: "2025-06-23", fusion: false },
    { scope: "국제", event: "International XR-Metaverse Conference 2025", title: "What factors should be considered in designing space VR experiences in preparation for the era of space tourism?", authors: "보탄항, 김태영, 배수진, 권오병", date: "2025-06-24", fusion: false },
    { scope: "국제", event: "2025 International Conference on Platform Technology and Service (PlatCon-25)", title: "Selective Forgetting in ACGANs via Discriminator-Guided Unlearning", authors: "이병천, 김상민, 박성우, 노승민, 이미영", date: "2025-08-25", fusion: false },
    { scope: "국제", event: "2025 International Conference on Platform Technology and Service (PlatCon-25)", title: "Machine Unlearning via Distillation into Soft Decision Tree", authors: "김상민, 이병천, 박성우, 노승민, 이미영", date: "2025-08-25", fusion: false },
    { scope: "국제", event: "The 20th Conference on Computer Science and Intelligence Systems (FedCSIS)", title: "A Framework for Machine Unlearning Using Selective Knowledge Distillation into Soft Decision Tree", authors: "김상민, 이병천, 박성우, 이미영, 노승민", date: "2025-09-15", fusion: false },
    { scope: "국제", event: "2025 IEEE International Conference on Image Processing Workshop", title: "A Vision-Language Model-Based Scene Graph Generation Method with Directional Relationship Reasoning", authors: "오진영, 김은빈, 심종화, 황인준", date: "2025-09-18", fusion: false },
    { scope: "국제", event: "The European Conference on Artificial Intelligence (ECAI TRUST-AI Workshop)", title: "Discriminator-Guided Unlearning: A Framework for Selective Forgetting in Conditional GANs", authors: "이병천, 김상민, 박성우, 노승민, 이미영", date: "2025-10-25", fusion: false },

    { scope: "국내", event: "한국경영과학회", title: "식품안전 관리체계가 수입식품 위해도 예측에 미치는 영향 비교 분석: 기계학습 접근법", authors: "허지혜, 김희라, 오해미, 오준택, 이은서, 권오병", date: "2025-06-20", fusion: true },
    { scope: "국내", event: "한국경영과학회", title: "시계열 로그와 다차원 감성 임베딩 융합에 기반한 3D 애셋 개인화 추천 모델 연구", authors: "권상지, 허지혜, 고풍, 김성민, 권오병", date: "2025-06-20", fusion: true },
    { scope: "국내", event: "한국회계정보학회 추계학술대회", title: "머신러닝 기반 대손충당금의 추정과 그 효과", authors: "최승욱", date: "2025-11-01", fusion: true },
    { scope: "국내", event: "한국회계정보학회 추계학술대회", title: "딥러닝 기반 기업 조세회피 수준 예측 연구", authors: "나형종, 김형준", date: "2025-11-01", fusion: true },
    { scope: "국내", event: "한국회계정보학회 추계학술대회", title: "Financial Diffusion: Transformer-Enhanced Diffusion Model for Realistic Financial Time-Series Data Generation", authors: "김형준, 나형종", date: "2025-11-01", fusion: true },
    { scope: "국내", event: "한국경영과학회", title: "그레이 스완 이벤트 하에서의 옵션 가격 예측을 위한 양자 기계학습 응용", authors: "권상지, 권성준, 김성민, 최륜희, 권상호, 권오병", date: "2025-11-01", fusion: true },
    { scope: "국내", event: "한국경영과학회", title: "설명가능한 주가변동예측을 위한 Salience-Gated Query-Attentive(SGQA) 방법", authors: "권오병, Venkatesan Dhivya, 배수진", date: "2025-11-01", fusion: true },
    { scope: "국내", event: "Korean DataBase Conference", title: "동적 코드 생성 및 실행 기반의 계층적 AI 에이전트 시스템", authors: "심종화, 김대훈, 정종균, 김창수, 황인준", date: "2025-11-07", fusion: false },
    { scope: "국내", event: "Korean DataBase Conference", title: "막 구조물 도면 자동 설계를 위한 LLM 에이전트 구현", authors: "정찬혁, 심종화, 김은빈, 황인준", date: "2025-11-07", fusion: false },
    { scope: "국내", event: "한국정보처리학회 학술대회 ASK 2025", title: "비전-언어 모델과 임베딩 변환기 기반의 의료 영상 이상 탐지 기법", authors: "노승서, 김은빈, 심종화, 황인준", date: "2025-11-08", fusion: false },
    { scope: "국내", event: "한국IT서비스학회 추계학술대회", title: "직장 근무자들의 지각된 LLM 품질, 사용에 대한 우려와 호기심이 업무용 LLM의 지속사용의도에 미치는 영향", authors: "Selina Viktoriia, 배수진, Vo Thanh Hang, 권오병", date: "2025-11-12", fusion: false },
    { scope: "국내", event: "한국전자거래학회 학술대회", title: "패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크", authors: "김상민, 이병천, 박성우, 이미영, 노승민", date: "2025-11-29", fusion: false },
    { scope: "국내", event: "Korea Software Congress 2025", title: "한국 기업 세금 회피 지표 예측을 위한 머신러닝 및 딥러닝 모델의 비교 분석", authors: "한승용, 홍화수, 임민수, 김형준", date: "2025-12-01", fusion: true },
    { scope: "국내", event: "Korea Software Congress 2025", title: "Dual-Residual Self-Conditioning을 적용한 Advanced TranAD: 오탐 감소를 위한 구조적 개선", authors: "서준일, 유동현, 조동현, 김형준", date: "2025-12-01", fusion: false },
    { scope: "국내", event: "Korea Software Congress 2025", title: "Mamba Fusion을 활용한 오디오-비주얼 음성 분리", authors: "송원호, 한승용, 홍화수, 임민수, 김형준", date: "2025-12-01", fusion: false },

    { scope: "국제", event: "2026 International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML), IEEE, pp. 483-488", title: "Fixation-Spike Gate: A Visual-Neuroscience-Inspired Framework for Robust Railway Object Detection in Adverse Environments", authors: "권오병, 고풍, LIANG JIAHAO, 강유진", date: "2026-03", fusion: false },
    { scope: "국제", event: "International XR-Metaverse Conference 2026, Tallinn, Estonia", title: "The impact of ESG and market-oriented narratives on investment outcomes in the VR industry", authors: "권오병, LIANG JIAHAO, 고풍", date: "2026", fusion: false },
    { scope: "국제", event: "International XR-Metaverse Conference 2026, Tallinn, Estonia", title: "Opportunities for XR in the Moon to Mars (M2M) mission architecture", authors: "강유진, 배수진, 권오병", date: "2026", fusion: false }
  ],

  /* ---------- 12. 수상 ---------- */
  awards: [
    { kind: "우수논문상", org: "한국세무학회", title: "IFRS 9 기대신용손실 모형의 적용 효과: 은행의 비정상 대손충당금 및 가치관련성을 중심으로", who: "", date: "2025" },
    { kind: "우수논문상", org: "한국정보처리학회 학술대회 ASK 2025", title: "비전-언어 모델과 임베딩 변환기 기반의 의료 영상 이상 탐지 기법", who: "노승서, 김은빈, 심종화, 황인준", date: "2025-11-07" },
    { kind: "우수논문상", org: "한국전자거래학회", title: "패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크", who: "김상민, 이병천, 박성우, 이미영, 노승민", date: "2025-11-29" },
    { kind: "공모전 최우수상", org: "한국전자거래학회 대학생 및 대학원생 아이디어 공모전", title: "머신 언러닝 기반 네트워크 침입 탐지 시스템(NIDS)", who: "임태인, 김상민, 이병천", date: "2025-11-29" }
  ],

  /* ---------- 13. 연구 파이프라인 ---------- */
  pipeline: {
    inputs: [
      { name: "재무와 회계 데이터", note: "재무제표, 감사보고서, 회계 및 감사 기준", track: "hs" },
      { name: "공시 텍스트와 ESG 자료", note: "사업보고서, MD&A, 지속가능경영 보고서", track: "hs" },
      { name: "소비자 피드백", note: "Reddit, Instagram, X, Weibo", track: "sci" },
      { name: "이미지, 영상, 센서", note: "생산시설 촬영과 센서 기록, 의료 영상과 문서 영상", track: "sci" },
      { name: "거시경제와 시장 지표", note: "국가별 거시지표, Crunchbase 기업 정보", track: "mix" }
    ],
    fusion: [
      { name: "멀티모달 딥러닝", note: "VisualBERT, LXMERT, CLIP, Flamingo, VLM", track: "sci" },
      { name: "생성형 AI와 확산모형", note: "Financial Diffusion, LFTD, 데이터 증강", track: "sci" },
      { name: "양자기계학습", note: "QSVM, QAOA, MPS 기반 양자 생성모형", track: "mix" },
      { name: "설명가능 AI", note: "Grad-CAM, Attention 기반 결과 해석", track: "sci" }
    ],
    outputs: [
      { name: "회계감사 위험 식별" },
      { name: "조세회피와 조세 리스크 예측" },
      { name: "금융 포트폴리오 최적화" },
      { name: "투자 위험 분석" },
      { name: "ESG 평가와 브랜드 관리" }
    ]
  },

  /* ---------- 14. 참여기관 ----------
     logoH 는 화면에 보이는 로고 높이(px)입니다. 로고마다 여백이 달라
     시각적으로 크기를 맞추려고 값을 조금씩 다르게 두었습니다.
  ------------------------------------------ */
  institutions: [
    { name: "경희대학교", role: "주관기관", url: "https://www.khu.ac.kr", logo: "assets/img/logo/khu.png", logoH: 27 },
    { name: "고려대학교", role: "참여기관", url: "https://www.korea.ac.kr", logo: "assets/img/logo/korea.png", logoH: 30 },
    { name: "가톨릭대학교", role: "참여기관", url: "https://www.catholic.ac.kr", logo: "assets/img/logo/catholic.png", logoH: 27 },
    { name: "세명대학교", role: "참여기관", url: "https://www.semyung.ac.kr", logo: "assets/img/logo/semyung.png", logoH: 23 },
    { name: "창원대학교", role: "참여기관", url: "https://www.changwon.ac.kr", logo: "assets/img/logo/changwon.svg", logoH: 27 }
  ],

  /* ---------- 15. 소식 ---------- */
  notices: [
    { id: "n01", cat: "공지", title: "연구그룹 출범: 글로벌인문사회융합연구지원사업 선정 (NRF-2025S1A5C3A01010737)", date: "2025-06-01",
      body: "2025년도 글로벌인문사회융합연구지원사업 연구그룹 지원형(국내형)에 선정되어 연구를 시작했습니다. 연구기간은 2025년 6월 1일부터 2028년 5월 31일까지 3년이며, 경희대학교를 주관기관으로 5개 대학 6인의 연구진과 10명의 연구조원이 참여합니다." },
    { id: "n02", cat: "발표", title: "International XR-Metaverse Conference 2025 발표 2건", date: "2025-06-23",
      body: "우주관광 시대를 대비한 우주 VR 경험 설계를 주제로 두 편의 연구를 발표했습니다. 창 디자인에서 우주 VR 경험이 갖는 역할, 그리고 우주 VR 경험 설계에서 고려해야 할 요인을 다루었습니다." },
    { id: "n03", cat: "발표", title: "PlatCon-25에서 머신 언러닝 연구 2건 발표", date: "2025-08-25",
      body: "조건부 GAN의 선택적 망각과 소프트 결정트리 증류 기반 머신 언러닝을 주제로 두 편을 발표했습니다. 생성형 AI의 윤리성과 신뢰성 향상을 위한 연구입니다." },
    { id: "n04", cat: "발표", title: "FedCSIS 2025 및 IEEE ICIP Workshop 발표", date: "2025-09-18",
      body: "선택적 지식 증류를 활용한 머신 언러닝 프레임워크(FedCSIS)와 방향 관계 추론을 적용한 비전-언어 모델 기반 장면 그래프 생성 기법(IEEE ICIP Workshop)을 발표했습니다." },
    { id: "n05", cat: "발표", title: "ECAI TRUST-AI Workshop 발표", date: "2025-10-25",
      body: "판별자 유도 언러닝을 통한 조건부 GAN의 선택적 망각 프레임워크를 발표했습니다." },
    { id: "n06", cat: "행사", title: "인문사회 기반 융합연구 활성화 공유&공감 포럼 참여", date: "2025-10-28",
      body: "서울대학교 관악캠퍼스에서 열린 2025년 인문사회 기반 융합연구 활성화를 위한 융합연구 공유&공감 포럼에 참여하여 연구재단 성과공유회에 협조했습니다." },
    { id: "n07", cat: "행사", title: "한국회계정보학회 추계학술대회 주관 세션 개최", date: "2025-11-01",
      body: "연구그룹이 주관하여 세션을 열고 세 편의 연구를 발표했습니다. 머신러닝 기반 대손충당금 추정, 딥러닝 기반 조세회피 수준 예측, Financial Diffusion을 다루었습니다." },
    { id: "n08", cat: "수상", title: "ASK 2025 우수논문상 수상", date: "2025-11-07",
      body: "비전-언어 모델과 임베딩 변환기 기반의 의료 영상 이상 탐지 기법으로 한국정보처리학회 학술대회 ASK 2025에서 우수논문상을 수상했습니다." },
    { id: "n09", cat: "수상", title: "한국전자거래학회 우수논문상 및 아이디어 공모전 최우수상", date: "2025-11-29",
      body: "패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크로 우수논문상을, 머신 언러닝 기반 네트워크 침입 탐지 시스템으로 대학생 및 대학원생 아이디어 공모전 최우수상을 수상했습니다." },
    { id: "n10", cat: "발표", title: "Korea Software Congress 2025 발표 3건", date: "2025-12-01",
      body: "기업 세금 회피 지표 예측 모델 비교, Advanced TranAD의 구조적 개선, Mamba Fusion 기반 오디오-비주얼 음성 분리를 발표했습니다." },
    { id: "n11", cat: "공지", title: "1차년도 연차보고서 제출", date: "2025-12-10",
      body: "1차년도 실적으로 국내 학술대회 발표 15건, 국제 학술대회 발표 7건, 연구팀 주관 공개발표 1건, 수상 3건을 제출했습니다. 2차년도에는 연구팀을 이공, 인문사회, 융합연구로 나누어 운영합니다." },
    { id: "n12", cat: "공지", title: "WACV 2026 논문 채택", date: "2026-01-15",
      body: "Understanding the Visual Projection Space of Multimodal LLMs가 컴퓨터 비전 분야 최우수 학술대회인 IEEE/CVF WACV 2026에 채택되었습니다. 발표는 2026년 3월입니다." }
  ]
};
