export interface UserI{
    email: string;
    password: string;
    roles: Rol;
}
export interface Rol{
    name?: string;
    admin: boolean;
  }