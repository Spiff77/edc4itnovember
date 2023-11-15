export interface User{
  id: number,
  username: string,
  age: number,
  address?: {
    street: string,
    city: string
  }
  ishostedboarding?: boolean,
  profilepicture?: string,
}
