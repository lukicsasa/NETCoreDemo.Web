import { User } from "../../../shared/models/user";
import { Subject } from "./subject";

export class Exam {
    Date: Date;
    Grade: number;
    Subject: Subject;
    User: User;
}