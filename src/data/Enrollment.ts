import { IAlumn } from "./Alumns";
import { Course } from "./Courses";
import { User } from "./Users";

export interface Enrollment {
    id: string;
    courseId: string;
    alumnId: string;
    alumn?: IAlumn;
    course?: Course;
}

export interface CreateEnrollmentData {
    courseId: string | null,
    alumnId: string | null
}