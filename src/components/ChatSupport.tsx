import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "support", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "support",
          text: "Thanks for reaching out! For detailed inquiries, please visit our Contact page — we respond within 2 business days.",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <div className="w-80 bg-card rounded-xl shadow-2xl border border-border flex flex-col animate-scale-in mb-4">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="font-semibold text-primary">Quick Help</span>
            <button
              className="text-muted-foreground hover:text-destructive transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div
            className="flex-1 px-4 py-2 overflow-y-auto"
            style={{ maxHeight: "250px" }}
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-3 py-2 rounded-lg text-sm max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                className="flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Type a quick question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                aria-label="Chat message input"
              />
              <button
                className="bg-secondary text-secondary-foreground rounded-lg p-2 hover:bg-primary/90 transition"
                onClick={handleSend}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <Link
              to="/contact"
              className="text-xs text-primary hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Need a detailed response? Email us →
            </Link>
          </div>
        </div>
      )}
      <button
        className="p-3 rounded-full bg-secondary text-white shadow-lg hover:bg-primary/90 transition duration-300"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat support"}
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </>
  );
};

export default ChatSupport;
