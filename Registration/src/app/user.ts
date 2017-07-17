export class User {
  constructor(
    // public id: number = null
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public confirm_pwd: string = "",
    public street_addy: string = "",
    public unit_num: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: boolean = true,

    // public created_at: Date = new Date(),
    // public updated_at: Date = new Date()
  ){}

}
