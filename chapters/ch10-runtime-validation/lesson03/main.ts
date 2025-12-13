import * as z from "zod";

const JelloIssueSchema = z.object({
  id: z.string(),
  title: z.string().min(1)
});

const JelloIssueArraySchema = z.array(JelloIssueSchema);

export type JelloIssue = z.infer<typeof JelloIssueSchema>;

//  NOTE: res is an array of objects, each should be of type JelloIssue
export async function fetchJelloIssue(): Promise<JelloIssue[]> {
  const res = await fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/issues");
  return JelloIssueArraySchema.parse(await res.json());
}
