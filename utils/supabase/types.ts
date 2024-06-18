type UserId = number;

export type User = {
  user_id: UserId;
  email_address: string;
  language: string;
  created_at: string; //timestamp?
};

export type EmailsContent = {
  email_content_id: string;
  user_id: UserId;
  email_content: string;
  subject: string;
  subText: string;
  created_at: string; //timestamp?
};
