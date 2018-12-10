
// Create the data model of a Task
export class Task {
    constructor(
        public userID?: string,
        public name?: string,
        public description?: string,
        public status?: string,
        public _id?: string,
    ) { }
}
