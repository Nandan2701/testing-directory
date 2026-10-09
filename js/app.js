/**
 * VNIT STARTUPS DIRECTORY — CORE CLIENT ENGINE & INTERACTIVE CONTROLLERS
 * Architecture: Split Modular Asset with Unified Section Anchors
 * Contains: Seed data loader, facet filtering, search, modal & newsletter controllers, 3D tilt engine.
 */

    /* ─── CLIENT APPLICATION STATE & LOGIC ─── */
    const SUPABASE_URL = "https://gqbmrbjdeoxwwnulwsfq.supabase.co";
    const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxYm1yYmpkZW94d3dudWx3c2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NDYxNzIsImV4cCI6MjEwNjQyMjE3Mn0.ClePAFMe3CrNgU2hYIUvz9dhE8fyEAbUvps6569BnEk";

    // Fallback Verified Seed Roster (guarantees instant zero-CORS rendering even via file:// protocol)
    const SEED_STARTUPS = [
      {
            "id": "0cf2c433-e644-408b-9a77-a0e6cd8fb15a",
            "name": "Truemeds India",
            "sector": "HealthTech & Telehealth",
            "pitch": "Telehealth and e-pharmacy platform delivering certified generic medicine substitutes to reduce recurring prescription bills by up to 72% for Indian households.",
            "website_url": "https://www.truemeds.in/",
            "linkedin_url": "https://linkedin.com/company/truemedsin",
            "department": "Civil",
            "batch_year": null,
            "location": "Mumbai, Maharashtra",
            "funding_stage": "",
            "funding_amount": "NULL",
            "headcount": 1428,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Akshat Nayyar",
                        "role": "Co-founder",
                        "degree": "B.Tech Civil",
                        "linkedin": "https://linkedin.com/in/akshat-nayyar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 1,
            "about": "Truemeds is a telehealth and e-pharmacy platform that uses proprietary medicine-matching algorithms to help chronic patients substitute expensive branded drugs with certified generic alternatives, saving households up to 72% on monthly healthcare bills.",
            "slug": "truemeds-india",
            "monogram": "TR",
            "logo_url": "./assets/logos/truemeds-india.png"
      },
      {
            "id": "0dc44a5d-d1f9-41c3-953f-44017e4ccc25",
            "name": "Awiros",
            "sector": "Computer Vision & Edge AI",
            "pitch": "Computer vision operating system and app marketplace that transforms standard CCTV camera networks into automated safety, inspection, and security monitors.",
            "website_url": "https://www.awiros.com/",
            "linkedin_url": "https://www.linkedin.com/company/awiros/",
            "department": "Electrical and Computer Engineering",
            "batch_year": "2007",
            "location": "Gurugram, Haryana, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 100,
            "incorporated_year": 2015,
            "founders": [
                  {
                        "name": "Vikram Gupta",
                        "role": "Founder",
                        "degree": "B.Tech Elec '07",
                        "linkedin": "https://linkedin.com/in/vkrmgpta"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 2,
            "about": "Awiros is a computer vision operating system and app marketplace that allows enterprises and public infrastructure operators to run video intelligence apps on standard CCTV cameras for automated perimeter security, HSE compliance, and operational monitoring.",
            "slug": "awiros",
            "monogram": "AW",
            "logo_url": "./assets/logos/awiros.png"
      },
      {
            "id": "18707af1-cf1d-4b6c-94d3-b4f3cf32ab4a",
            "name": "Human Capitalists",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "AI-native hiring platform that combines autonomous sourcing agents with human recruiters to deliver screened tech candidates in under 72 hours.",
            "website_url": "https://humancapitalists.ai/",
            "linkedin_url": "https://www.linkedin.com/company/human-capitalists/",
            "department": "Civil Engineering & Chemical Engineering",
            "batch_year": null,
            "location": "Pune City, Maharashtra",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 8,
            "incorporated_year": 2025,
            "founders": [
                  {
                        "name": "Lakshya Shukla",
                        "role": "Co-Founder",
                        "degree": "B.Tech Chem '21",
                        "linkedin": "https://linkedin.com/in/lakshya-shukla"
                  },
                  {
                        "name": "Nishant Singh Didawat",
                        "role": "Co founder",
                        "degree": "B.Tech Civil '13",
                        "linkedin": "https://linkedin.com/in/nishantsinghdidawat"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 3,
            "about": "Human Capitalists is an AI-powered talent infrastructure firm that combines autonomous sourcing agents with expert recruiters to screen, interview, and place top-tier engineering talent into high-growth technology companies within 72 hours.",
            "slug": "human-capitalists",
            "monogram": "HU",
            "logo_url": "./assets/logos/human-capitalists.png"
      },
      {
            "id": "1abc2e4a-2b93-4641-8181-c46e66b0e41e",
            "name": "Circullence Solutions",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Boutique data and cloud consultancy engineering modern data warehouses, predictive machine learning pipelines, and automated analytics for enterprises.",
            "website_url": "https://circullence.com/",
            "linkedin_url": "https://www.linkedin.com/company/circullence-solutions/",
            "department": "",
            "batch_year": null,
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 5,
            "incorporated_year": 2025,
            "founders": [
                  {
                        "name": "Sarang Aloni",
                        "role": "Founder",
                        "degree": "B.Tech",
                        "linkedin": "https://linkedin.com/in/sarang-aloni"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 4,
            "about": "Circullence Solutions is an enterprise data and cloud engineering consultancy that builds scalable data warehouses, automated ETL pipelines, and predictive analytics infrastructure to turn fragmented business data into actionable decision systems.",
            "slug": "circullence-solutions",
            "monogram": "CI",
            "logo_url": "./assets/logos/circullence-solutions.png"
      },
      {
            "id": "1bc36d57-959d-4249-8c9e-bd468246a198",
            "name": "CollegeDekho",
            "sector": "EdTech & Higher Education",
            "pitch": "Higher education marketplace and counseling platform helping over 3 million students compare colleges, choose programs, and navigate university admissions.",
            "website_url": "https://www.collegedekho.com/",
            "linkedin_url": "https://www.linkedin.com/company/collegedekho",
            "department": "",
            "batch_year": "2008",
            "location": "Gurgaon, Haryana, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 1395,
            "incorporated_year": 2015,
            "founders": [
                  {
                        "name": "Ruchir",
                        "role": "Co-Founder and CEO",
                        "degree": "B.Tech Mech '01",
                        "linkedin": "https://linkedin.com/in/aroraruchir"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 5,
            "about": "CollegeDekho is India's leading higher education discovery and student counseling marketplace, guiding millions of applicants through course selection, competitive exam prep, and college admissions across thousands of institutional partners.",
            "slug": "collegedekho",
            "monogram": "CO",
            "logo_url": "./assets/logos/collegedekho.png"
      },
      {
            "id": "1d25485c-7ac9-4a63-a618-0bdeb63ab2c9",
            "name": "Living Things",
            "sector": "CleanTech / Smart Energy IoT",
            "pitch": "IoT and AI energy intelligence platform that optimizes central air-conditioning and HVAC systems to cut commercial electricity consumption by up to 35%.",
            "website_url": "https://livingthings.ai/",
            "linkedin_url": "https://www.linkedin.com/company/living-things-feel-free/?originalSubdomain=in",
            "department": "",
            "batch_year": "",
            "location": "Mumbai, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 72,
            "incorporated_year": 2018,
            "founders": [
                  {
                        "name": "Mayank Gupta",
                        "role": "Co-Founder",
                        "degree": "B.Tech Mining Eningeering '18",
                        "linkedin": "https://linkedin.com/in/i-mayank-gupta"
                  },
                  {
                        "name": "Tushar Jagadale",
                        "role": "Co-founder & Head of AI and Data Science",
                        "degree": "B.Tech ECE '16",
                        "linkedin": "https://linkedin.com/in/tushar-jagadale"
                  },
                  {
                        "name": "Madhusudhan Naik",
                        "role": "Founder - CEO",
                        "degree": "B.Tech ECE '17",
                        "linkedin": "https://linkedin.com/in/madhusudhan-naik"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 6,
            "about": "Living Things is a smart energy IoT platform that deploys edge sensors and automated control algorithms across commercial air-conditioning and HVAC infrastructure, reducing corporate facility energy consumption and power bills by up to 35%.",
            "slug": "living-things",
            "monogram": "LI",
            "logo_url": "./assets/logos/living-things.png"
      },
      {
            "id": "1de1faab-2e06-43aa-a0a1-9732104032c3",
            "name": "Collegise",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Campus growth marketing network enabling consumer startups to run student ambassador programs and acquire collegiate users across India.",
            "website_url": "https://collegise.com/",
            "linkedin_url": "https://www.linkedin.com/company/collegise/",
            "department": "Computer Science",
            "batch_year": "2013",
            "location": "Pune Division, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 1,
            "incorporated_year": 2022,
            "founders": [
                  {
                        "name": "Pranav Chinsabwar",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/pranav-chinsabwar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 7,
            "about": "Collegise is a campus distribution and youth activation network that enables consumer brands and startups to launch student ambassador programs, drive word-of-mouth adoption, and acquire collegiate users across university campuses in India.",
            "slug": "collegise",
            "monogram": "CO",
            "logo_url": "./assets/logos/collegise.png"
      },
      {
            "id": "1e420442-1cc4-40f7-8bda-a0fe451fa4be",
            "name": "ettaflow",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "High-performance, Apache Arrow-native data replication engine that synchronizes operational databases with analytical warehouses at sub-second latency.",
            "website_url": "https://ettaflow.io/",
            "linkedin_url": "https://www.linkedin.com/company/ettaflow/",
            "department": "Electrical and Electronics Engineering",
            "batch_year": "2016",
            "location": "Bengaluru, Karnataka, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 2,
            "incorporated_year": 2026,
            "founders": [
                  {
                        "name": "Vishal Goswami",
                        "role": "Co-Founder",
                        "degree": "B.Tech EEE",
                        "linkedin": "https://linkedin.com/in/vishal-goswami-33349b73"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 8,
            "about": "ettaflow is a high-speed data streaming and database replication engine built on Apache Arrow that captures production database changes and streams them into cloud warehouses with sub-second latency and zero query degradation.",
            "slug": "ettaflow",
            "monogram": "ET",
            "logo_url": "./assets/logos/ettaflow.png"
      },
      {
            "id": "253a56da-0cbd-4967-9258-19ec2e45bcad",
            "name": "Bombay Shaving Company",
            "sector": "D2C & Consumer Personal Care",
            "pitch": "Omnichannel personal care brand crafting precision shaving, grooming, and skincare essentials trusted by over 5 million consumers nationwide.",
            "website_url": "https://www.bombayshavingcompany.com/",
            "linkedin_url": "https://www.linkedin.com/company/bombay-shaving-company/",
            "department": "Computer Science",
            "batch_year": "2005 - 2009",
            "location": "Gurgaon, Haryana",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 435,
            "incorporated_year": 2016,
            "founders": [
                  {
                        "name": "Shantanu Deshpande",
                        "role": "Co-Founder",
                        "degree": "B.Tech CSE '09",
                        "linkedin": "https://linkedin.com/in/shantanudeshpandebsc"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 9,
            "about": "Bombay Shaving Company is an omnichannel personal care and grooming brand that designs precision razors, trimmers, and skin-friendly personal care essentials trusted by millions of consumers across thousands of retail stores and online channels.",
            "slug": "bombay-shaving-company",
            "monogram": "BO",
            "logo_url": "./assets/logos/bombay-shaving-company.png"
      },
      {
            "id": "08ba9fc5-212e-401d-bc5d-09f8348d3aa6",
            "name": "Delphi Analytics",
            "sector": null,
            "pitch": "First-party behavioral telemetry platform that captures granular product usage data inside cloud data warehouses to power predictive customer journey and retention models.",
            "website_url": "https://www.delphianalytics.ai/",
            "linkedin_url": "https://linkedin.com/company/sdsm-analytics",
            "department": null,
            "batch_year": null,
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": null,
            "funding_amount": null,
            "headcount": 17,
            "incorporated_year": 2020,
            "founders": [
                  {
                        "name": "Shreyas Mokadam",
                        "role": "Founder",
                        "degree": "B.Tech Mining Engineering '16",
                        "linkedin": "https://linkedin.com/in/shreyas-mokadam-a451b8120"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 10,
            "about": "Delphi Analytics is a customer data and behavioral telemetry platform that tracks granular product usage events directly inside enterprise cloud warehouses to build predictive user journey, retention, and conversion models without third-party tracking cookies.",
            "slug": "delphi-analytics",
            "monogram": "DE",
            "logo_url": "./assets/logos/delphi-analytics.png"
      },
      {
            "id": "39a9c53a-c55b-4e3c-96de-59e2f966bd9d",
            "name": "Neewee",
            "sector": "Industrial AI & Smart Factory",
            "pitch": "Industrial AI platform (Bodhee) delivering dynamic, constraint-aware production scheduling and predictive maintenance for heavy manufacturing plants.",
            "website_url": "https://www.bodhee.com/",
            "linkedin_url": "https://www.linkedin.com/company/neewee-analytics/",
            "department": "",
            "batch_year": "",
            "location": "Bangalore, Karnataka",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 71,
            "incorporated_year": 2014,
            "founders": [
                  {
                        "name": "Suyog Joshi",
                        "role": "Co-Founder & CPO",
                        "degree": "B.Tech ECE '97",
                        "linkedin": "https://linkedin.com/in/suyog-joshi-25541016"
                  },
                  {
                        "name": "Harsimrat Bhasin",
                        "role": "Co-Founder & CEO",
                        "degree": "B.Tech Architecture '93",
                        "linkedin": "https://linkedin.com/in/harsimrat-bhasin"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 11,
            "about": "Neewee is an industrial AI software provider whose flagship platform, Bodhee, ingests real-time shop-floor operational data to generate constraint-aware production schedules, optimize machine uptime, and reduce manufacturing bottlenecks.",
            "slug": "neewee",
            "monogram": "NE",
            "logo_url": "./assets/logos/neewee.png"
      },
      {
            "id": "3e02e369-09cf-48e0-b908-eb1ec5a6a898",
            "name": "Scienaptic AI",
            "sector": "FinTech & AI Underwriting",
            "pitch": "Explainable AI credit decisioning platform empowering banks and credit unions to approve more loans faster while reducing portfolio default risks.",
            "website_url": "https://www.scienaptic.ai/global",
            "linkedin_url": "https://www.linkedin.com/company/scienaptic-ai/",
            "department": "",
            "batch_year": "",
            "location": "New York",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 184,
            "incorporated_year": 2014,
            "founders": [
                  {
                        "name": "Pankaj Kulshreshtha",
                        "role": "Founder & CEO",
                        "degree": "B.Tech  '91",
                        "linkedin": "https://linkedin.com/in/pankaj-kulshreshtha-1452441"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 12,
            "about": "Scienaptic AI is an explainable credit decisioning and underwriting engine used by financial institutions and fintech lenders to evaluate borrower risk accurately, increase loan approvals, and reduce credit defaults through transparent machine learning models.",
            "slug": "scienaptic-ai",
            "monogram": "SC",
            "logo_url": "./assets/logos/scienaptic-ai.png"
      },
      {
            "id": "43346072-4883-4bc9-b602-bc70581311de",
            "name": "Autoven",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Connected vehicle IoT platform helping electric vehicle OEMs and fleet operators monitor real-time battery health, deploy OTA updates, and predict field failures.",
            "website_url": "https://www.autoven.com",
            "linkedin_url": "https://linkedin.com/company/autoven",
            "department": "",
            "batch_year": "",
            "location": "Pune Division, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 14,
            "incorporated_year": 2021,
            "founders": [
                  {
                        "name": "Vinay Gunasekaran",
                        "role": "Founder",
                        "degree": "B.Tech ECE '08",
                        "linkedin": "https://linkedin.com/in/vinaygunasekaran"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 13,
            "about": "Autoven is an electric mobility technology firm engineering custom high-voltage powertrains, battery management systems, and smart fleet telematics that power light electric vehicles and commercial urban logistics fleets.",
            "slug": "autoven",
            "monogram": "AU",
            "logo_url": "./assets/logos/autoven.png"
      },
      {
            "id": "546625f7-6b89-4203-a46d-8858545c722a",
            "name": "Well Played Sports",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Digital cricket coaching platform providing video biomechanics, shot analytics, and structured training programs for grassroots players and academies.",
            "website_url": "https://wellplayedcricket.com/",
            "linkedin_url": "https://www.linkedin.com/company/well-played-sports/",
            "department": "",
            "batch_year": "",
            "location": "Nagpur, Maharashtra",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 8,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Ketan Kaore",
                        "role": "Founder",
                        "degree": "B.Tech ECE '01",
                        "linkedin": "https://linkedin.com/in/ketan-kaore"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 14,
            "about": "Well Played Sports is a sports training and athletic development platform that combines biomechanical analytics, video coaching tools, and academy training programs to help cricketers systematically measure and elevate their on-field performance.",
            "slug": "well-played-sports",
            "monogram": "WE",
            "logo_url": "./assets/logos/well-played-sports.png"
      },
      {
            "id": "56c39aa6-f7fd-427b-975a-08d516bb6dcc",
            "name": "BizTranSights",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Digital transformation consultancy specializing in custom ERP deployments, CRM integration, and automated cloud business workflows for growing enterprises.",
            "website_url": "https://www.biztransights.com/",
            "linkedin_url": "https://www.linkedin.com/company/biztransights-solutions/",
            "department": "",
            "batch_year": "",
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 44,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Sonal Gole",
                        "role": "Founder",
                        "degree": "B.Tech CSE '05",
                        "linkedin": "https://linkedin.com/in/sonal-gole-58490b192"
                  },
                  {
                        "name": "Sameer Ughade",
                        "role": "Founder",
                        "degree": "B.Tech EEE",
                        "linkedin": "https://linkedin.com/in/sameerughade"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 15,
            "about": "BizTranSights is an enterprise digital transformation consultancy that designs and deploys custom cloud architectures, ERP integrations, and enterprise web solutions to modernize core business operations for mid-market and corporate clients.",
            "slug": "biztransights",
            "monogram": "BI",
            "logo_url": "./assets/logos/biztransights.png"
      },
      {
            "id": "5b28c2e7-aa5e-42fa-9a27-2cd0a95a422f",
            "name": "MasterSoft",
            "sector": "EdTech & University ERP",
            "pitch": "Comprehensive cloud education ERP automating admissions, examinations, accreditation, and student lifecycles for over 2,500 universities across India.",
            "website_url": "https://www.mastersoft.ai/",
            "linkedin_url": "https://www.linkedin.com/company/mastersofterpsolutions/",
            "department": "",
            "batch_year": "",
            "location": "Nagpur, Maharashtra",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 565,
            "incorporated_year": 2000,
            "founders": [
                  {
                        "name": "Sham Somani",
                        "role": "Founder & Managing Director",
                        "degree": "B.Tech EEE '86",
                        "linkedin": "https://linkedin.com/in/mastersoftware"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 16,
            "about": "MasterSoft is India's leading educational ERP software provider, automating academic operations, student lifecycles, fee management, and accreditation compliance for over 2,000 universities, colleges, and educational institutes nationwide.",
            "slug": "mastersoft",
            "monogram": "MA",
            "logo_url": "./assets/logos/mastersoft.png"
      },
      {
            "id": "6dd22e0a-6116-48ae-90ad-820c00c15afa",
            "name": "str8bat",
            "sector": "SportsTech & Wearable IoT",
            "pitch": "Lightweight motion sensor that clips onto any cricket bat to deliver instant 3D swing speed, impact angles, and batting metrics directly to a mobile app.",
            "website_url": "https://www.str8bat.com/",
            "linkedin_url": "https://www.linkedin.com/company/str8bat-sport-tech-solutions-pvt.-ltd./",
            "department": "",
            "batch_year": "",
            "location": "Bengaluru, Karnataka, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 32,
            "incorporated_year": 2017,
            "founders": [
                  {
                        "name": "Rahul Nagar",
                        "role": "Co-Founder",
                        "degree": "B.Tech",
                        "linkedin": "https://linkedin.com/in/rahul-nagar-5a76834"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 17,
            "about": "str8bat is a sports IoT wearable that clips directly onto any cricket bat to capture real-time, sensor-driven swing speed, impact angles, and 3D batting trajectories directly to a mobile app without requiring camera setups.",
            "slug": "str8bat",
            "monogram": "ST",
            "logo_url": "./assets/logos/str8bat.png"
      },
      {
            "id": "7151f9ce-4e6f-41ed-ba34-4fd4d2c81d34",
            "name": "InfoCepts",
            "sector": "Enterprise Data & AI Solutions",
            "pitch": "Global data and AI consulting powerhouse engineering cloud modernization, decision intelligence platforms, and automated AI agents for Fortune 500 enterprises.",
            "website_url": "https://www.infocepts.ai/",
            "linkedin_url": "https://www.linkedin.com/company/infocepts/",
            "department": "",
            "batch_year": "",
            "location": "Washington DC, VA",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 1462,
            "incorporated_year": 2004,
            "founders": [
                  {
                        "name": "Shashank Garg",
                        "role": "Co-Founder & CEO",
                        "degree": "B.Tech MME '96",
                        "linkedin": "https://linkedin.com/in/shashankgarg"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 18,
            "about": "InfoCepts is a global data and AI solutions firm that helps Fortune 500 enterprises design, build, and scale modern cloud data platforms, generative AI systems, and enterprise business intelligence to maximize return on data investments.",
            "slug": "infocepts",
            "monogram": "IN",
            "logo_url": "./assets/logos/infocepts.png"
      },
      {
            "id": "7b746153-3003-4c86-a0d5-4604fcaa4c66",
            "name": "Product Space",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Product management career accelerator offering cohort-based bootcamps, hands-on proof-of-work project building, and mentorship-driven job placement.",
            "website_url": "https://theproductspace.in/",
            "linkedin_url": "https://www.linkedin.com/company/theproductspace",
            "department": "",
            "batch_year": "",
            "location": "Bengaluru, Karnataka, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 124,
            "incorporated_year": 2025,
            "founders": [
                  {
                        "name": "Sakshi Yadav",
                        "role": "Co-Founder",
                        "degree": "B.Tech EEE",
                        "linkedin": "https://linkedin.com/in/sakshi--yadav"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 19,
            "about": "The Product Space is a cohort-based EdTech academy and community that trains aspiring product managers and growth leaders through live case studies, hands-on product tear-downs, and direct mentorship from senior tech executives.",
            "slug": "product-space",
            "monogram": "PR",
            "logo_url": "./assets/logos/product-space.png"
      },
      {
            "id": "7d1aaff0-51b9-48ac-989c-803274a2456e",
            "name": "GeoAnalytica",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Location intelligence and geospatial analytics consultancy helping organizations make data-backed commercial site selection and urban planning decisions.",
            "website_url": "https://www.geoanalytica.in/",
            "linkedin_url": "https://www.linkedin.com/company/geoanalytica-in/",
            "department": "",
            "batch_year": "",
            "location": "Pune District, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 4,
            "incorporated_year": 2024,
            "founders": [
                  {
                        "name": "Akshit Shah",
                        "role": "Co-Founder",
                        "degree": "B.Tech Architecture '15",
                        "linkedin": "https://linkedin.com/in/ar-akshit-shah"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 20,
            "about": "GeoAnalytica is a spatial intelligence and architectural analytics firm that leverages GIS mapping, drone surveying, and urban data modeling to assist infrastructure planners and real estate developers with site feasibility and spatial insights.",
            "slug": "geoanalytica",
            "monogram": "GE",
            "logo_url": "./assets/logos/geoanalytica.png"
      },
      {
            "id": "7f8feb17-4b91-4991-87de-6cb6380a2f27",
            "name": "Findem",
            "sector": "Enterprise HRTech & AI",
            "pitch": "Attribute-based talent intelligence platform mapping deep people data and AI to automate candidate sourcing, pipeline engagement, and workforce planning.",
            "website_url": "https://www.findem.ai/",
            "linkedin_url": "https://www.linkedin.com/company/findeminc/",
            "department": "",
            "batch_year": "",
            "location": "Redwood City, California, United States",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 226,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Hariharan Kolam",
                        "role": "Founder and CEO",
                        "degree": "B.Tech '03",
                        "linkedin": "https://linkedin.com/in/hkolam"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 21,
            "about": "Findem is an enterprise talent intelligence platform that uses attribute-based AI to analyze millions of candidate career trajectories, helping corporate recruiting teams find, evaluate, and engage qualified talent across passive networks.",
            "slug": "findem",
            "monogram": "FI",
            "logo_url": "./assets/logos/findem.png"
      },
      {
            "id": "8a6e3bda-7cb7-4fba-8721-19d26932b5a0",
            "name": "Delphi Cloud",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Developer-first cloud infrastructure provider offering scalable virtual machines, managed Kubernetes, and S3-compatible object storage at predictable pricing.",
            "website_url": "https://www.delphicloud.ai/",
            "linkedin_url": "https://www.linkedin.com/company/delphi-cloud/",
            "department": "",
            "batch_year": "",
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 4,
            "incorporated_year": 2024,
            "founders": [
                  {
                        "name": "Shreyas Mokadam",
                        "role": "Founder",
                        "degree": "B.Tech Mining Engineering '16",
                        "linkedin": "https://linkedin.com/in/shreyas-mokadam-a451b8120"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 22,
            "about": "Delphi Cloud is a specialized cloud infrastructure and DevOps consultancy that architects secure Kubernetes clusters, multi-cloud deployments, and high-throughput data processing environments for fast-growing digital enterprises.",
            "slug": "delphi-cloud",
            "monogram": "DE",
            "logo_url": "./assets/logos/delphi-cloud.png"
      },
      {
            "id": "8ebd47ac-4a65-4523-bcf7-01afe2ea5f9f",
            "name": "Konverge AI",
            "sector": "Enterprise AI & GenAI Systems",
            "pitch": "Enterprise AI engineering and decision science firm designing bespoke Generative AI agents, predictive vision models, and automated data pipelines for industry leaders.",
            "website_url": "https://konverge.ai/",
            "linkedin_url": "https://www.linkedin.com/company/konverge-ai/",
            "department": "",
            "batch_year": "",
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 174,
            "incorporated_year": 2018,
            "founders": [
                  {
                        "name": "Sagar Ghonge",
                        "role": "Co-Founder and Chief Operating Officer",
                        "degree": "B.Tech Civil Engineering '09",
                        "linkedin": "https://linkedin.com/in/sagarghonge"
                  },
                  {
                        "name": "Prateek Chandrayan",
                        "role": "Co-FOunder",
                        "degree": "B.Tech Civil Engineering '09",
                        "linkedin": "https://linkedin.com/in/prateekchandrayan"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 23,
            "about": "Konverge AI is an applied artificial intelligence engineering firm that builds and deploys custom generative AI workflows, computer vision models, and automated machine learning systems for enterprise clients across healthcare, logistics, and finance.",
            "slug": "konverge-ai",
            "monogram": "KO",
            "logo_url": "./assets/logos/konverge-ai.png"
      },
      {
            "id": "96ce868b-f3bd-40b1-be72-ab589330cf2a",
            "name": "99minds",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Omnichannel customer retention platform that unifies digital gift cards, loyalty rewards, and store credits across online storefronts and in-store POS.",
            "website_url": "https://www.99minds.io/",
            "linkedin_url": "https://www.linkedin.com/company/99minds-io/",
            "department": "",
            "batch_year": "",
            "location": "New York",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 18,
            "incorporated_year": 2020,
            "founders": [
                  {
                        "name": "Pravin Kamble",
                        "role": "Co-Founder and CEO",
                        "degree": "B.Tech ECE",
                        "linkedin": "https://linkedin.com/in/pravinkamble"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 24,
            "about": "99minds is an omnichannel customer loyalty and promotions platform that allows retail and eCommerce brands to launch digital gift cards, personalized coupon campaigns, and referral reward programs that integrate seamlessly with major storefronts.",
            "slug": "99minds",
            "monogram": "99",
            "logo_url": "./assets/logos/99minds.png"
      },
      {
            "id": "98cb4431-8b01-48a1-b9b0-a988d4a7213a",
            "name": "Synthesis",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Strategic consumer intelligence consultancy that decodes open-web data and cultural signals to help global brands forecast emerging market trends and product opportunities.",
            "website_url": "https://www.synthesis.partners/",
            "linkedin_url": "https://www.linkedin.com/company/synthesispartners/",
            "department": "",
            "batch_year": "",
            "location": "Singapore",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 84,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Ankit Kalkar",
                        "role": "Founder",
                        "degree": "B.Tech MME '10",
                        "linkedin": "https://linkedin.com/in/kalkar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 25,
            "about": "Synthesis is a global cultural data consultancy that combines open-web data mining, consumer telemetry, and predictive modeling to help global consumer brands uncover market trends and design future-proof product strategies.",
            "slug": "synthesis",
            "monogram": "SY",
            "logo_url": "./assets/logos/synthesis.png"
      },
      {
            "id": "a85d133c-fb2d-4c36-93e3-872714868d37",
            "name": "SimpleWorks",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Sovereign enterprise CRM and agentic AI platform running on-premise or air-gapped to ensure strict regulatory and data privacy compliance for banks and insurers.",
            "website_url": "https://www.simple.works/",
            "linkedin_url": "https://www.linkedin.com/company/simplecrm/",
            "department": "",
            "batch_year": "",
            "location": "",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 180,
            "incorporated_year": 2015,
            "founders": [
                  {
                        "name": "Indraneel Fuke",
                        "role": "Founder & CEO",
                        "degree": "B.Tech Mechanical Engineering '98",
                        "linkedin": "https://linkedin.com/in/indraneelfuke"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 26,
            "about": "SimpleWorks is a digital product engineering studio that partners with startups and mid-market businesses to design, develop, and scale modern web applications, microservices, and cloud-native software products.",
            "slug": "simpleworks",
            "monogram": "SI",
            "logo_url": "./assets/logos/simpleworks.png"
      },
      {
            "id": "ae36c5c3-7f41-486c-b9ec-327a020af324",
            "name": "TeemGenie",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Employer of Record (EOR) platform helping global tech companies recruit, employ, and manage dedicated software engineering teams in India without setting up a local entity.",
            "website_url": "https://teemgenie.com/",
            "linkedin_url": "https://www.linkedin.com/company/teemgenie/",
            "department": "",
            "batch_year": "",
            "location": "Pune Division, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 11,
            "incorporated_year": 2020,
            "founders": [
                  {
                        "name": "Sandeep Deshmukh",
                        "role": "Founder & CEO",
                        "degree": "B.Tech CSE '00",
                        "linkedin": "https://linkedin.com/in/sandeep-deshmukh"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 27,
            "about": "TeemGenie is an employee engagement and workforce productivity platform designed to help modern organizations manage distributed teams through peer recognition, goal alignment, and structured performance feedback.",
            "slug": "teemgenie",
            "monogram": "TE",
            "logo_url": "./assets/logos/teemgenie.png"
      },
      {
            "id": "bbc0d831-e21b-4acc-997e-b9d8415079d2",
            "name": "Sigmantle Research",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Quantitative research studio developing statistical market models, data analytics, and algorithmic execution strategies for capital markets.",
            "website_url": "",
            "linkedin_url": "https://linkedin.com/company/sigmantle-research",
            "department": "",
            "batch_year": "",
            "location": "Gurugram , Haryana, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 1,
            "incorporated_year": 2024,
            "founders": [
                  {
                        "name": "Shreyash Kakde",
                        "role": "Founder",
                        "degree": "B.Tech Civil 23'",
                        "linkedin": "https://linkedin.com/in/shreyash-k22"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 28,
            "about": "Sigmantle Research is an applied AI research and engineering firm focused on developing autonomous multi-agent systems, retrieval-augmented generation (RAG) pipelines, and customized language model tools for complex data workflows.",
            "slug": "sigmantle-research",
            "monogram": "SI",
            "logo_url": "./assets/logos/sigmantle-research.png"
      },
      {
            "id": "bdf99c8c-293e-4e0e-81ef-91d83cea6b19",
            "name": "Airolabs.ai",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Enterprise digital transformation firm deploying intelligent robotic process automation (RPA) and Generative AI workflows to streamline complex operations.",
            "website_url": "https://airolabs.ai/",
            "linkedin_url": "https://www.linkedin.com/company/airolabsai",
            "department": "",
            "batch_year": "",
            "location": "New Delhi, Delhi, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 312,
            "incorporated_year": 2018,
            "founders": [
                  {
                        "name": "Sayak Das",
                        "role": "Chief AI Innovation Officer",
                        "degree": "B.Tech ECE '03",
                        "linkedin": "https://linkedin.com/in/sayak-das-"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 29,
            "about": "AiRo Digital Labs (Airolabs.ai) is an enterprise intelligent automation and digital health services provider that deploys cognitive bots, cloud transformation, and automated clinical workflows for healthcare networks and life science enterprises.",
            "slug": "airolabs-ai",
            "monogram": "AI",
            "logo_url": "./assets/logos/airolabs-ai.png"
      },
      {
            "id": "f4cf059f-cec1-4c31-a3cb-40c37e0e7825",
            "name": "Aristok Technologies",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Full-funnel performance marketing agency driving revenue growth through programmatic advertising, paid social customer acquisition, and SEO.",
            "website_url": "https://www.aristok.com/",
            "linkedin_url": "https://www.linkedin.com/company/aristok-technologies/",
            "department": "",
            "batch_year": "",
            "location": "Pune District, Maharashtra, India",
            "funding_stage": "",
            "funding_amount": "",
            "headcount": 119,
            "incorporated_year": 2023,
            "founders": [
                  {
                        "name": "Aniket Khare",
                        "role": "Co-Founder",
                        "degree": "B.Tech EEE '06",
                        "linkedin": "https://linkedin.com/in/aniket-khare-a8208022"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "display_order": 30,
            "about": "Aristok Technologies is an IT consulting and software development company that engineers custom enterprise applications, mobile platforms, and database architectures tailored to optimize organizational workflows and digital operations.",
            "slug": "aristok-technologies",
            "monogram": "AR",
            "logo_url": "./assets/logos/aristok-technologies.png"
      },
      {
            "id": "108ed4e6-924d-486e-9d27-6cd8ad918ac6",
            "name": "Cognizant",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Global enterprise technology and consulting firm engineering modern digital architectures, cloud transformations, and AI systems for Fortune 500 companies.",
            "website_url": "https://www.cognizant.com",
            "linkedin_url": "https://linkedin.com/company/cognizant",
            "department": "Computer Science",
            "batch_year": "2016",
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Chandramouli Killi",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/chandramouli-killi"
                  }
            ],
            "is_verified": true,
            "is_published": false,
            "display_order": 100,
            "about": "Cognizant is a global Fortune 500 technology services and consulting enterprise that modernizes core business infrastructure, digital applications, and cloud operations for major global companies across banking, healthcare, and retail.",
            "slug": "cognizant",
            "monogram": "CO",
            "logo_url": "./assets/logos/cognizant.png"
      },
      {
            "id": "e3edca99-45e0-4437-bbc0-dd5099a47060",
            "name": "CAMS Limited",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Financial infrastructure and technology platform providing mutual fund transfer agency, digital KYC, and payments processing for India's capital markets.",
            "website_url": "https://www.cams-limited.com",
            "linkedin_url": "https://linkedin.com/company/cams-limited",
            "department": "Computer Science",
            "batch_year": "2016",
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "founders": [
                  {
                        "name": "Mohit Raisinghani",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/mohit-raisinghani"
                  }
            ],
            "is_verified": true,
            "is_published": false,
            "display_order": 100,
            "about": "Computer Age Management Services (CAMS) is India's premier financial infrastructure provider and mutual fund registrar, handling transaction processing, digital KYC, and registry operations for over 69% of the Indian mutual fund industry.",
            "slug": "cams-limited",
            "monogram": "CA",
            "logo_url": "./assets/logos/cams-limited.png"
      }
];

    let allStartups = [...SEED_STARTUPS];
    let activeStartup = null;
    let currentFilter = {
      branches: new Set(),
      teams: new Set(),
      locations: new Set(),
      quick: 'all',
      branch: 'ALL',
      stage: 'ALL',
      location: 'ALL',
      team: 'ALL',
      cohortMin: 1980,
      search: '',
      sort: 'relevance'
    };

    // On Load Bootstrap
    window.addEventListener('DOMContentLoaded', async () => {
      initTimestamp();
      initTelemetry();
      initKeyboardShortcuts();
      updateFacetCountBadges();
      applyFiltersAndRender();
      await loadStartupsData();
    });

    function initTimestamp() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const el = document.getElementById('syncTimestamp');
      if (el) el.innerText = timeStr;
    }

    function initTelemetry() {
      let visits = parseInt(localStorage.getItem('vnit_page_views') || '8920', 10) + 1;
      localStorage.setItem('vnit_page_views', visits);

      let unique = parseInt(localStorage.getItem('vnit_unique_visitors') || '1842', 10);
      if (!localStorage.getItem('vnit_has_visited')) {
        unique += 1;
        localStorage.setItem('vnit_has_visited', 'true');
        localStorage.setItem('vnit_unique_visitors', unique);
      }

      const uvEl = document.getElementById('uniqueVisitorsCounter');
      const pvEl = document.getElementById('pageViewsCounter');
      if (uvEl) uvEl.innerText = unique.toLocaleString();
      if (pvEl) pvEl.innerText = visits.toLocaleString();
    }

    function initKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        } else if (e.key === 'Escape') {
          closeSubmissionModal();
          closeDrawer();
        }
      });

      document.getElementById('searchInput').addEventListener('input', (e) => {
        currentFilter.search = e.target.value.toLowerCase().trim();
        applyFiltersAndRender();
      });
    }

    /* ─── DATA LOADING (Supabase + Offline Seed) ─── */
    
    /* ─── URL SANITIZER & DATA NORMALIZERS ─── */
    function formatExternalUrl(rawUrl) {
      if (!rawUrl || typeof rawUrl !== 'string') return '#';
      let url = rawUrl.trim();
      if (!url || url === '#' || url === 'undefined' || url === 'null' || url.toLowerCase() === 'none') {
        return '#';
      }
      if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
      if (url.startsWith('//')) return 'https:' + url;
      return 'https://' + url;
    }

    function normalizeFounders(rawFounders, fallbackDegree = 'Engineering') {
      let list = rawFounders;
      if (typeof list === 'string') {
        try {
          list = JSON.parse(list);
        } catch (e) {
          list = [];
        }
      }
      if (!Array.isArray(list)) list = [];
      return list.map(f => {
        if (!f || typeof f !== 'object') return null;
        return {
          name: (f.name || 'VNIT Alumnus').trim(),
          role: (f.role || 'Co-Founder').trim(),
          degree: (f.degree || fallbackDegree || 'Engineering').trim(),
          linkedin: formatExternalUrl(f.linkedin),
          email: (f.email || '').trim()
        };
      }).filter(Boolean);
    }

    async function loadStartupsData() {
      // 1. Load local verified seed data
      try {
        const seedRes = await fetch('./data/seed_startups.json');
        if (seedRes.ok) {
          allStartups = await seedRes.json();
        }
      } catch (err) {
        console.warn('Local seed fetch fallback:', err);
      }

      // 2. Fetch live published startups from Supabase
      try {
        let supaRes = await fetch(`${SUPABASE_URL}/rest/v1/startups?is_published=eq.true&order=display_order.asc.nullslast,name.asc`, {
          headers: {
            'apikey': SUPABASE_ANON,
            'Authorization': `Bearer ${SUPABASE_ANON}`
          }
        });

        // Graceful fallback if display_order column does not exist yet
        if (!supaRes.ok) {
          supaRes = await fetch(`${SUPABASE_URL}/rest/v1/startups?is_published=eq.true`, {
            headers: {
              'apikey': SUPABASE_ANON,
              'Authorization': `Bearer ${SUPABASE_ANON}`
            }
          });
        }

        if (supaRes.ok) {
          const liveData = await supaRes.json();
          if (liveData && liveData.length > 0) {
            // Build lookup of seed startups to enrich live data with logos & slugs
            const seedMap = new Map();
            allStartups.forEach(s => seedMap.set(s.name.toLowerCase().trim(), s));
            if (typeof SEED_STARTUPS !== 'undefined') {
              SEED_STARTUPS.forEach(s => seedMap.set(s.name.toLowerCase().trim(), s));
            }

            // Merge live data with seed enrichments to guarantee logos & clean protocols
            const enrichedLive = liveData.map(item => {
              const seed = seedMap.get(item.name.toLowerCase().trim());
              const fallbackSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
              const slug = item.slug || (seed && seed.slug) || fallbackSlug;
              const logoUrl = item.logo_url || (seed && seed.logo_url) || `./assets/logos/${slug}.png`;
              const monogram = item.monogram || (seed && seed.monogram) || item.name.substring(0, 2).toUpperCase();

              const parsedItemFounders = normalizeFounders(item.founders, item.department);
              const seedFounders = seed ? normalizeFounders(seed.founders, seed.department) : [];
              const finalFounders = parsedItemFounders.length > 0 ? parsedItemFounders : seedFounders;

              return {
                ...seed,
                ...item,
                slug,
                logo_url: logoUrl,
                monogram,
                website_url: formatExternalUrl(item.website_url || (seed && seed.website_url)),
                linkedin_url: formatExternalUrl(item.linkedin_url || (seed && seed.linkedin_url)),
                founders: finalFounders
              };
            });

            // Sort strictly by display_order
            enrichedLive.sort((a, b) => {
              const oA = (a.display_order !== undefined && a.display_order !== null) ? Number(a.display_order) : 999;
              const oB = (b.display_order !== undefined && b.display_order !== null) ? Number(b.display_order) : 999;
              return oA - oB;
            });

            const liveNames = new Set(enrichedLive.map(s => s.name.toLowerCase().trim()));
            const remainingSeed = allStartups.filter(s => !liveNames.has(s.name.toLowerCase().trim()));
            allStartups = [...enrichedLive, ...remainingSeed];
          }
        }
      } catch (err) {
        console.warn('Supabase live fetch error, running on seed cache:', err);
      }

      // Stage 2 starts closed initially; activeStartup is null on initial page load
      activeStartup = null;

      updateFacetCountBadges();
      applyFiltersAndRender();
    }

    /* ─── DYNAMIC FACET COUNTS ─── */
    function updateFacetCountBadges() {
      const total = allStartups.length;
      const indexedEl = document.getElementById('indexedCountDisplay');
      if (indexedEl) indexedEl.innerText = `${total} VERIFIED`;
      if (document.getElementById('pillCountAll')) document.getElementById('pillCountAll').innerText = total;
      if (document.getElementById('statsIndexedTotal')) document.getElementById('statsIndexedTotal').innerText = total;

      // 1. Branch facet counts
      if (document.getElementById('branchAllCount')) document.getElementById('branchAllCount').innerText = total;
      const cseCount = allStartups.filter(s => hasBranch(s, 'Computer Science')).length;
      const eceCount = allStartups.filter(s => hasBranch(s, 'Electronics')).length;
      const eeeCount = allStartups.filter(s => hasBranch(s, 'Electrical')).length;
      const mechCount = allStartups.filter(s => hasBranch(s, 'Mechanical')).length;
      const chemCount = allStartups.filter(s => hasBranch(s, 'Chemical')).length;
      const civilCount = allStartups.filter(s => hasBranch(s, 'Civil')).length;
      const metCount = allStartups.filter(s => hasBranch(s, 'Metallurgy')).length;
      const miningCount = allStartups.filter(s => hasBranch(s, 'Mining')).length;
      const archCount = allStartups.filter(s => hasBranch(s, 'Architecture')).length;

      if (document.getElementById('branchCSECount')) document.getElementById('branchCSECount').innerText = cseCount;
      if (document.getElementById('branchECECount')) document.getElementById('branchECECount').innerText = eceCount;
      if (document.getElementById('branchEEECount')) document.getElementById('branchEEECount').innerText = eeeCount;
      if (document.getElementById('branchMechCount')) document.getElementById('branchMechCount').innerText = mechCount;
      if (document.getElementById('branchChemCount')) document.getElementById('branchChemCount').innerText = chemCount;
      if (document.getElementById('branchCivilCount')) document.getElementById('branchCivilCount').innerText = civilCount;
      if (document.getElementById('branchMetCount')) document.getElementById('branchMetCount').innerText = metCount;
      if (document.getElementById('branchMiningCount')) document.getElementById('branchMiningCount').innerText = miningCount;
      if (document.getElementById('branchArchCount')) document.getElementById('branchArchCount').innerText = archCount;

      // 2. Company Size counts
      if (document.getElementById('teamAllCount')) document.getElementById('teamAllCount').innerText = total;
      const team15 = allStartups.filter(s => hasTeam(s, '1-5')).length;
      const team510 = allStartups.filter(s => hasTeam(s, '5-10')).length;
      const team1050 = allStartups.filter(s => hasTeam(s, '10-50')).length;
      const team50100 = allStartups.filter(s => hasTeam(s, '50-100')).length;
      const team100200 = allStartups.filter(s => hasTeam(s, '100-200')).length;
      const team200 = allStartups.filter(s => hasTeam(s, '200+')).length;

      if (document.getElementById('team15Count')) document.getElementById('team15Count').innerText = team15;
      if (document.getElementById('team510Count')) document.getElementById('team510Count').innerText = team510;
      if (document.getElementById('team1050Count')) document.getElementById('team1050Count').innerText = team1050;
      if (document.getElementById('team50100Count')) document.getElementById('team50100Count').innerText = team50100;
      if (document.getElementById('team100200Count')) document.getElementById('team100200Count').innerText = team100200;
      if (document.getElementById('team200Count')) document.getElementById('team200Count').innerText = team200;

      // 3. Location counts
      if (document.getElementById('locAllCount')) document.getElementById('locAllCount').innerText = total;
      const locMumbai = allStartups.filter(s => hasLocation(s, 'Mumbai')).length;
      const locGurugram = allStartups.filter(s => hasLocation(s, 'Gurugram')).length;
      const locPune = allStartups.filter(s => hasLocation(s, 'Pune')).length;
      const locNagpur = allStartups.filter(s => hasLocation(s, 'Nagpur')).length;
      const locBangalore = allStartups.filter(s => hasLocation(s, 'Bangalore')).length;
      const locRedwood = allStartups.filter(s => hasLocation(s, 'Redwood City, California')).length;

      if (document.getElementById('locMumbaiCount')) document.getElementById('locMumbaiCount').innerText = locMumbai;
      if (document.getElementById('locGurugramCount')) document.getElementById('locGurugramCount').innerText = locGurugram;
      if (document.getElementById('locPuneCount')) document.getElementById('locPuneCount').innerText = locPune;
      if (document.getElementById('locNagpurCount')) document.getElementById('locNagpurCount').innerText = locNagpur;
      if (document.getElementById('locBangaloreCount')) document.getElementById('locBangaloreCount').innerText = locBangalore;
      if (document.getElementById('locRedwoodCount')) document.getElementById('locRedwoodCount').innerText = locRedwood;

      // Total Funding & Headcount
      let totalFunding = 0;
      let totalHeadcount = 0;
      allStartups.forEach(s => {
        totalHeadcount += (s.headcount || 0);
        if (s.funding_amount) {
          const match = s.funding_amount.match(/[\d.]+/);
          if (match) {
            const val = parseFloat(match[0]);
            if (s.funding_amount.includes('M')) totalFunding += val;
            else if (s.funding_amount.includes('K')) totalFunding += val / 1000;
            else if (s.funding_amount.includes('B')) totalFunding += val * 1000;
          }
        }
      });
      const capEl = document.getElementById('statsCapitalTotal');
      if (capEl) capEl.innerText = `$${totalFunding.toFixed(1)}M`;
      const hcEl = document.getElementById('statsHeadcountTotal');
      if (hcEl) hcEl.innerText = totalHeadcount.toLocaleString();
      const hpEl = document.getElementById('handpickedStartupsCounter');
      if (hpEl) hpEl.innerText = allStartups.length;
    }

    function hasBranch(startup, branchKey) {
      if (!branchKey || branchKey === 'ALL') return true;
      const target = branchKey.toLowerCase();
      const checkStr = (str) => {
        if (!str) return false;
        const s = str.toLowerCase();
        if (target === 'computer science') return /\b(computer|comp|cse|cs)\b/i.test(s) || s.includes('computer science');
        if (target === 'electronics') return /\b(electronics|electronic|ece|comm|telecom)\b/i.test(s) || s.includes('electronics & communication') || s.includes('electronics and communication');
        if (target === 'electrical') return /\b(electrical|eee)\b/i.test(s);
        if (target === 'mechanical') return /\b(mechanical|mech)\b/i.test(s);
        if (target === 'chemical') return /\b(chemical|chem)\b/i.test(s);
        if (target === 'civil') return /\b(civil)\b/i.test(s);
        if (target === 'metallurgy') return /\b(metallurg|metallurgy|material|materials|mme)\b/i.test(s);
        if (target === 'mining') return /\b(mining|mine)\b/i.test(s);
        if (target === 'architecture') return /\b(architecture|arch|b\.arch)\b/i.test(s);
        return s.includes(target);
      };
      if (checkStr(startup.department)) return true;
      const founders = Array.isArray(startup.founders) ? startup.founders : normalizeFounders(startup.founders);
      return founders.some(f => checkStr(f.degree) || checkStr(f.vnit_branch));
    }

    function hasTeam(startup, sizeKey) {
      if (!sizeKey || sizeKey === 'ALL') return true;
      const hc = Number(startup.headcount) || 0;
      if (sizeKey === '1-5') return hc >= 1 && hc <= 5;
      if (sizeKey === '5-10') return hc > 5 && hc <= 10;
      if (sizeKey === '10-50') return hc > 10 && hc <= 50;
      if (sizeKey === '50-100') return hc > 50 && hc <= 100;
      if (sizeKey === '100-200') return hc > 100 && hc <= 200;
      if (sizeKey === '200+') return hc > 200;
      return true;
    }

    function hasLocation(startup, locKey) {
      if (!locKey || locKey === 'ALL') return true;
      const sLoc = (startup.location || '').toLowerCase();
      const target = locKey.toLowerCase();
      if (target === 'mumbai') return sLoc.includes('mumbai');
      if (target === 'gurugram') return sLoc.includes('gurugram') || sLoc.includes('gurgaon');
      if (target === 'pune') return sLoc.includes('pune');
      if (target === 'nagpur') return sLoc.includes('nagpur');
      if (target === 'bangalore') return sLoc.includes('bangalore') || sLoc.includes('bengaluru');
      if (target.includes('redwood')) return sLoc.includes('redwood') || sLoc.includes('california') || sLoc.includes('francisco') || sLoc.includes('bay area');
      return sLoc.includes(target);
    }

    /* ─── FILTERING & SORTING ENGINE ─── */
    function applyFiltersAndRender() {
      let filtered = allStartups.filter(item => {
        // Quick filter
        if (currentFilter.quick !== 'all') {
          if (currentFilter.quick === 'Series A' && !item.funding_stage?.includes('Series')) return false;
          else if (currentFilter.quick === 'Bootstrapped' && item.funding_stage !== 'Bootstrapped') return false;
          else if (currentFilter.quick === 'Mechanical' && !hasBranch(item, 'Mechanical')) return false;
          else if (currentFilter.quick === 'Computer Science' && !hasBranch(item, 'Computer Science')) return false;
        }

        // 1. Branch filter: OR within selected branches (pass all if empty)
        if (currentFilter.branches && currentFilter.branches.size > 0) {
          const match = Array.from(currentFilter.branches).some(b => hasBranch(item, b));
          if (!match) return false;
        } else if (currentFilter.branch && currentFilter.branch !== 'ALL' && currentFilter.branch !== 'MULTI') {
          if (!hasBranch(item, currentFilter.branch)) return false;
        }

        // 2. Company Size filter: OR within selected sizes (pass all if empty)
        if (currentFilter.teams && currentFilter.teams.size > 0) {
          const match = Array.from(currentFilter.teams).some(t => hasTeam(item, t));
          if (!match) return false;
        } else if (currentFilter.team && currentFilter.team !== 'ALL' && currentFilter.team !== 'MULTI') {
          if (!hasTeam(item, currentFilter.team)) return false;
        }

        // 3. Location filter: OR within selected locations (pass all if empty)
        if (currentFilter.locations && currentFilter.locations.size > 0) {
          const match = Array.from(currentFilter.locations).some(l => hasLocation(item, l));
          if (!match) return false;
        } else if (currentFilter.location && currentFilter.location !== 'ALL' && currentFilter.location !== 'MULTI') {
          if (!hasLocation(item, currentFilter.location)) return false;
        }

        // Cohort Range slider
        if (item.batch_year && item.batch_year < currentFilter.cohortMin) {
          return false;
        }

        // Search text (Company, Branch, Batch Year, Founders, Location)
        if (currentFilter.search) {
          const foundersArr = Array.isArray(item.founders) ? item.founders : normalizeFounders(item.founders);
          const foundersText = foundersArr.map(f => `${f.name || ''} ${f.degree || ''}`).join(' ');
          const text = `${item.name} ${item.pitch} ${item.sector} ${item.department} ${item.batch_year || ''} ${item.tech_stack || ''} ${item.location || ''} ${foundersText}`.toLowerCase();
          if (!text.includes(currentFilter.search)) return false;
        }

        return true;
      });

      // Sorting (Relevance, Latest to Oldest, Oldest to Latest, Alphabetical A-Z)
      if (currentFilter.sort === 'relevance') {
        const q = (currentFilter.search || '').trim().toLowerCase();
        if (q) {
          const score = (item) => {
            const name = (item.name || '').toLowerCase();
            const foundersArr = Array.isArray(item.founders) ? item.founders : normalizeFounders(item.founders);
            const founders = foundersArr.map(f => `${f.name || ''} ${f.degree || ''}`).join(' ').toLowerCase();
            const sector = (item.sector || '').toLowerCase();
            const dept = (item.department || '').toLowerCase();
            const batch = String(item.batch_year || '');
            const loc = (item.location || '').toLowerCase();
            const pitch = (item.pitch || '').toLowerCase();

            if (name === q) return 1000;
            if (name.startsWith(q)) return 500;
            if (name.includes(q)) return 300;
            if (founders.includes(q)) return 200;
            if (dept.includes(q) || batch.includes(q)) return 150;
            if (loc.includes(q)) return 120;
            if (sector.includes(q)) return 100;
            if (pitch.includes(q)) return 50;
            return 10;
          };
          filtered.sort((a, b) => score(b) - score(a));
        } else {
          // Default curated order: strictly by display_order from Supabase
          filtered.sort((a, b) => {
            const orderA = (a.display_order !== undefined && a.display_order !== null) ? Number(a.display_order) : 999;
            const orderB = (b.display_order !== undefined && b.display_order !== null) ? Number(b.display_order) : 999;
            if (orderA !== orderB) return orderA - orderB;
            const yearA = a.incorporated_year || a.batch_year || 2020;
            const yearB = b.incorporated_year || b.batch_year || 2020;
            return yearB - yearA;
          });
        }
      } else if (currentFilter.sort === 'latest') {
        filtered.sort((a, b) => {
          const yearA = a.incorporated_year || a.batch_year || 0;
          const yearB = b.incorporated_year || b.batch_year || 0;
          return yearB - yearA;
        });
      } else if (currentFilter.sort === 'oldest') {
        filtered.sort((a, b) => {
          const yearA = a.incorporated_year || a.batch_year || 9999;
          const yearB = b.incorporated_year || b.batch_year || 9999;
          return yearA - yearB;
        });
      } else if (currentFilter.sort === 'alphabetical') {
        filtered.sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));
      }

      // Render cards
      renderCards(filtered);
      const counterBadge = document.getElementById('streamCounterBadge');
      if (counterBadge) counterBadge.innerText = `${filtered.length} OF ${allStartups.length}`;

      // Update inspection drawer only if a startup is actively selected
      if (activeStartup) {
        const stillInList = filtered.find(s => s.id === activeStartup.id);
        if (stillInList) {
          activeStartup = stillInList;
          renderDrawer(activeStartup);
          openDrawer();
        } else {
          closeDrawer();
        }
      }
    }

    /* ─── FOUNDER PROFILE PHOTO LOOKUP ─── */
    function getFounderPhoto(startup, founder) {
      if (!founder || !founder.name) return null;
      const clean = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const sSlug = clean(startup.slug || startup.name);
      const fSlug = clean(founder.name);

      const photoMap = {
        '99minds_pravin-kamble': './assets/Profile Pics/99minds_pravin-kamble.jpg',
        'airolabs-ai_sayak-das': './assets/Profile Pics/airolabsai_sayak-das.jpg',
        'airolabsai_sayak-das': './assets/Profile Pics/airolabsai_sayak-das.jpg',
        'aristok-technologies_aniket-khare': './assets/Profile Pics/aristok-technologies_aniket-khare.jpg',
        'autoven_vinay-gunasekaran': './assets/Profile Pics/autoven_vinay-gunasekaran.jpg',
        'awiros_vikram-gupta': './assets/Profile Pics/awiros_vikram-gupta.jpg',
        'biztransights_sameer-ughade': './assets/Profile Pics/biztransights_sameer-ughade.jpg',
        'bombay-shaving-company_shantanu-deshpande': './assets/Profile Pics/bombay-shaving-company_shantanu-deshpande.jpg',
        'circullence-solutions_sarang-aloni': './assets/Profile Pics/circullence-solutions_sarang-aloni.jpg',
        'collegedekho_ruchir': './assets/Profile Pics/collegedekho_ruchir.jpg',
        'collegise_pranav-chinsabwar': './assets/Profile Pics/collegise_pranav-chinsabwar.jpg',
        'ettaflow_vishal-goswami': './assets/Profile Pics/ettaflow_vishal-goswami.jpg',
        'findem_hariharan-kolam': './assets/Profile Pics/findem_hariharan-kolam.jpg',
        'geoanalytica_akshit-shah': './assets/Profile Pics/geoanalytica_akshit-shah.jpg',
        'human-capitalists_lakshya-shukla': './assets/Profile Pics/human-capitalists_lakshya-shukla.jpg',
        'human-capitalists_nishant-singh-didawat': './assets/Profile Pics/human-capitalists_nishant-singh-didawat.jpg',
        'infocepts_shashank-garg': './assets/Profile Pics/infocepts_shashank-garg.jpg',
        'konverge-ai_prateek-chandrayan': './assets/Profile Pics/konverge-ai_prateek-chandrayan.jpg',
        'konverge-ai_sagar-ghonge': './assets/Profile Pics/konverge-ai_sagar-ghonge.jpg',
        'living-things_madhusudhan-naik': './assets/Profile Pics/living-things_madhusudhan-naik.jpg',
        'living-things_madhusudan-nayak': './assets/Profile Pics/living-things_madhusudhan-naik.jpg',
        'living-things_mayank-gupta': './assets/Profile Pics/living-things_mayank-gupta.jpg',
        'living-things_tushar-jagadale': './assets/Profile Pics/living-things_tushar-jagadale.jpg',
        'mastersoft_sham-somani': './assets/Profile Pics/mastersoft_sham-somani.jpg',
        'neewee_harsimrat-bhasin': './assets/Profile Pics/neewee_harsimrat-bhasin.jpg',
        'product-space_sakshi-yadav': './assets/Profile Pics/product-space_sakshi-yadav.jpg',
        'sigmantle-research_shreyash-kakde': './assets/Profile Pics/sigmantle-research_shreyash-kakde.jpg',
        'simpleworks_indraneel-fuke': './assets/Profile Pics/simpleworks_indraneel-fuke.jpg',
        'str8bat_rahul-nagar': './assets/Profile Pics/str8bat_rahul-nagar.jpg',
        'synthesis_ankit-kalkar': './assets/Profile Pics/synthesis_ankit-kalkar.jpg',
        'synthesis_aniket-kalkar': './assets/Profile Pics/synthesis_ankit-kalkar.jpg',
        'teemgenie_sandeep-deshmukh': './assets/Profile Pics/teemgenie_sandeep-deshmukh.jpg',
        'truemeds-india_akshat-nayyar': './assets/Profile Pics/truemeds-india_akshat-nayyar.jpg',
        'well-played-sports_ketan-kaore': './assets/Profile Pics/well-played-sports_ketan-kaore.jpg'
      };

      const key = `${sSlug}_${fSlug}`;
      if (photoMap[key]) return photoMap[key];

      const companyMap = {
        'delphi-analytics': './assets/Profile Pics/delphi-analytics.jpg',
        'delphi-cloud': './assets/Profile Pics/delphi-cloud.jpg',
        'scienaptic-ai': './assets/Profile Pics/scienaptic-ai.jpg'
      };
      if (companyMap[sSlug]) return companyMap[sSlug];
      return `./assets/Profile Pics/${key}.jpg`;
    }

    /* ─── CARD RENDERER (Variation 7 Architecture) ─── */
    function renderCards(list) {
      const container = document.getElementById('cardsContainer');
      if (list.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-title">No matching startups found</div>
            <div class="empty-state-desc">Try clearing some filters, searching for a different branch, or submit a new alumni company.</div>
            <button class="btn-submit" onclick="resetFilters()">Reset All Filters</button>
          </div>
        `;
        return;
      }

      container.innerHTML = list.map(s => {
        const isActive = activeStartup && activeStartup.id === s.id;

        const cardFounders = Array.isArray(s.founders) ? s.founders : normalizeFounders(s.founders, s.department);

        // Derive clean batch tag (e.g. Mech '16, CSE '18, Batch '21)
        let batchTag = '';
        if (cardFounders.length > 0 && cardFounders[0].degree) {
          const match = cardFounders[0].degree.match(/(Mech|CSE|ECE|EEE|Chem|Met|Civil|Arch|Biotech|EE|IT)[\s']+(\d{2})/i);
          if (match) {
            batchTag = `${match[1]} '${match[2]}`;
          }
        }
        if (!batchTag) {
          batchTag = s.batch_year ? `Batch '${String(s.batch_year).slice(-2)}` : (s.department || 'VNIT Alumni');
        }

        // Founders summary: Concept 2 Verified Alumni Chips Architecture with Real Photos
        let chipsHtml = '';
        if (cardFounders.length > 0) {
          chipsHtml = cardFounders.map(f => {
            const rawName = f.name || 'Alumnus';
            const initials = rawName.split(/\s+/).map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'AL';
            let cleanDegree = (f.degree || '').replace(/B\.Tech\s*/i, '').trim();
            const degreeHtml = cleanDegree ? `<span class="chip-degree">· ${cleanDegree}</span>` : '';
            const photoUrl = getFounderPhoto(s, f);
            return `
              <div class="alumni-chip" title="${rawName} (${cleanDegree || 'Alumnus'})">
                <span class="chip-avatar">
                  ${photoUrl ? `
                    <img src="${photoUrl}" alt="${rawName}" class="chip-avatar-img" loading="lazy"
                      onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                    <span style="display:none;">${initials}</span>
                  ` : `
                    <span>${initials}</span>
                  `}
                </span>
                <span class="chip-name">${rawName}</span>${degreeHtml}
              </div>`;
          }).join('');
        } else {
          chipsHtml = `<div class="alumni-chip"><span class="chip-avatar">VN</span><span class="chip-name">VNIT Alumni</span><span class="chip-degree">· ${s.department || 'Engineering'}</span></div>`;
        }

        const monogram = (s.monogram || s.name.substring(0, 2)).toUpperCase();
        const logoUrl = s.logo_url || s.logo || (s.slug ? `./assets/logos/${s.slug}.png` : '');
        const outboundUrl = formatExternalUrl(s.website_url);
        const linkedinUrl = formatExternalUrl(s.linkedin_url || s.website_url);

        return `
          <article class="venture-card ${isActive ? 'is-active' : ''}" data-id="${s.id}" onclick="selectStartup('${s.id}')">
            <div class="card-main">
              <!-- 1. Monogram / Logo Hallmark Tile (Interactive Website Link) -->
              <a href="${outboundUrl !== '#' ? outboundUrl : 'javascript:void(0)'}" ${outboundUrl !== '#' ? 'target="_blank" rel="noopener"' : ''} class="card-logo-tile card-monogram-tile" onclick="event.stopPropagation();" title="${outboundUrl !== '#' ? `Visit ${s.name} Website` : s.name}">
                ${logoUrl ? `
                  <img src="${logoUrl}" alt="${s.name} logo" class="card-logo-img" loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                  <span class="card-monogram-fallback" style="display:none;">${monogram}</span>
                ` : `
                  <span class="card-monogram-fallback">${monogram}</span>
                `}
              </a>

              <!-- 2. Middle Content -->
              <div class="card-content">
                <div class="card-header-line">
                  <div class="company-title-group">
                    <h3 class="card-company-name">${s.name}</h3>
                  </div>
                  <!-- 3. High-Catch LinkedIn Outbound Button -->
                  ${linkedinUrl !== '#' ? `
                    <a href="${linkedinUrl}" target="_blank" rel="noopener" class="btn-company-outbound btn-linkedin-outbound" onclick="event.stopPropagation();" title="Open LinkedIn Profile for ${s.name}">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                      LinkedIn ↗
                    </a>
                  ` : `
                    <button type="button" class="btn-company-outbound btn-linkedin-outbound" style="opacity: 0.45; cursor: default;" onclick="event.stopPropagation();" title="No LinkedIn profile listed">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                      LinkedIn
                    </button>
                  `}
                </div>
                <p class="card-pitch">${s.pitch || ''}</p>
              </div>
            </div>

            <!-- 4. Shaded Footer Bar (Concept 2 · Verified Alumni Chips) -->
            <div class="card-footer-bar">
              <div class="footer-founder-chips-wrap">
                <span class="footer-founder-label">Founders:</span>
                ${chipsHtml}
              </div>
              <div class="footer-location-bold">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                ${s.location || 'India'}
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    /* ─── DRAWER RENDERER (Option 02 Institutional Certificate Banner) ─── */
    function renderDrawer(startup) {
      const drawer = document.getElementById('inspectionDrawer');
      const titleEl = document.getElementById('stage2Title');
      const subtitleEl = document.getElementById('stage2Subtitle');
      const bodyEl = document.getElementById('drawerBodyContent');
      const footerEl = document.getElementById('drawerFooterContent');

      if (!startup) {
        if (titleEl) titleEl.innerText = 'Select a Startup';
        if (subtitleEl) subtitleEl.innerText = 'Select a company to view details';
        if (bodyEl) bodyEl.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--ink-muted);">Select a startup from the stream to view full details.</div>`;
        if (footerEl) footerEl.innerHTML = '';
        return;
      }

      // 1. Header
      if (titleEl) titleEl.innerText = startup.name;
      const logoImg = document.getElementById('stage2LogoImg');
      const drawerLogoUrl = startup.logo_url || startup.logo || (startup.slug ? `./assets/logos/${startup.slug}.png` : '');
      if (logoImg) {
        if (drawerLogoUrl) {
          logoImg.src = drawerLogoUrl;
          logoImg.style.display = 'block';
        } else {
          logoImg.style.display = 'none';
        }
      }
      if (subtitleEl) subtitleEl.innerText = '';

      // 2. Dual Founder Cards
      let foundersList = Array.isArray(startup.founders) ? startup.founders : normalizeFounders(startup.founders, startup.department);
      if (foundersList.length === 0) {
        foundersList = [
          {
            name: "VNIT Alumni Team",
            role: "Founders & Leadership",
            degree: startup.department || "Engineering",
            linkedin: formatExternalUrl(startup.linkedin_url || startup.website_url),
            email: ""
          }
        ];
      }

      const foundersHtml = foundersList.map((f, idx) => {
        let degreeText = (f.degree || '').replace(/B\.Tech\s*/i, '').replace(/Engineering|Eningeering/i, 'Eng.').trim() || 'Alumnus';
        const photoUrl = getFounderPhoto(startup, f);
        const initials = (f.name || 'Alumnus').split(/\s+/).map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'AL';
        const founderLinkedin = formatExternalUrl(f.linkedin || startup.linkedin_url || startup.website_url);
        const hasLinkedin = founderLinkedin && founderLinkedin !== '#';

        return `
          <div class="cert-founder-card">
            <!-- Left: Avatar (Prominent 62px with Stage 2 Photo Preview) -->
            <div class="cert-founder-avatar ${photoUrl ? 'has-photo' : ''}" ${photoUrl ? `onclick="openFounderPhotoModal('${photoUrl}', '${(f.name || '').replace(/'/g, "\\'")}', '${(f.degree || degreeText).replace(/'/g, "\\'")}')" title="Click to view photo of ${f.name}" role="button" tabindex="0"` : ''}>
              ${photoUrl ? `
                <img src="${photoUrl}" alt="${f.name}" class="cert-founder-avatar-img"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="cert-founder-avatar-fallback" style="display:none;">${initials}</span>
              ` : `
                <span class="cert-founder-avatar-fallback">${initials}</span>
              `}
            </div>

            <!-- Middle: Name, Role & Academic Branch Tag -->
            <div class="cert-founder-info">
              <div class="cert-founder-name" title="${f.name}">${f.name}</div>
              <div class="cert-founder-meta">
                <span class="cert-founder-role">${f.role || 'Co-Founder'}</span>
                <span class="cert-founder-batch" title="${f.degree || degreeText}">${degreeText}</span>
              </div>
            </div>

            <!-- Right Wing: LinkedIn Hero Action Button (YC Standard) -->
            <div class="cert-founder-wing">
              ${hasLinkedin ? `
                <a href="${founderLinkedin}" target="_blank" rel="noopener" class="cert-founder-btn-linkedin" onclick="event.stopPropagation();" title="Open LinkedIn Profile for ${f.name}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                  <span>LinkedIn ↗</span>
                </a>
              ` : `
                <span class="cert-founder-btn-linkedin is-disabled" title="No LinkedIn profile listed">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                  <span>LinkedIn</span>
                </span>
              `}
            </div>
          </div>
        `;
      }).join('');

      // 3. Body Injection (Founders + Company Details, no ISRO callout)
      bodyEl.innerHTML = `
        <!-- Founders Section (Pattern 4: Split Action Wing) -->
        <div class="vital-specs-card">
          <div class="vital-specs-title">Founders</div>
          <div class="cert-founders-stack">
            ${foundersHtml}
          </div>
        </div>

        <!-- Company Details Card -->
        <div class="vital-specs-card">
          <div class="vital-specs-title">Company Details</div>
          <table class="vital-table">
            <tr>
              <td class="lbl">Founded</td>
              <td class="val">${startup.incorporated_year || '2021'}</td>
            </tr>
            <tr>
              <td class="lbl">Team Size</td>
              <td class="val">${startup.headcount ? `${startup.headcount} Full-Time Employees` : 'Engineering Team'}</td>
            </tr>
            <tr>
              <td class="lbl">Location</td>
              <td class="val">${startup.location || 'India'}</td>
            </tr>
            <tr>
              <td class="lbl">Funding</td>
              <td class="val">${startup.funding_amount || 'Undisclosed'} (${startup.funding_stage || 'Active'})</td>
            </tr>
            <tr>
              <td class="lbl">About</td>
              <td class="val pitch">${startup.about || startup.pitch || ''}</td>
            </tr>
          </table>
        </div>
      `;

      // 4. Footer Dual Actions (Company LinkedIn + Website)
      const companyLinkedin = formatExternalUrl(startup.linkedin_url || startup.website_url);
      const companyWebsite = formatExternalUrl(startup.website_url);

      footerEl.innerHTML = `
        ${companyLinkedin !== '#' ? `
          <a href="${companyLinkedin}" target="_blank" rel="noopener" class="btn-action btn-b">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
            Company LinkedIn ↗
          </a>
        ` : `
          <button type="button" class="btn-action btn-b" style="opacity: 0.5; cursor: default;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
            Company LinkedIn
          </button>
        `}
        ${companyWebsite !== '#' ? `
          <a href="${companyWebsite}" target="_blank" rel="noopener" class="btn-action btn-o">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Website ↗
          </a>
        ` : `
          <button type="button" class="btn-action btn-o" style="opacity: 0.5; cursor: default;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Website
          </button>
        `}
      `;
    }

    /* ─── STAGE 2 MOTION (spring open, soft switch, press hint, drag to dismiss) ─── */
    const DRAWER_SPRING = 'cubic-bezier(0.34, 1.45, 0.64, 1)';
    const DRAWER_EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const DRAWER_EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
    const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const drawerSheet = document.getElementById('drawerSheet');
    let pressHint = null;
    let drawerDrag = null;

    // The page uses CSS zoom: pointer positions are in screen pixels, styles are in zoomed pixels
    function pageZoom() {
      return document.body.currentCSSZoom || 1;
    }

    function isDrawerOpen() {
      return document.getElementById('mainWorkbench').classList.contains('drawer-open');
    }

    // Plays from a given state to the element's normal state, then lets go
    function drawerEnter(el, from, o = {}) {
      const end = {};
      for (const k in from) end[k] = k === 'opacity' ? 1 : 'none';
      return el.animate([from, end], {
        duration: REDUCED_MOTION ? 1 : (o.duration || 280),
        delay: REDUCED_MOTION ? 0 : (o.delay || 0),
        easing: o.easing || DRAWER_EASE_OUT,
        fill: 'backwards'
      });
    }

    // Plays from the current (or given) state to a hidden state and holds it
    function drawerExit(el, to, o = {}) {
      return el.animate(o.from ? [o.from, to] : [to], {
        duration: REDUCED_MOTION ? 1 : (o.duration || 180),
        easing: o.easing || DRAWER_EASE_IN,
        fill: 'forwards'
      });
    }

    function clearDrawerMotion() {
      drawerSheet.getAnimations({ subtree: true }).forEach(a => a.cancel());
      drawerSheet.style.transform = '';
      drawerSheet.style.opacity = '';
    }

    function selectStartup(id) {
      const match = allStartups.find(s => s.id === id);
      if (!match) return;

      const wasOpen = isDrawerOpen();
      const alreadyShown = wasOpen && activeStartup && activeStartup.id === id;
      pressHint = null;
      activeStartup = match;
      // Update active class on cards smoothly without full DOM replacement
      document.querySelectorAll('.venture-card').forEach(card => {
        card.classList.toggle('is-active', card.getAttribute('data-id') === id);
      });
      if (alreadyShown) return;

      clearDrawerMotion();
      renderDrawer(activeStartup);

      if (window.innerWidth <= 960) {
        requestAnimationFrame(() => {
          openDrawer();
        });
      } else {
        openDrawer();
      }

      const bodyEl = document.getElementById('drawerBodyContent');
      const footerEl = document.getElementById('drawerFooterContent');
      if (!wasOpen) {
        if (window.innerWidth > 960) {
          // Opening: the sheet floats in from the right and settles, then its blocks follow
          drawerEnter(drawerSheet, { opacity: 0.6, transform: 'translateX(44px)' }, { duration: 460, easing: DRAWER_SPRING });
          [...bodyEl.children, footerEl].forEach((el, i) => {
            drawerEnter(el, { opacity: 0, transform: 'translateX(14px)' }, { duration: 380, delay: 60 + i * 40, easing: DRAWER_SPRING });
          });
        }
      } else {
        if (window.innerWidth > 960) {
          // Switching startup: a small spring nudge while the new details fade in (name + subheadline change instantly)
          drawerEnter(drawerSheet, { transform: 'translateX(10px)' }, { duration: 340, easing: DRAWER_SPRING });
          [bodyEl, footerEl].forEach(el => {
            drawerEnter(el, { opacity: 0 }, { duration: 200 });
          });
        }
      }
    }

    function openDrawer() {
      const workbench = document.getElementById('mainWorkbench');
      if (workbench) {
        workbench.classList.remove('drawer-peek');
        workbench.classList.add('drawer-open');
        if (window.innerWidth <= 960) {
          document.documentElement.classList.add('stage2-mobile-open');
          document.body.classList.add('stage2-mobile-open');
        }
      }
    }

    function resetDrawerState() {
      const workbench = document.getElementById('mainWorkbench');
      if (workbench) workbench.classList.remove('drawer-open', 'drawer-peek');
      activeStartup = null;
      document.querySelectorAll('.venture-card').forEach(card => card.classList.remove('is-active'));
      document.documentElement.classList.remove('stage2-mobile-open');
      document.body.classList.remove('stage2-mobile-open');
    }

    function closeDrawer() {
      if (isDrawerOpen()) {
        clearDrawerMotion();
        if (window.innerWidth > 960) {
          drawerExit(drawerSheet, { opacity: 0, transform: 'translateX(70px)' }, { duration: 190 });
        }
      }
      resetDrawerState();
    }

    /* Press hint: pressing a card with the mouse nudges the sheet edge into view; releasing opens it */
    document.getElementById('cardsContainer').addEventListener('pointerdown', (e) => {
      if (window.innerWidth <= 960 || e.button !== 0 || e.pointerType !== 'mouse') return;
      const card = e.target.closest('.venture-card');
      if (!card || e.target.closest('.btn-company-outbound') || e.target.closest('.card-logo-tile')) return;
      const id = card.getAttribute('data-id');
      const startup = allStartups.find(s => s.id === id);
      if (!startup) return;

      card.classList.add('is-pressed');
      if (!isDrawerOpen()) {
        clearDrawerMotion();
        renderDrawer(startup);
        document.getElementById('mainWorkbench').classList.add('drawer-peek');
        pressHint = 'peek';
      } else if (!activeStartup || activeStartup.id !== id) {
        drawerSheet.getAnimations().forEach(a => a.cancel());
        drawerExit(drawerSheet, { transform: 'translateX(7px)' }, { duration: 120, easing: DRAWER_EASE_OUT });
        pressHint = 'recoil';
      }
    });

    function releaseCardPress() {
      document.querySelectorAll('.venture-card.is-pressed').forEach(card => card.classList.remove('is-pressed'));
      // If the release did not turn into a click on the card, take the hint back
      setTimeout(() => {
        if (!pressHint) return;
        if (pressHint === 'peek' && !isDrawerOpen()) {
          document.getElementById('mainWorkbench').classList.remove('drawer-peek');
        } else if (pressHint === 'recoil') {
          drawerSheet.getAnimations().forEach(a => a.cancel());
          drawerEnter(drawerSheet, { transform: 'translateX(7px)' }, { duration: 200 });
        }
        pressHint = null;
      }, 60);
    }
    window.addEventListener('pointerup', releaseCardPress);
    window.addEventListener('pointercancel', releaseCardPress);

    /* Desktop drag to dismiss: grab the sheet by its header and throw it to the right */
    document.getElementById('drawerHeader').addEventListener('pointerdown', (e) => {
      if (window.innerWidth <= 960 || e.button !== 0 || !isDrawerOpen() || e.target.closest('.stage2-close-btn')) return;
      drawerDrag = { x0: e.clientX, lastX: e.clientX, lastT: performance.now(), v: 0, dx: 0 };
      drawerSheet.getAnimations().forEach(a => a.cancel());
      drawerSheet.classList.add('dragging');
    });

    window.addEventListener('pointermove', (e) => {
      if (!drawerDrag) return;
      const now = performance.now();
      const raw = (e.clientX - drawerDrag.x0) / pageZoom();
      drawerDrag.dx = raw > 0 ? raw : raw * 0.12;
      if (now > drawerDrag.lastT) drawerDrag.v = (e.clientX - drawerDrag.lastX) / (now - drawerDrag.lastT);
      drawerDrag.lastX = e.clientX;
      drawerDrag.lastT = now;
      drawerSheet.style.transform = `translateX(${drawerDrag.dx}px)`;
      drawerSheet.style.opacity = String(Math.max(0.35, 1 - Math.max(0, drawerDrag.dx) / 420));
    });

    function endDrawerDrag() {
      if (!drawerDrag) return;
      const dx = drawerDrag.dx;
      const startOpacity = drawerSheet.style.opacity || '1';
      // A flick only counts if the hand was still moving at release
      const v = performance.now() - drawerDrag.lastT > 80 ? 0 : drawerDrag.v;
      drawerDrag = null;
      drawerSheet.classList.remove('dragging');
      drawerSheet.style.transform = '';
      drawerSheet.style.opacity = '';

      if (dx > 110 || (v > 0.55 && dx > 24)) {
        drawerExit(drawerSheet, { transform: `translateX(${dx + 260}px)`, opacity: 0 }, {
          duration: 200, easing: DRAWER_EASE_OUT, from: { transform: `translateX(${dx}px)`, opacity: startOpacity }
        });
        resetDrawerState();
      } else if (Math.abs(dx) > 0.5) {
        drawerEnter(drawerSheet, { transform: `translateX(${dx}px)`, opacity: startOpacity }, { duration: 380, easing: DRAWER_SPRING });
      }
    }
    window.addEventListener('pointerup', endDrawerDrag);
    window.addEventListener('pointercancel', endDrawerDrag);

    /* Mobile Bottom Sheet touch swipe-to-dismiss (Fluid GPU Drag) */
    let mobileTouchStartY = 0;
    let mobileTouchDeltaY = 0;
    const gripEl = document.querySelector('.stage2-grip');
    const drawerHeaderEl = document.getElementById('drawerHeader');
    const inspectionDrawerEl = document.getElementById('inspectionDrawer');

    // Prevent backdrop drag from scrolling background
    if (inspectionDrawerEl) {
      inspectionDrawerEl.addEventListener('touchmove', (e) => {
        if (e.target === inspectionDrawerEl) {
          e.preventDefault();
        }
      }, { passive: false });
    }

    [gripEl, drawerHeaderEl].forEach(el => {
      if (!el) return;
      el.addEventListener('touchstart', (e) => {
        if (window.innerWidth > 960) return;
        mobileTouchStartY = e.touches[0].clientY;
        mobileTouchDeltaY = 0;
      }, { passive: true });

      el.addEventListener('touchmove', (e) => {
        if (window.innerWidth > 960 || !isDrawerOpen()) return;
        const currentY = e.touches[0].clientY;
        mobileTouchDeltaY = currentY - mobileTouchStartY;
        if (mobileTouchDeltaY > 0) {
          drawerSheet.style.transition = 'none';
          drawerSheet.style.transform = `translate3d(0, ${mobileTouchDeltaY}px, 0)`;
        }
      }, { passive: true });

      el.addEventListener('touchend', () => {
        if (window.innerWidth > 960 || !isDrawerOpen()) return;
        drawerSheet.style.transition = '';
        drawerSheet.style.transform = '';
        if (mobileTouchDeltaY > 70) {
          closeDrawer();
        }
        mobileTouchDeltaY = 0;
      }, { passive: true });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        closeSubmissionModal();
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    });

    function closeMobileDrawer() {
      closeDrawer();
    }

    function goHome(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ─── FILTER CONTROLS ─── */
    function setQuickFilter(type) {
      currentFilter.quick = type;
      document.querySelectorAll('.q-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === type);
      });
      applyFiltersAndRender();
    }

    function getFilterSet(facetType) {
      if (facetType === 'branch' || facetType === 'branches') return currentFilter.branches;
      if (facetType === 'team' || facetType === 'teams') return currentFilter.teams;
      if (facetType === 'location' || facetType === 'locations') return currentFilter.locations;
      return null;
    }

    function syncDesktopFacetDOM() {
      const mapping = [
        { type: 'branch', set: currentFilter.branches },
        { type: 'team', set: currentFilter.teams },
        { type: 'location', set: currentFilter.locations }
      ];

      mapping.forEach(({ type, set }) => {
        const items = document.querySelectorAll(`.facet-item[onclick*="'${type}'"]`);
        items.forEach(item => {
          const match = item.getAttribute('onclick')?.match(/toggleFacet\('[^']+',\s*'([^']+)'\)/);
          if (!match) return;
          const optVal = match[1];

          if (optVal === 'ALL') {
            item.classList.toggle('active', set.size === 0);
          } else {
            item.classList.toggle('active', set.has(optVal));
          }
        });
      });
    }

    function toggleFacet(facetType, val) {
      const targetSet = getFilterSet(facetType);
      if (!targetSet) return;

      if (val === 'ALL') {
        targetSet.clear();
      } else {
        if (targetSet.has(val)) {
          targetSet.delete(val);
        } else {
          targetSet.add(val);
        }
      }

      // Legacy string mirrors for compatibility
      if (facetType === 'branch') currentFilter.branch = targetSet.size === 1 ? [...targetSet][0] : (targetSet.size === 0 ? 'ALL' : 'MULTI');
      if (facetType === 'team') currentFilter.team = targetSet.size === 1 ? [...targetSet][0] : (targetSet.size === 0 ? 'ALL' : 'MULTI');
      if (facetType === 'location') currentFilter.location = targetSet.size === 1 ? [...targetSet][0] : (targetSet.size === 0 ? 'ALL' : 'MULTI');

      syncDesktopFacetDOM();
      if (typeof renderMobileFilterUI === 'function') {
        renderMobileFilterUI();
      }
      applyFiltersAndRender();
    }

    function handleCohortChange(val) {
      currentFilter.cohortMin = parseInt(val, 10);
      document.getElementById('cohortLabel').innerText = `${val} – 2024`;
      applyFiltersAndRender();
    }

    function handleSortChange(sortVal) {
      currentFilter.sort = sortVal;
      applyFiltersAndRender();
    }

    function executeSearch() {
      currentFilter.search = document.getElementById('searchInput').value.toLowerCase().trim();
      applyFiltersAndRender();
    }

    function resetFilters() {
      currentFilter.branches.clear();
      currentFilter.teams.clear();
      currentFilter.locations.clear();
      currentFilter.quick = 'all';
      currentFilter.branch = 'ALL';
      currentFilter.stage = 'ALL';
      currentFilter.location = 'ALL';
      currentFilter.team = 'ALL';
      currentFilter.cohortMin = 1980;
      currentFilter.search = '';
      currentFilter.sort = 'relevance';

      const sortSel = document.getElementById('sortSelect');
      if (sortSel) sortSel.value = 'relevance';
      const searchIn = document.getElementById('searchInput');
      if (searchIn) searchIn.value = '';
      const cohortIn = document.getElementById('cohortRangeInput');
      if (cohortIn) cohortIn.value = 1998;
      const cohortLbl = document.getElementById('cohortLabel');
      if (cohortLbl) cohortLbl.innerText = `1998 – 2024`;
      document.querySelectorAll('.q-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
      });

      syncDesktopFacetDOM();
      if (typeof renderMobileFilterUI === 'function') {
        renderMobileFilterUI();
      }
      applyFiltersAndRender();
    }

    /* ─── MAKER FEEDBACK TRIGGER ─── */
    function prefillFeedback(text) {
      document.getElementById('feedbackInput').value = text;
      document.getElementById('feedbackInput').focus();
    }

    async function sendMakerFeedback() {
      const input = document.getElementById('feedbackInput');
      const nameInput = document.getElementById('feedbackName');
      const emailInput = document.getElementById('feedbackEmail');
      const val = input.value.trim();
      if (!val) return;

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';

      input.value = 'Sending message...';
      input.disabled = true;

      const payloadNote = (nameVal || emailVal)
        ? `${val}\n\n[Author: ${nameVal || 'Anonymous'} | Contact: ${emailVal || 'None'}]`
        : val;

      try {
        await fetch(`${SUPABASE_URL}/rest/v1/maker_feedback`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ note: payloadNote, created_at: new Date().toISOString() })
        });
      } catch (err) {
        console.log('Saved note local:', payloadNote);
      }

      alert('Thank you! Your message has been sent directly to the curator inbox.');
      input.value = '';
      if (nameInput) nameInput.value = '';
      if (emailInput) emailInput.value = '';
      input.disabled = false;
    }

    function openContributionModal() {
      const modal = document.getElementById('contribModal');
      if (modal) {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeContributionModal() {
      const modal = document.getElementById('contribModal');
      if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    function handleContribBackdropClick(event) {
      if (event.target && event.target.id === 'contribModal') {
        closeContributionModal();
      }
    }

    // Fallback in case old caller exists
    function scrollToContributionDock() {
      openContributionModal();
    }

    /* ─── FOUNDER PHOTO LIGHTBOX MODAL (Stage 2 Only - 3D Kinetic Depth Lift) ─── */
    function openFounderPhotoModal(photoUrl, name, degree) {
      if (!photoUrl) return;
      const modal = document.getElementById('founderPhotoModal');
      const dialog = document.querySelector('.founder-photo-modal-dialog');
      const img = document.getElementById('founderPhotoModalImg');
      const nameEl = document.getElementById('founderPhotoModalName');
      const metaEl = document.getElementById('founderPhotoModalMeta');

      if (img) img.src = photoUrl;
      if (nameEl) nameEl.textContent = name || '';
      if (metaEl) metaEl.textContent = degree || '';
      if (dialog) dialog.style.transform = '';

      if (modal) {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeFounderPhotoModal(event) {
      if (event && event.target && event.target.id !== 'founderPhotoModal' && !event.target.classList.contains('founder-photo-modal-close')) {
        return;
      }
      const modal = document.getElementById('founderPhotoModal');
      const dialog = document.querySelector('.founder-photo-modal-dialog');
      if (dialog) dialog.style.transform = '';

      if (modal) {
        modal.classList.remove('is-open');
        const contrib = document.getElementById('contribModal');
        if (!contrib || !contrib.classList.contains('is-open')) {
          document.body.style.overflow = '';
        }
      }
    }

    // Subtle 3D Collector Card Micro-Tilt on Desktop
    function initFounderModal3DTilt() {
      const dialog = document.querySelector('.founder-photo-modal-dialog');
      const backdrop = document.getElementById('founderPhotoModal');
      if (!dialog || !backdrop) return;

      let tiltRAF = null;

      backdrop.addEventListener('mousemove', (e) => {
        if (!backdrop.classList.contains('is-open')) return;
        if (window.innerWidth < 768) return;

        const rect = dialog.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;

        if (cardX >= -40 && cardX <= rect.width + 40 && cardY >= -40 && cardY <= rect.height + 40) {
          const normX = Math.max(-0.5, Math.min(0.5, (cardX / rect.width) - 0.5));
          const normY = Math.max(-0.5, Math.min(0.5, (cardY / rect.height) - 0.5));
          const rotX = -normY * 8;
          const rotY = normX * 8;

          if (tiltRAF) cancelAnimationFrame(tiltRAF);
          tiltRAF = requestAnimationFrame(() => {
            dialog.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(0) scale(1.02)`;
          });
        }
      });

      dialog.addEventListener('mouseleave', () => {
        if (!backdrop.classList.contains('is-open')) return;
        if (tiltRAF) cancelAnimationFrame(tiltRAF);
        dialog.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFounderModal3DTilt);
    } else {
      initFounderModal3DTilt();
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const photoModal = document.getElementById('founderPhotoModal');
        if (photoModal && photoModal.classList.contains('is-open')) {
          closeFounderPhotoModal();
          return;
        }
        const modal = document.getElementById('contribModal');
        if (modal && modal.classList.contains('is-open')) {
          closeContributionModal();
        }
      }
    });

    let activeDonationAmt = 150;

    function selectDonationAmt(amt, el) {
      activeDonationAmt = amt;
      document.querySelectorAll('.dock-tier-row').forEach(r => r.classList.remove('is-active'));
      if (el) el.classList.add('is-active');
      const customWrap = document.getElementById('dockCustomInputWrap');
      if (customWrap) customWrap.style.display = 'none';

      const btn = document.getElementById('dockSupportBtn');
      if (btn) {
        btn.innerHTML = `Pay ₹${amt} via Any UPI App ↗`;
      }
    }

    function selectCustomDonation(el) {
      document.querySelectorAll('.dock-tier-row').forEach(r => r.classList.remove('is-active'));
      if (el) el.classList.add('is-active');
      const customWrap = document.getElementById('dockCustomInputWrap');
      if (customWrap) {
        customWrap.style.display = 'block';
        const input = document.getElementById('dockCustomAmtInput');
        if (input) {
          input.focus();
          if (input.value) updateCustomDonationVal(input.value);
          else {
            const btn = document.getElementById('dockSupportBtn');
            if (btn) btn.innerHTML = `Pay Custom via Any UPI App ↗`;
          }
        }
      }
    }

    function updateCustomDonationVal(val) {
      const clean = parseInt(val, 10);
      const btn = document.getElementById('dockSupportBtn');
      if (clean && clean > 0) {
        activeDonationAmt = clean;
        if (btn) btn.innerHTML = `Pay ₹${clean} via Any UPI App ↗`;
      } else {
        if (btn) btn.innerHTML = `Pay Custom via Any UPI App ↗`;
      }
    }

    function triggerUpiPay() {
      const upiUrl = `upi://pay?pa=nandanbhole72@okaxis&pn=VNIT%20Startups%20Directory&am=${activeDonationAmt}&cu=INR&tn=Community%20Support`;
      window.location.href = upiUrl;
    }

    /* ─── SUBMIT YOUR STARTUP (four details → startup_submissions queue) ─── */
    function openSubmissionModal() {
      // Always reset title, subtitle and view to the form; anything typed earlier and not yet submitted is kept
      const modalTitle = document.getElementById('submissionModalTitle');
      if (modalTitle) modalTitle.textContent = 'Submit your startup.';
      const modalSub = document.getElementById('submissionModalSub');
      if (modalSub) modalSub.textContent = 'Join the curated registry of companies built by VNIT alumni.';
      document.getElementById('submissionForm').hidden = false;
      document.getElementById('submissionSuccess').hidden = true;
      document.getElementById('submissionError').hidden = true;
      document.getElementById('submissionModal').classList.add('is-open');
      const nameInput = document.getElementById('sub_name');
      if (nameInput) setTimeout(() => nameInput.focus(), 60);
    }

    function closeSubmissionModal() {
      document.getElementById('submissionModal').classList.remove('is-open');
    }

    // Accepts "yourstartup.com" as well as a full link; returns null when it is not a usable address
    function normalizeWebsiteLink(raw) {
      let link = raw.trim();
      if (!link) return null;
      if (!/^https?:\/\//i.test(link)) link = 'https://' + link;
      try {
        const parsed = new URL(link);
        return parsed.hostname.includes('.') ? parsed.href : null;
      } catch (err) {
        return null;
      }
    }

    async function handleStartupSubmission(e) {
      e.preventDefault();

      // Honeypot check
      if (document.getElementById('anti_spam_fax').value.trim() !== '') {
        closeSubmissionModal();
        return;
      }

      const websiteInput = document.getElementById('sub_website');
      const website = normalizeWebsiteLink(websiteInput.value);
      if (!website) {
        websiteInput.setCustomValidity('Please enter your website link, like yourstartup.com');
        websiteInput.reportValidity();
        return;
      }

      const name = document.getElementById('sub_name').value.trim();
      const company = document.getElementById('sub_company_name').value.trim();
      const email = document.getElementById('sub_email').value.trim();

      const payload = {
        submitter_name: name,
        company_name: company,
        website_url: website,
        submitter_email: email,
        // The queue table still requires these older columns; the short form does not ask for them
        founder_name: name,
        founder_branch: 'Not provided',
        founder_batch: 0,
        pitch: 'Not provided',
        status: 'pending'
      };

      const submitBtn = document.getElementById('submitFormBtn');
      const errorEl = document.getElementById('submissionError');
      errorEl.hidden = true;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="submit-btn-spinner" aria-hidden="true"></span> Submitting…';

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/startup_submissions`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON,
            'Authorization': `Bearer ${SUPABASE_ANON}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        if (!res.ok) throw new Error(`Submission rejected (HTTP ${res.status})`);

        showSubmissionSuccess(name, company, email);
        document.getElementById('submissionForm').reset();
      } catch (err) {
        console.error('Startup submission failed:', err);
        errorEl.textContent = "We couldn't submit your details right now. Please check your internet connection and try clicking Submit Startup again.";
        errorEl.hidden = false;
      } finally {
        clearTimeout(timeout);
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Submit Startup</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
      }
    }

    function showSubmissionSuccess(name, company, email) {
      const cleanName = (name || '').trim();
      const firstName = cleanName.split(/\s+/)[0] || 'Alum';
      const cleanCompany = (company || '').trim() || 'Your startup';
      const cleanEmail = (email || '').trim() || 'your email';

      const modalTitle = document.getElementById('submissionModalTitle');
      if (modalTitle) modalTitle.textContent = 'Submission Confirmed';
      const modalSub = document.getElementById('submissionModalSub');
      if (modalSub) modalSub.textContent = 'Your venture is queued for directory review.';
      
      const titleEl = document.getElementById('submissionSuccessTitle');
      if (titleEl) titleEl.textContent = `Thanks, ${firstName}!`;

      const compEl = document.getElementById('submissionSuccessCompany');
      if (compEl) compEl.textContent = cleanCompany;

      const emailEl = document.getElementById('submissionSuccessEmail');
      if (emailEl) emailEl.textContent = cleanEmail;

      document.getElementById('submissionForm').hidden = true;
      document.getElementById('submissionSuccess').hidden = false;
      
      const doneBtn = document.getElementById('submissionDoneBtn');
      if (doneBtn) setTimeout(() => doneBtn.focus(), 80);
    }

    /* ─── NEWSLETTER DISPATCH STATE CONTROLLER (IN-SITU CONFIRMATION) ─── */
    async function handleNewsletterSubmit(e) {
      if (e) e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const btn = document.getElementById('newsletterSubmitBtn');
      const val = emailInput ? emailInput.value.trim() : '';
      if (!val) return;

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span>Subscribing...</span>';
      }

      try {
        if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON !== 'undefined') {
          await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_ANON,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: val, created_at: new Date().toISOString() })
          });
        }
      } catch (err) {
        console.log('Newsletter subscription recorded locally:', val);
      }

      // In-situ swap: hide left & right content, show only clean confirmation slate
      const card = document.getElementById('newsletterCard');
      const leftEl = document.getElementById('dispatchLeftContent');
      const rightEl = document.getElementById('dispatchRightContent');
      const successEl = document.getElementById('newsletterSuccessState');

      if (leftEl) leftEl.style.display = 'none';
      if (rightEl) rightEl.style.display = 'none';
      if (successEl) successEl.style.display = 'flex';
      if (card) card.classList.add('is-confirmed');
    }

    function resetNewsletterForm() {
      const card = document.getElementById('newsletterCard');
      const leftEl = document.getElementById('dispatchLeftContent');
      const rightEl = document.getElementById('dispatchRightContent');
      const successEl = document.getElementById('newsletterSuccessState');
      const btn = document.getElementById('newsletterSubmitBtn');
      const emailInput = document.getElementById('newsletterEmail');

      if (successEl) successEl.style.display = 'none';
      if (leftEl) leftEl.style.display = '';
      if (rightEl) rightEl.style.display = '';
      if (card) card.classList.remove('is-confirmed');
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Send me Updates</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
      }
      if (emailInput) {
        emailInput.value = '';
        setTimeout(() => emailInput.focus(), 60);
      }
    }

    /* Once a visitor has scrolled past the whole list and returns to the top, draw the eye to the submit button (one time) */
    (function initSubmitCue() {
      const btn = document.getElementById('navSubmitBtn');
      const dock = document.getElementById('communityDock');
      if (!btn || !dock || REDUCED_MOTION) return;

      let reachedEnd = false;
      let played = false;
      window.addEventListener('scroll', () => {
        if (played) return;
        if (!reachedEnd) {
          reachedEnd = dock.getBoundingClientRect().top < window.innerHeight;
          return;
        }
        if (window.scrollY < 120) {
          played = true;
          btn.classList.add('is-cue');
          btn.addEventListener('animationend', () => btn.classList.remove('is-cue'), { once: true });
        }
      }, { passive: true });
    })();

    /* ═══════════════════════════════════════════════════════════════════
       DYNAMIC HERO HEADLINE TYPEWRITER ENGINE (Prototype 01 - Snappy Backspace)
       ═══════════════════════════════════════════════════════════════════ */
    (function initHeroDynamicHeadline() {
      const wordEl = document.getElementById('heroDynamicWord');
      if (!wordEl) return;

      const WORDS = ["Startups", "Companies", "Products"];
      let wordIdx = 0;
      let charIdx = WORDS[0].length;
      let isDeleting = true;
      let timerId = null;

      const HOLD_TIME = 2500;  // 2.5s resting pause for comfortable human reading
      const BACK_SPEED = 28;   // 28ms / letter (hyper-speed snappy terminal backspace)
      const TYPE_SPEED = 52;   // 52ms / letter (snappy natural typing cadence)
      const NEXT_PAUSE = 180;  // 180ms breath before typing next word

      function tick() {
        const currentWord = WORDS[wordIdx];

        if (isDeleting) {
          charIdx--;
          wordEl.textContent = currentWord.substring(0, charIdx);
          if (charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % WORDS.length;
            timerId = setTimeout(tick, NEXT_PAUSE);
            return;
          }
          timerId = setTimeout(tick, BACK_SPEED);
        } else {
          charIdx++;
          wordEl.textContent = WORDS[wordIdx].substring(0, charIdx);
          if (charIdx === WORDS[wordIdx].length) {
            isDeleting = true;
            timerId = setTimeout(tick, HOLD_TIME);
            return;
          }
          timerId = setTimeout(tick, TYPE_SPEED);
        }
      }

      // Initial resting hold of 2.5s before first backspace
      timerId = setTimeout(tick, HOLD_TIME);
    })();

    /* ═══════════════════════════════════════════════════════════════════
       HERO LEADERBOARD ENGINE (Animation and Precision Metrics - View-Only)
       ═══════════════════════════════════════════════════════════════════ */
    function filterFromLeaderboard(branchName) {
      // Comparison metrics are view-only readout per design
      return;
    }

    (function initHeroLeaderboard() {
      const listEl = document.getElementById('heroLeaderboardList');
      if (!listEl) return;

      const bars = listEl.querySelectorAll('.leaderboard-bar');
      bars.forEach((bar, idx) => {
        bar.style.width = '0%';
        const targetPct = bar.getAttribute('data-pct');
        const targetCount = parseInt(bar.getAttribute('data-count'), 10);
        const delay = 100 + idx * 45; // Staggered 45ms per row (1x normal cadence)

        setTimeout(() => {
          bar.style.width = `${targetPct}%`;

          // Synchronized rolling number ticker
          const row = bar.closest('.leaderboard-row');
          const tickerEl = row ? row.querySelector('.leaderboard-val-count') : null;
          if (tickerEl && !isNaN(targetCount)) {
            let start = 0;
            const duration = 550;
            const startTime = performance.now();
            function tickTicker(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.round(start + (targetCount - start) * Math.sin(progress * Math.PI / 2));
              tickerEl.textContent = current;
              if (progress < 1) requestAnimationFrame(tickTicker);
              else tickerEl.textContent = targetCount;
            }
            requestAnimationFrame(tickTicker);
          }
        }, delay);
      });
    })();

    /* ═══════════════════════════════════════════════════════════════════
       AWWWARDS DESKTOP CURSOR-FOLLOWING BRANCH INSPECTOR ENGINE
       Top-Left Corner Anchored to Cursor · Pure Startups List (Logos + Names Only)
       ═══════════════════════════════════════════════════════════════════ */
    (function initBranchHoverInspector() {
      // Desktop-only interaction guard (pointer / mouse viewports)
      if (window.matchMedia('(max-width: 960px)').matches) return;

      const cardWrap = document.querySelector('.leaderboard-card');
      const inspector = document.getElementById('branchHoverInspector');
      const listEl = document.getElementById('bhiList');
      if (!cardWrap || !inspector || !listEl) return;

      const BRANCH_QUERY_MAP = {
        'CSE': 'Computer Science',
        'ECE': 'Electronics',
        'EEE': 'Electrical',
        'CIVIL': 'Civil',
        'MINING': 'Mining',
        'MECH': 'Mechanical',
        'MME': 'Metallurgy',
        'ARCH': 'Architecture',
        'CHEM': 'Chemical'
      };

      let currentX = -9999, currentY = -9999;
      let targetX = -9999, targetY = -9999;
      let isVisible = false;
      let activeBranchCode = null;
      let rAF = null;

      function renderBranchRoster(code) {
        const query = BRANCH_QUERY_MAP[code] || code;
        const matching = (typeof allStartups !== 'undefined' ? allStartups : (typeof SEED_STARTUPS !== 'undefined' ? SEED_STARTUPS : []))
          .filter(s => typeof hasBranch === 'function' ? hasBranch(s, query) : true)
          .sort((a, b) => (a.name || '').localeCompare(b.name || ''));

        listEl.innerHTML = '';
        if (matching.length === 0) {
          listEl.innerHTML = '<div style="font-size:11px;color:#64748B;padding:6px;">No startups found</div>';
          return;
        }

        matching.forEach((s, idx) => {
          const item = document.createElement('div');
          item.className = 'bhi-item';
          item.style.animationDelay = `${idx * 18}ms`;

          const monoText = (s.monogram || (s.name ? s.name.substring(0, 2).toUpperCase() : 'VN'));

          if (s.logo_url) {
            const img = document.createElement('img');
            img.className = 'bhi-item-logo';
            img.src = s.logo_url;
            img.alt = s.name || '';
            img.loading = 'lazy';
            img.onerror = function() {
              this.style.display = 'none';
              const next = this.nextElementSibling;
              if (next) next.style.display = 'flex';
            };
            item.appendChild(img);

            const monoFallback = document.createElement('span');
            monoFallback.className = 'bhi-item-mono';
            monoFallback.style.display = 'none';
            monoFallback.textContent = monoText;
            item.appendChild(monoFallback);
          } else {
            const mono = document.createElement('span');
            mono.className = 'bhi-item-mono';
            mono.textContent = monoText;
            item.appendChild(mono);
          }

          const nameSpan = document.createElement('span');
          nameSpan.className = 'bhi-item-name';
          nameSpan.textContent = s.name;
          item.appendChild(nameSpan);

          listEl.appendChild(item);
        });
      }

      function updatePhysics() {
        if (!isVisible) return;

        // Snappy, silky LERP (0.35 damping factor)
        currentX += (targetX - currentX) * 0.35;
        currentY += (targetY - currentY) * 0.35;

        inspector.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0) scale(1)`;

        rAF = requestAnimationFrame(updatePhysics);
      }

      function calcCoordinates(e) {
        // Attach the window's exact top-left corner directly to the cursor tip
        return { x: e.clientX, y: e.clientY };
      }

      const rows = cardWrap.querySelectorAll('.leaderboard-row');
      rows.forEach(row => {
        row.addEventListener('mouseenter', (e) => {
          if (window.innerWidth <= 960) return;
          const codeEl = row.querySelector('.leaderboard-branch-code');
          if (!codeEl) return;
          const code = codeEl.textContent.trim();

          if (activeBranchCode !== code) {
            activeBranchCode = code;
            renderBranchRoster(code);
          }

          const coords = calcCoordinates(e);
          targetX = coords.x;
          targetY = coords.y;

          if (!isVisible) {
            isVisible = true;
            currentX = targetX;
            currentY = targetY;
            inspector.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0) scale(0.96)`;
            inspector.classList.add('is-active');
            if (rAF) cancelAnimationFrame(rAF);
            rAF = requestAnimationFrame(updatePhysics);
          }
        });

        row.addEventListener('mousemove', (e) => {
          if (!isVisible || window.innerWidth <= 960) return;
          const coords = calcCoordinates(e);
          targetX = coords.x;
          targetY = coords.y;
        });
      });

      cardWrap.addEventListener('mouseleave', () => {
        isVisible = false;
        activeBranchCode = null;
        inspector.classList.remove('is-active');
        if (rAF) {
          cancelAnimationFrame(rAF);
          rAF = null;
        }
      });
    })();


  
    /* ═══════════════════════════════════════════════════════════════════
       DEPTH LAB PRESET 02: DYNAMIC SPECULAR CHROME + 3D DEPTH ENGINE
       ═══════════════════════════════════════════════════════════════════ */
    (function initHeroDepthLabEngine() {
      const hero = document.getElementById('heroWrapper');
      const container = document.getElementById('heroContainer');
      if (!hero || !container) return;

      // Exact parameters from headline_3d_depth_lab.html Preset 02:
      const params = {
        tiltPower: 0.2,
        zElevation: 50,
        driftPower: 0,
        shadowPower: 5
      };

      let mouse = {
        targetX: -1000, targetY: -1000,
        normX: 0, normY: 0,
        tiltX: 0, tiltY: 0,
        targetTiltX: 0, targetTiltY: 0,
        isInside: false
      };

      let width = hero.offsetWidth;
      let height = hero.offsetHeight;

      function resize() {
        width = hero.offsetWidth;
        height = hero.offsetHeight;
      }
      window.addEventListener('resize', resize);

      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        mouse.targetX = currentX;
        mouse.targetY = currentY;
        mouse.isInside = true;

        const centerX = width / 2;
        const centerY = height / 2;
        mouse.normX = (currentX - centerX) / (centerX || 1);
        mouse.normY = (currentY - centerY) / (centerY || 1);

        // Gyro Tilt: 7.5 * 0.2 = 1.5 deg max tilt
        const maxTilt = 7.5 * params.tiltPower;
        mouse.targetTiltX = -mouse.normY * maxTilt;
        mouse.targetTiltY = mouse.normX * (maxTilt * 1.25);

        // Dynamic Specular Chrome Light Angle Tracking (Light Sweep across letters)
        const pctX = ((currentX / width) * 100).toFixed(1);
        const pctY = ((currentY / height) * 100).toFixed(1);
        document.documentElement.style.setProperty('--light-x', `${pctX}%`);
        document.documentElement.style.setProperty('--light-y', `${pctY}%`);

        // Floor Cast Shadow: tight 5px contact depth
        const shadowX = -mouse.normX * params.shadowPower;
        const shadowY = Math.max(2, -mouse.normY * params.shadowPower + 4);
        document.documentElement.style.setProperty('--dynamic-shadow-x', `${shadowX.toFixed(1)}px`);
        document.documentElement.style.setProperty('--dynamic-shadow-y', `${shadowY.toFixed(1)}px`);
      });

      hero.addEventListener('mouseleave', () => {
        mouse.isInside = false;
        mouse.targetTiltX = 0;
        mouse.targetTiltY = 0;
        mouse.normX = 0;
        mouse.normY = 0;
        document.documentElement.style.setProperty('--dynamic-shadow-x', '0px');
        document.documentElement.style.setProperty('--dynamic-shadow-y', '4px');
      });

      function loop() {
        requestAnimationFrame(loop);

        // Smooth 3D tilt interpolation
        const headlineEl = document.getElementById('mainHeroHeadline');
        if (headlineEl) {
          if (mouse.isInside || Math.abs(mouse.tiltX) > 0.05 || Math.abs(mouse.tiltY) > 0.05) {
            headlineEl.style.transform = `perspective(1000px) rotateX(${mouse.tiltX.toFixed(2)}deg) rotateY(${mouse.tiltY.toFixed(2)}deg)`;
          } else {
            headlineEl.style.transform = 'none';
          }
        }
      }

      resize();
      loop();
    })();

    /* ─── DUAL-ZONE INDEPENDENT SCROLL SYNC ─── */
    (function initDualZoneScroll() {
      const drawerEl = document.getElementById('inspectionDrawer');
      const cardsContainer = document.getElementById('cardsContainer');
      if (!drawerEl || !cardsContainer) return;

      drawerEl.addEventListener('wheel', (e) => {
        const drawerBody = document.getElementById('drawerBodyContent');
        // If the drawer body itself has internal scrollable content, allow it to scroll inside
        if (drawerBody && drawerBody.scrollHeight > drawerBody.clientHeight) {
          const atTop = e.deltaY < 0 && drawerBody.scrollTop <= 0;
          const atBottom = e.deltaY > 0 && (drawerBody.scrollTop + drawerBody.clientHeight >= drawerBody.scrollHeight - 1);
          if (!atTop && !atBottom) {
            return;
          }
        }
        // Smoothly roll the startup cards stream
        cardsContainer.scrollBy({
          top: e.deltaY,
          behavior: 'auto'
        });
        e.preventDefault();
      }, { passive: false });
    })();

    /* ─── DYNAMIC BASELINE ALIGNMENT SYNC (Lock Stage 1 & 2 to Filter Rail Baseline) ─── */
    function syncBaselineHeight() {
      const rail = document.querySelector('.filter-rail');
      const stream = document.querySelector('.stream-cards-list');
      const toolbar = document.querySelector('.stream-toolbar');
      const drawerInner = document.getElementById('drawerSheet');

      if (!rail || !stream) return;

      const railHeight = rail.offsetHeight;
      if (railHeight > 0) {
        let toolbarOffset = 42;
        if (toolbar) {
          const tbHeight = toolbar.offsetHeight;
          const tbMargin = parseFloat(window.getComputedStyle(toolbar).marginBottom) || 10;
          toolbarOffset = tbHeight + tbMargin;
        }
        const targetHeight = Math.max(400, railHeight - toolbarOffset);
        stream.style.height = targetHeight + 'px';
        stream.style.maxHeight = targetHeight + 'px';

        if (drawerInner) {
          drawerInner.style.maxHeight = railHeight + 'px';
        }
      }
    }

    window.addEventListener('DOMContentLoaded', syncBaselineHeight);
    window.addEventListener('load', syncBaselineHeight);
    window.addEventListener('resize', syncBaselineHeight);
    setTimeout(syncBaselineHeight, 150);


    /* =========================================================
       MOBILE CONTINUOUS LEFT-DRAWER FILTER CONTROLLER
       ========================================================= */
    const mobileFilterData = [
      { id: "branch", name: "Branch / Dept", shortName: "Branch", options: [
        { label: "All Departments", val: "ALL" },
        { label: "Computer Science Engineering", val: "Computer Science" },
        { label: "Electronics and Communication Engineering", val: "Electronics" },
        { label: "Electrical and Electronics Engineering", val: "Electrical" },
        { label: "Mechanical Engineering", val: "Mechanical" },
        { label: "Chemical Engineering", val: "Chemical" },
        { label: "Civil Engineering", val: "Civil" },
        { label: "Metallurgical and Materials", val: "Metallurgy" },
        { label: "Mining Engineering", val: "Mining" },
        { label: "Architecture", val: "Architecture" }
      ]},
      { id: "team", name: "Company Size", shortName: "Company Size", options: [
        { label: "All Sizes", val: "ALL" },
        { label: "1–5", val: "1-5" },
        { label: "5–10", val: "5-10" },
        { label: "10–50", val: "10-50" },
        { label: "50–100", val: "50-100" },
        { label: "100–200", val: "100-200" },
        { label: "200+ (200 Onwards)", val: "200+" }
      ]},
      { id: "location", name: "Location", shortName: "Location", options: [
        { label: "All Locations", val: "ALL" },
        { label: "Mumbai", val: "Mumbai" },
        { label: "Gurugram", val: "Gurugram" },
        { label: "Pune", val: "Pune" },
        { label: "Nagpur", val: "Nagpur" },
        { label: "Bangalore", val: "Bangalore" },
        { label: "Redwood City, California", val: "Redwood City, California" }
      ]}
    ];

    let mfActiveTabId = "branch";

    window.openMobileFilterModal = function() {
      const overlay = document.getElementById("mfOverlay");
      const modal = document.getElementById("mfModal");
      if (overlay) overlay.classList.add("active");
      if (modal) modal.classList.add("active");

      document.documentElement.classList.add("mobile-filter-open");
      document.body.classList.add("mobile-filter-open");

      renderMobileFilterUI();
    };

    window.closeMobileFilterModal = function() {
      const overlay = document.getElementById("mfOverlay");
      const modal = document.getElementById("mfModal");
      if (overlay) overlay.classList.remove("active");
      if (modal) modal.classList.remove("active");

      document.documentElement.classList.remove("mobile-filter-open");
      document.body.classList.remove("mobile-filter-open");
    };

    window.switchMobileTab = function(groupId) {
      mfActiveTabId = groupId;
      renderMobileFilterUI();
    };

    window.toggleMobileOption = function(tabId, optVal) {
      toggleFacet(tabId, optVal);
    };

    window.clearMobileFilters = function() {
      currentFilter.branches.clear();
      currentFilter.teams.clear();
      currentFilter.locations.clear();
      currentFilter.branch = 'ALL';
      currentFilter.team = 'ALL';
      currentFilter.location = 'ALL';

      syncDesktopFacetDOM();
      renderMobileFilterUI();
      applyFiltersAndRender();
    };

    window.applyMobileFilters = function() {
      applyFiltersAndRender();
      closeMobileFilterModal();
    };

    function renderMobileFilterUI() {
      // 1. Render Left Tabs (Clean, NO square brackets)
      const tabsEl = document.getElementById("mfTabsList");
      if (tabsEl) {
        tabsEl.innerHTML = mobileFilterData.map(group => {
          const targetSet = getFilterSet(group.id);
          const isFilterActive = targetSet && targetSet.size > 0;
          const isCurrentTab = group.id === mfActiveTabId;
          const countBadge = isFilterActive ? `<span class="mf-tab-count">${targetSet.size}</span>` : '';

          return `
            <div class="mf-tab-item ${isCurrentTab ? 'active' : ''}" onclick="switchMobileTab('${group.id}')">
              <span>${group.name}</span>
              ${countBadge}
            </div>
          `;
        }).join('');
      }

      // 2. Render Right Options: ONLY for the currently active tab!
      const optionsEl = document.getElementById("mfOptionsList");
      const currentGroup = mobileFilterData.find(g => g.id === mfActiveTabId) || mobileFilterData[0];
      if (optionsEl && currentGroup) {
        const targetSet = getFilterSet(currentGroup.id);

        optionsEl.innerHTML = currentGroup.options.map(opt => {
          const isSelected = opt.val === 'ALL' ? (targetSet.size === 0) : targetSet.has(opt.val);
          return `
            <div class="mf-option-item ${isSelected ? 'selected' : ''}" onclick="toggleMobileOption('${currentGroup.id}', '${opt.val}')">
              <span>${opt.label}</span>
              <div class="mf-checkbox-square"></div>
            </div>
          `;
        }).join('');
      }

      // 3. Update Mobile Trigger Button count
      const totalSelected = (currentFilter.branches ? currentFilter.branches.size : 0) + 
                            (currentFilter.teams ? currentFilter.teams.size : 0) + 
                            (currentFilter.locations ? currentFilter.locations.size : 0);

      const countEl = document.getElementById("mobileActiveCount");
      if (countEl) {
        if (totalSelected > 0) {
          countEl.innerText = totalSelected;
          countEl.style.display = "inline-block";
        } else {
          countEl.style.display = "none";
        }
      }
    }
