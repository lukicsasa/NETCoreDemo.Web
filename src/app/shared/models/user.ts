export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: Role;
}

class Role {
  id: number;
  name: string;
}
