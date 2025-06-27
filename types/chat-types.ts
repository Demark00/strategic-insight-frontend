export type Message = {
  sender: "user" | "ai";
  text: string;
};

export type ChatStore = {
  documentId: string | null;
  messages: Message[];
  loading: boolean;
  setDocumentId: (id: string) => void;
  sendMessage: (message: string) => Promise<void>;
};
