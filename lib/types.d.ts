// Basic types
export interface Skill {
  name: string;
  level: number;
  position?: [number, number, number]; // For 3D visualization
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description?: string;
  degree?: string;
  institution?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  title?: string;
  company?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

// UI Effect Component Props
export interface TextRevealProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  colors?: string[];
  as?: React.ElementType;
  [key: string]: unknown;
}

export interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  glareClassName?: string;
  rotationIntensity?: number;
  glareOpacity?: number;
  glareSize?: number;
  borderRadius?: string;
  shadow?: boolean;
  [key: string]: unknown;
}

export interface FloatingParticlesProps {
  count?: number;
  color?: string;
  opacity?: number;
}

// Component-specific props
export interface SkillBarProps {
  skill: Skill;
  index: number;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface TimelineItemProps {
  item: WorkExperience | Education;
  index: number;
  type: "work" | "education";
}
