export enum View {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  STUDENT_DASHBOARD = 'STUDENT_DASHBOARD',
  TEACHER_DASHBOARD = 'TEACHER_DASHBOARD',
  TEACHER_ASSIGNMENTS = 'TEACHER_ASSIGNMENTS',
  TEACHER_RESOURCES = 'TEACHER_RESOURCES',
  ADD_RESOURCE = 'ADD_RESOURCE'
}

export enum Role {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export interface User {
  name: string;
  role: Role;
  avatar: string;
}

export interface Course {
  id: number;
  title: string;
  progress: number;
  color: string;
  image: string;
}

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  dueText: string;
  month: string;
  day: string;
  colorClass: string;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}