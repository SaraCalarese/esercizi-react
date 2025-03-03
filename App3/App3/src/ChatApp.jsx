import React, { useState, useRef, useEffect } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([]); // Stato per i messaggi
  const [newMessage, setNewMessage] = useState(""); // Stato per il nuovo messaggio
  const chatEndRef = useRef(null); // Riferimento per il scroll

  // Funzione per aggiungere un messaggio
  const sendMessage = () => {
    if (newMessage.trim() === "") return; // Non inviare se il messaggio è vuoto
    setMessages([...messages, newMessage]); // Aggiungi il nuovo messaggio
    setNewMessage(""); // Resetta il campo di input
  };

  // Scrolla automaticamente alla fine del chat quando ci sono nuovi messaggi
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Gestione della pressione del tasto Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
        {/* Riferimento per lo scroll */}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} // Aggiorna il messaggio
          onKeyDown={handleKeyDown} // Ascolta il tasto Enter
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
