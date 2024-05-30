export interface StudentInterface
{
    studentNumber: string,
    emailAddress: string,
    gender: string,
    firstName: string,
    lastName: string,
    idNumber?: string,
    contactNumber: string,
    passportNumber?: string | null,
    disability?: string | null
}