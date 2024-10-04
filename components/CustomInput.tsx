import React from "react";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
	name: FieldPath<z.infer<typeof formSchema>>;
	label: string;
	placeholder: string;
	control: Control<z.infer<typeof formSchema>>;
}

function CustomInput({ name, label, placeholder, control }: CustomInputProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage className="form-message mt-2" />
				</FormItem>
			)}
		/>
	);
}

export default CustomInput;
