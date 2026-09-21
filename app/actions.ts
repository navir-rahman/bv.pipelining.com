
// 'use server';

// import { createUser, UserRole } from '@/lib/queries/users';
// import { revalidatePath } from 'next/cache';

// export async function handleAddUser(prevState: any, formData: FormData) {
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const role = (formData.get('role') as UserRole) || 'user';

//   try {
//     await createUser({ name, email, role, is_active: true });
//     revalidatePath('/users');
//     return { success: true, message: 'User added!' };
//   } catch (error) {
//     return { success: false, message: "error"};
//   }
// }




// export type FormState = {
//   success?: boolean;
//   errors?: Record<string, string>;
//   message?: string;
// };

// export async function handleContractorRegistration(
//   prevState: FormState | null,
//   formData: FormData
// ): Promise<FormState> {
//   // Extract values from FormData
//   const companyName = formData.get("company_name")?.toString().trim();
//   const firstName = formData.get("first_name")?.toString().trim();
//   const lastName = formData.get("last_name")?.toString().trim();
//   const repEmail = formData.get("rep_email")?.toString().trim();
//   const repPhone = formData.get("rep_phone")?.toString().trim();
//   const companyEmail = formData.get("company_email")?.toString().trim();
//   const companyPhone = formData.get("company_phone")?.toString().trim();
//   const companyWebsite = formData.get("company_website")?.toString().trim();
//   const services = formData.getAll("services") as string[];
//   const street1 = formData.get("street_1")?.toString().trim();
//   const street2 = formData.get("street_2")?.toString().trim();
//   const city = formData.get("city")?.toString().trim();
//   const state = formData.get("state")?.toString().trim();
//   const zip = formData.get("zip")?.toString().trim();
//   const bio = formData.get("bio")?.toString().trim();
//   const areasServiced = formData.get("areas_serviced")?.toString().trim();

//   // Vanilla Manual Validation
//   const errors: Record<string, string> = {};

//   if (!firstName) errors.first_name = "First name is required.";
//   if (!lastName) errors.last_name = "Last name is required.";
  
//   if (!repEmail || !repEmail.includes("@")) {
//     errors.rep_email = "Valid representative email is required.";
//   }
  
//   if (!repPhone) errors.rep_phone = "Phone number is required.";
  
//   if (!companyEmail || !companyEmail.includes("@")) {
//     errors.company_email = "Valid company email is required.";
//   }
  
//   if (!services || services.length === 0) {
//     errors.services = "Please select at least one service.";
//   }

//   if (!bio || bio.length < 10) {
//     errors.bio = "Bio must be at least 10 characters long.";
//   }

//   // If validation fails, return early with errors
//   if (Object.keys(errors).length > 0) {
//     return {
//       success: false,
//       errors,
//       message: "Please fill out all required fields correctly.",
//     };
//   }

//   // Combine validated data into an object
//   const registrationData = {
//     companyName,
//     representative: {
//       firstName,
//       lastName,
//       email: repEmail,
//       phone: repPhone,
//     },
//     companyEmail,
//     companyPhone,
//     companyWebsite,
//     services,
//     address: {
//       street1,
//       street2,
//       city,
//       state,
//       zip,
//     },
//     bio,
//     areasServiced,
//   };

//   try {
//     // Process registration data (Database write, API payload, etc.)

//     return {
//       success: true,
//       errors: {},
//       message: "Contractor registration submitted successfully!",
//     };
//   } catch (error) {
//     console.error("Submission error:", error);
//     return {
//       success: false,
//       message: "An unexpected error occurred. Please try again later.",
//     };
//   }
// }