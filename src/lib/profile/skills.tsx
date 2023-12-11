import illustratorIcon from "./../../assets/svg/adobe-illustrator-svgrepo-com.svg";
import lightroomIcon from "./../../assets/svg/adobe-lightroom-svgrepo-com.svg";
import goIcon from "./../../assets/svg/go-svgrepo-com.svg";
import javaIcon from "./../../assets/svg/java-svgrepo-com.svg";
import nginxIcon from "./../../assets/svg/nginx-svgrepo-com.svg";
import nodejsIcon from "./../../assets/svg/node-svgrepo-com.svg";
import phpIcon from "./../../assets/svg/php3-svgrepo-com.svg";
import pythonIcon from "./../../assets/svg/python-svgrepo-com.svg";
import rubyIcon from "./../../assets/svg/ruby-svgrepo-com.svg";
import scssIcon from "./../../assets/svg/scss2-svgrepo-com.svg";
import typescriptIcon from "./../../assets/svg/typescript-official-svgrepo-com.svg";

export type Level = 1 | 2 | 3 | 4 | 5;

export const skillCategory = {
  Frontend: { label: "Frontend", cssClassSuffix: "frontend" },
  Backend: { label: "Backend", cssClassSuffix: "backend" },
  Infrastructure: { label: "Infrastructure", cssClassSuffix: "infrastructure" },
  Others: { label: "Others", cssClassSuffix: "others" },
};

export const skills: {
  size: "large" | "small";
  category: (typeof skillCategory)[keyof typeof skillCategory];
  label: string;
  using: number; // 経験年数
  icon?: React.FC<React.SVGProps<SVGElement>>;
  description: string[];
  frameworks: {
    label: string;
    description?: string;
    icon?: React.FC<React.SVGProps<SVGElement>>;
  }[];
  level: Level;
}[] = [
  {
    size: "small",
    category: skillCategory.Frontend,
    label: "Node.js",
    icon: nodejsIcon,
    description: ["npmライブラリ作成公開経験少し"],
    using: 8,
    frameworks: [{ label: "Jest" }],
    level: 3,
  },
  {
    // size: "large",
    size: "small",
    category: skillCategory.Frontend,
    label: "TypeScript",
    icon: typescriptIcon,
    description: [
      "Nextjs製webフロントエンドの開発業務(約4年)",
      "Nuxt.js v2.x での開発業務(昔。2~3年)",
      "nestjsは個人開発で時々利用",
    ],
    using: 6,
    frameworks: [
      { label: "React/Next.js" },
      { label: "nestjs" },
      { label: "Vue/Nuxt.js@2" },
      { label: "storybook" },
    ],
    level: 3,
  },
  {
    size: "small",
    category: skillCategory.Frontend,
    label: "CSS/SASS",
    icon: scssIcon,
    description: ["scss記法派", "(S)CSS Modules派"],
    using: 8,
    frameworks: [{ label: "scss" }],
    level: 3,
  },
  {
    size: "small",
    category: skillCategory.Backend,
    label: "PHP",
    icon: phpIcon,
    description: [
      "〜前職での開発業務",
      "現在は個人開発で主に使用",
      "昔WordPressテーマ・プラグイン開発業務も",
    ],
    using: 8,
    frameworks: [{ label: "Laravel 5.x~9.x" }, { label: "WordPress" }],
    level: 3,
  },
  {
    size: "small",
    category: skillCategory.Backend,
    label: "Python",
    icon: pythonIcon,
    description: ["バッチ処理で使用", "趣味で数値処理に少し使う程度"],
    using: 2,
    frameworks: [],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Backend,
    label: "Java",
    icon: javaIcon,
    description: ["現職での開発業務(Spring)", "学生時代にも一部研究で利用"],
    using: 3,
    frameworks: [{ label: "Spring Boot" }],
    level: 2,
  },
  {
    size: "small",
    category: skillCategory.Backend,
    label: "Go",
    icon: goIcon,
    description: ["副業・個人開発を中心にWebAPIの開発で使用"],
    using: 2,
    frameworks: [{ label: "Echo" }],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Backend,
    label: "Ruby",
    icon: rubyIcon,
    description: ["以前業務経験あり。もう忘れた"],
    using: 2,
    frameworks: [{ label: "Ruby on Rails" }],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "Nginx",
    icon: nginxIcon,
    description: ["運用頻度は高くないが、前職〜現職通じて運用あり"],
    using: 4,
    frameworks: [],
    level: 2,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "Docker",
    description: [
      "前職以降はコンテナベースのwebアプリケーション開発の従事がほとんど（本業・副業ともに）",
    ],
    using: 5,
    frameworks: [{ label: "Docker Compose" }],
    level: 2,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "Kubernetes",
    description: ["前職〜現職通じて運用あり"],
    using: 4,
    frameworks: [],
    level: 2,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "Prometheus/Grafana",
    description: [],
    using: 1,
    frameworks: [],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "AWS",
    description: ["前職・副業で運用経験あり"],
    using: 2,
    frameworks: [
      { label: "EC2" },
      { label: "ECS" },
      { label: "ECR" },
      { label: "ELB" },
      { label: "CloudFront" },
      { label: "S3" },
      { label: "Route53" },
      { label: "RDS" },
    ],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Infrastructure,
    label: "GCP",
    description: [
      "前職・副業で運用経験あり",
      "個人開発でもGAE/Cloud Runを利用",
    ],
    using: 2,
    frameworks: [],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Others,
    label: "Adobe Illustrator",
    description: ["学生時代から諸活動や趣味で使用"],
    icon: illustratorIcon,
    using: 4,
    frameworks: [],
    level: 2,
  },
  {
    size: "small",
    category: skillCategory.Others,
    label: "Adobe Lightroom",
    description: ["趣味。"],
    icon: lightroomIcon,
    using: 8,
    frameworks: [],
    level: 1,
  },
  {
    size: "small",
    category: skillCategory.Others,
    label: "Enginnering Management",
    description: ["最近はじめました。"],
    using: 1,
    frameworks: [],
    level: 1,
  },
];
