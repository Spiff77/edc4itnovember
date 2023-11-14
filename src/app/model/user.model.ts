export interface User{
  id: number,
  firstname: string,
  age: number,
  address?: {
    streetname: string,
    city: string
  }
  ishostedboarding?: boolean,
  profilepicture?: string,
}
