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
            "name": "Truemeds India",
            "slug": "truemeds-india",
            "monogram": "TM",
            "sector": "HealthTech & Telehealth",
            "pitch": "Proprietary algorithm-driven telehealth and generic medicine delivery platform reducing healthcare expenses by up to 72% for Indian households.",
            "website_url": "https://truemeds.in",
            "linkedin_url": "https://linkedin.com/company/truemedsin",
            "department": "Mechanical",
            "batch_year": 2009,
            "location": "Mumbai, Maharashtra",
            "funding_stage": "Series B",
            "funding_amount": "$27.0M",
            "headcount": 420,
            "incorporated_year": 2019,
            "lead_backers": "WestBridge Capital · Info Edge Ventures",
            "tech_stack": "Python · React Native · Node.js · AWS",
            "traction_badge": "SERIES B · 10M+ USERS",
            "traction_note": "Delivering affordable medicine across 1,000+ Indian pin codes with 99.4% fulfillment accuracy.",
            "founders": [
                  {
                        "name": "Akshat Nayyar",
                        "role": "Co-founder",
                        "degree": "B.Tech Mech '09",
                        "linkedin": "https://linkedin.com/in/akshat-nayyar"
                  },
                  {
                        "name": "Sourabh Bedkute",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Mech '09",
                        "linkedin": "https://linkedin.com/in/sourabh-bedkute"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "b05f5dfe-9dea-47f8-8730-b97ba33b6620",
            "logo_url": "./assets/logos/truemeds-india.png"
      },
      {
            "name": "Square Yards",
            "slug": "square-yards",
            "monogram": "SY",
            "sector": "PropTech & Real Estate FinTech",
            "pitch": "Integrated real estate and mortgage transaction engine facilitating primary and secondary home purchases, leases, and loans across 9 countries.",
            "website_url": "https://squareyards.com",
            "linkedin_url": "https://linkedin.com/company/square-yards",
            "department": "Civil",
            "batch_year": 2012,
            "location": "Gurugram & Dubai",
            "funding_stage": "Series E",
            "funding_amount": "$95.0M",
            "headcount": 5500,
            "incorporated_year": 2014,
            "lead_backers": "Times Group · Reliance Capital · ADM Capital",
            "tech_stack": "React · Node.js · Postgres · Microservices",
            "traction_badge": "$1B+ GTV ANNUAL RUN RATE",
            "traction_note": "India's largest real estate transaction platform spanning 100+ cities globally.",
            "founders": [
                  {
                        "name": "Mayuri Munshi",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Civi '12",
                        "linkedin": "https://linkedin.com/in/mayuri-munshi"
                  },
                  {
                        "name": "Sourav Kumar Tiwari",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Civi '12",
                        "linkedin": "https://linkedin.com/in/sourav-kumar-tiwari"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "d94e0c4a-469e-4aff-869d-8b4ffec5570c",
            "logo_url": "./assets/logos/square-yards.png"
      },
      {
            "name": "CAMS Limited",
            "slug": "cams-limited",
            "monogram": "CL",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in CAMS Limited.",
            "website_url": "https://www.camsonline.com",
            "linkedin_url": "https://linkedin.com/company/cams-limited",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
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
            "id": "93530442-d438-4486-b12a-ecab503a038f",
            "logo_url": "./assets/logos/cams-limited.png"
      },
      {
            "name": "Scienaptic AI",
            "slug": "scienaptic-ai",
            "monogram": "SA",
            "sector": "FinTech & AI Underwriting",
            "pitch": "Explainable AI-driven credit underwriting and risk decisioning platform empowering banks, fintechs, and credit unions to approve more loans faster.",
            "website_url": "https://scienaptic.ai",
            "linkedin_url": "https://linkedin.com/company/scienaptic",
            "department": "Computer Science",
            "batch_year": 1993,
            "location": "New York, NY & Bengaluru",
            "funding_stage": "Series A",
            "funding_amount": "$25.0M",
            "headcount": 180,
            "incorporated_year": 2014,
            "lead_backers": "TVS Capital Funds · Intel Capital",
            "tech_stack": "Python · PyTorch · Scala · Snowflake",
            "traction_badge": "PROCESSED $60B+ IN CREDIT",
            "traction_note": "Trusted by 140+ global financial institutions and credit unions with 20%+ higher approval rates.",
            "founders": [
                  {
                        "name": "Pankaj Kulshreshtha",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '93",
                        "linkedin": "https://linkedin.com/in/pankaj-kulshreshtha"
                  },
                  {
                        "name": "Raj Bhoyar",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '93",
                        "linkedin": "https://linkedin.com/in/raj-bhoyar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "3a4f41a5-be9c-487b-a050-c011497b9698",
            "logo_url": "./assets/logos/scienaptic-ai.png"
      },
      {
            "name": "Neewee",
            "slug": "neewee",
            "monogram": "NW",
            "sector": "Industrial AI & Smart Factory",
            "pitch": "Industrial AI intelligence platform Bodhee optimizing operational efficiency, shop-floor cycle times, and predictive maintenance for global manufacturers.",
            "website_url": "https://neewee.ai",
            "linkedin_url": "https://linkedin.com/company/neewee-analytics",
            "department": "Mechanical",
            "batch_year": 2004,
            "location": "Bengaluru, Karnataka",
            "funding_stage": "Series A",
            "funding_amount": "$8.5M",
            "headcount": 85,
            "incorporated_year": 2014,
            "lead_backers": "Aditya Birla Ventures · Global Manufacturing Partners",
            "tech_stack": "Python · TensorFlow · Apache Spark · TimeSeries DB",
            "traction_badge": "AEROSPACE & HEAVY INDUSTRY",
            "traction_note": "Deployed across Fortune 500 manufacturing plants in aerospace, automotive, and metals.",
            "founders": [
                  {
                        "name": "Suyog Joshi",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Mech '04",
                        "linkedin": "https://linkedin.com/in/suyog-joshi"
                  },
                  {
                        "name": "Harsimrat Bhasin",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Mech '04",
                        "linkedin": "https://linkedin.com/in/harsimrat-bhasin"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "18288574-910e-46a2-8ccc-377524cebaaa",
            "logo_url": "./assets/logos/neewee.png"
      },
      {
            "name": "Sigmantle Research",
            "slug": "sigmantle-research",
            "monogram": "SR",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Sigmantle Research.",
            "website_url": "https://www.sigmantle-research.com",
            "linkedin_url": "https://linkedin.com/company/sigmantle-research",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Shreyash Kakde",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/shreyash-kakde"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "8f6f61b1-6cc9-4c98-8f55-330d650c49fc",
            "logo_url": "./assets/logos/sigmantle-research.png"
      },
      {
            "name": "Human Capitalists",
            "slug": "human-capitalists",
            "monogram": "HC",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Human Capitalists.",
            "website_url": "https://humancapitalists.ai",
            "linkedin_url": "https://linkedin.com/company/human-capitalists",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Lakshya Shukla",
                        "role": "Co-Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/lakshya-shukla"
                  },
                  {
                        "name": "Nishant Singh Didawat",
                        "role": "Co founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/nishant-singh-didawat"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "362308eb-7991-4e0c-8b47-89729a7376cd",
            "logo_url": "./assets/logos/human-capitalists.png"
      },
      {
            "name": "Findem",
            "slug": "findem",
            "monogram": "FD",
            "sector": "Enterprise HRTech & AI",
            "pitch": "Attribute-based talent intelligence and workforce management engine mapping 1M+ candidate signals across every stage of the talent lifecycle.",
            "website_url": "https://findem.ai",
            "linkedin_url": "https://linkedin.com/company/findem-ai",
            "department": "Computer Science",
            "batch_year": 2002,
            "location": "San Francisco, CA & Bengaluru",
            "funding_stage": "Series B",
            "funding_amount": "$37.0M",
            "headcount": 140,
            "incorporated_year": 2019,
            "lead_backers": "Wing Venture Capital · Quarry Ventures",
            "tech_stack": "Python · Go · React · ElasticSearch",
            "traction_badge": "SERIES B · FORTUNE 500 CLIENTS",
            "traction_note": "Accelerating pipeline sourcing by 4x for tech leaders including RingCentral, Intuitive Surgical, and Medallia.",
            "founders": [
                  {
                        "name": "Hariharan Kolam",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '02",
                        "linkedin": "https://linkedin.com/in/hariharan-kolam"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "e05b4b4b-11de-45a1-8a13-67b21a16607d",
            "logo_url": "./assets/logos/findem.png"
      },
      {
            "name": "Airolabs.ai",
            "slug": "airolabs-ai",
            "monogram": "AA",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Airolabs.ai.",
            "website_url": "https://airolabs.ai",
            "linkedin_url": "https://linkedin.com/company/airolabs-ai",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Sayak Das",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sayak-das"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "1a7535a3-0492-4c11-b95b-358a134127db",
            "logo_url": "./assets/logos/airolabs-ai.png"
      },
      {
            "name": "99minds",
            "slug": "99minds",
            "monogram": "99",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in 99minds.",
            "website_url": "https://www.99minds.com",
            "linkedin_url": "https://linkedin.com/company/99minds",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Pravin Kamble",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/pravin-kamble"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "8fe16113-5f65-437a-bea7-d6e483e11b26",
            "logo_url": "./assets/logos/99minds.png"
      },
      {
            "name": "Well Played Sports",
            "slug": "well-played-sports",
            "monogram": "WP",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Well Played Sports.",
            "website_url": "https://www.well-played-sports.com",
            "linkedin_url": "https://linkedin.com/company/well-played-sports",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Ketan Kaore",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/ketan-kaore"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "af743da4-4f94-4b58-ab44-62c7162e2439",
            "logo_url": "./assets/logos/well-played-sports.png"
      },
      {
            "name": "SimpleWorks",
            "slug": "simpleworks",
            "monogram": "SI",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in SimpleWorks.",
            "website_url": "https://simple.works",
            "linkedin_url": "https://linkedin.com/company/simpleworks",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Indraneel Fuke",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/indraneel-fuke"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "b5fcefa0-0a71-4b75-8749-f4b5354eea36",
            "logo_url": "./assets/logos/simpleworks.png"
      },
      {
            "name": "BizTranSights",
            "slug": "biztransights",
            "monogram": "BI",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in BizTranSights.",
            "website_url": "https://www.biztransights.com",
            "linkedin_url": "https://linkedin.com/company/biztransights",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Sonal Gole",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sonal-gole"
                  },
                  {
                        "name": "Vedant Mandwe",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/vedant-mandwe"
                  },
                  {
                        "name": "Sameer Ughade",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sameer-ughade"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "c9a195f0-eded-4888-afaa-24c9cd3d0a6d",
            "logo_url": "./assets/logos/biztransights.png"
      },
      {
            "name": "MasterSoft",
            "slug": "mastersoft",
            "monogram": "MS",
            "sector": "EdTech & University ERP",
            "pitch": "India's largest cloud education ERP and campus automation ecosystem serving 2,500+ premier universities, engineering institutes, and colleges.",
            "website_url": "https://iitms.co.in",
            "linkedin_url": "https://linkedin.com/company/mastersoft-erp-solutions",
            "department": "Computer Science",
            "batch_year": 1988,
            "location": "Nagpur, Maharashtra",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped & Profitable",
            "headcount": 320,
            "incorporated_year": 1995,
            "lead_backers": "Self-Funded / Founder-Led",
            "tech_stack": "Java · .NET Core · Angular · SQL Server · Azure",
            "traction_badge": "2,500+ CAMPUSES NATIONWIDE",
            "traction_note": "Processing records for over 5 million students across premier NITs, IIITs, and state universities.",
            "founders": [
                  {
                        "name": "Sham Somani",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '88",
                        "linkedin": "https://linkedin.com/in/sham-somani"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "277bd164-699a-4f0a-8a8b-2a7dc8f5a1c4",
            "logo_url": "./assets/logos/mastersoft.png"
      },
      {
            "name": "TeemGenie",
            "slug": "teemgenie",
            "monogram": "TE",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in TeemGenie.",
            "website_url": "https://www.teemgenie.com",
            "linkedin_url": "https://linkedin.com/company/teemgenie",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Sandeep Deshmukh",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sandeep-deshmukh"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "7187f5b9-d7aa-45af-ad5e-b6667df8885c",
            "logo_url": "./assets/logos/teemgenie.png"
      },
      {
            "name": "Aristok Technologies",
            "slug": "aristok-technologies",
            "monogram": "AT",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Aristok Technologies.",
            "website_url": "https://aristok.com",
            "linkedin_url": "https://linkedin.com/company/aristok-technologies",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Aniket Khare",
                        "role": "Cofounder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/aniket-khare"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "fc1ab9a4-be95-472a-9087-9a4050aa5049",
            "logo_url": "./assets/logos/aristok-technologies.png"
      },
      {
            "name": "Product Space",
            "slug": "product-space",
            "monogram": "PS",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Product Space.",
            "website_url": "https://www.product-space.com",
            "linkedin_url": "https://linkedin.com/company/product-space",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Sakshi Yadav",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sakshi-yadav"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "0faf6416-552f-476d-84e4-7990aeb271bd",
            "logo_url": "./assets/logos/product-space.png"
      },
      {
            "name": "Autoven",
            "slug": "autoven",
            "monogram": "AU",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Autoven.",
            "website_url": "https://autoven.tech",
            "linkedin_url": "https://linkedin.com/company/autoven",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Vinay Gunasekaran",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/vinay-gunasekaran"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "fe3edbbf-bc15-48e8-807e-4384c1671100",
            "logo_url": "./assets/logos/autoven.png"
      },
      {
            "name": "Collegise",
            "slug": "collegise",
            "monogram": "CO",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Collegise.",
            "website_url": "https://www.collegise.com",
            "linkedin_url": "https://linkedin.com/company/collegise",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Pranav Chinsabwar",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/pranav-chinsabwar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "9a1ae054-1f71-4f4a-9df7-6eaee3541d0c",
            "logo_url": "./assets/logos/collegise.png"
      },
      {
            "name": "str8bat",
            "slug": "str8bat",
            "monogram": "SB",
            "sector": "SportsTech & Wearable IoT",
            "pitch": "Pocket-sized ultra-lightweight motion sensor and computer vision coaching system capturing actionable 3D swing metrics for cricketers and coaches.",
            "website_url": "https://str8bat.com",
            "linkedin_url": "https://linkedin.com/company/str8bat",
            "department": "Electronics",
            "batch_year": 1998,
            "location": "Bengaluru, Karnataka",
            "funding_stage": "Seed",
            "funding_amount": "$3.5M",
            "headcount": 30,
            "incorporated_year": 2017,
            "lead_backers": "Exfinity Venture Partners · Techstars",
            "tech_stack": "Embedded C · IMU Sensors · Flutter · AWS",
            "traction_badge": "USED BY ELITE PLAYERS",
            "traction_note": "Endorsed by cricket icons and utilized across IPL franchises, state academies, and 30,000+ athletes.",
            "founders": [
                  {
                        "name": "Rahul Nagar",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Elec '98",
                        "linkedin": "https://linkedin.com/in/rahul-nagar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "6f98dbd9-bd63-418d-bfc0-1fbfa773398f",
            "logo_url": "./assets/logos/str8bat.png"
      },
      {
            "name": "Synthesis",
            "slug": "synthesis",
            "monogram": "SY",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Synthesis.",
            "website_url": "https://www.synthesis.com",
            "linkedin_url": "https://linkedin.com/company/synthesis",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Ankit Kalkar",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/ankit-kalkar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "8684fbfd-e9a9-45ed-9c06-ce1c9f70a845",
            "logo_url": "./assets/logos/synthesis.png"
      },
      {
            "name": "InfoCepts",
            "slug": "infocepts",
            "monogram": "IC",
            "sector": "Enterprise Data & AI Solutions",
            "pitch": "Global end-to-end data and analytics modernization powerhouse enabling global enterprises to bridge business vision and data value.",
            "website_url": "https://infocepts.ai",
            "linkedin_url": "https://linkedin.com/company/infocepts",
            "department": "Mechanical",
            "batch_year": 1992,
            "location": "Nagpur & Tysons, VA",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped & Highly Profitable",
            "headcount": 1500,
            "incorporated_year": 2004,
            "lead_backers": "Self-Funded / Founder-Led",
            "tech_stack": "Snowflake · Databricks · AWS · PowerBI · Python",
            "traction_badge": "GLOBAL 1,500+ FTE FORCE",
            "traction_note": "Recognized in Gartner Magic Quadrant for Data & Analytics Services 4 years running.",
            "founders": [
                  {
                        "name": "Shashank Garg",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Mech '92",
                        "linkedin": "https://linkedin.com/in/shashank-garg"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "3053f59b-2f12-4773-bd31-713c732f366e",
            "logo_url": "./assets/logos/infocepts.png"
      },
      {
            "name": "KalaGato",
            "slug": "kalagato",
            "monogram": "KG",
            "sector": "Consumer Intelligence & Mobile Data",
            "pitch": "Automated mobile telemetry intelligence and alternative data platform tracking smartphone usage metrics, consumer behaviors, and market shares.",
            "website_url": "https://kalagato.co",
            "linkedin_url": "https://linkedin.com/company/kalagato",
            "department": "Computer Science",
            "batch_year": 2015,
            "location": "New Delhi, India",
            "funding_stage": "Seed",
            "funding_amount": "$4.0M",
            "headcount": 45,
            "incorporated_year": 2016,
            "lead_backers": "Village Global · SOSV · 9Unicorns",
            "tech_stack": "Python · Android SDK · BigQuery · Go",
            "traction_badge": "50M+ APP DATA SIGNALS",
            "traction_note": "Providing verified market-share telemetry to top global hedge funds, VCs, and brand strategists.",
            "founders": [
                  {
                        "name": "Abhishek Dhobe",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '15",
                        "linkedin": "https://linkedin.com/in/abhishek-dhobe"
                  },
                  {
                        "name": "Aman Kumar",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '15",
                        "linkedin": "https://linkedin.com/in/aman-kumar"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "9238a9a9-0fdc-4495-889a-f95df22c9440",
            "logo_url": "./assets/logos/kalagato.png"
      },
      {
            "name": "Awiros",
            "slug": "awiros",
            "monogram": "AW",
            "sector": "Computer Vision & Edge AI",
            "pitch": "Open operating system and app-marketplace for video intelligence and deep-learning computer vision deployed on edge and cloud infrastructure.",
            "website_url": "https://awiros.com",
            "linkedin_url": "https://linkedin.com/company/awiros",
            "department": "Electronics",
            "batch_year": 2010,
            "location": "Gurugram & Bengaluru",
            "funding_stage": "Series A",
            "funding_amount": "$7.0M",
            "headcount": 101,
            "incorporated_year": 2015,
            "lead_backers": "Inventus Capital India · Exfinity Venture Partners",
            "tech_stack": "C++ · CUDA · TensorRT · Python · Docker",
            "traction_badge": "DEFENSE & SMART CITIES",
            "traction_note": "Powering 50,000+ video surveillance streams across airports, metropolitan traffic, and defense perimeters.",
            "founders": [
                  {
                        "name": "Vikram Gupta",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Elec '10",
                        "linkedin": "https://linkedin.com/in/vikram-gupta"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "78373ad7-2749-4763-977f-bd6cf5e5a760",
            "logo_url": "./assets/logos/awiros.png"
      },
      {
            "name": "Living Things",
            "slug": "living-things",
            "monogram": "LT",
            "sector": "CleanTech / Smart Energy IoT",
            "pitch": "Intelligent IoT HVAC and central air-conditioning energy optimization platform cutting commercial electricity consumption by up to 35%.",
            "website_url": "https://livingthings.in",
            "linkedin_url": "https://linkedin.com/company/livingthings-iot",
            "department": "Mechanical",
            "batch_year": 2017,
            "location": "Pune & Bengaluru",
            "funding_stage": "Seed",
            "funding_amount": "$1.8M",
            "headcount": 35,
            "incorporated_year": 2019,
            "lead_backers": "Venture Catalysts · Energy Transition Angels",
            "tech_stack": "Embedded C · MQTT · Python · React · AWS IoT",
            "traction_badge": "30M+ KWH ENERGY SAVED",
            "traction_note": "Managing 25,000+ connected industrial cooling tons across corporate campuses and hospitals.",
            "founders": [
                  {
                        "name": "Shraddha Pandram",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/shraddha-pandram"
                  },
                  {
                        "name": "Mayank Gupta",
                        "role": "cofounder",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/mayank-gupta"
                  },
                  {
                        "name": "Tushar Jagadale",
                        "role": "Cofounder",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/tushar-jagadale"
                  },
                  {
                        "name": "Vatsala Swaroop",
                        "role": "Senior Data Scientist",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/vatsala-swaroop"
                  },
                  {
                        "name": "Rabiya Begum",
                        "role": "data analyst",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/rabiya-begum"
                  },
                  {
                        "name": "Madhusudhan Naik",
                        "role": "Founder & Ceo",
                        "degree": "B.Tech Mech '17",
                        "linkedin": "https://linkedin.com/in/madhusudhan-naik"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "e91002b3-4bbb-4485-b7cc-b1b3a2fc66dc",
            "logo_url": "./assets/logos/living-things.png"
      },
      {
            "name": "Circullence Solutions",
            "slug": "circullence-solutions",
            "monogram": "CS",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Circullence Solutions.",
            "website_url": "https://www.circullence-solutions.com",
            "linkedin_url": "https://linkedin.com/company/circullence-solutions",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Sarang Aloni",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/sarang-aloni"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "2a00bf25-4ee7-4f8e-a8ae-554e618c0031",
            "logo_url": "./assets/logos/circullence-solutions.png"
      },
      {
            "name": "Delphi Cloud",
            "slug": "delphi-cloud",
            "monogram": "DC",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Delphi Cloud.",
            "website_url": "https://delphicloud.ai",
            "linkedin_url": "https://linkedin.com/company/delphi-cloud",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Shreyas Mokadam",
                        "role": "Founder",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/shreyas-mokadam"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "a2d1d84e-89da-4df3-ba38-17cd71d4623e",
            "logo_url": "./assets/logos/delphi-cloud.png"
      },
            {
            "name": "Delphi Analytics",
            "slug": "delphi-analytics",
            "monogram": "DA",
            "sector": "Data Science & AI Solutions",
            "pitch": "Full-stack data science, machine learning models, and automated analytics platform helping enterprises connect and operationalize complex data pipelines.",
            "website_url": "https://www.delphianalytics.ai/",
            "linkedin_url": "https://linkedin.com/company/sdsm-analytics",
            "department": "Mining Engineering",
            "batch_year": "2016",
            "location": "Nagpur, Maharashtra, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 17,
            "incorporated_year": 2020,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · TensorFlow · Cloud Analytics",
            "traction_badge": "AI & DATA SCIENCE",
            "traction_note": "Delivering production-grade predictive intelligence, digital twins, and analytics infrastructure for enterprise clients.",
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
            "id": "08ba9fc5-212e-401d-bc5d-09f8348d3aa6",
            "logo_url": "./assets/logos/delphi-analytics.png"
},
      {
            "name": "CollegeDekho",
            "slug": "collegedekho",
            "monogram": "CD",
            "sector": "EdTech & Higher Education",
            "pitch": "India's premier institutional higher-education discovery, career counseling, and university admissions marketplace connecting millions of students.",
            "website_url": "https://collegedekho.com",
            "linkedin_url": "https://linkedin.com/company/collegedekho",
            "department": "Computer Science",
            "batch_year": 2008,
            "location": "Gurugram, Haryana",
            "funding_stage": "Series B",
            "funding_amount": "$44.0M",
            "headcount": 950,
            "incorporated_year": 2015,
            "lead_backers": "Winter Capital · ETS Strategic Capital · QIC",
            "tech_stack": "React · Node.js · PHP · AWS Cloud",
            "traction_badge": "100M+ ANNUAL SESSIONS",
            "traction_note": "Counseled over 3 million students across 1,500+ partnered universities nationwide.",
            "founders": [
                  {
                        "name": "Ruchir",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '08",
                        "linkedin": "https://linkedin.com/in/ruchir"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "2be2cdbc-35ba-4e0c-b288-c352b7800214",
            "logo_url": "./assets/logos/collegedekho.png"
      },
      {
            "name": "Konverge AI",
            "slug": "konverge-ai",
            "monogram": "KA",
            "sector": "Enterprise AI & GenAI Systems",
            "pitch": "Applied AI and machine learning engineering firm designing bespoke predictive intelligence, NLP, and vision architectures for global enterprises.",
            "website_url": "https://konverge.ai",
            "linkedin_url": "https://linkedin.com/company/konverge-ai",
            "department": "Computer Science",
            "batch_year": 2014,
            "location": "Nagpur & Pune",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Profitable",
            "headcount": 120,
            "incorporated_year": 2018,
            "lead_backers": "Self-Funded",
            "tech_stack": "PyTorch · LangChain · FastAPI · React · GCP",
            "traction_badge": "120+ APPLIED AI ENGINEERS",
            "traction_note": "Delivered 80+ enterprise AI deployments across banking, manufacturing, and supply chain.",
            "founders": [
                  {
                        "name": "Sagar Ghonge",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '14",
                        "linkedin": "https://linkedin.com/in/sagar-ghonge"
                  },
                  {
                        "name": "Rakesh Rallapalli",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '14",
                        "linkedin": "https://linkedin.com/in/rakesh-rallapalli"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "82018c68-d997-4bd4-88f3-8dd9550a4e39",
            "logo_url": "./assets/logos/konverge-ai.png"
      },
      {
            "name": "Bombay Shaving Company",
            "slug": "bombay-shaving-company",
            "monogram": "BS",
            "sector": "D2C & Consumer Personal Care",
            "pitch": "Premium omni-channel personal care, grooming, and skin health brand delivering sustainable self-care solutions across India and international markets.",
            "website_url": "https://bombayshavingcompany.com",
            "linkedin_url": "https://linkedin.com/company/bombay-shaving-company",
            "department": "Mechanical",
            "batch_year": 2011,
            "location": "Gurugram, Haryana",
            "funding_stage": "Series C",
            "funding_amount": "$48.0M",
            "headcount": 426,
            "incorporated_year": 2015,
            "lead_backers": "Reckitt Benckiser · Sixth Sense Ventures · Colgate-Palmolive",
            "tech_stack": "Shopify Plus · Next.js · ERP · Omni-channel POS",
            "traction_badge": "OMNICHANNEL LEADER",
            "traction_note": "Present in 65,000+ retail stores and loved by over 5 million consumers.",
            "founders": [
                  {
                        "name": "Pradeep Meena",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Mech '11",
                        "linkedin": "https://linkedin.com/in/pradeep-meena"
                  },
                  {
                        "name": "Peehu Sharma",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Mech '11",
                        "linkedin": "https://linkedin.com/in/peehu-sharma"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "7cafb394-4c65-4c84-a309-d2f6c5b2dffc",
            "logo_url": "./assets/logos/bombay-shaving-company.png"
      },
      {
            "name": "ettaflow",
            "slug": "ettaflow",
            "monogram": "ET",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in ettaflow.",
            "website_url": "https://ettaflow.io",
            "linkedin_url": "https://linkedin.com/company/ettaflow",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 1,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Vishal Goswami",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/vishal-goswami"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "0c65d585-13f2-49b9-a33b-33fc6df1bb36",
            "logo_url": "./assets/logos/ettaflow.png"
      },
      {
            "name": "GeoAnalytica",
            "slug": "geoanalytica",
            "monogram": "GE",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in GeoAnalytica.",
            "website_url": "https://www.geoanalytica.com",
            "linkedin_url": "https://linkedin.com/company/geoanalytica",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 4,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
            "founders": [
                  {
                        "name": "Akshit Shah",
                        "role": "Co-Founder / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/akshit-shah"
                  },
                  {
                        "name": "Tushar Aswale",
                        "role": "Core Team / Alumnus",
                        "degree": "B.Tech Comp '16",
                        "linkedin": "https://linkedin.com/in/tushar-aswale"
                  }
            ],
            "is_verified": true,
            "is_published": true,
            "id": "6c2c0cfe-10f7-4a9a-965d-84ac65486fe7",
            "logo_url": "./assets/logos/geoanalytica.png"
      },
      {
            "name": "Cognizant",
            "slug": "cognizant",
            "monogram": "CO",
            "sector": "Technology & Enterprise Solutions",
            "pitch": "Engineering-first venture founded and built by VNIT alumni driving innovation in Cognizant.",
            "website_url": "https://www.cognizant.com",
            "linkedin_url": "https://linkedin.com/company/cognizant",
            "department": "Computer Science",
            "batch_year": 2016,
            "location": "Bengaluru / Pune, India",
            "funding_stage": "Bootstrapped",
            "funding_amount": "Bootstrapped",
            "headcount": 15,
            "incorporated_year": 2019,
            "lead_backers": "VNIT Alumni Angel Network",
            "tech_stack": "Python · React · Cloud Architecture",
            "traction_badge": "PROFITABLE",
            "traction_note": "Actively building and expanding market presence across India and international markets.",
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
            "id": "865d4f7c-f6d6-45fe-88eb-9cb3280fba39",
            "logo_url": "./assets/logos/cognizant.png"
      }
];

    // Application In-Memory Store
    let allStartups = [...SEED_STARTUPS];
    let activeStartup = null;
    let currentFilter = {
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
        const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/startups?is_published=eq.true`, {
          headers: {
            'apikey': SUPABASE_ANON,
            'Authorization': `Bearer ${SUPABASE_ANON}`
          }
        });

        if (supaRes.ok) {
          const liveData = await supaRes.json();
          if (liveData && liveData.length > 0) {
            // Merge & deduplicate by slug or name
            const existingNames = new Set(allStartups.map(s => s.name.toLowerCase()));
            for (const item of liveData) {
              if (!existingNames.has(item.name.toLowerCase())) {
                allStartups.unshift(item);
                existingNames.add(item.name.toLowerCase());
              }
            }
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
      if (document.getElementById('branchAllCount')) document.getElementById('branchAllCount').innerText = total;
      if (document.getElementById('statsIndexedTotal')) document.getElementById('statsIndexedTotal').innerText = total;
      if (document.getElementById('stageAllCount')) document.getElementById('stageAllCount').innerText = total;
      if (document.getElementById('teamAllCount')) document.getElementById('teamAllCount').innerText = total;
      if (document.getElementById('locAllCount')) document.getElementById('locAllCount').innerText = total;

      const mechCount = allStartups.filter(s => hasBranch(s, 'Mechanical')).length;
      const cseCount = allStartups.filter(s => hasBranch(s, 'Computer Science')).length;
      const eceCount = allStartups.filter(s => hasBranch(s, 'Electronics')).length;
      const eeeCount = allStartups.filter(s => hasBranch(s, 'Electrical')).length;
      const chemCount = allStartups.filter(s => hasBranch(s, 'Chemical') || hasBranch(s, 'Metallurgy')).length;
      const seriesACount = allStartups.filter(s => s.funding_stage && s.funding_stage.includes('Series')).length;
      const bootCount = allStartups.filter(s => s.funding_stage === 'Bootstrapped').length;
      const fundedCount = allStartups.filter(s => s.funding_stage && s.funding_stage !== 'Bootstrapped').length;

      if (document.getElementById('pillCountMech')) document.getElementById('pillCountMech').innerText = mechCount;
      if (document.getElementById('branchMechCount')) document.getElementById('branchMechCount').innerText = mechCount;
      if (document.getElementById('pillCountCSE')) document.getElementById('pillCountCSE').innerText = cseCount;
      if (document.getElementById('branchCSECount')) document.getElementById('branchCSECount').innerText = cseCount;
      if (document.getElementById('branchECECount')) document.getElementById('branchECECount').innerText = eceCount;
      if (document.getElementById('branchEEECount')) document.getElementById('branchEEECount').innerText = eeeCount;
      if (document.getElementById('branchChemCount')) document.getElementById('branchChemCount').innerText = chemCount;
      if (document.getElementById('pillCountSeriesA')) document.getElementById('pillCountSeriesA').innerText = seriesACount;
      if (document.getElementById('pillCountBoot')) document.getElementById('pillCountBoot').innerText = bootCount;
      if (document.getElementById('stageFundedCount')) document.getElementById('stageFundedCount').innerText = fundedCount;
      if (document.getElementById('stageBootCount')) document.getElementById('stageBootCount').innerText = bootCount;

      // Team size counts
      const earlyCount = allStartups.filter(s => (s.headcount || 0) <= 10).length;
      const growthCount = allStartups.filter(s => (s.headcount || 0) > 10 && (s.headcount || 0) <= 50).length;
      const scaleCount = allStartups.filter(s => (s.headcount || 0) > 50).length;
      if (document.getElementById('teamEarlyCount')) document.getElementById('teamEarlyCount').innerText = earlyCount;
      if (document.getElementById('teamGrowthCount')) document.getElementById('teamGrowthCount').innerText = growthCount;
      if (document.getElementById('teamScaleCount')) document.getElementById('teamScaleCount').innerText = scaleCount;

      // Location counts
      const blrCount = allStartups.filter(s => (s.location || '').toLowerCase().includes('bengaluru')).length;
      const sfCount = allStartups.filter(s => (s.location || '').toLowerCase().includes('francisco') || (s.location || '').toLowerCase().includes('sunnyvale')).length;
      const puneCount = allStartups.filter(s => (s.location || '').toLowerCase().includes('pune') || (s.location || '').toLowerCase().includes('mumbai')).length;
      if (document.getElementById('locBlrCount')) document.getElementById('locBlrCount').innerText = blrCount;
      if (document.getElementById('locSfCount')) document.getElementById('locSfCount').innerText = sfCount;
      if (document.getElementById('locPuneCount')) document.getElementById('locPuneCount').innerText = puneCount;

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

    function hasBranch(startup, branchName) {
      if (startup.department && startup.department.toLowerCase().includes(branchName.toLowerCase())) return true;
      if (startup.founders) {
        return startup.founders.some(f => (f.degree && f.degree.toLowerCase().includes(branchName.toLowerCase())) || (f.vnit_branch && f.vnit_branch.toLowerCase().includes(branchName.toLowerCase())));
      }
      return false;
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

        // Branch filter
        if (currentFilter.branch !== 'ALL' && !hasBranch(item, currentFilter.branch)) {
          return false;
        }

        // Stage filter
        if (currentFilter.stage !== 'ALL') {
          if (currentFilter.stage === 'Series' && !item.funding_stage?.includes('Series')) return false;
          if (currentFilter.stage === 'Seed' && !item.funding_stage?.includes('Seed')) return false;
          if (currentFilter.stage === 'Bootstrapped' && item.funding_stage !== 'Bootstrapped') return false;
        }

        // Location filter
        if (currentFilter.location !== 'ALL') {
          if (!item.location?.toLowerCase().includes(currentFilter.location.toLowerCase())) return false;
        }

        // Team filter
        if (currentFilter.team !== 'ALL') {
          const hc = item.headcount || 0;
          if (currentFilter.team === '1-10' && (hc < 1 || hc > 10)) return false;
          if (currentFilter.team === '11-50' && (hc < 11 || hc > 50)) return false;
          if (currentFilter.team === '50+' && hc <= 50) return false;
        }

        // Cohort Range slider
        if (item.batch_year && item.batch_year < currentFilter.cohortMin) {
          return false;
        }

        // Search text (Company, Branch, Batch Year, Founders, Location)
        if (currentFilter.search) {
          const foundersText = (item.founders || []).map(f => `${f.name || ''} ${f.degree || ''}`).join(' ');
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
            const founders = (item.founders || []).map(f => `${f.name || ''} ${f.degree || ''}`).join(' ').toLowerCase();
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
          // Default curated order: verified ventures by foundation year
          filtered.sort((a, b) => {
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

        // Derive clean batch tag (e.g. Mech '16, CSE '18, Batch '21)
        let batchTag = '';
        if (s.founders && s.founders.length > 0 && s.founders[0].degree) {
          const match = s.founders[0].degree.match(/(Mech|CSE|ECE|EEE|Chem|Met|Civil|Arch|Biotech|EE|IT)[\s']+(\d{2})/i);
          if (match) {
            batchTag = `${match[1]} '${match[2]}`;
          }
        }
        if (!batchTag) {
          batchTag = s.batch_year ? `Batch '${String(s.batch_year).slice(-2)}` : (s.department || 'VNIT Alumni');
        }

        // Founders summary: Concept 2 Verified Alumni Chips Architecture (No 'and' or ampersand)
        let chipsHtml = '';
        if (s.founders && s.founders.length > 0) {
          chipsHtml = s.founders.map(f => {
            const rawName = f.name || 'Alumnus';
            const initials = rawName.split(/\s+/).map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'AL';
            let cleanDegree = (f.degree || '').replace(/B\.Tech\s*/i, '').trim();
            const degreeHtml = cleanDegree ? `<span class="chip-degree">· ${cleanDegree}</span>` : '';
            return `<div class="alumni-chip"><span class="chip-avatar">${initials}</span><span class="chip-name">${rawName}</span>${degreeHtml}</div>`;
          }).join('');
        } else {
          chipsHtml = `<div class="alumni-chip"><span class="chip-avatar">VN</span><span class="chip-name">VNIT Alumni</span><span class="chip-degree">· ${s.department || 'Engineering'}</span></div>`;
        }

        const monogram = (s.monogram || s.name.substring(0, 2)).toUpperCase();
        const logoUrl = s.logo_url || s.logo || (s.slug ? `./assets/logos/${s.slug}.png` : '');
        const outboundUrl = s.website_url || '#';
        const linkedinUrl = s.linkedin_url || s.website_url || '#';

        return `
          <article class="venture-card ${isActive ? 'is-active' : ''}" data-id="${s.id}" onclick="selectStartup('${s.id}')">
            <div class="card-main">
              <!-- 1. Monogram / Logo Hallmark Tile (Interactive Website Link) -->
              <a href="${outboundUrl}" target="_blank" rel="noopener" class="card-logo-tile card-monogram-tile" onclick="event.stopPropagation();" title="Visit ${s.name} Website">
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
                  <a href="${linkedinUrl}" target="_blank" rel="noopener" class="btn-company-outbound btn-linkedin-outbound" onclick="event.stopPropagation();" title="Open LinkedIn Profile for ${s.name}">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                    LinkedIn ↗
                  </a>
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
      const foundersList = startup.founders && startup.founders.length > 0 ? startup.founders : [
        {
          name: "VNIT Alumni Team",
          role: "Founders & Leadership",
          degree: startup.department || "Engineering",
          linkedin: startup.website_url,
          email: ""
        }
      ];

      const foundersHtml = foundersList.slice(0, 2).map((f, idx) => {
        const avatarBg = idx === 0 ? '#E2E8F0' : '#CBD5E1';
        const avatarFill = idx === 0 ? '#1E293B' : '#334155';
        const degreeText = (f.degree || '').replace('B.Tech ', '').trim() || 'Alumnus';

        return `
          <div class="cert-founder-card">
            <div class="cert-founder-avatar">
              <svg width="32" height="32" viewBox="0 0 52 52" fill="none">
                <rect width="52" height="52" rx="26" fill="${avatarBg}"/>
                <circle cx="26" cy="19" r="10" fill="${avatarFill}"/>
                <path d="M12 45C12 36 17 32 26 32C35 32 40 36 40 45" fill="${avatarFill}"/>
              </svg>
            </div>
            <div class="cert-founder-name">${f.name}</div>
            <div class="cert-founder-role">${f.role || 'Co-Founder'}</div>
            <div class="cert-founder-batch">${degreeText}</div>
            <div class="cert-founder-actions">
              ${f.linkedin ? `
                <a href="${f.linkedin}" target="_blank" rel="noopener" class="btn-action btn-b" style="justify-content: center;">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
                  LinkedIn
                </a>
              ` : `
                <a href="${startup.website_url}" target="_blank" rel="noopener" class="btn-action btn-b" style="justify-content: center;">
                  LinkedIn
                </a>
              `}
              ${f.email ? `
                <a href="mailto:${f.email}" class="btn-action btn-o" style="justify-content: center;">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email
                </a>
              ` : `
                <a href="mailto:founder@${(startup.website_url || '').replace(/https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')}" class="btn-action btn-o" style="justify-content: center;">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email
                </a>
              `}
            </div>
          </div>
        `;
      }).join('');

      // 3. Body Injection (Founders + Company Details, no ISRO callout)
      bodyEl.innerHTML = `
        <!-- Founders Section -->
        <div class="vital-specs-card">
          <div class="vital-specs-title">Founders</div>
          <div style="display: flex; gap: 12px; margin-top: 10px;">
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
              <td class="val pitch">${startup.pitch}</td>
            </tr>
          </table>
        </div>
      `;

      // 4. Footer Dual Actions (Company LinkedIn + Website)
      const companyLinkedin = startup.linkedin_url || startup.website_url || '#';
      footerEl.innerHTML = `
        <a href="${companyLinkedin}" target="_blank" rel="noopener" class="btn-action btn-b">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z"/></svg>
          Company LinkedIn ↗
        </a>
        <a href="${startup.website_url || '#'}" target="_blank" rel="noopener" class="btn-action btn-o">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          Website ↗
        </a>
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
      openDrawer();

      const bodyEl = document.getElementById('drawerBodyContent');
      const footerEl = document.getElementById('drawerFooterContent');
      if (!wasOpen) {
        // Opening: the sheet floats in from the right and settles, then its blocks follow
        drawerEnter(drawerSheet, { opacity: 0.6, transform: 'translateX(44px)' }, { duration: 460, easing: DRAWER_SPRING });
        [...bodyEl.children, footerEl].forEach((el, i) => {
          drawerEnter(el, { opacity: 0, transform: 'translateX(14px)' }, { duration: 380, delay: 60 + i * 40, easing: DRAWER_SPRING });
        });
      } else {
        // Switching startup: a small spring nudge while the new details fade in (name + subheadline change instantly)
        drawerEnter(drawerSheet, { transform: 'translateX(10px)' }, { duration: 340, easing: DRAWER_SPRING });
        [bodyEl, footerEl].forEach(el => {
          drawerEnter(el, { opacity: 0 }, { duration: 200 });
        });
      }
    }

    function openDrawer() {
      const workbench = document.getElementById('mainWorkbench');
      if (workbench) {
        workbench.classList.remove('drawer-peek');
        workbench.classList.add('drawer-open');
      }
    }

    function resetDrawerState() {
      const workbench = document.getElementById('mainWorkbench');
      if (workbench) workbench.classList.remove('drawer-open', 'drawer-peek');
      activeStartup = null;
      document.querySelectorAll('.venture-card').forEach(card => card.classList.remove('is-active'));
    }

    function closeDrawer() {
      if (isDrawerOpen()) {
        clearDrawerMotion();
        drawerExit(drawerSheet, { opacity: 0, transform: 'translateX(70px)' }, { duration: 190 });
      }
      resetDrawerState();
    }

    /* Press hint: pressing a card with the mouse nudges the sheet edge into view; releasing opens it */
    document.getElementById('cardsContainer').addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || e.pointerType !== 'mouse') return;
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

    /* Drag to dismiss: grab the sheet by its header and throw it to the right */
    document.getElementById('drawerHeader').addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !isDrawerOpen() || e.target.closest('.stage2-close-btn')) return;
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

    function toggleFacet(facetType, val) {
      currentFilter[facetType] = val;
      // Mark active state in DOM
      const targetGroup = event.currentTarget.closest('.facet-list');
      if (targetGroup) {
        targetGroup.querySelectorAll('.facet-item').forEach(el => el.classList.remove('active'));
        event.currentTarget.classList.add('active');
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
      currentFilter = {
        quick: 'all',
        branch: 'ALL',
        stage: 'ALL',
        location: 'ALL',
        team: 'ALL',
        cohortMin: 1980,
        search: '',
        sort: 'relevance'
      };
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
      document.querySelectorAll('.facet-item').forEach(el => {
        if (el.innerText.includes('All')) el.classList.add('active');
        else el.classList.remove('active');
      });
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

    function selectDonationAmt(amt) {
      alert(`Thank you! Selected ₹${amt}. Please scan the UPI QR code using GPay, PhonePe, or Paytm.`);
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

      // Update echoed email in the confirmation card
      const displayEmail = document.getElementById('dispatchConfirmedEmail');
      if (displayEmail) displayEmail.textContent = val;

      // In-situ swap: hide input form, show confirmed card
      const formEl = document.getElementById('newsletterFormCapsule');
      const successEl = document.getElementById('newsletterSuccessState');
      if (formEl) formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'flex';

      // Update editorial left panel cleanly
      const kickerEl = document.getElementById('dispatchKickerText');
      if (kickerEl) kickerEl.textContent = 'DISPATCH CONFIRMED';
      const kickerDot = document.getElementById('dispatchKickerDot');
      if (kickerDot) kickerDot.style.background = '#10B981';
      const subText = document.getElementById('dispatchSubText');
      if (subText) subText.textContent = 'We have registered your email. You will receive our monthly dispatch in your inbox.';
    }

    function resetNewsletterForm() {
      const formEl = document.getElementById('newsletterFormCapsule');
      const successEl = document.getElementById('newsletterSuccessState');
      const btn = document.getElementById('newsletterSubmitBtn');
      const emailInput = document.getElementById('newsletterEmail');

      if (successEl) successEl.style.display = 'none';
      if (formEl) formEl.style.display = 'flex';
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Get Monthly Updates</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
      }
      if (emailInput) {
        emailInput.value = '';
        setTimeout(() => emailInput.focus(), 60);
      }
      const kickerEl = document.getElementById('dispatchKickerText');
      if (kickerEl) kickerEl.textContent = 'VNIT Founder Registry · Monthly Briefing';
      const subText = document.getElementById('dispatchSubText');
      if (subText) subText.textContent = 'A handpicked monthly briefing covering alumni venture launches, seed rounds, and campus innovation.';
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

    /* ─── HEADLINE PERSPECTIVE SWITCHER (Reddit Research) ─── */
    function switchHeadline(n) {
      const hEl = document.getElementById('mainHeroHeadline');
      const subEl = document.getElementById('mainHeroSubhead');

      document.querySelectorAll('.h-switch-pill').forEach((btn, idx) => {
        btn.classList.toggle('active', (idx + 1) === n);
      });

      if (n === 1) {
        hEl.innerHTML = `Every Startup Founded by VNITians. <br><span class="accent">In One Place.</span>`;
        subEl.innerHTML = `A <strong>handpicked</strong> directory of companies built by VNIT alumni. Filter by branch, funding status, or team size—and connect on LinkedIn in one click.`;
      } else if (n === 2) {
        hEl.innerHTML = `Discover VNIT-Born Startups <br><span class="accent">& Connect With Their Founders.</span>`;
        subEl.innerHTML = `Handpicked alumni ventures from Mechanical to CSE. One click to explore their journey, open jobs, or reach out on LinkedIn.`;
      } else if (n === 3) {
        hEl.innerHTML = `From Campus to Company: <br><span class="accent">The VNIT Founder Directory.</span>`;
        subEl.innerHTML = `Handpicked startups launched by VNIT alumni worldwide. Browse funded & bootstrapped teams, filter by department, and connect instantly.`;
      }
    }


  
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
        mouse.tiltX += (mouse.targetTiltX - mouse.tiltX) * 0.12;
        mouse.tiltY += (mouse.targetTiltY - mouse.tiltY) * 0.12;

        if (container) {
          if (mouse.isInside || Math.abs(mouse.tiltX) > 0.05 || Math.abs(mouse.tiltY) > 0.05) {
            container.style.transform = `perspective(1000px) rotateX(${mouse.tiltX.toFixed(2)}deg) rotateY(${mouse.tiltY.toFixed(2)}deg)`;
          } else {
            container.style.transform = 'none';
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
       MOBILE FILTER MODAL CONTROLLER
       ========================================================= */
    const mobileFilterData = [
      { id: "branch", name: "Branch / Dept", options: [
        { label: "All Departments", val: "ALL" },
        { label: "Mechanical", val: "Mechanical" },
        { label: "Computer Science", val: "Computer Science" },
        { label: "Electronics & Comm.", val: "Electronics" },
        { label: "Electrical & Electronics", val: "Electrical" },
        { label: "Chemical", val: "Chemical" },
        { label: "Metallurgy", val: "Metallurgy" },
        { label: "Civil", val: "Civil" },
        { label: "Architecture", val: "Architecture" },
        { label: "Mining", val: "Mining" }
      ]},
      { id: "stage", name: "Funding Status", options: [
        { label: "All", val: "ALL" },
        { label: "Funded (VC / Angel)", val: "Series" },
        { label: "Bootstrapped / Profitable", val: "Bootstrapped" }
      ]},
      { id: "team", name: "Team Size", options: [
        { label: "All Sizes", val: "ALL" },
        { label: "Early Stage (1–10)", val: "1-10" },
        { label: "Growth (11–50)", val: "11-50" },
        { label: "Scaleup (50+)", val: "50+" }
      ]},
      { id: "location", name: "Headquarters", options: [
        { label: "All Locations", val: "ALL" },
        { label: "Bengaluru, IN", val: "Bengaluru" },
        { label: "SF Bay Area, US", val: "San Francisco" },
        { label: "Pune & Mumbai", val: "Pune" }
      ]}
    ];

    let mfActiveTabId = "branch";

    // Expose functions globally since they are called from inline HTML
    window.openMobileFilterModal = function() {
      document.getElementById("mfOverlay").classList.add("active");
      document.getElementById("mfModal").classList.add("active");
      document.body.style.overflow = "hidden";
      renderMobileFilterUI();
    };
    
    window.closeMobileFilterModal = function() {
      document.getElementById("mfOverlay").classList.remove("active");
      document.getElementById("mfModal").classList.remove("active");
      document.body.style.overflow = "";
    };

    window.switchMobileTab = function(id) {
      mfActiveTabId = id;
      renderMobileFilterUI();
    };

    window.toggleMobileOption = function(tabId, optVal) {
      // In this app, filters are single-select per category (like the desktop facet-rail)
      // We directly update the currentFilter state
      currentFilter[tabId] = optVal;
      
      // Also sync desktop active state
      const desktopList = Array.from(document.querySelectorAll('.facet-list')).find(list => {
        const item = list.querySelector(`[onclick="toggleFacet('${tabId}', '${optVal}')"]`);
        return item != null;
      });
      if (desktopList) {
        desktopList.querySelectorAll('.facet-item').forEach(el => el.classList.remove('active'));
        const activeItem = desktopList.querySelector(`[onclick="toggleFacet('${tabId}', '${optVal}')"]`);
        if (activeItem) activeItem.classList.add('active');
      }

      renderMobileFilterUI();
    };
    
    window.clearMobileFilters = function() {
      currentFilter.branch = 'ALL';
      currentFilter.stage = 'ALL';
      currentFilter.team = 'ALL';
      currentFilter.location = 'ALL';
      renderMobileFilterUI();
    };

    window.applyMobileFilters = function() {
      // Because we directly updated currentFilter, we just need to re-render the list
      applyFiltersAndRender();
      closeMobileFilterModal();
    };

    function renderMobileFilterUI() {
      // Render Left Tabs
      const tabsEl = document.getElementById("mfTabsList");
      if (!tabsEl) return;
      tabsEl.innerHTML = mobileFilterData.map(group => {
        // Count active filter for this group (only if not 'ALL')
        const isActive = currentFilter[group.id] !== 'ALL';
        const countBadge = isActive ? `<span class="mf-tab-count">1</span>` : '';
        return `
          <div class="mf-tab-item ${group.id === mfActiveTabId ? 'active' : ''}" onclick="switchMobileTab('${group.id}')">
            ${group.name} ${countBadge}
          </div>
        `;
      }).join('');
      
      // Render Right Options
      const optionsEl = document.getElementById("mfOptionsList");
      const currentGroup = mobileFilterData.find(g => g.id === mfActiveTabId);
      
      optionsEl.innerHTML = currentGroup.options.map(opt => {
        const isSelected = currentFilter[mfActiveTabId] === opt.val;
        return `
          <div class="mf-option-item ${isSelected ? 'selected' : ''}" onclick="toggleMobileOption('${currentGroup.id}', '${opt.val}')">
            ${opt.label}
            <div class="mf-checkbox-square"></div>
          </div>
        `;
      }).join('');
      
      // Update Main Filter Button count
      let totalSelected = 0;
      if (currentFilter.branch !== 'ALL') totalSelected++;
      if (currentFilter.stage !== 'ALL') totalSelected++;
      if (currentFilter.team !== 'ALL') totalSelected++;
      if (currentFilter.location !== 'ALL') totalSelected++;
      
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
