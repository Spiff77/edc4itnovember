export interface User{
  id: number,
  firstname: string,
  profilepicture: string,
  ishostedboarding: boolean,
  age: number,
  address?: {
    streetname: string,
    city: string
  }
}
