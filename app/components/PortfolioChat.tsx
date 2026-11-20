"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { answerPortfolioQuestion, type Reply } from "../portfolio-chat";

type Exchange = { question: string; reply: Reply };

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const transcript = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  useEffect(() => {
    const log = transcript.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [exchanges, open]);

  function close() {
    setOpen(false);
    launcher.current?.focus();
  }

  function ask(value: string) {
    const question = value.trim();
    if (!question) return;
    setExchanges((previous) => [...previous, { question, reply: answerPortfolioQuestion(question, previous.at(-1)?.reply) }]);
    setDraft("");
    input.current?.focus();
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  return (
    <div className="portfolio-chat" onKeyDown={(event) => {
      if (event.key === "Escape" && open) close();
    }}>
      {open && (
        <section id="portfolio-chat-panel" aria-labelledby="portfolio-chat-title" className="chat-panel">
          <div className="chat-header">
            <h2 id="portfolio-chat-title">Let’s talk about Nushara</h2>
            <button type="button" className="chat-close" onClick={close} aria-label="Close chat">×</button>
          </div>
          <div ref={transcript} role="log" aria-label="Conversation" className="chat-transcript">
            <p className="chat-reply">Ask me about Nushara’s experience, projects, or technical skills.</p>
            {exchanges.map(({ question, reply }, index) => (
              <div className="chat-exchange" key={index}>
                <p className="chat-question"><span className="sr-only">You: </span>{question}</p>
                <div className="chat-reply">
                  <p>{reply.text}</p>
                  {reply.link && <Link href={reply.link.href} onClick={() => setOpen(false)}>{reply.link.label}</Link>}
                  {reply.links && (
                    <ul>
                      {reply.links.map(({ href, label }) => (
                        <li key={href}><a href={href}>{label}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="portfolio-chat-input">Question about Nushara</label>
            <input id="portfolio-chat-input" ref={input} value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={300} placeholder="Ask a question…" />
            <button type="submit" className="button button-primary" disabled={!draft.trim()}>Send</button>
          </form>
        </section>
      )}
      <button ref={launcher} type="button" className="button button-primary chat-launcher" aria-label={open ? "Hide chat" : "Ask about Nushara"} title={open ? "Hide chat" : "Ask about Nushara"} aria-expanded={open} aria-controls={open ? "portfolio-chat-panel" : undefined} onClick={() => open ? close() : setOpen(true)}>
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.6-4.2A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8.5 11.5h.1m3.9 0h.1m3.9 0h.1" />
        </svg>
      </button>
    </div>
  );
}
