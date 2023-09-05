import { error } from 'console';
import { z } from 'zod';

export const schema = z.object({
	data: z.coerce.date({
		required_error: 'Please select a date ',
		invalid_type_error: "That's not a date!",
	}),
	case_number: z
		.string()
		.trim()
		.nonempty('Number is required')
		.min(3, { message: 'Must be 3 or more characters long' })
		.max(8, { message: 'Must be 8 or fewer characters long' }),

	claimant_name: z
		.string()
		.trim()
		.nonempty('Name is required')
		.min(3, { message: 'Must be 3 or more characters long' }),
	claimant_registration: z.string().trim().nonempty('Registration number is required'),
	claimant_address: z.string().trim().nonempty('Address is required'),
	claimant_email: z
		.string()
		.trim()
		.email({ message: 'Invalid email address' })
		.nonempty('Email is required'),

	claimant_phone_code: z.string().trim().nonempty('Phone code is required'),
	claimant_phone_number: z.string().trim().nonempty('Phone number is required'),

	debtor_name: z
		.string()
		.trim()
		.min(3, { message: 'Must be 3 or more characters long' })
		.nonempty('Name is required'),
	debtor_registration: z.string().trim().nonempty('Registration number is required'),

	confirm_information: z.boolean(),
});
