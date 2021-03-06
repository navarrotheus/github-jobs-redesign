export default interface JobDTO {
	id: string;
	type: string;
	url: string;
	created_at: string;
	company: string;
	company_url: string | null;
	location: string;
	title: string;
	description: string;
	how_to_apply: string;
	company_logo: string | null;
}
