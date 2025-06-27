import { create } from "zustand";
import axios from "@/lib/axios"; // our Axios instance that attaches token
import { ChatStore } from "@/types/chat-types"; // types: documentId, messages[], loading

export const useChatStore = create<ChatStore>((set, get) => ({
    documentId: null,
    messages: [],
    loading: false,

    setDocumentId: (id: string) => {
        set({ documentId: id, messages: [] }); // reset chat for new document
    },

    sendMessage: async (question: string) => {
        const { documentId, messages } = get();
        if (!documentId) {
            console.error("❌ No document ID selected");
            return;
        }

        // Step 1: Optimistically add user question to messages
        set({
            messages: [...messages, { sender: "user", text: question }],
            loading: true,
        });

        try {
            // Step 2: Send to backend
            const res = await axios.post("/chat", {
                documentId,
                question,
            });

            const answer = res.data.answer || "⚠️ No response from LLM";

            // Step 3: Append AI answer
            set({
                messages: [
                    ...get().messages,
                    { sender: "ai", text: answer }
                ],
                loading: false,
            });
        } catch (err) {
            console.error("❌ Chat error:", err);
            set({
                messages: [
                    ...get().messages,
                    { sender: "ai", text: "❌ Error getting response from AI." }
                ],
                loading: false,
            });
        }
    },
}));
