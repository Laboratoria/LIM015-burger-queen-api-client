export interface UserI{
    _id?: string,
    email: string;
    password: string;
    roles: Rol;
}
export interface Rol{
    name?: string;
    admin: boolean;
  }