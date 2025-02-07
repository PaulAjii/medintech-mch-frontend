export interface LocationData {
	state: string;
	local_government: string;
}

export interface HospitalFormData {
	hospitalInfo: {
		name: string;
		tier: string;
		address: string;
		phone_number: string;
		email_address: string;
	};
	password: string;
}
