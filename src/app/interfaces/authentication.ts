/**
 * Authentication Interfaces
 */

import { FormControl } from "@angular/forms";

export interface IRegister {
    email: String,
    password: String,
    confirmPassword: String
}

export interface ILogin {
    email: String,
    password: String,
}