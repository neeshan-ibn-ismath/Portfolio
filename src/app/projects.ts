export type Project = {
  id: string;
  number: string;
  title: string;
  category: "AI & automation" | "Full stack";
  label: string;
  description: string;
  tags: string[];
  overview: string;
  role: string;
  details: { title: string; text: string }[];
  note?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    id: "clip-studio", number: "01", title: "Clip Studio", category: "AI & automation",
    label: "FEATURED PROJECT · IN DEVELOPMENT",
    description: "Long recordings. Worthwhile moments. A local video workspace that connects AI highlight discovery, captions, face tracking, and real video exports.",
    tags: ["Node.js", "FFmpeg", "Whisper.cpp", "Ollama", "ONNX Runtime"],
    overview: "A personal project exploring an end-to-end video editing workflow on a local computer. Creators can import footage, discover promising speech-based highlights, refine their selections, and export clips in different formats. Built iteratively with AI-assisted development.",
    role: "Personal project · product direction & AI-assisted development",
    details: [
      { title: "Find the moment", text: "Ollama and Qwen3 analyze overlapping transcript windows to suggest short clips, longer continuous highlights, or custom durations. Source-backed ranges and duplicate filtering keep suggestions tied to the recording." },
      { title: "Keep the context", text: "Whisper.cpp generates English captions locally. Captions can be edited, previewed, burned into MP4 exports, or downloaded as clip-relative SRT files." },
      { title: "Frame and export", text: "ONNX Runtime runs face detection for a one-person auto-follow crop. FFmpeg handles portrait, square, and original-format H.264/AAC exports." },
      { title: "Recover gracefully", text: "Transcription sections and analysis windows are checkpointed to disk. Cancellation and retry reuse completed work when the settings and transcript still match." },
    ],
    note: "Local development prototype. Highlight discovery currently analyzes English speech, not visual events. Suggestions need human review and trim adjustment. No public demo or repository yet.",
  },
  {
    id: "dataverse", number: "02", title: "Dataverse", category: "AI & automation",
    label: "NATURAL LANGUAGE · DATA VISUALIZATION",
    description: "Ask a question. Explore your data. Natural-language queries become SQL and customizable charts and tables.",
    tags: ["React", "Django REST", "LLMs", "SQLite", "Cypress"],
    overview: "A university software development project that connects external databases and turns natural-language questions into SQL queries, with charts and tables to help users explore the results.",
    role: "Full-stack developer & team leader · Level 2 project",
    details: [
      { title: "An accessible query workflow", text: "Users describe what they want to know in natural language, reducing the need to write queries manually." },
      { title: "From data to understanding", text: "The application presents query results through customizable charts and tables, combining a React interface with a Django REST backend." },
      { title: "Team delivery", text: "Led development as the team leader and contributed across the full stack. The project received an A grade." },
    ], source: "https://github.com/shdkavishka/Dataverse",
  },
  {
    id: "admissions", number: "03", title: "A clearer path to university", category: "AI & automation",
    label: "AI RECOMMENDATIONS · FINAL-YEAR RESEARCH",
    description: "Personalized ICT degree recommendations and explainable admission guidance for Sri Lankan GCE A/L students.",
    tags: ["Machine learning", "Rule-based analysis", "Explainable AI"],
    overview: "A final-year research project combining machine learning and rule-based analysis to help Sri Lankan GCE A/L ICT applicants explore university options.",
    role: "Final-year research project · University of Moratuwa",
    details: [
      { title: "Hybrid reasoning", text: "Machine learning and rule-based analysis work together to produce personalized ICT degree recommendations and admission probability estimates." },
      { title: "Explainable guidance", text: "The system aims to make recommendations understandable so students can consider the reasoning behind their options." },
    ], note: "Research project. Recommendations and probability estimates are guidance, not admission decisions.",
  },
  {
    id: "commerce", number: "04", title: "Commerce, connected", category: "Full stack",
    label: "MICROSERVICES · ENTERPRISE APPLICATION",
    description: "An e-commerce application built around independent services for users, products, payments, inventory, orders, and carts.",
    tags: ["Next.js", "Spring Boot", "MongoDB", "PostgreSQL"],
    overview: "An Enterprise Application Development module project using a microservices architecture. Independent services communicate through APIs to support the core e-commerce workflow.",
    role: "University project · Enterprise Application Development",
    details: [
      { title: "Separate responsibilities", text: "User, authentication, product, payment, inventory, order, and cart services each handle a distinct part of the application." },
      { title: "A connected experience", text: "A Next.js frontend connects to Java Spring Boot services, with MongoDB and PostgreSQL in the technology stack." },
    ],
  },
];
